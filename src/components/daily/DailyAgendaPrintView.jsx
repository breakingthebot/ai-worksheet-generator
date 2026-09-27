// src/components/daily/DailyAgendaPrintView.jsx
// Print-optimized 8.5x11 single-page Daily Agenda & Field Trip Guide for parents and teachers.
// Connects to: src/domain/curriculum/dailyBlockModel.js, src/components/daily/DailyDashboard.jsx
// Created: 2026-09-27

import React from 'react';
import { extractConsolidatedMaterials } from '../../domain/curriculum/dailyBlockModel.js';
import { Clock, CheckSquare, Sparkles, MapPin, Compass } from 'lucide-react';

/**
 * Single-page printable daily agenda (Letter size 8.5x11).
 * 
 * @param {Object} props
 * @param {Object} props.dailyBlock - Daily block data object
 * @returns {JSX.Element}
 */
export default function DailyAgendaPrintView({ dailyBlock }) {
  if (!dailyBlock) return null;

  const materials = extractConsolidatedMaterials(dailyBlock);

  return (
    <div className="print-page w-full min-h-[1050px] bg-white border border-slate-300 p-8 sm:p-10 mx-auto flex flex-col justify-between text-slate-900 font-sans shadow-lg rounded-2xl">
      {/* Top Header */}
      <div className="space-y-3 border-b-2 border-slate-900 pb-4">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-black uppercase tracking-wider bg-slate-900 text-white px-2.5 py-0.5 rounded">
                Kindergarten Master Block
              </span>
              <span className="text-xs font-bold text-slate-600">Day {dailyBlock.day} of 180</span>
            </div>
            <h1 className="text-2xl font-black text-slate-950 mt-1 tracking-tight">
              Daily Learning Agenda & Field Trip Guide
            </h1>
            <p className="text-xs text-slate-700 font-medium italic mt-0.5">
              Theme: {dailyBlock.theme}
            </p>
          </div>

          {/* Student & Date Info Lines */}
          <div className="text-right space-y-1 text-xs">
            <div>
              <span className="font-bold text-slate-600">Child's Name: </span>
              <span className="inline-block border-b-2 border-slate-400 w-36 ml-1" />
            </div>
            <div>
              <span className="font-bold text-slate-600">Date: </span>
              <span className="inline-block border-b-2 border-slate-400 w-36 ml-1" />
            </div>
          </div>
        </div>
      </div>

      {/* Materials Checklist Box */}
      <div className="bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs space-y-1.5 my-3">
        <div className="flex items-center gap-1.5 font-black text-slate-900 uppercase text-[10px] tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-indigo-700" />
          <span>Quick Morning Prep: Materials Needed Today</span>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-slate-700">
          {materials.map((m, idx) => (
            <span key={idx} className="flex items-center gap-1">
              <span className="inline-block w-2.5 h-2.5 border border-slate-400 rounded-xs bg-white" />
              <span>{m}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Daily Time Block Schedule Table */}
      <div className="space-y-2 flex-1 my-2">
        <div className="text-[11px] font-black uppercase text-slate-800 tracking-wider">
          Structured Daily Schedule & Hands-On Focus
        </div>
        <table className="w-full text-xs border border-slate-300 rounded-lg overflow-hidden border-collapse">
          <thead>
            <tr className="bg-slate-100 text-slate-800 text-left border-b border-slate-300 font-black text-[11px]">
              <th className="p-2 border-r border-slate-300 w-32">Time & Slot</th>
              <th className="p-2 border-r border-slate-300 w-44">Subject & Framework</th>
              <th className="p-2 border-r border-slate-300">Hands-On Activity Focus</th>
              <th className="p-2 text-center w-14">Done</th>
            </tr>
          </thead>
          <tbody>
            {dailyBlock.timeBlocks.map((block, idx) => (
              <tr key={block.id} className="border-b border-slate-200 text-[11px]">
                <td className="p-2 font-bold text-slate-800 border-r border-slate-200">
                  <div>{block.timeSlot}</div>
                  <div className="text-[10px] text-slate-500 font-normal">({block.durationMinutes} min)</div>
                </td>
                <td className="p-2 border-r border-slate-200">
                  <div className="font-extrabold text-slate-900">{block.title}</div>
                  <div className="text-[9px] text-slate-500 truncate">{block.standard}</div>
                </td>
                <td className="p-2 border-r border-slate-200 leading-snug">
                  <span className="font-bold text-slate-900">{block.handsOnActivity.title}: </span>
                  <span className="text-slate-700">{block.handsOnActivity.steps[0]}</span>
                </td>
                <td className="p-2 text-center align-middle">
                  <span className="inline-block w-4 h-4 border-2 border-slate-400 rounded-sm" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Field Trip & Experiential Learning Section */}
      {dailyBlock.fieldTrip && (
        <div className="border-2 border-emerald-800/80 bg-emerald-50/50 rounded-xl p-3.5 space-y-2 text-xs my-2">
          <div className="flex items-center justify-between border-b border-emerald-200 pb-1.5">
            <div className="flex items-center gap-1.5 font-black text-emerald-950 text-xs">
              <Compass className="w-4 h-4 text-emerald-700" />
              <span>Experiential Immersion: {dailyBlock.fieldTrip.title}</span>
            </div>
            <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
              {dailyBlock.fieldTrip.duration}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-[11px]">
            <div>
              <span className="font-black text-emerald-900 block mb-1">
                🌲 Outdoor Scavenger Checklist:
              </span>
              <ul className="space-y-0.5 text-emerald-950">
                {dailyBlock.fieldTrip.outdoorMission.scavengerChecklist.slice(0, 4).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1">
                    <span className="inline-block w-2.5 h-2.5 border border-emerald-600 rounded-xs bg-white shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="font-black text-emerald-900 block mb-1">
                💬 3 Conversational Walk Prompts:
              </span>
              <ul className="list-disc list-inside space-y-0.5 text-emerald-950 leading-tight">
                {dailyBlock.fieldTrip.conversationPrompts.map((p, idx) => (
                  <li key={idx} className="truncate">
                    {p.question}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Footer / Daily Star Mastery */}
      <div className="border-t border-slate-300 pt-3 flex items-center justify-between text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <span className="font-black text-slate-800">Daily Mastery Stamp:</span>
          <span className="text-amber-500 font-bold tracking-widest text-sm">⭐⭐⭐</span>
          <span className="text-[11px] text-slate-500">(Color in your 3 golden stars!)</span>
        </div>
        <div className="text-right">
          <span className="font-bold">Educator/Parent Sign-off: </span>
          <span className="inline-block border-b border-slate-400 w-28 ml-1" />
        </div>
      </div>
    </div>
  );
}
