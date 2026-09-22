// src/components/custom/CustomAdventureStudio.jsx
// Personalized kid-friendly adventure worksheet generator uniting custom storytelling with rigorous curriculum standards.
// Connects to: src/services/customWorksheetGenerator.js, src/App.jsx
// Created: 2026-09-22

import React, { useState } from 'react';
import {
  Sparkles,
  Printer,
  Loader2,
  BookOpen,
  PenTool,
  GraduationCap,
  User,
  Users,
  Compass,
  CheckCircle2,
  Key,
  HelpCircle,
  Save,
  RotateCcw,
} from 'lucide-react';
import { generateCustomAdventureWorksheet } from '../../services/customWorksheetGenerator.js';

const INSPIRATION_CHIPS = [
  { label: '🚀 Moon Rocket Mission', subject: 'Science', topic: 'Launching a rocket to explore craters on the moon' },
  { label: '🦖 Dinosaur Fossil Hunt', subject: 'Science', topic: 'Unearthing dinosaur bones and fossil footprints in the canyon' },
  { label: '🏴‍☠️ Pirate Treasure Math', subject: 'Math', topic: 'Dividing gold doubloons and solving map clues on a tropical island' },
  { label: '🧁 Bakery Story Mystery', subject: 'Math', topic: 'Baking cupcakes and cookies for a community street festival' },
  { label: '🌲 Backyard Treehouse Safari', subject: 'Language Arts', topic: 'Building a secret treehouse lookout to observe wild animals' },
  { label: '⚡ Superhero Training Camp', subject: 'Language Arts', topic: 'Developing secret gadgets and helping people solve mysteries' },
  { label: '🗺️ Lost Pioneer Trail', subject: 'Social Studies', topic: 'Following a covered wagon trail and drawing a pioneer landmark map' },
];

