// src/components/daily/DailyDashboard.jsx
// Streamlined, distraction-free Print & Progress teaching studio.
// Features: Full Daily Schedule timeline, experiential field trip cards, and 4 accredited daily worksheets.
// Connects to: src/domain/curriculum/dailyBlockRegistry.js, src/components/worksheet/WorksheetCanvas.jsx
// Created: 2026-09-22 / Refactored: 2026-09-27

import React, { useState } from 'react';
import {
  getAcademicPacingForDay,
  QUARTERS,
  getWeeksForQuarter,
} from '../../domain/curriculum/academicYear180.js';
import WorksheetCanvas from '../worksheet/WorksheetCanvas.jsx';
import AlphabetReferenceModal from '../phonics/AlphabetReferenceModal.jsx';
import DailyScheduleTimeline from './DailyScheduleTimeline.jsx';
import FieldTripCard from './FieldTripCard.jsx';
import DailyAgendaPrintView from './DailyAgendaPrintView.jsx';
import AnswerKeyModal from '../worksheet/AnswerKeyModal.jsx';
import {
  getDailyBlock,
  hasDailyBlock,
  getAvailableBlocksForGrade,
} from '../../domain/curriculum/dailyBlockRegistry.js';
import {
  Printer,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Sparkles,
  BookOpen,
  FileText,
  ChevronDown,
  ChevronUp,
  ShieldAlert,
  CheckCircle2,
  Eye,
  Calendar,
  X,
  ArrowRight,
  Clock,
  CheckSquare,
} from 'lucide-react';

/**
 * Main Daily Teaching Dashboard component.
 * 
 * @param {Object} props
 * @param {Object} props.studentDays - Current day per subject
 * @param {string} props.currentGrade - Current grade level
 * @param {Function} props.onUpdateDay - Callback to change day
 * @param {Function} props.onUpdateGrade - Callback to change grade
 * @param {Function} props.onResetToDay1 - Callback to reset to Day 1
 */
