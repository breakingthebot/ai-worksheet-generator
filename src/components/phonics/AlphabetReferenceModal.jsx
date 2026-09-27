// src/components/phonics/AlphabetReferenceModal.jsx
// Interactive Kindergarten Alphabet A-Z Reference Modal
// Features: Full 26 letters A-Z, articulatory mouth cues, 3-line stroke chants, anchor emojis, sound clips
// Connects to: src/domain/curriculum/kindergarten/alphabetStandards.js, src/components/daily/DailyDashboard.jsx
// Created: 2026-09-27

import React, { useState } from 'react';
import { X, Volume2, Sparkles, Pencil } from 'lucide-react';
import { ALPHABET_A_TO_Z } from '../../domain/curriculum/kindergarten/alphabetStandards.js';
import PrimaryThreeLine from '../scaffolds/PrimaryThreeLine.jsx';

export default function AlphabetReferenceModal({ isOpen, onClose }) {
  const [selectedKey, setSelectedKey] = useState('a');

  if (!isOpen) return null;

  const current = ALPHABET_A_TO_Z[selectedKey] || ALPHABET_A_TO_Z.a;
  const alphabetKeys = Object.keys(ALPHABET_A_TO_Z);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl border-4 border-indigo-200 flex flex-col">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white p-4 sm:p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl select-none">🔤</span>
            <div>
              <h2 className="text-base sm:text-lg font-black tracking-tight">
                Kindergarten Alphabet A–Z Master Reference
              </h2>
              <p className="text-xs text-indigo-100 font-medium">
                Accredited Science of Reading • Mouth Cues, Stroke Chants & Anchor Sounds
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            title="Close Alphabet Guide"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 26-Letter Selector Ribbon */}
        <div className="p-3 bg-slate-50 border-b border-slate-200 overflow-x-auto">
          <div className="flex gap-1.5 min-w-max pb-1">
            {alphabetKeys.map((key) => {
              const item = ALPHABET_A_TO_Z[key];
              const isSelected = selectedKey === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSelectedKey(key)}
                  className={`w-9 h-10 rounded-xl font-black text-sm transition-all flex flex-col items-center justify-center cursor-pointer ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-md scale-105'
                      : 'bg-white hover:bg-indigo-50 text-slate-700 border border-slate-200'
                  }`}
                >
                  <span className="leading-none">{item.letter}</span>
                  <span className="text-[10px] opacity-80 leading-none">{item.lowercase}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Letter Spotlight Card */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border-2 border-indigo-100">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-2xl bg-white border-2 border-indigo-300 flex items-center justify-center shadow-xs">
                <span className="text-4xl font-black text-indigo-900 font-mono">
                  {current.letter} {current.lowercase}
                </span>
              </div>
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-indigo-700 bg-indigo-100/80 px-2.5 py-0.5 rounded-full">
                  Phonetic Sound: {current.sound}
                </span>
                <h3 className="text-xl font-black text-slate-900 mt-1 flex items-center gap-2">
                  <span>{current.anchorEmoji}</span>
                  <span className="capitalize">{current.anchorWord}</span>
                </h3>
                <p className="text-xs text-slate-600 italic mt-0.5">
                  "{current.alliteration}"
                </p>
              </div>
            </div>

            <div className="text-center sm:text-right bg-white px-4 py-2 rounded-xl border border-indigo-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Starter Dot</span>
              <span className="text-xs font-black text-emerald-700 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                {current.starterDot} line
              </span>
            </div>
          </div>

          {/* 3-Line Handwriting Guideline Preview */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-extrabold text-slate-800 flex items-center gap-1.5">
                <Pencil className="w-3.5 h-3.5 text-indigo-600" />
                Primary 3-Line Handwriting Guideline:
              </span>
              <span className="text-[11px] font-bold text-slate-400">
                Start at green dot •
              </span>
            </div>
            <PrimaryThreeLine
              text={`${current.letter} ${current.lowercase}    ${current.lowercase} ${current.lowercase} ${current.lowercase}`}
              starterDot={current.starterDot}
              height={56}
            />
          </div>

          {/* Articulation & Stroke Chant Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs">
            {/* Articulation Mouth Cue */}
            <div className="p-3.5 bg-amber-50/70 border border-amber-200 rounded-xl space-y-1">
              <span className="font-extrabold text-amber-900 block text-[11px] uppercase tracking-wider flex items-center gap-1">
                <span>🗣️</span> How to Make the Sound (Mouth Cue):
              </span>
              <p className="text-slate-800 leading-relaxed font-medium bg-white p-2.5 rounded-lg border border-amber-100">
                {current.mouthCue}
              </p>
            </div>

            {/* Stroke Formation Chant */}
            <div className="p-3.5 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-1">
              <span className="font-extrabold text-emerald-900 block text-[11px] uppercase tracking-wider flex items-center gap-1">
                <span>✏️</span> Pencil Stroke Chant (Say as you write):
              </span>
              <p className="text-slate-800 leading-relaxed font-semibold italic bg-white p-2.5 rounded-lg border border-emerald-100">
                "{current.strokeChant}"
              </p>
            </div>
          </div>

          {/* Decodable Word Bank */}
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block mb-1.5">
              Sample Decodable Words with {current.letter}:
            </span>
            <div className="flex flex-wrap gap-2">
              {current.sampleWords.map((word, idx) => (
                <span
                  key={idx}
                  className="font-mono text-xs font-bold text-indigo-900 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-between items-center text-xs">
          <span className="text-slate-500 font-semibold">
            All 26 Letters • CKLA & Orton-Gillingham Standards
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors cursor-pointer"
          >
            Close Alphabet Guide
          </button>
        </div>
      </div>
    </div>
  );
}
