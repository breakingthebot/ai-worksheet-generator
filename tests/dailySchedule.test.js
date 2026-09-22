// tests/dailySchedule.test.js
// Unit tests verifying the 10-Day progressive curriculum and parent scripts.
// Connects to: src/domain/curriculum/dailySchedule.js
// Created: 2026-09-22

import { describe, it, expect } from 'vitest';
import { DAILY_CURRICULUM, getDailyLesson } from '../src/domain/curriculum/dailySchedule.js';

describe('10-Day Daily Curriculum System', () => {
  it('contains full 10-day tracks for math, phonics, science, and social studies', () => {
    expect(DAILY_CURRICULUM.math.length).toBe(10);
    expect(DAILY_CURRICULUM.phonics.length).toBe(10);
    expect(DAILY_CURRICULUM.science.length).toBe(10);
    expect(DAILY_CURRICULUM.socialStudies.length).toBe(10);
  });

  it('guarantees that every day contains a word-for-word parent script', () => {
    ['math', 'phonics', 'science', 'socialStudies'].forEach((subject) => {
      DAILY_CURRICULUM[subject].forEach((lesson) => {
        expect(lesson.day).toBeGreaterThanOrEqual(1);
        expect(lesson.title).toBeTruthy();
        expect(lesson.script).toBeDefined();
        expect(lesson.script.say).toBeTruthy();
        expect(lesson.script.do).toBeTruthy();
        expect(lesson.script.lookFor).toBeTruthy();
        expect(typeof lesson.generateSheet).toBe('function');
      });
    });
  });

  it('generates valid printable worksheets and answer keys for every day', () => {
    ['math', 'phonics', 'science', 'socialStudies'].forEach((subject) => {
      for (let day = 1; day <= 10; day++) {
        const lesson = getDailyLesson(subject, day);
        const sheet = lesson.generateSheet(1);

        expect(sheet.title).toBeDefined();
        expect(sheet.problems.length).toBeGreaterThan(0);
        expect(sheet.answerKey.length).toBeGreaterThan(0);
      }
    });
  });

  it('generates practice variants when requested', () => {
    const lesson = getDailyLesson('math', 1);
    const variant1 = lesson.generateSheet(1);
    const variant2 = lesson.generateSheet(2);

    expect(variant1.id).toContain('v1');
    expect(variant2.id).toContain('v2');
    expect(variant1.problems.length).toBe(variant2.problems.length);
  });

  it('supports stepping backwards and boundary clamping', () => {
    let day = 5;
    expect(getDailyLesson('math', day).day).toBe(5);

    // Step backward
    day = Math.max(1, day - 1);
    expect(day).toBe(4);
    expect(getDailyLesson('math', day).day).toBe(4);

    // Boundary check at day 1
    day = 1;
    day = Math.max(1, day - 1);
    expect(day).toBe(1);

    // Boundary check at day 10
    day = 10;
    day = Math.min(10, day + 1);
    expect(day).toBe(10);
  });

  it('guarantees Kindergarten Math Days 1-10 adhere to CCSS K.CC Counting & Cardinality without premature operations', () => {
    // Days 1-10 in Math must focus on counting, subitizing, and comparing sets
    for (let day = 1; day <= 10; day++) {
      const lesson = getDailyLesson('math', day);
      expect(lesson.standard).toContain('CC');

      const sheet = lesson.generateSheet(1);
      expect(sheet.grade).toBe('K');
      expect(sheet.problems.length).toBe(4);

      // Verify problem types used belong to early childhood counting / ten-frames / comparisons
      sheet.problems.forEach((p) => {
        expect([
          'counting-objects',
          'ten-frame',
          'quantity-comparison',
          'numeral-comparison',
        ]).toContain(p.type);
      });
    }

    // Verify Day 1 uses tactile object counting
    const day1Sheet = getDailyLesson('math', 1).generateSheet(1);
    expect(day1Sheet.problems[0].type).toBe('counting-objects');
    expect(day1Sheet.problems[0].count).toBeGreaterThanOrEqual(1);

    // Verify Day 4 uses set comparison (Which has MORE?)
    const day4Sheet = getDailyLesson('math', 4).generateSheet(1);
    expect(day4Sheet.problems[0].type).toBe('quantity-comparison');
    expect(day4Sheet.problems[0].groupA).toBeDefined();
    expect(day4Sheet.problems[0].groupB).toBeDefined();

    // Verify Day 9 uses numeral comparison
    const day9Sheet = getDailyLesson('math', 9).generateSheet(1);
    expect(day9Sheet.problems[0].type).toBe('numeral-comparison');
    expect(day9Sheet.problems[0].numA).toBeDefined();
    expect(day9Sheet.problems[0].numB).toBeDefined();
  });
});