export default function DailyDashboard({
  studentDays = { math: 1, phonics: 1, science: 1, socialStudies: 1 },
  currentGrade = 'Kindergarten',
  onUpdateDay,
  onUpdateGrade,
  onResetToDay1,
}) {
  const [dashboardTab, setDashboardTab] = useState('block'); // 'block' | 'worksheet'
  const [isAgendaModalOpen, setIsAgendaModalOpen] = useState(false);
  const [isPrintingAgenda, setIsPrintingAgenda] = useState(false);
  const [isAnswerKeyOpen, setIsAnswerKeyOpen] = useState(false);
  const [activeSubject, setActiveSubject] = useState('math');
  const [showCountingDots, setShowCountingDots] = useState(false);
  const [isTeachingGuideOpen, setIsTeachingGuideOpen] = useState(false);
  const [isPacingModalOpen, setIsPacingModalOpen] = useState(false);
  const [isAlphabetModalOpen, setIsAlphabetModalOpen] = useState(false);
  const [selectedQuarterTab, setSelectedQuarterTab] = useState(1);

  const currentDayNumber = studentDays[activeSubject] || 1;
  const pacing = getAcademicPacingForDay(currentDayNumber);

  const availableBlocks = getAvailableBlocksForGrade(currentGrade);
  const maxAvailableDay = availableBlocks.length > 0 ? Math.max(...availableBlocks.map((b) => b.day)) : 1;

  const dailyBlock = getDailyBlock(currentGrade, currentDayNumber);
  const activeSheet = dailyBlock?.sheets?.[activeSubject] || null;

  const handleJumpToWorksheetFromTimeline = (worksheetId) => {
    if (worksheetId.includes('math')) setActiveSubject('math');
    else if (worksheetId.includes('phonics')) setActiveSubject('phonics');
    else if (worksheetId.includes('science')) setActiveSubject('science');
    else if (worksheetId.includes('social')) setActiveSubject('socialStudies');
    setDashboardTab('worksheet');
  };

  const handleSubjectChange = (subjectId) => {
    setActiveSubject(subjectId);
  };

  const handleAdvance = () => {
    const nextDay = Math.min(maxAvailableDay, currentDayNumber + 1);
    onUpdateDay(activeSubject, nextDay);
  };

  const handlePrevious = () => {
    const prevDay = Math.max(1, currentDayNumber - 1);
    onUpdateDay(activeSubject, prevDay);
  };

  const handleJumpToDay = (day) => {
    const target = Math.max(1, Math.min(maxAvailableDay, day));
    onUpdateDay(activeSubject, target);
  };

  const handlePrint = () => {
    window.print();
  };

  const handlePrintAgenda = () => {
    setIsPrintingAgenda(true);
    setTimeout(() => {
      window.print();
      setTimeout(() => {
        setIsPrintingAgenda(false);
      }, 500);
    }, 150);
  };

  const dayOptions = availableBlocks.map((b) => ({
    day: b.day,
    title: `Day ${b.day}: ${b.theme}`,
  }));

  if (isPrintingAgenda && dailyBlock) {
    return (
      <div className="w-full bg-white min-h-screen">
        <DailyAgendaPrintView dailyBlock={dailyBlock} />
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      {/* ========================================================================= */}
      {/* MASTER TOP BAR: Mode Switcher (Full Day Block vs Worksheet Studio)        */}
      {/* ========================================================================= */}
      <div className="bg-white border border-slate-200 rounded-2xl p-3 sm:p-4 shadow-xs flex flex-wrap items-center justify-between gap-3 no-print">
        <div className="flex flex-wrap items-center gap-2">
          {dailyBlock && (
            <button
              onClick={() => setDashboardTab('block')}
              className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                dashboardTab === 'block'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Full Day Schedule & Field Trip</span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-black ${
                  dashboardTab === 'block' ? 'bg-indigo-700 text-white' : 'bg-slate-200 text-slate-700'
                }`}
              >
                Day {currentDayNumber}
              </span>
            </button>
          )}

          <button
            onClick={() => setDashboardTab('worksheet')}
            className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
              dashboardTab === 'worksheet'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Printable Worksheet Studio</span>
            <span
              className={`text-[10px] px-2 py-0.5 rounded-full font-black uppercase ${
                dashboardTab === 'worksheet' ? 'bg-indigo-700 text-white' : 'bg-slate-200 text-slate-700'
              }`}
            >
              {activeSubject}
            </span>
          </button>
        </div>

        {/* Universal Day Stepper */}
        <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl border border-slate-200">
          <button
            onClick={handlePrevious}
            disabled={currentDayNumber <= 1}
            className="p-1.5 rounded-lg bg-white hover:bg-slate-50 text-slate-700 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer shadow-2xs"
            title="Previous Day"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-xs font-black text-indigo-950 px-2 select-none">
            Day {currentDayNumber} of {maxAvailableDay}
          </span>
          <button
            onClick={handleAdvance}
            disabled={currentDayNumber >= maxAvailableDay}
            className="p-1.5 rounded-lg bg-white hover:bg-slate-50 text-slate-700 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer shadow-2xs"
            title="Next Day"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Action Controls: Print Agenda & Grade Badge */}
        <div className="flex items-center gap-2">
          {dailyBlock && (
            <button
              onClick={() => setIsAgendaModalOpen(true)}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-2xs"
              title="Print 1-page Daily Learning Agenda & Field Trip Plan for clipboard or fridge"
            >
              <Printer className="w-3.5 h-3.5 text-emerald-600" />
              <span>Print Daily Agenda</span>
            </button>
          )}

          <button
            onClick={() => setIsPacingModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-colors cursor-pointer"
            title="Open 180-day school year pacing guide"
          >
            <Calendar className="w-3.5 h-3.5 text-indigo-600" />
            <span>180-Day Pacing</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MODE A: FULL DAY BLOCK & FIELD TRIP VIEW                                 */}
      {/* ========================================================================= */}
      {dashboardTab === 'block' && dailyBlock ? (
        <div className="space-y-6 no-print">
          {/* Day Theme Hero Banner */}
          <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-lg border border-indigo-700/50 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase tracking-wider bg-amber-400 text-amber-950 px-3 py-1 rounded-full shadow-2xs">
                  Day {dailyBlock.day} Master Block
                </span>
                <span className="text-xs text-indigo-200 font-bold bg-indigo-800/80 px-2.5 py-1 rounded-full border border-indigo-700">
                  {dailyBlock.grade}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-indigo-200">
                <span className="flex items-center gap-1.5 bg-indigo-950/60 px-3 py-1 rounded-xl border border-indigo-800">
                  <Clock className="w-3.5 h-3.5 text-amber-300" />
                  7 Scheduled Blocks • 4.0 Hours
                </span>
              </div>
            </div>

            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {dailyBlock.theme}
              </h1>
              <p className="text-xs sm:text-sm text-indigo-100/90 leading-relaxed font-medium mt-1.5 max-w-3xl">
                {dailyBlock.overview}
              </p>
            </div>

            {/* Curriculum Flow Banner (How Today Connects to Yesterday) */}
            {dailyBlock.pedagogicalProgression && (
              <div className="bg-indigo-950/70 border border-indigo-700/60 rounded-2xl p-4 space-y-2.5 text-xs text-indigo-100">
                <div className="flex items-center gap-2 text-amber-300 font-extrabold text-[11px] uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>
                    Curriculum Progression Flow: How Day {dailyBlock.day} Connects to Day {dailyBlock.day - 1}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-1 text-[11px]">
                  <div className="bg-indigo-900/50 p-2.5 rounded-xl border border-indigo-800/80">
                    <span className="font-bold text-blue-300 block mb-0.5">📐 Math Progression:</span>
                    <span>{dailyBlock.pedagogicalProgression.math}</span>
                  </div>
                  <div className="bg-indigo-900/50 p-2.5 rounded-xl border border-indigo-800/80">
                    <span className="font-bold text-purple-300 block mb-0.5">🔤 Phonics Progression:</span>
                    <span>{dailyBlock.pedagogicalProgression.phonics}</span>
                  </div>
                  <div className="bg-indigo-900/50 p-2.5 rounded-xl border border-indigo-800/80">
                    <span className="font-bold text-teal-300 block mb-0.5">🔬 Science Progression:</span>
                    <span>{dailyBlock.pedagogicalProgression.science}</span>
                  </div>
                  <div className="bg-indigo-900/50 p-2.5 rounded-xl border border-indigo-800/80">
                    <span className="font-bold text-rose-300 block mb-0.5">🗺️ Social Studies Progression:</span>
                    <span>{dailyBlock.pedagogicalProgression.socialStudies}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Quick Actions inside Hero */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => setIsAgendaModalOpen(true)}
                className="flex items-center gap-2 px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-amber-950 font-black text-xs rounded-xl shadow-xs transition-all cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Print 1-Page Daily Agenda & Field Trip Guide</span>
              </button>
              <button
                onClick={() => setDashboardTab('worksheet')}
                className="flex items-center gap-2 px-4 py-2.5 bg-indigo-700/80 hover:bg-indigo-600 text-white font-bold text-xs rounded-xl border border-indigo-500/60 transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-indigo-200" />
                <span>Open Worksheets Canvas</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Scheduled Time Blocks Timeline */}
          <DailyScheduleTimeline
            dailyBlock={dailyBlock}
            onSelectWorksheet={handleJumpToWorksheetFromTimeline}
          />

          {/* Experiential Field Trip Guide */}
          <FieldTripCard fieldTrip={dailyBlock.fieldTrip} />

          {/* Today's 4 Core Accredited Worksheets Tray */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-indigo-600" />
                  Today's 4 Accredited Worksheets (Day {dailyBlock.day})
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Designed for standard 8.5x11 Letter paper with primary 3-line ruling and verified answer keys.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { sub: 'math', label: 'Math', icon: '📐', sheet: dailyBlock.sheets.math, color: 'border-blue-200 bg-blue-50/40 text-blue-900' },
                { sub: 'phonics', label: 'Phonics', icon: '🔤', sheet: dailyBlock.sheets.phonics, color: 'border-purple-200 bg-purple-50/40 text-purple-900' },
                { sub: 'science', label: 'Science', icon: '🔬', sheet: dailyBlock.sheets.science, color: 'border-teal-200 bg-teal-50/40 text-teal-900' },
                { sub: 'socialStudies', label: 'Social Studies', icon: '🗺️', sheet: dailyBlock.sheets.socialStudies, color: 'border-rose-200 bg-rose-50/40 text-rose-900' },
              ].map(({ sub, label, icon, sheet, color }) => (
                <div
                  key={sub}
                  className={`border rounded-2xl p-4 flex flex-col justify-between space-y-3 shadow-2xs hover:shadow-xs transition-all ${color}`}
                >
                  <div className="space-y-1">
                    <span className="text-2xl block">{icon}</span>
                    <h4 className="text-xs font-black uppercase tracking-wider">{label}</h4>
                    <p className="text-xs font-extrabold line-clamp-2 text-slate-800">{sheet.title}</p>
                    <span className="text-[10px] text-slate-500 block truncate">{sheet.framework}</span>
                  </div>
                  <button
                    onClick={() => {
                      setActiveSubject(sub);
                      setDashboardTab('worksheet');
                    }}
                    className="w-full py-2 bg-white hover:bg-slate-50 text-slate-900 font-bold text-xs rounded-xl border border-slate-200 shadow-2xs transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <FileText className="w-3.5 h-3.5 text-indigo-600" />
                    <span>View & Print</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* ========================================================================= */
        /* MODE B: PRINTABLE WORKSHEET STUDIO                                        */
        /* ========================================================================= */
        <div className="space-y-5">
          {dailyBlock && (
            <div className="bg-indigo-50 border border-indigo-200 rounded-2xl px-4 py-2.5 flex items-center justify-between gap-3 text-xs text-indigo-900 no-print">
              <span className="font-semibold flex items-center gap-1.5">
                <span>📅</span>
                <span>Viewing Day {currentDayNumber} {activeSubject.toUpperCase()} Worksheet Canvas</span>
              </span>
              <button
                onClick={() => setDashboardTab('block')}
                className="font-bold text-indigo-700 hover:text-indigo-950 flex items-center gap-1 cursor-pointer"
              >
                <span>◀ Return to Daily Schedule & Field Trip</span>
              </button>
            </div>
          )}

          {/* 1. TOP CONTROL BAR: Clean, Distraction-Free Print & Progression Cockpit */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4 no-print">
            {/* ROW 1: Subject Selector Tabs & Grade Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
              {/* Subject Pills */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                {[
                  { id: 'math', label: 'Math', icon: '📐' },
                  { id: 'phonics', label: 'Phonics', icon: '🔤' },
                  { id: 'science', label: 'Science', icon: '🔬' },
                  { id: 'socialStudies', label: 'Social Studies', icon: '🗺️' },
                ].map((sub) => {
                  const day = studentDays[sub.id] || 1;
                  const isSelected = activeSubject === sub.id;
                  return (
                    <button
                      key={sub.id}
                      onClick={() => handleSubjectChange(sub.id)}
                      className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-indigo-600 text-white shadow-xs'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                      }`}
                    >
                      <span className="text-sm">{sub.icon}</span>
                      <span>{sub.label}</span>
                      <span
                        className={`text-[10px] font-black px-1.5 py-0.2 rounded-md ${
                          isSelected ? 'bg-indigo-700 text-white' : 'bg-slate-200 text-slate-700'
                        }`}
                      >
                        Day {day}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Grade Badge & Academic Progress */}
              <div className="flex items-center gap-2 text-xs">
                <span className="flex items-center gap-1 text-[11px] font-extrabold uppercase text-indigo-900 bg-indigo-50 border border-indigo-200 px-2.5 py-1 rounded-xl">
                  <GraduationCap className="w-3.5 h-3.5 text-indigo-600" />
                  {currentGrade}
                </span>
                <span className="hidden sm:inline-block text-[11px] text-slate-500 font-semibold">
                  Quarter {pacing.quarter} • Week {pacing.week}
                </span>
              </div>
            </div>

            {/* ROW 2: Day Progression Stepper + Prominent Print Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              {/* Day Stepper & Quick-Jump Dropdown */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevious}
                  disabled={currentDayNumber <= 1}
                  className="p-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                  title="Previous Day"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {/* Quick-Jump Dropdown with Day Titles */}
                <div className="relative">
                  <select
                    value={currentDayNumber}
                    onChange={(e) => handleJumpToDay(Number(e.target.value))}
                    className="w-full sm:w-auto appearance-none bg-indigo-50/80 hover:bg-indigo-100/70 border-2 border-indigo-200 text-indigo-950 font-black text-xs sm:text-sm py-2 pl-3.5 pr-8 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer shadow-2xs transition-colors"
                    title="Jump directly to any day"
                  >
                    {dayOptions.map((opt) => (
                      <option key={opt.day} value={opt.day}>
                        {opt.title}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-indigo-700">
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>

                <button
                  onClick={handleAdvance}
                  disabled={currentDayNumber >= maxAvailableDay}
                  className="p-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                  title="Next Day"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Action Buttons: Print Button & Answer Key */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 active:scale-98 text-white text-xs sm:text-sm font-black rounded-xl shadow-xs transition-all cursor-pointer"
                  title="Print this worksheet directly on standard Letter paper"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Worksheet</span>
                </button>

                {activeSheet?.answerKey && (
                  <button
                    onClick={() => setIsAnswerKeyOpen(true)}
                    className="flex items-center gap-1.5 px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 rounded-xl text-xs font-bold transition-all cursor-pointer"
                    title="View verified teacher answer key and rubric"
                  >
                    <CheckSquare className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Answer Key</span>
                  </button>
                )}

                <button
                  onClick={handleAdvance}
                  disabled={currentDayNumber >= maxAvailableDay}
                  className="hidden md:flex items-center gap-1.5 px-3.5 py-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 rounded-xl text-xs font-bold transition-all disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
                  title="Advance to next instructional day"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Next Day</span>
                  <ArrowRight className="w-3 h-3 text-emerald-700" />
                </button>
              </div>
            </div>

            {/* ROW 3: Secondary Helpers (Teaching Guide Toggle, Alphabet Modal, Counting Dots) */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
              <div className="flex flex-wrap items-center gap-2">
                {/* Parent Coaching Toggle */}
                {activeSheet?.parentGuide && (
                  <button
                    type="button"
                    onClick={() => setIsTeachingGuideOpen((prev) => !prev)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-colors cursor-pointer ${
                      isTeachingGuideOpen
                        ? 'bg-amber-100 text-amber-900 border border-amber-300'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                    title="Toggle word-for-word parent coaching script"
                  >
                    <span>💡</span>
                    <span>{isTeachingGuideOpen ? 'Hide Parent Guide' : 'Show Parent Teaching Script'}</span>
                    {isTeachingGuideOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                )}

                {/* Alphabet A-Z Master Guide */}
                <button
                  type="button"
                  onClick={() => setIsAlphabetModalOpen(true)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-900 border border-indigo-200 font-bold transition-colors cursor-pointer"
                  title="Open full A-Z Letter Guide with mouth cues and pencil stroke rhymes"
                >
                  <span>🔤</span>
                  <span>Alphabet A–Z Guide</span>
                </button>
              </div>

              {/* Counting Dots Scaffolding Toggle (For Math) */}
              {activeSubject === 'math' && (
                <button
                  type="button"
                  onClick={() => setShowCountingDots((prev) => !prev)}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold border transition-colors cursor-pointer ${
                    showCountingDots
                      ? 'bg-indigo-600 text-white border-indigo-700'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border-slate-200'
                  }`}
                  title="Show touch-point counting dots on numbers"
                >
                  <Eye className="w-3 h-3" />
                  <span>Counting Dots: {showCountingDots ? 'ON' : 'OFF'}</span>
                </button>
              )}
            </div>
          </div>

          {/* 2. COLLAPSIBLE TEACHING GUIDE: Open on demand, stays out of the way */}
          {isTeachingGuideOpen && activeSheet?.parentGuide && (
            <div className="bg-white border-2 border-indigo-100 rounded-2xl p-5 shadow-xs space-y-4 no-print animate-in fade-in duration-200">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-100">
                    Day {currentDayNumber} Parent Teaching Guide ({activeSubject.toUpperCase()})
                  </span>
                  <h3 className="text-base font-extrabold text-slate-900 mt-1">{activeSheet.title}</h3>
                  <p className="text-[11px] text-slate-400 font-medium">{activeSheet.parentGuide.standard || activeSheet.framework}</p>
                </div>
                <button
                  onClick={() => setIsTeachingGuideOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer"
                  title="Close Guide"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Word-for-Word Scripts */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div className="bg-indigo-50/60 border border-indigo-100 rounded-xl p-3 space-y-1">
                  <span className="font-extrabold text-indigo-900 block text-[11px] uppercase tracking-wider">
                    🗣️ Say This to Your Child:
                  </span>
                  <p className="italic text-slate-800 leading-relaxed bg-white p-2.5 rounded-lg border border-indigo-100">
                    {activeSheet.parentGuide.verbalCue || 'Guide student to observe and explain their thinking.'}
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-1">
                  <span className="font-extrabold text-slate-800 block text-[11px] uppercase tracking-wider">
                    🎯 Cognitive Goal:
                  </span>
                  <p className="text-slate-700 leading-relaxed bg-white p-2.5 rounded-lg border border-slate-200">
                    {activeSheet.parentGuide.whyWeAreDoingThis}
                  </p>
                </div>

                <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-3 space-y-1">
                  <span className="font-extrabold text-emerald-900 block text-[11px] uppercase tracking-wider">
                    👁️ What to Look For:
                  </span>
                  <p className="text-emerald-950 leading-relaxed bg-white p-2.5 rounded-lg border border-emerald-100">
                    {activeSheet.parentGuide.whatToWatchFor || 'Watch for steady pencil grip and clear verbal explanation.'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 3. CENTERED WORKSHEET PREVIEW: Front and Center, exactly like paper */}
          <section className="w-full flex justify-center pb-12">
            {activeSheet ? (
              <WorksheetCanvas worksheet={activeSheet} showCountingDots={showCountingDots} />
            ) : (
              <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 text-slate-500">
                No worksheet found for this subject on Day {currentDayNumber}.
              </div>
            )}
          </section>
        </div>
      )}

      {/* 180-Day Academic Calendar & Pacing Guide Modal */}
      {isPacingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs no-print">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[85vh] flex flex-col border border-slate-200 overflow-hidden">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2.5">
                <span className="p-2 bg-indigo-600 text-white rounded-xl">
                  <Calendar className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">
                    180-Day Academic School Year Pacing Guide
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    Standard US Kindergarten 36-Week Curriculum • 4 Quarters • 180 Days
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsPacingModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quarter Tabs */}
            <div className="flex border-b border-slate-200 bg-white px-4 sm:px-6 gap-2">
              {QUARTERS.map((q) => (
                <button
                  key={q.quarter}
                  type="button"
                  onClick={() => setSelectedQuarterTab(q.quarter)}
                  className={`py-3 px-3 sm:px-4 text-xs font-black border-b-2 transition-all cursor-pointer ${
                    selectedQuarterTab === q.quarter
                      ? 'border-indigo-600 text-indigo-700 bg-indigo-50/50'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Q{q.quarter}: {q.name.split(':')[1]?.trim() || q.name} ({q.weeks[0]}–{q.weeks[1]})
                </button>
              ))}
            </div>

            {/* Week List for Selected Quarter */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
              {getWeeksForQuarter(selectedQuarterTab).map((wk) => {
                const isCurrentWeek = pacing.week === wk.week;
                return (
                  <div
                    key={wk.week}
                    className={`border rounded-xl p-4 transition-all ${
                      isCurrentWeek
                        ? 'border-indigo-500 bg-indigo-50/40 shadow-xs ring-1 ring-indigo-500'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black text-indigo-900 bg-indigo-100 px-2.5 py-0.5 rounded-lg">
                          Week {wk.week}
                        </span>
                        <span className="text-xs font-bold text-slate-500">
                          (Days {wk.days[0]}–{wk.days[1]})
                        </span>
                        <h4 className="text-sm font-extrabold text-slate-900">{wk.theme}</h4>
                      </div>
                      {isCurrentWeek && (
                        <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-600 text-white px-2 py-0.5 rounded-full">
                          Current Instructional Week
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 text-xs pt-2 border-t border-slate-100">
                      <div className="bg-slate-50 p-2 rounded-lg">
                        <span className="font-bold text-slate-500 block text-[10px] uppercase">
                          📐 Math
                        </span>
                        <span className="font-semibold text-slate-800">{wk.mathFocus}</span>
                      </div>
                      <div className="bg-slate-50 p-2 rounded-lg">
                        <span className="font-bold text-slate-500 block text-[10px] uppercase">
                          🔤 Phonics
                        </span>
                        <span className="font-semibold text-slate-800">{wk.phonicsFocus}</span>
                      </div>
                      <div className="bg-slate-50 p-2 rounded-lg">
                        <span className="font-bold text-slate-500 block text-[10px] uppercase">
                          🔬 Science
                        </span>
                        <span className="font-semibold text-slate-800">{wk.scienceFocus}</span>
                      </div>
                      <div className="bg-slate-50 p-2 rounded-lg">
                        <span className="font-bold text-slate-500 block text-[10px] uppercase">
                          🗺️ Social Studies
                        </span>
                        <span className="font-semibold text-slate-800">{wk.socialStudiesFocus}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-200 bg-slate-50 flex justify-between items-center text-xs">
              <span className="text-slate-500 font-semibold">
                Instructional Day {currentDayNumber} of 180 ({pacing.progressPercent}% Completed)
              </span>
              <button
                type="button"
                onClick={() => setIsPacingModalOpen(false)}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors cursor-pointer"
              >
                Close Calendar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Daily Agenda & Field Trip Printable Preview Modal */}
      {isAgendaModalOpen && dailyBlock && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs no-print overflow-y-auto">
          <div className="bg-slate-100 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[92vh] flex flex-col border border-slate-300 overflow-hidden my-auto">
            {/* Modal Header Bar */}
            <div className="p-4 bg-white border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-2">
                <span className="p-2 bg-emerald-600 text-white rounded-xl">
                  <Printer className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                    Day {dailyBlock.day} Daily Agenda & Field Trip Plan (Print Preview)
                  </h3>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Optimized for 1-page 8.5x11 Letter paper (hang on refrigerator or clipboard)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrintAgenda}
                  className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Agenda Now</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsAgendaModalOpen(false)}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer"
                  title="Close Preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: The Printable Canvas */}
            <div className="p-4 sm:p-6 overflow-y-auto bg-slate-200/70 flex justify-center">
              <div className="max-w-[780px] w-full bg-white shadow-xl rounded-2xl overflow-hidden">
                <DailyAgendaPrintView dailyBlock={dailyBlock} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Answer Key & Rubric Modal */}
      <AnswerKeyModal
        isOpen={isAnswerKeyOpen}
        onClose={() => setIsAnswerKeyOpen(false)}
        worksheet={activeSheet}
      />

      {/* Alphabet A-Z Master Guide Modal */}
      <AlphabetReferenceModal
        isOpen={isAlphabetModalOpen}
        onClose={() => setIsAlphabetModalOpen(false)}
      />
    </div>
  );
}
