// src/components/traditional/VerticalMathGrid.jsx
// Traditional vertical stacked arithmetic drill grid (addition, subtraction).
// Connects to: src/components/worksheet/WorksheetCanvas.jsx
// Created: 2026-09-22

import React from 'react';

export default function VerticalMathGrid({ problems, title = 'Section A: Math Fact Fluency Drills' }) {
  if (!problems || !problems.length) return null;

  return (
    <div className="space-y-2 mb-6">
      <div className="flex justify-between items-center border-b border-slate-300 pb-1">
        <h3 className="text-xs font-black uppercase tracking-wider text-slate-800">{title}</h3>
        <span className="text-[10px] text-slate-400 font-semibold">1 point each</span>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 pt-2">
        {problems.map((prob) => {
          const { number, topNumber, bottomNumber, operator = '+' } = prob;
          return (
            <div
              key={prob.id || number}
              className="border border-slate-300 rounded-lg p-2.5 bg-white flex flex-col items-center shadow-xs"
            >
              <span className="text-[9px] font-bold text-slate-400 self-start mb-0.5">#{number}</span>
              
              {/* Vertical Stacked Arithmetic */}
              <div className="w-14 text-right font-mono text-base font-bold text-slate-900 leading-tight pr-1">
                <div className="tracking-widest">{topNumber}</div>
                <div className="flex justify-between items-center border-b-2 border-slate-900 pb-0.5">
                  <span className="font-normal text-xs text-slate-600">{operator}</span>
                  <span className="tracking-widest">{bottomNumber}</span>
                </div>
                <div className="h-6"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
