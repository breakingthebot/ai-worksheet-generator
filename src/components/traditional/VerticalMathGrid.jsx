// src/components/traditional/VerticalMathGrid.jsx
// Traditional vertical stacked arithmetic drill grid with optional concrete touch-point scaffolding.
// Connects to: src/components/worksheet/WorksheetCanvas.jsx, src/components/math/ScaffoldedNumber.jsx
// Created: 2026-09-22

import React, { useState, useEffect } from 'react';
import ScaffoldedNumber from '../math/ScaffoldedNumber.jsx';

export default function VerticalMathGrid({
  problems,
  title = 'Section A: Math Fact Fluency Drills',
  showCountingDots: initialShowDots = false,
}) {
  const [showDots, setShowDots] = useState(initialShowDots);

  useEffect(() => {
    setShowDots(initialShowDots);
  }, [initialShowDots]);

  if (!problems || !problems.length) return null;

  return (
    <div className="space-y-2 mb-6">
      <div className="flex justify-between items-center border-b border-slate-300 pb-1.5">
        <div className="flex items-center gap-2.5">
          <h3 className="text-xs font-black uppercase tracking-wider text-slate-800">{title}</h3>
          
          {/* Visual Scaffolding Toggle Button (Screen Only, hidden in print) */}
          <button
            type="button"
            onClick={() => setShowDots((prev) => !prev)}
            className={`no-print flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold border transition-all cursor-pointer ${
              showDots
                ? 'bg-indigo-600 text-white border-indigo-700 shadow-2xs'
                : 'bg-slate-100 text-slate-600 border-slate-300 hover:bg-slate-200'
            }`}
            title="Toggle touch-point counting dots for concrete arithmetic scaffolding"
          >
            <span>{showDots ? '●' : '○'}</span>
            <span>Counting Dots: {showDots ? 'ON' : 'OFF'}</span>
          </button>
        </div>

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
              
              {/* Vertical Stacked Arithmetic with Scaffolded Numbers */}
              <div className="w-16 text-right font-mono text-base font-bold text-slate-900 leading-tight pr-1">
                {/* Top Number */}
                <div className="flex items-center justify-end py-0.5">
                  <ScaffoldedNumber value={topNumber} showDots={showDots} color="indigo" />
                </div>

                {/* Bottom Number with Operator */}
                <div className="flex justify-between items-center border-b-2 border-slate-900 pb-0.5 pt-0.5">
                  <span className="font-normal text-xs text-slate-600">{operator}</span>
                  <ScaffoldedNumber value={bottomNumber} showDots={showDots} color="amber" />
                </div>

                {/* Primary Student Answer Space */}
                <div className="h-6"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
