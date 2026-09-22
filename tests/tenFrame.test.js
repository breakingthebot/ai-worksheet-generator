// tests/tenFrame.test.js
// Unit tests for subitizing ten-frame calculations and Singapore Math part-whole models.
// Connects to: src/domain/math/tenFrame.js, src/domain/math/numberBonds.js
// Created: 2026-09-22

import { describe, it, expect } from 'vitest';
import { generateTenFrame, generateDoubleTenFrame } from '../src/domain/math/tenFrame.js';
import { createNumberBond, generateRandomNumberBond } from '../src/domain/math/numberBonds.js';

describe('Ten-Frame Subitizing Models', () => {
  it('correctly anchors numbers to five-structure', () => {
    const frame = generateTenFrame(7);
    expect(frame.count).toBe(7);
    expect(frame.complement).toBe(3);
    // Top row (first 5) must be completely full
    expect(frame.topRow.every((val) => val === true)).toBe(true);
    // Bottom row has 2 filled, 3 empty
    expect(frame.bottomRow.filter(Boolean).length).toBe(2);
    expect(frame.equationText).toBe('7 + 3 = 10');
  });

  it('clamps numbers safely between 0 and 10', () => {
    const minFrame = generateTenFrame(-2);
    expect(minFrame.count).toBe(0);
    expect(minFrame.complement).toBe(10);

    const maxFrame = generateTenFrame(15);
    expect(maxFrame.count).toBe(10);
    expect(maxFrame.complement).toBe(0);
  });

  it('generates double ten-frames for teen numbers', () => {
    const double = generateDoubleTenFrame(14);
    expect(double.total).toBe(14);
    expect(double.frame1.count).toBe(10);
    expect(double.frame2.count).toBe(4);
    expect(double.equationText).toBe('10 + 4 = 14');
  });
});

describe('Number Bond Part-Whole Models', () => {
  it('generates consistent part-whole equations', () => {
    const bond = createNumberBond(8, 5, 'partB');
    expect(bond.whole).toBe(8);
    expect(bond.partA).toBe(5);
    expect(bond.partB).toBe(3);
    expect(bond.targetAnswer).toBe(3);
    expect(bond.equation).toBe('5 + 3 = 8');
  });

  it('generates random number bonds within maximum whole limit', () => {
    const bond = generateRandomNumberBond(10);
    expect(bond.whole).toBeLessThanOrEqual(10);
    expect(bond.partA + bond.partB).toBe(bond.whole);
  });
});
