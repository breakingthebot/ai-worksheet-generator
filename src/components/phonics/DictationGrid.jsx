// src/components/phonics/DictationGrid.jsx
// Lined handwriting grid and phoneme segmenting boxes for Orton-Gillingham decodable practice.
// Connects to: src/components/worksheet/WorksheetCanvas.jsx
// Created: 2026-09-22

import React from 'react';
import WorkspaceBox from '../common/WorkspaceBox.jsx';

export default function DictationGrid({ problem }) {
  const { number, word, phonemes } = problem;

  return (
    <WorkspaceBox title={`Word #${number}`} className="flex flex-col">
      {/* Sound segmenting sound boxes (Elkonin boxes) */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-semibold text-slate-500 mr-1">Tap Sounds:</span>
        <div className="flex border-2 border-slate-800 rounded bg-slate-50">
          {phonemes.map((_, idx) => (
            <div
              key={`box-${idx}`}
              className="w-8 h-8 border-r-2 last:border-r-0 border-slate-800 flex items-center justify-center"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
            </div>
          ))}
        </div>
        <span className="text-xs text-slate-400 font-mono">({phonemes.length} sounds)</span>
      </div>

      {/* Lined Handwriting Area (Top line, dashed midline, solid baseline) */}
      <div className="w-full h-14 border border-slate-300 rounded bg-amber-50/20 p-2 relative flex flex-col justify-between">
        {/* Top guide */}
        <div className="border-b border-blue-300 w-full"></div>
        {/* Dashed Midline */}
        <div className="border-b border-dashed border-red-300 w-full"></div>
        {/* Baseline */}
        <div className="border-b-2 border-slate-700 w-full"></div>
      </div>

      <div className="flex justify-between items-center mt-2 text-[11px] text-slate-400">
        <span>Say sound / Blend / Write</span>
        <span className="font-mono text-slate-300 select-none">Target: {word}</span>
      </div>
    </WorkspaceBox>
  );
}