export default function CustomAdventureStudio({ onSaveToLibrary }) {
  const [grade, setGrade] = useState('2nd Grade');
  const [subject, setSubject] = useState('Language Arts');
  const [topic, setTopic] = useState('A brave little toaster goes on an adventure');
  const [studentName, setStudentName] = useState('Leo');
  const [additionalCharacters, setAdditionalCharacters] = useState('his dog Buster');
  const [apiKey, setApiKey] = useState('');
  const [showApiSettings, setShowApiSettings] = useState(false);

  const [isGenerating, setIsGenerating] = useState(false);
  const [worksheetData, setWorksheetData] = useState(null);
  const [showAnswerKey, setShowAnswerKey] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async (e) => {
    if (e) e.preventDefault();
    setIsGenerating(true);
    setError('');
    setIsSaved(false);

    try {
      const data = await generateCustomAdventureWorksheet({
        grade,
        subject,
        topic,
        studentName,
        additionalCharacters,
        apiKey,
      });
      setWorksheetData(data);
    } catch (err) {
      console.error(err);
      setError('Failed to generate adventure worksheet. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleApplyChip = (chip) => {
    setSubject(chip.subject);
    setTopic(chip.topic);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSaveSheet = () => {
    if (!worksheetData || !onSaveToLibrary) return;
    const libraryEntry = {
      id: `custom-${Date.now()}`,
      title: worksheetData.title,
      subject: subject.toLowerCase().includes('math') ? 'math' : subject.toLowerCase().includes('science') ? 'science' : 'phonics',
      grade: grade.startsWith('K') ? 'K' : grade.charAt(0),
      instructions: worksheetData.subtitle,
      kidDirections: {
        text: `⭐ Read the adventure! ✏️ Answer the questions and draw your ideas!`,
        icons: ['⭐', '✏️', '📖'],
        badge: worksheetData.kidBadge || `${studentName}'s Custom Sheet`,
      },
      parentGuide: worksheetData.parentGuide,
      problems: worksheetData.questions.map((q, idx) => ({
        id: `q${idx}`,
        number: idx + 1,
        prompt: q.questionText,
      })),
      answerKey: worksheetData.answerKey || [],
    };
    onSaveToLibrary(libraryEntry);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="w-full flex flex-col lg:flex-row gap-8 items-start">
      {/* SIDEBAR CONTROLS (Hidden on print) */}
      <aside className="w-full lg:w-96 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col gap-5 no-print">
        {/* Header */}
        <div className="flex items-center gap-2.5">
          <div className="p-2.5 bg-gradient-to-tr from-indigo-600 to-pink-500 rounded-xl text-white shadow-xs">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-extrabold text-slate-900 tracking-tight">
              Adventure Studio
            </h2>
            <span className="text-[10px] text-indigo-600 font-bold uppercase tracking-wider block">
              ● Personalized Homeschool Engine
            </span>
          </div>
        </div>

        <form onSubmit={handleGenerate} className="flex flex-col gap-4">
          {/* Grade Level */}
          <div>
            <label className="text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-indigo-600" /> Grade Level
            </label>
            <select
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              className="w-full p-2.5 border border-slate-300 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-indigo-500 bg-slate-50 outline-none transition-all"
            >
              <option>Kindergarten</option>
              <option>1st Grade</option>
              <option>2nd Grade</option>
              <option>3rd Grade</option>
              <option>4th Grade</option>
              <option>5th Grade</option>
            </select>
          </div>

          {/* Student & Companion Names */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-indigo-600" /> Child's Name
              </label>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="e.g. Leo"
                className="w-full p-2.5 border border-slate-300 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-indigo-500 bg-slate-50 outline-none"
                required
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-indigo-600" /> Pets / Friends
              </label>
              <input
                type="text"
                value={additionalCharacters}
                onChange={(e) => setAdditionalCharacters(e.target.value)}
                placeholder="e.g. his dog Buster"
                className="w-full p-2.5 border border-slate-300 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-indigo-500 bg-slate-50 outline-none"
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-indigo-600" /> Subject
            </label>
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full p-2.5 border border-slate-300 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-indigo-500 bg-slate-50 outline-none"
            >
              <option>Language Arts</option>
              <option>Math</option>
              <option>Science</option>
              <option>Social Studies</option>
            </select>
          </div>

          {/* Topic & Inspiration Chips */}
          <div>
            <label className="text-xs font-bold text-slate-700 mb-1 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <PenTool className="w-3.5 h-3.5 text-indigo-600" /> Custom Topic / Prompt
              </span>
              <span className="text-[10px] text-slate-400 font-normal">Kid's favorite topic</span>
            </label>
            <textarea
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              rows="3"
              placeholder="e.g. Word problems about a pirate dividing treasure..."
              className="w-full p-2.5 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500 bg-slate-50 outline-none resize-none leading-relaxed"
              required
            />

            {/* Quick Inspiration Chips */}
            <div className="mt-2 space-y-1">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                Quick Story Ideas:
              </span>
              <div className="flex flex-wrap gap-1.5 max-h-28 overflow-y-auto pr-1">
                {INSPIRATION_CHIPS.map((chip, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleApplyChip(chip)}
                    className="text-[10px] font-semibold bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-700 px-2 py-1 rounded-lg border border-slate-200 transition-colors text-left"
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Optional Gemini API Key Drawer */}
          <div className="pt-2 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setShowApiSettings(!showApiSettings)}
              className="text-[11px] text-slate-500 hover:text-slate-800 font-bold flex items-center gap-1"
            >
              <span>⚙️ Optional Gemini API Key</span>
              <span className="text-[10px] text-indigo-600 font-normal">
                {apiKey ? '(Key entered)' : '(Using offline curriculum engine)'}
              </span>
            </button>
            {showApiSettings && (
              <div className="mt-2 p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <input
                  type="password"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="Paste AI Studio Key (or leave blank)"
                  className="w-full p-2 text-xs border border-slate-300 rounded-lg bg-white"
                />
                <p className="text-[10px] text-slate-500 leading-tight">
                  Leave blank to run our built-in offline pedagogical engine with zero setup.
                </p>
              </div>
            )}
          </div>

          {/* Generate Button */}
          <button
            type="submit"
            disabled={isGenerating}
            className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold py-3 rounded-xl shadow-xs flex justify-center items-center gap-2 text-xs transition-all disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Crafting {studentName}'s Adventure...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                Generate Adventure Worksheet
              </>
            )}
          </button>

          {error && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs font-semibold">
              {error}
            </div>
          )}
        </form>
      </aside>

      {/* MAIN WORKSHEET DISPLAY & PRINT AREA */}
      <section className="flex-1 w-full overflow-x-auto pb-8 flex flex-col items-center">
        {/* Action Header (Hidden on print) */}
        {worksheetData && (
          <div className="w-full max-w-[850px] flex flex-wrap justify-between items-center gap-3 mb-4 no-print">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-700">
                Ready for {studentName}!
              </span>
              <button
                onClick={() => setShowAnswerKey(!showAnswerKey)}
                className="text-xs font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors"
              >
                <Key className="w-3.5 h-3.5" />
                {showAnswerKey ? 'Hide Answer Key' : 'Teacher Answer Key'}
              </button>
            </div>

            <div className="flex items-center gap-2">
              {onSaveToLibrary && (
                <button
                  onClick={handleSaveSheet}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold px-3 py-1.5 rounded-lg border border-slate-300 flex items-center gap-1.5 transition-colors"
                >
                  <Save className="w-3.5 h-3.5" />
                  {isSaved ? '✓ Saved!' : 'Save to Library'}
                </button>
              )}
              <button
                onClick={handlePrint}
                className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-xs flex items-center gap-2 transition-colors"
              >
                <Printer className="w-4 h-4" /> Print / Save PDF
              </button>
            </div>
          </div>
        )}

        {/* Answer Key Dropdown (Hidden on print) */}
        {worksheetData && showAnswerKey && (
          <div className="w-full max-w-[850px] mb-4 bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-xs text-emerald-950 space-y-2 no-print shadow-xs">
            <div className="flex items-center gap-1.5 font-bold text-emerald-900">
              <Key className="w-4 h-4" /> Solution Rubric & Answer Key:
            </div>
            <div className="space-y-1.5">
              {worksheetData.answerKey?.map((ans, idx) => (
                <div key={idx} className="flex gap-2">
                  <span className="font-bold">#{ans.number}:</span>
                  <span>{ans.solution}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* The Printable 8.5x11 Paper Container */}
        <div className="w-full max-w-[850px] bg-white min-h-[1050px] shadow-lg border border-slate-300 p-8 sm:p-12 relative flex flex-col justify-between print:shadow-none print:border-none print:w-full print:max-w-none print:p-6 print:m-0">
          {/* Loading Overlay */}
          {isGenerating ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500 bg-white/90 z-20 rounded-2xl">
              <Loader2 className="w-12 h-12 animate-spin text-indigo-600 mb-4" />
              <h3 className="font-black text-xl text-slate-800">
                Writing {studentName}'s Custom Adventure...
              </h3>
              <p className="text-xs text-slate-500 mt-2">
                Weaving {additionalCharacters || 'companions'} and {subject} challenges into the story!
              </p>
            </div>
          ) : !worksheetData ? (
            <div className="py-32 flex flex-col items-center justify-center text-slate-400 text-center px-4">
              <div className="p-4 bg-indigo-50 text-indigo-600 rounded-3xl mb-4">
                <Sparkles className="w-12 h-12" />
              </div>
              <h2 className="text-xl font-black text-slate-700">Ready to Create a Custom Adventure</h2>
              <p className="mt-2 text-xs text-slate-500 max-w-md leading-relaxed">
                Enter your child's name, companion, and any fun topic on the left. We'll generate an authentic, curriculum-aligned printable worksheet starring them as the hero!
              </p>
              <button
                onClick={() => handleGenerate()}
                className="mt-6 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors"
              >
                Create Sample Worksheet for {studentName}
              </button>
            </div>
          ) : null}

          {/* Rendered Worksheet Paper Content */}
          {worksheetData && (
            <div className="space-y-6 flex-1">
              {/* Worksheet Header Layout */}
              <div className="border-b-2 border-slate-900 pb-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-3">
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full inline-block mb-1">
                      {worksheetData.kidBadge || `⭐ ${studentName}'s Adventure Worksheet`}
                    </span>
                    <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-serif">
                      {worksheetData.title}
                    </h1>
                    <h2 className="text-sm text-slate-600 italic font-sans mt-0.5">
                      {worksheetData.subtitle}
                    </h2>
                  </div>

                  {/* Student Name & Date Lines */}
                  <div className="flex flex-col gap-2.5 w-full sm:w-60">
                    <div className="flex items-end gap-2">
                      <span className="font-bold text-xs text-slate-700 uppercase">Name:</span>
                      <div className="flex-1 border-b border-slate-700 h-4"></div>
                    </div>
                    <div className="flex items-end gap-2">
                      <span className="font-bold text-xs text-slate-700 uppercase">Date:</span>
                      <div className="flex-1 border-b border-slate-700 h-4"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reading Passage */}
              {worksheetData.passage && (
                <div className="bg-slate-50/80 border border-slate-200 rounded-xl p-5 shadow-xs font-serif text-slate-900 text-sm sm:text-base leading-relaxed">
                  <div className="flex items-center gap-1.5 font-sans font-bold text-xs text-indigo-900 mb-2 uppercase tracking-wider">
                    <span>📖 The Adventure Story</span>
                  </div>
                  <div className="whitespace-pre-line">{worksheetData.passage}</div>
                </div>
              )}

              {/* Questions Section */}
              <div className="space-y-6">
                {worksheetData.questions.map((q, index) => (
                  <div key={index} className="flex flex-col break-inside-avoid">
                    <p className="text-sm sm:text-base font-semibold text-slate-900 mb-3 flex gap-2.5">
                      <span className="font-black text-indigo-700">{index + 1}.</span>
                      <span className="leading-snug">{q.questionText}</span>
                    </p>

                    {/* Answer Area: Primary Handwriting Lines vs Drawing Scratchpad */}
                    {q.answerType === 'lines' ? (
                      <div className="flex flex-col gap-4 mt-1 mb-3 ml-4">
                        {/* 3 Primary Handwriting Practice Lines */}
                        <div className="relative h-6 border-b border-slate-400">
                          <div className="absolute top-1/2 left-0 right-0 border-b border-dashed border-slate-300"></div>
                        </div>
                        <div className="relative h-6 border-b border-slate-400">
                          <div className="absolute top-1/2 left-0 right-0 border-b border-dashed border-slate-300"></div>
                        </div>
                        <div className="relative h-6 border-b border-slate-400">
                          <div className="absolute top-1/2 left-0 right-0 border-b border-dashed border-slate-300"></div>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full h-36 border-2 border-slate-300 border-dashed rounded-xl mt-1 mb-2 bg-slate-50/60 ml-2 flex flex-col items-center justify-center p-3 text-center">
                        <span className="text-slate-400 italic text-xs font-medium">
                          {q.scratchpadHint || '✏️ Show your work / Draw your picture here'}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom Footer */}
              <div className="pt-4 border-t border-slate-200 flex justify-between items-center text-[10px] text-slate-400">
                <span>Personalized Homeschool Edition • {grade} {subject}</span>
                <span>Standard: {worksheetData.parentGuide?.standard || 'Elementary Target'}</span>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
