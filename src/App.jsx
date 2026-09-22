// src/App.jsx
// Main application uniting the Curriculum Roadmap, Printable Worksheet Studio, and Local Notes Storage.
// Connects to: src/components/controls/ControlPanel.jsx, src/components/roadmap/RoadmapView.jsx
// Created: 2026-09-22

import React, { useState, useEffect } from 'react';
import ControlPanel from './components/controls/ControlPanel.jsx';
import WorksheetCanvas from './components/worksheet/WorksheetCanvas.jsx';
import RoadmapView from './components/roadmap/RoadmapView.jsx';
import SessionNotesDrawer from './components/notes/SessionNotesDrawer.jsx';
import AnswerKeyModal from './components/worksheet/AnswerKeyModal.jsx';
import { getWorksheetById, getAllWorksheets } from './data/worksheets.js';
import { getMilestoneById } from './domain/curriculum/roadmap.js';

export default function App() {
  const [activeView, setActiveView] = useState('worksheet'); // 'worksheet' | 'roadmap'
  const [activeWorksheetId, setActiveWorksheetId] = useState('ws-math-tenframe-complements');
  const [isNotesDrawerOpen, setIsNotesDrawerOpen] = useState(false);
  const [isAnswerKeyOpen, setIsAnswerKeyOpen] = useState(false);
  const [activeMilestone, setActiveMilestone] = useState(null);
  const [progressData, setProgressData] = useState({ sessions: [], milestoneStatus: {} });

  const activeWorksheet = getWorksheetById(activeWorksheetId);

  // Load progress notes on mount
  useEffect(() => {
    loadProgress();
  }, []);

  const loadProgress = async () => {
    try {
      const res = await fetch('/api/progress');
      if (res.ok) {
        const data = await res.json();
        setProgressData(data);
      }
    } catch (err) {
      console.warn('Could not load student progress from disk:', err);
    }
  };

  const handleSaveProgress = async (newPayload) => {
    try {
      const res = await fetch('/api/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPayload, null, 2),
      });
      if (res.ok) {
        setProgressData(newPayload);
      }
    } catch (err) {
      console.error('Failed to save progress to disk:', err);
    }
  };

  const handleSelectWorksheetFromRoadmap = (wsId) => {
    setActiveWorksheetId(wsId);
    setActiveView('worksheet');
  };

  const handleOpenNotesForMilestone = (milestone) => {
    setActiveMilestone(milestone);
    setIsNotesDrawerOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col text-slate-900">
      {/* Top Navigation */}
      <header className="bg-white border-b border-slate-200 px-6 py-3.5 flex justify-between items-center shadow-xs no-print">
        <div className="flex items-center gap-3">
          <span className="font-black text-indigo-700 tracking-tight text-lg">
            AI-Worksheet Studio
          </span>
          <span className="hidden sm:inline-block text-xs bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded-full font-bold border border-indigo-200">
            K-1 Curriculum & Developmental Engine
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
          <span className="hidden md:inline">Printable Letter (8.5×11) Format</span>
          <button
            onClick={() => setIsNotesDrawerOpen(true)}
            className="px-3 py-1.5 bg-indigo-50 text-indigo-700 font-bold rounded-lg border border-indigo-200 hover:bg-indigo-100 transition-colors"
          >
            ✏️ Child Log ({progressData.sessions?.length || 0})
          </button>
        </div>
      </header>

      {/* Main Two-Pane Workspace */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row gap-8 items-start">
        {/* Controls / Library Sidebar */}
        <ControlPanel
          activeWorksheetId={activeWorksheetId}
          onSelectWorksheet={setActiveWorksheetId}
          activeView={activeView}
          onChangeView={setActiveView}
          onOpenNotes={() => {
            const linkedMilestone = getMilestoneById(activeWorksheet.milestoneId);
            setActiveMilestone(linkedMilestone || null);
            setIsNotesDrawerOpen(true);
          }}
          onOpenAnswerKey={() => setIsAnswerKeyOpen(true)}
          progressData={progressData}
        />

        {/* Dynamic Content Pane */}
        <section className="flex-1 w-full overflow-x-auto pb-8">
          {activeView === 'worksheet' ? (
            <WorksheetCanvas worksheet={activeWorksheet} />
          ) : (
            <RoadmapView
              onSelectWorksheet={handleSelectWorksheetFromRoadmap}
              onOpenNotes={handleOpenNotesForMilestone}
              milestoneStatus={progressData.milestoneStatus}
            />
          )}
        </section>
      </main>

      {/* Modals */}
      <SessionNotesDrawer
        isOpen={isNotesDrawerOpen}
        onClose={() => setIsNotesDrawerOpen(false)}
        activeMilestone={activeMilestone || getMilestoneById(activeWorksheet?.milestoneId)}
        progressData={progressData}
        onSaveProgress={handleSaveProgress}
      />

      <AnswerKeyModal
        isOpen={isAnswerKeyOpen}
        onClose={() => setIsAnswerKeyOpen(false)}
        worksheet={activeWorksheet}
      />
    </div>
  );
}
