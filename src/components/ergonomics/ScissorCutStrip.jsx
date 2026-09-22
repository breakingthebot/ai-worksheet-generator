// src/components/ergonomics/ScissorCutStrip.jsx
// Bottom-of-page scissor cut strip complying with pediatric occupational therapy fine motor guidelines.
// Connects to: src/components/worksheet/WorksheetCanvas.jsx
// Created: 2026-09-22

import React from 'react';
import { Scissors } from 'lucide-react';

export default function ScissorCutStrip({ cutStrip }) {
  if (!cutStrip || !cutStrip.items?.length) return null;

  return (
    <div className="mt-8 pt-4 border-t-4 border-dashed border-slate-700 relative break-inside-avoid">
      {/* Scissor icon and developmental guideline indicator */}
      <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-2">
        <div className="flex items-center gap-1.5">
          <Scissors className="w-4 h-4 text-slate-900" />
          <span>Cut along dashed line:</span>
        </div>
        <span className="text-[10px] text-slate-500 font-normal uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded">
          {cutStrip.stage || 'Pediatric Motor Progression: Bottom-Edge Cut'}
        </span>
      </div>

      {/* Straight cut tiles */}
      <div className="grid grid-cols-6 gap-2">
        {cutStrip.items.map((item, idx) => (
          <div
            key={`cut-item-${idx}`}
            className="border-2 border-dashed border-slate-800 rounded p-2 text-center bg-slate-50 font-bold text-sm text-slate-800 shadow-sm"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
