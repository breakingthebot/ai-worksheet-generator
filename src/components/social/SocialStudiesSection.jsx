// src/components/social/SocialStudiesSection.jsx
// Renders Core Knowledge History & Geography (CKHG) questions, maps, compass directions, and civics cards.
// Connects to: src/components/worksheet/WorksheetCanvas.jsx, src/domain/curriculum/dailySchedule.js
// Created: 2026-09-22

import React from 'react';
import WorkspaceBox from '../common/WorkspaceBox.jsx';
import { Compass, Map, Globe, Landmark, Flag, HeartHandshake } from 'lucide-react';

export default function SocialStudiesSection({ problem }) {
  const {
    number,
    prompt,
    topic,
    subtext,
    icon,
    options,
    drawBox,
    drawPrompt,
    reflectionLine,
  } = problem;

  const renderTopicBadge = () => {
    switch (topic) {
      case 'maps-globes':
        return (
          <span className="flex items-center gap-1 text-[10px] font-bold text-sky-800 bg-sky-100 px-2 py-0.5 rounded">
            <Globe className="w-3 h-3 text-sky-600" /> Maps & Globes
          </span>
        );
      case 'compass-rose':
        return (
          <span className="flex items-center gap-1 text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
            <Compass className="w-3 h-3 text-amber-600" /> Compass Rose
          </span>
        );
      case 'map-skills':
        return (
          <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
            <Map className="w-3 h-3 text-emerald-600" /> Map Skills
          </span>
        );
      case 'presidents':
        return (
          <span className="flex items-center gap-1 text-[10px] font-bold text-purple-800 bg-purple-100 px-2 py-0.5 rounded">
            <Landmark className="w-3 h-3 text-purple-600" /> Presidents & History
          </span>
        );
      case 'american-symbols':
        return (
          <span className="flex items-center gap-1 text-[10px] font-bold text-red-800 bg-red-100 px-2 py-0.5 rounded">
            <Flag className="w-3 h-3 text-red-600" /> American Heritage
          </span>
        );
      case 'citizenship':
        return (
          <span className="flex items-center gap-1 text-[10px] font-bold text-teal-800 bg-teal-100 px-2 py-0.5 rounded">
            <HeartHandshake className="w-3 h-3 text-teal-600" /> Good Citizenship
          </span>
        );
      default:
        return (
          <span className="text-[10px] font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
            {icon || '🗺️'} Social Studies
          </span>
        );
    }
  };

  return (
    <WorkspaceBox title={`Item #${number}`} className="flex flex-col justify-between">
      <div>
        {/* Topic Header Badge */}
        <div className="flex items-center justify-between mb-2">
          {renderTopicBadge()}
          <span className="text-base">{icon || '🌍'}</span>
        </div>

        {/* Question Prompt */}
        <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug mb-1">
          {prompt}
        </p>

        {/* Subtext or Context Clue */}
        {subtext && (
          <p className="text-xs text-slate-500 italic mb-2.5 bg-slate-50 p-2 rounded border border-slate-100">
            💡 {subtext}
          </p>
        )}

        {/* Multiple Choice Options */}
        {options && options.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
            {options.map((opt, i) => (
              <label
                key={i}
                className="flex items-center gap-2 p-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 cursor-pointer transition-colors"
              >
                <div className="w-4 h-4 rounded-full border-2 border-slate-400 flex items-center justify-center shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-transparent"></div>
                </div>
                <span className="text-xs font-semibold text-slate-800">{opt}</span>
              </label>
            ))}
          </div>
        )}

        {/* Optional Drawing Scratchpad */}
        {drawBox && (
          <div className="mt-3 p-3 border-2 border-dashed border-slate-300 rounded-xl bg-slate-50/50 flex flex-col items-center justify-center min-h-[90px] text-center">
            <span className="text-[11px] font-bold text-slate-500 mb-1">
              ✏️ {drawPrompt || 'Draw your map or symbol here:'}
            </span>
            <div className="w-full h-14 border border-dotted border-slate-300 rounded bg-white"></div>
          </div>
        )}
      </div>

      {/* Primary Handwriting Guidelines / Reflection Line */}
      {reflectionLine !== false && (
        <div className="mt-3 pt-2.5 border-t border-dotted border-slate-200">
          <div className="flex items-center justify-between text-[11px] text-slate-500 font-semibold mb-1">
            <span>Student Answer / Reason:</span>
          </div>
          {/* Primary 3-line ruling (Top, Midline, Baseline) */}
          <div className="w-full h-8 relative flex flex-col justify-between py-1 bg-slate-50/40 rounded px-2 border border-slate-200">
            <div className="w-full border-b border-slate-300"></div>
            <div className="w-full border-b border-dashed border-blue-400"></div>
            <div className="w-full border-b-2 border-slate-400"></div>
          </div>
        </div>
      )}
    </WorkspaceBox>
  );
}
