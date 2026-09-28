// src/App.jsx
// Main application container uniting the Day-by-Day Accredited Curriculum & Printable Studio.
// Connects to: src/components/daily/DailyDashboard.jsx
// Created: 2026-09-22 / Refactored: 2026-09-27

import React, { useState, useEffect } from 'react';
import DailyDashboard from './components/daily/DailyDashboard.jsx';
import { GraduationCap, Sparkles } from 'lucide-react';

/**
 * Main application component.
 * Manages grade level and student progress persistence across instructional days.
 */
export default function App() {
  const [progressData, setProgressData] = useState({
    selectedGrade: 'Kindergarten',
    studentDays: { math: 1, phonics: 1, science: 1, socialStudies: 1 },
  });

  useEffect(() => {
    loadProgress();
  }, []);

  const loadProgress = async () => {
    try {
      const res = await fetch('/api/progress');
      if (res.ok) {
        const data = await res.json();
        setProgressData({
          selectedGrade: data.selectedGrade || 'Kindergarten',
          studentDays: data.studentDays || { math: 1, phonics: 1, science: 1, socialStudies: 1 },
        });
      }
    } catch (err) {
      // Progress API is optional for local offline runs
      console.info('Running with in-memory student progress.');
    }
  };

  const handleSaveProgress = async (newPayload) => {
    setProgressData(newPayload);
    try {
      await fetch('/api/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPayload, null, 2),
      });
    } catch (err) {
      // Local fallback in memory
    }
  };

  const handleUpdateStudentDay = async (subject, newDay) => {
    const updatedDays = {
      ...progressData.studentDays,
      [subject]: newDay,
    };
    const updatedPayload = {
      ...progressData,
      studentDays: updatedDays,
      lastUpdated: new Date().toISOString(),
    };
    await handleSaveProgress(updatedPayload);
  };

  const handleUpdateGrade = async (newGrade) => {
    const updatedPayload = {
      ...progressData,
      selectedGrade: newGrade,
      lastUpdated: new Date().toISOString(),
    };
    await handleSaveProgress(updatedPayload);
  };

  const handleResetToDay1 = async () => {
    const updatedPayload = {
      ...progressData,
      studentDays: { math: 1, phonics: 1, science: 1, socialStudies: 1 },
      lastUpdated: new Date().toISOString(),
    };
    await handleSaveProgress(updatedPayload);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col text-slate-900 font-sans">
      {/* Top Application Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-3.5 flex flex-wrap justify-between items-center gap-3 shadow-xs no-print">
        <div className="flex items-center gap-3">
          <span className="font-black text-indigo-700 tracking-tight text-lg">
            AI-Worksheet Studio
          </span>
          <span className="hidden sm:inline-block text-xs bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded-full font-bold border border-indigo-200">
            Daily Zero-Friction Teaching
          </span>
        </div>

        {/* Grade Selector */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 bg-slate-100 px-2.5 py-1 rounded-xl border border-slate-200">
            <GraduationCap className="w-3.5 h-3.5 text-indigo-600" />
            <span className="text-[10px] font-black uppercase text-slate-500">Grade:</span>
            <select
              value={progressData.selectedGrade || 'Kindergarten'}
              onChange={(e) => handleUpdateGrade(e.target.value)}
              className="bg-white border border-slate-200 rounded-lg px-2 py-0.5 text-xs font-black text-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
            >
              <option value="Kindergarten">Kindergarten (K)</option>
            </select>
          </div>
        </div>
      </header>

      {/* Main Day-by-Day Instructional Studio */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        <DailyDashboard
          studentDays={progressData.studentDays}
          currentGrade={progressData.selectedGrade || 'Kindergarten'}
          onUpdateDay={handleUpdateStudentDay}
          onUpdateGrade={handleUpdateGrade}
          onResetToDay1={handleResetToDay1}
        />
      </main>
    </div>
  );
}
