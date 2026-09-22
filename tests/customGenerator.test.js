// tests/customGenerator.test.js
// Unit tests for the custom personalized adventure worksheet generator.
// Connects to: src/services/customWorksheetGenerator.js, src/data/worksheets.js
// Created: 2026-09-22

import { describe, it, expect } from 'vitest';
import {
  generateLocalAdventureWorksheet,
  generateCustomAdventureWorksheet,
} from '../src/services/customWorksheetGenerator.js';
import { addCustomWorksheet, getAllWorksheets } from '../src/data/worksheets.js';

describe('Custom Adventure Worksheet Generator', () => {
  it('generates a personalized Math adventure worksheet starring the student and pet', () => {
    const sheet = generateLocalAdventureWorksheet({
      grade: '2nd Grade',
      subject: 'Math',
      topic: 'Treasure island gold coins',
      studentName: 'Leo',
      additionalCharacters: 'his dog Buster',
    });

    expect(sheet).toBeDefined();
    expect(sheet.title).toContain('Leo');
    expect(sheet.subtitle).toContain('Leo');
    expect(sheet.subtitle).toContain('his dog Buster');
    expect(sheet.passage).toContain('Leo');
    expect(sheet.passage).toContain('his dog Buster');
    expect(sheet.questions.length).toBe(3);

    // Questions should have both box (for math work/drawings) and lines
    const boxQuestion = sheet.questions.find((q) => q.answerType === 'box');
    expect(boxQuestion).toBeDefined();
    expect(boxQuestion.questionText).toContain('Leo');

    expect(sheet.parentGuide).toBeDefined();
    expect(sheet.parentGuide.standard).toContain('CCSS.MATH.2.OA.A.1');
    expect(sheet.answerKey.length).toBe(3);
  });

  it('generates a personalized Language Arts reading passage with text-evidence questions', () => {
    const sheet = generateLocalAdventureWorksheet({
      grade: '1st Grade',
      subject: 'Language Arts',
      topic: 'A brave little toaster goes on an adventure',
      studentName: 'Maya',
      additionalCharacters: 'her kitten Whiskers',
    });

    expect(sheet).toBeDefined();
    expect(sheet.title).toContain('Maya');
    expect(sheet.passage).toContain('Maya');
    expect(sheet.passage).toContain('her kitten Whiskers');
    expect(sheet.questions.length).toBe(3);

    const linesQuestion = sheet.questions.find((q) => q.answerType === 'lines');
    expect(linesQuestion).toBeDefined();
    expect(linesQuestion.questionText).toContain('Maya');
    expect(sheet.parentGuide.standard).toContain('CCSS.ELA-LITERACY.RL.1.1');
  });

  it('generates a Science field investigation worksheet', () => {
    const sheet = generateLocalAdventureWorksheet({
      grade: 'Kindergarten',
      subject: 'Science',
      topic: 'Backyard bird nest observation',
      studentName: 'Sammy',
      additionalCharacters: 'his dad',
    });

    expect(sheet).toBeDefined();
    expect(sheet.title).toContain('Sammy');
    expect(sheet.passage).toContain('Sammy');
    expect(sheet.kidBadge).toContain('Sammy');
    expect(sheet.parentGuide.standard).toContain('NGSS K-LS1-1');
  });

  it('generates a Social Studies community expedition worksheet', () => {
    const sheet = generateLocalAdventureWorksheet({
      grade: '3rd Grade',
      subject: 'Social Studies',
      topic: 'Exploring historic harbor lighthouses',
      studentName: 'Chloe',
      additionalCharacters: 'her grandmother',
    });

    expect(sheet).toBeDefined();
    expect(sheet.title).toContain('Chloe');
    expect(sheet.passage).toContain('Chloe');
    expect(sheet.questions.length).toBe(3);
  });

  it('falls back seamlessly to local generation if no API key is passed', async () => {
    const sheet = await generateCustomAdventureWorksheet({
      grade: '2nd Grade',
      subject: 'Math',
      topic: 'Pirate treasure dividing',
      studentName: 'Leo',
      additionalCharacters: 'Buster',
      apiKey: '',
    });

    expect(sheet).toBeDefined();
    expect(sheet.title).toContain('Leo');
    expect(sheet.questions.length).toBeGreaterThan(0);
  });

  it('successfully saves custom worksheet into the worksheet library', () => {
    const initialCount = getAllWorksheets().length;
    const customEntry = {
      id: `custom-test-${Date.now()}`,
      title: "Leo's Test Adventure",
      subject: 'math',
      grade: '2',
      instructions: 'Solve the math adventure',
      kidDirections: { text: 'Do your best!', icons: ['⭐'], badge: "Leo's Sheet" },
      problems: [{ id: 'p1', number: 1, prompt: '5 + 5' }],
      answerKey: [{ number: 1, solution: '10' }],
    };

    addCustomWorksheet(customEntry);
    const updatedSheets = getAllWorksheets();
    expect(updatedSheets.length).toBe(initialCount + 1);
    expect(updatedSheets[0].id).toBe(customEntry.id);
  });
});
