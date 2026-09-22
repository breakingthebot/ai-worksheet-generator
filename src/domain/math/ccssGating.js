// src/domain/math/ccssGating.js
// Enforces Common Core State Standards (CCSS) mathematical progression gating rules.
// Connects to: src/domain/math/tenFrame.js, src/services/mockGenerator.js
// Created: 2026-09-22

export const CCSS_DOMAINS = {
  COUNTING_CARDINALITY: 'Counting and Cardinality',
  OPERATIONS_ALGEBRAIC: 'Operations and Algebraic Thinking',
  NUMBER_BASE_TEN: 'Number and Operations in Base 10',
  MEASUREMENT_DATA: 'Measurement and Data',
  GEOMETRY: 'Geometry',
  FRACTIONS: 'Number and Operations—Fractions',
  RATIOS_PROPORTIONS: 'Ratios and Proportional Relationships',
  NUMBER_SYSTEM: 'The Number System',
  EXPRESSIONS_EQUATIONS: 'Expressions and Equations',
  STATISTICS_PROBABILITY: 'Statistics and Probability',
  FUNCTIONS: 'Functions',
};

// Domain availability by grade level (K through 8) as mandated by CCSS
export const GRADE_DOMAIN_GATING = {
  K: [
    CCSS_DOMAINS.COUNTING_CARDINALITY,
    CCSS_DOMAINS.OPERATIONS_ALGEBRAIC,
    CCSS_DOMAINS.NUMBER_BASE_TEN,
    CCSS_DOMAINS.MEASUREMENT_DATA,
    CCSS_DOMAINS.GEOMETRY,
  ],
  1: [
    CCSS_DOMAINS.OPERATIONS_ALGEBRAIC,
    CCSS_DOMAINS.NUMBER_BASE_TEN,
    CCSS_DOMAINS.MEASUREMENT_DATA,
    CCSS_DOMAINS.GEOMETRY,
  ],
  2: [
    CCSS_DOMAINS.OPERATIONS_ALGEBRAIC,
    CCSS_DOMAINS.NUMBER_BASE_TEN,
    CCSS_DOMAINS.MEASUREMENT_DATA,
    CCSS_DOMAINS.GEOMETRY,
  ],
  3: [
    CCSS_DOMAINS.OPERATIONS_ALGEBRAIC,
    CCSS_DOMAINS.NUMBER_BASE_TEN,
    CCSS_DOMAINS.MEASUREMENT_DATA,
    CCSS_DOMAINS.GEOMETRY,
    CCSS_DOMAINS.FRACTIONS, // Fractions explicitly begin in Grade 3
  ],
  4: [
    CCSS_DOMAINS.OPERATIONS_ALGEBRAIC,
    CCSS_DOMAINS.NUMBER_BASE_TEN,
    CCSS_DOMAINS.MEASUREMENT_DATA,
    CCSS_DOMAINS.GEOMETRY,
    CCSS_DOMAINS.FRACTIONS,
  ],
  5: [
    CCSS_DOMAINS.OPERATIONS_ALGEBRAIC,
    CCSS_DOMAINS.NUMBER_BASE_TEN,
    CCSS_DOMAINS.MEASUREMENT_DATA,
    CCSS_DOMAINS.GEOMETRY,
    CCSS_DOMAINS.FRACTIONS,
  ],
  6: [
    CCSS_DOMAINS.RATIOS_PROPORTIONS,
    CCSS_DOMAINS.NUMBER_SYSTEM,
    CCSS_DOMAINS.EXPRESSIONS_EQUATIONS,
    CCSS_DOMAINS.GEOMETRY,
    CCSS_DOMAINS.STATISTICS_PROBABILITY,
  ],
  7: [
    CCSS_DOMAINS.RATIOS_PROPORTIONS,
    CCSS_DOMAINS.NUMBER_SYSTEM,
    CCSS_DOMAINS.EXPRESSIONS_EQUATIONS,
    CCSS_DOMAINS.GEOMETRY,
    CCSS_DOMAINS.STATISTICS_PROBABILITY,
  ],
  8: [
    CCSS_DOMAINS.NUMBER_SYSTEM,
    CCSS_DOMAINS.EXPRESSIONS_EQUATIONS,
    CCSS_DOMAINS.GEOMETRY,
    CCSS_DOMAINS.STATISTICS_PROBABILITY,
    CCSS_DOMAINS.FUNCTIONS, // Functions are restricted to Grade 8
  ],
};

/**
 * Validates whether a math domain is pedagogical and developmentally compliant for a given grade.
 * @param {string} domain 
 * @param {string|number} grade 
 * @returns {boolean}
 */
export function isDomainAllowedForGrade(domain, grade) {
  const gradeKey = String(grade).toUpperCase();
  const allowed = GRADE_DOMAIN_GATING[gradeKey] || [];
  return allowed.includes(domain);
}

/**
 * Returns the list of valid domains for a given grade level.
 * @param {string|number} grade 
 * @returns {string[]}
 */
export function getAllowedDomainsForGrade(grade) {
  const gradeKey = String(grade).toUpperCase();
  return GRADE_DOMAIN_GATING[gradeKey] || [];
}
