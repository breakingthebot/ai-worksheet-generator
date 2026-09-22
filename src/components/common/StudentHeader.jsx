// src/components/common/StudentHeader.jsx
// Printable student information header block.
// Connects to: src/components/worksheet/WorksheetCanvas.jsx
// Created: 2026-09-22

import React from 'react';

export default function StudentHeader({ title, framework }) {
  return (
    <header className="border-b-2 border-slate-800 pb-4 mb-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">{title}</h1>
          {framework && (
            <p className="text-xs text-slate-500 font-medium tracking-wide uppercase mt-0.5">
              Standard: {framework}
            </p>
          )}
        </div>
        <div className="border border-slate-300 rounded px-3 py-1 bg-slate-50 text-right min-w-[90px]">
          <span className="text-[10px] text-slate-400 font-semibold block uppercase">Score</span>
          <span className="text-sm font-bold text-slate-700">______ / 100</span>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-3 text-xs font-semibold text-slate-600 pt-2 border-t border-slate-200">
        <div className="col-span-5 flex items-end">
          <span className="mr-2 text-slate-500">Name:</span>
          <span className="flex-1 border-b border-dotted border-slate-400"></span>
        </div>
        <div className="col-span-4 flex items-end">
          <span className="mr-2 text-slate-500">Date:</span>
          <span className="flex-1 border-b border-dotted border-slate-400"></span>
        </div>
        <div className="col-span-3 flex items-end">
          <span className="mr-2 text-slate-500">Class:</span>
          <span className="flex-1 border-b border-dotted border-slate-400"></span>
        </div>
      </div>
    </header>
  );
}
