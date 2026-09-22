// src/components/math/TenFrameView.jsx
// Visual 2x5 grid component for ten-frames subitizing and base-10 anchoring.
// Connects to: src/components/worksheet/WorksheetCanvas.jsx
// Created: 2026-09-22

import React from 'react';
import WorkspaceBox from '../common/WorkspaceBox.jsx';

export default function TenFrameView({ problem }) {
  const { number, topRow, bottomRow, count, complement } = problem;

  return (
    <WorkspaceBox title={`Problem #${number}`} className="flex flex-col items-center">
      {/* 2x5 Grid */}
      <div className="border-2 border-slate-900 rounded inline-block bg-white my-2">
        {/* Top Row: 5 cells */}
        <div className="flex border-b-2 border-slate-900">
          {topRow.map((filled, idx) => (
            <div
              key={`top-${idx}`}
              className="w-10 h-10 border-r-2 last:border-r-0 border-slate-900 flex items-center justify-center bg-slate-50"
            >
              {filled && (
                <div className="w-6 h-6 rounded-full bg-slate-900 shadow-inner"></div>
              )}
            </div>
          ))}
        </div>
        {/* Bottom Row: 5 cells */}
        <div className="flex">
          {bottomRow.map((filled, idx) => (
            <div
              key={`bot-${idx}`}
              className="w-10 h-10 border-r-2 last:border-r-0 border-slate-900 flex items-center justify-center bg-slate-50"
            >
              {filled && (
                <div className="w-6 h-6 rounded-full bg-slate-900 shadow-inner"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Structured student prompt */}
      <div className="mt-3 text-center text-sm font-semibold text-slate-800">
        <span>How many dots? </span>
        <span className="inline-block border-b-2 border-slate-800 w-8 text-center"></span>
        <span className="ml-3">How many more to make 10? </span>
        <span className="inline-block border-b-2 border-slate-800 w-8 text-center"></span>
      </div>

      <div className="mt-2 text-xs font-mono text-slate-500">
        Equation: _____ + _____ = 10
      </div>
    </WorkspaceBox>
  );
}
