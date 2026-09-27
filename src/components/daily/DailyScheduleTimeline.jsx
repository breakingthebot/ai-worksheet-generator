// src/components/daily/DailyScheduleTimeline.jsx
// Interactive daily schedule timeline displaying time blocks, hands-on activities, and parent scripts.
// Connects to: src/domain/curriculum/kindergarten/day01Block.js, src/components/daily/DailyDashboard.jsx
// Created: 2026-09-27

import React, { useState } from 'react';
import {
  Clock,
  CheckCircle2,
  Circle,
  ChevronDown,
  ChevronUp,
  FileText,
  ShoppingBag,
  Sparkles,
  BookOpen,
  Coffee,
  Compass,
  Award,
  Layers,
} from 'lucide-react';
import { extractConsolidatedMaterials } from '../../domain/curriculum/dailyBlockModel.js';

/**
 * Visual color styles per block category
 */
const CATEGORY_STYLES = {
  phonics_literacy: {
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    text: 'text-purple-900',
    pillBg: 'bg-purple-100 text-purple-800',
    icon: '🔤',
    accent: 'bg-purple-600',
  },
  math_exploration: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-900',
    pillBg: 'bg-blue-100 text-blue-800',
    icon: '📐',
    accent: 'bg-blue-600',
  },
  brain_break_snack: {
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    text: 'text-amber-900',
    pillBg: 'bg-amber-100 text-amber-800',
    icon: '🍎',
    accent: 'bg-amber-500',
  },
  science_discovery: {
    bg: 'bg-teal-50',
    border: 'border-teal-200',
    text: 'text-teal-900',
    pillBg: 'bg-teal-100 text-teal-800',
    icon: '🔬',
    accent: 'bg-teal-600',
  },
  social_studies: {
    bg: 'bg-rose-50',
    border: 'border-rose-200',
    text: 'text-rose-900',
    pillBg: 'bg-rose-100 text-rose-800',
    icon: '🗺️',
    accent: 'bg-rose-600',
  },
  field_trip_immersion: {
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    text: 'text-emerald-900',
    pillBg: 'bg-emerald-100 text-emerald-800',
    icon: '🧭',
    accent: 'bg-emerald-600',
  },
  reflection_mastery: {
    bg: 'bg-yellow-50',
    border: 'border-yellow-200',
    text: 'text-yellow-900',
    pillBg: 'bg-yellow-100 text-yellow-800',
    icon: '⭐',
    accent: 'bg-yellow-500',
  },
};

/**
 * Interactive Timeline for a complete Daily Block.
 * 
 * @param {Object} props
 * @param {Object} props.dailyBlock - Complete daily block object
 * @param {Function} props.onSelectWorksheet - Callback to jump to worksheet view for a subject
 * @returns {JSX.Element}
 */
