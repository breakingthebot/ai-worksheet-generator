// src/components/controls/ControlPanel.jsx
// Interactive left sidebar for curriculum alignment, grade gating, and generation actions.
// Connects to: src/App.jsx
// Created: 2026-09-22

import React from 'react';
import { Printer, Sparkles, BookOpen, Key, Brain, Scissors } from 'lucide-react';
import { getDensityForGrade } from '../../domain/ergonomics/layoutRules.js';
import { getAllowedDomainsForGrade } from '../../domain/math/ccssGating.js';

export default function ControlPanel({
  config,
  onChangeConfig,
  onGenerate,
  onOpenAnswerKey,
  isGenerating,
}) {
  const density = getDensityForGrade(config.grade);
  const allowedMathDomains = getAllowedDomainsForGrade(config.grade);

  const handlePrint = () => {
    window.print();
  };

  return (
    <aside className="w-full lg:w-80 bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-6 no-print">
      {/* App Brand & Engine Tag */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <div className="p-1.5 bg-indigo-600 rounded-lg text-white">
            <Brain className="w-5 h-5" />
          </div>
          <h2 className="text-base font-bold text-slate-900 tracking-tight">Worksheet Generator</h2>
        </div>
        <p className="text-xs text-slate-500 font-medium">
          Anchored in CCSS, Singapore Math & Orton-Gillingham
        </p>
      </div>

      {/* Subject Tabs */}
      <div>
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
          Academic Subject
        </label>
        <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100 rounded-lg">
          {[
            { id: 'math', label: 'Math' },
            { id: 'phonics', label: 'Phonics' },
            { id: 'science', label: 'Science' },
          ].map((sub) => (
            <button
              key={sub.id}
              onClick={() => {
                let defaultFormat = 'ten-frame';
                if (sub.id === 'phonics') defaultFormat = 'decodable';
                if (sub.id === 'science') defaultFormat = 'plants-animals';
                onChangeConfig({ ...config, subject: sub.id, format: defaultFormat });
              }}
              className={`py-1.5 text-xs font-bold rounded-md transition-all ${
                config.subject === sub.id
                  ? 'bg-white text-indigo-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {sub.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grade Selector */}
      <div>
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
          Target Grade Level
        </label>
        <div className="grid grid-cols-5 gap-1">
          {['K', '1', '2', '3', '4'].map((g) => (
            <button
              key={g}
              onClick={() => onChangeConfig({ ...config, grade: g })}
              className={`py-1.5 text-xs font-bold border rounded-md transition-all ${
                config.grade === g
                  ? 'bg-indigo-50 border-indigo-600 text-indigo-700 font-extrabold'
                  : 'border-slate-200 text-slate-600 hover:border-slate-300'
              }`}
            >
              {g === 'K' ? 'Kind' : `Gr ${g}`}
            </button>
          ))}
        </div>
      </div>

      {/* Format Selector based on Subject */}
      <div>
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
          Pedagogical Model
        </label>

        {config.subject === 'math' && (
          <select
            value={config.format}
            onChange={(e) => onChangeConfig({ ...config, format: e.target.value })}
            className="w-full text-xs font-medium border border-slate-300 rounded-lg p-2.5 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          >
            <option value="ten-frame">2×5 Ten-Frames (Perceptual Subitizing)</option>
            <option value="number-bonds">Singapore Math Number Bonds (Part-Whole)</option>
          </select>
        )}

        {config.subject === 'phonics' && (
          <select
            value={config.format}
            onChange={(e) => onChangeConfig({ ...config, format: e.target.value })}
            className="w-full text-xs font-medium border border-slate-300 rounded-lg p-2.5 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          >
            <option value="decodable">OG Phase 2: CVC Decodable & Dictation Grid</option>
          </select>
        )}

        {config.subject === 'science' && (
          <select
            value={config.format}
            onChange={(e) => onChangeConfig({ ...config, format: e.target.value })}
            className="w-full text-xs font-medium border border-slate-300 rounded-lg p-2.5 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          >
            <option value="plants-animals">Core Knowledge: Needs of Plants & Animals</option>
            <option value="wilderness">Wilderness Science: Rule of Threes Survival</option>
          </select>
        )}
      </div>

      {/* Cognitive Density Control */}
      <div>
        <div className="flex justify-between items-center mb-1">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
            Problems Per Page
          </label>
          <span className="text-xs font-mono font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
            {config.count || density.idealProblemsPerPage}
          </span>
        </div>
        <input
          type="range"
          min="2"
          max={density.maxProblemsPerPage}
          value={config.count || density.idealProblemsPerPage}
          onChange={(e) => onChangeConfig({ ...config, count: parseInt(e.target.value, 10) })}
          className="w-full accent-indigo-600 cursor-pointer"
        />
        <div className="flex justify-between text-[10px] text-slate-400 mt-1">
          <span>Max safe density: {density.maxProblemsPerPage}</span>
          <span>Mitigates Cognitive Load</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-2 pt-2 border-t border-slate-200">
        <button
          onClick={onGenerate}
          disabled={isGenerating}
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg shadow-sm transition-all disabled:opacity-50"
        >
          <Sparkles className="w-4 h-4" />
          {isGenerating ? 'Compiling Rules...' : 'Generate Worksheet'}
        </button>

        <button
          onClick={handlePrint}
          className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition-all"
        >
          <Printer className="w-4 h-4" />
          Print / Save as PDF
        </button>

        <button
          onClick={onOpenAnswerKey}
          className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold rounded-lg transition-all"
        >
          <Key className="w-4 h-4" />
          View Teacher Answer Key
        </button>
      </div>

      {/* Engine Status Callout */}
      <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg text-[11px] text-slate-600 space-y-1">
        <div className="font-bold text-slate-700 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Pedagogical Engine Active
        </div>
        <p className="text-slate-500">
          Enforces CCSS domain gating and pediatric occupational motor safety.
        </p>
      </div>
    </aside>
  );
}
