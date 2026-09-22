// tests/ccssGating.test.js
// Unit tests verifying Common Core State Standards domain gating rules.
// Connects to: src/domain/math/ccssGating.js
// Created: 2026-09-22

import { describe, it, expect } from 'vitest';
import {
  CCSS_DOMAINS,
  isDomainAllowedForGrade,
  getAllowedDomainsForGrade,
} from '../src/domain/math/ccssGating.js';

describe('CCSS Math Gating Rules', () => {
  it('allows Counting and Cardinality only in Kindergarten', () => {
    expect(isDomainAllowedForGrade(CCSS_DOMAINS.COUNTING_CARDINALITY, 'K')).toBe(true);
    expect(isDomainAllowedForGrade(CCSS_DOMAINS.COUNTING_CARDINALITY, '1')).toBe(false);
    expect(isDomainAllowedForGrade(CCSS_DOMAINS.COUNTING_CARDINALITY, '2')).toBe(false);
  });

  it('strictly blocks formal fractional notation in Kindergarten and Grade 1-2', () => {
    expect(isDomainAllowedForGrade(CCSS_DOMAINS.FRACTIONS, 'K')).toBe(false);
    expect(isDomainAllowedForGrade(CCSS_DOMAINS.FRACTIONS, '1')).toBe(false);
    expect(isDomainAllowedForGrade(CCSS_DOMAINS.FRACTIONS, '2')).toBe(false);
  });

  it('permits Fractions starting in Grade 3', () => {
    expect(isDomainAllowedForGrade(CCSS_DOMAINS.FRACTIONS, '3')).toBe(true);
    expect(isDomainAllowedForGrade(CCSS_DOMAINS.FRACTIONS, '4')).toBe(true);
    expect(isDomainAllowedForGrade(CCSS_DOMAINS.FRACTIONS, '5')).toBe(true);
  });

  it('restricts Functions exclusively to Grade 8 in K-8 continuum', () => {
    expect(isDomainAllowedForGrade(CCSS_DOMAINS.FUNCTIONS, '7')).toBe(false);
    expect(isDomainAllowedForGrade(CCSS_DOMAINS.FUNCTIONS, '8')).toBe(true);
  });

  it('returns valid domain lists for all grades', () => {
    const kDomains = getAllowedDomainsForGrade('K');
    expect(kDomains).toContain(CCSS_DOMAINS.COUNTING_CARDINALITY);
    expect(kDomains).toContain(CCSS_DOMAINS.GEOMETRY);
    expect(kDomains.length).toBe(5);
  });
});
