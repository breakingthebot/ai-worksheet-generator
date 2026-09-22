// src/components/worksheet/WorksheetCanvas.jsx
// Printable 8.5x11 (Letter) worksheet page canvas with Parent Guide and Kid-Friendly Directions.
// Connects to: src/components/common/StudentHeader.jsx, src/components/ergonomics/ScissorCutStrip.jsx
// Created: 2026-09-22

import React, { useState } from 'react';
import StudentHeader from '../common/StudentHeader.jsx';
import TenFrameView from '../math/TenFrameView.jsx';
import NumberBondView from '../math/NumberBondView.jsx';
import DictationGrid from '../phonics/DictationGrid.jsx';
import ScienceSection from '../science/ScienceSection.jsx';
import ScissorCutStrip from '../ergonomics/ScissorCutStrip.jsx';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

export default function WorksheetCanvas({ worksheet }) {
  if (!worksheet) return null;

  const [isGuideOpen, setIsGuideOpen] = useState(true);
  const { title, framework, instructions, problems, cutStrip, nonsenseDrill, parentGuide, kidDirections } = worksheet;

  return (
    <div className="w-full max-w-[840px] mx-auto space-y-4">
      {/* 1. "Why We Are Doing This" — Parent & Educator Guide Banner (Hidden on print) */}
      {parentGuide && (
        <div className="bg-indigo-950 text-white rounded-xl p-4 shadow-sm border border-indigo-900 no-print transition-all">
          <div
            onClick={() => setIsGuideOpen(!isGuideOpen)}
            className="flex justify-between items-center cursor-pointer select-none"
          >
            <div className="flex items-center gap-2">
              <span className="p-1 bg-indigo-800 rounded text-amber-300">
                <Sparkles className="w-4 h-4" />
              </span>
              <div>
                <h3 className="text-xs sm:text-sm font-bold tracking-tight">
                  Parent & Educator Guide: Why We Are Doing This
                </h3>
                <span className="text-[11px] text-indigo-300 font-medium">
                  {parentGuide.standard || framework}
                </span>
              </div>
            </div>
            <button className="text-indigo-300 hover:text-white p-1">
              {isGuideOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {isGuideOpen && (
            <div className="mt-3 pt-3 border-t border-indigo-900/80 text-xs space-y-2.5 text-indigo-100">
              <p className="leading-relaxed">
                <span className="font-bold text-amber-300">The Cognitive Goal: </span>
                {parentGuide.whyWeAreDoingThis}
              </p>
              {parentGuide.whatToWatchFor && (
                <div className="bg-indigo-900/60 p-2.5 rounded-lg border border-indigo-800">
                  <span className="font-bold text-emerald-300 block mb-0.5">👁️ What to Watch For:</span>
                  <span>{parentGuide.whatToWatchFor}</span>
                </div>
              )}
              {parentGuide.verbalCue && (
                <div className="text-[11px] text-indigo-200 italic">
                  <span className="font-semibold text-white not-italic">🗣️ What to Say: </span>
                  {parentGuide.verbalCue}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* 2. The 8.5x11 Printable Page Container */}
      <div className="print-page w-full min-h-[1050px] bg-white rounded-2xl shadow-xl border border-slate-200 p-8 sm:p-12 mx-auto flex flex-col justify-between transition-all">
        <div>
          {/* Top Student Header */}
          <StudentHeader title={title} framework={framework || parentGuide?.standard} />

          {/* Kid-Centric Directions Callout */}
          <div className="bg-amber-50/70 border-2 border-amber-300/80 rounded-xl p-3.5 mb-6">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-900 bg-amber-200/80 px-2 py-0.5 rounded">
                {kidDirections?.badge || 'Student Directions'}
              </span>
              {kidDirections?.icons && (
                <div className="flex gap-1 text-sm">
                  {kidDirections.icons.map((icon, i) => (
                    <span key={i}>{icon}</span>
                  ))}
                </div>
              )}
            </div>
            <p className="text-xs sm:text-sm font-bold text-amber-950 leading-snug">
              {kidDirections?.text || instructions}
            </p>
          </div>

          {/* Problems Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {problems.map((problem) => {
              if (problem.type === 'ten-frame') {
                return <TenFrameView key={problem.id} problem={problem} />;
              }
              if (problem.type === 'number-bond') {
                return <NumberBondView key={problem.id} problem={problem} />;
              }
              if (problem.type === 'phonics-dictation') {
                return <DictationGrid key={problem.id} problem={problem} />;
              }
              if (problem.type === 'science-classification' || problem.type === 'science-inquiry') {
                return <ScienceSection key={problem.id} problem={problem} />;
              }
              return (
                <div key={problem.id} className="border p-3 rounded">
                  <span className="font-bold">#{problem.number}: </span>
                  {problem.prompt || problem.word || problem.item}
                </div>
              );
            })}
          </div>

          {/* Nonsense Drill for Phonics */}
          {nonsenseDrill && (
            <div className="mt-6 p-4 border-2 border-dashed border-amber-300 bg-amber-50/50 rounded-lg">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-2">
                {nonsenseDrill.instructions}
              </h4>
              <div className="flex gap-4 justify-around">
                {nonsenseDrill.words.map((w, i) => (
                  <span
                    key={i}
                    className="font-mono text-base font-bold text-amber-950 bg-white px-3 py-1 rounded border border-amber-200 shadow-sm"
                  >
                    {w}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div>
          {/* Pediatric Scissor Cut Strip */}
          <ScissorCutStrip cutStrip={cutStrip} />

          {/* Page Footer */}
          <footer className="mt-6 pt-3 border-t border-slate-200 flex justify-between items-center text-[10px] text-slate-400">
            <span>AI-Worksheet Generator — Curriculum Blueprint & Learning Pathway</span>
            <span>Page 1 of 1</span>
          </footer>
        </div>
      </div>
    </div>
  );
}
