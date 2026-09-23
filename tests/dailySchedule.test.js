// tests/dailySchedule.test.js
// Unit tests verifying the 20-Day progressive curriculum and parent scripts.
// Connects to: src/domain/curriculum/dailySchedule.js
// Created: 2026-09-22

import { describe, it, expect } from 'vitest';
import { DAILY_CURRICULUM, getDailyLesson } from '../src/domain/curriculum/dailySchedule.js';

describe('20-Day Daily Curriculum System', () => {
  it('contains full 20-day tracks for math, phonics, science, and social studies', () => {
    expect(DAILY_CURRICULUM.math.length).toBe(20);
    expect(DAILY_CURRICULUM.phonics.length).toBe(20);
    expect(DAILY_CURRICULUM.science.length).toBe(20);
    expect(DAILY_CURRICULUM.socialStudies.length).toBe(20);
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

  it('generates valid printable worksheets and answer keys for every day (Days 1 to 20)', () => {
    ['math', 'phonics', 'science', 'socialStudies'].forEach((subject) => {
      for (let day = 1; day <= 20; day++) {
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

  it('supports stepping backwards and boundary clamping up to Day 20', () => {
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

    // Boundary check at day 20
    day = 20;
    day = Math.min(20, day + 1);
    expect(day).toBe(20);
    expect(getDailyLesson('math', day).day).toBe(20);
  });

  it('guarantees Kindergarten Math Days 1-10 adhere to CCSS K.CC Counting & Cardinality without premature operations', () => {
    for (let day = 1; day <= 10; day++) {
      const lesson = getDailyLesson('math', day);
      expect(lesson.standard).toContain('CC');

      const sheet = lesson.generateSheet(1);
      expect(sheet.grade).toBe('K');
      expect(sheet.problems.length).toBe(4);

      sheet.problems.forEach((p) => {
        expect([
          'counting-objects',
          'ten-frame',
          'quantity-comparison',
          'numeral-comparison',
        ]).toContain(p.type);
      });
    }

    const day1Sheet = getDailyLesson('math', 1).generateSheet(1);
    expect(day1Sheet.problems[0].type).toBe('counting-objects');
    expect(day1Sheet.problems[0].count).toBeGreaterThanOrEqual(1);

    const day4Sheet = getDailyLesson('math', 4).generateSheet(1);
    expect(day4Sheet.problems[0].type).toBe('quantity-comparison');
    expect(day4Sheet.problems[0].groupA).toBeDefined();
    expect(day4Sheet.problems[0].groupB).toBeDefined();

    const day9Sheet = getDailyLesson('math', 9).generateSheet(1);
    expect(day9Sheet.problems[0].type).toBe('numeral-comparison');
    expect(day9Sheet.problems[0].numA).toBeDefined();
    expect(day9Sheet.problems[0].numB).toBeDefined();
  });

  it('guarantees Kindergarten Math Days 11-20 introduce Number Bonds and Teen Numbers 11-20', () => {
    // Days 11-16 must include number-bond problems
    for (let day = 11; day <= 16; day++) {
      const lesson = getDailyLesson('math', day);
      const sheet = lesson.generateSheet(1);
      expect(sheet.problems.some((p) => p.type === 'number-bond')).toBe(true);
      const bond = sheet.problems.find((p) => p.type === 'number-bond');
      expect(bond.whole).toBeDefined();
      expect(bond.partA).toBeDefined();
    }

    // Day 17: Friends of 10
    const day17Sheet = getDailyLesson('math', 17).generateSheet(1);
    expect(day17Sheet.problems[0].showComplement).toBe(true);
    expect(day17Sheet.problems[0].complement).toBe(3);

    // Day 18-19: Teen numbers 11 to 20
    const day18Sheet = getDailyLesson('math', 18).generateSheet(1);
    expect(day18Sheet.problems[0].count).toBe(11);
    const day19Sheet = getDailyLesson('math', 19).generateSheet(1);
    expect(day19Sheet.problems[3].count).toBe(20);

    // Day 20: Grand Champion review
    const day20Sheet = getDailyLesson('math', 20).generateSheet(1);
    expect(day20Sheet.problems.some((p) => p.type === 'number-bond')).toBe(true);
    expect(day20Sheet.problems.some((p) => p.type === 'ten-frame')).toBe(true);
  });

  it('guarantees every day across all 4 subjects has an explicit strictBoundary ("No Further") guardrail', () => {
    ['math', 'phonics', 'science', 'socialStudies'].forEach((subject) => {
      for (let day = 1; day <= 20; day++) {
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

    // Day 4: First blending - VC word "at"
    const day4Lesson = getDailyLesson('phonics', 4);
    expect(day4Lesson.strictBoundary).toContain('"at"');

    // Day 5: First CVC word "mat"
    const day5Lesson = getDailyLesson('phonics', 5);
    expect(day5Lesson.strictBoundary).toContain('"mat"');

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

  it('guarantees Phonics Days 11-20 systematically introduces remaining consonants and vowels in strict Science of Reading order', () => {
    // Day 11: Stop Consonant /d/ (dad, pad, sad, mad)
    const day11Sheet = getDailyLesson('phonics', 11).generateSheet(1);
    expect(day11Sheet.problems.some((p) => p.word === 'dad')).toBe(true);

    // Day 12: Short Vowel /o/ (mop, pot, top, not)
    const day12Sheet = getDailyLesson('phonics', 12).generateSheet(1);
    expect(day12Sheet.problems.some((p) => p.word === 'pot')).toBe(true);

    // Day 13: Velar Stop /k/ spelled c (cat, can, cap, cot)
    const day13Sheet = getDailyLesson('phonics', 13).generateSheet(1);
    expect(day13Sheet.problems.some((p) => p.word === 'cat')).toBe(true);

    // Day 14: Velar Stop /g/ (gap, got, tag, pig)
    const day14Sheet = getDailyLesson('phonics', 14).generateSheet(1);
    expect(day14Sheet.problems.some((p) => p.word === 'tag')).toBe(true);

    // Day 15: Stop Consonant /b/ & b/d Directionality
    const day15Lesson = getDailyLesson('phonics', 15);
    expect(day15Lesson.strictBoundary).toContain('b/d');
    const day15Sheet = day15Lesson.generateSheet(1);
    expect(day15Sheet.problems.some((p) => p.word === 'bat')).toBe(true);

    // Day 16: Short Vowel /u/ (sun, cup, nut, bug)
    const day16Sheet = getDailyLesson('phonics', 16).generateSheet(1);
    expect(day16Sheet.problems.some((p) => p.word === 'sun')).toBe(true);

    // Day 17: Breath /h/ & letter k (hat, hot, hut, kid)
    const day17Sheet = getDailyLesson('phonics', 17).generateSheet(1);
    expect(day17Sheet.problems.some((p) => p.word === 'hat')).toBe(true);

    // Day 18: Short Vowel /e/ (bed, red, net, pet)
    const day18Sheet = getDailyLesson('phonics', 18).generateSheet(1);
    expect(day18Sheet.problems.some((p) => p.word === 'bed')).toBe(true);

    // Day 19: Heart words & 5-vowel minimal pairs (pat, pet, pit, pot)
    const day19Sheet = getDailyLesson('phonics', 19).generateSheet(1);
    expect(day19Sheet.problems.map((p) => p.word)).toEqual(['pat', 'pet', 'pit', 'pot']);

    // Day 20: 5-Vowel Grand Champion Decodable Reader
    const day20Sheet = getDailyLesson('phonics', 20).generateSheet(1);
    expect(day20Sheet.decodablePhrases.length).toBeGreaterThanOrEqual(4);
    expect(day20Sheet.decodablePhrases[0]).toContain('big pig');
  });

  it('guarantees Science and Social Studies Days 11-20 cover Core Knowledge and NGSS standards', () => {
    // Science Day 11: Plant Anatomy
    const sciDay11 = getDailyLesson('science', 11).generateSheet(1);
    expect(sciDay11.problems[0].prompt).toContain('ROOTS');

    // Science Day 17: States of Matter (Solids vs Liquids)
    const sciDay17 = getDailyLesson('science', 17).generateSheet(1);
    expect(sciDay17.problems[0].options[0]).toContain('SOLID');

    // Social Studies Day 11: Types of Communities
    const socDay11 = getDailyLesson('socialStudies', 11).generateSheet(1);
    expect(socDay11.problems[0].options[0]).toContain('URBAN');

    // Social Studies Day 15: The 7 Continents
    const socDay15 = getDailyLesson('socialStudies', 15).generateSheet(1);
    expect(socDay15.problems[0].prompt).toContain('continents');

    // Social Studies Day 18: Statue of Liberty
    const socDay18 = getDailyLesson('socialStudies', 18).generateSheet(1);
    expect(socDay18.problems[0].prompt).toContain('Statue of Liberty');
  });
});
