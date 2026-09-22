// src/App.jsx
// Main application layout uniting the curriculum control sidebar and live printable worksheet canvas.
// Connects to: src/components/controls/ControlPanel.jsx, src/components/worksheet/WorksheetCanvas.jsx
// Created: 2026-09-22

import React, { useState, useEffect } from 'react';
import ControlPanel from './components/controls/ControlPanel.jsx';
import WorksheetCanvas from './components/worksheet/WorksheetCanvas.jsx';
import AnswerKeyModal from './components/worksheet/AnswerKeyModal.jsx';
import { generateWorksheetWithAI } from './services/aiGenerator.js';

export default function App() {
  const [config, setConfig] = useState({
    subject: 'math',
    grade: 'K',
    format: 'ten-frame',
    count: 4,
  });

  const [worksheet, setWorksheet] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isAnswerKeyOpen, setIsAnswerKeyOpen] = useState(false);

  // Generate an initial compliant worksheet on mount
  useEffect(() => {
    handleGenerate();
  }, []);

  const handleGenerate = async () => {
    setIsGenerating(true);
    try {
      const generated = await generateWorksheetWithAI(config);
      setWorksheet(generated);
    } catch (err) {
      console.error('Worksheet generation error:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      {/* Top Navigation Bar */}
      <header className="bg-white border-b border-slate-200 px-6 py-3.5 flex justify-between items-center shadow-xs no-print">
        <div className="flex items-center gap-3">
          <span className="font-extrabold text-indigo-700 tracking-tight text-lg">
            AI-Worksheet Generator
          </span>
          <span className="hidden sm:inline-block text-xs bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-full font-medium border border-slate-200">
            K-12 Curriculum Blueprint
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
          <span className="hidden md:inline">Printable Letter (8.5×11) Format</span>
        </div>
      </header>

      {/* Main Workspace (Two-Pane Layout) */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row gap-8 items-start">
        {/* Controls Sidebar */}
        <ControlPanel
          config={config}
          onChangeConfig={setConfig}
          onGenerate={handleGenerate}
          onOpenAnswerKey={() => setIsAnswerKeyOpen(true)}
          isGenerating={isGenerating}
        />

        {/* Live Printable Canvas */}
        <section className="flex-1 w-full overflow-x-auto pb-8">
          <WorksheetCanvas worksheet={worksheet} />
        </section>
      </main>

      {/* Teacher Answer Key Modal */}
      <AnswerKeyModal
        isOpen={isAnswerKeyOpen}
        onClose={() => setIsAnswerKeyOpen(false)}
        worksheet={worksheet}
      />
    </div>
  );
}
