// src/components/notes/SessionNotesDrawer.jsx
// Session observation notes logger that saves student data directly to local disk for AI analysis.
// Connects to: vite.config.js (/api/progress), student_progress.json, src/App.jsx
// Created: 2026-09-22

import React, { useState } from 'react';
import { X, Save, CheckCircle2, History, AlertCircle, Sparkles } from 'lucide-react';

export default function SessionNotesDrawer({
  isOpen,
  onClose,
  activeMilestone,
  progressData,
  onSaveProgress,
}) {
  if (!isOpen) return null;

  const [milestoneId, setMilestoneId] = useState(activeMilestone?.id || 'math-m2');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [score, setScore] = useState('85');
  const [durationMinutes, setDurationMinutes] = useState('10');
  const [status, setStatus] = useState('Needs Practice');
  const [notes, setNotes] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSave = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveSuccess(false);

    const newSession = {
      id: `session-${Date.now()}`,
      date,
      milestoneId,
      milestoneTitle: activeMilestone?.title || milestoneId,
      score: parseInt(score, 10) || 0,
      durationMinutes: parseInt(durationMinutes, 10) || 10,
      status,
      notes: notes.trim(),
    };

    const updatedSessions = [newSession, ...(progressData.sessions || [])];
    const updatedStatus = {
      ...(progressData.milestoneStatus || {}),
      [milestoneId]: {
        status,
        lastScore: parseInt(score, 10) || 0,
        lastDate: date,
      },
    };

    const payload = {
      sessions: updatedSessions,
      milestoneStatus: updatedStatus,
      lastUpdated: new Date().toISOString(),
    };

    try {
      await onSaveProgress(payload);
      setSaveSuccess(true);
      setNotes('');
      setTimeout(() => {
        setSaveSuccess(false);
      }, 3000);
    } catch (err) {
      console.error('Failed to save session notes:', err);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full p-6 sm:p-8 relative max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-slate-200 pb-3 mb-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Student Learning & Observation Log</h2>
            <p className="text-xs text-slate-500">
              Saves to <span className="font-mono bg-slate-100 px-1 py-0.5 rounded text-indigo-700">student_progress.json</span> for AI analysis
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-slate-100 text-slate-400 hover:text-slate-600 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSave} className="space-y-4 overflow-y-auto pr-1 flex-1">
          {activeMilestone && (
            <div className="bg-indigo-50 border border-indigo-200 p-3 rounded-lg text-xs">
              <span className="font-bold text-indigo-900 block">Milestone:</span>
              <span className="text-indigo-800">{activeMilestone.title}</span>
            </div>
          )}

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full text-xs border border-slate-300 rounded-lg p-2 bg-slate-50 focus:bg-white focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Score (%)</label>
              <input
                type="number"
                min="0"
                max="100"
                value={score}
                onChange={(e) => setScore(e.target.value)}
                className="w-full text-xs border border-slate-300 rounded-lg p-2 bg-slate-50 focus:bg-white focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Duration (Min)</label>
              <input
                type="number"
                min="1"
                max="60"
                value={durationMinutes}
                onChange={(e) => setDurationMinutes(e.target.value)}
                className="w-full text-xs border border-slate-300 rounded-lg p-2 bg-slate-50 focus:bg-white focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Mastery Recommendation</label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'Needs Practice', label: 'Keep Practicing' },
                { id: 'Mastered', label: 'Mastered (Move On)' },
                { id: 'Needs Review', label: 'Needs Modification' },
              ].map((item) => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => setStatus(item.id)}
                  className={`py-2 text-xs font-bold rounded-lg border transition-all ${
                    status === item.id
                      ? item.id === 'Mastered'
                        ? 'bg-emerald-500 text-white border-emerald-600'
                        : 'bg-indigo-600 text-white border-indigo-700'
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Observations & Child's Verbal Reactions
            </label>
            <textarea
              rows="4"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Counted top row dots one-by-one instead of recognizing 5. Hesitated on 8. Did great with 6 and 7. Had trouble explaining how many more to make 10."
              className="w-full text-xs border border-slate-300 rounded-lg p-3 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none placeholder:text-slate-400"
            ></textarea>
            <p className="text-[11px] text-slate-400 mt-1">
              Be specific about what clicked or where he hesitated. I will read these exact notes to recommend what to do next.
            </p>
          </div>

          {saveSuccess && (
            <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 p-3 rounded-lg text-xs font-semibold animate-fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Notes saved to student_progress.json! You can now ask Antigravity to analyze them.</span>
            </div>
          )}

          <div className="pt-2 flex justify-end gap-2 border-t border-slate-200">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              Close
            </button>
            <button
              type="submit"
              disabled={isSaving}
              className="flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg shadow-sm transition-all disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              {isSaving ? 'Saving to Disk...' : 'Save Session Notes'}
            </button>
          </div>

          {/* Past Notes History */}
          {progressData.sessions?.length > 0 && (
            <div className="mt-4 pt-4 border-t border-slate-100">
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <History className="w-3.5 h-3.5 text-slate-400" />
                Previous Observations ({progressData.sessions.length})
              </h4>
              <div className="space-y-2 max-h-36 overflow-y-auto pr-1">
                {progressData.sessions.slice(0, 3).map((s) => (
                  <div key={s.id} className="text-xs bg-slate-50 border border-slate-200 p-2.5 rounded-lg space-y-1">
                    <div className="flex justify-between font-semibold text-slate-800">
                      <span>{s.milestoneTitle}</span>
                      <span className="text-[11px] text-slate-500">{s.date} ({s.score}%)</span>
                    </div>
                    {s.notes && <p className="text-slate-600 italic">"{s.notes}"</p>}
                  </div>
                ))}
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
