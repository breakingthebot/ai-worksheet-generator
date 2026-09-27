// tests/dailyBlockModel.test.js
// Automated test suite verifying Daily Block schema, pacing calculations, and Kindergarten Day 1 Golden Master.
// Connects to: src/domain/curriculum/dailyBlockModel.js, src/domain/curriculum/kindergarten/day01Block.js
// Created: 2026-09-27

import { describe, it, expect } from 'vitest';
import {
  validateDailyBlock,
  calculateTotalBlockMinutes,
  extractConsolidatedMaterials,
  BLOCK_CATEGORIES,
} from '../src/domain/curriculum/dailyBlockModel.js';
import { KINDERGARTEN_DAY_01_BLOCK } from '../src/domain/curriculum/kindergarten/day01Block.js';
import { getDailyBlock, hasDailyBlock } from '../src/domain/curriculum/dailyBlockRegistry.js';

describe('Daily Block Model & Validation Engine', () => {
  it('validates a complete, accredited daily block successfully', () => {
    const result = validateDailyBlock(KINDERGARTEN_DAY_01_BLOCK);
    expect(result.isValid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  it('detects invalid or missing required fields in daily blocks', () => {
    const invalidBlock = {
      day: 0,
      grade: '',
      theme: null,
      timeBlocks: [],
      fieldTrip: null,
      sheets: {},
    };
    const result = validateDailyBlock(invalidBlock);
    expect(result.isValid).toBe(false);
    expect(result.errors.length).toBeGreaterThan(4);
  });

  it('correctly calculates total planned instructional minutes', () => {
    const totalMinutes = calculateTotalBlockMinutes(KINDERGARTEN_DAY_01_BLOCK);
    // 30 + 45 + 30 + 35 + 30 + 55 + 15 = 240 minutes (4.0 hours)
    expect(totalMinutes).toBe(240);
  });

  it('extracts unique consolidated materials across all blocks and field trips', () => {
    const materials = extractConsolidatedMaterials(KINDERGARTEN_DAY_01_BLOCK);
    expect(materials).toBeInstanceOf(Array);
    expect(materials.length).toBeGreaterThan(5);
    expect(materials).toContain('Green crayon');
    expect(materials).toContain('Fresh red apple slices');
  });
});

describe('Kindergarten Day 1 Golden Master Block Integrity', () => {
  it('is properly registered and retrievable via getDailyBlock', () => {
    expect(hasDailyBlock('Kindergarten', 1)).toBe(true);
    const block = getDailyBlock('Kindergarten', 1);
    expect(block).toBeDefined();
    expect(block.day).toBe(1);
    expect(block.theme).toContain('Sensory Discovery');
  });

  it('includes 7 structured time blocks with pedagogical activities and parent scripts', () => {
    expect(KINDERGARTEN_DAY_01_BLOCK.timeBlocks).toHaveLength(7);

    KINDERGARTEN_DAY_01_BLOCK.timeBlocks.forEach((tb) => {
      expect(tb.id).toBeTruthy();
      expect(tb.title).toBeTruthy();
      expect(tb.timeSlot).toBeTruthy();
      expect(tb.durationMinutes).toBeGreaterThan(0);
      expect(tb.handsOnActivity.title).toBeTruthy();
      expect(tb.handsOnActivity.steps.length).toBeGreaterThan(0);
      expect(tb.script.sayThis).toBeTruthy();
    });
  });

  it('provides comprehensive experiential field trip reinforcement guides', () => {
    const ft = KINDERGARTEN_DAY_01_BLOCK.fieldTrip;
    expect(ft).toBeDefined();
    expect(ft.title).toBeTruthy();
    expect(ft.outdoorMission.scavengerChecklist.length).toBeGreaterThan(3);
    expect(ft.indoorAlternative.scavengerChecklist.length).toBeGreaterThan(3);
    expect(ft.conversationPrompts.length).toBe(3);

    ft.conversationPrompts.forEach((p) => {
      expect(p.question).toBeTruthy();
      expect(p.talkingPoints).toBeTruthy();
    });
  });

  it('contains matching accredited worksheets for all 4 core subjects', () => {
    const { sheets } = KINDERGARTEN_DAY_01_BLOCK;
    expect(sheets.math).toBeDefined();
    expect(sheets.phonics).toBeDefined();
    expect(sheets.science).toBeDefined();
    expect(sheets.socialStudies).toBeDefined();

    // Verify Math Sheet
    expect(sheets.math.strictBoundary).toBeTruthy();
    expect(sheets.math.parentGuide.whyWeAreDoingThis).toBeTruthy();
    expect(sheets.math.matchingData.leftColumn.length).toBe(4);
    expect(sheets.math.answerKey.length).toBeGreaterThan(0);

    // Verify Phonics Sheet
    expect(sheets.phonics.problems.length).toBe(4);
    expect(sheets.phonics.answerKey.length).toBeGreaterThan(0);

    // Verify Science Sheet
    expect(sheets.science.matchingData.leftColumn.length).toBe(5);
    expect(sheets.science.answerKey.length).toBeGreaterThan(0);

    // Verify Social Studies Sheet
    expect(sheets.socialStudies.problems.length).toBe(4);
    expect(sheets.socialStudies.answerKey.length).toBeGreaterThan(0);
  });
});
