// tests/mockGenerator.test.js
// Unit tests verifying end-to-end worksheet and answer key generation.
// Connects to: src/services/mockGenerator.js
// Created: 2026-09-22

import { describe, it, expect } from 'vitest';
import { generateWorksheet } from '../src/services/mockGenerator.js';

describe('Deterministic Worksheet Generator Service', () => {
  it('generates a valid Kindergarten ten-frame math worksheet with matching answer key', () => {
    const ws = generateWorksheet({ subject: 'math', grade: 'K', format: 'ten-frame', count: 4 });
    expect(ws.subject).toBe('math');
    expect(ws.grade).toBe('K');
    expect(ws.problems.length).toBe(4);
    expect(ws.answerKey.length).toBe(4);
    expect(ws.cutStrip).not.toBeNull();
    expect(ws.problems[0].type).toBe('ten-frame');
  });

  it('generates a valid Singapore Math number bond worksheet', () => {
    const ws = generateWorksheet({ subject: 'math', grade: 'K', format: 'number-bonds', count: 4 });
    expect(ws.problems.length).toBe(4);
    expect(ws.problems[0].type).toBe('number-bond');
    expect(ws.answerKey.length).toBe(4);
  });

  it('generates an Orton-Gillingham phonics worksheet with dictation problems', () => {
    const ws = generateWorksheet({ subject: 'phonics', grade: 'K', count: 4 });
    expect(ws.subject).toBe('phonics');
    expect(ws.problems.length).toBe(4);
    expect(ws.problems[0].type).toBe('phonics-dictation');
    expect(ws.nonsenseDrill).toBeDefined();
    expect(ws.answerKey.length).toBe(4);
  });

  it('generates a Core Knowledge science worksheet', () => {
    const ws = generateWorksheet({ subject: 'science', grade: 'K', format: 'plants-animals', count: 3 });
    expect(ws.subject).toBe('science');
    expect(ws.problems.length).toBe(3);
    expect(ws.problems[0].type).toBe('science-classification');
    expect(ws.answerKey.length).toBe(3);
  });
});
