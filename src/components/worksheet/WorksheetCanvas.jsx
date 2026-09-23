// src/components/worksheet/WorksheetCanvas.jsx
// Printable 8.5x11 (Letter) worksheet page canvas supporting Traditional and Developmental layouts.
// Connects to: src/components/traditional/, src/components/math/, src/components/phonics/
// Created: 2026-09-22

import React, { useState } from 'react';
import StudentHeader from '../common/StudentHeader.jsx';
import TenFrameView from '../math/TenFrameView.jsx';
import NumberBondView from '../math/NumberBondView.jsx';
import DictationGrid from '../phonics/DictationGrid.jsx';
import ScienceSection from '../science/ScienceSection.jsx';
import SocialStudiesSection from '../social/SocialStudiesSection.jsx';
import ScissorCutStrip from '../ergonomics/ScissorCutStrip.jsx';
import VerticalMathGrid from '../traditional/VerticalMathGrid.jsx';
import ReadingPassageView from '../traditional/ReadingPassageView.jsx';
import WordProblemCard from '../traditional/WordProblemCard.jsx';
import MatchingColumnView from '../traditional/MatchingColumnView.jsx';
import SentenceEditingView from '../traditional/SentenceEditingView.jsx';
import CountingObjectsView from '../math/CountingObjectsView.jsx';
import { ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

export default function WorksheetCanvas({ worksheet, showCountingDots = false }) {
  if (!worksheet) return null;

  const [isGuideOpen, setIsGuideOpen] = useState(true);
  const {
    title,
    framework,
    instructions,
    problems = [],
    verticalMath,
    readingPassage,
    wordProblems = [],
    matchingData,
    editingData,
    cutStrip,
    nonsenseDrill,
    parentGuide,
    kidDirections,
  } = worksheet;

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

          {/* TRADITIONAL COMPONENT 1: Reading Comprehension Passage */}
          {readingPassage && <ReadingPassageView passageData={readingPassage} />}

          {/* TRADITIONAL COMPONENT 2: Vertical Stacked Arithmetic Drills */}
          {verticalMath && (
            <VerticalMathGrid
              problems={verticalMath.problems}
              title={verticalMath.title}
              showCountingDots={showCountingDots}
            />
          )}

          {/* TRADITIONAL COMPONENT 3: Story Word Problems */}
          {wordProblems && wordProblems.length > 0 && (
            <div className="space-y-4 mb-6">
              {wordProblems.map((wp) => (
                <WordProblemCard key={wp.id || wp.number} problem={wp} />
              ))}
            </div>
          )}

          {/* TRADITIONAL COMPONENT 4: Matching Columns */}
          {matchingData && <MatchingColumnView matchingData={matchingData} />}

          {/* TRADITIONAL COMPONENT 5: Sentence Editing & Grammar */}
          {editingData && <SentenceEditingView editingData={editingData} />}

          {/* DEVELOPMENTAL COMPONENT: Standard Problem Grid (Ten-frames, Bonds, etc.) */}
          {problems && problems.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {problems.map((problem) => {
                if (problem.type === 'ten-frame') {
                  return <TenFrameView key={problem.id} problem={problem} />;
                }
                if (
                  problem.type === 'counting-objects' ||
                  problem.type === 'quantity-comparison' ||
                  problem.type === 'numeral-comparison'
                ) {
                  return <CountingObjectsView key={problem.id} problem={problem} />;
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
                if (problem.type === 'social-studies') {
                  return <SocialStudiesSection key={problem.id} problem={problem} />;
                }
                return (
                  <div key={problem.id} className="border p-3 rounded">
                    <span className="font-bold">#{problem.number}: </span>
                    {problem.prompt || problem.word || problem.item}
                  </div>
                );
              })}
            </div>
          )}

          {/* Optional Nonsense Word Drill for Phonics */}
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
            <span>AI-Worksheet Studio — Traditional & Developmental K-12 Curriculum Engine</span>
            <span>Page 1 of 1</span>
          </footer>
        </div>
      </div>
    </div>
  );
}
