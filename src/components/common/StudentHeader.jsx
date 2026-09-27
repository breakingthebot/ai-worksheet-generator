// src/components/common/StudentHeader.jsx
// Printable student information header block.
// Connects to: src/components/worksheet/WorksheetCanvas.jsx
// Created: 2026-09-22

import React from 'react';

export default function StudentHeader({ title, framework }) {
  return (
    <header className="border-b-2 border-slate-800 pb-3 mb-5">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-2.5">
        <div>
          <h1 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">{title}</h1>
          {framework && (
            <p className="text-[11px] text-slate-500 font-bold tracking-wide uppercase mt-0.5">
              Standard: {framework}
            </p>
          )}
        </div>
        {/* Kid-Friendly Star Reward Box */}
        <div className="border-2 border-amber-300 rounded-xl px-3 py-1 bg-amber-50/80 text-center min-w-[110px] select-none">
          <span className="text-[10px] font-black text-amber-800 uppercase block tracking-wider">Color My Stars!</span>
          <div className="flex items-center justify-center gap-1 text-base text-amber-400">
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-bold text-slate-700 pt-2 border-t border-slate-200">
        <div className="flex-1 min-w-[200px] flex items-end">
          <span className="mr-2 text-indigo-900 font-extrabold flex items-center gap-1">
            <span>✏️</span> Star Student:
          </span>
          <span className="flex-1 border-b-2 border-dashed border-indigo-200 h-5"></span>
        </div>
        <div className="w-48 flex items-end">
          <span className="mr-2 text-slate-500 font-bold flex items-center gap-1">
            <span>📅</span> Date:
          </span>
          <span className="flex-1 border-b-2 border-dashed border-slate-300 h-5"></span>
        </div>
      </div>
    </header>
  );
}
