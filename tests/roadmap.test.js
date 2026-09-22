// tests/roadmap.test.js
// Unit tests verifying the Curriculum Roadmap and Curated Worksheet Catalog.
// Connects to: src/domain/curriculum/roadmap.js, src/data/worksheets.js
// Created: 2026-09-22

import { describe, it, expect } from 'vitest';
import { CURRICULUM_ROADMAP, getMilestones, getMilestoneById } from '../src/domain/curriculum/roadmap.js';
import { getAllWorksheets, getWorksheetById } from '../src/data/worksheets.js';

describe('Curriculum Roadmap & Progression Engine', () => {
  it('defines sequential milestones across math, phonics, and science', () => {
    expect(CURRICULUM_ROADMAP.length).toBeGreaterThanOrEqual(5);

    const math = getMilestones('math');
    const phonics = getMilestones('phonics');
    const science = getMilestones('science');

    expect(math.length).toBeGreaterThan(0);
    expect(phonics.length).toBeGreaterThan(0);
    expect(science.length).toBeGreaterThan(0);
  });

  it('guarantees that every milestone includes explicit pedagogical criteria and verbal cues', () => {
    CURRICULUM_ROADMAP.forEach((milestone) => {
      expect(milestone.id).toBeDefined();
      expect(milestone.whyItMatters).toBeTruthy();
      expect(milestone.moveOnCriteria).toBeTruthy();
      expect(milestone.keepPracticingCriteria).toBeTruthy();
      expect(milestone.parentVerbalCue).toBeTruthy();
      expect(milestone.defaultWorksheetId).toBeTruthy();
    });
  });

  it('correctly retrieves milestone by id', () => {
    const m = getMilestoneById('math-m2');
    expect(m).toBeDefined();
    expect(m.title).toContain('Ten-Frames');
  });
});

describe('Curated Worksheet Catalog', () => {
  it('ensures every worksheet has Parent Guides and Kid-Friendly Directions', () => {
    const sheets = getAllWorksheets();
    expect(sheets.length).toBeGreaterThanOrEqual(4);

    sheets.forEach((sheet) => {
      expect(sheet.id).toBeDefined();
      expect(sheet.parentGuide).toBeDefined();
      expect(sheet.parentGuide.whyWeAreDoingThis).toBeTruthy();
      expect(sheet.kidDirections).toBeDefined();
      expect(sheet.kidDirections.text).toBeTruthy();
      expect(sheet.problems.length).toBeGreaterThan(0);
      expect(sheet.answerKey.length).toBeGreaterThan(0);
    });
  });

  it('retrieves specific worksheet by id', () => {
    const sheet = getWorksheetById('ws-math-tenframe-complements');
    expect(sheet).toBeDefined();
    expect(sheet.subject).toBe('math');
    expect(sheet.problems[0].type).toBe('ten-frame');
  });
});
