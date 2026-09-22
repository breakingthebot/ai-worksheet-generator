// src/components/roadmap/RoadmapView.jsx
// Visual Curriculum Roadmap displaying progression milestones, mastery criteria, and action buttons.
// Connects to: src/domain/curriculum/roadmap.js, src/App.jsx
// Created: 2026-09-22

import React, { useState } from 'react';
import { CURRICULUM_ROADMAP } from '../../domain/curriculum/roadmap.js';
import { CheckCircle2, AlertCircle, ArrowRight, BookOpen, Brain, PenTool } from 'lucide-react';

export default function RoadmapView({ onSelectWorksheet, onOpenNotes, milestoneStatus = {} }) {
  const [filterSubject, setFilterSubject] = useState('all');

  const filtered = filterSubject === 'all'
    ? CURRICULUM_ROADMAP
    : CURRICULUM_ROADMAP.filter((m) => m.subject === filterSubject);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Top Banner */}
      <div className="bg-indigo-900 text-white rounded-2xl p-6 shadow-md">
        <div className="flex items-center gap-2 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-2">
          <Brain className="w-4 h-4" />
          <span>Evidence-Based Learning Pathway</span>
        </div>
        <h2 className="text-2xl font-black tracking-tight mb-2">K-1 Developmental Curriculum Roadmap</h2>
        <p className="text-sm text-indigo-100 max-w-2xl leading-relaxed">
          Follow this sequenced pathway to ensure your child builds lasting mental models. Each milestone defines explicit cognitive criteria for when to move on versus when to keep practicing.
        </p>

        {/* Filter Pills */}
        <div className="flex gap-2 mt-4 pt-4 border-t border-indigo-800/80">
          {[
            { id: 'all', label: 'All Subjects' },
            { id: 'math', label: 'Mathematics' },
            { id: 'phonics', label: 'Phonics & Literacy' },
            { id: 'science', label: 'Science & STEM' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilterSubject(tab.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                filterSubject === tab.id
                  ? 'bg-white text-indigo-950 shadow-sm'
                  : 'bg-indigo-800/50 hover:bg-indigo-800 text-indigo-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Milestones List */}
      <div className="space-y-4">
        {filtered.map((milestone) => {
          const status = milestoneStatus[milestone.id]?.status || 'Not Started';
          const lastScore = milestoneStatus[milestone.id]?.lastScore;

          return (
            <div
              key={milestone.id}
              className="bg-white border-2 border-slate-200 hover:border-slate-300 rounded-xl p-5 sm:p-6 shadow-xs transition-all space-y-4"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 font-extrabold text-xs flex items-center justify-center">
                    #{milestone.stageNumber}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{milestone.title}</h3>
                    <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wide">
                      {milestone.standard}
                    </span>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="flex items-center gap-2">
                  {lastScore !== undefined && (
                    <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                      Last Score: {lastScore}%
                    </span>
                  )}
                  <span
                    className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                      status === 'Mastered'
                        ? 'bg-emerald-100 text-emerald-800'
                        : status === 'Needs Practice'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {status}
                  </span>
                </div>
              </div>

              {/* Why This Matters */}
              <div className="bg-slate-50 border-l-4 border-indigo-600 p-3 rounded-r text-xs text-slate-700 leading-relaxed">
                <span className="font-bold text-indigo-900 block mb-0.5">🧠 Why This Matters:</span>
                {milestone.whyItMatters}
              </div>

              {/* Decision Rules Grid (When to move on vs keep practicing) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                {/* Move on */}
                <div className="border border-emerald-200 bg-emerald-50/50 rounded-lg p-3 space-y-1">
                  <div className="flex items-center gap-1.5 text-emerald-800 font-bold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>When to Move On (Mastery):</span>
                  </div>
                  <p className="text-emerald-950 pl-5 leading-normal">{milestone.moveOnCriteria}</p>
                </div>

                {/* Keep practicing */}
                <div className="border border-amber-200 bg-amber-50/50 rounded-lg p-3 space-y-1">
                  <div className="flex items-center gap-1.5 text-amber-800 font-bold">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>When to Keep Practicing (Signs):</span>
                  </div>
                  <p className="text-amber-950 pl-5 leading-normal">{milestone.keepPracticingCriteria}</p>
                </div>
              </div>

              {/* Verbal Coaching Prompt */}
              <div className="text-xs text-slate-500 italic bg-slate-50/70 p-2.5 rounded border border-slate-200">
                <span className="font-semibold not-italic text-slate-700">🗣️ Coaching Cue: </span>
                {milestone.parentVerbalCue}
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-2 pt-2">
                <button
                  onClick={() => onOpenNotes(milestone)}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                >
                  <PenTool className="w-3.5 h-3.5" />
                  Log Observation Notes
                </button>
                <button
                  onClick={() => onSelectWorksheet(milestone.defaultWorksheetId)}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors shadow-xs"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  Practice This Worksheet
                  <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
