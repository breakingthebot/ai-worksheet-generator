// src/domain/curriculum/dailyBlockModel.js
// Data schema, validation rules, and helper utilities for a complete accredited Daily Curriculum Block.
// Connects to: src/domain/curriculum/kindergarten/day01Block.js, src/components/daily/DailyScheduleTimeline.jsx
// Created: 2026-09-27

/**
 * Standard daily block categories aligned with early childhood and elementary pacing.
 */
export const BLOCK_CATEGORIES = {
  MORNING_CIRCLE: 'morning_circle',
  PHONICS_LITERACY: 'phonics_literacy',
  MATH_EXPLORATION: 'math_exploration',
  BRAIN_BREAK_SNACK: 'brain_break_snack',
  SCIENCE_DISCOVERY: 'science_discovery',
  SOCIAL_STUDIES: 'social_studies',
  FIELD_TRIP_IMMERSION: 'field_trip_immersion',
  REFLECTION_MASTERY: 'reflection_mastery',
};

/**
 * Validates that a daily block object contains all required accredited pedagogical structures.
 * 
 * @param {Object} block - The daily block object to validate
 * @returns {{ isValid: boolean, errors: string[] }}
 */
export function validateDailyBlock(block) {
  const errors = [];

  if (!block) {
    return { isValid: false, errors: ['Block object is null or undefined'] };
  }

  if (typeof block.day !== 'number' || block.day < 1) {
    errors.push('Block must have a valid positive day number');
  }

  if (!block.grade) {
    errors.push('Block must specify a grade level');
  }

  if (!block.theme || typeof block.theme !== 'string') {
    errors.push('Block must have a descriptive pedagogical theme');
  }

  if (!Array.isArray(block.timeBlocks) || block.timeBlocks.length === 0) {
    errors.push('Block must contain at least one scheduled time block');
  } else {
    block.timeBlocks.forEach((tb, idx) => {
      if (!tb.id) errors.push(`Time block #${idx + 1} is missing an id`);
      if (!tb.title) errors.push(`Time block #${idx + 1} is missing a title`);
      if (!tb.durationMinutes || tb.durationMinutes <= 0) {
        errors.push(`Time block #${idx + 1} is missing a valid duration in minutes`);
      }
      if (!tb.handsOnActivity) {
        errors.push(`Time block #${idx + 1} is missing handsOnActivity details`);
      }
    });
  }

  if (!block.fieldTrip) {
    errors.push('Block must include a field trip / real-world experiential reinforcement guide');
  } else {
    if (!block.fieldTrip.title) errors.push('Field trip guide is missing a title');
    if (!block.fieldTrip.outdoorMission) errors.push('Field trip guide is missing outdoorMission');
    if (!block.fieldTrip.indoorAlternative) errors.push('Field trip guide is missing indoorAlternative');
    if (!Array.isArray(block.fieldTrip.conversationPrompts) || block.fieldTrip.conversationPrompts.length === 0) {
      errors.push('Field trip guide must include at least one conversation prompt');
    }
  }

  if (!block.sheets || typeof block.sheets !== 'object') {
    errors.push('Block must include matching sheets for the core subjects');
  } else {
    const requiredSubjects = ['math', 'phonics', 'science', 'socialStudies'];
    requiredSubjects.forEach((sub) => {
      if (!block.sheets[sub]) {
        errors.push(`Block is missing worksheet definition for ${sub}`);
      }
    });
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Calculates total planned instructional duration in minutes for a daily block.
 * 
 * @param {Object} block - The daily block object
 * @returns {number} Total duration in minutes
 */
export function calculateTotalBlockMinutes(block) {
  if (!block || !Array.isArray(block.timeBlocks)) return 0;
  return block.timeBlocks.reduce((total, tb) => total + (tb.durationMinutes || 0), 0);
}

/**
 * Extracts a consolidated materials checklist across all time blocks and field trips.
 * 
 * @param {Object} block - The daily block object
 * @returns {string[]} List of unique materials needed for the day
 */
export function extractConsolidatedMaterials(block) {
  if (!block) return [];
  const set = new Set();

  if (Array.isArray(block.timeBlocks)) {
    block.timeBlocks.forEach((tb) => {
      if (Array.isArray(tb.materials)) {
        tb.materials.forEach((m) => set.add(m));
      }
    });
  }

  if (block.fieldTrip && Array.isArray(block.fieldTrip.materials)) {
    block.fieldTrip.materials.forEach((m) => set.add(m));
  }

  return Array.from(set);
}
