// src/components/scaffolds/FiveTenFrame.jsx
// Authentic 5-Frame and 10-Frame Grid Scaffold (Eureka Math & Singapore Math standard)
// Features: 5-frame (1x5) or 10-frame (2x5), high-contrast counters, touch-points
// Created: 2026-09-27

import React from 'react';

/**
 * FiveTenFrame Component
 * @param {number} count - Number of filled counters (0 to 10)
 * @param {number} totalBoxes - 5 or 10
 * @param {string} counterType - "dot" | "star" | "apple" | "circle"
 * @param {boolean} showNumbers - Whether to show touch-point numbers
 */
export default function FiveTenFrame({
  count = 0,
  totalBoxes = 5,
  counterType = 'dot',
  showNumbers = false,
  className = ''
}) {
  const safeCount = Math.max(0, Math.min(totalBoxes, count));
  const isTenFrame = totalBoxes === 10;

  // Generate array of boxes
  const boxes = Array.from({ length: totalBoxes }, (_, index) => {
    const isFilled = index < safeCount;
    return {
      index,
      isFilled,
      num: index + 1
    };
  });

  const renderCounter = (num) => {
    switch (counterType) {
      case 'star':
        return <span className="text-2xl text-amber-500 drop-shadow-xs">⭐</span>;
      case 'apple':
        return <span className="text-2xl text-rose-500 drop-shadow-xs">🍎</span>;
      case 'circle':
        return <div className="w-8 h-8 rounded-full border-4 border-indigo-600 bg-indigo-100" />;
      case 'dot':
      default:
        return (
          <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white text-xs font-black shadow-inner">
            {showNumbers ? num : ''}
          </div>
        );
    }
  };

  return (
    <div className={`inline-block select-none ${className}`}>
      <div
        className={`grid border-4 border-slate-900 bg-white rounded-lg overflow-hidden shadow-xs ${
          isTenFrame ? 'grid-cols-5 grid-rows-2' : 'grid-cols-5'
        }`}
      >
        {boxes.map((box) => (
          <div
            key={box.index}
            className="w-12 h-12 sm:w-14 sm:h-14 border border-slate-400 flex items-center justify-center bg-slate-50/50 relative"
          >
            {box.isFilled ? (
              renderCounter(box.num)
            ) : (
              <span className="text-[10px] font-bold text-slate-300">
                {showNumbers ? box.num : ''}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
