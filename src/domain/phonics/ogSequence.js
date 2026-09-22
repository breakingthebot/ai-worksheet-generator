// src/domain/phonics/ogSequence.js
// Orton-Gillingham (OG) 6-Phase Scope and Sequence for structured literacy & decodable text.
// Connects to: src/components/phonics/DictationGrid.jsx, src/services/mockGenerator.js
// Created: 2026-09-22

export const OG_PHASES = {
  PHASE_1: {
    phase: 1,
    title: 'Consonants & Single Sounds',
    description: 'High-utility consonants (hard c/g, continuous sounds /m/, /s/ for blending).',
    phonemes: ['m', 's', 'p', 't', 'n', 'c', 'd', 'f', 'l', 'h', 'g', 'b', 'j', 'k', 'r', 'v', 'w', 'x', 'y', 'z', 'qu'],
  },
  PHASE_2: {
    phase: 2,
    title: 'Short Vowels & CVC Words',
    description: 'Short a, e, i, o, u forming pure Consonant-Vowel-Consonant words.',
    vowels: ['a', 'e', 'i', 'o', 'u'],
    wordBank: [
      'cat', 'mat', 'sat', 'pat', 'tap', 'pan', 'tan',
      'bed', 'red', 'fed', 'net', 'pet', 'hen', 'pen',
      'pig', 'big', 'dig', 'sit', 'hit', 'pin', 'fin',
      'mop', 'top', 'pot', 'hot', 'dog', 'log', 'box',
      'sun', 'run', 'fun', 'cup', 'bug', 'rug', 'nut',
    ],
  },
  PHASE_3: {
    phase: 3,
    title: 'Consonant Blends',
    description: 'Beginning (bl, cr, st) and ending (mp, nd, st) where both sounds are heard.',
    wordBank: [
      'stamp', 'blend', 'crisp', 'plant', 'stand', 'frost',
      'clamp', 'twist', 'crust', 'blast', 'grasp', 'drift',
    ],
  },
  PHASE_4: {
    phase: 4,
    title: 'Consonant Digraphs',
    description: 'Letter teams making a single sound (sh, ch, th, wh, ph).',
    digraphs: ['sh', 'ch', 'th', 'wh', 'ph'],
    wordBank: [
      'ship', 'chat', 'chin', 'thin', 'bath', 'whip', 'graph',
      'shed', 'chop', 'moth', 'wish', 'cash', 'much', 'rich',
    ],
  },
  PHASE_5: {
    phase: 5,
    title: 'Long Vowels & Vowel Teams',
    description: 'Silent-e (make, note), vowel teams (ai, ee, oa), and r-controlled (ar, er).',
    wordBank: [
      'boat', 'star', 'time', 'make', 'rain', 'tree',
      'seed', 'coat', 'park', 'fern', 'hope', 'bone',
    ],
  },
  PHASE_6: {
    phase: 6,
    title: 'Advanced Patterns & Morphology',
    description: 'Diphthongs (oi, ou), variant vowels, prefixes, and Latin/Greek roots.',
    wordBank: [
      'spoil', 'cloud', 'autumn', 'boil', 'shout', 'straw',
      'launch', 'coin', 'found', 'haul', 'crawl', 'hawk',
    ],
  },
};

/**
 * Validates whether a word is decodable up to a specific maximum OG phase.
 * For example, Phase 2 cannot contain vowel teams or digraphs.
 * 
 * @param {string} word 
 * @param {number} maxPhase 
 * @returns {boolean}
 */
export function isWordDecodableAtPhase(word, maxPhase) {
  const clean = word.toLowerCase().trim();
  if (maxPhase < 4) {
    // Digraphs (sh, ch, th, wh, ph) are disallowed before Phase 4
    if (/(sh|ch|th|wh|ph)/.test(clean)) return false;
  }
  if (maxPhase < 3) {
    // Consonant blends disallowed in Phase 1 & 2 (strictly CVC)
    if (clean.length > 3) return false;
  }
  return true;
}

/**
 * Returns decodable practice words strictly appropriate for the specified OG Phase.
 * 
 * @param {number} phase (1 through 6)
 * @param {number} count Number of words to retrieve
 * @returns {string[]}
 */
export function getDecodableWords(phase = 2, count = 6) {
  const phaseKey = `PHASE_${Math.max(2, Math.min(6, phase))}`;
  const bank = OG_PHASES[phaseKey]?.wordBank || OG_PHASES.PHASE_2.wordBank;
  
  // Shuffle and take requested count
  const shuffled = [...bank].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

/**
 * Generates phonetically valid CVC nonsense words ("rule-breakers") to assess pure decoding.
 * 
 * @param {number} count 
 * @returns {string[]}
 */
export function generateNonsenseWords(count = 4) {
  const consonants = ['b', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'z'];
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const nonsense = [];

  for (let i = 0; i < count; i++) {
    const c1 = consonants[Math.floor(Math.random() * consonants.length)];
    const v = vowels[Math.floor(Math.random() * vowels.length)];
    const c2 = consonants[Math.floor(Math.random() * consonants.length)];
    nonsense.push(`${c1}${v}${c2}`);
  }

  return nonsense;
}
