// src/domain/ergonomics/layoutRules.js
// Governs cognitive load mitigation, visual density, and pediatric fine motor constraints.
// Connects to: src/components/ergonomics/ScissorCutStrip.jsx, src/components/worksheet/WorksheetCanvas.jsx
// Created: 2026-09-22

export const COGNITIVE_DENSITY_LIMITS = {
  K: { maxProblemsPerPage: 6, idealProblemsPerPage: 4, workspacePadding: 'p-6', fontSize: 'text-lg' },
  1: { maxProblemsPerPage: 8, idealProblemsPerPage: 6, workspacePadding: 'p-5', fontSize: 'text-base' },
  2: { maxProblemsPerPage: 10, idealProblemsPerPage: 8, workspacePadding: 'p-4', fontSize: 'text-base' },
  3: { maxProblemsPerPage: 12, idealProblemsPerPage: 10, workspacePadding: 'p-4', fontSize: 'text-sm' },
  4: { maxProblemsPerPage: 12, idealProblemsPerPage: 10, workspacePadding: 'p-4', fontSize: 'text-sm' },
  5: { maxProblemsPerPage: 14, idealProblemsPerPage: 12, workspacePadding: 'p-3', fontSize: 'text-sm' },
  6: { maxProblemsPerPage: 15, idealProblemsPerPage: 12, workspacePadding: 'p-3', fontSize: 'text-sm' },
  7: { maxProblemsPerPage: 16, idealProblemsPerPage: 14, workspacePadding: 'p-3', fontSize: 'text-sm' },
  8: { maxProblemsPerPage: 18, idealProblemsPerPage: 15, workspacePadding: 'p-3', fontSize: 'text-xs' },
};

export const SCISSOR_MOTOR_GUIDELINES = {
  AGE_2_3: {
    stage: 'Snipping & Straight Strips',
    location: 'bottom-edge-only',
    lineStyle: 'border-dashed border-2', // Thick border for motor accuracy
    lineThickness: '1/4 inch equivalent',
    shapesAllowed: ['straight-strips'],
    avoidInteriorCuts: true,
  },
  AGE_4: {
    stage: 'Curved Lines & Large Circles (>= 6 in)',
    location: 'bottom-or-side',
    lineStyle: 'border-dashed border-2',
    shapesAllowed: ['straight-strips', 'large-circles', 'wavy-lines'],
    avoidInteriorCuts: false,
  },
  AGE_5_PLUS: {
    stage: 'Corners, Squares & Complex Figures',
    location: 'any',
    lineStyle: 'border-dashed border',
    shapesAllowed: ['squares', 'rectangles', 'complex-tokens'],
    avoidInteriorCuts: false,
  },
};

/**
 * Returns safe cognitive density parameters for a given grade level.
 * @param {string|number} grade 
 * @returns {object}
 */
export function getDensityForGrade(grade) {
  const gradeKey = String(grade).toUpperCase();
  return COGNITIVE_DENSITY_LIMITS[gradeKey] || COGNITIVE_DENSITY_LIMITS.K;
}
