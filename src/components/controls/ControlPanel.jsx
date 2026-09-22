// src/components/controls/ControlPanel.jsx
// Left sidebar navigation uniting the Curated Catalog, Format Filters, and Print actions.
// Connects to: src/data/worksheets.js, src/App.jsx
// Created: 2026-09-22

import React, { useState } from 'react';
import { Printer, BookOpen, Key, Brain, Map, PenTool } from 'lucide-react';
import { getAllWorksheets } from '../../data/worksheets.js';

export default function ControlPanel({
  activeWorksheetId,
  onSelectWorksheet,
  activeView,
  onChangeView,
  onOpenNotes,
  onOpenAnswerKey,
  progressData = {},
}) {
  const [formatFilter, setFormatFilter] = useState('all'); // 'all' | 'traditional' | 'cpa'
  const allSheets = getAllWorksheets();
  const sessionCount = progressData.sessions?.length || 0;

  const filteredSheets = allSheets.filter((s) => {
    if (formatFilter === 'traditional') {
      return s.id.startsWith('ws-trad-');
    }
    if (formatFilter === 'cpa') {
      return !s.id.startsWith('ws-trad-');
    }
    return true;
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <aside className="w-full lg:w-80 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-6 no-print">
      {/* Brand & Mode Indicator */}
      <div>
        <div className="flex items-center gap-2.5 mb-1">
          <div className="p-2 bg-indigo-600 rounded-xl text-white shadow-xs">
            <Brain className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-extrabold text-slate-900 tracking-tight">Worksheet Studio</h2>
            <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider block">
              ● Traditional & CPA Modes
            </span>
          </div>
        </div>
      </div>

      {/* Main View Switcher (Today's Lesson vs Sheet Library vs Roadmap) */}
      <div className="grid grid-cols-2 gap-1.5 p-1 bg-slate-100 rounded-xl">
        <button
          onClick={() => onChangeView('worksheet')}
          className={`flex items-center justify-center gap-1.5 py-2 text-xs font-bold rounded-lg transition-all ${
            activeView === 'worksheet'
              ? 'bg-white text-indigo-700 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          Print Sheet
        </button>
        <button
          onClick={() => onChangeView('roadmap')}
          className={`flex items-center justify-center gap-1.5 py-2 text-xs font-bold rounded-lg transition-all ${
            activeView === 'roadmap'
              ? 'bg-white text-indigo-700 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Map className="w-3.5 h-3.5" />
          Curriculum
        </button>
      </div>

      {/* Format Filter Pills (Traditional vs Visual) */}
      <div>
        <label className="block text-[10px] font-black uppercase tracking-wider text-slate-500 mb-1.5">
          Worksheet Format Style
        </label>
        <div className="grid grid-cols-3 gap-1 bg-slate-100 p-1 rounded-lg text-[11px] font-bold">
          <button
            onClick={() => setFormatFilter('all')}
            className={`py-1 rounded ${formatFilter === 'all' ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-600'}`}
          >
            All ({allSheets.length})
          </button>
          <button
            onClick={() => setFormatFilter('traditional')}
            className={`py-1 rounded ${formatFilter === 'traditional' ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-600'}`}
          >
            Traditional
          </button>
          <button
            onClick={() => setFormatFilter('cpa')}
            className={`py-1 rounded ${formatFilter === 'cpa' ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-600'}`}
          >
            Visual CPA
          </button>
        </div>
      </div>

      {/* Curated Worksheets Catalog */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
            Available Sheets ({filteredSheets.length})
          </label>
        </div>
        <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1">
          {filteredSheets.map((sheet) => (
            <button
              key={sheet.id}
              onClick={() => {
                onSelectWorksheet(sheet.id);
                onChangeView('worksheet');
              }}
              className={`w-full text-left p-2.5 rounded-xl border text-xs transition-all ${
                activeWorksheetId === sheet.id && activeView === 'worksheet'
                  ? 'border-indigo-600 bg-indigo-50/80 text-indigo-950 font-bold shadow-xs'
                  : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100 text-slate-700'
              }`}
            >
              <div className="flex justify-between items-center mb-0.5">
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                  {sheet.subject} • {sheet.grade === 'K' ? 'Kindergarten' : `Grade ${sheet.grade}`}
                </span>
                {sheet.id.startsWith('ws-trad-') && (
                  <span className="text-[9px] bg-amber-100 text-amber-800 font-bold px-1.5 py-0.2 rounded">
                    Traditional
                  </span>
                )}
              </div>
              <p className="line-clamp-1">{sheet.title}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-2 pt-2 border-t border-slate-200">
        <button
          onClick={handlePrint}
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl shadow-xs transition-all"
        >
          <Printer className="w-4 h-4" />
          Print / Save as PDF
        </button>

        <button
          onClick={onOpenNotes}
          className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-xs transition-all"
        >
          <PenTool className="w-4 h-4" />
          Log Child Notes ({sessionCount})
        </button>

        <button
          onClick={onOpenAnswerKey}
          className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold rounded-xl transition-all"
        >
          <Key className="w-4 h-4" />
          Teacher Answer Key & Rubric
        </button>
      </div>

      {/* Persistent Note Callout */}
      <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl text-[11px] text-slate-600 space-y-1">
        <span className="font-bold text-slate-700 block">💬 Real Classroom Quality:</span>
        <p className="text-slate-500 leading-normal">
          Toggle between Traditional Multi-Section Packets (drills, reading passages, word problems) and Visual CPA Models (ten-frames, bonds).
        </p>
      </div>
    </aside>
  );
}
