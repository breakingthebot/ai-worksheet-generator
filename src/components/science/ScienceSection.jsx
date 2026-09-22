// src/components/science/ScienceSection.jsx
// Renders Core Knowledge and NGSS 3D Inquiry problems and observational tables.
// Connects to: src/components/worksheet/WorksheetCanvas.jsx
// Created: 2026-09-22

import React from 'react';
import WorkspaceBox from '../common/WorkspaceBox.jsx';

export default function ScienceSection({ problem }) {
  const { number, item, question, scenario, prompt, options } = problem;

  return (
    <WorkspaceBox title={`Item #${number}`} className="flex flex-col">
      {scenario && (
        <p className="text-xs text-slate-600 italic mb-2 bg-slate-50 p-2 rounded border border-slate-200">
          Context: {scenario}
        </p>
      )}

      {item && (
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-bold text-slate-900">{item}</span>
          <div className="flex gap-2">
            <label className="flex items-center gap-1 text-xs border border-slate-300 px-2 py-0.5 rounded cursor-pointer hover:bg-slate-50">
              <input type="checkbox" className="rounded" /> Living
            </label>
            <label className="flex items-center gap-1 text-xs border border-slate-300 px-2 py-0.5 rounded cursor-pointer hover:bg-slate-50">
              <input type="checkbox" className="rounded" /> Non-Living
            </label>
          </div>
        </div>
      )}

      {question && <p className="text-xs text-slate-700 font-medium mb-2">{question}</p>}

      {prompt && <p className="text-xs text-slate-800 font-semibold mb-2">{prompt}</p>}

      {options && (
        <div className="grid grid-cols-2 gap-1.5 mt-1">
          {options.map((opt, i) => (
            <div key={i} className="flex items-center gap-1.5 text-xs text-slate-700 border border-slate-200 p-1.5 rounded">
              <div className="w-3.5 h-3.5 rounded-full border border-slate-400"></div>
              <span>{opt}</span>
            </div>
          ))}
        </div>
      )}

      {/* Observation notes box */}
      <div className="mt-3 pt-2 border-t border-dotted border-slate-300 flex items-center justify-between text-[11px] text-slate-400">
        <span>Scientific Reason: _________________________________________________</span>
      </div>
    </WorkspaceBox>
  );
}
