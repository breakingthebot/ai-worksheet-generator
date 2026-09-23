// tests/dailySchedule.test.js
// Unit tests verifying the 30-Day progressive curriculum, parent scripts, and strict boundaries.
// Connects to: src/domain/curriculum/dailySchedule.js
// Created: 2026-09-22

import { describe, it, expect } from 'vitest';
import { DAILY_CURRICULUM, getDailyLesson } from '../src/domain/curriculum/dailySchedule.js';

describe('40-Day Daily Curriculum System', () => {
  it('contains full 40-day tracks for math, phonics, science, and social studies', () => {
    expect(DAILY_CURRICULUM.math.length).toBe(40);
    expect(DAILY_CURRICULUM.phonics.length).toBe(40);
    expect(DAILY_CURRICULUM.science.length).toBe(40);
    expect(DAILY_CURRICULUM.socialStudies.length).toBe(40);
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

  it('generates valid printable worksheets and answer keys for every day (Days 1 to 40)', () => {
    ['math', 'phonics', 'science', 'socialStudies'].forEach((subject) => {
      for (let day = 1; day <= 40; day++) {
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

  it('supports stepping backwards and boundary clamping up to Day 40', () => {
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

    // Boundary check at day 40
    day = 40;
    day = Math.min(40, day + 1);
    expect(day).toBe(40);
    expect(getDailyLesson('math', day).day).toBe(40);
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
      for (let day = 1; day <= 40; day++) {
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

  it('guarantees Kindergarten Math Days 21-30 introduce concrete addition and subtraction within 5', () => {
    // Day 21: Concept of Putting Together (Addition within 3)
    const mathDay21 = getDailyLesson('math', 21);
    expect(mathDay21.standard).toContain('K.OA');
    expect(mathDay21.strictBoundary).toContain('addition within 3');
    const d21Sheet = mathDay21.generateSheet(1);
    expect(d21Sheet.problems[0].type).toBe('concrete-addition');
    expect(d21Sheet.problems[0].partA.count).toBe(2);
    expect(d21Sheet.problems[0].partB.count).toBe(1);

    // Day 22: Plus and Equal symbols
    const mathDay22 = getDailyLesson('math', 22);
    expect(mathDay22.strictBoundary).toContain('Symbols + and =');
    const d22Sheet = mathDay22.generateSheet(1);
    expect(d22Sheet.problems.some((p) => p.type === 'concrete-addition')).toBe(true);
    expect(d22Sheet.problems.some((p) => p.type === 'ten-frame')).toBe(true);

    // Day 23: Doubles and facts for 4 (2+2=4)
    const d23Sheet = getDailyLesson('math', 23).generateSheet(1);
    expect(d23Sheet.problems[0].prompt).toContain('2 ladybugs + 2 ladybugs');

    // Day 24: Adding Zero
    const d24Sheet = getDailyLesson('math', 24).generateSheet(1);
    expect(d24Sheet.problems[0].partB.count).toBe(0);

    // Day 25: All ways to make 5
    const d25Sheet = getDailyLesson('math', 25).generateSheet(1);
    expect(d25Sheet.problems[0].partA.count + d25Sheet.problems[0].partB.count).toBe(5);

    // Day 26: Concept of Taking Away (Concrete Subtraction)
    const mathDay26 = getDailyLesson('math', 26);
    expect(mathDay26.strictBoundary).toContain('take-away subtraction');
    const d26Sheet = mathDay26.generateSheet(1);
    expect(d26Sheet.problems[0].type).toBe('concrete-subtraction');
    expect(d26Sheet.problems[0].totalCount).toBe(4);
    expect(d26Sheet.problems[0].takeAwayCount).toBe(1);

    // Day 27: Introducing Minus Sign
    const d27Sheet = getDailyLesson('math', 27).generateSheet(1);
    expect(d27Sheet.problems[0].totalCount).toBe(5);
    expect(d27Sheet.problems[0].takeAwayCount).toBe(1);

    // Day 28: Subtraction facts within 4 (4-2=2)
    const d28Sheet = getDailyLesson('math', 28).generateSheet(1);
    expect(d28Sheet.problems[0].totalCount).toBe(4);
    expect(d28Sheet.problems[0].takeAwayCount).toBe(2);

    // Day 29: Subtracting Zero and Subtracting All
    const d29Sheet = getDailyLesson('math', 29).generateSheet(1);
    expect(d29Sheet.problems[0].takeAwayCount).toBe(0);
    expect(d29Sheet.problems[1].takeAwayCount).toBe(4);

    // Day 30: Month 2 Fact Fluency Grand Champion
    const d30Sheet = getDailyLesson('math', 30).generateSheet(1);
    expect(d30Sheet.problems.some((p) => p.type === 'concrete-addition')).toBe(true);
    expect(d30Sheet.problems.some((p) => p.type === 'concrete-subtraction')).toBe(true);
  });

  it('guarantees Phonics Days 21-30 systematically introduces consonant digraphs and FLOSS rule in Orton-Gillingham sequence', () => {
    // Day 21: Digraph "sh" (ship, shop, fish, dish)
    const d21Sheet = getDailyLesson('phonics', 21).generateSheet(1);
    expect(d21Sheet.problems.some((p) => p.word === 'ship')).toBe(true);
    expect(d21Sheet.problems.some((p) => p.word === 'fish')).toBe(true);

    // Day 22: Digraph "th" (thin, thick, path, moth)
    const d22Sheet = getDailyLesson('phonics', 22).generateSheet(1);
    expect(d22Sheet.problems.some((p) => p.word === 'thin')).toBe(true);
    expect(d22Sheet.problems.some((p) => p.word === 'path')).toBe(true);

    // Day 23: Digraph "ch" (chin, chop, chat, rich)
    const d23Sheet = getDailyLesson('phonics', 23).generateSheet(1);
    expect(d23Sheet.problems.some((p) => p.word === 'chin')).toBe(true);

    // Day 24: The -ck Rule (duck, sock, back, pick)
    const d24Sheet = getDailyLesson('phonics', 24).generateSheet(1);
    expect(d24Sheet.problems.some((p) => p.word === 'duck')).toBe(true);

    // Day 25: Digraph decodable sentences
    const d25Sheet = getDailyLesson('phonics', 25).generateSheet(1);
    expect(d25Sheet.decodablePhrases.length).toBeGreaterThanOrEqual(4);
    expect(d25Sheet.decodablePhrases[0]).toContain('fish in a dish');

    // Day 26: The FLOSS Rule (puff, bell, hill, miss)
    const d26Sheet = getDailyLesson('phonics', 26).generateSheet(1);
    expect(d26Sheet.problems.some((p) => p.word === 'bell')).toBe(true);

    // Day 27: Consonant w and wh (wet, win, wag, whip)
    const d27Sheet = getDailyLesson('phonics', 27).generateSheet(1);
    expect(d27Sheet.problems.some((p) => p.word === 'whip')).toBe(true);

    // Day 28: Final x and Initial y (box, fox, six, yes)
    const d28Sheet = getDailyLesson('phonics', 28).generateSheet(1);
    expect(d28Sheet.problems.some((p) => p.word === 'box')).toBe(true);
    expect(d28Sheet.problems.some((p) => p.word === 'yes')).toBe(true);

    // Day 29: qu and z (quick, quiz, zip, buzz)
    const d29Sheet = getDailyLesson('phonics', 29).generateSheet(1);
    expect(d29Sheet.problems.some((p) => p.word === 'quick')).toBe(true);
    expect(d29Sheet.problems.some((p) => p.word === 'buzz')).toBe(true);

    // Day 30: Complete Alphabet & Digraph Story Fluency
    const d30Sheet = getDailyLesson('phonics', 30).generateSheet(1);
    expect(d30Sheet.decodablePhrases[0]).toContain('quick fox');
  });

  it('guarantees Science and Social Studies Days 21-30 cover NGSS physical/life science and CKHG American heroes', () => {
    // Science Day 21: Camouflage
    const sciDay21 = getDailyLesson('science', 21).generateSheet(1);
    expect(sciDay21.problems[0].options[0]).toContain('Camouflage');

    // Science Day 25: Phase changes (Melting & Freezing)
    const sciDay25 = getDailyLesson('science', 25).generateSheet(1);
    expect(sciDay25.problems[0].options[0]).toContain('MELTS');

    // Science Day 28: Magnets
    const sciDay28 = getDailyLesson('science', 28).generateSheet(1);
    expect(sciDay28.problems[0].options[0]).toContain('paperclip');

    // Science Day 29: Sink vs Float
    const sciDay29 = getDailyLesson('science', 29).generateSheet(1);
    expect(sciDay29.problems[0].options[0]).toContain('SINKS');

    // Social Studies Day 21: Dr. George Washington Carver
    const socDay21 = getDailyLesson('socialStudies', 21).generateSheet(1);
    expect(socDay21.problems[0].prompt).toContain('Carver');
    expect(socDay21.problems[0].options[0]).toContain('PEANUT');

    // Social Studies Day 22: Benjamin Franklin
    const socDay22 = getDailyLesson('socialStudies', 22).generateSheet(1);
    expect(socDay22.problems[0].prompt).toContain('Benjamin Franklin');

    // Social Studies Day 23: Helen Keller & Anne Sullivan
    const socDay23 = getDailyLesson('socialStudies', 23).generateSheet(1);
    expect(socDay23.problems[0].prompt).toContain('Helen Keller');

    // Social Studies Day 26: Fair Voting & Majority Rule
    const socDay26 = getDailyLesson('socialStudies', 26).generateSheet(1);
    expect(socDay26.problems[0].options[0]).toContain('ONE vote');

    // Social Studies Day 29: Reduce, Reuse, Recycle
    const socDay29 = getDailyLesson('socialStudies', 29).generateSheet(1);
    expect(socDay29.problems[0].options[0]).toContain('BLUE recycling bin');
  });

  it('guarantees Math Days 31-40 cover counting on, vertical addition/subtraction, story problems, and fact families within 5', () => {
    // Day 31: Counting On Strategy
    const mathDay31 = getDailyLesson('math', 31);
    expect(mathDay31.strictBoundary).toContain('Counting on strategy within 5');
    const d31Sheet = mathDay31.generateSheet(1);
    expect(d31Sheet.problems[0].type).toBe('counting-objects');
    expect(d31Sheet.problems[0].targetNumber).toBeDefined();

    // Day 32: Addition Word Stories (Join situations)
    const mathDay32 = getDailyLesson('math', 32);
    expect(mathDay32.strictBoundary).toContain('Single-step join addition');
    const d32Sheet = mathDay32.generateSheet(1);
    expect(d32Sheet.problems[0].type).toBe('story-problem');
    expect(d32Sheet.problems[0].story).toContain('kittens');

    // Day 33: Vertical Addition Towers
    const mathDay33 = getDailyLesson('math', 33);
    expect(mathDay33.strictBoundary).toContain('Vertical addition');
    const d33Sheet = mathDay33.generateSheet(1);
    expect(d33Sheet.problems[0].type).toBe('vertical-math');
    expect(d33Sheet.problems[0].operator).toBe('+');
    expect(d33Sheet.problems[0].topNumber).toBe(2);
    expect(d33Sheet.problems[0].bottomNumber).toBe(1);

    // Day 34: Subtraction Word Stories (Take-away situations)
    const mathDay34 = getDailyLesson('math', 34);
    expect(mathDay34.strictBoundary).toContain('take-away situations');
    const d34Sheet = mathDay34.generateSheet(1);
    expect(d34Sheet.problems[0].type).toBe('story-problem');
    expect(d34Sheet.problems[0].story).toContain('strawberries');

    // Day 35: Vertical Subtraction Towers
    const mathDay35 = getDailyLesson('math', 35);
    expect(mathDay35.strictBoundary).toContain('Vertical subtraction');
    const d35Sheet = mathDay35.generateSheet(1);
    expect(d35Sheet.problems[0].type).toBe('vertical-math');
    expect(d35Sheet.problems[0].operator).toBe('-');
    expect(d35Sheet.problems[0].topNumber).toBe(4);
    expect(d35Sheet.problems[0].bottomNumber).toBe(1);

    // Day 36: Fact Families for 3 and 4
    const mathDay36 = getDailyLesson('math', 36);
    expect(mathDay36.strictBoundary).toContain('Inverse relationship');
    const d36Sheet = mathDay36.generateSheet(1);
    expect(d36Sheet.problems[0].type).toBe('fact-family');
    expect(d36Sheet.problems[0].whole).toBe(3);
    expect(d36Sheet.problems[0].partA).toBe(2);
    expect(d36Sheet.problems[0].partB).toBe(1);

    // Day 37: Fact Families for 5
    const mathDay37 = getDailyLesson('math', 37);
    expect(mathDay37.strictBoundary).toContain('Fact family triads for target sum 5');
    const d37Sheet = mathDay37.generateSheet(1);
    expect(d37Sheet.problems[0].type).toBe('fact-family');
    expect(d37Sheet.problems[0].whole).toBe(5);

    // Day 38: Comparing Equations (True or False balance)
    const mathDay38 = getDailyLesson('math', 38);
    expect(mathDay38.strictBoundary).toContain('Equation truth evaluation within 5');
    const d38Sheet = mathDay38.generateSheet(1);
    expect(d38Sheet.problems[0].type).toBe('equation-balance');
    expect(d38Sheet.problems[0].answer).toBe('True');
    expect(d38Sheet.problems[1].answer).toBe('False');

    // Day 39: Missing Addends within 5
    const mathDay39 = getDailyLesson('math', 39);
    expect(mathDay39.strictBoundary).toContain('Missing addend equations within 5');
    const d39Sheet = mathDay39.generateSheet(1);
    expect(d39Sheet.problems[0].prompt).toContain('3 + [ ? ] = 5');

    // Day 40: Pre-Q1 Math Grand Champion Review
    const mathDay40 = getDailyLesson('math', 40);
    expect(mathDay40.strictBoundary).toContain('Pre-Quarter 1 comprehensive fluency review');
    const d40Sheet = mathDay40.generateSheet(1);
    expect(d40Sheet.problems.some((p) => p.type === 'vertical-math')).toBe(true);
    expect(d40Sheet.problems.some((p) => p.type === 'story-problem')).toBe(true);
    expect(d40Sheet.problems.some((p) => p.type === 'fact-family')).toBe(true);
  });

  it('guarantees Phonics Days 31-40 systematically introduce initial consonant blends (l-blends, r-blends, s-blends) and blend vs digraph contrast', () => {
    // Day 31: Initial L-Blends bl & cl
    const d31Sheet = getDailyLesson('phonics', 31).generateSheet(1);
    expect(d31Sheet.problems.some((p) => p.word === 'black')).toBe(true);
    expect(d31Sheet.problems.some((p) => p.word === 'clap')).toBe(true);

    // Day 32: Initial L-Blends fl, gl & pl
    const d32Sheet = getDailyLesson('phonics', 32).generateSheet(1);
    expect(d32Sheet.problems.some((p) => p.word === 'flag')).toBe(true);
    expect(d32Sheet.problems.some((p) => p.word === 'glad')).toBe(true);
    expect(d32Sheet.problems.some((p) => p.word === 'plum')).toBe(true);

    // Day 33: Initial L-Blend sl & decodable sentences
    const d33Sheet = getDailyLesson('phonics', 33).generateSheet(1);
    expect(d33Sheet.problems.some((p) => p.word === 'sled')).toBe(true);
    expect(d33Sheet.decodableSentences[0]).toContain('red sled');

    // Day 34: Initial R-Blends br & cr
    const d34Sheet = getDailyLesson('phonics', 34).generateSheet(1);
    expect(d34Sheet.problems.some((p) => p.word === 'crab')).toBe(true);
    expect(d34Sheet.problems.some((p) => p.word === 'brag')).toBe(true);

    // Day 35: Initial R-Blends dr, fr & gr
    const d35Sheet = getDailyLesson('phonics', 35).generateSheet(1);
    expect(d35Sheet.problems.some((p) => p.word === 'drum')).toBe(true);
    expect(d35Sheet.problems.some((p) => p.word === 'frog')).toBe(true);
    expect(d35Sheet.problems.some((p) => p.word === 'grin')).toBe(true);

    // Day 36: Initial R-Blends tr & pr
    const d36Sheet = getDailyLesson('phonics', 36).generateSheet(1);
    expect(d36Sheet.problems.some((p) => p.word === 'trip')).toBe(true);
    expect(d36Sheet.problems.some((p) => p.word === 'trap')).toBe(true);

    // Day 37: Initial S-Blends sm, sn & sp
    const d37Sheet = getDailyLesson('phonics', 37).generateSheet(1);
    expect(d37Sheet.problems.some((p) => p.word === 'spot')).toBe(true);
    expect(d37Sheet.problems.some((p) => p.word === 'smell')).toBe(true);

    // Day 38: Initial S-Blends st & sw
    const d38Sheet = getDailyLesson('phonics', 38).generateSheet(1);
    expect(d38Sheet.problems.some((p) => p.word === 'stop')).toBe(true);
    expect(d38Sheet.problems.some((p) => p.word === 'swim')).toBe(true);

    // Day 39: Blend vs Digraph Contrast (ship vs slip, chin vs crab)
    const d39Sheet = getDailyLesson('phonics', 39).generateSheet(1);
    expect(d39Sheet.problems[0].prompt).toContain('ship');
    expect(d39Sheet.problems[1].prompt).toContain('slip');

    // Day 40: Pre-Q1 Grand Champion Decodable Reader
    const d40Sheet = getDailyLesson('phonics', 40).generateSheet(1);
    expect(d40Sheet.decodableSentences[0]).toContain('green frog can swim');
    expect(d40Sheet.decodableSentences[1]).toContain('crab on a black rock');
  });

  it('guarantees Science and Social Studies Days 31-40 cover sunlight/weather safety/habitats and American symbols/presidents/coins', () => {
    // Science Day 31: Sun Warms Earth
    const sciDay31 = getDailyLesson('science', 31).generateSheet(1);
    expect(sciDay31.problems[0].options[0]).toContain('warm and hot');

    // Science Day 32: Creating Shade
    const sciDay32 = getDailyLesson('science', 32).generateSheet(1);
    expect(sciDay32.problems[0].options[0]).toContain('umbrella');

    // Science Day 34: Severe Weather Thunderstorm Safety
    const sciDay34 = getDailyLesson('science', 34).generateSheet(1);
    expect(sciDay34.problems[0].options[0]).toContain('When thunder roars, go indoors');

    // Science Day 35: Freshwater Pond
    const sciDay35 = getDailyLesson('science', 35).generateSheet(1);
    expect(sciDay35.problems[0].options[0]).toContain('bullfrog');

    // Science Day 36: Saltwater Ocean
    const sciDay36 = getDailyLesson('science', 36).generateSheet(1);
    expect(sciDay36.problems[0].options[0]).toContain('blue whale');

    // Science Day 37: Dry Desert
    const sciDay37 = getDailyLesson('science', 37).generateSheet(1);
    expect(sciDay37.problems[0].options[0]).toContain('stores water');

    // Science Day 38: Tropical Rainforest
    const sciDay38 = getDailyLesson('science', 38).generateSheet(1);
    expect(sciDay38.problems[0].options[0]).toContain('Warm, heavy rain');

    // Science Day 39: Beavers & Worms changing environment
    const sciDay39 = getDailyLesson('science', 39).generateSheet(1);
    expect(sciDay39.problems[0].options[0]).toContain('busy beaver');

    // Social Studies Day 31: Liberty Bell
    const socDay31 = getDailyLesson('socialStudies', 31).generateSheet(1);
    expect(socDay31.problems[0].options[0]).toContain('freedom and liberty');
    expect(socDay31.problems[1].options[0]).toContain('zigzag crack');

    // Social Studies Day 32: Bald Eagle
    const socDay32 = getDailyLesson('socialStudies', 32).generateSheet(1);
    expect(socDay32.problems[0].options[0]).toContain('Bald Eagle');

    // Social Studies Day 33: US Flag & Pledge
    const socDay33 = getDailyLesson('socialStudies', 33).generateSheet(1);
    expect(socDay33.problems[0].options[0]).toContain('50 states');
    expect(socDay33.problems[2].options[0]).toContain('Over their heart');

    // Social Studies Day 34: Abraham Lincoln
    const socDay34 = getDailyLesson('socialStudies', 34).generateSheet(1);
    expect(socDay34.problems[0].options[0]).toContain('log cabin');
    expect(socDay34.problems[1].prompt).toContain('Honest Abe');
    expect(socDay34.problems[1].options[0]).toContain('always told the truth');

    // Social Studies Day 35: George Washington
    const socDay35 = getDailyLesson('socialStudies', 35).generateSheet(1);
    expect(socDay35.problems[0].options[0]).toContain('George Washington');
    expect(socDay35.problems[1].options[0]).toContain('Father of Our Country');

    // Social Studies Day 36: Mount Rushmore
    const socDay36 = getDailyLesson('socialStudies', 36).generateSheet(1);
    expect(socDay36.problems[0].options[0]).toContain('faces of four US presidents');

    // Social Studies Day 37: Community Rules
    const socDay37 = getDailyLesson('socialStudies', 37).generateSheet(1);
    expect(socDay37.problems[0].options[0]).toContain('Stop on Red');

    // Social Studies Day 38: Good Neighbor
    const socDay38 = getDailyLesson('socialStudies', 38).generateSheet(1);
    expect(socDay38.problems[0].options[0]).toContain('helps pick up');

    // Social Studies Day 39: Coins (Penny, Dime, Quarter)
    const socDay39 = getDailyLesson('socialStudies', 39).generateSheet(1);
    expect(socDay39.problems[0].options[0]).toContain('The Penny');
    expect(socDay39.problems[1].options[0]).toContain('The Dime');
    expect(socDay39.problems[2].options[0]).toContain('The Quarter');

    // Social Studies Day 40: Pre-Q1 Global Citizen Champion
    const socDay40 = getDailyLesson('socialStudies', 40).generateSheet(1);
    expect(socDay40.problems[0].options[0]).toContain('Liberty Bell');
    expect(socDay40.problems[1].options[0]).toContain('George Washington');
  });
});
