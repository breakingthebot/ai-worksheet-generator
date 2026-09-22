// src/domain/math/tenFrame.js
// Algorithmic generator for 2x5 Ten-Frames supporting perceptual and conceptual subitizing.
// Connects to: src/components/math/TenFrameView.jsx, src/services/mockGenerator.js
// Created: 2026-09-22

/**
 * Builds a structured 2x5 ten-frame representation for a number from 0 to 10.
 * In accordance with cognitive subitizing research, dots fill the top row (1-5) first
 * to anchor quantities to the five-structure, before filling the bottom row (6-10).
 * 
 * @param {number} count Number of active dots (0-10)
 * @returns {object} { count, complement: 10 - count, cells: boolean[10] }
 */
export function generateTenFrame(count) {
  const safeCount = Math.max(0, Math.min(10, Math.round(count)));
  const cells = Array(10).fill(false);
  
  for (let i = 0; i < safeCount; i++) {
    cells[i] = true;
  }

  return {
    count: safeCount,
    complement: 10 - safeCount,
    topRow: cells.slice(0, 5),
    bottomRow: cells.slice(5, 10),
    cells,
    equationText: `${safeCount} + ${10 - safeCount} = 10`,
  };
}

/**
 * Generates a double ten-frame for teen numbers (11 to 20).
 * Frame 1 is completely full (10); Frame 2 displays the remainder (count - 10).
 * 
 * @param {number} count Total count (11-20)
 * @returns {object} { frame1, frame2, total, equationText }
 */
export function generateDoubleTenFrame(count) {
  const safeCount = Math.max(0, Math.min(20, Math.round(count)));
  const frame1Count = Math.min(10, safeCount);
  const frame2Count = Math.max(0, safeCount - 10);

  return {
    total: safeCount,
    frame1: generateTenFrame(frame1Count),
    frame2: generateTenFrame(frame2Count),
    equationText: `10 + ${frame2Count} = ${safeCount}`,
  };
}
