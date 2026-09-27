// src/components/daily/FieldTripCard.jsx
// Interactive Experiential Field Trip & Real-World Immersion Guide.
// Connects to: src/domain/curriculum/kindergarten/day01Block.js, src/components/daily/DailyDashboard.jsx
// Created: 2026-09-27

import React, { useState } from 'react';
import {
  Compass,
  MapPin,
  Clock,
  CheckCircle2,
  Circle,
  MessageSquare,
  Home,
  Trees,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ShoppingBag,
} from 'lucide-react';

/**
 * Interactive Field Trip and Real-World Experiential Reinforcement Card.
 * 
 * @param {Object} props
 * @param {Object} props.fieldTrip - Field trip configuration object from the daily block
 * @returns {JSX.Element}
 */
export default function FieldTripCard({ fieldTrip }) {
  if (!fieldTrip) return null;

  const [activeTab, setActiveTab] = useState('outdoor'); // 'outdoor' | 'indoor'
  const [checkedItems, setCheckedItems] = useState({});
  const [expandedPromptIdx, setExpandedPromptIdx] = useState(0);

  const toggleCheck = (idx) => {
    setCheckedItems((prev) => ({
      ...prev,
      [`${activeTab}-${idx}`]: !prev[`${activeTab}-${idx}`],
    }));
  };

  const activeMission = activeTab === 'outdoor' ? fieldTrip.outdoorMission : fieldTrip.indoorAlternative;

  return (
    <div className="bg-gradient-to-br from-emerald-950 via-teal-950 to-slate-900 text-white rounded-3xl p-5 sm:p-7 shadow-xl border border-emerald-800/60 relative overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Header Row */}
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-emerald-800/60 pb-5">
        <div className="space-y-1.5 max-w-xl">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-emerald-300 bg-emerald-900/80 border border-emerald-700/80 px-3 py-1 rounded-full">
              <Compass className="w-3.5 h-3.5 text-emerald-400 animate-spin-slow" />
              Real-World Experiential Immersion
            </span>
            <span className="flex items-center gap-1 text-xs text-emerald-200/80 bg-teal-900/60 px-2.5 py-1 rounded-full border border-teal-700/50">
              <Clock className="w-3 h-3 text-teal-300" />
              {fieldTrip.duration}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
            <span>{fieldTrip.title}</span>
          </h2>

          <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-medium">
            {fieldTrip.learningConnection}
          </p>
        </div>

        {/* Location & Materials Pill */}
        <div className="bg-emerald-900/40 border border-emerald-700/50 p-3.5 rounded-2xl space-y-2 text-xs">
          <div className="flex items-center gap-2 text-emerald-200">
            <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="font-semibold">{fieldTrip.location}</span>
          </div>
          {fieldTrip.materials && (
            <div className="flex items-center gap-2 text-teal-200/90">
              <ShoppingBag className="w-4 h-4 text-teal-400 shrink-0" />
              <span>Pack: {fieldTrip.materials.join(', ')}</span>
            </div>
          )}
        </div>
      </div>

      {/* Outdoor vs Indoor Low-Prep Switcher */}
      <div className="mt-5 space-y-4">
        <div className="flex items-center gap-2 bg-slate-950/60 p-1 rounded-2xl border border-emerald-800/40 w-fit">
          <button
            onClick={() => setActiveTab('outdoor')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'outdoor'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-emerald-300/80 hover:text-white'
            }`}
          >
            <Trees className="w-3.5 h-3.5" />
            <span>Outdoor Community Quest</span>
          </button>

          <button
            onClick={() => setActiveTab('indoor')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'indoor'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-emerald-300/80 hover:text-white'
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span>Indoor / Rainy Day Alternative</span>
          </button>
        </div>

        {/* Mission Description & Interactive Checklist */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Left Column: Mission & Checklist (7 cols) */}
          <div className="lg:col-span-7 bg-slate-950/50 border border-emerald-800/50 rounded-2xl p-4 sm:p-5 space-y-4">
            <div>
              <h3 className="text-sm font-extrabold text-emerald-200 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                {activeMission.headline}
              </h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">{activeMission.description}</p>
            </div>

            <div className="space-y-2 pt-2 border-t border-emerald-900/60">
              <span className="text-[11px] font-black uppercase tracking-wider text-emerald-400 block">
                Field Scavenger Checklist (Tap to Check Off):
              </span>
              <div className="space-y-2">
                {activeMission.scavengerChecklist.map((item, idx) => {
                  const key = `${activeTab}-${idx}`;
                  const isDone = !!checkedItems[key];
                  return (
                    <div
                      key={idx}
                      onClick={() => toggleCheck(idx)}
                      className={`flex items-start gap-3 p-2.5 rounded-xl border text-xs cursor-pointer transition-all ${
                        isDone
                          ? 'bg-emerald-900/40 border-emerald-600 text-emerald-200 line-through opacity-85'
                          : 'bg-emerald-950/40 border-emerald-800/70 text-slate-100 hover:bg-emerald-900/30'
                      }`}
                    >
                      {isDone ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      ) : (
                        <Circle className="w-4 h-4 text-emerald-500/70 shrink-0 mt-0.5" />
                      )}
                      <span className="leading-snug">{item}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Conversational Talking Points On-The-Go (5 cols) */}
          <div className="lg:col-span-5 bg-emerald-950/40 border border-emerald-800/50 rounded-2xl p-4 sm:p-5 space-y-3">
            <div className="flex items-center gap-2 text-emerald-300">
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <h3 className="text-sm font-extrabold">On-The-Go Questions</h3>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Ask these 3 curiosity questions while walking to spark critical thinking in real life:
            </p>

            <div className="space-y-2.5 pt-1">
              {fieldTrip.conversationPrompts.map((prompt, idx) => {
                const isOpen = expandedPromptIdx === idx;
                return (
                  <div
                    key={idx}
                    className="border border-emerald-800/60 rounded-xl overflow-hidden bg-slate-900/70 transition-all"
                  >
                    <button
                      onClick={() => setExpandedPromptIdx(isOpen ? -1 : idx)}
                      className="w-full p-3 text-left flex items-start justify-between gap-2 text-xs font-bold text-emerald-100 hover:text-white cursor-pointer"
                    >
                      <span className="leading-snug">{prompt.question}</span>
                      {isOpen ? (
                        <ChevronUp className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="p-3 bg-emerald-950/70 border-t border-emerald-900 text-[11px] text-emerald-200/90 leading-relaxed">
                        <span className="font-extrabold text-emerald-300 block mb-1">
                          💡 Guide & Talking Points:
                        </span>
                        {prompt.talkingPoints}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
