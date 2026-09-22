// src/components/math/CountingObjectsView.jsx
// Visual component for early childhood object counting, one-to-one touch points, and set comparisons.
// Connects to: src/components/worksheet/WorksheetCanvas.jsx, src/domain/curriculum/dailySchedule.js
// Created: 2026-09-22

import React from 'react';
import WorkspaceBox from '../common/WorkspaceBox.jsx';

/**
 * Renders early childhood counting items, tactile touch-points, and quantity comparison boxes.
 * Supports:
 *  - 'counting-objects': Linear or grouped items with touch circles and a write-in numeral box.
 *  - 'quantity-comparison': Side-by-side Group A vs Group B with "Which has MORE/FEWER?" target.
 *  - 'numeral-comparison': Direct side-by-side numeral comparison cards.
 */
export default function CountingObjectsView({ problem }) {
  const {
    id,
    type,
    number,
    prompt,
    subtext,
    items,
    itemIcon = '🍎',
    count,
    groupA,
    groupB,
    comparisonQuestion = 'Which group has MORE?',
    targetNumber,
  } = problem;

  // Render Case 1: Quantity Comparison (Group A vs Group B)
  if (type === 'quantity-comparison' && groupA && groupB) {
    return (
      <WorkspaceBox
        title={`Problem #${number}: ${comparisonQuestion}`}
        className="flex flex-col justify-between"
      >
        <p className="text-xs font-semibold text-slate-700 mb-2">{prompt}</p>

        <div className="grid grid-cols-2 gap-3 my-2">
          {/* Group A Box */}
          <div className="border-2 border-dashed border-indigo-300 rounded-xl p-3 bg-indigo-50/40 flex flex-col items-center justify-between min-h-[110px]">
            <span className="text-[11px] font-black uppercase text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded-full mb-1">
              {groupA.label || 'Group A'}
            </span>
            <div className="flex flex-wrap justify-center gap-1.5 my-2">
              {Array.from({ length: groupA.count }).map((_, idx) => (
                <div key={`ga-${idx}`} className="flex flex-col items-center">
                  <span className="text-2xl select-none" role="img" aria-label="item">
                    {groupA.icon || itemIcon}
                  </span>
                  <span className="w-3.5 h-3.5 rounded-full border border-slate-300 bg-white text-[9px] font-bold text-slate-600 flex items-center justify-center mt-0.5">
                    {idx + 1}
                  </span>
                </div>
              ))}
            </div>
            <div className="text-[11px] font-bold text-slate-700 mt-1">
              Count: <span className="inline-block border-2 border-indigo-400 bg-white rounded-md w-8 h-6 text-center align-middle"></span>
            </div>
          </div>

          {/* Group B Box */}
          <div className="border-2 border-dashed border-amber-300 rounded-xl p-3 bg-amber-50/40 flex flex-col items-center justify-between min-h-[110px]">
            <span className="text-[11px] font-black uppercase text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full mb-1">
              {groupB.label || 'Group B'}
            </span>
            <div className="flex flex-wrap justify-center gap-1.5 my-2">
              {Array.from({ length: groupB.count }).map((_, idx) => (
                <div key={`gb-${idx}`} className="flex flex-col items-center">
                  <span className="text-2xl select-none" role="img" aria-label="item">
                    {groupB.icon || itemIcon}
                  </span>
                  <span className="w-3.5 h-3.5 rounded-full border border-slate-300 bg-white text-[9px] font-bold text-slate-600 flex items-center justify-center mt-0.5">
                    {idx + 1}
                  </span>
                </div>
              ))}
            </div>
            <div className="text-[11px] font-bold text-slate-700 mt-1">
              Count: <span className="inline-block border-2 border-amber-400 bg-white rounded-md w-8 h-6 text-center align-middle"></span>
            </div>
          </div>
        </div>

        {/* Child Answer Target */}
        <div className="mt-2 pt-2 border-t border-slate-200 flex items-center justify-around text-xs font-bold text-slate-800">
          <label className="flex items-center gap-1.5 cursor-pointer">
            <span className="w-5 h-5 rounded-full border-2 border-indigo-600 flex items-center justify-center bg-white text-[11px]"></span>
            <span>{groupA.label || 'Group A'}</span>
          </label>
          <label className="flex items-center gap-1.5 cursor-pointer">
            <span className="w-5 h-5 rounded-full border-2 border-amber-600 flex items-center justify-center bg-white text-[11px]"></span>
            <span>{groupB.label || 'Group B'}</span>
          </label>
          {problem.allowEqual && (
            <label className="flex items-center gap-1.5 cursor-pointer">
              <span className="w-5 h-5 rounded-full border-2 border-slate-600 flex items-center justify-center bg-white text-[11px]"></span>
              <span>Equal (=)</span>
            </label>
          )}
        </div>
      </WorkspaceBox>
    );
  }

  // Render Case 2: Numeral Comparison (e.g. 4 vs 8)
  if (type === 'numeral-comparison' && problem.numA !== undefined && problem.numB !== undefined) {
    return (
      <WorkspaceBox
        title={`Problem #${number}: Compare the Numbers`}
        className="flex flex-col items-center justify-between"
      >
        <p className="text-xs font-semibold text-slate-700 mb-2">{prompt || 'Circle the GREATER number:'}</p>

        <div className="flex items-center justify-center gap-6 my-3">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl border-2 border-indigo-500 bg-indigo-50/50 flex items-center justify-center text-3xl font-black text-indigo-900 shadow-xs">
              {problem.numA}
            </div>
            <span className="text-[10px] text-slate-500 font-bold mt-1">Number A</span>
          </div>

          <span className="text-sm font-black text-slate-400">VS</span>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl border-2 border-amber-500 bg-amber-50/50 flex items-center justify-center text-3xl font-black text-amber-900 shadow-xs">
              {problem.numB}
            </div>
            <span className="text-[10px] text-slate-500 font-bold mt-1">Number B</span>
          </div>
        </div>

        <div className="mt-2 text-[11px] text-slate-500 italic text-center">
          {subtext || 'Draw a circle around the number that is bigger!'}
        </div>
      </WorkspaceBox>
    );
  }

  // Render Case 3: Standard Object Counting with Touch Points (Default)
  const displayCount = count || (items ? items.length : 3);
  return (
    <WorkspaceBox
      title={`Problem #${number}`}
      className="flex flex-col items-center justify-between"
    >
      <div className="text-center mb-1">
        <p className="text-xs font-semibold text-slate-800">{prompt || 'Touch each object and count:'}</p>
        {subtext && <p className="text-[10px] text-slate-500">{subtext}</p>}
      </div>

      {/* Touch-and-Count Object Array */}
      <div className="my-3 p-3 bg-slate-50/80 rounded-xl border border-slate-200 flex flex-wrap justify-center items-center gap-3 min-h-[75px] max-w-[280px]">
        {Array.from({ length: displayCount }).map((_, idx) => (
          <div key={`item-${idx}`} className="flex flex-col items-center">
            <span className="text-3xl select-none" role="img" aria-label="count-item">
              {itemIcon}
            </span>
            <span className="w-4 h-4 rounded-full border border-slate-400 bg-white text-[10px] font-black text-slate-700 flex items-center justify-center mt-1 shadow-2xs">
              {idx + 1}
            </span>
          </div>
        ))}

        {/* Optional "+ 1 More" dotted placeholder for Day 3 */}
        {problem.showPlusOne && (
          <div className="flex flex-col items-center border-2 border-dashed border-indigo-400 rounded-xl p-1.5 bg-indigo-50/50">
            <span className="text-2xl opacity-40 select-none">{itemIcon}</span>
            <span className="text-[9px] font-black text-indigo-700 mt-0.5">+1 More</span>
          </div>
        )}
      </div>

      {/* Answer Write Box with Primary Guidelines */}
      <div className="mt-2 flex items-center justify-center gap-2">
        <span className="text-xs font-bold text-slate-700">Write the number:</span>
        <div className="w-12 h-10 border-2 border-slate-900 rounded-lg bg-white flex items-center justify-center shadow-inner">
          <span className="text-slate-300 text-lg select-none font-mono">
            {problem.traceNumeral ? targetNumber || displayCount : ''}
          </span>
        </div>
      </div>
    </WorkspaceBox>
  );
}
