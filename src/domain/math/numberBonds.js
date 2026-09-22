// src/domain/math/numberBonds.js
// Algorithmic generator for Part-Whole Number Bonds based on Singapore Math CPA method.
// Connects to: src/components/math/NumberBondView.jsx, src/services/mockGenerator.js
// Created: 2026-09-22

/**
 * Generates a structured number bond problem.
 * 
 * @param {number} whole Total whole number
 * @param {number} partA First component part
 * @param {'whole'|'partA'|'partB'} missingItem Which circle is left blank for the student to solve
 * @returns {object}
 */
export function createNumberBond(whole, partA, missingItem = 'partB') {
  const safeWhole = Math.max(1, Math.round(whole));
  const safePartA = Math.max(0, Math.min(safeWhole, Math.round(partA)));
  const partB = safeWhole - safePartA;

  return {
    whole: safeWhole,
    partA: safePartA,
    partB,
    missingItem,
    targetAnswer: missingItem === 'whole' ? safeWhole : missingItem === 'partA' ? safePartA : partB,
    equation: `${safePartA} + ${partB} = ${safeWhole}`,
  };
}

/**
 * Generates a random developmentally appropriate number bond within a target sum limit.
 * 
 * @param {number} maxWhole Maximum sum (e.g. 10 for Kindergarten, 20 for Grade 1)
 * @param {'whole'|'partA'|'partB'|'random'} missingMode
 * @returns {object}
 */
export function generateRandomNumberBond(maxWhole = 10, missingMode = 'random') {
  const minWhole = 3;
  const whole = Math.floor(Math.random() * (maxWhole - minWhole + 1)) + minWhole;
  const partA = Math.floor(Math.random() * (whole - 1)) + 1;
  
  let missingItem = missingMode;
  if (missingMode === 'random') {
    const choices = ['partA', 'partB', 'whole'];
    missingItem = choices[Math.floor(Math.random() * choices.length)];
  }

  return createNumberBond(whole, partA, missingItem);
}
