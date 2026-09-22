// src/domain/curriculum/roadmap.js
// Evidence-based progressive K-1 curriculum roadmap defining mastery and progression criteria.
// Connects to: src/data/worksheets.js, src/components/roadmap/RoadmapView.jsx
// Created: 2026-09-22

export const CURRICULUM_ROADMAP = [
  // --- MATHEMATICS PATHWAY ---
  {
    id: 'math-m1',
    subject: 'math',
    grade: 'K',
    stageNumber: 1,
    title: 'Perceptual Subitizing (Quantities 1 to 5)',
    standard: 'CCSS.MATH.K.CC.B.4 & Clements & Sarama Subitizing Research',
    whyItMatters:
      'Teaches the child to instantly recognize small quantities without counting one-by-one. This forms the foundational neurological bedrock of number sense before any addition can occur.',
    moveOnCriteria:
      'The child identifies quantities 1 through 5 in under 2 seconds without pointing or sequential unit counting. Consistently scores 90%+ on quick recognition.',
    keepPracticingCriteria:
      'The child points finger to each dot sequentially ("1, 2, 3...") or hesitates for more than 4 seconds on dice/dot arrays of 4 or 5.',
    parentVerbalCue:
      '“Look with your eyes, not your finger! Can you tell me how many dots you see in one quick snapshot?”',
    defaultWorksheetId: 'ws-math-tenframe-basic',
  },
  {
    id: 'math-m2',
    subject: 'math',
    grade: 'K',
    stageNumber: 2,
    title: 'Conceptual Subitizing with 2×5 Ten-Frames (Quantities 6 to 10)',
    standard: 'CCSS.MATH.K.OA.A.4 & Base-10 Structuring',
    whyItMatters:
      'Children learn to see 7 not as seven individual dots, but as "5 on the top row plus 2 on the bottom row". This anchors all future base-10 arithmetic to the 5-structure.',
    moveOnCriteria:
      'The child instantly recognizes that a full top row is 5 and calculates 5 + extra dots without counting from 1. Can state how many empty boxes are needed to reach 10.',
    keepPracticingCriteria:
      'The child counts from 1 on the top row instead of recognizing 5 automatically, or struggles to determine the empty complement spaces to reach 10.',
    parentVerbalCue:
      '“Look at the top row: it is completely full, so you know that is 5! How many extra dots are on the bottom row?”',
    defaultWorksheetId: 'ws-math-tenframe-complements',
  },
  {
    id: 'math-m3',
    subject: 'math',
    grade: 'K',
    stageNumber: 3,
    title: 'Singapore Math Number Bonds: Part-Whole Foundations (Sums to 10)',
    standard: 'CCSS.MATH.K.OA.A.3 & Singapore CPA (Concrete-Pictorial-Abstract)',
    whyItMatters:
      'Introduces the concept that numbers are composed of smaller pieces. Understanding that 7 branches into 5 and 2 prepares children for mental addition and subtraction simultaneously.',
    moveOnCriteria:
      'The child can find the missing part (e.g. Whole: 8, Part: 5 -> Missing: 3) without finger counting, and understands that the two parts add together to create the whole.',
    keepPracticingCriteria:
      'The child confuses the whole with the parts (e.g. adding 8 + 5 instead of subtracting to find the missing piece).',
    parentVerbalCue:
      '“The big circle at the top is the Whole family! Which missing friend belongs in the empty circle to make the whole number?”',
    defaultWorksheetId: 'ws-math-number-bonds',
  },

  // --- PHONICS & LITERACY PATHWAY ---
  {
    id: 'phonics-p1',
    subject: 'phonics',
    grade: 'K',
    stageNumber: 1,
    title: 'Orton-Gillingham Phase 1: High-Utility Consonants & Early Blending',
    standard: 'CCSS.ELA-LITERACY.RF.K.1.D & Orton-Gillingham Phase 1',
    whyItMatters:
      'Focuses on continuous consonant sounds (/m/, /s/) and consistent single sounds so children can physically blend speech gestures without stop consonants causing vocal distortion.',
    moveOnCriteria:
      'The child can vocalize the primary sounds for m, s, p, t, a, n, c immediately upon seeing the letter with 100% accuracy.',
    keepPracticingCriteria:
      'The child confuses letter names with letter sounds (saying "Em" instead of "/mmm/"), or adds an "uh" sound at the end (saying "/buh/" instead of crisp "/b/").',
    parentVerbalCue:
      '“Make the sound with your mouth, not the name of the letter! Keep the sound going: /sssss/... /mmmm/!”',
    defaultWorksheetId: 'ws-phonics-cvc-a',
  },
  {
    id: 'phonics-p2',
    subject: 'phonics',
    grade: 'K',
    stageNumber: 2,
    title: 'Orton-Gillingham Phase 2: Short Vowel CVC Decodable Words & Sound Tapping',
    standard: 'CCSS.ELA-LITERACY.RF.K.2.D & Orthographic Mapping',
    whyItMatters:
      'Forces the child to decode words sound-by-sound using Elkonin boxes, preventing the dangerous habit of guessing words based on pictures or first letters.',
    moveOnCriteria:
      'The child smoothly blends 3-letter CVC words (e.g., cat, mop, pig) and can accurately tap out each individual phoneme before writing.',
    keepPracticingCriteria:
      'The child segments sounds (/c/ - /a/ - /t/) but then guesses an unrelated word, or guesses words based on shape without checking the middle vowel.',
    parentVerbalCue:
      '“Tap each sound box with your finger: 1, 2, 3. Now slide your finger across the line and say it fast!”',
    defaultWorksheetId: 'ws-phonics-cvc-a',
  },

  // --- SCIENCE & STEM PATHWAY ---
  {
    id: 'science-s1',
    subject: 'science',
    grade: 'K',
    stageNumber: 1,
    title: 'Core Knowledge Science: Needs of Living vs. Non-Living Things',
    standard: 'NGSS K-LS1-1 & Core Knowledge Science Unit 2',
    whyItMatters:
      'Builds scientific classification models. Teaches children to categorize based on biological criteria (energy, water, growth) rather than superficial visual traits.',
    moveOnCriteria:
      'The child can explain why a toy car is non-living (does not eat, breathe, or grow) even though it can move.',
    keepPracticingCriteria:
      'The child categorizes non-living objects as living simply because they move (e.g. cars, wind, clock).',
    parentVerbalCue:
      '“Ask the three questions: Does it drink water? Does it grow? Does it need food?”',
    defaultWorksheetId: 'ws-sci-plants-animals',
  },
  {
    id: 'science-s2',
    subject: 'science',
    grade: 'K',
    stageNumber: 2,
    title: 'Outdoor Survival Science: The Rule of Threes & Threat Prioritization',
    standard: 'Experiential STEM: Applied Biology & Physics of Survival',
    whyItMatters:
      'Develops executive function and prioritization skills through high-stakes, real-world survival science (Air > Shelter > Water > Food).',
    moveOnCriteria:
      'The child can rank the survival priorities in order and explain why shelter from cold/heat is needed before water or food.',
    keepPracticingCriteria:
      'The child insists food is the most urgent priority over shelter and water.',
    parentVerbalCue:
      '“Remember our survival rule: 3 minutes without air, 3 hours without shelter, 3 days without water, 3 weeks without food!”',
    defaultWorksheetId: 'ws-sci-wilderness',
  },
];

/**
 * Returns milestones filtered by subject or all milestones.
 * @param {string} [subject] 
 * @returns {object[]}
 */
export function getMilestones(subject) {
  if (!subject || subject === 'all') return CURRICULUM_ROADMAP;
  return CURRICULUM_ROADMAP.filter((m) => m.subject === subject);
}

/**
 * Gets a specific milestone by its ID.
 * @param {string} id 
 * @returns {object|undefined}
 */
export function getMilestoneById(id) {
  return CURRICULUM_ROADMAP.find((m) => m.id === id);
}
