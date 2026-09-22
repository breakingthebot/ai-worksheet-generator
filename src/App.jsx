// src/App.jsx
// Main application uniting the Daily Teaching Dashboard, Curriculum Roadmap, and Local Notes Storage.
// Connects to: src/components/daily/DailyDashboard.jsx, src/components/roadmap/RoadmapView.jsx
// Created: 2026-09-22

import React, { useState, useEffect } from 'react';
import DailyDashboard from './components/daily/DailyDashboard.jsx';
import CustomAdventureStudio from './components/custom/CustomAdventureStudio.jsx';
import ControlPanel from './components/controls/ControlPanel.jsx';
import WorksheetCanvas from './components/worksheet/WorksheetCanvas.jsx';
import RoadmapView from './components/roadmap/RoadmapView.jsx';
import SessionNotesDrawer from './components/notes/SessionNotesDrawer.jsx';
import AnswerKeyModal from './components/worksheet/AnswerKeyModal.jsx';
import { getWorksheetById, addCustomWorksheet } from './data/worksheets.js';
import { getMilestoneById } from './domain/curriculum/roadmap.js';
import { Calendar, BookOpen, Map, PenTool, Sparkles } from 'lucide-react';

export default function App() {
  const [activeView, setActiveView] = useState('daily'); // 'daily' | 'adventure' | 'worksheet' | 'roadmap'
  const [activeWorksheetId, setActiveWorksheetId] = useState('ws-math-tenframe-complements');
  const [isNotesDrawerOpen, setIsNotesDrawerOpen] = useState(false);
  const [isAnswerKeyOpen, setIsAnswerKeyOpen] = useState(false);
  const [activeMilestone, setActiveMilestone] = useState(null);

  const [progressData, setProgressData] = useState({
    studentDays: { math: 1, phonics: 1, science: 1 },
    sessions: [],
    milestoneStatus: {},
  });

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
        setProgressData({
          studentDays: data.studentDays || { math: 1, phonics: 1, science: 1 },
          sessions: data.sessions || [],
          milestoneStatus: data.milestoneStatus || {},
        });
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

  const handleUpdateStudentDay = async (subject, newDay) => {
    const updatedDays = {
      ...progressData.studentDays,
      [subject]: newDay,
    };
    const updatedPayload = {
      ...progressData,
      studentDays: updatedDays,
      lastUpdated: new Date().toISOString(),
    };
    await handleSaveProgress(updatedPayload);
  };

  const handleLogQuickNote = async ({ subject, day, title, note, date }) => {
    const newSession = {
      id: `quick-${Date.now()}`,
      date,
      subject,
      day,
      milestoneTitle: `${subject.toUpperCase()} Day ${day}: ${title}`,
      notes: note,
    };
    const updatedSessions = [newSession, ...(progressData.sessions || [])];
    const updatedPayload = {
      ...progressData,
      sessions: updatedSessions,
      lastUpdated: new Date().toISOString(),
    };
    await handleSaveProgress(updatedPayload);
  };

  const handleSelectWorksheetFromRoadmap = (wsId) => {
    setActiveWorksheetId(wsId);
    setActiveView('worksheet');
  };

  const handleOpenNotesForMilestone = (milestone) => {
    setActiveMilestone(milestone);
    setIsNotesDrawerOpen(true);
  };

  const handleSaveCustomToLibrary = (customSheet) => {
    addCustomWorksheet(customSheet);
    setActiveWorksheetId(customSheet.id);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col text-slate-900 font-sans">
      {/* Top Navigation */}
      <header className="bg-white border-b border-slate-200 px-6 py-3.5 flex flex-wrap justify-between items-center gap-3 shadow-xs no-print">
        <div className="flex items-center gap-3">
          <span className="font-black text-indigo-700 tracking-tight text-lg">
            AI-Worksheet Studio
          </span>
          <span className="hidden sm:inline-block text-xs bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded-full font-bold border border-indigo-200">
            Daily Zero-Friction Teaching
          </span>
        </div>

        {/* View Switcher Pills */}
        <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl border border-slate-200">
          <button
            onClick={() => setActiveView('daily')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeView === 'daily'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            Today's Lesson
          </button>
          <button
            onClick={() => setActiveView('adventure')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeView === 'adventure'
                ? 'bg-gradient-to-r from-indigo-600 to-pink-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Custom Adventure
          </button>
          <button
            onClick={() => setActiveView('worksheet')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeView === 'worksheet'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            Library Canvas
          </button>
          <button
            onClick={() => setActiveView('roadmap')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeView === 'roadmap'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Map className="w-3.5 h-3.5" />
            Full Roadmap
          </button>
        </div>

        {/* Child Notes Indicator */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsNotesDrawerOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 text-indigo-700 font-bold text-xs rounded-lg border border-indigo-200 hover:bg-indigo-100 transition-colors"
          >
            <PenTool className="w-3.5 h-3.5" />
            Child Notes ({progressData.sessions?.length || 0})
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        {activeView === 'daily' && (
          <DailyDashboard
            studentDays={progressData.studentDays}
            onUpdateDay={handleUpdateStudentDay}
            onLogQuickNote={handleLogQuickNote}
          />
        )}

        {activeView === 'adventure' && (
          <CustomAdventureStudio onSaveToLibrary={handleSaveCustomToLibrary} />
        )}

        {activeView === 'worksheet' && (
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <ControlPanel
              activeWorksheetId={activeWorksheetId}
              onSelectWorksheet={setActiveWorksheetId}
              activeView={activeView}
              onChangeView={setActiveView}
              onOpenNotes={() => {
                const linked = getMilestoneById(activeWorksheet.milestoneId);
                setActiveMilestone(linked || null);
                setIsNotesDrawerOpen(true);
              }}
              onOpenAnswerKey={() => setIsAnswerKeyOpen(true)}
              progressData={progressData}
            />
            <section className="flex-1 w-full overflow-x-auto pb-8">
              <WorksheetCanvas worksheet={activeWorksheet} />
            </section>
          </div>
        )}

        {activeView === 'roadmap' && (
          <RoadmapView
            onSelectWorksheet={handleSelectWorksheetFromRoadmap}
            onOpenNotes={handleOpenNotesForMilestone}
            milestoneStatus={progressData.milestoneStatus}
          />
        )}
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
