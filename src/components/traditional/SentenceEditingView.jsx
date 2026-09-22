// src/components/traditional/SentenceEditingView.jsx
// Traditional grammar and mechanics editing sheet (Find errors, rewrite correctly).
// Connects to: src/components/worksheet/WorksheetCanvas.jsx
// Created: 2026-09-22

import React from 'react';

export default function SentenceEditingView({ editingData }) {
  if (!editingData) return null;

  const { title = 'Section: Sentence Mechanics & Editing', instructions = 'Find the errors in each sentence (capital letters, punctuation, spelling). Rewrite the sentence correctly on the line below.', sentences = [] } = editingData;

  return (
    <div className="border border-slate-300 rounded-xl p-4 bg-white shadow-xs space-y-3 mb-6 break-inside-avoid">
      <div className="border-b border-slate-200 pb-1.5 flex justify-between items-center">
        <h4 className="text-xs font-black uppercase tracking-wider text-slate-800">{title}</h4>
        <span className="text-[10px] text-slate-400">Capitalize & Punctuate</span>
      </div>

      <p className="text-xs text-slate-600 italic">{instructions}</p>

      <div className="space-y-4 pt-1">
        {sentences.map((item, idx) => (
          <div key={idx} className="space-y-1.5 border border-slate-200 rounded-lg p-3 bg-slate-50/50">
            <div className="flex items-start gap-2 text-xs">
              <span className="font-bold text-indigo-900">#{idx + 1}.</span>
              <span className="font-mono text-slate-800 font-semibold">{item.incorrect}</span>
            </div>

            {/* Handwriting rewrite line */}
            <div className="pt-2">
              <div className="border-b-2 border-slate-700 w-full h-5"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
