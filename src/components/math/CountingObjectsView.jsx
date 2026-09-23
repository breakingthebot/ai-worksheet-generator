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
    partA,
    partB,
    totalCount,
    takeAwayCount,
    remainingCount,
    topNumber,
    bottomNumber,
    operator = '+',
    story,
    equation,
    whole,
    answer,
  } = problem;

  // Render Case 1: Vertical Math Notation (+ / -)
  if (type === 'vertical-math') {
    return (
      <WorkspaceBox
        title={`Problem #${number}: Vertical ${operator === '-' ? 'Subtraction' : 'Addition'}`}
        className="flex flex-col items-center justify-between"
      >
        <p className="text-xs font-semibold text-slate-800 mb-1">{prompt || 'Solve the vertical math problem:'}</p>
        <div className="flex items-center justify-center my-2 p-3 bg-slate-50/80 rounded-xl border border-slate-200">
          <div className="flex flex-col items-end text-3xl font-black font-mono text-slate-900 tracking-wider">
            <div className="flex items-center gap-2">
              {itemIcon && <span className="text-xl select-none">{itemIcon}</span>}
              <span>{topNumber}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-2xl font-black ${operator === '-' ? 'text-red-600' : 'text-indigo-600'} select-none`}>
                {operator}
              </span>
              <span>{bottomNumber}</span>
            </div>
            <div className="w-24 border-b-4 border-slate-900 my-1"></div>
            <div className="w-14 h-10 border-2 border-slate-900 rounded-lg bg-white flex items-center justify-center text-xl font-bold text-slate-900 shadow-inner">
              {problem.showAnswer ? answer : ''}
            </div>
          </div>
        </div>
        {subtext && <p className="text-[10px] text-slate-500 italic text-center">{subtext}</p>}
      </WorkspaceBox>
    );
  }

  // Render Case 2: Math Word Story with Drawing Workspace
  if (type === 'story-problem') {
    return (
      <WorkspaceBox
        title={`Problem #${number}: Math Word Story`}
        className="flex flex-col justify-between"
      >
        <div className="space-y-1 mb-2">
          {story && <p className="text-xs font-medium text-slate-800 leading-snug">{story}</p>}
          <p className="text-xs font-extrabold text-indigo-950">{prompt}</p>
        </div>
        {/* Child Drawing Box */}
        <div className="border-2 border-dashed border-amber-300 rounded-xl p-2 bg-amber-50/40 flex flex-col items-center justify-center min-h-[65px]">
          <span className="text-[9px] font-black uppercase tracking-wider text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full mb-1">
            Draw Your Picture Here
          </span>
          <div className="flex gap-2 text-2xl select-none opacity-40">
            {itemIcon}
          </div>
        </div>
        {/* Horizontal Equation Box */}
        <div className="mt-2 pt-2 border-t border-slate-200 flex items-center justify-center gap-2 text-xs font-bold text-slate-800">
          <span>Equation:</span>
          <div className="min-w-[70px] h-8 px-2 border-2 border-slate-900 rounded-lg bg-white flex items-center justify-center font-mono text-sm font-bold">
            {problem.showAnswer ? equation : ''}
          </div>
        </div>
      </WorkspaceBox>
    );
  }

  // Render Case 3: Fact Family Card (Whole & Parts)
  if (type === 'fact-family' && whole !== undefined) {
    return (
      <WorkspaceBox
        title={`Problem #${number}: Fact Family (${whole})`}
        className="flex flex-col justify-between"
      >
        <p className="text-xs font-semibold text-slate-800 mb-1">{prompt || `Number partners for ${whole}:`}</p>
        {/* Number Bond Triad */}
        <div className="flex items-center justify-center gap-3 my-1">
          <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center text-lg font-black shadow-xs">
            {whole}
          </div>
          <span className="text-xs font-bold text-slate-400">breaks into</span>
          <div className="flex gap-2">
            <span className="w-8 h-8 rounded-lg bg-indigo-100 border border-indigo-300 text-indigo-900 flex items-center justify-center text-sm font-black">
              {partA}
            </span>
            <span className="w-8 h-8 rounded-lg bg-emerald-100 border border-emerald-300 text-emerald-900 flex items-center justify-center text-sm font-black">
              {partB}
            </span>
          </div>
        </div>
        {/* 4 Connected Fact Equations */}
        <div className="grid grid-cols-2 gap-1 text-[11px] font-mono font-bold text-slate-800 bg-slate-50 p-2 rounded-lg border border-slate-200 mt-1">
          <div className="p-1 bg-white rounded border border-slate-200 text-center">
            {partA} + {partB} = {whole}
          </div>
          <div className="p-1 bg-white rounded border border-slate-200 text-center">
            {partB} + {partA} = {whole}
          </div>
          <div className="p-1 bg-white rounded border border-slate-200 text-center">
            {whole} − {partA} = {partB}
          </div>
          <div className="p-1 bg-white rounded border border-slate-200 text-center">
            {whole} − {partB} = {partA}
          </div>
        </div>
      </WorkspaceBox>
    );
  }

  // Render Case 4: Equation Balance / True or False Check
  if (type === 'equation-balance') {
    return (
      <WorkspaceBox
        title={`Problem #${number}: True or False?`}
        className="flex flex-col justify-between"
      >
        <p className="text-xs font-semibold text-slate-800 mb-1">{prompt || 'Is this equation TRUE or FALSE?'}</p>
        <div className="my-2 p-3 bg-indigo-50/60 rounded-xl border border-indigo-200 flex items-center justify-center">
          <span className="text-2xl font-black font-mono text-indigo-950 tracking-wider">{equation}</span>
        </div>
        <div className="flex items-center justify-around gap-2 pt-2 border-t border-slate-200">
          <button type="button" className="px-4 py-1 rounded-lg border-2 border-emerald-600 bg-emerald-50 text-emerald-900 text-xs font-black">
            TRUE (✓)
          </button>
          <button type="button" className="px-4 py-1 rounded-lg border-2 border-rose-600 bg-rose-50 text-rose-900 text-xs font-black">
            FALSE (✕)
          </button>
        </div>
      </WorkspaceBox>
    );
  }

  // Render Case 5: Concrete Addition (Part A + Part B = Total)
  if (type === 'concrete-addition' && partA && partB) {
    const iconA = partA.icon || itemIcon;
    const iconB = partB.icon || itemIcon;
    const total = (partA.count || 0) + (partB.count || 0);

    return (
      <WorkspaceBox
        title={`Problem #${number}: Putting Together (+)`}
        className="flex flex-col justify-between"
      >
        <div className="text-center mb-1.5">
          <p className="text-xs font-semibold text-slate-800">{prompt || 'Put the groups together and count in all:'}</p>
          {subtext && <p className="text-[10px] text-slate-500">{subtext}</p>}
        </div>

        {/* Concrete Groups Joined by Plus Sign */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 my-2 bg-slate-50/70 p-3 rounded-xl border border-slate-200">
          {/* Group A Box */}
          <div className="flex flex-col items-center border border-indigo-200 bg-indigo-50/50 rounded-xl p-2 min-w-[80px]">
            {partA.label && (
              <span className="text-[9px] font-black uppercase text-indigo-700 bg-indigo-100 px-1.5 py-0.5 rounded-full mb-1">
                {partA.label}
              </span>
            )}
            <div className="flex flex-wrap justify-center gap-1.5">
              {Array.from({ length: partA.count }).map((_, idx) => (
                <div key={`pa-${idx}`} className="flex flex-col items-center">
                  <span className="text-2xl select-none" role="img" aria-label="item-a">
                    {iconA}
                  </span>
                  <span className="w-3.5 h-3.5 rounded-full border border-indigo-400 bg-white text-[9px] font-black text-indigo-700 flex items-center justify-center mt-0.5 shadow-2xs">
                    {idx + 1}
                  </span>
                </div>
              ))}
              {partA.count === 0 && (
                <span className="text-xs font-bold text-slate-400 italic py-2">0 items</span>
              )}
            </div>
          </div>

          {/* Plus Sign */}
          <div className="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center text-lg font-black shrink-0 shadow-xs">
            +
          </div>

          {/* Group B Box */}
          <div className="flex flex-col items-center border border-emerald-200 bg-emerald-50/50 rounded-xl p-2 min-w-[80px]">
            {partB.label && (
              <span className="text-[9px] font-black uppercase text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded-full mb-1">
                {partB.label}
              </span>
            )}
            <div className="flex flex-wrap justify-center gap-1.5">
              {Array.from({ length: partB.count }).map((_, idx) => (
                <div key={`pb-${idx}`} className="flex flex-col items-center">
                  <span className="text-2xl select-none" role="img" aria-label="item-b">
                    {iconB}
                  </span>
                  <span className="w-3.5 h-3.5 rounded-full border border-emerald-400 bg-white text-[9px] font-black text-emerald-700 flex items-center justify-center mt-0.5 shadow-2xs">
                    {partA.count + idx + 1}
                  </span>
                </div>
              ))}
              {partB.count === 0 && (
                <span className="text-xs font-bold text-slate-400 italic py-2">0 items</span>
              )}
            </div>
          </div>
        </div>

        {/* Concrete Equation Fill-in Boxes */}
        <div className="mt-2 pt-2 border-t border-slate-200 flex items-center justify-center gap-2 text-base font-black text-slate-800">
          <div className="w-9 h-8 border-2 border-indigo-400 rounded-lg bg-white flex items-center justify-center text-sm font-extrabold text-indigo-900 shadow-2xs">
            {partA.count}
          </div>
          <span>+</span>
          <div className="w-9 h-8 border-2 border-emerald-400 rounded-lg bg-white flex items-center justify-center text-sm font-extrabold text-emerald-900 shadow-2xs">
            {partB.count}
          </div>
          <span>=</span>
          <div className="w-10 h-8 border-2 border-slate-900 rounded-lg bg-white flex items-center justify-center text-base font-black text-slate-900 shadow-inner">
            {problem.showAnswer ? total : ''}
          </div>
        </div>
      </WorkspaceBox>
    );
  }

  // Render Case 2: Concrete Subtraction (Take Away with Cross-Out Visuals)
  if (type === 'concrete-subtraction' && totalCount !== undefined && takeAwayCount !== undefined) {
    const left = remainingCount !== undefined ? remainingCount : totalCount - takeAwayCount;

    return (
      <WorkspaceBox
        title={`Problem #${number}: Taking Away (−)`}
        className="flex flex-col justify-between"
      >
        <div className="text-center mb-1.5">
          <p className="text-xs font-semibold text-slate-800">{prompt || `Cross out ${takeAwayCount} and count what is left:`}</p>
          {subtext && <p className="text-[10px] text-slate-500">{subtext}</p>}
        </div>

        {/* Objects with Cross-Outs for Subtrahend */}
        <div className="my-2 bg-slate-50/70 p-3 rounded-xl border border-slate-200 flex flex-wrap justify-center items-center gap-3 min-h-[75px]">
          {Array.from({ length: totalCount }).map((_, idx) => {
            const isTakenAway = idx >= left;
            return (
              <div
                key={`sub-${idx}`}
                className={`relative flex flex-col items-center transition-all ${
                  isTakenAway ? 'opacity-40' : 'opacity-100'
                }`}
              >
                <span className="text-3xl select-none" role="img" aria-label="item">
                  {itemIcon}
                </span>

                {isTakenAway ? (
                  <>
                    <span className="absolute inset-0 flex items-center justify-center text-red-600 font-black text-2xl select-none">
                      ✕
                    </span>
                    <span className="w-3.5 h-3.5 rounded-full border border-red-300 bg-red-50 text-[8px] font-black text-red-700 flex items-center justify-center mt-0.5">
                      ✕
                    </span>
                  </>
                ) : (
                  <span className="w-3.5 h-3.5 rounded-full border border-emerald-400 bg-white text-[9px] font-black text-emerald-700 flex items-center justify-center mt-0.5 shadow-2xs">
                    {idx + 1}
                  </span>
                )}
              </div>
            );
          })}
          {totalCount === 0 && (
            <span className="text-xs font-bold text-slate-400 italic py-2">0 items</span>
          )}
        </div>

        {/* Concrete Equation Fill-in Boxes */}
        <div className="mt-2 pt-2 border-t border-slate-200 flex items-center justify-center gap-2 text-base font-black text-slate-800">
          <div className="w-9 h-8 border-2 border-slate-400 rounded-lg bg-white flex items-center justify-center text-sm font-extrabold text-slate-900 shadow-2xs">
            {totalCount}
          </div>
          <span className="text-red-600 font-black">−</span>
          <div className="w-9 h-8 border-2 border-red-300 rounded-lg bg-red-50/50 flex items-center justify-center text-sm font-extrabold text-red-700 shadow-2xs">
            {takeAwayCount}
          </div>
          <span>=</span>
          <div className="w-10 h-8 border-2 border-slate-900 rounded-lg bg-white flex items-center justify-center text-base font-black text-slate-900 shadow-inner">
            {problem.showAnswer ? left : ''}
          </div>
        </div>
      </WorkspaceBox>
    );
  }

  // Render Case 3: Quantity Comparison (Group A vs Group B)
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
