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
        <div className="flex-1 min-w-[220px] flex items-center gap-2">
          <span className="text-indigo-950 font-black text-xs shrink-0 flex items-center gap-1">
            <span>✏️</span> Star Student:
          </span>
          <div className="relative h-7 flex-1 border-t border-b border-slate-700 bg-white shadow-2xs">
            {/* Top Headline */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-sky-500/80" />
            {/* Dashed Midline */}
            <div className="absolute top-[13px] left-0 right-0 border-b border-dashed border-rose-300" />
            {/* Baseline */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-slate-900" />
            {/* Green Starter Dot */}
            <div
              className="absolute left-2 top-[13px] w-2 h-2 rounded-full bg-emerald-500 z-10 -translate-y-1/2"
              title="Start pencil here"
            />
          </div>
        </div>
        <div className="w-48 flex items-center gap-2">
          <span className="text-slate-600 font-bold text-xs shrink-0 flex items-center gap-1">
            <span>📅</span> Date:
          </span>
          <div className="relative h-7 flex-1 border-t border-b border-slate-400 bg-white">
            <div className="absolute top-[13px] left-0 right-0 border-b border-dashed border-slate-300" />
            <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-slate-700" />
          </div>
        </div>
      </div>
    </header>
  );
}
