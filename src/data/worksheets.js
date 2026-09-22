// src/data/worksheets.js
// Curated worksheet library created collaboratively in conversation.
// Each sheet features an Educator/Parent Guide ("Why We Are Doing This") and Kid-Centric Directions.
// Connects to: src/domain/curriculum/roadmap.js, src/components/worksheet/WorksheetCanvas.jsx
// Created: 2026-09-22

import { generateTenFrame } from '../domain/math/tenFrame.js';
import { createNumberBond } from '../domain/math/numberBonds.js';

export const WORKSHEET_LIBRARY = [
  // =========================================================================
  // 1. Math: Ten-Frames 6 to 10 (Conceptual Subitizing)
  // =========================================================================
  {
    id: 'ws-math-tenframe-complements',
    milestoneId: 'math-m2',
    title: 'Kindergarten Ten-Frames: Complements to 10',
    subject: 'math',
    grade: 'K',
    parentGuide: {
      whyWeAreDoingThis:
        'Instead of counting dots one-by-one from 1 to 7, this sheet trains your child to instantly see that a full top row is 5, plus 2 more below makes 7. Recognizing the empty spaces teaches the combinations that add up to 10.',
      standard: 'CCSS.MATH.K.OA.A.4 & Singapore CPA',
      whatToWatchFor:
        'Notice if your child points to each dot one-by-one or recognizes 5 automatically. If they count from 1, prompt them: "You already know the top row has 5!"',
      verbalCue: '“Top row is 5! How many more on the bottom row?”',
    },
    kidDirections: {
      text: 'Look at the dots in the boxes. 🔢 How many dots do you see? ✏️ Write how many more dots you need to make 10!',
      icons: ['🔢', '✏️', '✂️'],
      badge: 'Ages 4-6 Directions',
    },
    instructions: 'Count the dots in each ten-frame. How many more dots do you need to make 10?',
    problems: [
      { id: 'p1', type: 'ten-frame', number: 1, ...generateTenFrame(6) },
      { id: 'p2', type: 'ten-frame', number: 2, ...generateTenFrame(8) },
      { id: 'p3', type: 'ten-frame', number: 3, ...generateTenFrame(7) },
      { id: 'p4', type: 'ten-frame', number: 4, ...generateTenFrame(9) },
    ],
    cutStrip: {
      type: 'straight-strips',
      stage: 'Pediatric Motor Safe Cut (Ages 3-5)',
      items: ['4 dots', '2 dots', '3 dots', '1 dot'],
    },
    answerKey: [
      { number: 1, solution: '6 dots + 4 empty = 10 (6 + 4 = 10)' },
      { number: 2, solution: '8 dots + 2 empty = 10 (8 + 2 = 10)' },
      { number: 3, solution: '7 dots + 3 empty = 10 (7 + 3 = 10)' },
      { number: 4, solution: '9 dots + 1 empty = 10 (9 + 1 = 10)' },
    ],
  },

  // =========================================================================
  // 2. Math: Singapore Math Number Bonds (Part-Whole)
  // =========================================================================
  {
    id: 'ws-math-number-bonds',
    milestoneId: 'math-m3',
    title: 'Singapore Math: Part-Whole Number Bonds to 10',
    subject: 'math',
    grade: 'K',
    parentGuide: {
      whyWeAreDoingThis:
        'Number bonds visually demonstrate that a whole number is partitioned into smaller parts. This builds mental math agility so children do not have to memorize isolated addition flashcards.',
      standard: 'CCSS.MATH.K.OA.A.3 & Singapore Math CPA',
      whatToWatchFor:
        'Ensure your child understands that the top circle is the whole group, and the two connected lower circles combine to equal it.',
      verbalCue: '“Which number belongs in the circle to complete the family?”',
    },
    kidDirections: {
      text: 'Find the missing number! 🔍 The two bottom circles add together to make the big top circle. ✏️ Write the missing number in the circle!',
      icons: ['🔍', '✏️'],
      badge: 'Ages 5-6 Directions',
    },
    instructions: 'Find the missing number to complete each part-whole number bond.',
    problems: [
      { id: 'p1', type: 'number-bond', number: 1, ...createNumberBond(7, 5, 'partB') },
      { id: 'p2', type: 'number-bond', number: 2, ...createNumberBond(8, 3, 'partB') },
      { id: 'p3', type: 'number-bond', number: 3, ...createNumberBond(10, 6, 'partB') },
      { id: 'p4', type: 'number-bond', number: 4, ...createNumberBond(9, 4, 'partB') },
    ],
    cutStrip: null,
    answerKey: [
      { number: 1, solution: 'Missing part: 2 (5 + 2 = 7)' },
      { number: 2, solution: 'Missing part: 5 (3 + 5 = 8)' },
      { number: 3, solution: 'Missing part: 4 (6 + 4 = 10)' },
      { number: 4, solution: 'Missing part: 5 (4 + 5 = 9)' },
    ],
  },

  // =========================================================================
  // 3. Phonics: Orton-Gillingham CVC Short-A Decodable Words
  // =========================================================================
  {
    id: 'ws-phonics-cvc-a',
    milestoneId: 'phonics-p2',
    title: 'Orton-Gillingham Phonics: Short-A CVC Decodable Words',
    subject: 'phonics',
    grade: 'K',
    parentGuide: {
      whyWeAreDoingThis:
        'Teaches pure phonetic decoding and phoneme-grapheme mapping. By tapping out sounds in Elkonin boxes, your child permanently stores words into their mental lexicon (orthographic mapping) instead of guessing.',
      standard: 'CCSS.ELA-LITERACY.RF.K.2.D & Orton-Gillingham Phase 2',
      whatToWatchFor:
        'Listen for clean, unclipped sounds. Make sure they do not add an extra "uh" sound to consonants (say /m/, not /muh/).',
      verbalCue: '“Tap each sound box with your finger: 1, 2, 3. Now say it fast!”',
    },
    kidDirections: {
      text: '👉 Tap each circle with your finger as you say the sound. ✏️ Write the letters on the handwriting lines. 🗣️ Say the word out loud!',
      icons: ['👉', '✏️', '🗣️'],
      badge: 'Ages 4-6 Reading Directions',
    },
    instructions: 'Say the sound of each letter, tap the sound boxes, and write the word on the handwriting lines.',
    problems: [
      { id: 'p1', type: 'phonics-dictation', number: 1, word: 'cat', phonemes: ['c', 'a', 't'] },
      { id: 'p2', type: 'phonics-dictation', number: 2, word: 'mat', phonemes: ['m', 'a', 't'] },
      { id: 'p3', type: 'phonics-dictation', number: 3, word: 'pan', phonemes: ['p', 'a', 'n'] },
      { id: 'p4', type: 'phonics-dictation', number: 4, word: 'tap', phonemes: ['t', 'a', 'p'] },
    ],
    nonsenseDrill: {
      instructions: 'Rule-Breaker Challenge: Read these silly nonsense words with your sounds!',
      words: ['dap', 'zat', 'vab'],
    },
    cutStrip: {
      type: 'word-tiles',
      stage: 'Pediatric Motor Safe Cut (Ages 4-6)',
      items: ['cat', 'mat', 'pan', 'tap', 'sat', 'map'],
    },
    answerKey: [
      { number: 1, solution: 'C - A - T (Sounds: /k/ /æ/ /t/)' },
      { number: 2, solution: 'M - A - T (Sounds: /m/ /æ/ /t/)' },
      { number: 3, solution: 'P - A - N (Sounds: /p/ /æ/ /n/)' },
      { number: 4, solution: 'T - A - P (Sounds: /t/ /æ/ /p/)' },
    ],
  },

  // =========================================================================
  // 4. Science: Core Knowledge Needs of Plants & Animals
  // =========================================================================
  {
    id: 'ws-sci-plants-animals',
    milestoneId: 'science-s1',
    title: 'Core Knowledge Science: Living vs. Non-Living Things',
    subject: 'science',
    grade: 'K',
    parentGuide: {
      whyWeAreDoingThis:
        'Young children often believe anything that moves (like a toy car or clock) is alive. This sheet trains them to use biological criteria (energy, water, growth) to classify matter.',
      standard: 'NGSS K-LS1-1 & Core Knowledge Science Unit 2',
      whatToWatchFor:
        'Ask your child: "Why is a plant alive if it cannot walk?" They should mention water, air, or sunlight.',
      verbalCue: '“Does it eat? Does it grow? Does it need water?”',
    },
    kidDirections: {
      text: 'Look at each picture or word! 🔍 Is it Living or Non-Living? ✏️ Check the right box! ✂️ Cut the tokens at the bottom to match what they need!',
      icons: ['🔍', '✏️', '✂️'],
      badge: 'Ages 4-6 Science Directions',
    },
    instructions: 'Examine each item below. Check whether it is Living or Non-Living, and identify what it needs.',
    scenario: 'Living things need water, air, and energy to grow and change.',
    problems: [
      { id: 'p1', type: 'science-classification', number: 1, item: 'Baby Oak Tree Seedling' },
      { id: 'p2', type: 'science-classification', number: 2, item: 'Plastic Toy Robot' },
      { id: 'p3', type: 'science-classification', number: 3, item: 'Playful Puppy' },
      { id: 'p4', type: 'science-classification', number: 4, item: 'Smooth River Pebble' },
    ],
    cutStrip: {
      type: 'sorting-tokens',
      stage: 'Pediatric Motor Safe Cut (Ages 4-5)',
      items: ['Needs Water', 'Needs Sunlight', 'Uses Batteries', 'Needs Food'],
    },
    answerKey: [
      { number: 1, solution: 'Oak Tree: Living (Needs sunlight, water, soil)' },
      { number: 2, solution: 'Toy Robot: Non-Living (Uses batteries, does not grow)' },
      { number: 3, solution: 'Puppy: Living (Needs food, water, care)' },
      { number: 4, solution: 'Pebble: Non-Living (Does not eat, drink, or grow)' },
    ],
  },

  // =========================================================================
  // 5. Science: Wilderness Survival STEM (Rule of Threes)
  // =========================================================================
  {
    id: 'ws-sci-wilderness',
    milestoneId: 'science-s2',
    title: 'Outdoor Survival Science: The Rule of Threes',
    subject: 'science',
    grade: 'K',
    parentGuide: {
      whyWeAreDoingThis:
        'Applies biology and environmental science to executive prioritization. Teaches children that staying warm and protected (shelter) is far more critical in the wild than immediately looking for food.',
      standard: 'Experiential STEM: Applied Biology & Physics of Survival',
      whatToWatchFor:
        'Children almost always think food is the #1 danger. Help them realize that severe cold or heat can cause hypothermia/heatstroke in just 3 hours.',
      verbalCue: '“3 minutes for air, 3 hours for shelter, 3 days for water!”',
    },
    kidDirections: {
      text: '🌲 You are an outdoor explorer! 🔍 Read the survival times. ✏️ Circle the emergency threat for each time!',
      icons: ['🌲', '🔍', '✏️'],
      badge: 'Explorer Directions',
    },
    instructions: 'Rank and analyze the survival priorities based on the physiological Rule of Threes.',
    scenario: 'Survival experts prioritize threats using the Rule of Threes: 3 Minutes without air, 3 Hours without shelter, 3 Days without water, 3 Weeks without food.',
    problems: [
      {
        id: 'p1',
        type: 'science-inquiry',
        number: 1,
        prompt: 'Priority #1: What threat happens in just "3 Minutes" without protection?',
        options: ['Breathing / Air', 'Hunger / Food', 'Water / Thirst', 'Sleep'],
      },
      {
        id: 'p2',
        type: 'science-inquiry',
        number: 2,
        prompt: 'Priority #2: What threat happens in "3 Hours" in freezing cold or blistering heat?',
        options: ['Freezing / Shelter', 'Tired legs', 'Empty stomach', 'Boredom'],
      },
      {
        id: 'p3',
        type: 'science-inquiry',
        number: 3,
        prompt: 'Priority #3: What threat happens after "3 Days" without drinking?',
        options: ['Dehydration / Water', 'Dirty clothes', 'Toothache', 'No shoes'],
      },
    ],
    cutStrip: null,
    answerKey: [
      { number: 1, solution: 'Priority #1 (3 Minutes): Breathing / Air' },
      { number: 2, solution: 'Priority #2 (3 Hours): Freezing / Shelter (Hypothermia)' },
      { number: 3, solution: 'Priority #3 (3 Days): Dehydration / Water' },
    ],
  },
];

/**
 * Returns all worksheets in the curated library.
 * @returns {object[]}
 */
export function getAllWorksheets() {
  return WORKSHEET_LIBRARY;
}

/**
 * Finds a worksheet by ID.
 * @param {string} id 
 * @returns {object|undefined}
 */
export function getWorksheetById(id) {
  return WORKSHEET_LIBRARY.find((w) => w.id === id) || WORKSHEET_LIBRARY[0];
}
