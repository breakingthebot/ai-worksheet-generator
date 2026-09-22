// src/components/worksheet/WorksheetCanvas.jsx
// Printable 8.5x11 (Letter) worksheet page container with print media styles.
// Connects to: src/components/common/StudentHeader.jsx, src/components/ergonomics/ScissorCutStrip.jsx
// Created: 2026-09-22

import React from 'react';
import StudentHeader from '../common/StudentHeader.jsx';
import TenFrameView from '../math/TenFrameView.jsx';
import NumberBondView from '../math/NumberBondView.jsx';
import DictationGrid from '../phonics/DictationGrid.jsx';
import ScienceSection from '../science/ScienceSection.jsx';
import ScissorCutStrip from '../ergonomics/ScissorCutStrip.jsx';

export default function WorksheetCanvas({ worksheet }) {
  if (!worksheet) return null;

  const { title, framework, instructions, problems, cutStrip, nonsenseDrill } = worksheet;

  return (
    <div className="print-page w-full max-w-[800px] min-h-[1050px] bg-white rounded-xl shadow-lg border border-slate-200 p-8 sm:p-12 mx-auto flex flex-col justify-between transition-all">
      <div>
        {/* Top Header */}
        <StudentHeader title={title} framework={framework} />

        {/* Instructions Block */}
        <div className="bg-slate-50 border-l-4 border-slate-800 p-3 mb-6 rounded-r">
          <p className="text-xs sm:text-sm font-semibold text-slate-800">
            <span className="font-bold uppercase tracking-wide mr-1">Instructions:</span>
            {instructions}
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {problems.map((problem) => {
            if (problem.type === 'ten-frame') {
              return <TenFrameView key={problem.id} problem={problem} />;
            }
            if (problem.type === 'number-bond') {
              return <NumberBondView key={problem.id} problem={problem} />;
            }
            if (problem.type === 'phonics-dictation') {
              return <DictationGrid key={problem.id} problem={problem} />;
            }
            if (problem.type === 'science-classification' || problem.type === 'science-inquiry') {
              return <ScienceSection key={problem.id} problem={problem} />;
            }
            return (
              <div key={problem.id} className="border p-3 rounded">
                <span className="font-bold">#{problem.number}: </span>
                {problem.prompt || problem.word || problem.item}
              </div>
            );
          })}
        </div>

        {/* Optional Nonsense Word Drill for Phonics */}
        {nonsenseDrill && (
          <div className="mt-6 p-4 border-2 border-dashed border-amber-300 bg-amber-50/50 rounded-lg">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-2">
              {nonsenseDrill.instructions}
            </h4>
            <div className="flex gap-4 justify-around">
              {nonsenseDrill.words.map((w, i) => (
                <span key={i} className="font-mono text-base font-bold text-amber-950 bg-white px-3 py-1 rounded border border-amber-200 shadow-sm">
                  {w}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div>
        {/* Developmental Scissor Cut Strip */}
        <ScissorCutStrip cutStrip={cutStrip} />

        {/* Page Footer */}
        <footer className="mt-6 pt-3 border-t border-slate-200 flex justify-between items-center text-[10px] text-slate-400">
          <span>AI-Worksheet Generator — Evidence-Based Pedagogical Standards</span>
          <span>Page 1 of 1</span>
        </footer>
      </div>
    </div>
  );
}
