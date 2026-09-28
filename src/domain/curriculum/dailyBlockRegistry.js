// src/domain/curriculum/dailyBlockRegistry.js
// Central curriculum registry for full Daily Blocks (Schedule, Activities, Field Trip, Sheets).
// Connects to: src/domain/curriculum/kindergarten/day01Block.js, src/components/daily/DailyDashboard.jsx
// Created: 2026-09-27

import { KINDERGARTEN_DAY_01_BLOCK } from './kindergarten/day01Block.js';
import { KINDERGARTEN_DAY_02_BLOCK } from './kindergarten/day02Block.js';
import { validateDailyBlock } from './dailyBlockModel.js';

/**
 * Master Registry of fully accredited Daily Blocks.
 * Keyed by grade and day number.
 */
const DAILY_BLOCK_REGISTRY = {
  Kindergarten: {
    1: KINDERGARTEN_DAY_01_BLOCK,
    2: KINDERGARTEN_DAY_02_BLOCK,
  },
};

/**
 * Retrieves a full daily block by grade and day number.
 * 
 * @param {string} grade - e.g. "Kindergarten"
 * @param {number} day - Day number (e.g. 1)
 * @returns {Object|null} The daily block object or null if not yet defined
 */
export function getDailyBlock(grade = 'Kindergarten', day = 1) {
  const gradeKey = grade === 'K' || grade === 'Kindergarten (K)' ? 'Kindergarten' : grade;
  const gradeBlocks = DAILY_BLOCK_REGISTRY[gradeKey];
  if (!gradeBlocks) return null;
  return gradeBlocks[day] || null;
}

/**
 * Checks if a day has an articulated Full Daily Block.
 * 
 * @param {string} grade - e.g. "Kindergarten"
 * @param {number} day - Day number
 * @returns {boolean}
 */
export function hasDailyBlock(grade = 'Kindergarten', day = 1) {
  return getDailyBlock(grade, day) !== null;
}

/**
 * Returns all available articulated daily blocks for a given grade.
 * 
 * @param {string} grade - Grade level name
 * @returns {Object[]} Array of daily block objects
 */
export function getAvailableBlocksForGrade(grade = 'Kindergarten') {
  const gradeKey = grade === 'K' || grade === 'Kindergarten (K)' ? 'Kindergarten' : grade;
  const gradeBlocks = DAILY_BLOCK_REGISTRY[gradeKey];
  if (!gradeBlocks) return [];
  return Object.values(gradeBlocks);
}
