// tests/academicYear180.test.js
// Unit tests verifying the 180-Day Academic Calendar & Curriculum Pacing Engine.
// Connects to: src/domain/curriculum/academicYear180.js
// Created: 2026-09-22

import { describe, it, expect } from 'vitest';
import {
  ACADEMIC_YEAR_CONFIG,
  QUARTERS,
  WEEKLY_PACING_36,
  getAcademicPacingForDay,
  getQuarterInfo,
  getWeeksForQuarter,
} from '../src/domain/curriculum/academicYear180.js';

describe('180-Day Academic Calendar & Curriculum Pacing Engine', () => {
  it('defines 180 instructional days across 36 weeks and 4 quarters', () => {
    expect(ACADEMIC_YEAR_CONFIG.totalDays).toBe(180);
    expect(ACADEMIC_YEAR_CONFIG.totalWeeks).toBe(36);
    expect(ACADEMIC_YEAR_CONFIG.daysPerWeek).toBe(5);
    expect(ACADEMIC_YEAR_CONFIG.totalQuarters).toBe(4);
    expect(ACADEMIC_YEAR_CONFIG.daysPerQuarter).toBe(45);
    expect(QUARTERS.length).toBe(4);
    expect(WEEKLY_PACING_36.length).toBe(36);
  });

  it('correctly maps Quarter 1, 2, 3, and 4 boundaries', () => {
    expect(QUARTERS[0].days).toEqual([1, 45]);
    expect(QUARTERS[1].days).toEqual([46, 90]);
    expect(QUARTERS[2].days).toEqual([91, 135]);
    expect(QUARTERS[3].days).toEqual([136, 180]);
  });

  it('returns valid pacing for Day 1 (Launch Day)', () => {
    const pacing = getAcademicPacingForDay(1);
    expect(pacing.day).toBe(1);
    expect(pacing.quarter).toBe(1);
    expect(pacing.week).toBe(1);
    expect(pacing.progressPercent).toBe(1);
    expect(pacing.mathFocus).toContain('Subitizing');
    expect(pacing.phonicsFocus).toContain('Short-A');
    expect(pacing.scienceFocus).toContain('Living vs. Non-Living');
    expect(pacing.socialStudiesFocus).toContain('Maps vs. Globes');
  });

  it('returns valid pacing for Day 45 (End of Q1 Capstone)', () => {
    const pacing = getAcademicPacingForDay(45);
    expect(pacing.day).toBe(45);
    expect(pacing.quarter).toBe(1);
    expect(pacing.week).toBe(9);
    expect(pacing.progressPercent).toBe(25);
    expect(pacing.milestone).toContain('Quarter 1');
  });

  it('returns valid pacing for Day 46 (Start of Quarter 2)', () => {
    const pacing = getAcademicPacingForDay(46);
    expect(pacing.day).toBe(46);
    expect(pacing.quarter).toBe(2);
    expect(pacing.week).toBe(10);
    expect(pacing.mathFocus).toContain('Addition within 5');
  });

  it('identifies the Day 100 milestone (100th Day of School)', () => {
    const pacing = getAcademicPacingForDay(100);
    expect(pacing.day).toBe(100);
    expect(pacing.quarter).toBe(3);
    expect(pacing.week).toBe(20);
    expect(pacing.milestone).toContain('100th Day');
  });

  it('returns valid pacing for Day 180 (Kindergarten Graduation Capstone)', () => {
    const pacing = getAcademicPacingForDay(180);
    expect(pacing.day).toBe(180);
    expect(pacing.quarter).toBe(4);
    expect(pacing.week).toBe(36);
    expect(pacing.progressPercent).toBe(100);
    expect(pacing.milestone).toContain('Graduation');
  });

  it('safely clamps days below 1 and above 180', () => {
    const minDay = getAcademicPacingForDay(-5);
    expect(minDay.day).toBe(1);

    const maxDay = getAcademicPacingForDay(999);
    expect(maxDay.day).toBe(180);
  });

  it('retrieves 9 weeks for each quarter via getWeeksForQuarter', () => {
    for (let q = 1; q <= 4; q++) {
      const weeks = getWeeksForQuarter(q);
      expect(weeks.length).toBe(9);
      weeks.forEach((w) => expect(w.quarter).toBe(q));
    }
  });
});
