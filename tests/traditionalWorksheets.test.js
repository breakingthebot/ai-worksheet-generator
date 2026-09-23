// tests/traditionalWorksheets.test.js
// Unit tests verifying traditional worksheet data structures and problem components.
// Connects to: src/data/worksheets.js
// Created: 2026-09-22

import { describe, it, expect } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import { getWorksheetById, getAllWorksheets, getTraditionalWorksheets } from '../src/data/worksheets.js';
import ScaffoldedNumber from '../src/components/math/ScaffoldedNumber.jsx';
import VerticalMathGrid from '../src/components/traditional/VerticalMathGrid.jsx';

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
    expect(kMath[0].id).toBe('ws-trad-math-k-counting');
    expect(kMath[0].grade).toBe('K');
    expect(kMath[0].title).toContain('Kindergarten Math');
    expect(kMath[1].id).toBe('ws-trad-math-k-fluency');

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

  it('renders ScaffoldedNumber with and without concrete 5-structured counting dots', () => {
    // When showDots is false: numeral only, no dots container
    const { container: c1 } = render(React.createElement(ScaffoldedNumber, { value: 4, showDots: false }));
    expect(c1.textContent).toBe('4');
    expect(c1.querySelector('[data-testid="counting-dots-container"]')).toBeNull();

    // When showDots is true: displays touch counting dots
    const { container: c2 } = render(React.createElement(ScaffoldedNumber, { value: 3, showDots: true, color: 'indigo' }));
    expect(c2.textContent).toBe('3');
    const dotsContainer3 = c2.querySelector('[data-testid="counting-dots-container"]');
    expect(dotsContainer3).not.toBeNull();
    // 3 dots in row 1
    const dots3 = dotsContainer3.querySelectorAll('span');
    expect(dots3.length).toBe(3);

    // When value is 7 (5 + 2 structure):
    const { container: c3 } = render(React.createElement(ScaffoldedNumber, { value: 7, showDots: true, color: 'amber' }));
    expect(c3.textContent).toBe('7');
    const dotsContainer7 = c3.querySelector('[data-testid="counting-dots-container"]');
    expect(dotsContainer7).not.toBeNull();
    // 7 dots total across row 1 (5) and row 2 (2)
    const dots7 = dotsContainer7.querySelectorAll('span');
    expect(dots7.length).toBe(7);
  });

  it('renders VerticalMathGrid with counting dots toggle button', () => {
    const problems = [
      { number: 1, topNumber: 3, bottomNumber: 2, operator: '+' },
      { number: 2, topNumber: 5, bottomNumber: 1, operator: '-' },
    ];

    const { getByRole } = render(
      React.createElement(VerticalMathGrid, { problems, title: 'Test Drills', showCountingDots: false })
    );

    // Button should be present
    const toggleButton = getByRole('button');
    expect(toggleButton).toBeDefined();
    expect(toggleButton.textContent).toContain('Counting Dots: OFF');

    // Render with showCountingDots=true
    const { container: cWithDots } = render(
      React.createElement(VerticalMathGrid, { problems, title: 'Test Drills', showCountingDots: true })
    );
    const dots = cWithDots.querySelectorAll('[data-testid="counting-dots-container"]');
    expect(dots.length).toBe(4); // 2 problems * 2 numbers each = 4 dot containers
  });
});
