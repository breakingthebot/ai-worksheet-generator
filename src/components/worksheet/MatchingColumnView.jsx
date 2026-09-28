// src/components/worksheet/MatchingColumnView.jsx
// Matching column activity (Connect items in Column A with Column B).
// Connects to: src/components/worksheet/WorksheetCanvas.jsx
// Created: 2026-09-22 / Refactored: 2026-09-27

import React from 'react';

/**
 * Renders two columns of items with connecting dots for line-drawing matching activities.
 * 
 * @param {Object} props
 * @param {Object} props.matchingData - Matching column data
 * @returns {JSX.Element}
 */
export default function MatchingColumnView({ matchingData }) {
  if (!matchingData) return null;

  const columnA = matchingData.columnA
    ? matchingData.columnA
    : matchingData.leftColumn
    ? matchingData.leftColumn.map((item) => ({ text: `${item.emoji ? item.emoji + ' ' : ''}${item.label || item.text || ''}` }))
    : matchingData.pairs
    ? matchingData.pairs.map((p) => ({ text: p.left }))
    : [];

  const columnB = matchingData.columnB
    ? matchingData.columnB
    : matchingData.rightColumn
    ? matchingData.rightColumn.map((item) => ({ text: `${item.emoji ? item.emoji + ' ' : ''}${item.label || item.text || ''}` }))
    : matchingData.pairs
    ? matchingData.pairs.map((p) => ({ text: p.right }))
    : [];

  const {
    title = 'Section: Matching Columns',
    instructions = 'Draw a straight line from Column A to its matching partner in Column B.',
  } = matchingData;

  return (
    <div className="border border-slate-300 rounded-xl p-4 bg-white shadow-xs space-y-3 mb-6 break-inside-avoid">
      <div className="border-b border-slate-200 pb-1.5 flex justify-between items-center">
        <h4 className="text-xs font-black uppercase tracking-wider text-slate-800">{title}</h4>
        <span className="text-[10px] text-slate-400">Match with a straight line</span>
      </div>

      <p className="text-xs text-slate-600 italic">{instructions}</p>

      {/* Two Columns with Connecting Dots */}
      <div className="grid grid-cols-2 gap-8 pt-2 relative">
        {/* Column A */}
        <div className="space-y-3">
          <span className="text-[10px] font-black uppercase tracking-wider text-indigo-900 block pb-1 border-b border-slate-200">
            Column A
          </span>
          {columnA.map((item, idx) => (
            <div key={idx} className="flex justify-between items-center p-2 rounded-lg bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800">
              <span>{item.text}</span>
              <span className="w-2.5 h-2.5 rounded-full bg-slate-800 shrink-0 ml-2"></span>
            </div>
          ))}
        </div>

        {/* Column B */}
        <div className="space-y-3">
          <span className="text-[10px] font-black uppercase tracking-wider text-indigo-900 block pb-1 border-b border-slate-200">
            Column B
          </span>
          {columnB.map((item, idx) => (
            <div key={idx} className="flex items-center p-2 rounded-lg bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-800 shrink-0 mr-2"></span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
