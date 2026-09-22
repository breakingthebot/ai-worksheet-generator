// src/components/traditional/WordProblemCard.jsx
// Traditional story word problem card with workspace and sentence answer line.
// Connects to: src/components/worksheet/WorksheetCanvas.jsx
// Created: 2026-09-22

import React from 'react';

export default function WordProblemCard({ problem }) {
  const { number, story, prompt, label = 'Word Problem' } = problem;

  return (
    <div className="border border-slate-300 rounded-xl p-4 bg-white shadow-xs space-y-3 break-inside-avoid">
      <div className="flex justify-between items-center border-b border-slate-200 pb-1.5">
        <span className="text-xs font-black uppercase tracking-wider text-indigo-900">
          Problem #{number} • {label}
        </span>
        <span className="text-[10px] text-slate-400 font-semibold">Show Your Work</span>
      </div>

      {/* Story Text */}
      <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
        {story}
      </p>

      {prompt && (
        <p className="text-xs text-slate-600 italic">
          {prompt}
        </p>
      )}

      {/* Two-Column Working Area (Left: Scratchpad / Drawing; Right: Equation & Answer) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
        {/* Scratchpad */}
        <div className="border-2 border-dashed border-slate-200 rounded-lg p-2.5 h-20 bg-slate-50/50 flex flex-col justify-between">
          <span className="text-[9px] uppercase tracking-wider font-bold text-slate-400">
            Scratchpad / Drawing Zone
          </span>
        </div>

        {/* Answer Lines */}
        <div className="flex flex-col justify-around border border-slate-200 rounded-lg p-2.5 bg-slate-50/30">
          <div className="flex items-center text-xs text-slate-700">
            <span className="font-bold mr-2">Equation:</span>
            <span className="flex-1 border-b border-dotted border-slate-400"></span>
          </div>
          <div className="flex items-center text-xs text-slate-700 mt-2">
            <span className="font-bold mr-2">Answer:</span>
            <span className="flex-1 border-b-2 border-slate-800"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
