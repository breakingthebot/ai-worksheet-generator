// src/components/scaffolds/ElkoninSoundBoxes.jsx
// Authentic FCRR & Science of Reading Elkonin Phoneme Sound Box Scaffold
// Features: 2, 3, or 4 segmented boxes for phoneme mapping, slide-and-say touch points
// Created: 2026-09-27

import React from 'react';

/**
 * ElkoninSoundBoxes Component
 * @param {string} word - The target word (e.g. "sun", "cat")
 * @param {Array<string>} sounds - Array of phonemes (e.g. ["s", "u", "n"])
 * @param {string} picture - Emoji or image representation
 * @param {boolean} showLetters - Whether letters are revealed or left blank for counters
 */
export default function ElkoninSoundBoxes({
  word = '',
  sounds = [],
  picture = '',
  showLetters = false,
  className = ''
}) {
  const boxCount = sounds.length > 0 ? sounds.length : (word ? word.length : 3);
  const phonemes = sounds.length > 0 ? sounds : (word ? word.split('') : Array(boxCount).fill(''));

  return (
    <div className={`flex flex-col items-center justify-center p-3 bg-white border border-slate-200 rounded-xl select-none ${className}`}>
      {picture && (
        <div className="text-4xl mb-2 drop-shadow-xs">
          {picture}
        </div>
      )}

      {/* The Sound Boxes */}
      <div className="flex border-4 border-slate-900 rounded-lg overflow-hidden bg-slate-50 shadow-xs">
        {phonemes.map((sound, idx) => (
          <div
            key={idx}
            className="w-14 h-14 sm:w-16 sm:h-16 border-r-2 last:border-r-0 border-slate-400 flex items-center justify-center bg-white text-2xl font-mono font-black text-indigo-900"
          >
            {showLetters ? sound : ''}
          </div>
        ))}
      </div>

      {/* Touch & Slide Counters underneath */}
      <div className="flex justify-around w-full max-w-[200px] mt-2 px-2">
        {phonemes.map((_, idx) => (
          <div
            key={idx}
            className="w-4 h-4 rounded-full border-2 border-slate-400 bg-amber-200/80 shadow-2xs"
            title="Touch and push sound into box"
          />
        ))}
      </div>
      <span className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
        Touch & Push Sounds
      </span>
    </div>
  );
}
