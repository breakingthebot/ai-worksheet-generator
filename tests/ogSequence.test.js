// tests/ogSequence.test.js
// Unit tests for Orton-Gillingham structured decodability and word generation.
// Connects to: src/domain/phonics/ogSequence.js
// Created: 2026-09-22

import { describe, it, expect } from 'vitest';
import {
  isWordDecodableAtPhase,
  getDecodableWords,
  generateNonsenseWords,
} from '../src/domain/phonics/ogSequence.js';

describe('Orton-Gillingham Decodability Engine', () => {
  it('identifies non-decodable digraphs at Phase 2', () => {
    // Digraphs (sh, ch, th) are introduced at Phase 4, so must fail Phase 2
    expect(isWordDecodableAtPhase('cat', 2)).toBe(true);
    expect(isWordDecodableAtPhase('ship', 2)).toBe(false);
    expect(isWordDecodableAtPhase('chat', 2)).toBe(false);
    expect(isWordDecodableAtPhase('thin', 2)).toBe(false);
  });

  it('allows digraphs starting at Phase 4', () => {
    expect(isWordDecodableAtPhase('ship', 4)).toBe(true);
    expect(isWordDecodableAtPhase('chat', 4)).toBe(true);
  });

  it('retrieves requested number of decodable practice words', () => {
    const words = getDecodableWords(2, 5);
    expect(words.length).toBe(5);
    words.forEach((w) => {
      expect(typeof w).toBe('string');
      expect(w.length).toBeGreaterThan(0);
    });
  });

  it('generates valid CVC nonsense words', () => {
    const nonsense = generateNonsenseWords(4);
    expect(nonsense.length).toBe(4);
    nonsense.forEach((word) => {
      expect(word.length).toBe(3);
    });
  });
});
