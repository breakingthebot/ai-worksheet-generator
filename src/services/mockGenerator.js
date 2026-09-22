// src/services/mockGenerator.js
// Offline, deterministic curriculum-aligned generator producing complete worksheets and answer keys.
// Connects to: src/domain/math/, src/domain/phonics/, src/domain/science/, src/services/aiGenerator.js
// Created: 2026-09-22

import { generateTenFrame } from '../domain/math/tenFrame.js';
import { generateRandomNumberBond } from '../domain/math/numberBonds.js';
import { getDecodableWords, generateNonsenseWords, OG_PHASES } from '../domain/phonics/ogSequence.js';
import { CORE_KNOWLEDGE_SCIENCE_K, WILDERNESS_SCIENCE_MODULES } from '../domain/science/coreKnowledgeUnits.js';
import { getDensityForGrade } from '../domain/ergonomics/layoutRules.js';

/**
 * Generates a complete worksheet object based on subject, grade, and pedagogical settings.
 * 
 * @param {object} config { subject, grade, format, count, includeAnswerKey }
 * @returns {object} { title, grade, subject, instructions, problems, cutStrip, answerKey }
 */
export function generateWorksheet(config) {
  const { subject = 'math', grade = 'K', format = 'ten-frame', count } = config;
  const density = getDensityForGrade(grade);
  const problemCount = count || density.idealProblemsPerPage;

  if (subject === 'math') {
    return generateMathWorksheet(grade, format, problemCount);
  } else if (subject === 'phonics') {
    return generatePhonicsWorksheet(grade, format, problemCount);
  } else if (subject === 'science') {
    return generateScienceWorksheet(grade, format, problemCount);
  }

  return generateMathWorksheet(grade, format, problemCount);
}

function generateMathWorksheet(grade, format, count) {
  if (format === 'number-bonds') {
    const problems = [];
    const answerKey = [];
    const maxWhole = grade === 'K' ? 10 : 20;

    for (let i = 0; i < count; i++) {
      const bond = generateRandomNumberBond(maxWhole, 'random');
      problems.push({
        id: `bond-${i + 1}`,
        type: 'number-bond',
        number: i + 1,
        ...bond,
      });
      answerKey.push({
        number: i + 1,
        solution: `Missing ${bond.missingItem}: ${bond.targetAnswer} (${bond.equation})`,
      });
    }

    return {
      title: `${grade === 'K' ? 'Kindergarten' : `Grade ${grade}`} Singapore Math: Number Bonds`,
      subject: 'math',
      grade,
      framework: 'Singapore Math CPA (Concrete-Pictorial-Abstract)',
      instructions: 'Find the missing number to complete each part-whole number bond.',
      problems,
      cutStrip: null,
      answerKey,
    };
  }

  // Default: Ten-Frames Subitizing
  const problems = [];
  const answerKey = [];
  const numbers = [3, 5, 7, 4, 8, 6, 9, 2, 10, 1].slice(0, count);

  numbers.forEach((num, index) => {
    const frame = generateTenFrame(num);
    problems.push({
      id: `tf-${index + 1}`,
      type: 'ten-frame',
      number: index + 1,
      ...frame,
    });
    answerKey.push({
      number: index + 1,
      solution: `${frame.count} dots + ${frame.complement} empty = 10 (${frame.equationText})`,
    });
  });

  return {
    title: `${grade === 'K' ? 'Kindergarten' : `Grade ${grade}`} Visual Numeracy: Ten-Frames`,
    subject: 'math',
    grade,
    framework: 'CCSS.MATH.CONTENT.K.OA.A.4 & Perceptual Subitizing',
    instructions: 'Count the dots in each ten-frame. How many more dots do you need to make 10?',
    problems,
    cutStrip: {
      type: 'straight-strips',
      stage: 'Ages 3-5 (Bottom-Edge Safe Cut)',
      items: ['3', '5', '7', '4', '8', '6'],
    },
    answerKey,
  };
}

