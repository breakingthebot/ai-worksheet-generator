// src/components/math/ScaffoldedNumber.jsx
// Touch-point visual counting scaffolding for numerals in arithmetic drills.
// Connects to: src/components/traditional/VerticalMathGrid.jsx
// Created: 2026-09-22

import React from 'react';

/**
 * Renders a numeral with optional 5-structured touch counting dots.
 * Bridges concrete CPA manipulatives with abstract symbolic arithmetic.
 * Arranges dots in rows of up to 5 dots, reinforcing the base-5/base-10 anchor.
 */
export default function ScaffoldedNumber({
  value,
  showDots = false,
  color = 'indigo',
  className = '',
}) {
  const num = typeof value === 'number' ? value : parseInt(value, 10);
  if (isNaN(num)) {
    return <span className={className}>{value}</span>;
  }

  // Generate 5-structured dot rows (row 1: up to 5, row 2: up to 5, row 3: overflow)
  const topRowDots = Math.min(num, 5);
  const bottomRowDots = num > 5 ? Math.min(num - 5, 5) : 0;
  const extraDots = num > 10 ? num - 10 : 0;

  const dotColorClass =
    color === 'amber'
      ? 'bg-amber-600 border-amber-800'
      : color === 'emerald'
      ? 'bg-emerald-600 border-emerald-800'
      : 'bg-indigo-600 border-indigo-800';

  return (
    <div className={`inline-flex items-center justify-end gap-1.5 ${className}`}>
      {/* Visual Touch-Points / Counting Dots */}
      {showDots && num > 0 && (
        <div
          className="flex flex-col items-end gap-0.5 mr-0.5 select-none"
          title={`${num} touch counting dots`}
          aria-label={`${num} touch dots`}
          data-testid="counting-dots-container"
        >
          {/* Row 1: up to 5 dots */}
          <div className="flex gap-0.5 justify-end">
            {Array.from({ length: topRowDots }).map((_, idx) => (
              <span
                key={`r1-${idx}`}
                className={`w-1.5 h-1.5 rounded-full border ${dotColorClass} shadow-2xs print:bg-slate-900 print:border-black`}
              />
            ))}
          </div>

          {/* Row 2: 6 to 10 dots */}
          {bottomRowDots > 0 && (
            <div className="flex gap-0.5 justify-end">
              {Array.from({ length: bottomRowDots }).map((_, idx) => (
                <span
                  key={`r2-${idx}`}
                  className={`w-1.5 h-1.5 rounded-full border ${dotColorClass} shadow-2xs print:bg-slate-900 print:border-black`}
                />
              ))}
            </div>
          )}

          {/* Row 3: 11 to 12 dots if applicable */}
          {extraDots > 0 && (
            <div className="flex gap-0.5 justify-end">
              {Array.from({ length: extraDots }).map((_, idx) => (
                <span
                  key={`r3-${idx}`}
                  className={`w-1.5 h-1.5 rounded-full border ${dotColorClass} shadow-2xs print:bg-slate-900 print:border-black`}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* The Numeral */}
      <span className="font-mono text-base font-bold text-slate-900 tracking-wider">
        {value}
      </span>
    </div>
  );
}
