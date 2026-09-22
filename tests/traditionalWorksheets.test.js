// tests/traditionalWorksheets.test.js
// Unit tests verifying traditional worksheet data structures and problem components.
// Connects to: src/data/worksheets.js
// Created: 2026-09-22

import { describe, it, expect } from 'vitest';
import { getWorksheetById, getAllWorksheets, getTraditionalWorksheets } from '../src/data/worksheets.js';

describe('Traditional Classroom Worksheets', () => {
  it('loads traditional math worksheet with 12 stacked drills and 2 word problems', () => {
    const sheet = getWorksheetById('ws-trad-math-addition');
    expect(sheet).toBeDefined();
    expect(sheet.verticalMath).toBeDefined();
    expect(sheet.verticalMath.problems.length).toBe(12);
    expect(sheet.wordProblems.length).toBe(2);
    expect(sheet.answerKey.length).toBe(14);
  });

  it('loads traditional reading comprehension worksheet with passage and questions', () => {
    const sheet = getWorksheetById('ws-trad-reading-beaver');
    expect(sheet).toBeDefined();
    expect(sheet.readingPassage).toBeDefined();
    expect(sheet.readingPassage.paragraphs.length).toBe(2);
    expect(sheet.readingPassage.vocabularyBank.length).toBe(3);
    expect(sheet.readingPassage.questions.length).toBe(4);
    expect(sheet.answerKey.length).toBe(4);
  });

  it('loads traditional grammar mechanics worksheet with sentence edits and matching', () => {
    const sheet = getWorksheetById('ws-trad-grammar-mechanics');
    expect(sheet).toBeDefined();
    expect(sheet.editingData).toBeDefined();
    expect(sheet.editingData.sentences.length).toBe(4);
    expect(sheet.matchingData).toBeDefined();
    expect(sheet.matchingData.columnA.length).toBe(4);
  });

  it('loads traditional science plant worksheet with diagram matching', () => {
    const sheet = getWorksheetById('ws-trad-science-plants');
    expect(sheet).toBeDefined();
    expect(sheet.matchingData).toBeDefined();
    expect(sheet.matchingData.columnA.length).toBe(4);
    expect(sheet.problems.length).toBe(2);
  });

  it('filters traditional worksheets by subject and grade using getTraditionalWorksheets helper', () => {
    const allTrad = getTraditionalWorksheets();
    expect(allTrad.length).toBe(9);

    // Kindergarten Math: Should return Kindergarten sheets within 5, NOT Grade 1-2 sheets!
    const kMath = getTraditionalWorksheets('math', 'Kindergarten');
    expect(kMath.length).toBe(2);
    expect(kMath[0].id).toBe('ws-trad-math-k-fluency');
    expect(kMath[0].grade).toBe('K');
    expect(kMath[0].title).toContain('Kindergarten Math');
    expect(kMath[1].id).toBe('ws-trad-math-k-counting');

    // 1st Grade Math: Should return Grade 1 sheet
    const grade1Math = getTraditionalWorksheets('math', '1st Grade');
    expect(grade1Math.length).toBe(1);
    expect(grade1Math[0].id).toBe('ws-trad-math-addition');
    expect(grade1Math[0].grade).toBe('1');

    // Kindergarten Phonics
    const kPhonics = getTraditionalWorksheets('phonics', 'Kindergarten');
    expect(kPhonics.length).toBe(1);
    expect(kPhonics[0].id).toBe('ws-trad-reading-k-cvc');

    // Kindergarten Science
    const kScience = getTraditionalWorksheets('science', 'Kindergarten');
    expect(kScience.length).toBe(1);
    expect(kScience[0].id).toBe('ws-trad-science-k-living');

    // Kindergarten Social Studies
    const kSocial = getTraditionalWorksheets('socialStudies', 'Kindergarten');
    expect(kSocial.length).toBe(1);
    expect(kSocial[0].id).toBe('ws-trad-social-geography');
  });

  it('loads Kindergarten traditional math sheet with facts strictly within 5', () => {
    const sheet = getWorksheetById('ws-trad-math-k-fluency');
    expect(sheet).toBeDefined();
    expect(sheet.grade).toBe('K');
    expect(sheet.verticalMath.problems.length).toBe(12);

    // All Kindergarten addition and subtraction numbers should be <= 5
    sheet.verticalMath.problems.forEach((p) => {
      expect(p.topNumber).toBeLessThanOrEqual(5);
      expect(p.bottomNumber).toBeLessThanOrEqual(5);
    });
  });
});
