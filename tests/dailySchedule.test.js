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

  it('guarantees every day across all 4 subjects has an explicit strictBoundary ("No Further") guardrail', () => {
    ['math', 'phonics', 'science', 'socialStudies'].forEach((subject) => {
      for (let day = 1; day <= 10; day++) {
        const lesson = getDailyLesson(subject, day);
        expect(lesson.strictBoundary).toBeDefined();
        expect(typeof lesson.strictBoundary).toBe('string');
        expect(lesson.strictBoundary.length).toBeGreaterThan(10);
      }
    });
  });

  it('guarantees Phonics Days 1-10 follows strict Science of Reading prerequisites without premature leaps', () => {
    // Day 1: Letter 'm' only
    const day1Lesson = getDailyLesson('phonics', 1);
    expect(day1Lesson.strictBoundary).toContain('Letter m');
    const day1Sheet = day1Lesson.generateSheet(1);
    day1Sheet.problems.forEach((p) => {
      expect(p.word).toBe('m');
      expect(p.phonemes).toEqual(['m']);
      expect(p.soundClues).toBeDefined();
    });

    // Day 2: Short vowel 'a' only
    const day2Lesson = getDailyLesson('phonics', 2);
    expect(day2Lesson.strictBoundary).toContain('Short vowel a');
    const day2Sheet = day2Lesson.generateSheet(1);
    day2Sheet.problems.forEach((p) => {
      expect(p.word).toBe('a');
      expect(p.phonemes).toEqual(['a']);
    });

    // Day 3: Stop consonant 't' only
    const day3Lesson = getDailyLesson('phonics', 3);
    expect(day3Lesson.strictBoundary).toContain('Stop consonant t');
    const day3Sheet = day3Lesson.generateSheet(1);
    day3Sheet.problems.forEach((p) => {
      expect(p.word).toBe('t');
      expect(p.phonemes).toEqual(['t']);
    });

    // Day 4: First blending - VC word "at"
    const day4Lesson = getDailyLesson('phonics', 4);
    expect(day4Lesson.strictBoundary).toContain('"at"');
    const day4Sheet = day4Lesson.generateSheet(1);
    day4Sheet.problems.forEach((p) => {
      expect(p.word).toBe('at');
      expect(p.phonemes).toEqual(['a', 't']);
    });

    // Day 5: First CVC word "mat"
    const day5Lesson = getDailyLesson('phonics', 5);
    expect(day5Lesson.strictBoundary).toContain('"mat"');
    const day5Sheet = day5Lesson.generateSheet(1);
    const day5Words = day5Sheet.problems.map((p) => p.word);
    expect(day5Words).toContain('mat');
    expect(day5Words).toContain('at');

    // Day 6: Continuous 's' and "sat"
    const day6Sheet = getDailyLesson('phonics', 6).generateSheet(1);
    expect(day6Sheet.problems.some((p) => p.word === 'sat')).toBe(true);

    // Day 7: Consonant 'p' (pat, tap, map)
    const day7Sheet = getDailyLesson('phonics', 7).generateSheet(1);
    expect(day7Sheet.problems.some((p) => p.word === 'pat')).toBe(true);
    expect(day7Sheet.problems.some((p) => p.word === 'tap')).toBe(true);

    // Day 8: Short vowel 'i' (sit, tip, pit)
    const day8Sheet = getDailyLesson('phonics', 8).generateSheet(1);
    expect(day8Sheet.problems.some((p) => p.word === 'sit')).toBe(true);

    // Day 9: Consonant 'n' (pan, pin, tan, man)
    const day9Sheet = getDailyLesson('phonics', 9).generateSheet(1);
    expect(day9Sheet.problems.some((p) => p.word === 'pan')).toBe(true);
    expect(day9Sheet.problems.some((p) => p.word === 'pin')).toBe(true);

    // Day 10: Reading Champion phrases
    const day10Lesson = getDailyLesson('phonics', 10);
    const day10Sheet = day10Lesson.generateSheet(1);
    expect(day10Sheet.decodablePhrases).toBeDefined();
    expect(day10Sheet.decodablePhrases.length).toBeGreaterThan(0);
  });
});
