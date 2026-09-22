// src/components/daily/DailyDashboard.jsx
// Zero-friction daily teaching cockpit with word-for-word parent scripts, traditional packets, and 1-click progression.
// Connects to: src/domain/curriculum/dailySchedule.js, src/data/worksheets.js, src/components/worksheet/WorksheetCanvas.jsx
// Created: 2026-09-22

import React, { useState } from 'react';
import { getDailyLesson } from '../../domain/curriculum/dailySchedule.js';
import { getTraditionalWorksheets } from '../../data/worksheets.js';
import WorksheetCanvas from '../worksheet/WorksheetCanvas.jsx';
import {
  Printer,
  CheckCircle2,
  RotateCcw,
  ArrowRight,
  MessageSquare,
  Sparkles,
  BookOpen,
  FileText,
  ChevronLeft,
  ChevronRight,
  Undo2,
} from 'lucide-react';

export default function DailyDashboard({
  studentDays = { math: 1, phonics: 1, science: 1 },
  onUpdateDay,
  onLogQuickNote,
}) {
  const [activeSubject, setActiveSubject] = useState('math');
  const [sheetMode, setSheetMode] = useState('daily'); // 'daily' | 'traditional'
  const [selectedTradIndex, setSelectedTradIndex] = useState(0);
  const [variantSeeds, setVariantSeeds] = useState({ math: 1, phonics: 1, science: 1 });
  const [quickNote, setQuickNote] = useState('');
  const [noteSaved, setNoteSaved] = useState(false);

  const currentDayNumber = studentDays[activeSubject] || 1;
  const currentVariant = variantSeeds[activeSubject] || 1;
  const lesson = getDailyLesson(activeSubject, currentDayNumber);

  const tradSheets = getTraditionalWorksheets(activeSubject);
  const activeTradSheet = tradSheets[selectedTradIndex] || tradSheets[0];

  const activeSheet = sheetMode === 'daily' ? lesson.generateSheet(currentVariant) : (activeTradSheet || lesson.generateSheet(currentVariant));

  const handleSubjectChange = (subjectId) => {
    setActiveSubject(subjectId);
    setSelectedTradIndex(0);
  };

  const handleAdvance = () => {
    const nextDay = Math.min(10, currentDayNumber + 1);
    onUpdateDay(activeSubject, nextDay);
    setVariantSeeds((prev) => ({ ...prev, [activeSubject]: 1 }));
  };

  const handlePrevious = () => {
    const prevDay = Math.max(1, currentDayNumber - 1);
    onUpdateDay(activeSubject, prevDay);
    setVariantSeeds((prev) => ({ ...prev, [activeSubject]: 1 }));
  };

  const handleJumpToDay = (day) => {
    const target = Math.max(1, Math.min(10, day));
    onUpdateDay(activeSubject, target);
    setVariantSeeds((prev) => ({ ...prev, [activeSubject]: 1 }));
  };

  const handleKeepPracticing = () => {
    // Generate a fresh practice variant for the same day
    setVariantSeeds((prev) => ({ ...prev, [activeSubject]: (prev[activeSubject] || 1) + 1 }));
  };

  const handleSaveNote = async () => {
    if (!quickNote.trim()) return;
    await onLogQuickNote({
      subject: activeSubject,
      day: currentDayNumber,
      title: lesson.title,
      note: quickNote.trim(),
      date: new Date().toISOString().split('T')[0],
    });
    setQuickNote('');
    setNoteSaved(true);
    setTimeout(() => setNoteSaved(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full max-w-7xl mx-auto space-y-6">
      {/* 1. Daily Track Selector & Print Bar */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-4 no-print">
        {/* Left: Subject Tracks and Format Switcher */}
        <div className="flex flex-col gap-3">
          {/* Subject Track Switchers */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'math', label: 'Math', icon: '📐' },
              { id: 'phonics', label: 'Phonics', icon: '🔤' },
              { id: 'science', label: 'Science', icon: '🔬' },
            ].map((sub) => {
              const day = studentDays[sub.id] || 1;
              const isSelected = activeSubject === sub.id;
              return (
                <button
                  key={sub.id}
                  onClick={() => handleSubjectChange(sub.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  <span>{sub.icon}</span>
                  <span>{sub.label}</span>
                  <span
                    className={`text-[10px] font-black px-1.5 py-0.5 rounded-full ${
                      isSelected ? 'bg-indigo-700 text-white' : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    Day {day}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Mode Switcher: Daily Lesson vs Traditional Packet */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-bold">
              <button
                onClick={() => setSheetMode('daily')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  sheetMode === 'daily'
                    ? 'bg-white text-indigo-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                Day {currentDayNumber} Guided Lesson (CPA)
              </button>
              <button
                onClick={() => setSheetMode('traditional')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  sheetMode === 'traditional'
                    ? 'bg-white text-indigo-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                Traditional Classroom Drill ({tradSheets.length})
              </button>
            </div>

            {/* Sub-tabs if multiple traditional sheets exist */}
            {sheetMode === 'traditional' && tradSheets.length > 1 && (
              <div className="flex items-center gap-1 bg-amber-50 p-1 rounded-xl border border-amber-200">
                {tradSheets.map((ts, idx) => (
                  <button
                    key={ts.id}
                    onClick={() => setSelectedTradIndex(idx)}
                    className={`px-2.5 py-1 text-[11px] rounded-lg font-bold transition-all ${
                      selectedTradIndex === idx
                        ? 'bg-white text-amber-900 shadow-xs'
                        : 'text-amber-800 hover:text-amber-950'
                    }`}
                  >
                    {ts.id === 'ws-trad-reading-beaver'
                      ? 'Reading Passage'
                      : ts.id === 'ws-trad-grammar-mechanics'
                      ? 'Grammar & Mechanics'
                      : ts.title.split(':')[0]}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 1-Click Print Button */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          <button
            onClick={handlePrint}
            className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl shadow-xs transition-all"
          >
            <Printer className="w-4 h-4" />
            Print {sheetMode === 'traditional' ? 'Traditional' : `Day ${currentDayNumber}`}{' '}
            {activeSubject.toUpperCase()} Sheet
          </button>
        </div>
      </div>

      {/* 2. Main Two-Column Layout (Left: Zero-Thinking Parent Guide; Right: Live Sheet) */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Column: Parent Guide & Progression */}
        <aside className="w-full lg:w-96 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-5 no-print">
          {sheetMode === 'daily' ? (
            <>
              {/* Day Header with Previous/Next Controls */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={handlePrevious}
                      disabled={currentDayNumber <= 1}
                      title="Step back to previous day"
                      className="p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                    >
                      <ChevronLeft className="w-3.5 h-3.5 text-slate-700" />
                    </button>
                    <span className="text-[10px] font-black uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-100">
                      {activeSubject.toUpperCase()} • DAY {currentDayNumber} OF 10
                    </span>
                    <button
                      onClick={handleAdvance}
                      disabled={currentDayNumber >= 10}
                      title="Advance to next day"
                      className="p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-slate-700" />
                    </button>
                  </div>
                  {currentVariant > 1 && (
                    <span className="text-[10px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full font-bold border border-amber-200">
                      Variant #{currentVariant}
                    </span>
                  )}
                </div>

                {/* 10-Day Quick Jump Timeline */}
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((d) => (
                    <button
                      key={d}
                      onClick={() => handleJumpToDay(d)}
                      className={`flex-1 py-1 rounded-lg text-[10px] font-extrabold transition-all ${
                        d === currentDayNumber
                          ? 'bg-indigo-600 text-white shadow-xs'
                          : d < currentDayNumber
                          ? 'bg-white text-indigo-900 border border-slate-200 hover:bg-indigo-50'
                          : 'text-slate-400 hover:text-slate-700'
                      }`}
                      title={`Jump directly to Day ${d}`}
                    >
                      {d}
                    </button>
                  ))}
                </div>

                <h3 className="text-base font-extrabold text-slate-900 leading-snug">{lesson.title}</h3>
                <p className="text-[11px] text-slate-400 font-medium">{lesson.standard}</p>
              </div>

              {/* Word-for-Word Parent Script Box */}
              <div className="space-y-3 bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs">
                <div>
                  <span className="font-bold text-indigo-900 block mb-1 flex items-center gap-1.5">
                    🗣️ Say This Word-for-Word:
                  </span>
                  <p className="italic text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200">
                    {lesson.script.say}
                  </p>
                </div>
                <div>
                  <span className="font-bold text-slate-800 block mb-0.5">🖐️ What to Do:</span>
                  <p className="text-slate-600 leading-relaxed">{lesson.script.do}</p>
                </div>
                <div>
                  <span className="font-bold text-emerald-800 block mb-0.5">👁️ What to Look For:</span>
                  <p className="text-emerald-950 leading-relaxed">{lesson.script.lookFor}</p>
                </div>
              </div>

              {/* 3-Button End of Lesson Decision */}
              <div className="space-y-2 pt-2 border-t border-slate-200">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                  End-of-Lesson Decision:
                </span>
                <button
                  onClick={handleAdvance}
                  disabled={currentDayNumber >= 10}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold rounded-xl shadow-xs transition-all disabled:opacity-50"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  {currentDayNumber >= 10
                    ? 'Track Completed!'
                    : `Mastered! Advance to Day ${currentDayNumber + 1}`}
                  <ArrowRight className="w-4 h-4 ml-0.5" />
                </button>
                <button
                  onClick={handleKeepPracticing}
                  className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 text-xs font-bold rounded-xl transition-all"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-amber-700" />
                  Stay on Day {currentDayNumber} (Generate Fresh Sheet)
                </button>
                <button
                  onClick={handlePrevious}
                  disabled={currentDayNumber <= 1}
                  className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-all disabled:opacity-40 disabled:pointer-events-none"
                >
                  <Undo2 className="w-3.5 h-3.5 text-slate-500" />
                  {currentDayNumber <= 1
                    ? 'At Day 1 (First Lesson)'
                    : `Step Back / Revisit Day ${currentDayNumber - 1}`}
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Traditional Worksheet Parent Guide */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">
                    TRADITIONAL CLASSROOM PACKET • GRADE {activeTradSheet.grade}
                  </span>
                </div>
                <h3 className="text-base font-extrabold text-slate-900">{activeTradSheet.title}</h3>
                <p className="text-[11px] text-slate-400 font-medium">
                  {activeTradSheet.parentGuide?.standard || 'Elementary Standard'}
                </p>
              </div>

              <div className="space-y-3 bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs">
                <div>
                  <span className="font-bold text-slate-800 block mb-0.5">💡 Why We Are Doing This:</span>
                  <p className="text-slate-600 leading-relaxed">
                    {activeTradSheet.parentGuide?.whyWeAreDoingThis}
                  </p>
                </div>
                {activeTradSheet.parentGuide?.verbalCue && (
                  <div>
                    <span className="font-bold text-indigo-900 block mb-1 flex items-center gap-1.5">
                      🗣️ Verbal Cue:
                    </span>
                    <p className="italic text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200">
                      {activeTradSheet.parentGuide.verbalCue}
                    </p>
                  </div>
                )}
                <div>
                  <span className="font-bold text-emerald-800 block mb-0.5">👁️ What to Watch For:</span>
                  <p className="text-emerald-950 leading-relaxed">
                    {activeTradSheet.parentGuide?.whatToWatchFor}
                  </p>
                </div>
              </div>

              <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-3 text-[11px] text-amber-900 space-y-1">
                <span className="font-bold block">📝 Administration Tip:</span>
                <p className="text-amber-800 leading-normal">
                  You can set a 3-minute timer for fact fluency drills, or let your child complete it at their own pace. Review together with a red or green pencil.
                </p>
              </div>
            </>
          )}

          {/* Quick Note Logger */}
          <div className="pt-2 border-t border-slate-200 space-y-2">
            <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block">
              Quick Note for Antigravity (Saved to Disk)
            </label>
            <textarea
              rows="2"
              value={quickNote}
              onChange={(e) => setQuickNote(e.target.value)}
              placeholder="e.g. Struggled with 7, counted with finger. Did great with 6."
              className="w-full text-xs border border-slate-300 rounded-lg p-2.5 bg-slate-50 focus:bg-white focus:outline-none placeholder:text-slate-400"
            ></textarea>

            {noteSaved && (
              <span className="text-[11px] text-emerald-600 font-bold block">
                ✓ Saved to student_progress.json!
              </span>
            )}

            <button
              type="button"
              onClick={handleSaveNote}
              disabled={!quickNote.trim()}
              className="w-full py-1.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors disabled:opacity-40"
            >
              Save Note to Disk
            </button>
          </div>
        </aside>

        {/* Right Column: Live Printable Sheet */}
        <section className="flex-1 w-full overflow-x-auto pb-8">
          <WorksheetCanvas worksheet={activeSheet} />
        </section>
      </div>
    </div>
  );
}