function generatePhonicsWorksheet(grade, format, count) {
  const phase = grade === 'K' ? 2 : grade === '1' ? 3 : 4;
  const decodables = getDecodableWords(phase, count);
  const nonsense = generateNonsenseWords(3);

  const problems = decodables.map((word, index) => ({
    id: `og-${index + 1}`,
    type: 'phonics-dictation',
    number: index + 1,
    word,
    phonemes: word.split(''),
    cue: `Word with short vowel sound: ${word}`,
  }));

  const answerKey = decodables.map((word, index) => ({
    number: index + 1,
    solution: `Spelling: ${word.toUpperCase()} | Sounds: /${word.split('').join('/ /')}/`,
  }));

  return {
    title: `Orton-Gillingham Structured Literacy: Phase ${phase}`,
    subject: 'phonics',
    grade,
    framework: `OG Phase ${phase}: ${OG_PHASES[`PHASE_${phase}`]?.title || 'Decodable Phonics'}`,
    instructions: 'Say the sound of each letter, blend the sounds to read the word, and write the word on the handwriting line.',
    problems,
    nonsenseDrill: {
      instructions: 'Rule-Breaker Challenge: Read these silly nonsense words using your phonics sounds!',
      words: nonsense,
    },
    cutStrip: {
      type: 'word-tiles',
      stage: 'Ages 4-6 (Straight Cut Tiles)',
      items: decodables,
    },
    answerKey,
  };
}

function generateScienceWorksheet(grade, format, count) {
  if (format === 'wilderness') {
    const mod = WILDERNESS_SCIENCE_MODULES[0];
    return {
      title: 'Outdoor Science & Wilderness Inquiry: Rule of Threes',
      subject: 'science',
      grade,
      framework: 'Experiential STEM: Human Biology & Physics of Survival',
      instructions: 'Rank and analyze the survival priorities based on the physiological Rule of Threes.',
      scenario: mod.scenario,
      problems: mod.prompts.map((p, idx) => ({
        id: `wild-${idx + 1}`,
        type: 'science-inquiry',
        number: idx + 1,
        prompt: `Priority #${p.priority}: What threat corresponds to "${p.timeframe}" without protection?`,
        options: ['Oxygen / Air', 'Shelter / Hypothermia', 'Water / Dehydration', 'Food / Energy'],
        answer: p.threat,
        action: p.action,
      })),
      cutStrip: null,
      answerKey: mod.prompts.map((p, idx) => ({
        number: idx + 1,
        solution: `Priority #${p.priority} (${p.timeframe}): ${p.threat} -> Required action: ${p.action}`,
      })),
    };
  }

  // Core Knowledge K Unit 2: Needs of Plants & Animals
  const unit = CORE_KNOWLEDGE_SCIENCE_K[1];
  const problems = unit.prompts.slice(0, count).map((item, idx) => ({
    id: `sci-${idx + 1}`,
    type: 'science-classification',
    number: idx + 1,
    item: item.item,
    question: `Is the "${item.item}" living or non-living? What does it need to grow?`,
    correctType: item.type,
    needs: item.needs,
  }));

  return {
    title: `Core Knowledge Science: ${unit.unit}`,
    subject: 'science',
    grade: 'K',
    framework: 'CKSci Strand & NGSS K-LS1-1 (Needs of Living Things)',
    instructions: 'Examine each item below. Determine whether it is Living or Non-Living, and identify what it needs.',
    scenario: unit.scenario,
    problems,
    cutStrip: {
      type: 'sorting-tokens',
      stage: 'Ages 4-5 (Living vs Non-Living)',
      items: ['Needs Water', 'Needs Sunlight', 'Uses Batteries', 'Needs Food'],
    },
    answerKey: problems.map((p) => ({
      number: p.number,
      solution: `${p.item}: ${p.correctType}. Requires: ${p.needs}.`,
    })),
  };
}
