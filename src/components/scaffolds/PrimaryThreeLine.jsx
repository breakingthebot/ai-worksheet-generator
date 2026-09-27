// src/components/scaffolds/PrimaryThreeLine.jsx
// Authentic Kindergarten/Grade 1 Primary 3-Line Handwriting Guideline
// Features: Top Headline (solid), Dashed Midline, Bottom Baseline (solid ground line), Starter Dots (•)
// Created: 2026-09-27

import React from 'react';

/**
 * PrimaryThreeLine Component
 * @param {string} text - Optional text to show in light dotted/tracing font
 * @param {string} starterDot - "headline" | "midline" | "none"
 * @param {number} height - Height of the 3-line unit in px (default 56px)
 * @param {string} label - Optional label (e.g. "Name:", "Trace & Write:")
 */
export default function PrimaryThreeLine({
  text = '',
  starterDot = 'midline',
  height = 56,
  label = '',
  className = ''
}) {
  const halfHeight = height / 2;

  return (
    <div className={`relative my-2 select-none ${className}`}>
      {label && (
        <span className="text-xs font-bold text-slate-600 block mb-1">
          {label}
        </span>
      )}
      <div
        className="relative w-full border-t border-b border-slate-700 bg-white"
        style={{ height: `${height}px` }}
      >
        {/* Top Headline (Solid line) */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-sky-600/80" />

        {/* Dashed Midline */}
        <div
          className="absolute left-0 right-0 border-b border-dashed border-rose-400"
          style={{ top: `${halfHeight}px` }}
        />

        {/* Bottom Baseline (Ground line) */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-slate-900" />

        {/* Starter Dot (•) */}
        {starterDot !== 'none' && (
          <div
            className="absolute left-4 w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-xs z-10 -translate-y-1/2"
            style={{
              top: starterDot === 'headline' ? '0px' : `${halfHeight}px`
            }}
            title="Start your pencil here!"
          />
        )}

        {/* Tracing / Letter Display */}
        {text && (
          <div
            className="absolute inset-0 flex items-baseline px-8 font-mono tracking-widest text-slate-800"
            style={{
              fontSize: `${height * 0.72}px`,
              lineHeight: `${height}px`
            }}
          >
            <span className="opacity-90 font-bold">{text}</span>
          </div>
        )}
      </div>
    </div>
  );
}
