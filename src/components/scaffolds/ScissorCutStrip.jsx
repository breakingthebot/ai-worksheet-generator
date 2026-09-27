// src/components/scaffolds/ScissorCutStrip.jsx
// Authentic Kindergarten Tactile Scissor Cut & Paste Strip
// Features: Dashed scissor cut line, kinesthetic sorting tiles, clear motor instructions
// Created: 2026-09-27

import React from 'react';

/**
 * ScissorCutStrip Component
 * @param {Array} items - Array of tiles: [{ id, label, emoji, category }]
 * @param {string} prompt - Spoken direction for cutting/pasting
 */
export default function ScissorCutStrip({
  items = [],
  prompt = 'Cut out the pictures below along the dashed line. Glue them into the matching boxes above!',
  className = ''
}) {
  if (!items || items.length === 0) return null;

  return (
    <div className={`mt-8 pt-4 border-t-2 border-dashed border-slate-400 relative select-none ${className}`}>
      {/* Scissor Marker */}
      <div className="absolute -top-3.5 left-4 bg-white px-2 flex items-center gap-1.5 text-xs font-black text-slate-700">
        <span className="text-base">✂️</span>
        <span className="uppercase tracking-widest text-[10px]">Cut Along Dashed Line</span>
      </div>

      <p className="text-xs font-bold text-slate-600 mb-3 px-1">
        🖐️ {prompt}
      </p>

      {/* Tiles Container */}
      <div className="flex flex-wrap gap-3 items-center justify-around p-3 bg-amber-50/40 rounded-xl border border-dashed border-amber-300">
        {items.map((item, idx) => (
          <div
            key={item.id || idx}
            className="w-24 h-24 sm:w-28 sm:h-28 bg-white border-2 border-dashed border-slate-600 rounded-lg p-2 flex flex-col items-center justify-center text-center shadow-2xs"
          >
            {item.emoji && <span className="text-3xl mb-1">{item.emoji}</span>}
            <span className="text-xs font-black text-slate-800 leading-tight">
              {item.label}
            </span>
            {item.sublabel && (
              <span className="text-[10px] text-slate-500 font-semibold mt-0.5">
                {item.sublabel}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
