// src/components/traditional/ReadingPassageView.jsx
// Traditional Reading Comprehension passage with line numbers, multiple choice bubbles, and evidence lines.
// Connects to: src/components/worksheet/WorksheetCanvas.jsx
// Created: 2026-09-22

import React from 'react';
import { BookOpen, HelpCircle } from 'lucide-react';

export default function ReadingPassageView({ passageData }) {
  if (!passageData) return null;

  const { title, genre = 'Informational Text', paragraphs = [], vocabularyBank = [], questions = [] } = passageData;

  return (
    <div className="space-y-6 mb-6">
      {/* Passage Card */}
      <div className="border-2 border-slate-300 rounded-2xl p-5 sm:p-6 bg-slate-50/50 shadow-xs space-y-4">
        <div className="flex justify-between items-center border-b border-slate-300 pb-2">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-indigo-700" />
            <h3 className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight">{title}</h3>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded-full">
            {genre}
          </span>
        </div>

        {/* Text Paragraphs with Line Numbers */}
        <div className="space-y-3 font-serif text-xs sm:text-sm text-slate-800 leading-relaxed pr-2">
          {paragraphs.map((p, idx) => (
            <div key={idx} className="flex gap-3">
              <span className="text-[10px] font-mono text-slate-400 select-none pt-0.5 w-4 text-right shrink-0">
                {idx * 5 + 1}
              </span>
              <p className="indent-4 flex-1">{p}</p>
            </div>
          ))}
        </div>

        {/* Vocabulary Word Bank */}
        {vocabularyBank && vocabularyBank.length > 0 && (
          <div className="pt-3 border-t border-slate-200 flex flex-wrap items-center gap-2 text-xs">
            <span className="font-bold text-slate-700 uppercase tracking-wide text-[10px]">Vocabulary Focus:</span>
            {vocabularyBank.map((item, i) => (
              <span key={i} className="bg-white border border-slate-300 px-2 py-0.5 rounded text-[11px] font-semibold text-slate-700 shadow-xs">
                <span className="font-bold text-indigo-900">{item.word}</span>
                {item.definition && <span className="text-slate-500 ml-1">({item.definition})</span>}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Comprehension Questions */}
      {questions && questions.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-1.5 border-b border-slate-300 pb-1">
            <HelpCircle className="w-3.5 h-3.5 text-slate-500" />
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-800">
              Reading Comprehension Questions
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {questions.map((q) => (
              <div key={q.number} className="border border-slate-300 rounded-xl p-3.5 bg-white shadow-xs space-y-2 break-inside-avoid">
                <p className="text-xs font-bold text-slate-900 leading-snug">
                  <span className="text-indigo-800 mr-1">#{q.number}.</span> {q.question}
                </p>

                {/* Multiple Choice Options */}
                {q.options && (
                  <div className="space-y-1.5 pt-1">
                    {q.options.map((opt, oIdx) => {
                      const letter = String.fromCharCode(65 + oIdx);
                      return (
                        <div key={oIdx} className="flex items-center gap-2 text-xs text-slate-700">
                          <span className="w-4 h-4 rounded-full border border-slate-600 flex items-center justify-center text-[9px] font-bold select-none shrink-0">
                            {letter}
                          </span>
                          <span className="leading-tight">{opt}</span>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Written Response Line */}
                {q.type === 'written' && (
                  <div className="space-y-2 pt-2">
                    <div className="border-b border-slate-300 w-full h-4"></div>
                    <div className="border-b border-slate-300 w-full h-4"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
