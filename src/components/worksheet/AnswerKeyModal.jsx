// src/components/worksheet/AnswerKeyModal.jsx
// Teacher Answer Key and Rubric companion viewer and printer.
// Connects to: src/App.jsx
// Created: 2026-09-22

import React from 'react';
import { X, Printer, CheckCircle } from 'lucide-react';

export default function AnswerKeyModal({ isOpen, onClose, worksheet }) {
  if (!isOpen || !worksheet) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b border-slate-200 pb-4 mb-4">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-emerald-600" />
            <h2 className="text-lg font-bold text-slate-900">Teacher Answer Key & Rubric</h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              Print Key
            </button>
            <button
              onClick={onClose}
              className="p-1.5 hover:bg-slate-100 text-slate-400 hover:text-slate-600 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto pr-2 space-y-3 flex-1">
          <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-lg text-xs text-emerald-800 font-medium">
            Worksheet: <span className="font-bold">{worksheet.title}</span> ({worksheet.framework})
          </div>

          <div className="divide-y divide-slate-100 border border-slate-200 rounded-lg">
            {worksheet.answerKey.map((item) => (
              <div key={item.number} className="p-3 flex items-start gap-3 text-xs sm:text-sm">
                <span className="font-bold text-slate-800 min-w-[28px]">#{item.number}:</span>
                <span className="text-slate-700 font-medium">{item.solution}</span>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg text-xs text-slate-600 mt-4">
            <span className="font-bold uppercase tracking-wider block text-slate-500 mb-1">Pedagogical Rubric & Notes</span>
            <p>
              Students should demonstrate conceptual accuracy in subitizing or decodable phoneme mapping.
              Encourage students to articulate their reasoning (e.g. "I see 5 on top and 2 below, so 5 and 2 is 7").
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
