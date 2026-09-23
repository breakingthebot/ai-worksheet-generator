// src/components/phonics/DictationGrid.jsx
// Lined handwriting grid and phoneme segmenting boxes for Orton-Gillingham decodable practice.
// Connects to: src/components/worksheet/WorksheetCanvas.jsx
// Created: 2026-09-22

import React from 'react';
import WorkspaceBox from '../common/WorkspaceBox.jsx';

export default function DictationGrid({ problem }) {
  const { number, word, phonemes = [], soundClues, prompt } = problem;
  const isSingleLetter = phonemes.length === 1;

  return (
    <WorkspaceBox
      title={isSingleLetter ? `Letter Sound #${number}: /${word}/` : `Word #${number}: "${word}"`}
      className="flex flex-col justify-between"
    >
      {/* Sound Clues for Kindergarten Pre-Readers */}
      {soundClues && soundClues.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 mb-2 p-2 bg-indigo-50/60 rounded-xl border border-indigo-100">
          <span className="text-[10px] font-black uppercase text-indigo-800">Sound Clues:</span>
          <div className="flex flex-wrap gap-2">
            {soundClues.map((clue, idx) => (
              <span
                key={idx}
                className="text-xs font-bold text-slate-800 bg-white px-2 py-0.5 rounded-lg border border-slate-200 shadow-2xs flex items-center gap-1"
              >
                <span>{clue.icon}</span>
                <span>{clue.label}</span>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Sound segmenting boxes (Elkonin boxes) */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-semibold text-slate-600 mr-1">
          {isSingleLetter ? 'Tap Sound:' : 'Tap Sounds:'}
        </span>
        <div className="flex border-2 border-slate-800 rounded-lg bg-slate-50 overflow-hidden">
          {phonemes.map((_, idx) => (
            <div
              key={`box-${idx}`}
              className="w-8 h-8 border-r-2 last:border-r-0 border-slate-800 flex items-center justify-center bg-white"
            >
              <div className="w-3 h-3 rounded-full bg-indigo-500 shadow-inner"></div>
            </div>
          ))}
        </div>
        <span className="text-xs text-slate-500 font-mono">
          ({phonemes.length} {phonemes.length === 1 ? 'sound' : 'sounds'})
        </span>
      </div>

      {/* Primary Handwriting Lines (Sky Blue Top, Dashed Red Fence, Slate Grassline) */}
      <div className="w-full h-16 border border-slate-300 rounded-xl bg-amber-50/20 p-2 relative flex flex-col justify-between shadow-2xs">
        {/* Top guide (Sky line) */}
        <div className="border-b border-blue-400 w-full"></div>
        {/* Dashed Midline (Fence) */}
        <div className="border-b border-dashed border-red-400 w-full"></div>
        {/* Baseline (Grass) */}
        <div className="border-b-2 border-slate-800 w-full"></div>
      </div>

      <div className="flex justify-between items-center mt-2 text-[11px] text-slate-500 font-medium">
        <span>{isSingleLetter ? 'Say sound / Trace & Write' : 'Tap sounds / Blend / Write'}</span>
        <span className="font-mono text-slate-400 select-none">Target: {word}</span>
      </div>
    </WorkspaceBox>
  );
}
