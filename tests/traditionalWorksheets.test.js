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

  it('filters traditional worksheets by subject using getTraditionalWorksheets helper', () => {
    const allTrad = getTraditionalWorksheets();
    expect(allTrad.length).toBe(4);

    const mathTrad = getTraditionalWorksheets('math');
    expect(mathTrad.length).toBe(1);
    expect(mathTrad[0].id).toBe('ws-trad-math-addition');

    const phonicsTrad = getTraditionalWorksheets('phonics');
    expect(phonicsTrad.length).toBe(2);

    const scienceTrad = getTraditionalWorksheets('science');
    expect(scienceTrad.length).toBe(1);
  });
});