export default function DailyScheduleTimeline({ dailyBlock, onSelectWorksheet }) {
  if (!dailyBlock) return null;

  const [completedBlocks, setCompletedBlocks] = useState({});
  const [expandedBlockId, setExpandedBlockId] = useState(dailyBlock.timeBlocks[0]?.id || null);
  const [showMaterialsDrawer, setShowMaterialsDrawer] = useState(false);

  const materials = extractConsolidatedMaterials(dailyBlock);

  const toggleComplete = (blockId) => {
    setCompletedBlocks((prev) => ({
      ...prev,
      [blockId]: !prev[blockId],
    }));
  };

  const completedCount = Object.values(completedBlocks).filter(Boolean).length;
  const totalBlocks = dailyBlock.timeBlocks.length;
  const progressPercent = Math.round((completedCount / totalBlocks) * 100);

  return (
    <div className="space-y-6">
      {/* 1. Daily Progress & Materials Bar */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs flex flex-wrap items-center justify-between gap-4">
        {/* Progress tracker */}
        <div className="space-y-1.5 min-w-[200px] flex-1">
          <div className="flex items-center justify-between text-xs font-bold text-slate-700">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Day {dailyBlock.day} Routine Progress:
            </span>
            <span className="text-indigo-600">
              {completedCount} of {totalBlocks} Blocks ({progressPercent}%)
            </span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden border border-slate-200">
            <div
              className="bg-emerald-500 h-full transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Materials Toggle Button */}
        <button
          onClick={() => setShowMaterialsDrawer((prev) => !prev)}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
            showMaterialsDrawer
              ? 'bg-indigo-600 text-white border-indigo-700'
              : 'bg-indigo-50 hover:bg-indigo-100 text-indigo-900 border-indigo-200'
          }`}
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Daily Materials Checklist ({materials.length})</span>
          {showMaterialsDrawer ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Collapsible Consolidated Materials Drawer */}
      {showMaterialsDrawer && (
        <div className="bg-white border-2 border-indigo-200 rounded-2xl p-5 shadow-xs space-y-3 animate-in fade-in duration-200">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <h3 className="text-xs font-black uppercase tracking-wider text-indigo-950 flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-indigo-600" />
              Consolidated Materials Needed Today:
            </h3>
            <span className="text-[11px] text-slate-500">Everything needed across all 7 blocks</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 pt-1 text-xs">
            {materials.map((mat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-slate-50 border border-slate-200/80 px-3 py-2 rounded-xl text-slate-800"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                <span>{mat}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. Scheduled Time Blocks Timeline */}
      <div className="space-y-4">
        {dailyBlock.timeBlocks.map((block, idx) => {
          const style = CATEGORY_STYLES[block.category] || CATEGORY_STYLES.phonics_literacy;
          const isDone = !!completedBlocks[block.id];
          const isExpanded = expandedBlockId === block.id;

          return (
            <div
              key={block.id}
              className={`bg-white border rounded-2xl overflow-hidden shadow-xs transition-all ${
                isDone ? 'border-emerald-300 opacity-90' : isExpanded ? 'border-indigo-300 ring-2 ring-indigo-100' : 'border-slate-200'
              }`}
            >
              {/* Block Header Row */}
              <div className="p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3 bg-white">
                <div className="flex items-center gap-3 flex-1 min-w-[240px]">
                  {/* Completion Checkbox */}
                  <button
                    onClick={() => toggleComplete(block.id)}
                    className="p-1 text-slate-400 hover:text-emerald-600 transition-colors cursor-pointer"
                    title={isDone ? 'Mark Incomplete' : 'Mark Complete'}
                  >
                    {isDone ? (
                      <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                    ) : (
                      <Circle className="w-6 h-6 text-slate-300 hover:text-slate-400" />
                    )}
                  </button>

                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`text-[11px] font-black uppercase px-2 py-0.5 rounded-md ${style.pillBg}`}>
                        {style.icon} {block.timeSlot}
                      </span>
                      <span className="text-[11px] text-slate-500 font-semibold">
                        • {block.durationMinutes} min
                      </span>
                      {block.standard && (
                        <span className="hidden md:inline-block text-[10px] text-slate-400 font-medium truncate max-w-xs">
                          {block.standard}
                        </span>
                      )}
                    </div>
                    <h3
                      className={`text-sm sm:text-base font-extrabold cursor-pointer transition-colors ${
                        isDone ? 'line-through text-slate-400' : 'text-slate-900 hover:text-indigo-600'
                      }`}
                      onClick={() => setExpandedBlockId(isExpanded ? null : block.id)}
                    >
                      {block.title}
                    </h3>
                  </div>
                </div>

                {/* Right Action Buttons */}
                <div className="flex items-center gap-2">
                  {block.worksheetId && onSelectWorksheet && (
                    <button
                      onClick={() => onSelectWorksheet(block.worksheetId)}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-xs rounded-xl border border-indigo-200 transition-colors cursor-pointer shadow-2xs"
                      title="View & Print the matching worksheet for this lesson"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Open Worksheet</span>
                    </button>
                  )}

                  <button
                    onClick={() => setExpandedBlockId(isExpanded ? null : block.id)}
                    className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer transition-colors"
                    title={isExpanded ? 'Collapse Details' : 'Expand Details'}
                  >
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Expandable Activity & Coaching Script Details */}
              {isExpanded && (
                <div className="p-4 sm:p-6 bg-slate-50/70 border-t border-slate-100 space-y-4 text-xs animate-in fade-in duration-150">
                  {/* Hands-On Activity Steps */}
                  <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-2">
                    <span className="font-black text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                      Hands-On Lesson Activity: {block.handsOnActivity.title}
                    </span>
                    <ol className="list-decimal list-inside space-y-1.5 text-slate-700 leading-relaxed pt-1">
                      {block.handsOnActivity.steps.map((step, sIdx) => (
                        <li key={sIdx} className="pl-1">
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Materials Tag List */}
                  {block.materials && block.materials.length > 0 && (
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-[11px] font-bold text-slate-500">Materials for this block:</span>
                      {block.materials.map((m, mIdx) => (
                        <span
                          key={mIdx}
                          className="bg-white text-slate-700 border border-slate-200 text-[11px] px-2.5 py-0.5 rounded-lg font-medium"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Word-for-Word Parent Coaching Script */}
                  {block.script && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                      <div className="bg-indigo-50/60 border border-indigo-100 rounded-xl p-3 space-y-1">
                        <span className="font-extrabold text-indigo-900 block text-[11px] uppercase tracking-wider">
                          🗣️ Say This:
                        </span>
                        <p className="italic text-slate-800 leading-relaxed bg-white p-2.5 rounded-lg border border-indigo-100">
                          {block.script.sayThis}
                        </p>
                      </div>

                      <div className="bg-white border border-slate-200 rounded-xl p-3 space-y-1">
                        <span className="font-extrabold text-slate-800 block text-[11px] uppercase tracking-wider">
                          🖐️ What to Do:
                        </span>
                        <p className="text-slate-700 leading-relaxed bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                          {block.script.whatToDo}
                        </p>
                      </div>

                      <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-3 space-y-1">
                        <span className="font-extrabold text-emerald-900 block text-[11px] uppercase tracking-wider">
                          👁️ What to Look For:
                        </span>
                        <p className="text-emerald-950 leading-relaxed bg-white p-2.5 rounded-lg border border-emerald-100">
                          {block.script.whatToLookFor}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
