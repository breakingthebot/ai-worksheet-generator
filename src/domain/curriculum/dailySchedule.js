// src/domain/curriculum/dailySchedule.js
// Complete 10-Day progressive curriculum tracks with word-for-word parent scripts and variant generators.
// Connects to: src/components/daily/DailyDashboard.jsx, src/data/worksheets.js
// Created: 2026-09-22

import { generateTenFrame } from '../math/tenFrame.js';
import { createNumberBond } from '../math/numberBonds.js';
import { getDecodableWords, generateNonsenseWords } from '../phonics/ogSequence.js';

export const DAILY_CURRICULUM = {
  // =========================================================================
  // MATHEMATICS TRACK (Days 1 to 10)
  // =========================================================================
  math: [
    {
      day: 1,
      title: 'Perceptual Subitizing (Quantities 1 to 3)',
      standard: 'CCSS.MATH.K.CC.B.4 & Subitizing Bedrock',
      script: {
        say: '“Look with your eyes, not your finger! How many dots do you see in one quick snapshot?”',
        do: 'Point to each box for only 2 seconds, then cover it up. Ask your child to tell you the quantity from memory.',
        lookFor: 'Does he name the number instantly (under 2 seconds)? If he points with his finger to count 1-2-3, he is not subitizing yet—stay on Day 1.',
      },
      generateSheet: (variant = 1) => {
        const counts = variant % 2 === 0 ? [2, 3, 1, 3] : [1, 3, 2, 1];
        return {
          id: `math-d1-v${variant}`,
          title: 'Math Day 1: Subitizing 1 to 3 (Flash Snapshot)',
          subject: 'math',
          grade: 'K',
          instructions: 'Look at the dots. Say how many dots you see in one quick glance without counting!',
          kidDirections: {
            text: '👀 Look with your eyes! 🔢 How many dots are in the box? ✏️ Write the number!',
            icons: ['👀', '🔢', '✏️'],
            badge: 'Day 1 Math',
          },
          problems: counts.map((c, i) => ({
            id: `p${i}`,
            type: 'ten-frame',
            number: i + 1,
            ...generateTenFrame(c),
          })),
          cutStrip: {
            type: 'straight-strips',
            stage: 'Ages 3-5 (Bottom-Edge Cut)',
            items: ['1 dot', '2 dots', '3 dots', '1 dot'],
          },
          answerKey: counts.map((c, i) => ({ number: i + 1, solution: `Quantity: ${c}` })),
        };
      },
    },
    {
      day: 2,
      title: 'Five-Frame Subitizing (Quantities 4 & 5)',
      standard: 'CCSS.MATH.K.CC.B.5 & Five-Structure Anchoring',
      script: {
        say: '“Look at the top row! If the whole top row is full, that means it is FIVE!”',
        do: 'Slide a piece of paper down to reveal one frame at a time. Ask: "Is it full (5) or missing one (4)?"',
        lookFor: 'Recognizes 5 instantly because the row is full, and 4 because exactly one corner is empty.',
      },
      generateSheet: (variant = 1) => {
        const counts = variant % 2 === 0 ? [4, 5, 4, 5] : [5, 4, 5, 4];
        return {
          id: `math-d2-v${variant}`,
          title: 'Math Day 2: Five-Frame Subitizing (4 and 5)',
          subject: 'math',
          grade: 'K',
          instructions: 'Check the top row. A full row is 5! Write the number of dots.',
          kidDirections: {
            text: '⭐ A full top row is FIVE! ✏️ Count the dots and write your answer!',
            icons: ['⭐', '✏️'],
            badge: 'Day 2 Math',
          },
          problems: counts.map((c, i) => ({
            id: `p${i}`,
            type: 'ten-frame',
            number: i + 1,
            ...generateTenFrame(c),
          })),
          cutStrip: {
            type: 'straight-strips',
            stage: 'Ages 3-5 (Bottom-Edge Cut)',
            items: ['4 dots', '5 dots', '4 dots', '5 dots'],
          },
          answerKey: counts.map((c, i) => ({ number: i + 1, solution: `Quantity: ${c}` })),
        };
      },
    },
    {
      day: 3,
      title: 'Ten-Frames: 6 and 7 (5 + 1 and 5 + 2)',
      standard: 'CCSS.MATH.K.OA.A.4 & Singapore CPA',
      script: {
        say: '“You already know the top row is 5. Now just look below: 5 and 1 is 6! 5 and 2 is 7!”',
        do: 'Have your child place their hand over the top row and say "5", then lift their hand and count the bottom dots.',
        lookFor: 'Says "5" without counting the top row, then counts on: "...6, 7!"',
      },
      generateSheet: (variant = 1) => {
        const counts = variant % 2 === 0 ? [6, 7, 6, 7] : [7, 6, 7, 6];
        return {
          id: `math-d3-v${variant}`,
          title: 'Math Day 3: Ten-Frames 6 and 7 (Counting On from 5)',
          subject: 'math',
          grade: 'K',
          instructions: 'Top row is 5. How many extra dots are below? Find the total!',
          kidDirections: {
            text: '🖐️ Top row is 5! ➕ Add the extra dots below to find how many in all!',
            icons: ['🖐️', '➕', '✏️'],
            badge: 'Day 3 Math',
          },
          problems: counts.map((c, i) => ({
            id: `p${i}`,
            type: 'ten-frame',
            number: i + 1,
            ...generateTenFrame(c),
          })),
          cutStrip: {
            type: 'straight-strips',
            stage: 'Ages 3-5 (Bottom-Edge Cut)',
            items: ['6 dots', '7 dots', '6 dots', '7 dots'],
          },
          answerKey: counts.map((c, i) => ({ number: i + 1, solution: `Total: ${c} (5 + ${c - 5})` })),
        };
      },
    },
    {
      day: 4,
      title: 'Ten-Frames: 8 and 9 (Noticing Empty Spaces)',
      standard: 'CCSS.MATH.K.OA.A.4 & Complements',
      script: {
        say: '“Almost full! Look at the empty boxes. How many are missing to make 10?”',
        do: 'Point to the empty spaces: "If 2 are empty, that means 8 are filled. If 1 is empty, that means 9!"',
        lookFor: 'Notices that 8 has 2 empty boxes and 9 has only 1 empty box.',
      },
      generateSheet: (variant = 1) => {
        const counts = variant % 2 === 0 ? [8, 9, 8, 9] : [9, 8, 9, 8];
        return {
          id: `math-d4-v${variant}`,
          title: 'Math Day 4: Ten-Frames 8 and 9 (Looking at Empty Boxes)',
          subject: 'math',
          grade: 'K',
          instructions: 'Count the dots and look at how many empty boxes are left to make 10.',
          kidDirections: {
            text: '🔍 Look at the empty spaces! ✏️ How many dots are there? How many more to make 10?',
            icons: ['🔍', '✏️'],
            badge: 'Day 4 Math',
          },
          problems: counts.map((c, i) => ({
            id: `p${i}`,
            type: 'ten-frame',
            number: i + 1,
            ...generateTenFrame(c),
          })),
          cutStrip: {
            type: 'straight-strips',
            stage: 'Ages 3-5 (Bottom-Edge Cut)',
            items: ['8 dots', '9 dots', '2 empty', '1 empty'],
          },
          answerKey: counts.map((c, i) => ({ number: i + 1, solution: `${c} filled + ${10 - c} empty = 10` })),
        };
      },
    },
    {
      day: 5,
      title: 'Ten-Frame Complements to 10 (Fact Families)',
      standard: 'CCSS.MATH.K.OA.A.4 & Base-10 Automaticity',
      script: {
        say: '“Let’s play the Make Ten Game! If I have 7 dots, how many more do we need to reach 10?”',
        do: 'Have your child fill in the equation: "7 + ___ = 10".',
        lookFor: 'Can state the missing complement (3) quickly without counting each empty square one-by-one.',
      },
      generateSheet: (variant = 1) => {
        const counts = variant % 2 === 0 ? [6, 8, 7, 9] : [7, 6, 9, 8];
        return {
          id: `math-d5-v${variant}`,
          title: 'Math Day 5: Complements to 10 Mastery Check',
          subject: 'math',
          grade: 'K',
          instructions: 'Complete the equation to make 10 for every ten-frame.',
          kidDirections: {
            text: '🎯 Make 10! ✏️ Write the equation for each box: Dots + Empty = 10!',
            icons: ['🎯', '✏️'],
            badge: 'Day 5 Math',
          },
          problems: counts.map((c, i) => ({
            id: `p${i}`,
            type: 'ten-frame',
            number: i + 1,
            ...generateTenFrame(c),
          })),
          cutStrip: null,
          answerKey: counts.map((c, i) => ({ number: i + 1, solution: `${c} + ${10 - c} = 10` })),
        };
      },
    },
    {
      day: 6,
      title: 'Number Bonds to 5 (Part-Whole Circles)',
      standard: 'CCSS.MATH.K.OA.A.3 & Singapore Math CPA',
      script: {
        say: '“The big circle at the top is the Whole family! The two bottom circles add together to make the whole!”',
        do: 'Use 5 coins or counters. Put 3 in one hand and 2 in the other. Show how they combine to make 5.',
        lookFor: 'Understands that parts combine to make the top circle.',
      },
      generateSheet: (variant = 1) => {
        const pairs = variant % 2 === 0 ? [[5, 3], [4, 2], [5, 4], [4, 1]] : [[5, 2], [4, 3], [5, 1], [3, 2]];
        return {
          id: `math-d6-v${variant}`,
          title: 'Math Day 6: Number Bonds to 5',
          subject: 'math',
          grade: 'K',
          instructions: 'Find the missing part in each number bond.',
          kidDirections: {
            text: '⭕ The top circle is the whole! ✏️ Find the missing friend in the bottom circle!',
            icons: ['⭕', '✏️'],
            badge: 'Day 6 Math',
          },
          problems: pairs.map(([w, pA], i) => ({
            id: `p${i}`,
            type: 'number-bond',
            number: i + 1,
            ...createNumberBond(w, pA, 'partB'),
          })),
          cutStrip: null,
          answerKey: pairs.map(([w, pA], i) => ({ number: i + 1, solution: `Missing: ${w - pA} (${pA} + ${w - pA} = ${w})` })),
        };
      },
    },
    {
      day: 7,
      title: 'Number Bonds to 7 (Finding the Missing Branch)',
      standard: 'CCSS.MATH.K.OA.A.3 & Part-Whole Reasoning',
      script: {
        say: '“Whole is 7! If one part is 5, what is the other part?”',
        do: 'Point to the whole, then point to part A. Ask: "What plus 5 gives 7?"',
        lookFor: 'Mentally solves 7 - 5 = 2 without getting confused about which circle is the whole.',
      },
      generateSheet: (variant = 1) => {
        const pairs = variant % 2 === 0 ? [[7, 5], [6, 4], [7, 3], [6, 2]] : [[7, 4], [7, 2], [6, 5], [7, 1]];
        return {
          id: `math-d7-v${variant}`,
          title: 'Math Day 7: Number Bonds to 7',
          subject: 'math',
          grade: 'K',
          instructions: 'Calculate the missing number for sums up to 7.',
          kidDirections: {
            text: '🔍 Find the missing number! ✏️ Write your answer in the empty circle!',
            icons: ['🔍', '✏️'],
            badge: 'Day 7 Math',
          },
          problems: pairs.map(([w, pA], i) => ({
            id: `p${i}`,
            type: 'number-bond',
            number: i + 1,
            ...createNumberBond(w, pA, 'partB'),
          })),
          cutStrip: null,
          answerKey: pairs.map(([w, pA], i) => ({ number: i + 1, solution: `Missing: ${w - pA} (${pA} + ${w - pA} = ${w})` })),
        };
      },
    },
    {
      day: 8,
      title: 'Number Bonds to 10 (Combinations that Make 10)',
      standard: 'CCSS.MATH.K.OA.A.4 & Singapore CPA',
      script: {
        say: '“Big challenge! Every whole number today is 10! What pairs make 10?”',
        do: 'Review the pairs: 9+1, 8+2, 7+3, 6+4, 5+5.',
        lookFor: 'Quickly names the complement to 10 without needing to count on fingers.',
      },
      generateSheet: (variant = 1) => {
        const pairs = variant % 2 === 0 ? [[10, 7], [10, 4], [10, 8], [10, 5]] : [[10, 6], [10, 3], [10, 9], [10, 2]];
        return {
          id: `math-d8-v${variant}`,
          title: 'Math Day 8: Number Bonds to 10',
          subject: 'math',
          grade: 'K',
          instructions: 'Complete each part-whole bond with whole equal to 10.',
          kidDirections: {
            text: '🔟 The top circle is TEN! ✏️ Fill in the missing partner to make 10!',
            icons: ['🔟', '✏️'],
            badge: 'Day 8 Math',
          },
          problems: pairs.map(([w, pA], i) => ({
            id: `p${i}`,
            type: 'number-bond',
            number: i + 1,
            ...createNumberBond(w, pA, 'partB'),
          })),
          cutStrip: null,
          answerKey: pairs.map(([w, pA], i) => ({ number: i + 1, solution: `Missing: ${w - pA} (${pA} + ${w - pA} = 10)` })),
        };
      },
    },
    {
      day: 9,
      title: 'Cut & Paste Math Sorting (Fine Motor & Fact Families)',
      standard: 'Pediatric Motor Progression & Fact Families',
      script: {
        say: '“Grab your safety scissors! Cut along the straight dashed line at the bottom, then paste each number where it fits!”',
        do: 'Remind him of "thumbs-up" scissor holding position. Only cut along the bottom strip.',
        lookFor: 'Holds scissors with thumb pointing up toward ceiling and cuts straight lines.',
      },
      generateSheet: (variant = 1) => {
        const pairs = [[6, 2], [8, 5], [7, 4], [9, 6]];
        return {
          id: `math-d9-v${variant}`,
          title: 'Math Day 9: Cut-and-Paste Fact Sorting',
          subject: 'math',
          grade: 'K',
          instructions: 'Cut the answer tiles along the bottom edge and paste them in the right circle.',
          kidDirections: {
            text: '✂️ Snip the numbers along the bottom line! 📋 Paste them into the right circle!',
            icons: ['✂️', '📋'],
            badge: 'Day 9 Math',
          },
          problems: pairs.map(([w, pA], i) => ({
            id: `p${i}`,
            type: 'number-bond',
            number: i + 1,
            ...createNumberBond(w, pA, 'partB'),
          })),
          cutStrip: {
            type: 'straight-strips',
            stage: 'Pediatric Motor Safe Cut (Ages 4-5)',
            items: ['4', '3', '3', '3'],
          },
          answerKey: pairs.map(([w, pA], i) => ({ number: i + 1, solution: `Missing: ${w - pA}` })),
        };
      },
    },
    {
      day: 10,
      title: 'Math Day 10: Mixed Review & Celebration Challenge',
      standard: 'CCSS.MATH.K.OA.A.4 Cumulative Review',
      script: {
        say: '“You made it to Day 10! Let’s show off how fast your brain can solve ten-frames and number bonds!”',
        do: 'Celebrate each completed problem with a high-five.',
        lookFor: 'Confidence and speed in switching between ten-frames and number bonds.',
      },
      generateSheet: (variant = 1) => ({
        id: `math-d10-v${variant}`,
        title: 'Math Day 10: Milestone Mastery Celebration',
        subject: 'math',
        grade: 'K',
        instructions: 'Solve the mixed ten-frame and number bond challenge!',
        kidDirections: {
          text: '🏆 Day 10 Champion! ✏️ Show what you know on ten-frames and number bonds!',
          icons: ['🏆', '✏️'],
          badge: 'Day 10 Math',
        },
        problems: [
          { id: 'p1', type: 'ten-frame', number: 1, ...generateTenFrame(8) },
          { id: 'p2', type: 'number-bond', number: 2, ...createNumberBond(10, 7, 'partB') },
          { id: 'p3', type: 'ten-frame', number: 3, ...generateTenFrame(6) },
          { id: 'p4', type: 'number-bond', number: 4, ...createNumberBond(8, 5, 'partB') },
        ],
        cutStrip: null,
        answerKey: [
          { number: 1, solution: '8 filled + 2 empty = 10' },
          { number: 2, solution: 'Missing part: 3 (7 + 3 = 10)' },
          { number: 3, solution: '6 filled + 4 empty = 10' },
          { number: 4, solution: 'Missing part: 3 (5 + 3 = 8)' },
        ],
      }),
    },
  ],

  // =========================================================================
  // PHONICS & READING TRACK (Days 1 to 10)
  // =========================================================================
  phonics: [
    {
      day: 1,
      title: 'Continuous Consonants /m/ and /s/',
      standard: 'CCSS.ELA-LITERACY.RF.K.1.D & Orton-Gillingham Phase 1',
      script: {
        say: '“Keep the sound going with your mouth! /mmmmmm/... /ssssss/! Do not add a \'uh\' at the end!”',
        do: 'Look in a mirror together. Notice lips closed for /m/, teeth gently touching for /s/.',
        lookFor: 'Produces continuous pure sounds without saying "muh" or "suh".',
      },
      generateSheet: (variant = 1) => ({
        id: `phonics-d1-v${variant}`,
        title: 'Phonics Day 1: Continuous Sounds /m/ and /s/',
        subject: 'phonics',
        grade: 'K',
        instructions: 'Practice saying the continuous sounds /m/ and /s/. Write the letters on the guidelines.',
        kidDirections: {
          text: '🗣️ Make the sound: /mmmm/ and /ssss/! ✏️ Trace and write the letters!',
          icons: ['🗣️', '✏️'],
          badge: 'Day 1 Phonics',
        },
        problems: [
          { id: 'p1', type: 'phonics-dictation', number: 1, word: 'm', phonemes: ['m'] },
          { id: 'p2', type: 'phonics-dictation', number: 2, word: 's', phonemes: ['s'] },
          { id: 'p3', type: 'phonics-dictation', number: 3, word: 'm', phonemes: ['m'] },
          { id: 'p4', type: 'phonics-dictation', number: 4, word: 's', phonemes: ['s'] },
        ],
        cutStrip: null,
        answerKey: [
          { number: 1, solution: 'Sound: /m/ (lips pressed, continuous)' },
          { number: 2, solution: 'Sound: /s/ (teeth gently together, hissing air)' },
          { number: 3, solution: 'Sound: /m/' },
          { number: 4, solution: 'Sound: /s/' },
        ],
      }),
    },
    {
      day: 2,
      title: 'Short /a/ and /t/ (First Blends: "at", "mat", "sat")',
      standard: 'CCSS.ELA-LITERACY.RF.K.2.D & Early Blending',
      script: {
        say: '“Let’s blend: /m/... /a/... /t/... MAT! Slide your finger across the letters as you say it fast!”',
        do: 'Tap each box, then slide your finger under the word to blend.',
        lookFor: 'Connects the sounds smoothly instead of saying isolated letters and guessing.',
      },
      generateSheet: (variant = 1) => ({
        id: `phonics-d2-v${variant}`,
        title: 'Phonics Day 2: Short /a/ Blends (mat, sat, at)',
        subject: 'phonics',
        grade: 'K',
        instructions: 'Tap the sound circles, blend the word, and write it on the handwriting lines.',
        kidDirections: {
          text: '👉 Tap each circle: /m/ - /a/ - /t/. 🏃 Say it fast: MAT! ✏️ Write the word!',
          icons: ['👉', '🏃', '✏️'],
          badge: 'Day 2 Phonics',
        },
        problems: [
          { id: 'p1', type: 'phonics-dictation', number: 1, word: 'mat', phonemes: ['m', 'a', 't'] },
          { id: 'p2', type: 'phonics-dictation', number: 2, word: 'sat', phonemes: ['s', 'a', 't'] },
          { id: 'p3', type: 'phonics-dictation', number: 3, word: 'at', phonemes: ['a', 't'] },
          { id: 'p4', type: 'phonics-dictation', number: 4, word: 'mat', phonemes: ['m', 'a', 't'] },
        ],
        cutStrip: {
          type: 'word-tiles',
          stage: 'Ages 4-6',
          items: ['mat', 'sat', 'at', 'mat'],
        },
        answerKey: [
          { number: 1, solution: 'M-A-T (/m/ /æ/ /t/)' },
          { number: 2, solution: 'S-A-T (/s/ /æ/ /t/)' },
          { number: 3, solution: 'A-T (/æ/ /t/)' },
          { number: 4, solution: 'M-A-T (/m/ /æ/ /t/)' },
        ],
      }),
    },
    {
      day: 3,
      title: 'Consonant /p/ ("pat", "tap", "map")',
      standard: 'CCSS.ELA-LITERACY.RF.K.2.D & CVC Phonics',
      script: {
        say: '“The letter P makes a soft pop sound: /p/! Feel the puff of air on your hand!”',
        do: 'Hold your hand in front of your mouth to feel the air burst on /p/.',
        lookFor: 'Does not add "uh" to make "puh". Keeps sound crisp.',
      },
      generateSheet: (variant = 1) => ({
        id: `phonics-d3-v${variant}`,
        title: 'Phonics Day 3: Adding /p/ (pat, tap, map)',
        subject: 'phonics',
        grade: 'K',
        instructions: 'Tap out each sound and write the word on the line.',
        kidDirections: {
          text: '💨 Feel the puff of air on /p/! ✏️ Blend and write your words!',
          icons: ['💨', '✏️'],
          badge: 'Day 3 Phonics',
        },
        problems: [
          { id: 'p1', type: 'phonics-dictation', number: 1, word: 'pat', phonemes: ['p', 'a', 't'] },
          { id: 'p2', type: 'phonics-dictation', number: 2, word: 'tap', phonemes: ['t', 'a', 'p'] },
          { id: 'p3', type: 'phonics-dictation', number: 3, word: 'map', phonemes: ['m', 'a', 'p'] },
          { id: 'p4', type: 'phonics-dictation', number: 4, word: 'pat', phonemes: ['p', 'a', 't'] },
        ],
        cutStrip: null,
        answerKey: [
          { number: 1, solution: 'P-A-T' },
          { number: 2, solution: 'T-A-P' },
          { number: 3, solution: 'M-A-P' },
          { number: 4, solution: 'P-A-T' },
        ],
      }),
    },
    {
      day: 4,
      title: 'Consonant /n/ ("pan", "tan", "man")',
      standard: 'CCSS.ELA-LITERACY.RF.K.2.D & Word Families',
      script: {
        say: '“Notice the -an word family! P-AN, T-AN, M-AN. They all rhyme!”',
        do: 'Point out how only the first letter changes while "-an" stays the same.',
        lookFor: 'Recognizes the rhyming pattern and blends -an automatically.',
      },
      generateSheet: (variant = 1) => ({
        id: `phonics-d4-v${variant}`,
        title: 'Phonics Day 4: -AN Family (pan, tan, man)',
        subject: 'phonics',
        grade: 'K',
        instructions: 'Read and write the -an rhyming family words.',
        kidDirections: {
          text: '🎵 Rhyme time! /p/ + an = PAN! ✏️ Write each rhyming word!',
          icons: ['🎵', '✏️'],
          badge: 'Day 4 Phonics',
        },
        problems: [
          { id: 'p1', type: 'phonics-dictation', number: 1, word: 'pan', phonemes: ['p', 'a', 'n'] },
          { id: 'p2', type: 'phonics-dictation', number: 2, word: 'tan', phonemes: ['t', 'a', 'n'] },
          { id: 'p3', type: 'phonics-dictation', number: 3, word: 'man', phonemes: ['m', 'a', 'n'] },
          { id: 'p4', type: 'phonics-dictation', number: 4, word: 'pan', phonemes: ['p', 'a', 'n'] },
        ],
        cutStrip: null,
        answerKey: [
          { number: 1, solution: 'P-A-N' },
          { number: 2, solution: 'T-A-N' },
          { number: 3, solution: 'M-A-N' },
          { number: 4, solution: 'P-A-N' },
        ],
      }),
    },
    {
      day: 5,
      title: 'Hard /c/ & Nonsense Word Challenge ("cat", "cap", "can")',
      standard: 'CCSS.ELA-LITERACY.RF.K.2.D & Nonsense Decoding',
      script: {
        say: '“Today we read real words AND silly alien words! Use your sounds: does D-A-P make sense? It is silly!”',
        do: 'Encourage him to laugh at the nonsense words while decoding them accurately.',
        lookFor: 'Does not try to turn "dap" into "dad" or "dog"—decodes the exact letters printed.',
      },
      generateSheet: (variant = 1) => ({
        id: `phonics-d5-v${variant}`,
        title: 'Phonics Day 5: Hard /c/ and Nonsense Word Challenge',
        subject: 'phonics',
        grade: 'K',
        instructions: 'Write the C words and decode the silly alien words at the bottom!',
        kidDirections: {
          text: '🐱 C makes /k/! 👽 Read the silly alien words at the bottom!',
          icons: ['🐱', '👽', '✏️'],
          badge: 'Day 5 Phonics',
        },
        problems: [
          { id: 'p1', type: 'phonics-dictation', number: 1, word: 'cat', phonemes: ['c', 'a', 't'] },
          { id: 'p2', type: 'phonics-dictation', number: 2, word: 'cap', phonemes: ['c', 'a', 'p'] },
          { id: 'p3', type: 'phonics-dictation', number: 3, word: 'can', phonemes: ['c', 'a', 'n'] },
          { id: 'p4', type: 'phonics-dictation', number: 4, word: 'cat', phonemes: ['c', 'a', 't'] },
        ],
        nonsenseDrill: {
          instructions: 'Silly Alien Words (Read with your sounds):',
          words: ['dap', 'zat', 'vab'],
        },
        cutStrip: null,
        answerKey: [
          { number: 1, solution: 'C-A-T' },
          { number: 2, solution: 'C-A-P' },
          { number: 3, solution: 'C-A-N' },
          { number: 4, solution: 'C-A-T' },
        ],
      }),
    },
    // Days 6-10 Short vowels progression (o, i, u, e, mixed review)
    {
      day: 6,
      title: 'Short /o/ CVC Words ("mop", "pot", "top", "not")',
      standard: 'CCSS.ELA-LITERACY.RF.K.2.D & Short Vowel O',
      script: {
        say: '“Open your mouth wide like an oval: /o/! M-O-P spells MOP!”',
        do: 'Check mouth shape: jaw drops open wide for /o/.',
        lookFor: 'Distinguishes short /o/ from short /a/.',
      },
      generateSheet: (variant = 1) => ({
        id: `phonics-d6-v${variant}`,
        title: 'Phonics Day 6: Short /o/ Words (mop, pot, top)',
        subject: 'phonics',
        grade: 'K',
        instructions: 'Tap out each sound with short /o/ and write the words.',
        kidDirections: {
          text: '⭕ Open wide for /o/! ✏️ Tap and write your words!',
          icons: ['⭕', '✏️'],
          badge: 'Day 6 Phonics',
        },
        problems: [
          { id: 'p1', type: 'phonics-dictation', number: 1, word: 'mop', phonemes: ['m', 'o', 'p'] },
          { id: 'p2', type: 'phonics-dictation', number: 2, word: 'pot', phonemes: ['p', 'o', 't'] },
          { id: 'p3', type: 'phonics-dictation', number: 3, word: 'top', phonemes: ['t', 'o', 'p'] },
          { id: 'p4', type: 'phonics-dictation', number: 4, word: 'not', phonemes: ['n', 'o', 't'] },
        ],
        cutStrip: null,
        answerKey: [
          { number: 1, solution: 'M-O-P' },
          { number: 2, solution: 'P-O-T' },
          { number: 3, solution: 'T-O-P' },
          { number: 4, solution: 'N-O-T' },
        ],
      }),
    },
    {
      day: 7,
      title: 'Short /i/ CVC Words ("sit", "pin", "tip", "pit")',
      standard: 'CCSS.ELA-LITERACY.RF.K.2.D & Short Vowel I',
      script: {
        say: '“Smile with your mouth: /i/ like an icky insect! S-I-T spells SIT!”',
        do: 'Smile when making the /i/ sound so vocal cords stay crisp.',
        lookFor: 'Does not confuse short /e/ and short /i/.',
      },
      generateSheet: (variant = 1) => ({
        id: `phonics-d7-v${variant}`,
        title: 'Phonics Day 7: Short /i/ Words (sit, pin, tip)',
        subject: 'phonics',
        grade: 'K',
        instructions: 'Practice smiling short /i/ words.',
        kidDirections: {
          text: '😁 Smile for /i/! ✏️ Blend and write: S-I-T spells SIT!',
          icons: ['😁', '✏️'],
          badge: 'Day 7 Phonics',
        },
        problems: [
          { id: 'p1', type: 'phonics-dictation', number: 1, word: 'sit', phonemes: ['s', 'i', 't'] },
          { id: 'p2', type: 'phonics-dictation', number: 2, word: 'pin', phonemes: ['p', 'i', 'n'] },
          { id: 'p3', type: 'phonics-dictation', number: 3, word: 'tip', phonemes: ['t', 'i', 'p'] },
          { id: 'p4', type: 'phonics-dictation', number: 4, word: 'pit', phonemes: ['p', 'i', 't'] },
        ],
        cutStrip: null,
        answerKey: [
          { number: 1, solution: 'S-I-T' },
          { number: 2, solution: 'P-I-N' },
          { number: 3, solution: 'T-I-P' },
          { number: 4, solution: 'P-I-T' },
        ],
      }),
    },
    {
      day: 8,
      title: 'Short /u/ CVC Words ("sun", "cup", "nut", "rug")',
      standard: 'CCSS.ELA-LITERACY.RF.K.2.D & Short Vowel U',
      script: {
        say: '“Sound /u/ like pushing up an umbrella: /u/ /u/ /u/! S-U-N spells SUN!”',
        do: 'Point thumb up when saying /u/.',
        lookFor: 'Produces guttural /u/ cleanly without nasal distortion.',
      },
      generateSheet: (variant = 1) => ({
        id: `phonics-d8-v${variant}`,
        title: 'Phonics Day 8: Short /u/ Words (sun, cup, nut)',
        subject: 'phonics',
        grade: 'K',
        instructions: 'Read and write short /u/ words.',
        kidDirections: {
          text: '☂️ /u/ like umbrella! ✏️ Tap and write your words!',
          icons: ['☂️', '✏️'],
          badge: 'Day 8 Phonics',
        },
        problems: [
          { id: 'p1', type: 'phonics-dictation', number: 1, word: 'sun', phonemes: ['s', 'u', 'n'] },
          { id: 'p2', type: 'phonics-dictation', number: 2, word: 'cup', phonemes: ['c', 'u', 'p'] },
          { id: 'p3', type: 'phonics-dictation', number: 3, word: 'nut', phonemes: ['n', 'u', 't'] },
          { id: 'p4', type: 'phonics-dictation', number: 4, word: 'rug', phonemes: ['r', 'u', 'g'] },
        ],
        cutStrip: null,
        answerKey: [
          { number: 1, solution: 'S-U-N' },
          { number: 2, solution: 'C-U-P' },
          { number: 3, solution: 'N-U-T' },
          { number: 4, solution: 'R-U-G' },
        ],
      }),
    },
    {
      day: 9,
      title: 'Short /e/ CVC Words ("bed", "red", "net", "pet")',
      standard: 'CCSS.ELA-LITERACY.RF.K.2.D & Short Vowel E',
      script: {
        say: '“Short /e/ like an egg in an eggcup: /e/! B-E-D spells BED!”',
        do: 'Make an open chin shape for /e/.',
        lookFor: 'Accurately distinguishes /e/ from /a/.',
      },
      generateSheet: (variant = 1) => ({
        id: `phonics-d9-v${variant}`,
        title: 'Phonics Day 9: Short /e/ Words (bed, red, net)',
        subject: 'phonics',
        grade: 'K',
        instructions: 'Read and write short /e/ words.',
        kidDirections: {
          text: '🥚 /e/ like egg! ✏️ Tap the circles and write the words!',
          icons: ['🥚', '✏️'],
          badge: 'Day 9 Phonics',
        },
        problems: [
          { id: 'p1', type: 'phonics-dictation', number: 1, word: 'bed', phonemes: ['b', 'e', 'd'] },
          { id: 'p2', type: 'phonics-dictation', number: 2, word: 'red', phonemes: ['r', 'e', 'd'] },
          { id: 'p3', type: 'phonics-dictation', number: 3, word: 'net', phonemes: ['n', 'e', 't'] },
          { id: 'p4', type: 'phonics-dictation', number: 4, word: 'pet', phonemes: ['p', 'e', 't'] },
        ],
        cutStrip: null,
        answerKey: [
          { number: 1, solution: 'B-E-D' },
          { number: 2, solution: 'R-E-D' },
          { number: 3, solution: 'N-E-T' },
          { number: 4, solution: 'P-E-T' },
        ],
      }),
    },
    {
      day: 10,
      title: 'Phonics Day 10: All 5 Short Vowels Grand Review',
      standard: 'CCSS.ELA-LITERACY.RF.K.2.D & Comprehensive Orthographic Mapping',
      script: {
        say: '“You know all 5 short vowels now: A, E, I, O, U! Let’s show how you can decode ANY 3-letter word!”',
        do: 'Celebrate completion with a sticker or high-five.',
        lookFor: 'Effortless switching between different middle vowel sounds.',
      },
      generateSheet: (variant = 1) => ({
        id: `phonics-d10-v${variant}`,
        title: 'Phonics Day 10: 5-Vowel Grand Champion Review',
        subject: 'phonics',
        grade: 'K',
        instructions: 'Read and write words with all 5 short vowels (A, E, I, O, U)!',
        kidDirections: {
          text: '🌟 Phonics Star! ✏️ Tap and write words with A, E, I, O, and U!',
          icons: ['🌟', '✏️'],
          badge: 'Day 10 Phonics',
        },
        problems: [
          { id: 'p1', type: 'phonics-dictation', number: 1, word: 'cat', phonemes: ['c', 'a', 't'] },
          { id: 'p2', type: 'phonics-dictation', number: 2, word: 'mop', phonemes: ['m', 'o', 'p'] },
          { id: 'p3', type: 'phonics-dictation', number: 3, word: 'sit', phonemes: ['s', 'i', 't'] },
          { id: 'p4', type: 'phonics-dictation', number: 4, word: 'sun', phonemes: ['s', 'u', 'n'] },
        ],
        cutStrip: null,
        answerKey: [
          { number: 1, solution: 'C-A-T (short a)' },
          { number: 2, solution: 'M-O-P (short o)' },
          { number: 3, solution: 'S-I-T (short i)' },
          { number: 4, solution: 'S-U-N (short u)' },
        ],
      }),
    },
  ],

  // =========================================================================
  // SCIENCE & NATURE TRACK (Days 1 to 10)
  // =========================================================================
  science: [
    {
      day: 1,
      title: 'Living vs. Non-Living: The 3 Rules (Eat, Drink, Grow)',
      standard: 'NGSS K-LS1-1 & Core Knowledge Science',
      script: {
        say: '“Everything in the world is living or non-living! Ask the 3 questions: Does it drink water? Does it eat? Does it grow?”',
        do: 'Point to a pet or houseplant: "Is this living?" Point to a chair: "Is this living?"',
        lookFor: 'Explains why something is alive using biological needs, not just movement.',
      },
      generateSheet: (variant = 1) => ({
        id: `sci-d1-v${variant}`,
        title: 'Science Day 1: Living vs. Non-Living Discovery',
        subject: 'science',
        grade: 'K',
        instructions: 'Check Living or Non-Living for each item.',
        kidDirections: {
          text: '🌱 Living things need food, water, and grow! ✏️ Check the right box for each picture!',
          icons: ['🌱', '✏️'],
          badge: 'Day 1 Science',
        },
        problems: [
          { id: 'p1', type: 'science-classification', number: 1, item: 'Baby Oak Tree Seedling' },
          { id: 'p2', type: 'science-classification', number: 2, item: 'Toy Plastic Car' },
          { id: 'p3', type: 'science-classification', number: 3, item: 'Playful Kitten' },
          { id: 'p4', type: 'science-classification', number: 4, item: 'River Rock' },
        ],
        cutStrip: null,
        answerKey: [
          { number: 1, solution: 'Oak Tree: Living (Needs water, soil, sunlight)' },
          { number: 2, solution: 'Toy Car: Non-Living (Does not eat or grow)' },
          { number: 3, solution: 'Kitten: Living (Needs food, water, air)' },
          { number: 4, solution: 'Rock: Non-Living (Does not need food)' },
        ],
      }),
    },
    {
      day: 2,
      title: 'What Seeds Need to Sprout',
      standard: 'NGSS K-LS1-1 & Plant Biology',
      script: {
        say: '“A tiny seed is asleep! What does it need to wake up and grow into a big plant?”',
        do: 'Wet a paper towel and examine an apple or bean seed together.',
        lookFor: 'Identifies sunlight and water as essential for growth.',
      },
      generateSheet: (variant = 1) => ({
        id: `sci-d2-v${variant}`,
        title: 'Science Day 2: What Seeds Need to Sprout',
        subject: 'science',
        grade: 'K',
        instructions: 'Circle the items a seed needs to grow into a plant.',
        kidDirections: {
          text: '🌻 Seeds are amazing! ✏️ Circle what a seed needs to grow tall!',
          icons: ['🌻', '✏️'],
          badge: 'Day 2 Science',
        },
        problems: [
          {
            id: 'p1',
            type: 'science-inquiry',
            number: 1,
            prompt: 'What does a little seed need from the sky to make food?',
            options: ['Bright Sunlight', 'Ice Cream', 'Candy', 'Toy Truck'],
          },
          {
            id: 'p2',
            type: 'science-inquiry',
            number: 2,
            prompt: 'What falls from rain clouds that plants drink through their roots?',
            options: ['Water', 'Soda', 'Paint', 'Milk'],
          },
        ],
        cutStrip: null,
        answerKey: [
          { number: 1, solution: 'Bright Sunlight' },
          { number: 2, solution: 'Water' },
        ],
      }),
    },
    {
      day: 3,
      title: 'Animal Coverings (Fur, Feathers, Scales)',
      standard: 'NGSS K-ESS3-1 & Zoology',
      script: {
        say: '“Animals wear special coats to survive in the wild! Birds wear feathers, bears wear thick fur, fish wear shiny scales!”',
        do: 'Touch a faux-fur blanket or feather to talk about textures.',
        lookFor: 'Correctly pairs animal with its protective covering.',
      },
      generateSheet: (variant = 1) => ({
        id: `sci-d3-v${variant}`,
        title: 'Science Day 3: Animal Coats (Fur, Feathers, Scales)',
        subject: 'science',
        grade: 'K',
        instructions: 'Match each wild animal to its protective coat.',
        kidDirections: {
          text: '🐻 Animals have coats! ✏️ Match the animal to fur, feathers, or scales!',
          icons: ['🐻', '✏️'],
          badge: 'Day 3 Science',
        },
        problems: [
          {
            id: 'p1',
            type: 'science-inquiry',
            number: 1,
            prompt: 'What coat keeps an eagle warm in the high sky?',
            options: ['Light Feathers', 'Plastic wrapper', 'Fur coat', 'Metal armor'],
          },
          {
            id: 'p2',
            type: 'science-inquiry',
            number: 2,
            prompt: 'What coat keeps a polar bear warm in freezing ice and snow?',
            options: ['Thick Warm Fur', 'Feathers', 'Paper', 'Silk'],
          },
        ],
        cutStrip: null,
        answerKey: [
          { number: 1, solution: 'Light Feathers' },
          { number: 2, solution: 'Thick Warm Fur' },
        ],
      }),
    },
    {
      day: 4,
      title: 'Daily Weather Tracking & Pattern Recognition',
      standard: 'NGSS K-ESS2-1 & Earth Science',
      script: {
        say: '“Let’s look out the window! Is it sunny, cloudy, or rainy today? What clothes do we wear?”',
        do: 'Step outside or check window: check thermometer or wind.',
        lookFor: 'Connects weather with appropriate clothing (umbrella for rain, jacket for cold).',
      },
      generateSheet: (variant = 1) => ({
        id: `sci-d4-v${variant}`,
        title: 'Science Day 4: Weather Forecaster Investigation',
        subject: 'science',
        grade: 'K',
        instructions: 'Look at the weather forecast and answer the questions.',
        kidDirections: {
          text: '☀️ Look out the window! ✏️ What weather gear do you need today?',
          icons: ['☀️', '🌧️', '✏️'],
          badge: 'Day 4 Science',
        },
        problems: [
          {
            id: 'p1',
            type: 'science-inquiry',
            number: 1,
            prompt: 'When dark clouds bring rain, what should an explorer take?',
            options: ['Raincoat & Boots', 'Sunglasses', 'Swimsuit', 'Roller skates'],
          },
          {
            id: 'p2',
            type: 'science-inquiry',
            number: 2,
            prompt: 'When bright yellow sun is shining, what protects your eyes?',
            options: ['Sunglasses / Sunhat', 'Heavy winter parka', 'Snow shovel', 'Umbrella'],
          },
        ],
        cutStrip: null,
        answerKey: [
          { number: 1, solution: 'Raincoat & Boots' },
          { number: 2, solution: 'Sunglasses / Sunhat' },
        ],
      }),
    },
    {
      day: 5,
      title: 'Wilderness Survival: The Rule of Threes',
      standard: 'Applied Science: Physiological Threats',
      script: {
        say: '“Wilderness explorers have one supreme rule: 3 minutes without air, 3 hours without shelter in freezing cold, 3 days without water!”',
        do: 'Count to 3 together. Emphasize that freezing cold is dangerous way faster than being hungry.',
        lookFor: 'Ranks shelter from freezing weather ahead of food.',
      },
      generateSheet: (variant = 1) => ({
        id: `sci-d5-v${variant}`,
        title: 'Science Day 5: Wilderness Rule of Threes',
        subject: 'science',
        grade: 'K',
        instructions: 'Learn the survival priorities of the Rule of Threes.',
        kidDirections: {
          text: '🌲 Forest explorer! ✏️ Circle the emergency threat for each time!',
          icons: ['🌲', '✏️'],
          badge: 'Day 5 Science',
        },
        problems: [
          {
            id: 'p1',
            type: 'science-inquiry',
            number: 1,
            prompt: 'Priority #1: What happens after 3 Minutes without air?',
            options: ['Cannot breathe', 'Bored', 'Hungry', 'Sleepy'],
          },
          {
            id: 'p2',
            type: 'science-inquiry',
            number: 2,
            prompt: 'Priority #2: What happens after 3 Hours in freezing snow?',
            options: ['Dangerously cold (Hypothermia)', 'Thirsty', 'Tired legs', 'Empty stomach'],
          },
        ],
        cutStrip: null,
        answerKey: [
          { number: 1, solution: 'Cannot breathe (Air is #1)' },
          { number: 2, solution: 'Dangerously cold / Hypothermia (Shelter is #2)' },
        ],
      }),
    },
    // Days 6-10 Wilderness water, Pushes & Pulls, Five Senses, Tech
    {
      day: 6,
      title: 'Wilderness Water: Finding & Filtering Clean Water',
      standard: 'Earth Science & Environmental Filtration',
      script: {
        say: '“In nature, river water can have tiny germs! Explorers must always filter and boil water before drinking!”',
        do: 'Talk about why we never drink straight from muddy puddles.',
        lookFor: 'Understands why water must be purified.',
      },
      generateSheet: (variant = 1) => ({
        id: `sci-d6-v${variant}`,
        title: 'Science Day 6: Clean Water in the Wilderness',
        subject: 'science',
        grade: 'K',
        instructions: 'Discover how explorers find and filter clean water.',
        kidDirections: {
          text: '💧 Water is life! ✏️ Which water is safe for an explorer to drink?',
          icons: ['💧', '✏️'],
          badge: 'Day 6 Science',
        },
        problems: [
          {
            id: 'p1',
            type: 'science-inquiry',
            number: 1,
            prompt: 'Is water from a muddy puddle safe to drink right away?',
            options: ['No, it needs filtering & boiling', 'Yes, drink it all', 'Only if cold', 'Only at night'],
          },
        ],
        cutStrip: null,
        answerKey: [{ number: 1, solution: 'No, it needs filtering & boiling' }],
      }),
    },
    {
      day: 7,
      title: 'Pushes and Pulls: Forces and Movement',
      standard: 'NGSS K-PS2-1 & Physics of Motion',
      script: {
        say: '“To make a toy move, you have to Push it away or Pull it toward you! A gentle push moves it slowly; a hard push makes it zoom!”',
        do: 'Push a toy car across the table. Then pull a wagon or string.',
        lookFor: 'Correctly identifies whether an action is a Push or a Pull.',
      },
      generateSheet: (variant = 1) => ({
        id: `sci-d7-v${variant}`,
        title: 'Science Day 7: Pushes and Pulls in Motion',
        subject: 'science',
        grade: 'K',
        instructions: 'Determine whether each action is a Push or a Pull.',
        kidDirections: {
          text: '🚗 PUSH moves away! 🛒 PULL brings closer! ✏️ Write Push or Pull!',
          icons: ['🚗', '🛒', '✏️'],
          badge: 'Day 7 Science',
        },
        problems: [
          {
            id: 'p1',
            type: 'science-inquiry',
            number: 1,
            prompt: 'Opening a refrigerator door toward your body is a...',
            options: ['PULL', 'PUSH', 'JUMP', 'ROLL'],
          },
          {
            id: 'p2',
            type: 'science-inquiry',
            number: 2,
            prompt: 'Kicking a soccer ball across the grass is a...',
            options: ['PUSH', 'PULL', 'FREEZE', 'DROP'],
          },
        ],
        cutStrip: null,
        answerKey: [
          { number: 1, solution: 'PULL (brings toward body)' },
          { number: 2, solution: 'PUSH (moves away)' },
        ],
      }),
    },
    {
      day: 8,
      title: 'Our Five Senses: Sight and Sound',
      standard: 'Core Knowledge Science Unit 5 (Human Biology)',
      script: {
        say: '“Our eyes give us sight and our ears give us hearing! Close your eyes: what sounds do you hear right now?”',
        do: 'Sit quietly for 10 seconds with eyes closed to count sounds.',
        lookFor: 'Connects ears to hearing and eyes to sight.',
      },
      generateSheet: (variant = 1) => ({
        id: `sci-d8-v${variant}`,
        title: 'Science Day 8: Senses of Sight and Hearing',
        subject: 'science',
        grade: 'K',
        instructions: 'Match the body organ to what it senses.',
        kidDirections: {
          text: '👀 Eyes see colors! 👂 Ears hear sounds! ✏️ Match the senses!',
          icons: ['👀', '👂', '✏️'],
          badge: 'Day 8 Science',
        },
        problems: [
          {
            id: 'p1',
            type: 'science-inquiry',
            number: 1,
            prompt: 'Which organ hears a bird singing in the tree?',
            options: ['Ears', 'Eyes', 'Nose', 'Elbow'],
          },
          {
            id: 'p2',
            type: 'science-inquiry',
            number: 2,
            prompt: 'Which organ sees the bright colors of a rainbow?',
            options: ['Eyes', 'Feet', 'Ears', 'Fingers'],
          },
        ],
        cutStrip: null,
        answerKey: [
          { number: 1, solution: 'Ears' },
          { number: 2, solution: 'Eyes' },
        ],
      }),
    },
    {
      day: 9,
      title: 'Our Five Senses: Touch, Smell & Taste',
      standard: 'Core Knowledge Science Unit 5',
      script: {
        say: '“Your hands feel textures: rough tree bark or soft cat fur. Your nose smells pine needles!”',
        do: 'Touch two different surfaces (e.g. carpet vs smooth table).',
        lookFor: 'Uses descriptive words (soft, rough, smooth, sweet, sour).',
      },
      generateSheet: (variant = 1) => ({
        id: `sci-d9-v${variant}`,
        title: 'Science Day 9: Touch, Smell, and Taste',
        subject: 'science',
        grade: 'K',
        instructions: 'Identify which sense explores different textures and tastes.',
        kidDirections: {
          text: '✋ Skin feels textures! 👃 Nose smells flowers! ✏️ Answer the questions!',
          icons: ['✋', '👃', '✏️'],
          badge: 'Day 9 Science',
        },
        problems: [
          {
            id: 'p1',
            type: 'science-inquiry',
            number: 1,
            prompt: 'Which sense tells you that a puppy is soft and fluffy?',
            options: ['Touch / Skin', 'Hearing', 'Smell', 'Taste'],
          },
        ],
        cutStrip: null,
        answerKey: [{ number: 1, solution: 'Touch / Skin' }],
      }),
    },
    {
      day: 10,
      title: 'Science Day 10: Junior Scientist Certificate Challenge',
      standard: 'Core Knowledge & NGSS Review',
      script: {
        say: '“You are officially a Junior Scientist! You know living things, animal coats, forces, and survival science!”',
        do: 'Draw a gold star or award the printed sheet proudly.',
        lookFor: 'Enthusiasm and recall of key science ideas.',
      },
      generateSheet: (variant = 1) => ({
        id: `sci-d10-v${variant}`,
        title: 'Science Day 10: Junior Scientist Challenge',
        subject: 'science',
        grade: 'K',
        instructions: 'Demonstrate your scientific knowledge to earn your Junior Scientist badge!',
        kidDirections: {
          text: '🔬 Junior Scientist! ✏️ Answer the final science questions!',
          icons: ['🔬', '✏️', '🏆'],
          badge: 'Day 10 Science',
        },
        problems: [
          { id: 'p1', type: 'science-classification', number: 1, item: 'Wild Pine Tree' },
          { id: 'p2', type: 'science-classification', number: 2, item: 'Metal Toy Spoon' },
        ],
        cutStrip: null,
        answerKey: [
          { number: 1, solution: 'Pine Tree: Living' },
          { number: 2, solution: 'Metal Spoon: Non-Living' },
        ],
      }),
    },
  ],
};

/**
 * Retrieves the lesson object for a given subject and day number.
 * @param {'math'|'phonics'|'science'} subject 
 * @param {number} dayNumber (1 to 10)
 * @returns {object}
 */
export function getDailyLesson(subject, dayNumber) {
  const track = DAILY_CURRICULUM[subject] || DAILY_CURRICULUM.math;
  const safeDay = Math.max(1, Math.min(10, dayNumber));
  return track.find((d) => d.day === safeDay) || track[0];
}
