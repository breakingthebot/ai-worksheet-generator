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
import MatchingColumnView from './MatchingColumnView.jsx';
import CountingObjectsView from '../math/CountingObjectsView.jsx';
import PrimaryThreeLine from '../scaffolds/PrimaryThreeLine.jsx';
import FiveTenFrame from '../scaffolds/FiveTenFrame.jsx';
import ElkoninSoundBoxes from '../scaffolds/ElkoninSoundBoxes.jsx';
import { ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

export default function WorksheetCanvas({ worksheet, showCountingDots = false }) {
  if (!worksheet) return null;

  const [isGuideOpen, setIsGuideOpen] = useState(true);
  const {
    title,
    framework,
    instructions,
    problems = [],
    matchingData,
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
          <div className="bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 border-2 border-amber-300 rounded-2xl p-4 mb-6 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-1.5">
                <span className="text-base select-none">🚀</span>
                <span className="text-xs font-black uppercase tracking-wider text-amber-950 bg-amber-200/90 px-3 py-1 rounded-full border border-amber-300 shadow-2xs">
                  {kidDirections?.badge || "Today's Superstar Mission"}
                </span>
              </div>
              {kidDirections?.icons && (
                <div className="flex items-center gap-1.5 bg-white/80 px-2 py-0.5 rounded-lg border border-amber-200/60 text-sm select-none">
                  {kidDirections.icons.map((icon, i) => (
                    <span key={i}>{icon}</span>
                  ))}
                </div>
              )}
            </div>
            <p className="text-sm sm:text-base font-black text-amber-950 leading-snug tracking-wide">
              {kidDirections?.text || instructions}
            </p>
            {kidDirections?.mouthCue && (
              <div className="mt-2.5 p-2 bg-indigo-50/90 border border-indigo-200 rounded-xl text-xs font-bold text-indigo-950 flex items-start gap-2 shadow-2xs">
                <span className="text-base select-none shrink-0">🗣️</span>
                <div>
                  <span className="text-[10px] uppercase font-black tracking-wider text-indigo-700 block">Mouth Articulation Cue:</span>
                  <span className="font-semibold text-slate-800">{kidDirections.mouthCue}</span>
                </div>
              </div>
            )}
            {kidDirections?.strokeChant && (
              <div className="mt-1.5 p-2 bg-emerald-50/90 border border-emerald-200 rounded-xl text-xs font-bold text-emerald-950 flex items-start gap-2 shadow-2xs">
                <span className="text-base select-none shrink-0">✏️</span>
                <div>
                  <span className="text-[10px] uppercase font-black tracking-wider text-emerald-700 block">Pencil Stroke Chant:</span>
                  <span className="font-semibold text-slate-800 italic">"{kidDirections.strokeChant}"</span>
                </div>
              </div>
            )}
            <div className="mt-2 pt-2 border-t border-amber-200/60 flex items-center justify-between text-[11px] font-bold text-amber-800">
              <span className="flex items-center gap-1">
                <span>⭐</span> Take your time and do your best!
              </span>
              <span className="hidden sm:inline-block text-amber-700 font-semibold italic">
                You can do it! ✨
              </span>
            </div>
          </div>

          {/* Matching Columns (Eureka Math / CKLA Sorting & Connecting) */}
          {matchingData && <MatchingColumnView matchingData={matchingData} />}

          {/* DEVELOPMENTAL COMPONENT: Standard Problem Grid (Ten-frames, Bonds, etc.) */}
          {problems && problems.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {problems.map((problem) => {
                if (problem.type === 'primary-three-line') {
                  return (
                    <div key={problem.id} className="p-3 bg-white border border-slate-200 rounded-xl shadow-2xs">
                      {problem.prompt && (
                        <span className="font-bold text-xs text-slate-700 block mb-1">
                          {problem.prompt}
                        </span>
                      )}
                      <PrimaryThreeLine
                        text={problem.text || ''}
                        starterDot={problem.starterDot || 'midline'}
                        label={problem.label || ''}
                      />
                    </div>
                  );
                }
                if (problem.type === 'five-frame') {
                  return (
                    <div key={problem.id} className="p-4 bg-white border border-slate-200 rounded-xl flex flex-col items-center shadow-2xs">
                      {problem.prompt && (
                        <span className="font-bold text-sm text-slate-800 mb-2 text-center">
                          {problem.prompt}
                        </span>
                      )}
                      <FiveTenFrame
                        count={problem.count || 0}
                        totalBoxes={5}
                        counterType={problem.counterType || 'star'}
                        showNumbers={problem.showNumbers}
                      />
                      {problem.subprompt && (
                        <span className="text-xs text-slate-500 mt-2 font-semibold text-center">
                          {problem.subprompt}
                        </span>
                      )}
                    </div>
                  );
                }
                if (problem.type === 'elkonin-box') {
                  return (
                    <ElkoninSoundBoxes
                      key={problem.id}
                      word={problem.word}
                      sounds={problem.sounds}
                      picture={problem.picture || problem.emoji}
                      showLetters={problem.showLetters}
                    />
                  );
                }
                if (problem.type === 'ten-frame') {
                  return <TenFrameView key={problem.id} problem={problem} />;
                }
                if (
                  problem.type === 'counting-objects' ||
                  problem.type === 'quantity-comparison' ||
                  problem.type === 'numeral-comparison' ||
                  problem.type === 'concrete-addition' ||
                  problem.type === 'concrete-subtraction' ||
                  problem.type === 'vertical-math' ||
                  problem.type === 'story-problem' ||
                  problem.type === 'fact-family' ||
                  problem.type === 'equation-balance'
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
                if (problem.topIcon && problem.bottomIcon) {
                  return (
                    <div
                      key={problem.id}
                      className="p-4 bg-white border border-slate-200 rounded-2xl flex flex-col items-center justify-between min-h-[150px] shadow-2xs"
                    >
                      <div className="flex items-center gap-2 text-slate-800 font-bold text-xs">
                        <span className="text-2xl">{problem.topIcon}</span>
                        <span
                          className="w-3.5 h-3.5 rounded-full bg-emerald-500 border border-emerald-600 inline-block shadow-2xs"
                          title="Green starter dot"
                        />
                        <span className="text-[11px] text-emerald-800 font-bold">Start here • Pull DOWN</span>
                      </div>
                      <div className="w-0.5 h-16 border-l-2 border-dashed border-indigo-300 my-2 relative flex items-center justify-center">
                        <span className="text-indigo-400 text-xs">▼</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-800 font-bold text-xs">
                        <span className="text-2xl">{problem.bottomIcon}</span>
                        <span className="text-[11px] text-slate-600 font-medium">
                          {problem.prompt?.split('to the ')[1] || 'Baseline'}
                        </span>
                      </div>
                    </div>
                  );
                }
                if (problem.isHelperAction !== undefined || problem.caption) {
                  return (
                    <div
                      key={problem.id}
                      className="p-4 bg-white border border-slate-200 rounded-2xl flex items-center justify-between gap-3 shadow-2xs"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-3xl select-none">{problem.emoji}</span>
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-slate-800">
                            {problem.caption || problem.label}
                          </h4>
                          <span className="text-[11px] text-slate-500 leading-tight block">
                            {problem.label}
                          </span>
                        </div>
                      </div>
                      <div
                        className="w-10 h-10 rounded-full border-2 border-indigo-300 hover:border-indigo-600 flex items-center justify-center text-slate-300 hover:text-indigo-600 text-sm font-black select-none shrink-0 transition-colors"
                        title="Circle this helping hand"
                      >
                        ⭕
                      </div>
                    </div>
                  );
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
