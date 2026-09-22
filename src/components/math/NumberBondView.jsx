// src/components/math/NumberBondView.jsx
// Visual branching part-whole diagram for Singapore Math CPA method.
// Connects to: src/components/worksheet/WorksheetCanvas.jsx
// Created: 2026-09-22

import React from 'react';
import WorkspaceBox from '../common/WorkspaceBox.jsx';

export default function NumberBondView({ problem }) {
  const { number, whole, partA, partB, missingItem } = problem;

  return (
    <WorkspaceBox title={`Problem #${number}`} className="flex flex-col items-center">
      {/* SVG-based branching bond diagram */}
      <div className="relative w-44 h-36 flex flex-col items-center justify-between my-1">
        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 176 144">
          <line x1="88" y1="36" x2="44" y2="108" stroke="#1e293b" strokeWidth="2.5" />
          <line x1="88" y1="36" x2="132" y2="108" stroke="#1e293b" strokeWidth="2.5" />
        </svg>

        {/* Whole (Top Circle) */}
        <div className="z-10 w-14 h-14 rounded-full border-2 border-slate-900 bg-white flex items-center justify-center font-bold text-lg text-slate-800 shadow-sm">
          {missingItem === 'whole' ? '?' : whole}
        </div>

        {/* Parts (Bottom Row) */}
        <div className="z-10 flex justify-between w-full px-4">
          {/* Part A */}
          <div className="w-13 h-13 min-w-[50px] min-h-[50px] rounded-full border-2 border-slate-900 bg-white flex items-center justify-center font-bold text-base text-slate-800 shadow-sm">
            {missingItem === 'partA' ? '?' : partA}
          </div>

          {/* Part B */}
          <div className="w-13 h-13 min-w-[50px] min-h-[50px] rounded-full border-2 border-slate-900 bg-white flex items-center justify-center font-bold text-base text-slate-800 shadow-sm">
            {missingItem === 'partB' ? '?' : partB}
          </div>
        </div>
      </div>

      {/* Addition & Subtraction fact family scaffolding */}
      <div className="mt-2 text-xs font-mono text-slate-600">
        <span>Fact: </span>
        <span className="font-semibold">
          {missingItem === 'whole' ? `_____ = ${partA} + ${partB}` : `${whole} = ${missingItem === 'partA' ? '___' : partA} + ${missingItem === 'partB' ? '___' : partB}`}
        </span>
      </div>
    </WorkspaceBox>
  );
}
