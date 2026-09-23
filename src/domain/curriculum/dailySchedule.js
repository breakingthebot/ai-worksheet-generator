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
    // -------------------------------------------------------------------------
    // DAY 1: One-to-One Counting & Perceptual Subitizing (1 to 3)
    // -------------------------------------------------------------------------
    {
      day: 1,
      title: 'One-to-One Counting & Subitizing (Quantities 1 to 3)',
      standard: 'CCSS.MATH.CONTENT.K.CC.B.4.A & K.CC.B.4.B (Touch-Count & Cardinality)',
      strictBoundary: 'Strictly one-to-one touch counting (1 to 3). No addition or subtraction equations.',
      script: {
        say: '“Touch each red apple with your pointer finger: 1, 2, 3! How many apples are there in all?”',
        do: 'Guide your child to physically tap each object once with their finger. Ensure their voice matches each touch.',
        lookFor: 'Does your child tap each object once without rushing or skipping? The last number named tells the total quantity.',
      },
      generateSheet: (variant = 1) => {
        const configs =
          variant % 2 === 0
            ? [
                { id: 'p1', count: 2, icon: '🍎', label: 'Apples' },
                { id: 'p2', count: 3, icon: '⭐', label: 'Stars' },
                { id: 'p3', count: 1, icon: '🐶', label: 'Puppies' },
                { id: 'p4', count: 3, icon: '🚗', label: 'Cars' },
              ]
            : [
                { id: 'p1', count: 1, icon: '🍎', label: 'Apples' },
                { id: 'p2', count: 3, icon: '⭐', label: 'Stars' },
                { id: 'p3', count: 2, icon: '🐶', label: 'Puppies' },
                { id: 'p4', count: 1, icon: '🚗', label: 'Cars' },
              ];

        return {
          id: `math-d1-v${variant}`,
          title: 'Math Day 1: One-to-One Counting (Quantities 1 to 3)',
          subject: 'math',
          grade: 'K',
          instructions: 'Touch each object with your finger as you count. Write the total number in the box!',
          kidDirections: {
            text: '👉 Touch each object with your finger! 🗣️ Count out loud: 1, 2, 3! ✏️ Write the number!',
            icons: ['👉', '🗣️', '✏️'],
            badge: 'Day 1 Math Bedrock',
          },
          problems: configs.map((c, i) => ({
            id: c.id,
            type: 'counting-objects',
            number: i + 1,
            count: c.count,
            itemIcon: c.icon,
            prompt: `Touch each ${c.label.toLowerCase()} and count out loud:`,
            subtext: 'Touch each item once. The last number you say is the total!',
          })),
          cutStrip: {
            type: 'straight-strips',
            stage: 'Ages 3-5 (Bottom-Edge Cut)',
            items: ['1 item', '2 items', '3 items', 'Touch & Count!'],
          },
          answerKey: configs.map((c, i) => ({
            number: i + 1,
            solution: `Total: ${c.count} ${c.label}`,
          })),
        };
      },
    },

    // -------------------------------------------------------------------------
    // DAY 2: Five-Frame Subitizing & Numeral Formation (Quantities 1 to 5)
    // -------------------------------------------------------------------------
    {
      day: 2,
      title: 'Five-Frame Subitizing & Numeral Formation (Quantities 1 to 5)',
      standard: 'CCSS.MATH.CONTENT.K.CC.A.3 & K.CC.B.5 (Five-Frame Array)',
      strictBoundary: 'Five-frame arrays (1 to 5). No complements or double-row ten-frames yet.',
      script: {
        say: '“Look at our 5-frame train! Each box gets one dot. If the whole top row is full, that means FIVE!”',
        do: 'Slide your hand across the 5-frame from left to right. Ask: "Is it full (5) or missing some dots?"',
        lookFor: 'Recognizes 5 instantly when the frame is full, and 4 because exactly one corner cell is empty.',
      },
      generateSheet: (variant = 1) => {
        const counts = variant % 2 === 0 ? [3, 5, 4, 2] : [2, 4, 3, 5];
        return {
          id: `math-d2-v${variant}`,
          title: 'Math Day 2: Five-Frame Dot Patterns (1 to 5)',
          subject: 'math',
          grade: 'K',
          instructions: 'Count the dots in each 5-frame. A completely full frame is 5! Write the number.',
          kidDirections: {
            text: '⭐ A full row is FIVE! ✏️ Count the dots and write the number in the box!',
            icons: ['⭐', '✏️', '🔢'],
            badge: 'Day 2 Math',
          },
          problems: counts.map((c, i) => ({
            id: `p${i}`,
            type: 'ten-frame',
            promptType: 'counting',
            number: i + 1,
            ...generateTenFrame(c),
            subtext: c === 5 ? '⭐ All 5 spaces full!' : undefined,
          })),
          cutStrip: {
            type: 'straight-strips',
            stage: 'Ages 3-5 (Bottom-Edge Cut)',
            items: ['2 dots', '3 dots', '4 dots', '5 dots!'],
          },
          answerKey: counts.map((c, i) => ({ number: i + 1, solution: `Quantity: ${c}` })),
        };
      },
    },

    // -------------------------------------------------------------------------
    // DAY 3: Successive Quantities & "One More" (Counting On 1 to 5)
    // -------------------------------------------------------------------------
    {
      day: 3,
      title: 'Successive Quantities & "One More" (Counting On 1 to 5)',
      standard: 'CCSS.MATH.CONTENT.K.CC.B.4.C (Each successive number is one larger)',
      strictBoundary: 'Successive "+1 more" counting on (1 to 5). No multi-step operations.',
      script: {
        say: '“Every time we count up, we add ONE MORE! If we have 3 stars and get 1 more, how many do we have now?”',
        do: 'Point to the objects, count them, then point to the "+1 More" box: "3 and one more is... 4!"',
        lookFor: 'States the next number without needing to restart counting from 1. Grasps the "one more" rule.',
      },
      generateSheet: (variant = 1) => {
        const configs =
          variant % 2 === 0
            ? [
                { count: 2, icon: '🚗', label: 'Cars' },
                { count: 3, icon: '🌲', label: 'Trees' },
                { count: 4, icon: '🎈', label: 'Balloons' },
                { count: 1, icon: '🌸', label: 'Flowers' },
              ]
            : [
                { count: 1, icon: '🚗', label: 'Cars' },
                { count: 2, icon: '🌲', label: 'Trees' },
                { count: 3, icon: '🎈', label: 'Balloons' },
                { count: 4, icon: '🌸', label: 'Flowers' },
              ];

        return {
          id: `math-d3-v${variant}`,
          title: 'Math Day 3: Adding "One More" (Successive Numbers)',
          subject: 'math',
          grade: 'K',
          instructions: 'Count the items, then add one more! How many items do you have now?',
          kidDirections: {
            text: '🔢 Count the items! ➕ Add ONE MORE! ✏️ Write the new number!',
            icons: ['🔢', '➕', '✏️'],
            badge: 'Day 3 Math',
          },
          problems: configs.map((c, i) => ({
            id: `p${i}`,
            type: 'counting-objects',
            number: i + 1,
            count: c.count,
            itemIcon: c.icon,
            showPlusOne: true,
            prompt: `There are ${c.count} ${c.label.toLowerCase()}. Add 1 more!`,
            subtext: `What is 1 more than ${c.count}?`,
          })),
          cutStrip: {
            type: 'straight-strips',
            stage: 'Ages 3-5 (Bottom-Edge Cut)',
            items: ['1 more = 2', '1 more = 3', '1 more = 4', '1 more = 5'],
          },
          answerKey: configs.map((c, i) => ({
            number: i + 1,
            solution: `${c.count} + 1 more = ${c.count + 1}`,
          })),
        };
      },
    },

    // -------------------------------------------------------------------------
    // DAY 4: Comparing Sets: Which Group has MORE? (Quantities 1 to 5)
    // -------------------------------------------------------------------------
    {
      day: 4,
      title: 'Comparing Sets: Which Group has MORE? (Quantities 1 to 5)',
      standard: 'CCSS.MATH.CONTENT.K.CC.C.6 (Identify greater quantity by matching/counting)',
      strictBoundary: 'Comparing sets (Which has MORE?). Quantities within 5 only.',
      script: {
        say: '“Look at Group A and Group B! Count each group, then circle the group that has MORE!”',
        do: 'Have your child draw matching lines between items in Group A and Group B. The group with leftover items has MORE!',
        lookFor: 'Understands that "MORE" means the bigger quantity. Can prove it by counting both groups.',
      },
      generateSheet: (variant = 1) => {
        const pairs =
          variant % 2 === 0
            ? [
                { ga: 4, gb: 2, icon: '🍎', label: 'Apples' },
                { ga: 3, gb: 5, icon: '🐟', label: 'Fish' },
                { ga: 2, gb: 4, icon: '🐸', label: 'Frogs' },
                { ga: 5, gb: 3, icon: '⭐', label: 'Stars' },
              ]
            : [
                { ga: 3, gb: 1, icon: '🍎', label: 'Apples' },
                { ga: 2, gb: 5, icon: '🐟', label: 'Fish' },
                { ga: 5, gb: 4, icon: '🐸', label: 'Frogs' },
                { ga: 1, gb: 4, icon: '⭐', label: 'Stars' },
              ];

        return {
          id: `math-d4-v${variant}`,
          title: 'Math Day 4: Comparing Sets (Which has MORE?)',
          subject: 'math',
          grade: 'K',
          instructions: 'Count the items in Group A and Group B. Circle the group that has MORE items!',
          kidDirections: {
            text: '🔍 Count Group A! 🔍 Count Group B! ⭕ Circle the group that has MORE!',
            icons: ['🔍', '⭕', '⭐'],
            badge: 'Day 4 Math',
          },
          problems: pairs.map((p, i) => ({
            id: `p${i}`,
            type: 'quantity-comparison',
            number: i + 1,
            comparisonQuestion: 'Which group has MORE?',
            groupA: { count: p.ga, icon: p.icon, label: 'Group A' },
            groupB: { count: p.gb, icon: p.icon, label: 'Group B' },
            prompt: `Count both groups of ${p.label.toLowerCase()}. Which group has MORE?`,
          })),
          cutStrip: {
            type: 'straight-strips',
            stage: 'Ages 3-5 (Bottom-Edge Cut)',
            items: ['Group A: MORE', 'Group B: MORE', 'Group B: MORE', 'Group A: MORE'],
          },
          answerKey: pairs.map((p, i) => ({
            number: i + 1,
            solution: p.ga > p.gb ? `Group A has MORE (${p.ga} > ${p.gb})` : `Group B has MORE (${p.gb} > ${p.ga})`,
          })),
        };
      },
    },

    // -------------------------------------------------------------------------
    // DAY 5: Comparing Sets: Which Group has FEWER? (Quantities 1 to 5 & Equal)
    // -------------------------------------------------------------------------
    {
      day: 5,
      title: 'Comparing Sets: Which Group has FEWER? (Quantities 1 to 5 & Equal)',
      standard: 'CCSS.MATH.CONTENT.K.CC.C.6 (Identify less than / fewer & equal)',
      strictBoundary: 'Comparing sets (Which has FEWER / Equal). No inequality symbols (< or >).',
      script: {
        say: '“Yesterday we found MORE. Today we are looking for FEWER! Which group has less?”',
        do: 'Remind your child: "Fewer means the smaller group." Point out that when both groups have the exact same count, they are EQUAL!',
        lookFor: 'Distinguishes "fewer" from "more" without confusion. Recognizes equal quantities.',
      },
      generateSheet: (variant = 1) => {
        const pairs =
          variant % 2 === 0
            ? [
                { ga: 2, gb: 5, icon: '🎈', label: 'Balloons' },
                { ga: 4, gb: 1, icon: '🍪', label: 'Cookies' },
                { ga: 3, gb: 3, icon: '🦆', label: 'Ducks', equal: true },
                { ga: 5, gb: 2, icon: '🌰', label: 'Acorns' },
              ]
            : [
                { ga: 1, gb: 4, icon: '🎈', label: 'Balloons' },
                { ga: 3, gb: 5, icon: '🍪', label: 'Cookies' },
                { ga: 2, gb: 2, icon: '🦆', label: 'Ducks', equal: true },
                { ga: 4, gb: 2, icon: '🌰', label: 'Acorns' },
              ];

        return {
          id: `math-d5-v${variant}`,
          title: 'Math Day 5: Comparing Sets (Which has FEWER?)',
          subject: 'math',
          grade: 'K',
          instructions: 'Count both groups. Circle the group with FEWER items. If they have the same, circle Equal!',
          kidDirections: {
            text: '🔍 Count both groups! ⭕ Circle the group with FEWER items (or Equal)!',
            icons: ['🔍', '⭕', '🍪'],
            badge: 'Day 5 Math',
          },
          problems: pairs.map((p, i) => ({
            id: `p${i}`,
            type: 'quantity-comparison',
            number: i + 1,
            allowEqual: true,
            comparisonQuestion: 'Which group has FEWER?',
            groupA: { count: p.ga, icon: p.icon, label: 'Group A' },
            groupB: { count: p.gb, icon: p.icon, label: 'Group B' },
            prompt: `Count both groups of ${p.label.toLowerCase()}. Which group has FEWER?`,
          })),
          cutStrip: {
            type: 'straight-strips',
            stage: 'Ages 3-5 (Bottom-Edge Cut)',
            items: ['Group A: FEWER', 'Group B: FEWER', 'EQUAL! (=)', 'Group B: FEWER'],
          },
          answerKey: pairs.map((p, i) => ({
            number: i + 1,
            solution:
              p.ga === p.gb
                ? `EQUAL (${p.ga} = ${p.gb})`
                : p.ga < p.gb
                ? `Group A has FEWER (${p.ga} < ${p.gb})`
                : `Group B has FEWER (${p.gb} < ${p.ga})`,
          })),
        };
      },
    },

    // -------------------------------------------------------------------------
    // DAY 6: Ten-Frame Introduction: Quantities 6 & 7 (5 and Some More)
    // -------------------------------------------------------------------------
    {
      day: 6,
      title: 'Ten-Frame Introduction: Quantities 6 & 7 (5 and Some More)',
      standard: 'CCSS.MATH.CONTENT.K.CC.B.5 & Singapore CPA (Ten-Frames 6 & 7)',
      strictBoundary: 'Ten-frame quantities 6 and 7 (5 + some more). No operations beyond 7.',
      script: {
        say: '“Our 5-frame grew into a TEN-FRAME! The top row is always 5. How many extra dots are below? 5 and 1 is 6! 5 and 2 is 7!”',
        do: 'Have your child place their hand over the top row and say "5", then lift their hand and count the bottom dots.',
        lookFor: 'Says "5" automatically for the top row without counting, then counts on: "...6, 7!"',
      },
      generateSheet: (variant = 1) => {
        const counts = variant % 2 === 0 ? [6, 7, 6, 7] : [7, 6, 7, 6];
        return {
          id: `math-d6-v${variant}`,
          title: 'Math Day 6: Ten-Frames 6 and 7 (5 and Some More)',
          subject: 'math',
          grade: 'K',
          instructions: 'The top row is 5. Count the extra dots on the bottom to find the total!',
          kidDirections: {
            text: '🖐️ Top row is 5! ➕ Count on: 5... 6, 7! ✏️ Write the total in the box!',
            icons: ['🖐️', '➕', '✏️'],
            badge: 'Day 6 Math',
          },
          problems: counts.map((c, i) => ({
            id: `p${i}`,
            type: 'ten-frame',
            promptType: 'counting',
            number: i + 1,
            ...generateTenFrame(c),
            subtext: `Top row is 5. Extra bottom dots: ${c - 5}`,
          })),
          cutStrip: {
            type: 'straight-strips',
            stage: 'Ages 3-5 (Bottom-Edge Cut)',
            items: ['5 + 1 = 6', '5 + 2 = 7', '6 dots', '7 dots'],
          },
          answerKey: counts.map((c, i) => ({
            number: i + 1,
            solution: `Total: ${c} (5 top + ${c - 5} bottom)`,
          })),
        };
      },
    },

    // -------------------------------------------------------------------------
    // DAY 7: Ten-Frame Quantities 8 & 9 (Noticing Empty Spaces)
    // -------------------------------------------------------------------------
    {
      day: 7,
      title: 'Ten-Frame Quantities 8 & 9 (Noticing the Empty Spaces)',
      standard: 'CCSS.MATH.CONTENT.K.CC.B.5 & Landmark Benchmark',
      strictBoundary: 'Ten-frame quantities 8 and 9 (focus on 1 or 2 empty spaces). No formal addition sentences.',
      script: {
        say: '“Look at how full this ten-frame is! If there are 2 empty boxes, that means 8 dots! If only 1 box is empty, that means 9!”',
        do: 'Point to the empty spaces: "If 2 are empty, 8 are full. If 1 is empty, 9 are full!"',
        lookFor: 'Notices the empty spaces and uses the landmark 10 to identify 8 and 9.',
      },
      generateSheet: (variant = 1) => {
        const counts = variant % 2 === 0 ? [8, 9, 8, 9] : [9, 8, 9, 8];
        return {
          id: `math-d7-v${variant}`,
          title: 'Math Day 7: Ten-Frames 8 and 9 (Looking at Empty Spaces)',
          subject: 'math',
          grade: 'K',
          instructions: 'Count the dots! Notice how many empty spaces are left to reach 10.',
          kidDirections: {
            text: '🔍 Look at the empty spaces! ✏️ How many dots are filled in the frame?',
            icons: ['🔍', '✏️', '🔟'],
            badge: 'Day 7 Math',
          },
          problems: counts.map((c, i) => ({
            id: `p${i}`,
            type: 'ten-frame',
            promptType: 'counting',
            number: i + 1,
            ...generateTenFrame(c),
            subtext: `Hint: ${10 - c} empty ${10 - c === 1 ? 'box' : 'boxes'} remaining`,
          })),
          cutStrip: {
            type: 'straight-strips',
            stage: 'Ages 3-5 (Bottom-Edge Cut)',
            items: ['8 dots (2 empty)', '9 dots (1 empty)', '8 dots', '9 dots'],
          },
          answerKey: counts.map((c, i) => ({
            number: i + 1,
            solution: `Total: ${c} dots (${10 - c} empty spaces)`,
          })),
        };
      },
    },

    // -------------------------------------------------------------------------
    // DAY 8: The Landmark Number 10 (Full Ten-Frame & Cardinality)
    // -------------------------------------------------------------------------
    {
      day: 8,
      title: 'The Landmark Number 10 (Full Ten-Frame & Cardinality)',
      standard: 'CCSS.MATH.CONTENT.K.CC.A.3 & K.CC.B.5 (Numeral 10 Benchmark)',
      strictBoundary: 'Full ten-frame benchmark (Quantity 10). Numeral 10 formation only; no teen numbers (11+).',
      script: {
        say: '“Every single box is full! 5 on top and 5 on bottom makes TEN! Numeral 10 has two digits: a 1 and a 0!”',
        do: 'Hold up all 10 fingers. Count fingers 1 to 10, then show how the full ten-frame holds all 10 dots.',
        lookFor: 'Instantly recognizes 10 when all boxes are filled. Writes numeral 10 correctly with 1 first, then 0.',
      },
      generateSheet: (variant = 1) => {
        const counts = variant % 2 === 0 ? [10, 9, 10, 8] : [10, 8, 10, 9];
        return {
          id: `math-d8-v${variant}`,
          title: 'Math Day 8: The Landmark Number 10 (Full Ten-Frame)',
          subject: 'math',
          grade: 'K',
          instructions: 'Check each frame! If every single box is full, the answer is 10!',
          kidDirections: {
            text: '🔟 All boxes full is TEN! ✏️ Write the number 10 (a 1 and a 0)!',
            icons: ['🔟', '✏️', '⭐'],
            badge: 'Day 8 Math',
          },
          problems: counts.map((c, i) => ({
            id: `p${i}`,
            type: 'ten-frame',
            promptType: 'counting',
            number: i + 1,
            ...generateTenFrame(c),
            subtext: c === 10 ? '⭐ Completely full ten-frame = 10!' : undefined,
          })),
          cutStrip: {
            type: 'straight-strips',
            stage: 'Ages 3-5 (Bottom-Edge Cut)',
            items: ['10 Full!', '9 dots', '10 Full!', '8 dots'],
          },
          answerKey: counts.map((c, i) => ({
            number: i + 1,
            solution: c === 10 ? '10 (Full ten-frame)' : `${c} dots`,
          })),
        };
      },
    },

    // -------------------------------------------------------------------------
    // DAY 9: Number Comparison: Greater vs. Less (Numerals 1 to 10)
    // -------------------------------------------------------------------------
    {
      day: 9,
      title: 'Numeral Comparison: Greater vs. Less (Numbers 1 to 10)',
      standard: 'CCSS.MATH.CONTENT.K.CC.C.7 (Compare two written numerals 1 to 10)',
      strictBoundary: 'Direct numeral comparison 1 to 10 (greater vs less). No abstract <, >, = symbols.',
      script: {
        say: '“Now you are comparing real written numbers like a big kid! Look at 4 and 8. Which number is greater?”',
        do: 'If your child hesitates, refer back to ten-frames: "Which number would fill more boxes in our frame?"',
        lookFor: 'Compares numerals directly without needing to draw dots for each number.',
      },
      generateSheet: (variant = 1) => {
        const pairs =
          variant % 2 === 0
            ? [
                { a: 4, b: 8, greater: 8 },
                { a: 7, b: 3, greater: 7 },
                { a: 9, b: 5, greater: 9 },
                { a: 2, b: 6, greater: 6 },
              ]
            : [
                { a: 3, b: 7, greater: 7 },
                { a: 8, b: 5, greater: 8 },
                { a: 6, b: 9, greater: 9 },
                { a: 1, b: 5, greater: 5 },
              ];

        return {
          id: `math-d9-v${variant}`,
          title: 'Math Day 9: Comparing Written Numbers (1 to 10)',
          subject: 'math',
          grade: 'K',
          instructions: 'Look at each number pair. Circle the GREATER (bigger) number in each box!',
          kidDirections: {
            text: '🔢 Look at the two numbers! ⭕ Circle the GREATER (bigger) number!',
            icons: ['🔢', '⭕', '⭐'],
            badge: 'Day 9 Math',
          },
          problems: pairs.map((p, i) => ({
            id: `p${i}`,
            type: 'numeral-comparison',
            number: i + 1,
            numA: p.a,
            numB: p.b,
            prompt: `Which number is GREATER: ${p.a} or ${p.b}?`,
            subtext: `Draw a circle around ${p.greater}!`,
          })),
          cutStrip: {
            type: 'straight-strips',
            stage: 'Ages 3-5 (Bottom-Edge Cut)',
            items: [`${pairs[0].greater} is greater`, `${pairs[1].greater} is greater`, `${pairs[2].greater} is greater`, `${pairs[3].greater} is greater`],
          },
          answerKey: pairs.map((p, i) => ({
            number: i + 1,
            solution: `${p.greater} is greater than ${p.greater === p.a ? p.b : p.a}`,
          })),
        };
      },
    },

    // -------------------------------------------------------------------------
    // DAY 10: Kindergarten Quarter 1 Grand Champion Review
    // -------------------------------------------------------------------------
    {
      day: 10,
      title: 'Quarter 1 Math Grand Champion Review & Mastery Check',
      standard: 'CCSS.MATH.CONTENT.K.CC Cumulative Mastery Review',
      strictBoundary: 'Review of counting, ten-frames, and numeral comparison 1-10. No multi-digit or addition operations.',
      script: {
        say: '“Congratulations on Day 10! Today is your Grand Champion Counting Challenge! Show how fast you can count, read ten-frames, and compare numbers!”',
        do: 'Give your child a high-five before starting! Cheer for each completed section.',
        lookFor: 'Confident, independent counting, quick ten-frame recognition, and clear numeral writing.',
      },
      generateSheet: (variant = 1) => ({
        id: `math-d10-v${variant}`,
        title: 'Math Day 10: Quarter 1 Grand Champion Review',
        subject: 'math',
        grade: 'K',
        instructions: 'Complete the Grand Champion counting and comparison challenge!',
        kidDirections: {
          text: '🏆 Day 10 Grand Champion! ✏️ Show all your amazing counting and number skills!',
          icons: ['🏆', '✏️', '⭐'],
          badge: 'Day 10 Math Champion',
        },
        problems: [
          {
            id: 'p1',
            type: 'counting-objects',
            number: 1,
            count: 5,
            itemIcon: '🍎',
            prompt: 'Touch each apple and count out loud:',
            subtext: 'Write the number of apples in the box!',
          },
          {
            id: 'p2',
            type: 'ten-frame',
            promptType: 'counting',
            number: 2,
            ...generateTenFrame(7),
            subtext: 'Top row is 5. 5 and 2 is...?',
          },
          {
            id: 'p3',
            type: 'quantity-comparison',
            number: 3,
            comparisonQuestion: 'Which group has MORE?',
            groupA: { count: 4, icon: '🐟', label: 'Group A' },
            groupB: { count: 2, icon: '🐟', label: 'Group B' },
            prompt: 'Which group has MORE fish: Group A (4) or Group B (2)?',
          },
          {
            id: 'p4',
            type: 'numeral-comparison',
            number: 4,
            numA: 10,
            numB: 6,
            prompt: 'Which number is GREATER: 10 or 6?',
            subtext: 'Circle the full ten-frame number (10)!',
          },
        ],
        cutStrip: {
          type: 'straight-strips',
          stage: 'Ages 3-5 (Bottom-Edge Cut)',
          items: ['⭐ Math Star', 'Counting Champion', '10 Days Complete!', '🏆'],
        },
        answerKey: [
          { number: 1, solution: '5 apples' },
          { number: 2, solution: '7 dots (5 top + 2 bottom)' },
          { number: 3, solution: 'Group A has MORE (4 > 2)' },
          { number: 4, solution: '10 is greater than 6' },
        ],
      }),
    },

    // -------------------------------------------------------------------------
    // DAY 11: Part-Whole Number Bonds to 3 & 4 (Singapore CPA Method)
    // -------------------------------------------------------------------------
    {
      day: 11,
      title: 'Part-Whole Number Bonds to 3 & 4 (Singapore CPA Method)',
      standard: 'CCSS.MATH.CONTENT.K.OA.A.3 & Singapore Math CPA (Part-Whole Bonds 3 & 4)',
      strictBoundary: 'Part-whole decomposition of 3 and 4 using visual number bonds. No formal written + or = symbols yet.',
      script: {
        say: '“Look at this number bond! The big circle is the WHOLE, and the two branches are the PARTS! If we have 3 cookies in all, 1 goes here and 2 go there! 1 and 2 make 3!”',
        do: 'Place 3 small objects on the table. Move 1 to the left and 2 to the right to physically show how 3 splits into two parts.',
        lookFor: 'Understands that the two parts combine to make the whole. Fills in the missing part circle accurately.',
      },
      generateSheet: (variant = 1) => ({
        id: `math-d11-v${variant}`,
        title: 'Math Day 11: Part-Whole Number Bonds (3 & 4)',
        subject: 'math',
        grade: 'K',
        instructions: 'Look at the whole and the parts! Write the missing number in the blank circle.',
        kidDirections: {
          text: '🔵 The top circle is the WHOLE! ⚪⚪ The bottom circles are the PARTS! ✏️ Fill in the missing part!',
          icons: ['🔵', '⚪', '✏️'],
          badge: 'Day 11 Math Bonds',
        },
        problems: [
          { id: 'p1', type: 'number-bond', number: 1, ...createNumberBond(3, 1, 'partB') },
          { id: 'p2', type: 'number-bond', number: 2, ...createNumberBond(3, 2, 'partA') },
          { id: 'p3', type: 'number-bond', number: 3, ...createNumberBond(4, 2, 'partB') },
          { id: 'p4', type: 'number-bond', number: 4, ...createNumberBond(4, 1, 'partB') },
        ],
        cutStrip: {
          type: 'straight-strips',
          stage: 'Ages 3-5 (Bottom-Edge Cut)',
          items: ['1 and 2 make 3', '2 and 1 make 3', '2 and 2 make 4', '1 and 3 make 4'],
        },
        answerKey: [
          { number: 1, solution: 'Missing part: 2 (1 + 2 = 3)' },
          { number: 2, solution: 'Missing part: 2 (2 + 1 = 3)' },
          { number: 3, solution: 'Missing part: 2 (2 + 2 = 4)' },
          { number: 4, solution: 'Missing part: 3 (1 + 3 = 4)' },
        ],
      }),
    },

    // -------------------------------------------------------------------------
    // DAY 12: Part-Whole Number Bonds to 5 ("All the Ways to Make 5")
    // -------------------------------------------------------------------------
    {
      day: 12,
      title: 'Part-Whole Number Bonds to 5 ("All the Ways to Make 5")',
      standard: 'CCSS.MATH.CONTENT.K.OA.A.3 (Decompose 5 into pairs)',
      strictBoundary: 'Decomposing 5 into part-whole pairs (1+4, 2+3, 3+2, 4+1). No sums greater than 5.',
      script: {
        say: '“Show me all 5 fingers on one hand! Tuck 1 finger down—how many are standing? 4! So 1 and 4 make 5! What if you tuck 2 fingers down?”',
        do: 'Use hand fingers: 5 is the whole. Fold down different fingers to find all partner numbers that make 5.',
        lookFor: 'Recognizes finger pairs for 5 (4 and 1, 3 and 2) without restarting from 1.',
      },
      generateSheet: (variant = 1) => ({
        id: `math-d12-v${variant}`,
        title: 'Math Day 12: Ways to Make 5 (Number Bonds)',
        subject: 'math',
        grade: 'K',
        instructions: 'Find the missing partner number that makes 5!',
        kidDirections: {
          text: '🖐️ 5 is the WHOLE! ✏️ Write the missing partner number in the blank circle!',
          icons: ['🖐️', '✏️', '⭐'],
          badge: 'Day 12 Math Bonds',
        },
        problems: [
          { id: 'p1', type: 'number-bond', number: 1, ...createNumberBond(5, 1, 'partB') },
          { id: 'p2', type: 'number-bond', number: 2, ...createNumberBond(5, 2, 'partB') },
          { id: 'p3', type: 'number-bond', number: 3, ...createNumberBond(5, 3, 'partA') },
          { id: 'p4', type: 'number-bond', number: 4, ...createNumberBond(5, 4, 'partB') },
        ],
        cutStrip: {
          type: 'straight-strips',
          stage: 'Ages 3-5 (Bottom-Edge Cut)',
          items: ['1 + 4 = 5', '2 + 3 = 5', '3 + 2 = 5', '4 + 1 = 5'],
        },
        answerKey: [
          { number: 1, solution: 'Missing part: 4 (1 + 4 = 5)' },
          { number: 2, solution: 'Missing part: 3 (2 + 3 = 5)' },
          { number: 3, solution: 'Missing part: 2 (2 + 3 = 5)' },
          { number: 4, solution: 'Missing part: 1 (4 + 1 = 5)' },
        ],
      }),
    },

    // -------------------------------------------------------------------------
    // DAY 13: Composing & Decomposing 6 (5-Structure Anchoring)
    // -------------------------------------------------------------------------
    {
      day: 13,
      title: 'Composing & Decomposing 6 (5-Structure Anchoring)',
      standard: 'CCSS.MATH.CONTENT.K.OA.A.3 & Ten-Frame 5-Structure',
      strictBoundary: 'Decomposing 6 anchored in 5 (5 + 1 = 6, 3 + 3 = 6). No sums greater than 6.',
      script: {
        say: '“Remember: the top row of a ten-frame is always 5! 5 and 1 more makes 6! What if we split 6 into two equal teams? 3 and 3!”',
        do: 'Have your child show a full 5-frame plus 1 more dot on the bottom row to visualize 5 + 1.',
        lookFor: 'Identifies 5 and 1 as the primary visual anchor for 6. Recognizes double 3.',
      },
      generateSheet: (variant = 1) => ({
        id: `math-d13-v${variant}`,
        title: 'Math Day 13: Composing 6 (5 and 1 More)',
        subject: 'math',
        grade: 'K',
        instructions: 'Complete the number bonds for 6! Top row is 5.',
        kidDirections: {
          text: '🖐️ 5 and 1 is 6! 3 and 3 is 6! ✏️ Find the missing part!',
          icons: ['🖐️', '✏️', '🔢'],
          badge: 'Day 13 Math',
        },
        problems: [
          { id: 'p1', type: 'number-bond', number: 1, ...createNumberBond(6, 5, 'partB') },
          { id: 'p2', type: 'number-bond', number: 2, ...createNumberBond(6, 3, 'partB') },
          { id: 'p3', type: 'number-bond', number: 3, ...createNumberBond(6, 2, 'partA') },
          { id: 'p4', type: 'number-bond', number: 4, ...createNumberBond(6, 4, 'partB') },
        ],
        cutStrip: {
          type: 'straight-strips',
          stage: 'Ages 3-5 (Bottom-Edge Cut)',
          items: ['5 + 1 = 6', '3 + 3 = 6', '4 + 2 = 6', '2 + 4 = 6'],
        },
        answerKey: [
          { number: 1, solution: 'Missing part: 1 (5 + 1 = 6)' },
          { number: 2, solution: 'Missing part: 3 (3 + 3 = 6)' },
          { number: 3, solution: 'Missing part: 4 (4 + 2 = 6)' },
          { number: 4, solution: 'Missing part: 2 (4 + 2 = 6)' },
        ],
      }),
    },

    // -------------------------------------------------------------------------
    // DAY 14: Composing & Decomposing 7 (5 + 2 and Pairs)
    // -------------------------------------------------------------------------
    {
      day: 14,
      title: 'Composing & Decomposing 7 (5 + 2 and Pairs)',
      standard: 'CCSS.MATH.CONTENT.K.OA.A.3 (Decompose 7 into pairs)',
      strictBoundary: 'Decomposing 7 into part-whole pairs (5+2, 4+3, 6+1). No sums greater than 7.',
      script: {
        say: '“7 is 5 on top and 2 on the bottom! Or we can make 7 with 4 and 3! Let’s find the missing part in each number bond!”',
        do: 'Trace the branches from 7 down into the two parts. Count on: 5... 6, 7!',
        lookFor: 'Understands that 5 and 2 make 7, and 4 and 3 make 7.',
      },
      generateSheet: (variant = 1) => ({
        id: `math-d14-v${variant}`,
        title: 'Math Day 14: Composing 7 (5 and 2 More)',
        subject: 'math',
        grade: 'K',
        instructions: 'Decompose 7 into parts! Find the missing number in each bond.',
        kidDirections: {
          text: '7️⃣ Whole is 7! ✏️ Fill in the missing number bond circle!',
          icons: ['7️⃣', '✏️', '⭐'],
          badge: 'Day 14 Math',
        },
        problems: [
          { id: 'p1', type: 'number-bond', number: 1, ...createNumberBond(7, 5, 'partB') },
          { id: 'p2', type: 'number-bond', number: 2, ...createNumberBond(7, 4, 'partB') },
          { id: 'p3', type: 'number-bond', number: 3, ...createNumberBond(7, 2, 'partA') },
          { id: 'p4', type: 'number-bond', number: 4, ...createNumberBond(7, 1, 'partB') },
        ],
        cutStrip: {
          type: 'straight-strips',
          stage: 'Ages 3-5 (Bottom-Edge Cut)',
          items: ['5 + 2 = 7', '4 + 3 = 7', '6 + 1 = 7', '7 in All!'],
        },
        answerKey: [
          { number: 1, solution: 'Missing part: 2 (5 + 2 = 7)' },
          { number: 2, solution: 'Missing part: 3 (4 + 3 = 7)' },
          { number: 3, solution: 'Missing part: 5 (5 + 2 = 7)' },
          { number: 4, solution: 'Missing part: 6 (1 + 6 = 7)' },
        ],
      }),
    },

    // -------------------------------------------------------------------------
    // DAY 15: Composing & Decomposing 8 (Double 4 and Ten-Frame Complements)
    // -------------------------------------------------------------------------
    {
      day: 15,
      title: 'Composing & Decomposing 8 (Double 4 & Complements)',
      standard: 'CCSS.MATH.CONTENT.K.OA.A.3 (Decompose 8 into pairs)',
      strictBoundary: 'Decomposing 8 into part-whole pairs (5+3, 4+4 doubles, 6+2). No sums greater than 8.',
      script: {
        say: '“8 is a double! 4 and 4 make 8! Also 5 and 3 make 8! Notice how 8 leaves 2 empty spaces on our 10-frame!”',
        do: 'Show 4 fingers on each hand: bring hands together: 4 and 4 is 8!',
        lookFor: 'Recognizes double 4 as 8, and visualizes 2 empty spots on the ten-frame.',
      },
      generateSheet: (variant = 1) => ({
        id: `math-d15-v${variant}`,
        title: 'Math Day 15: Decomposing 8 (Double 4 & Pairs)',
        subject: 'math',
        grade: 'K',
        instructions: 'Break 8 into parts! 4 and 4 is double 8.',
        kidDirections: {
          text: '🎱 8 is 4 + 4! 8 is 5 + 3! ✏️ Find the missing part in each bond!',
          icons: ['🎱', '✏️', '🔢'],
          badge: 'Day 15 Math',
        },
        problems: [
          { id: 'p1', type: 'number-bond', number: 1, ...createNumberBond(8, 4, 'partB') },
          { id: 'p2', type: 'number-bond', number: 2, ...createNumberBond(8, 5, 'partB') },
          { id: 'p3', type: 'number-bond', number: 3, ...createNumberBond(8, 6, 'partA') },
          { id: 'p4', type: 'number-bond', number: 4, ...createNumberBond(8, 2, 'partB') },
        ],
        cutStrip: {
          type: 'straight-strips',
          stage: 'Ages 3-5 (Bottom-Edge Cut)',
          items: ['4 + 4 = 8', '5 + 3 = 8', '6 + 2 = 8', '8 in All!'],
        },
        answerKey: [
          { number: 1, solution: 'Missing part: 4 (4 + 4 = 8)' },
          { number: 2, solution: 'Missing part: 3 (5 + 3 = 8)' },
          { number: 3, solution: 'Missing part: 2 (2 + 6 = 8)' },
          { number: 4, solution: 'Missing part: 6 (2 + 6 = 8)' },
        ],
      }),
    },

    // -------------------------------------------------------------------------
    // DAY 16: Composing & Decomposing 9 (5 + 4 & "One Away from 10")
    // -------------------------------------------------------------------------
    {
      day: 16,
      title: 'Composing & Decomposing 9 (5 + 4 & "One Away from 10")',
      standard: 'CCSS.MATH.CONTENT.K.OA.A.3 (Decompose 9 into pairs)',
      strictBoundary: 'Decomposing 9 into part-whole pairs (5+4, 8+1, 6+3). Focus on being 1 away from 10.',
      script: {
        say: '“9 is almost a full ten-frame—only ONE box is empty! 9 is 5 and 4, or 8 and 1! What part is missing?”',
        do: 'Point out that 9 is just 1 dot less than 10.',
        lookFor: 'Identifies 9 as 5 and 4, or 8 and 1.',
      },
      generateSheet: (variant = 1) => ({
        id: `math-d16-v${variant}`,
        title: 'Math Day 16: Decomposing 9 (One Away from 10)',
        subject: 'math',
        grade: 'K',
        instructions: 'Break 9 into parts! Notice how close 9 is to 10.',
        kidDirections: {
          text: '9️⃣ Whole is 9! ✏️ Fill in the missing partner number!',
          icons: ['9️⃣', '✏️', '⭐'],
          badge: 'Day 16 Math',
        },
        problems: [
          { id: 'p1', type: 'number-bond', number: 1, ...createNumberBond(9, 5, 'partB') },
          { id: 'p2', type: 'number-bond', number: 2, ...createNumberBond(9, 8, 'partB') },
          { id: 'p3', type: 'number-bond', number: 3, ...createNumberBond(9, 6, 'partA') },
          { id: 'p4', type: 'number-bond', number: 4, ...createNumberBond(9, 1, 'partA') },
        ],
        cutStrip: {
          type: 'straight-strips',
          stage: 'Ages 3-5 (Bottom-Edge Cut)',
          items: ['5 + 4 = 9', '8 + 1 = 9', '6 + 3 = 9', '9 in All!'],
        },
        answerKey: [
          { number: 1, solution: 'Missing part: 4 (5 + 4 = 9)' },
          { number: 2, solution: 'Missing part: 1 (8 + 1 = 9)' },
          { number: 3, solution: 'Missing part: 3 (3 + 6 = 9)' },
          { number: 4, solution: 'Missing part: 8 (8 + 1 = 9)' },
        ],
      }),
    },

    // -------------------------------------------------------------------------
    // DAY 17: Complements to 10 ("Friends of 10")
    // -------------------------------------------------------------------------
    {
      day: 17,
      title: 'Complements to 10 ("Friends of 10" with Ten-Frames)',
      standard: 'CCSS.MATH.CONTENT.K.OA.A.4 (Find the number that makes 10 for any number 1–9)',
      strictBoundary: 'Finding the complement to make 10 using ten-frames (How many more to make 10?). No numbers above 10.',
      script: {
        say: '“These are the famous FRIENDS OF 10! If you have 7 dots, how many more do you need to make a full 10? Look at the empty boxes: 1, 2, 3! 7 and 3 make 10!”',
        do: 'Point to the empty spaces in the ten-frame: count the empty boxes to find the friend of 10!',
        lookFor: 'Counts or subitizes the empty cells to state the complement to 10 effortlessly.',
      },
      generateSheet: (variant = 1) => ({
        id: `math-d17-v${variant}`,
        title: 'Math Day 17: Friends of 10 (Making Ten)',
        subject: 'math',
        grade: 'K',
        instructions: 'Count the filled dots, then count the empty spaces to find what makes 10!',
        kidDirections: {
          text: '🔟 How many dots? 🔍 How many empty spaces to reach 10? ✏️ Write both numbers!',
          icons: ['🔟', '🔍', '✏️'],
          badge: 'Day 17 Math Friends of 10',
        },
        problems: [
          { id: 'p1', type: 'ten-frame', number: 1, ...generateTenFrame(7), showComplement: true, complement: 3 },
          { id: 'p2', type: 'ten-frame', number: 2, ...generateTenFrame(8), showComplement: true, complement: 2 },
          { id: 'p3', type: 'ten-frame', number: 3, ...generateTenFrame(6), showComplement: true, complement: 4 },
          { id: 'p4', type: 'ten-frame', number: 4, ...generateTenFrame(9), showComplement: true, complement: 1 },
        ],
        cutStrip: {
          type: 'straight-strips',
          stage: 'Ages 3-5 (Bottom-Edge Cut)',
          items: ['7 + 3 = 10', '8 + 2 = 10', '6 + 4 = 10', '9 + 1 = 10'],
        },
        answerKey: [
          { number: 1, solution: '7 dots + 3 more = 10' },
          { number: 2, solution: '8 dots + 2 more = 10' },
          { number: 3, solution: '6 dots + 4 more = 10' },
          { number: 4, solution: '9 dots + 1 more = 10' },
        ],
      }),
    },

    // -------------------------------------------------------------------------
    // DAY 18: Numbers 11 to 15 (Ten and Some More)
    // -------------------------------------------------------------------------
    {
      day: 18,
      title: 'Teen Numbers 11 to 15 (Ten and Some More)',
      standard: 'CCSS.MATH.CONTENT.K.NBT.A.1 & K.CC.A.3 (Compose numbers 11–15 as 10 ones and extra ones)',
      strictBoundary: 'Counting and writing teen numbers 11 to 15 (10 and some more). No teen operations beyond counting.',
      script: {
        say: '“Teen numbers are super cool! Every teen number starts with a full group of 10! 10 and 1 is 11! 10 and 2 is 12! 10 and 3 is 13!”',
        do: 'Count the first 10 items together, then count on with the extra items: 10... 11, 12, 13!',
        lookFor: 'Understands the structure: 1 in front represents the group of 10, followed by extra ones.',
      },
      generateSheet: (variant = 1) => ({
        id: `math-d18-v${variant}`,
        title: 'Math Day 18: Teen Numbers 11 to 15 (Ten and More)',
        subject: 'math',
        grade: 'K',
        instructions: 'Touch and count the items! Count 10, then keep counting the extra items.',
        kidDirections: {
          text: '👉 Count the full 10, then count on: 11, 12, 13... ✏️ Write the teen number!',
          icons: ['👉', '🔟', '✏️'],
          badge: 'Day 18 Teen Numbers',
        },
        problems: [
          { id: 'p1', type: 'counting-objects', number: 1, count: 11, itemIcon: '⭐', prompt: 'Count the stars (10 and 1 more):' },
          { id: 'p2', type: 'counting-objects', number: 2, count: 12, itemIcon: '🍎', prompt: 'Count the apples (10 and 2 more):' },
          { id: 'p3', type: 'counting-objects', number: 3, count: 13, itemIcon: '🚗', prompt: 'Count the cars (10 and 3 more):' },
          { id: 'p4', type: 'counting-objects', number: 4, count: 14, itemIcon: '🐟', prompt: 'Count the fish (10 and 4 more):' },
        ],
        cutStrip: {
          type: 'straight-strips',
          stage: 'Ages 3-5 (Bottom-Edge Cut)',
          items: ['10 + 1 = 11', '10 + 2 = 12', '10 + 3 = 13', '10 + 4 = 14'],
        },
        answerKey: [
          { number: 1, solution: 'Total: 11 stars' },
          { number: 2, solution: 'Total: 12 apples' },
          { number: 3, solution: 'Total: 13 cars' },
          { number: 4, solution: 'Total: 14 fish' },
        ],
      }),
    },

    // -------------------------------------------------------------------------
    // DAY 19: Numbers 16 to 20 (Two Full Ten-Frames Benchmark)
    // -------------------------------------------------------------------------
    {
      day: 19,
      title: 'Numbers 16 to 20 (Two Full Ten-Frames Benchmark)',
      standard: 'CCSS.MATH.CONTENT.K.CC.A.3 & K.NBT.A.1 (Count and write 16 to 20)',
      strictBoundary: 'Counting and writing teen numbers 16 to 20 (landmark 20 = 2 full ten-frames). No two-digit addition.',
      script: {
        say: '“Now we are reaching 20! 10 and 6 is 16... and two full groups of 10 makes TWENTY! Numeral 20 has a 2 and a 0!”',
        do: 'Count out loud from 10 to 20 together. Point out that 20 is two full tens.',
        lookFor: 'Writes 16, 17, 18, 19, 20 with digits in the correct order (1 first for teens, 2 then 0 for 20).',
      },
      generateSheet: (variant = 1) => ({
        id: `math-d19-v${variant}`,
        title: 'Math Day 19: Numbers 16 to 20 (Two Full Tens)',
        subject: 'math',
        grade: 'K',
        instructions: 'Count the items up to 20! Write the numeral in the box.',
        kidDirections: {
          text: '🔟 Count from 10 up to 20! ✏️ Write the number in the box!',
          icons: ['🔟', '✏️', '⭐'],
          badge: 'Day 19 Math 16-20',
        },
        problems: [
          { id: 'p1', type: 'counting-objects', number: 1, count: 16, itemIcon: '🎈', prompt: 'Count the balloons (10 and 6 more):' },
          { id: 'p2', type: 'counting-objects', number: 2, count: 17, itemIcon: '🍪', prompt: 'Count the cookies (10 and 7 more):' },
          { id: 'p3', type: 'counting-objects', number: 3, count: 18, itemIcon: '🦆', prompt: 'Count the ducks (10 and 8 more):' },
          { id: 'p4', type: 'counting-objects', number: 4, count: 20, itemIcon: '⭐', prompt: 'Count the stars (Two full tens = 20!):' },
        ],
        cutStrip: {
          type: 'straight-strips',
          stage: 'Ages 3-5 (Bottom-Edge Cut)',
          items: ['16 balloons', '17 cookies', '18 ducks', '20 Stars! 🌟'],
        },
        answerKey: [
          { number: 1, solution: 'Total: 16 balloons' },
          { number: 2, solution: 'Total: 17 cookies' },
          { number: 3, solution: 'Total: 18 ducks' },
          { number: 4, solution: 'Total: 20 stars (2 full tens)' },
        ],
      }),
    },

    // -------------------------------------------------------------------------
    // DAY 20: Mid-Quarter 1 Math Grand Champion Review
    // -------------------------------------------------------------------------
    {
      day: 20,
      title: 'Mid-Quarter 1 Math Grand Champion Review',
      standard: 'CCSS.MATH.CONTENT.K.OA.A.3 & K.CC.A.3 (Cumulative Review Days 11–20)',
      strictBoundary: 'Cumulative review of number bonds to 10 and counting 11–20. No formal written equations.',
      script: {
        say: '“Day 20 Grand Champion! Look at how much you have learned: number bonds, friends of 10, and counting all the way to 20! You are a Kindergarten Math Superstar!”',
        do: 'Cheer on each problem: celebrate the 20-day milestone with a huge high-five!',
        lookFor: 'Completes number bonds and teen counting with high confidence and precision.',
      },
      generateSheet: (variant = 1) => ({
        id: `math-d20-v${variant}`,
        title: 'Math Day 20: Mid-Quarter 1 Grand Champion Review',
        subject: 'math',
        grade: 'K',
        instructions: 'Complete the Day 20 Grand Champion challenge! Show your bonds and teen number skills!',
        kidDirections: {
          text: '🏆 Day 20 Grand Champion! ✏️ Show your number bonds and teen counting mastery!',
          icons: ['🏆', '✏️', '⭐'],
          badge: 'Day 20 Math Champion',
        },
        problems: [
          { id: 'p1', type: 'number-bond', number: 1, ...createNumberBond(5, 2, 'partB') },
          { id: 'p2', type: 'ten-frame', number: 2, ...generateTenFrame(8), showComplement: true, complement: 2 },
          { id: 'p3', type: 'counting-objects', number: 3, count: 15, itemIcon: '🍎', prompt: 'Count 15 apples (10 and 5 more):' },
          { id: 'p4', type: 'counting-objects', number: 4, count: 20, itemIcon: '⭐', prompt: 'Grand Champion: Count to 20!' },
        ],
        cutStrip: {
          type: 'straight-strips',
          stage: 'Ages 3-5 (Bottom-Edge Cut)',
          items: ['Number Bonds', 'Friends of 10', 'Count to 20', '🏆 Day 20 Champion!'],
        },
        answerKey: [
          { number: 1, solution: 'Missing part: 3 (2 + 3 = 5)' },
          { number: 2, solution: '8 dots + 2 more = 10' },
          { number: 3, solution: 'Total: 15 apples' },
          { number: 4, solution: 'Total: 20 stars' },
        ],
      }),
    },
  ],

  // =========================================================================
  // PHONICS & READING TRACK (Days 1 to 10 - Science of Reading Prerequisites)
  // Sequence: m -> a -> t -> at -> mat -> s/sat -> p/pat/tap -> i/sit -> n/pan -> Champion Phrases
  // =========================================================================
  phonics: [
    // -------------------------------------------------------------------------
    // DAY 1: Continuous Consonant /m/ (Sound Clues & Letter Formation)
    // -------------------------------------------------------------------------
    {
      day: 1,
      title: 'Continuous Consonant /m/ (Sound Clues & Formation)',
      standard: 'CCSS.ELA-LITERACY.RF.K.1.D & Orton-Gillingham Phase 1',
      strictBoundary: 'Letter m sound and letter formation only. No blending or unintroduced letters.',
      script: {
        say: '“Keep the sound humming with your mouth closed: /mmmmmm/! Feel your lips tickle. Do not add \'uh\' at the end!”',
        do: 'Look in a mirror together. Notice lips closed tight for /m/. Trace lowercase \'m\' in the air: down, up and over, up and over!',
        lookFor: 'Produces pure continuous /m/ without saying "muh". Traces lowercase m correctly on handwriting lines.',
      },
      generateSheet: (variant = 1) => ({
        id: `phonics-d1-v${variant}`,
        title: 'Phonics Day 1: Letter Sound /m/',
        subject: 'phonics',
        grade: 'K',
        instructions: 'Practice saying the humming sound /m/. Trace and write lowercase m on the guidelines.',
        kidDirections: {
          text: '👄 Press your lips: /mmmm/! ✏️ Trace and write the letter m!',
          icons: ['👄', '✏️'],
          badge: 'Day 1 Phonics',
        },
        problems: [
          {
            id: 'p1',
            type: 'phonics-dictation',
            number: 1,
            word: 'm',
            phonemes: ['m'],
            soundClues: [{ icon: '👄', label: 'Lips together /m/' }, { icon: '🥛', label: 'Milk' }],
          },
          {
            id: 'p2',
            type: 'phonics-dictation',
            number: 2,
            word: 'm',
            phonemes: ['m'],
            soundClues: [{ icon: '🐵', label: 'Monkey' }, { icon: '🌙', label: 'Moon' }],
          },
          {
            id: 'p3',
            type: 'phonics-dictation',
            number: 3,
            word: 'm',
            phonemes: ['m'],
            soundClues: [{ icon: '👄', label: 'Lips together /m/' }],
          },
          {
            id: 'p4',
            type: 'phonics-dictation',
            number: 4,
            word: 'm',
            phonemes: ['m'],
            soundClues: [{ icon: '⭐', label: 'Pure /m/' }],
          },
        ],
        cutStrip: {
          type: 'word-tiles',
          stage: 'Ages 4-6',
          items: ['m', 'm', 'm', '/m/ sound'],
        },
        answerKey: [
          { number: 1, solution: 'Sound: /m/ (lips pressed, continuous humming)' },
          { number: 2, solution: 'Sound: /m/ (Monkey, Moon)' },
          { number: 3, solution: 'Sound: /m/' },
          { number: 4, solution: 'Sound: /m/' },
        ],
      }),
    },

    // -------------------------------------------------------------------------
    // DAY 2: Short Vowel /a/ (Apple Sound & Formation)
    // -------------------------------------------------------------------------
    {
      day: 2,
      title: 'Short Vowel /a/ (Apple Sound & Formation)',
      standard: 'CCSS.ELA-LITERACY.RF.K.2.D & Orton-Gillingham Phase 1',
      strictBoundary: 'Short vowel a sound and letter formation only. No unintroduced vowels or consonants.',
      script: {
        say: '“Open your mouth wide like you are biting a juicy red apple: /a/! Drop your chin: /a/ /a/ apple!”',
        do: 'Hold an imaginary apple to your mouth and say "/a/ /a/ apple". Trace lowercase \'a\': around the apple, down the leaf!',
        lookFor: 'Opens mouth cleanly for short /a/. Does not confuse with long /A/ or other vowel sounds.',
      },
      generateSheet: (variant = 1) => ({
        id: `phonics-d2-v${variant}`,
        title: 'Phonics Day 2: Short Vowel /a/',
        subject: 'phonics',
        grade: 'K',
        instructions: 'Open your mouth wide for short /a/. Trace and write lowercase a on the guidelines.',
        kidDirections: {
          text: '🍎 Open wide for apple: /a/! ✏️ Trace and write lowercase a!',
          icons: ['🍎', '✏️'],
          badge: 'Day 2 Phonics',
        },
        problems: [
          {
            id: 'p1',
            type: 'phonics-dictation',
            number: 1,
            word: 'a',
            phonemes: ['a'],
            soundClues: [{ icon: '🍎', label: 'Apple /æ/' }, { icon: '🐜', label: 'Ant' }],
          },
          {
            id: 'p2',
            type: 'phonics-dictation',
            number: 2,
            word: 'a',
            phonemes: ['a'],
            soundClues: [{ icon: '🪓', label: 'Axe' }, { icon: '🐊', label: 'Alligator' }],
          },
          {
            id: 'p3',
            type: 'phonics-dictation',
            number: 3,
            word: 'a',
            phonemes: ['a'],
            soundClues: [{ icon: '🍎', label: 'Apple /æ/' }],
          },
          {
            id: 'p4',
            type: 'phonics-dictation',
            number: 4,
            word: 'a',
            phonemes: ['a'],
            soundClues: [{ icon: '⭐', label: 'Short a' }],
          },
        ],
        cutStrip: {
          type: 'word-tiles',
          stage: 'Ages 4-6',
          items: ['a', 'a', 'a', '/a/ sound'],
        },
        answerKey: [
          { number: 1, solution: 'Sound: /a/ (open jaw, Apple, Ant)' },
          { number: 2, solution: 'Sound: /a/ (Axe, Alligator)' },
          { number: 3, solution: 'Sound: /a/' },
          { number: 4, solution: 'Sound: /a/' },
        ],
      }),
    },

    // -------------------------------------------------------------------------
    // DAY 3: Stop Consonant /t/ (Crisp Unvoiced Tap)
    // -------------------------------------------------------------------------
    {
      day: 3,
      title: 'Stop Consonant /t/ (Crisp Unvoiced Tap)',
      standard: 'CCSS.ELA-LITERACY.RF.K.1.D & Orton-Gillingham Phase 1',
      strictBoundary: 'Stop consonant t sound and letter formation only. Pure /t/ without "tuh".',
      script: {
        say: '“The letter T makes a crisp ticking sound: /t/ /t/ /t/! Tap the tip of your tongue behind your teeth. Never say \'tuh\'!”',
        do: 'Pretend to be a ticking clock: "/t/ /t/ /t/". Trace lowercase \'t\': down tall from the sky line, cross at the fence!',
        lookFor: 'Keeps /t/ unvoiced and unclipped with no trailing vowel. Starts stroke at sky line.',
      },
      generateSheet: (variant = 1) => ({
        id: `phonics-d3-v${variant}`,
        title: 'Phonics Day 3: Letter Sound /t/',
        subject: 'phonics',
        grade: 'K',
        instructions: 'Tap your tongue for crisp /t/. Trace and write lowercase t on the guidelines.',
        kidDirections: {
          text: '🪀 Tap your tongue: /t/ /t/! ✏️ Trace and write lowercase t!',
          icons: ['🪀', '✏️'],
          badge: 'Day 3 Phonics',
        },
        problems: [
          {
            id: 'p1',
            type: 'phonics-dictation',
            number: 1,
            word: 't',
            phonemes: ['t'],
            soundClues: [{ icon: '🪀', label: 'Top /t/' }, { icon: '🐯', label: 'Tiger' }],
          },
          {
            id: 'p2',
            type: 'phonics-dictation',
            number: 2,
            word: 't',
            phonemes: ['t'],
            soundClues: [{ icon: '🐢', label: 'Turtle' }, { icon: '⛺', label: 'Tent' }],
          },
          {
            id: 'p3',
            type: 'phonics-dictation',
            number: 3,
            word: 't',
            phonemes: ['t'],
            soundClues: [{ icon: '🪀', label: 'Tongue tap /t/' }],
          },
          {
            id: 'p4',
            type: 'phonics-dictation',
            number: 4,
            word: 't',
            phonemes: ['t'],
            soundClues: [{ icon: '⭐', label: 'Pure /t/' }],
          },
        ],
        cutStrip: {
          type: 'word-tiles',
          stage: 'Ages 4-6',
          items: ['t', 't', 't', '/t/ sound'],
        },
        answerKey: [
          { number: 1, solution: 'Sound: /t/ (crisp unvoiced tap, Top, Tiger)' },
          { number: 2, solution: 'Sound: /t/ (Turtle, Tent)' },
          { number: 3, solution: 'Sound: /t/' },
          { number: 4, solution: 'Sound: /t/' },
        ],
      }),
    },

    // -------------------------------------------------------------------------
    // DAY 4: First Blending: VC Word "at" (/a/ + /t/)
    // -------------------------------------------------------------------------
    {
      day: 4,
      title: 'First Blending: The Word "at" (/a/ + /t/)',
      standard: 'CCSS.ELA-LITERACY.RF.K.2.D & Early VC Blending',
      strictBoundary: 'Blending mastered sounds /a/ + /t/ into "at" only. No 3-letter CVC words yet.',
      script: {
        say: '“You know /a/ and you know /t/! Put them together: /a/... /t/... AT! Like \'Look at that!\' You just read your first word!”',
        do: 'Tap the first circle for /a/, tap the second circle for /t/, then slide your finger underneath and say "at".',
        lookFor: 'Smoothly blends /a/ and /t/ without pausing in between.',
      },
      generateSheet: (variant = 1) => ({
        id: `phonics-d4-v${variant}`,
        title: 'Phonics Day 4: Blending the Word "at"',
        subject: 'phonics',
        grade: 'K',
        instructions: 'Tap the sound circles for /a/ and /t/. Slide them together to say and write AT!',
        kidDirections: {
          text: '👉 Tap /a/, tap /t/! 🏃 Slide together: AT! ✏️ Write "at" on the lines!',
          icons: ['👉', '🏃', '✏️'],
          badge: 'Day 4 Phonics',
        },
        problems: [
          {
            id: 'p1',
            type: 'phonics-dictation',
            number: 1,
            word: 'at',
            phonemes: ['a', 't'],
            soundClues: [{ icon: '🍎', label: '/a/' }, { icon: '🪀', label: '/t/' }],
          },
          {
            id: 'p2',
            type: 'phonics-dictation',
            number: 2,
            word: 'at',
            phonemes: ['a', 't'],
            soundClues: [{ icon: '👉', label: 'Slide /a/ + /t/' }],
          },
          {
            id: 'p3',
            type: 'phonics-dictation',
            number: 3,
            word: 'at',
            phonemes: ['a', 't'],
            soundClues: [{ icon: '⭐', label: 'Word: "at"' }],
          },
          {
            id: 'p4',
            type: 'phonics-dictation',
            number: 4,
            word: 'at',
            phonemes: ['a', 't'],
            soundClues: [{ icon: '🏆', label: 'Champion: "at"' }],
          },
        ],
        cutStrip: {
          type: 'word-tiles',
          stage: 'Ages 4-6',
          items: ['at', 'at', 'at', 'at!'],
        },
        answerKey: [
          { number: 1, solution: 'A-T (/æ/ /t/ = "at")' },
          { number: 2, solution: 'A-T' },
          { number: 3, solution: 'A-T' },
          { number: 4, solution: 'A-T' },
        ],
      }),
    },

    // -------------------------------------------------------------------------
    // DAY 5: First 3-Letter CVC Blending: "mat" (/m/ + /a/ + /t/)
    // -------------------------------------------------------------------------
    {
      day: 5,
      title: 'First 3-Letter CVC Word: "mat" (/m/ + /a/ + /t/)',
      standard: 'CCSS.ELA-LITERACY.RF.K.2.D & CVC Orthographic Mapping',
      strictBoundary: 'Blending 3-sound CVC "mat" using only learned letters (m, a, t). No other letters.',
      script: {
        say: '“Put our continuous /m/ in front of \'at\': /m/... /a/... /t/... MAT! A cat sits on a welcome mat!”',
        do: 'Tap the 3 sound circles: 1 (/m/), 2 (/a/), 3 (/t/). Slide your finger fast: MAT!',
        lookFor: 'Blends all 3 sounds without dropping the middle vowel /a/ or guessing.',
      },
      generateSheet: (variant = 1) => ({
        id: `phonics-d5-v${variant}`,
        title: 'Phonics Day 5: First CVC Word "mat"',
        subject: 'phonics',
        grade: 'K',
        instructions: 'Tap the 3 sound circles: /m/ - /a/ - /t/. Say it fast to read MAT, and write it!',
        kidDirections: {
          text: '👉 Tap 3 sounds: /m/ - /a/ - /t/! 🏃 Say it fast: MAT! ✏️ Write the word!',
          icons: ['👉', '🏃', '✏️'],
          badge: 'Day 5 Phonics',
        },
        problems: [
          {
            id: 'p1',
            type: 'phonics-dictation',
            number: 1,
            word: 'mat',
            phonemes: ['m', 'a', 't'],
            soundClues: [{ icon: '👄', label: '/m/' }, { icon: '🍎', label: '/a/' }, { icon: '🪀', label: '/t/' }],
          },
          {
            id: 'p2',
            type: 'phonics-dictation',
            number: 2,
            word: 'at',
            phonemes: ['a', 't'],
            soundClues: [{ icon: '🍎', label: '/a/' }, { icon: '🪀', label: '/t/' }],
          },
          {
            id: 'p3',
            type: 'phonics-dictation',
            number: 3,
            word: 'mat',
            phonemes: ['m', 'a', 't'],
            soundClues: [{ icon: '🐱', label: 'Welcome Mat' }],
          },
          {
            id: 'p4',
            type: 'phonics-dictation',
            number: 4,
            word: 'mat',
            phonemes: ['m', 'a', 't'],
            soundClues: [{ icon: '⭐', label: 'M-A-T' }],
          },
        ],
        cutStrip: {
          type: 'word-tiles',
          stage: 'Ages 4-6',
          items: ['mat', 'at', 'mat', 'M-A-T'],
        },
        answerKey: [
          { number: 1, solution: 'M-A-T (/m/ /æ/ /t/ = "mat")' },
          { number: 2, solution: 'A-T (/æ/ /t/ = "at")' },
          { number: 3, solution: 'M-A-T' },
          { number: 4, solution: 'M-A-T' },
        ],
      }),
    },

    // -------------------------------------------------------------------------
    // DAY 6: Continuous Consonant /s/ & Blending "sat"
    // -------------------------------------------------------------------------
    {
      day: 6,
      title: 'Continuous Consonant /s/ & Word "sat" (/s/ + /a/ + /t/)',
      standard: 'CCSS.ELA-LITERACY.RF.K.2.D & Sound Substitution',
      strictBoundary: 'Letter s sound and blending "sat" with known letters (m, a, t). No other vowels or letters.',
      script: {
        say: '“Listen to the snake sound: /ssssss/! If we change the /m/ in \'mat\' to /s/, what word is it? /s/... /a/... /t/... SAT! The cat sat on the mat!”',
        do: 'Show how changing the first letter changes the whole word from mat to sat.',
        lookFor: 'Distinguishes /s/ from /m/ at the start of the word. Reads "sat" accurately.',
      },
      generateSheet: (variant = 1) => ({
        id: `phonics-d6-v${variant}`,
        title: 'Phonics Day 6: Adding /s/ & Word "sat"',
        subject: 'phonics',
        grade: 'K',
        instructions: 'Learn the hissing sound /s/ and blend /s/ - /a/ - /t/ to read SAT!',
        kidDirections: {
          text: '🐍 Hiss like a snake: /s/! 🏃 /s/ + /a/ + /t/ = SAT! ✏️ Write your words!',
          icons: ['🐍', '🏃', '✏️'],
          badge: 'Day 6 Phonics',
        },
        problems: [
          {
            id: 'p1',
            type: 'phonics-dictation',
            number: 1,
            word: 'sat',
            phonemes: ['s', 'a', 't'],
            soundClues: [{ icon: '🐍', label: '/s/' }, { icon: '🍎', label: '/a/' }, { icon: '🪀', label: '/t/' }],
          },
          {
            id: 'p2',
            type: 'phonics-dictation',
            number: 2,
            word: 'mat',
            phonemes: ['m', 'a', 't'],
            soundClues: [{ icon: '👄', label: '/m/' }, { icon: '🍎', label: '/a/' }, { icon: '🪀', label: '/t/' }],
          },
          {
            id: 'p3',
            type: 'phonics-dictation',
            number: 3,
            word: 's',
            phonemes: ['s'],
            soundClues: [{ icon: '🐍', label: 'Sun /s/' }, { icon: '⭐', label: 'Star' }],
          },
          {
            id: 'p4',
            type: 'phonics-dictation',
            number: 4,
            word: 'sat',
            phonemes: ['s', 'a', 't'],
            soundClues: [{ icon: '🪑', label: 'Cat SAT down' }],
          },
        ],
        cutStrip: {
          type: 'word-tiles',
          stage: 'Ages 4-6',
          items: ['sat', 'mat', 'sat', 'at'],
        },
        answerKey: [
          { number: 1, solution: 'S-A-T (/s/ /æ/ /t/ = "sat")' },
          { number: 2, solution: 'M-A-T (/m/ /æ/ /t/ = "mat")' },
          { number: 3, solution: 'Sound: /s/' },
          { number: 4, solution: 'S-A-T' },
        ],
      }),
    },

    // -------------------------------------------------------------------------
    // DAY 7: Stop Consonant /p/ & Words "pat", "tap", "map"
    // -------------------------------------------------------------------------
    {
      day: 7,
      title: 'Stop Consonant /p/ & Words "pat", "tap", "map"',
      standard: 'CCSS.ELA-LITERACY.RF.K.2.D & CVC Word Building',
      strictBoundary: 'Consonant p and CVC words using only m, a, t, s, p. No other vowels.',
      script: {
        say: '“The letter P makes a soft air pop: /p/! Hold your hand in front of your mouth: feel the puff of air? /p/... /a/... /t/... PAT!”',
        do: 'Feel the puff of air on your hand for /p/. Then blend P-A-T and reverse to T-A-P.',
        lookFor: 'Keeps /p/ soft without "puh". Reverses letters to read "tap" without hesitation.',
      },
      generateSheet: (variant = 1) => ({
        id: `phonics-d7-v${variant}`,
        title: 'Phonics Day 7: Consonant /p/ (pat, tap, map)',
        subject: 'phonics',
        grade: 'K',
        instructions: 'Feel the puff on /p/! Tap the sounds to read PAT, TAP, and MAP.',
        kidDirections: {
          text: '💨 Feel the puff on /p/! 🏃 Blend pat, tap, and map! ✏️ Write your words!',
          icons: ['💨', '🏃', '✏️'],
          badge: 'Day 7 Phonics',
        },
        problems: [
          {
            id: 'p1',
            type: 'phonics-dictation',
            number: 1,
            word: 'pat',
            phonemes: ['p', 'a', 't'],
            soundClues: [{ icon: '💨', label: '/p/' }, { icon: '🍎', label: '/a/' }, { icon: '🪀', label: '/t/' }],
          },
          {
            id: 'p2',
            type: 'phonics-dictation',
            number: 2,
            word: 'tap',
            phonemes: ['t', 'a', 'p'],
            soundClues: [{ icon: '🪀', label: '/t/' }, { icon: '🍎', label: '/a/' }, { icon: '💨', label: '/p/' }],
          },
          {
            id: 'p3',
            type: 'phonics-dictation',
            number: 3,
            word: 'map',
            phonemes: ['m', 'a', 'p'],
            soundClues: [{ icon: '👄', label: '/m/' }, { icon: '🍎', label: '/a/' }, { icon: '💨', label: '/p/' }],
          },
          {
            id: 'p4',
            type: 'phonics-dictation',
            number: 4,
            word: 'pat',
            phonemes: ['p', 'a', 't'],
            soundClues: [{ icon: '🐶', label: 'PAT the puppy' }],
          },
        ],
        cutStrip: {
          type: 'word-tiles',
          stage: 'Ages 4-6',
          items: ['pat', 'tap', 'map', 'pat'],
        },
        answerKey: [
          { number: 1, solution: 'P-A-T (/p/ /æ/ /t/ = "pat")' },
          { number: 2, solution: 'T-A-P (/t/ /æ/ /p/ = "tap")' },
          { number: 3, solution: 'M-A-P (/m/ /æ/ /p/ = "map")' },
          { number: 4, solution: 'P-A-T' },
        ],
      }),
    },

    // -------------------------------------------------------------------------
    // DAY 8: Short Vowel /i/ & Words "sit", "tip", "pit", "it"
    // -------------------------------------------------------------------------
    {
      day: 8,
      title: 'Short Vowel /i/ & Words "sit", "tip", "pit", "it"',
      standard: 'CCSS.ELA-LITERACY.RF.K.2.D & Short Vowel Discrimination',
      strictBoundary: 'Short vowel i and CVC words with known consonants (m, s, t, p). No other vowels (o, u, e).',
      script: {
        say: '“Smile big with your mouth: /i/ like an icky insect! S-I-T spells SIT! Notice how your mouth is smiling for /i/ but dropped open for /a/!”',
        do: 'Compare mouth shapes: smile for /i/ (sit), drop jaw for /a/ (sat).',
        lookFor: 'Does not confuse short /i/ with short /a/ or short /e/. Reads "sit" and "tip" cleanly.',
      },
      generateSheet: (variant = 1) => ({
        id: `phonics-d8-v${variant}`,
        title: 'Phonics Day 8: Short Vowel /i/ (sit, tip, pit)',
        subject: 'phonics',
        grade: 'K',
        instructions: 'Smile for short /i/! Tap out each sound and write the words on the guidelines.',
        kidDirections: {
          text: '😁 Smile for /i/! 🏃 /s/ + /i/ + /t/ = SIT! ✏️ Write your short /i/ words!',
          icons: ['😁', '🏃', '✏️'],
          badge: 'Day 8 Phonics',
        },
        problems: [
          {
            id: 'p1',
            type: 'phonics-dictation',
            number: 1,
            word: 'sit',
            phonemes: ['s', 'i', 't'],
            soundClues: [{ icon: '🐍', label: '/s/' }, { icon: '😁', label: '/i/' }, { icon: '🪀', label: '/t/' }],
          },
          {
            id: 'p2',
            type: 'phonics-dictation',
            number: 2,
            word: 'tip',
            phonemes: ['t', 'i', 'p'],
            soundClues: [{ icon: '🪀', label: '/t/' }, { icon: '😁', label: '/i/' }, { icon: '💨', label: '/p/' }],
          },
          {
            id: 'p3',
            type: 'phonics-dictation',
            number: 3,
            word: 'pit',
            phonemes: ['p', 'i', 't'],
            soundClues: [{ icon: '💨', label: '/p/' }, { icon: '😁', label: '/i/' }, { icon: '🪀', label: '/t/' }],
          },
          {
            id: 'p4',
            type: 'phonics-dictation',
            number: 4,
            word: 'it',
            phonemes: ['i', 't'],
            soundClues: [{ icon: '😁', label: '/i/' }, { icon: '🪀', label: '/t/' }],
          },
        ],
        cutStrip: {
          type: 'word-tiles',
          stage: 'Ages 4-6',
          items: ['sit', 'tip', 'pit', 'it'],
        },
        answerKey: [
          { number: 1, solution: 'S-I-T (/s/ /ɪ/ /t/ = "sit")' },
          { number: 2, solution: 'T-I-P (/t/ /ɪ/ /p/ = "tip")' },
          { number: 3, solution: 'P-I-T (/p/ /ɪ/ /t/ = "pit")' },
          { number: 4, solution: 'I-T (/ɪ/ /t/ = "it")' },
        ],
      }),
    },

    // -------------------------------------------------------------------------
    // DAY 9: Nasal Consonant /n/ & Words "pan", "pin", "tan", "man"
    // -------------------------------------------------------------------------
    {
      day: 9,
      title: 'Nasal Consonant /n/ & Words "pan", "pin", "tan", "man"',
      standard: 'CCSS.ELA-LITERACY.RF.K.2.D & Word Families (-an, -in)',
      strictBoundary: 'Consonant n and words with known letters (m, a, t, s, p, i, n). No other vowels.',
      script: {
        say: '“Put the tip of your tongue on the roof of your mouth: /nnnnnn/! Feel the air come out your nose! P-A-N spells PAN. P-I-N spells PIN!”',
        do: 'Gently pinch your nose while saying /n/ to feel the vibration. Compare \'pan\' (short a) vs \'pin\' (short i).',
        lookFor: 'Understands the nasal sound /n/. Switches vowel from pan to pin accurately.',
      },
      generateSheet: (variant = 1) => ({
        id: `phonics-d9-v${variant}`,
        title: 'Phonics Day 9: Consonant /n/ (pan, pin, tan, man)',
        subject: 'phonics',
        grade: 'K',
        instructions: 'Feel the nasal vibration on /n/! Tap and write rhyming words with -an and -in.',
        kidDirections: {
          text: '👃 Tongue up for /n/! 🏃 Blend pan and pin! ✏️ Write your words on the lines!',
          icons: ['👃', '🏃', '✏️'],
          badge: 'Day 9 Phonics',
        },
        problems: [
          {
            id: 'p1',
            type: 'phonics-dictation',
            number: 1,
            word: 'pan',
            phonemes: ['p', 'a', 'n'],
            soundClues: [{ icon: '💨', label: '/p/' }, { icon: '🍎', label: '/a/' }, { icon: '👃', label: '/n/' }],
          },
          {
            id: 'p2',
            type: 'phonics-dictation',
            number: 2,
            word: 'pin',
            phonemes: ['p', 'i', 'n'],
            soundClues: [{ icon: '💨', label: '/p/' }, { icon: '😁', label: '/i/' }, { icon: '👃', label: '/n/' }],
          },
          {
            id: 'p3',
            type: 'phonics-dictation',
            number: 3,
            word: 'tan',
            phonemes: ['t', 'a', 'n'],
            soundClues: [{ icon: '🪀', label: '/t/' }, { icon: '🍎', label: '/a/' }, { icon: '👃', label: '/n/' }],
          },
          {
            id: 'p4',
            type: 'phonics-dictation',
            number: 4,
            word: 'man',
            phonemes: ['m', 'a', 'n'],
            soundClues: [{ icon: '👄', label: '/m/' }, { icon: '🍎', label: '/a/' }, { icon: '👃', label: '/n/' }],
          },
        ],
        cutStrip: {
          type: 'word-tiles',
          stage: 'Ages 4-6',
          items: ['pan', 'pin', 'tan', 'man'],
        },
        answerKey: [
          { number: 1, solution: 'P-A-N (/p/ /æ/ /n/ = "pan")' },
          { number: 2, solution: 'P-I-N (/p/ /ɪ/ /n/ = "pin")' },
          { number: 3, solution: 'T-A-N (/t/ /æ/ /n/ = "tan")' },
          { number: 4, solution: 'M-A-N (/m/ /æ/ /n/ = "man")' },
        ],
      }),
    },

    // -------------------------------------------------------------------------
    // DAY 10: High-Frequency Words & Decodable Champion Phrases
    // -------------------------------------------------------------------------
    {
      day: 10,
      title: 'High-Frequency Words & Decodable Champion Phrases',
      standard: 'CCSS.ELA-LITERACY.RF.K.3.C & Decodable Phrase Fluency',
      strictBoundary: 'Cumulative review of learned letters (m, a, t, s, p, i, n) and heart words "the", "a". No advanced blends/digraphs.',
      script: {
        say: '“Look at you reading real sentences! The word \'the\' is a heart word we remember by heart. Read with me: \'A cat sat on a mat!\' You are a reading champion!”',
        do: 'Point to each word in the decodable phrase together. Celebrate reading a full sentence independently!',
        lookFor: 'Reads sight word \'the\' automatically and sounds out decodable words without guessing.',
      },
      generateSheet: (variant = 1) => ({
        id: `phonics-d10-v${variant}`,
        title: 'Phonics Day 10: Reading Champion Phrases',
        subject: 'phonics',
        grade: 'K',
        instructions: 'Read and write your favorite decodable words and read champion phrases!',
        kidDirections: {
          text: '🏆 Champion Reader! 📖 Read decodable phrases! ✏️ Write your champion words!',
          icons: ['🏆', '📖', '✏️'],
          badge: 'Day 10 Phonics Champion',
        },
        problems: [
          {
            id: 'p1',
            type: 'phonics-dictation',
            number: 1,
            word: 'sat',
            phonemes: ['s', 'a', 't'],
            soundClues: [{ icon: '🪑', label: 'sat' }],
          },
          {
            id: 'p2',
            type: 'phonics-dictation',
            number: 2,
            word: 'pan',
            phonemes: ['p', 'a', 'n'],
            soundClues: [{ icon: '🍳', label: 'pan' }],
          },
          {
            id: 'p3',
            type: 'phonics-dictation',
            number: 3,
            word: 'pin',
            phonemes: ['p', 'i', 'n'],
            soundClues: [{ icon: '🧷', label: 'pin' }],
          },
          {
            id: 'p4',
            type: 'phonics-dictation',
            number: 4,
            word: 'mat',
            phonemes: ['m', 'a', 't'],
            soundClues: [{ icon: '🚪', label: 'mat' }],
          },
        ],
        decodablePhrases: ['a mat', 'the pan', 'pat the cat', 'sit on a mat'],
        cutStrip: {
          type: 'word-tiles',
          stage: 'Ages 4-6',
          items: ['a mat', 'the pan', 'sat on mat', 'Champion! 🏆'],
        },
        answerKey: [
          { number: 1, solution: 'S-A-T (decodable word)' },
          { number: 2, solution: 'P-A-N (decodable word)' },
          { number: 3, solution: 'P-I-N (decodable word)' },
          { number: 4, solution: 'M-A-T (decodable word)' },
        ],
      }),
    },

    // -------------------------------------------------------------------------
    // DAY 11: Stop Consonant /d/ & Words "dad", "pad", "sad", "mad"
    // -------------------------------------------------------------------------
    {
      day: 11,
      title: 'Stop Consonant /d/ & Words "dad", "pad", "sad", "mad"',
      standard: 'CCSS.ELA-LITERACY.RF.K.2.D & Orton-Gillingham Voiced Alveolar Stop /d/',
      strictBoundary: 'Stop consonant /d/ and CVC words using learned consonants (m, t, s, p, n, d) and vowels (a, i). No unintroduced vowels (o, u, e).',
      script: {
        say: '“Tap the tip of your tongue behind your top front teeth: /d-d-d/! Feel your voice turn ON! D-A-D spells DAD! P-A-D spells PAD!”',
        do: 'Place your hand gently on your throat to feel the vocal cords buzz for /d/ (voiced) compared to the whispery /t/ (unvoiced).',
        lookFor: 'Produces crisp /d/ without adding a loud "duh". Taps three distinct phonemes: /d/ /a/ /d/.',
      },
      generateSheet: (variant = 1) => ({
        id: `phonics-d11-v${variant}`,
        title: 'Phonics Day 11: Stop Consonant /d/ (dad, pad, sad, mad)',
        subject: 'phonics',
        grade: 'K',
        instructions: 'Tap out each phoneme! Write the letters on the guidelines.',
        kidDirections: {
          text: '🥁 Tongue tap for /d/! 🏃 /d/ + /a/ + /d/ = DAD! ✏️ Write your /d/ words!',
          icons: ['🥁', '🏃', '✏️'],
          badge: 'Day 11 Phonics',
        },
        problems: [
          {
            id: 'p1',
            type: 'phonics-dictation',
            number: 1,
            word: 'dad',
            phonemes: ['d', 'a', 'd'],
            soundClues: [{ icon: '🥁', label: '/d/' }, { icon: '🍎', label: '/a/' }, { icon: '🥁', label: '/d/' }],
          },
          {
            id: 'p2',
            type: 'phonics-dictation',
            number: 2,
            word: 'pad',
            phonemes: ['p', 'a', 'd'],
            soundClues: [{ icon: '💨', label: '/p/' }, { icon: '🍎', label: '/a/' }, { icon: '🥁', label: '/d/' }],
          },
          {
            id: 'p3',
            type: 'phonics-dictation',
            number: 3,
            word: 'sad',
            phonemes: ['s', 'a', 'd'],
            soundClues: [{ icon: '🐍', label: '/s/' }, { icon: '🍎', label: '/a/' }, { icon: '🥁', label: '/d/' }],
          },
          {
            id: 'p4',
            type: 'phonics-dictation',
            number: 4,
            word: 'mad',
            phonemes: ['m', 'a', 'd'],
            soundClues: [{ icon: '👄', label: '/m/' }, { icon: '🍎', label: '/a/' }, { icon: '🥁', label: '/d/' }],
          },
        ],
        cutStrip: {
          type: 'word-tiles',
          stage: 'Ages 4-6',
          items: ['dad', 'pad', 'sad', 'mad'],
        },
        answerKey: [
          { number: 1, solution: 'D-A-D (/d/ /æ/ /d/ = "dad")' },
          { number: 2, solution: 'P-A-D (/p/ /æ/ /d/ = "pad")' },
          { number: 3, solution: 'S-A-D (/s/ /æ/ /d/ = "sad")' },
          { number: 4, solution: 'M-A-D (/m/ /æ/ /d/ = "mad")' },
        ],
      }),
    },

    // -------------------------------------------------------------------------
    // DAY 12: Short Vowel /o/ & Words "mop", "pot", "top", "not"
    // -------------------------------------------------------------------------
    {
      day: 12,
      title: 'Short Vowel /o/ & Words "mop", "pot", "top", "not"',
      standard: 'CCSS.ELA-LITERACY.RF.K.2.D & Open Rounded Vowel /ɒ/',
      strictBoundary: 'Short vowel /o/ and CVC words using learned consonants (m, t, s, p, n, d). No vowels (u, e).',
      script: {
        say: '“Drop your jaw and make a big round circle with your lips: /o/ like an octopus! M-O-P spells MOP! P-O-T spells POT!”',
        do: 'Look in a mirror: observe the open round mouth shape for /o/ compared to the wide smile for /i/ and dropped jaw for /a/.',
        lookFor: 'Distinguishes /o/ from /a/ and /i/. Does not confuse "pot" with "pat" or "pit".',
      },
      generateSheet: (variant = 1) => ({
        id: `phonics-d12-v${variant}`,
        title: 'Phonics Day 12: Short Vowel /o/ (mop, pot, top, not)',
        subject: 'phonics',
        grade: 'K',
        instructions: 'Make a round circle with your mouth for short /o/! Tap out sounds and write each word.',
        kidDirections: {
          text: '🐙 Round lips for /o/! 🏃 Blend mop and pot! ✏️ Write your short /o/ words!',
          icons: ['🐙', '🏃', '✏️'],
          badge: 'Day 12 Phonics',
        },
        problems: [
          {
            id: 'p1',
            type: 'phonics-dictation',
            number: 1,
            word: 'mop',
            phonemes: ['m', 'o', 'p'],
            soundClues: [{ icon: '👄', label: '/m/' }, { icon: '🐙', label: '/o/' }, { icon: '💨', label: '/p/' }],
          },
          {
            id: 'p2',
            type: 'phonics-dictation',
            number: 2,
            word: 'pot',
            phonemes: ['p', 'o', 't'],
            soundClues: [{ icon: '💨', label: '/p/' }, { icon: '🐙', label: '/o/' }, { icon: '🪀', label: '/t/' }],
          },
          {
            id: 'p3',
            type: 'phonics-dictation',
            number: 3,
            word: 'top',
            phonemes: ['t', 'o', 'p'],
            soundClues: [{ icon: '🪀', label: '/t/' }, { icon: '🐙', label: '/o/' }, { icon: '💨', label: '/p/' }],
          },
          {
            id: 'p4',
            type: 'phonics-dictation',
            number: 4,
            word: 'not',
            phonemes: ['n', 'o', 't'],
            soundClues: [{ icon: '👃', label: '/n/' }, { icon: '🐙', label: '/o/' }, { icon: '🪀', label: '/t/' }],
          },
        ],
        cutStrip: {
          type: 'word-tiles',
          stage: 'Ages 4-6',
          items: ['mop', 'pot', 'top', 'not'],
        },
        answerKey: [
          { number: 1, solution: 'M-O-P (/m/ /ɒ/ /p/ = "mop")' },
          { number: 2, solution: 'P-O-T (/p/ /ɒ/ /t/ = "pot")' },
          { number: 3, solution: 'T-O-P (/t/ /ɒ/ /p/ = "top")' },
          { number: 4, solution: 'N-O-T (/n/ /ɒ/ /t/ = "not")' },
        ],
      }),
    },

    // -------------------------------------------------------------------------
    // DAY 13: Velar Stop /k/ Spelled "c" & Words "cat", "can", "cap", "cot"
    // -------------------------------------------------------------------------
    {
      day: 13,
      title: 'Velar Stop /k/ Spelled "c" & Words "cat", "can", "cap", "cot"',
      standard: 'CCSS.ELA-LITERACY.RF.K.3.A & Hard C Orthographic Rule',
      strictBoundary: 'Hard c spelling for sound /k/ followed by vowels a, o. No letter k or ck digraph yet.',
      script: {
        say: '“Letter C makes a crisp clicking sound at the back of your throat: /k/! When followed by A or O, it says /k/: C-A-T spells CAT! C-A-N spells CAN!”',
        do: 'Feel the back of your tongue press against the roof of your mouth: /k-k-k/ like a camera clicking.',
        lookFor: 'Pronounces pure /k/ without an added vowel sound ("kuh"). Reads "cat" and "can" fluently.',
      },
      generateSheet: (variant = 1) => ({
        id: `phonics-d13-v${variant}`,
        title: 'Phonics Day 13: Letter C /k/ (cat, can, cap, cot)',
        subject: 'phonics',
        grade: 'K',
        instructions: 'Click the back of your mouth: /k/! Tap out each sound and write your words.',
        kidDirections: {
          text: '🐱 Click /k/ with letter C! 🏃 /k/ + /a/ + /t/ = CAT! ✏️ Write your C words!',
          icons: ['🐱', '🏃', '✏️'],
          badge: 'Day 13 Phonics',
        },
        problems: [
          {
            id: 'p1',
            type: 'phonics-dictation',
            number: 1,
            word: 'cat',
            phonemes: ['c', 'a', 't'],
            soundClues: [{ icon: '🐱', label: '/k/' }, { icon: '🍎', label: '/a/' }, { icon: '🪀', label: '/t/' }],
          },
          {
            id: 'p2',
            type: 'phonics-dictation',
            number: 2,
            word: 'can',
            phonemes: ['c', 'a', 'n'],
            soundClues: [{ icon: '🥫', label: '/k/' }, { icon: '🍎', label: '/a/' }, { icon: '👃', label: '/n/' }],
          },
          {
            id: 'p3',
            type: 'phonics-dictation',
            number: 3,
            word: 'cap',
            phonemes: ['c', 'a', 'p'],
            soundClues: [{ icon: '🧢', label: '/k/' }, { icon: '🍎', label: '/a/' }, { icon: '💨', label: '/p/' }],
          },
          {
            id: 'p4',
            type: 'phonics-dictation',
            number: 4,
            word: 'cot',
            phonemes: ['c', 'o', 't'],
            soundClues: [{ icon: '🛏️', label: '/k/' }, { icon: '🐙', label: '/o/' }, { icon: '🪀', label: '/t/' }],
          },
        ],
        cutStrip: {
          type: 'word-tiles',
          stage: 'Ages 4-6',
          items: ['cat', 'can', 'cap', 'cot'],
        },
        answerKey: [
          { number: 1, solution: 'C-A-T (/k/ /æ/ /t/ = "cat")' },
          { number: 2, solution: 'C-A-N (/k/ /æ/ /n/ = "can")' },
          { number: 3, solution: 'C-A-P (/k/ /æ/ /p/ = "cap")' },
          { number: 4, solution: 'C-O-T (/k/ /ɒ/ /t/ = "cot")' },
        ],
      }),
    },

    // -------------------------------------------------------------------------
    // DAY 14: Voiced Velar Stop /g/ & Words "gap", "got", "tag", "pig"
    // -------------------------------------------------------------------------
    {
      day: 14,
      title: 'Voiced Velar Stop /g/ & Words "gap", "got", "tag", "pig"',
      standard: 'CCSS.ELA-LITERACY.RF.K.2.D & Hard G Phoneme Awareness',
      strictBoundary: 'Consonant g (/g/) in initial and final positions with learned letters (a, i, o, p, t, m, s, c). No soft g (/dʒ/).',
      script: {
        say: '“Letter G makes a deep gulping sound: /g/! Feel your throat rumble: /g-g-g/! G-A-P spells GAP! T-A-G spells TAG!”',
        do: 'Feel the difference between whispery /k/ and vibrating /g/ at the back of the throat.',
        lookFor: 'Recognizes /g/ at both the beginning (got, gap) and ending (tag, pig) of CVC words.',
      },
      generateSheet: (variant = 1) => ({
        id: `phonics-d14-v${variant}`,
        title: 'Phonics Day 14: Consonant /g/ (gap, got, tag, pig)',
        subject: 'phonics',
        grade: 'K',
        instructions: 'Gulp with your throat for /g/! Tap sounds and write each word.',
        kidDirections: {
          text: '🎸 Throat vibration for /g/! 🏃 Blend tag and pig! ✏️ Write on the guidelines!',
          icons: ['🎸', '🏃', '✏️'],
          badge: 'Day 14 Phonics',
        },
        problems: [
          {
            id: 'p1',
            type: 'phonics-dictation',
            number: 1,
            word: 'gap',
            phonemes: ['g', 'a', 'p'],
            soundClues: [{ icon: '🎸', label: '/g/' }, { icon: '🍎', label: '/a/' }, { icon: '💨', label: '/p/' }],
          },
          {
            id: 'p2',
            type: 'phonics-dictation',
            number: 2,
            word: 'got',
            phonemes: ['g', 'o', 't'],
            soundClues: [{ icon: '🎸', label: '/g/' }, { icon: '🐙', label: '/o/' }, { icon: '🪀', label: '/t/' }],
          },
          {
            id: 'p3',
            type: 'phonics-dictation',
            number: 3,
            word: 'tag',
            phonemes: ['t', 'a', 'g'],
            soundClues: [{ icon: '🪀', label: '/t/' }, { icon: '🍎', label: '/a/' }, { icon: '🎸', label: '/g/' }],
          },
          {
            id: 'p4',
            type: 'phonics-dictation',
            number: 4,
            word: 'pig',
            phonemes: ['p', 'i', 'g'],
            soundClues: [{ icon: '💨', label: '/p/' }, { icon: '😁', label: '/i/' }, { icon: '🎸', label: '/g/' }],
          },
        ],
        cutStrip: {
          type: 'word-tiles',
          stage: 'Ages 4-6',
          items: ['gap', 'got', 'tag', 'pig'],
        },
        answerKey: [
          { number: 1, solution: 'G-A-P (/g/ /æ/ /p/ = "gap")' },
          { number: 2, solution: 'G-O-T (/g/ /ɒ/ /t/ = "got")' },
          { number: 3, solution: 'T-A-G (/t/ /æ/ /g/ = "tag")' },
          { number: 4, solution: 'P-I-G (/p/ /ɪ/ /g/ = "pig")' },
        ],
      }),
    },

    // -------------------------------------------------------------------------
    // DAY 15: Stop Consonant /b/ & b/d Tactile Directionality ("bat", "bag", "bad", "big")
    // -------------------------------------------------------------------------
    {
      day: 15,
      title: 'Stop Consonant /b/ & b/d Tactile Directionality ("bat", "bag", "bad", "big")',
      standard: 'CCSS.ELA-LITERACY.RF.K.1.D & Orton-Gillingham b/d Reversal Prevention',
      strictBoundary: 'Consonant b (/b/) and b/d discrimination. Explicit "bat before ball" multisensory cue. No blends.',
      script: {
        say: '“Never mix up b and d again! Remember: the BAT comes before the BALL for letter b! First make the tall bat, then the round ball! B-A-T spells BAT!”',
        do: 'Form two thumbs-up fists together to make a "bed" shape: left hand is \'b\', right hand is \'d\'.',
        lookFor: 'Writes lowercase \'b\' starting with the tall line down, then tracing up and around to form the ball on the right.',
      },
      generateSheet: (variant = 1) => ({
        id: `phonics-d15-v${variant}`,
        title: 'Phonics Day 15: Consonant /b/ & b/d Directionality',
        subject: 'phonics',
        grade: 'K',
        instructions: 'Remember: Bat before Ball for letter b! Tap out sounds and write your words.',
        kidDirections: {
          text: '🦇 Bat first, then ball: b! 🏃 /b/ + /a/ + /t/ = BAT! ✏️ Write your /b/ words!',
          icons: ['🦇', '⚾', '✏️'],
          badge: 'Day 15 Phonics',
        },
        problems: [
          {
            id: 'p1',
            type: 'phonics-dictation',
            number: 1,
            word: 'bat',
            phonemes: ['b', 'a', 't'],
            soundClues: [{ icon: '🦇', label: '/b/' }, { icon: '🍎', label: '/a/' }, { icon: '🪀', label: '/t/' }],
          },
          {
            id: 'p2',
            type: 'phonics-dictation',
            number: 2,
            word: 'bag',
            phonemes: ['b', 'a', 'g'],
            soundClues: [{ icon: '🎒', label: '/b/' }, { icon: '🍎', label: '/a/' }, { icon: '🎸', label: '/g/' }],
          },
          {
            id: 'p3',
            type: 'phonics-dictation',
            number: 3,
            word: 'bad',
            phonemes: ['b', 'a', 'd'],
            soundClues: [{ icon: '🦇', label: '/b/' }, { icon: '🍎', label: '/a/' }, { icon: '🥁', label: '/d/' }],
          },
          {
            id: 'p4',
            type: 'phonics-dictation',
            number: 4,
            word: 'big',
            phonemes: ['b', 'i', 'g'],
            soundClues: [{ icon: '🐻', label: '/b/' }, { icon: '😁', label: '/i/' }, { icon: '🎸', label: '/g/' }],
          },
        ],
        cutStrip: {
          type: 'word-tiles',
          stage: 'Ages 4-6',
          items: ['bat', 'bag', 'bad', 'big'],
        },
        answerKey: [
          { number: 1, solution: 'B-A-T (/b/ /æ/ /t/ = "bat")' },
          { number: 2, solution: 'B-A-G (/b/ /æ/ /g/ = "bag")' },
          { number: 3, solution: 'B-A-D (/b/ /æ/ /d/ = "bad")' },
          { number: 4, solution: 'B-I-G (/b/ /ɪ/ /g/ = "big")' },
        ],
      }),
    },

    // -------------------------------------------------------------------------
    // DAY 16: Short Vowel /u/ & Words "sun", "cup", "nut", "bug"
    // -------------------------------------------------------------------------
    {
      day: 16,
      title: 'Short Vowel /u/ & Words "sun", "cup", "nut", "bug"',
      standard: 'CCSS.ELA-LITERACY.RF.K.2.D & Short U Central Vowel /ʌ/',
      strictBoundary: 'Short vowel u (/ʌ/) and CVC words using learned consonants (s, n, c, p, t, b, g, m, d). No vowel e yet.',
      script: {
        say: '“Put your hand on your tummy and look up: /u/ like an umbrella going up! S-U-N spells SUN! C-U-P spells CUP!”',
        do: 'Touch stomach on /u/: feel the relaxed tummy sound. Contrast /u/ (cup) with /a/ (cap) and /o/ (cop).',
        lookFor: 'Clearly articulates /u/ without sliding into /o/ or /a/. Taps /s/ /u/ /n/ and writes letters with proper down-strokes.',
      },
      generateSheet: (variant = 1) => ({
        id: `phonics-d16-v${variant}`,
        title: 'Phonics Day 16: Short Vowel /u/ (sun, cup, nut, bug)',
        subject: 'phonics',
        grade: 'K',
        instructions: 'Look up for short /u/! Tap the sounds and write each word on the lines.',
        kidDirections: {
          text: '☀️ /u/ goes UP like an umbrella! 🏃 /s/ + /u/ + /n/ = SUN! ✏️ Write your words!',
          icons: ['☀️', '☂️', '✏️'],
          badge: 'Day 16 Phonics',
        },
        problems: [
          {
            id: 'p1',
            type: 'phonics-dictation',
            number: 1,
            word: 'sun',
            phonemes: ['s', 'u', 'n'],
            soundClues: [{ icon: '🐍', label: '/s/' }, { icon: '☀️', label: '/u/' }, { icon: '👃', label: '/n/' }],
          },
          {
            id: 'p2',
            type: 'phonics-dictation',
            number: 2,
            word: 'cup',
            phonemes: ['c', 'u', 'p'],
            soundClues: [{ icon: '🥫', label: '/k/' }, { icon: '☀️', label: '/u/' }, { icon: '💨', label: '/p/' }],
          },
          {
            id: 'p3',
            type: 'phonics-dictation',
            number: 3,
            word: 'nut',
            phonemes: ['n', 'u', 't'],
            soundClues: [{ icon: '👃', label: '/n/' }, { icon: '☀️', label: '/u/' }, { icon: '🪀', label: '/t/' }],
          },
          {
            id: 'p4',
            type: 'phonics-dictation',
            number: 4,
            word: 'bug',
            phonemes: ['b', 'u', 'g'],
            soundClues: [{ icon: '🦇', label: '/b/' }, { icon: '☀️', label: '/u/' }, { icon: '🎸', label: '/g/' }],
          },
        ],
        cutStrip: {
          type: 'word-tiles',
          stage: 'Ages 4-6',
          items: ['sun', 'cup', 'nut', 'bug'],
        },
        answerKey: [
          { number: 1, solution: 'S-U-N (/s/ /ʌ/ /n/ = "sun")' },
          { number: 2, solution: 'C-U-P (/k/ /ʌ/ /p/ = "cup")' },
          { number: 3, solution: 'N-U-T (/n/ /ʌ/ /t/ = "nut")' },
          { number: 4, solution: 'B-U-G (/b/ /ʌ/ /g/ = "bug")' },
        ],
      }),
    },

    // -------------------------------------------------------------------------
    // DAY 17: Warm Breath /h/ & Letter "k" ("hat", "hot", "hut", "kid")
    // -------------------------------------------------------------------------
    {
      day: 17,
      title: 'Warm Breath /h/ & Letter "k" ("hat", "hot", "hut", "kid")',
      standard: 'CCSS.ELA-LITERACY.RF.K.3.A & Aspiration /h/ + Letter k',
      strictBoundary: 'Aspirated consonant h (/h/) and letter k with short vowels (a, o, u, i). No silent letters or digraphs.',
      script: {
        say: '“Hold your palm in front of your lips: blow warm breath out: /h-h-h/! H-A-T spells HAT! H-O-T spells HOT! H-U-T spells HUT!”',
        do: 'Feel the warm exhaled breath on your hand for /h/. Notice the vowel shift: hat -> hot -> hut.',
        lookFor: 'Identifies /h/ as quiet warm breath. Observes the single vowel change across the word triad (hat/hot/hut).',
      },
      generateSheet: (variant = 1) => ({
        id: `phonics-d17-v${variant}`,
        title: 'Phonics Day 17: Consonant /h/ & Letter k (hat, hot, hut, kid)',
        subject: 'phonics',
        grade: 'K',
        instructions: 'Feel the warm air on /h/! Notice how the middle vowel changes the word!',
        kidDirections: {
          text: '🎩 Warm breath /h/! 🔀 Hat -> Hot -> Hut! ✏️ Write your words on the lines!',
          icons: ['🎩', '♨️', '✏️'],
          badge: 'Day 17 Phonics',
        },
        problems: [
          {
            id: 'p1',
            type: 'phonics-dictation',
            number: 1,
            word: 'hat',
            phonemes: ['h', 'a', 't'],
            soundClues: [{ icon: '🎩', label: '/h/' }, { icon: '🍎', label: '/a/' }, { icon: '🪀', label: '/t/' }],
          },
          {
            id: 'p2',
            type: 'phonics-dictation',
            number: 2,
            word: 'hot',
            phonemes: ['h', 'o', 't'],
            soundClues: [{ icon: '♨️', label: '/h/' }, { icon: '🐙', label: '/o/' }, { icon: '🪀', label: '/t/' }],
          },
          {
            id: 'p3',
            type: 'phonics-dictation',
            number: 3,
            word: 'hut',
            phonemes: ['h', 'u', 't'],
            soundClues: [{ icon: '🛖', label: '/h/' }, { icon: '☀️', label: '/u/' }, { icon: '🪀', label: '/t/' }],
          },
          {
            id: 'p4',
            type: 'phonics-dictation',
            number: 4,
            word: 'kid',
            phonemes: ['k', 'i', 'd'],
            soundClues: [{ icon: '🧒', label: '/k/' }, { icon: '😁', label: '/i/' }, { icon: '🥁', label: '/d/' }],
          },
        ],
        cutStrip: {
          type: 'word-tiles',
          stage: 'Ages 4-6',
          items: ['hat', 'hot', 'hut', 'kid'],
        },
        answerKey: [
          { number: 1, solution: 'H-A-T (/h/ /æ/ /t/ = "hat")' },
          { number: 2, solution: 'H-O-T (/h/ /ɒ/ /t/ = "hot")' },
          { number: 3, solution: 'H-U-T (/h/ /ʌ/ /t/ = "hut")' },
          { number: 4, solution: 'K-I-D (/k/ /ɪ/ /d/ = "kid")' },
        ],
      }),
    },

    // -------------------------------------------------------------------------
    // DAY 18: Short Vowel /e/ & Words "bed", "red", "net", "pet"
    // -------------------------------------------------------------------------
    {
      day: 18,
      title: 'Short Vowel /e/ & Words "bed", "red", "net", "pet"',
      standard: 'CCSS.ELA-LITERACY.RF.K.2.D & Short E Front Mid Vowel /ɛ/',
      strictBoundary: 'Short vowel e (/ɛ/) and CVC words. Contrast /e/ (bed) vs /i/ (bid) to conquer the hardest vowel pair.',
      script: {
        say: '“Short /e/ is the elephant sound: /e/ like an egg in an eggcup! B-E-D spells BED! R-E-D spells RED! Watch your chin: /e/ is half-open, not smiling like /i/!”',
        do: 'Place index finger horizontally between upper and lower teeth: short /e/ touches your finger slightly, while /i/ smiles wider.',
        lookFor: 'Accurately distinguishes /e/ from /i/. Does not write "bad" or "bid" when "bed" is dictated.',
      },
      generateSheet: (variant = 1) => ({
        id: `phonics-d18-v${variant}`,
        title: 'Phonics Day 18: Short Vowel /e/ (bed, red, net, pet)',
        subject: 'phonics',
        grade: 'K',
        instructions: 'Crack an egg for short /e/! Tap out each sound and write your words.',
        kidDirections: {
          text: '🥚 /e/ like an egg in a cup! 🏃 /b/ + /e/ + /d/ = BED! ✏️ Write short /e/ words!',
          icons: ['🥚', '🛏️', '✏️'],
          badge: 'Day 18 Phonics',
        },
        problems: [
          {
            id: 'p1',
            type: 'phonics-dictation',
            number: 1,
            word: 'bed',
            phonemes: ['b', 'e', 'd'],
            soundClues: [{ icon: '🦇', label: '/b/' }, { icon: '🥚', label: '/e/' }, { icon: '🥁', label: '/d/' }],
          },
          {
            id: 'p2',
            type: 'phonics-dictation',
            number: 2,
            word: 'red',
            phonemes: ['r', 'e', 'd'],
            soundClues: [{ icon: '🔴', label: '/r/' }, { icon: '🥚', label: '/e/' }, { icon: '🥁', label: '/d/' }],
          },
          {
            id: 'p3',
            type: 'phonics-dictation',
            number: 3,
            word: 'net',
            phonemes: ['n', 'e', 't'],
            soundClues: [{ icon: '👃', label: '/n/' }, { icon: '🥚', label: '/e/' }, { icon: '🪀', label: '/t/' }],
          },
          {
            id: 'p4',
            type: 'phonics-dictation',
            number: 4,
            word: 'pet',
            phonemes: ['p', 'e', 't'],
            soundClues: [{ icon: '💨', label: '/p/' }, { icon: '🥚', label: '/e/' }, { icon: '🪀', label: '/t/' }],
          },
        ],
        cutStrip: {
          type: 'word-tiles',
          stage: 'Ages 4-6',
          items: ['bed', 'red', 'net', 'pet'],
        },
        answerKey: [
          { number: 1, solution: 'B-E-D (/b/ /ɛ/ /d/ = "bed")' },
          { number: 2, solution: 'R-E-D (/r/ /ɛ/ /d/ = "red")' },
          { number: 3, solution: 'N-E-T (/n/ /ɛ/ /t/ = "net")' },
          { number: 4, solution: 'P-E-T (/p/ /ɛ/ /t/ = "pet")' },
        ],
      }),
    },

    // -------------------------------------------------------------------------
    // DAY 19: Heart Words & 5-Vowel Minimal Pair Contrast
    // -------------------------------------------------------------------------
    {
      day: 19,
      title: 'Heart Words ("is", "see", "to", "I") & 5-Vowel Minimal Pair Contrast',
      standard: 'CCSS.ELA-LITERACY.RF.K.3.C & Phonemic Minimal Pair Discrimination',
      strictBoundary: 'High-frequency heart words (is, see, to, I) and minimal pair vowel substitution across known consonants (pat, pet, pit, pot). No silent e.',
      script: {
        say: '“Today we learn four secret Heart Words: IS, SEE, TO, and I! We memorize the tricky parts by heart. Then see how one vowel changes a word: pat, pet, pit, pot!”',
        do: 'Point to the heart word card. Highlight the "heart part" (e.g., s saying /z/ in "is"). Then build the vowel ladder together.',
        lookFor: 'Reads heart words without stalling. Accurately identifies vowel phonemes when only the middle vowel changes.',
      },
      generateSheet: (variant = 1) => ({
        id: `phonics-d19-v${variant}`,
        title: 'Phonics Day 19: Heart Words & Vowel Sound Ladder',
        subject: 'phonics',
        grade: 'K',
        instructions: 'Practice heart words and trace the vowel switch: pat, pet, pit, pot!',
        kidDirections: {
          text: '❤️ Read Heart Words: is, see, to, I! 🪜 Climb the vowel ladder! ✏️ Write each word!',
          icons: ['❤️', '🪜', '✏️'],
          badge: 'Day 19 Phonics',
        },
        problems: [
          {
            id: 'p1',
            type: 'phonics-dictation',
            number: 1,
            word: 'pat',
            phonemes: ['p', 'a', 't'],
            soundClues: [{ icon: '💨', label: '/p/' }, { icon: '🍎', label: '/a/' }, { icon: '🪀', label: '/t/' }],
          },
          {
            id: 'p2',
            type: 'phonics-dictation',
            number: 2,
            word: 'pet',
            phonemes: ['p', 'e', 't'],
            soundClues: [{ icon: '💨', label: '/p/' }, { icon: '🥚', label: '/e/' }, { icon: '🪀', label: '/t/' }],
          },
          {
            id: 'p3',
            type: 'phonics-dictation',
            number: 3,
            word: 'pit',
            phonemes: ['p', 'i', 't'],
            soundClues: [{ icon: '💨', label: '/p/' }, { icon: '😁', label: '/i/' }, { icon: '🪀', label: '/t/' }],
          },
          {
            id: 'p4',
            type: 'phonics-dictation',
            number: 4,
            word: 'pot',
            phonemes: ['p', 'o', 't'],
            soundClues: [{ icon: '💨', label: '/p/' }, { icon: '🐙', label: '/o/' }, { icon: '🪀', label: '/t/' }],
          },
        ],
        decodablePhrases: ['I see a cat', 'The dog is hot', 'A bug is in the cup', 'Pat the red hen'],
        cutStrip: {
          type: 'word-tiles',
          stage: 'Ages 4-6',
          items: ['is', 'see', 'to', 'I'],
        },
        answerKey: [
          { number: 1, solution: 'P-A-T (short a)' },
          { number: 2, solution: 'P-E-T (short e)' },
          { number: 3, solution: 'P-I-T (short i)' },
          { number: 4, solution: 'P-O-T (short o)' },
        ],
      }),
    },

    // -------------------------------------------------------------------------
    // DAY 20: Phonics Grand Champion: 5 Short Vowels Decodable Story Fluency
    // -------------------------------------------------------------------------
    {
      day: 20,
      title: 'Phonics Day 20 Grand Champion: 5 Short Vowels Decodable Story Fluency',
      standard: 'CCSS.ELA-LITERACY.RF.K.4 & Orton-Gillingham Cumulative Mid-Quarter Mastery',
      strictBoundary: 'Cumulative decodable story reading with all 5 short vowels (a, e, i, o, u) and heart words (the, a, is, see, to, I). No vowel teams or r-controlled vowels.',
      script: {
        say: '“Day 20 Reading Grand Champion! Look at this real story you can read all by yourself! All five vowels: A, E, I, O, U! Read: \'A big pig had a red cup. The cat sat in the hot sun!\'”',
        do: 'Follow under the words with your child’s finger. Give a high-five for each sentence read accurately!',
        lookFor: 'Reads decodable sentences smoothly from left to right with self-correction and zero guessing.',
      },
      generateSheet: (variant = 1) => ({
        id: `phonics-d20-v${variant}`,
        title: 'Phonics Day 20: 5-Vowel Grand Champion Decodable Reader',
        subject: 'phonics',
        grade: 'K',
        instructions: 'Celebrate mastering all 5 short vowels! Read the champion story and write the champion words.',
        kidDirections: {
          text: '🏆 Day 20 Grand Champion! 📖 Read your decodable story! ✏️ Write your champion words!',
          icons: ['🏆', '📖', '⭐'],
          badge: 'Day 20 Phonics Champion',
        },
        problems: [
          {
            id: 'p1',
            type: 'phonics-dictation',
            number: 1,
            word: 'cat',
            phonemes: ['c', 'a', 't'],
            soundClues: [{ icon: '🐱', label: 'short a' }],
          },
          {
            id: 'p2',
            type: 'phonics-dictation',
            number: 2,
            word: 'bed',
            phonemes: ['b', 'e', 'd'],
            soundClues: [{ icon: '🛏️', label: 'short e' }],
          },
          {
            id: 'p3',
            type: 'phonics-dictation',
            number: 3,
            word: 'pig',
            phonemes: ['p', 'i', 'g'],
            soundClues: [{ icon: '🐷', label: 'short i' }],
          },
          {
            id: 'p4',
            type: 'phonics-dictation',
            number: 4,
            word: 'sun',
            phonemes: ['s', 'u', 'n'],
            soundClues: [{ icon: '☀️', label: 'short u' }],
          },
        ],
        decodablePhrases: [
          'A big pig had a red cup.',
          'The cat sat in the hot sun.',
          'I see a bug on the mat.',
          'Dad got a big pot for Mom.',
        ],
        cutStrip: {
          type: 'word-tiles',
          stage: 'Ages 4-6',
          items: ['a e i o u', 'Short Vowel Star', 'Decodable Reader', '🏆 Reading Champion!'],
        },
        answerKey: [
          { number: 1, solution: 'C-A-T (short a: /k/ /æ/ /t/)' },
          { number: 2, solution: 'B-E-D (short e: /b/ /ɛ/ /d/)' },
          { number: 3, solution: 'P-I-G (short i: /p/ /ɪ/ /g/)' },
          { number: 4, solution: 'S-U-N (short u: /s/ /ʌ/ /n/)' },
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
      strictBoundary: 'Living vs non-living basic rules (eat, drink, grow). No cellular biology or complex systems.',
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
      strictBoundary: 'Plant growth basics (sunlight and water). No photosynthesis biochemistry.',
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
      strictBoundary: 'External animal coverings (fur, feathers, scales). No internal anatomy.',
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
      strictBoundary: 'Observable weather conditions (sunny, rainy, cloudy, windy) and clothing. No meteorology systems.',
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
      strictBoundary: 'Survival priority sequence (air, shelter, water). No complex medical interventions.',
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
      strictBoundary: 'Water purification concepts (filtering and boiling). No chemical water purification formulas.',
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
      strictBoundary: 'Basic push vs pull directional forces. No Newton law equations or friction calculations.',
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
      strictBoundary: 'Senses of sight (eyes) and hearing (ears). No optical or acoustic physics.',
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
      strictBoundary: 'Senses of touch, smell, and taste. No neurobiology or nerve pathway mechanisms.',
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
      strictBoundary: 'Cumulative review of kindergarten observations, senses, and living needs. No upper-grade science.',
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

    // -------------------------------------------------------------------------
    // DAY 11: Plant Anatomy: Roots, Stems, and Leaves
    // -------------------------------------------------------------------------
    {
      day: 11,
      title: 'Plant Anatomy: Roots, Stems, and Leaves',
      standard: 'NGSS K-LS1-1 & Plant Physiology Foundations',
      strictBoundary: 'Identification and function of plant roots, stems, and leaves. No cellular structures or photosynthesis chemistry.',
      script: {
        say: '“Plants have special parts just like we have arms and legs! Roots drink water from underground, stems act like straws carrying water up, and leaves catch sunlight!”',
        do: 'Gently examine a celery stalk or houseplant: trace where water travels from the bottom roots up the stem to the green leaves.',
        lookFor: 'Connects each plant part to its job: roots = anchor & water, stem = support & straw, leaves = sunlight.',
      },
      generateSheet: (variant = 1) => ({
        id: `sci-d11-v${variant}`,
        title: 'Science Day 11: Plant Anatomy (Roots, Stems, Leaves)',
        subject: 'science',
        grade: 'K',
        instructions: 'Identify the jobs of plant roots, stems, and leaves!',
        kidDirections: {
          text: '🌱 Roots drink water! 🥤 Stems are like straws! 🍃 Leaves catch the sun! ✏️ Circle!',
          icons: ['🌱', '🥤', '🍃', '✏️'],
          badge: 'Day 11 Science',
        },
        problems: [
          {
            id: 'p1',
            type: 'science-inquiry',
            number: 1,
            prompt: 'What do ROOTS do deep underground?',
            options: ['Drink water and hold the plant tight', 'Fly in the sky like birds', 'Make loud noises', 'Eat potato chips'],
          },
          {
            id: 'p2',
            type: 'science-inquiry',
            number: 2,
            prompt: 'Which plant part acts like a STRAW carrying water up to the leaves?',
            options: ['The STEM', 'The flower petal', 'The seed shell', 'The fruit'],
          },
          {
            id: 'p3',
            type: 'science-inquiry',
            number: 3,
            prompt: 'What do green LEAVES catch to help the plant make food?',
            options: ['Warm SUNLIGHT', 'Cold snowballs', 'Plastic toys', 'Dark shadows'],
          },
        ],
        cutStrip: {
          type: 'straight-strips',
          stage: 'Ages 3-5 (Bottom-Edge Cut)',
          items: ['Roots = Drink Water', 'Stem = Plant Straw', 'Leaves = Sun Catchers', 'Happy Plant! 🌱'],
        },
        answerKey: [
          { number: 1, solution: 'Drink water and hold the plant tight (Roots)' },
          { number: 2, solution: 'The STEM' },
          { number: 3, solution: 'Warm SUNLIGHT' },
        ],
      }),
    },

    // -------------------------------------------------------------------------
    // DAY 12: Flowers, Fruit & Seed Dispersal
    // -------------------------------------------------------------------------
    {
      day: 12,
      title: 'Flowers, Fruit & Seed Dispersal',
      standard: 'NGSS K-LS1-1 & Life Cycles',
      strictBoundary: 'Flowers attract pollinators and produce fruit/seeds. Seed travel by wind/animals. No genetic reproduction details.',
      script: {
        say: '“Flowers aren’t just pretty—they have a big job! Bees visit flowers for nectar and help flowers make seeds. The fruit grows around the seed to protect it!”',
        do: 'Cut open an apple or pepper together: show the seeds tucked safely inside the juicy fruit.',
        lookFor: 'Understands that flowers make seeds and fruit protects seeds until they can grow into new plants.',
      },
      generateSheet: (variant = 1) => ({
        id: `sci-d12-v${variant}`,
        title: 'Science Day 12: Flowers, Fruits & Seeds',
        subject: 'science',
        grade: 'K',
        instructions: 'Discover how flowers make seeds and how seeds travel to new soil!',
        kidDirections: {
          text: '🌸 Flowers attract bees! 🍎 Fruit protects seeds inside! ✏️ Choose the right answer!',
          icons: ['🌸', '🐝', '🍎', '✏️'],
          badge: 'Day 12 Science',
        },
        problems: [
          {
            id: 'p1',
            type: 'science-inquiry',
            number: 1,
            prompt: 'Why do colorful FLOWERS have bright petals and sweet smells?',
            options: ['To attract bees and butterflies to help make seeds', 'To scare away animals', 'To sleep in the dark', 'To blow bubbles'],
          },
          {
            id: 'p2',
            type: 'science-inquiry',
            number: 2,
            prompt: 'What grows around seeds to protect them and give animals tasty food?',
            options: ['Sweet, juicy FRUIT (like apples)', 'Hard stones', 'Rubber tires', 'Ice cubes'],
          },
          {
            id: 'p3',
            type: 'science-inquiry',
            number: 3,
            prompt: 'How do fluffy dandelion seeds travel to find new soil to grow in?',
            options: ['Floating on the WIND', 'Riding in a taxi', 'Swimming in a boat', 'Watching TV'],
          },
        ],
        cutStrip: {
          type: 'straight-strips',
          stage: 'Ages 3-5 (Bottom-Edge Cut)',
          items: ['Flowers: Make Seeds', 'Fruit: Protects Seeds', 'Bees: Pollinate', 'Wind: Carries Seeds'],
        },
        answerKey: [
          { number: 1, solution: 'To attract bees and butterflies to help make seeds' },
          { number: 2, solution: 'Sweet, juicy FRUIT (like apples)' },
          { number: 3, solution: 'Floating on the WIND' },
        ],
      }),
    },

    // -------------------------------------------------------------------------
    // DAY 13: Animal Habitats: Ocean, Forest, Desert, and Arctic
    // -------------------------------------------------------------------------
    {
      day: 13,
      title: 'Animal Habitats: Ocean, Forest, Desert, and Arctic',
      standard: 'NGSS K-ESS3-1 & Biome Adaptations',
      strictBoundary: 'Matching familiar animals to their primary habitat (ocean, forest, desert, arctic). No complex ecological niches.',
      script: {
        say: '“Every animal has a home called a habitat that gives it the food, water, and shelter it needs! A polar bear loves the cold Arctic, but a camel loves the dry desert!”',
        do: 'Ask: "Could a fish live in a tree? Could a monkey live in the ocean? Why not?"',
        lookFor: 'Explains why an animal belongs in its habitat based on water, temperature, and shelter.',
      },
      generateSheet: (variant = 1) => ({
        id: `sci-d13-v${variant}`,
        title: 'Science Day 13: Animal Habitats & Homes',
        subject: 'science',
        grade: 'K',
        instructions: 'Match each animal to the habitat where it survives best!',
        kidDirections: {
          text: '🌲 Forest, 🌊 Ocean, 🏜️ Desert, ❄️ Arctic! ✏️ Pick each animal’s true home!',
          icons: ['🌲', '🌊', '🏜️', '❄️'],
          badge: 'Day 13 Science',
        },
        problems: [
          {
            id: 'p1',
            type: 'science-inquiry',
            number: 1,
            prompt: 'Where does a giant blue WHALE live and swim?',
            options: ['In the deep salty OCEAN', 'In a desert cactus', 'In a mountain cave', 'In a bird nest'],
          },
          {
            id: 'p2',
            type: 'science-inquiry',
            number: 2,
            prompt: 'Which animal has thick white fur and blubber to live on freezing ARCTIC ice?',
            options: ['A POLAR BEAR', 'A tropical parrot', 'A goldfish', 'A desert lizard'],
          },
          {
            id: 'p3',
            type: 'science-inquiry',
            number: 3,
            prompt: 'Where does a CAMEL live, storing fat in its humps for long walks without water?',
            options: ['In the hot, sandy DESERT', 'Under deep ocean waves', 'In a cold snow drift', 'In a treetop nest'],
          },
          {
            id: 'p4',
            type: 'science-inquiry',
            number: 4,
            prompt: 'Which habitat is filled with tall trees, acorns, and shade for deer and squirrels?',
            options: ['The green FOREST', 'The bottom of the ocean', 'The sandy beach', 'An ice sheet'],
          },
        ],
        cutStrip: {
          type: 'straight-strips',
          stage: 'Ages 3-5 (Bottom-Edge Cut)',
          items: ['Whale = Ocean', 'Polar Bear = Arctic', 'Camel = Desert', 'Squirrel = Forest'],
        },
        answerKey: [
          { number: 1, solution: 'In the deep salty OCEAN' },
          { number: 2, solution: 'A POLAR BEAR' },
          { number: 3, solution: 'In the hot, sandy DESERT' },
          { number: 4, solution: 'The green FOREST' },
        ],
      }),
    },

    // -------------------------------------------------------------------------
    // DAY 14: Animal Diets: Herbivores, Carnivores & Omnivores
    // -------------------------------------------------------------------------
    {
      day: 14,
      title: 'Animal Diets: Herbivores, Carnivores & Omnivores',
      standard: 'NGSS K-LS1-1 & Food Chains',
      strictBoundary: 'Plant eaters vs meat eaters vs animals that eat both. No trophic levels or biochemical calories.',
      script: {
        say: '“What is for dinner? Animals eat different foods! A cow eats grass—that is an herbivore! A lion eats meat—a carnivore! A bear eats berries AND fish—an omnivore!”',
        do: 'Look at your own dinner plate: "Are humans herbivores, carnivores, or omnivores?" (Omnivores because we eat veggies and meat/protein!).',
        lookFor: 'Categorizes animals by their food source with clear reasoning.',
      },
      generateSheet: (variant = 1) => ({
        id: `sci-d14-v${variant}`,
        title: 'Science Day 14: What Do Animals Eat? (Diets)',
        subject: 'science',
        grade: 'K',
        instructions: 'Learn what animals eat to grow strong and healthy!',
        kidDirections: {
          text: '🌿 Plants or 🥩 Meat? 🐻 Or both? ✏️ Choose the right food for each animal!',
          icons: ['🌿', '🥩', '🐻', '✏️'],
          badge: 'Day 14 Science',
        },
        problems: [
          {
            id: 'p1',
            type: 'science-inquiry',
            number: 1,
            prompt: 'A gentle cow and rabbit eat grass and leafy plants. They are called...',
            options: ['HERBIVORES (Plant Eaters)', 'Carnivores (Meat Only)', 'Robots', 'Puddle Drinkers'],
          },
          {
            id: 'p2',
            type: 'science-inquiry',
            number: 2,
            prompt: 'A mighty lion has sharp teeth and hunts for meat. A lion is a...',
            options: ['CARNIVORE (Meat Eater)', 'Plant Grazer', 'Fruit Picker', 'Grain Eater'],
          },
          {
            id: 'p3',
            type: 'science-inquiry',
            number: 3,
            prompt: 'A brown bear loves eating both wild berries AND fresh river fish! The bear is an...',
            options: ['OMNIVORE (Eats Plants & Meat)', 'Herbivore (Plants only)', 'Carnivore (Meat only)', 'Sun Absorber'],
          },
        ],
        cutStrip: {
          type: 'straight-strips',
          stage: 'Ages 3-5 (Bottom-Edge Cut)',
          items: ['Herbivore: Plants 🌿', 'Carnivore: Meat 🥩', 'Omnivore: Both 🐻', 'Healthy Animals!'],
        },
        answerKey: [
          { number: 1, solution: 'HERBIVORES (Plant Eaters)' },
          { number: 2, solution: 'CARNIVORE (Meat Eater)' },
          { number: 3, solution: 'OMNIVORE (Eats Plants & Meat)' },
        ],
      }),
    },

    // -------------------------------------------------------------------------
    // DAY 15: Day Sky vs. Night Sky (Sun, Moon & Stars)
    // -------------------------------------------------------------------------
    {
      day: 15,
      title: 'Day Sky vs. Night Sky (Sun, Moon & Stars)',
      standard: 'NGSS K-ESS1-1 & Earth in the Solar System',
      strictBoundary: 'Day vs night sky objects and safety rule (never look directly at the Sun). No planetary orbits or celestial mechanics.',
      script: {
        say: '“Look up at the daytime sky: our Sun gives us bright light and warm heat! At night, when our side of Earth turns away from the Sun, we see the Moon and twinkling stars!”',
        do: 'Step outside or look out the window: notice how bright the Sun makes everything during the day. Emphasize: Never look straight at the sun!',
        lookFor: 'Names Sun as the source of daylight/warmth and Moon/stars as nighttime objects.',
      },
      generateSheet: (variant = 1) => ({
        id: `sci-d15-v${variant}`,
        title: 'Science Day 15: Day Sky vs. Night Sky',
        subject: 'science',
        grade: 'K',
        instructions: 'Compare the daytime sky and nighttime sky!',
        kidDirections: {
          text: '☀️ Day sky has the Sun! 🌙 Night sky has Moon and stars! ✏️ Circle the right sky!',
          icons: ['☀️', '🌙', '⭐', '✏️'],
          badge: 'Day 15 Science',
        },
        problems: [
          {
            id: 'p1',
            type: 'science-inquiry',
            number: 1,
            prompt: 'What giant star warms our Earth and provides bright light during the day?',
            options: ['The bright SUN', 'A flashlight', 'A campfire', 'A street lamp'],
          },
          {
            id: 'p2',
            type: 'science-inquiry',
            number: 2,
            prompt: 'What can we see glowing and twinkling in the dark night sky?',
            options: ['The MOON and STARS', 'The hot noon sun', 'Rainbows in the dark', 'Sunny beaches'],
          },
          {
            id: 'p3',
            type: 'science-inquiry',
            number: 3,
            prompt: 'Important Sun Safety Rule: How must we look at the bright Sun in the sky?',
            options: ['NEVER look straight at the sun (protect eyes!)', 'Stare right at it', 'Use magnifying glasses', 'Close one eye'],
          },
        ],
        cutStrip: {
          type: 'straight-strips',
          stage: 'Ages 3-5 (Bottom-Edge Cut)',
          items: ['Sun = Day & Heat', 'Moon = Night Light', 'Stars = Twinkling', 'Never Stare at Sun!'],
        },
        answerKey: [
          { number: 1, solution: 'The bright SUN' },
          { number: 2, solution: 'The MOON and STARS' },
          { number: 3, solution: 'NEVER look straight at the sun (protect eyes!)' },
        ],
      }),
    },

    // -------------------------------------------------------------------------
    // DAY 16: The Four Seasons (Spring, Summer, Fall, Winter)
    // -------------------------------------------------------------------------
    {
      day: 16,
      title: 'The Four Seasons (Spring, Summer, Fall, Winter)',
      standard: 'NGSS K-ESS2-1 & Weather Patterns',
      strictBoundary: 'Characteristics of the 4 seasons (temperature, trees, clothing). No axial tilt or equinox definitions.',
      script: {
        say: '“Our Earth has four seasons in a repeating cycle: Spring brings baby flowers, Summer is hot and sunny, Fall turns leaves orange and red, and Winter brings cold snow!”',
        do: 'Ask: "What do you wear in summer vs winter? What season are we in right now?"',
        lookFor: 'Names the four seasons in order and connects appropriate seasonal clothing.',
      },
      generateSheet: (variant = 1) => ({
        id: `sci-d16-v${variant}`,
        title: 'Science Day 16: The Four Seasons',
        subject: 'science',
        grade: 'K',
        instructions: 'Match seasonal changes and clothing to each of the four seasons!',
        kidDirections: {
          text: '🌸 Spring, ☀️ Summer, 🍂 Fall, ❄️ Winter! ✏️ Match the season clues!',
          icons: ['🌸', '☀️', '🍂', '❄️'],
          badge: 'Day 16 Science',
        },
        problems: [
          {
            id: 'p1',
            type: 'science-inquiry',
            number: 1,
            prompt: 'In which season do flowers bloom, baby birds hatch, and green grass sprouts?',
            options: ['SPRING 🌸', 'Winter ❄️', 'Freezing night', 'Midnight'],
          },
          {
            id: 'p2',
            type: 'science-inquiry',
            number: 2,
            prompt: 'In which season are days hot and sunny, and we wear swimsuits and shorts?',
            options: ['SUMMER ☀️', 'Winter blizzard', 'Autumn freeze', 'Spring rain'],
          },
          {
            id: 'p3',
            type: 'science-inquiry',
            number: 3,
            prompt: 'In which season do green leaves turn red, orange, and gold and fall from trees?',
            options: ['FALL / AUTUMN 🍂', 'Summer beach day', 'Spring sprout', 'Hot July'],
          },
          {
            id: 'p4',
            type: 'science-inquiry',
            number: 4,
            prompt: 'In which season is it freezing cold outside, and we put on heavy winter coats?',
            options: ['WINTER ❄️', 'Summer picnic', 'Spring warm breeze', 'Sunny August'],
          },
        ],
        cutStrip: {
          type: 'straight-strips',
          stage: 'Ages 3-5 (Bottom-Edge Cut)',
          items: ['🌸 Spring Buds', '☀️ Summer Sun', '🍂 Fall Leaves', '❄️ Winter Snow'],
        },
        answerKey: [
          { number: 1, solution: 'SPRING 🌸' },
          { number: 2, solution: 'SUMMER ☀️' },
          { number: 3, solution: 'FALL / AUTUMN 🍂' },
          { number: 4, solution: 'WINTER ❄️' },
        ],
      }),
    },

    // -------------------------------------------------------------------------
    // DAY 17: States of Matter: Solids vs. Liquids
    // -------------------------------------------------------------------------
    {
      day: 17,
      title: 'States of Matter: Solids vs. Liquids',
      standard: 'NGSS 2-PS1-1 / K Physical Science Foundations',
      strictBoundary: 'Solids hold their shape; liquids flow and take the shape of their container. Melting ice demonstration. No gases/plasma.',
      script: {
        say: '“Everything around us is made of matter! A rock is a SOLID—it holds its shape. Water is a LIQUID—it flows and takes the shape of the cup you pour it in!”',
        do: 'Hold an ice cube: it is solid. Watch it melt into liquid water in your warm hand!',
        lookFor: 'Understands that a solid stays the same shape when moved, but a liquid spreads out and flows.',
      },
      generateSheet: (variant = 1) => ({
        id: `sci-d17-v${variant}`,
        title: 'Science Day 17: Solids vs. Liquids',
        subject: 'science',
        grade: 'K',
        instructions: 'Identify whether each item is a SOLID (keeps shape) or a LIQUID (flows)!',
        kidDirections: {
          text: '🧊 Solids hold their shape! 💧 Liquids flow and pour! ✏️ Circle Solid or Liquid!',
          icons: ['🧊', '💧', '✏️'],
          badge: 'Day 17 Science',
        },
        problems: [
          {
            id: 'p1',
            type: 'science-inquiry',
            number: 1,
            prompt: 'A wooden toy building block stays the exact same shape on the floor or in a box. It is a...',
            options: ['SOLID 🧱', 'Liquid', 'Gas', 'Puddle'],
          },
          {
            id: 'p2',
            type: 'science-inquiry',
            number: 2,
            prompt: 'A cold cup of milk pours smoothly and takes the shape of your glass. Milk is a...',
            options: ['LIQUID 🥛', 'Solid', 'Rock', 'Wood block'],
          },
          {
            id: 'p3',
            type: 'science-inquiry',
            number: 3,
            prompt: 'An ice cube is frozen solid water. When it warms up in your hand, what does it turn into?',
            options: ['LIQUID WATER 💧', 'A heavy rock', 'A metal key', 'Wood'],
          },
          {
            id: 'p4',
            type: 'science-inquiry',
            number: 4,
            prompt: 'Which of these is a LIQUID you can pour from a pitcher?',
            options: ['Fresh orange juice 🍊', 'A metal spoon 🥄', 'A glass marble ⚪', 'A plastic ruler 📏'],
          },
        ],
        cutStrip: {
          type: 'straight-strips',
          stage: 'Ages 3-5 (Bottom-Edge Cut)',
          items: ['Solid = Keeps Shape', 'Liquid = Flows & Pours', 'Ice = Solid', 'Water = Liquid'],
        },
        answerKey: [
          { number: 1, solution: 'SOLID 🧱' },
          { number: 2, solution: 'LIQUID 🥛' },
          { number: 3, solution: 'LIQUID WATER 💧' },
          { number: 4, solution: 'Fresh orange juice 🍊' },
        ],
      }),
    },

    // -------------------------------------------------------------------------
    // DAY 18: Sound & Vibrations (How Sounds Are Made)
    // -------------------------------------------------------------------------
    {
      day: 18,
      title: 'Sound & Vibrations (How Sounds Are Made)',
      standard: 'NGSS 1-PS4-1 / K Physical Science Foundations',
      strictBoundary: 'Vibrating materials produce sound. Feeling vocal vibrations. No decibels or frequency wavelengths.',
      script: {
        say: '“Every sound in the whole world comes from something VIBRATING! Put your hand gently on your throat and hum: /hmmmm/! Feel that buzzing? That vibration makes your voice!”',
        do: 'Gently pluck a rubber band or touch a drum while tapping it to feel the rapid vibrations.',
        lookFor: 'Explains that sound is produced when something moves back and forth quickly (vibrates).',
      },
      generateSheet: (variant = 1) => ({
        id: `sci-d18-v${variant}`,
        title: 'Science Day 18: Sound & Vibrations',
        subject: 'science',
        grade: 'K',
        instructions: 'Discover how vibrating objects make the sounds we hear!',
        kidDirections: {
          text: '🔊 Sound is vibration! 🐝 Feel your throat buzz! ✏️ Answer the sound questions!',
          icons: ['🔊', '🐝', '👂', '✏️'],
          badge: 'Day 18 Science',
        },
        problems: [
          {
            id: 'p1',
            type: 'science-inquiry',
            number: 1,
            prompt: 'What causes every sound to be made in the world?',
            options: ['VIBRATION (rapid back-and-forth motion) 〰️', 'Standing completely still', 'Painting a picture', 'Sleeping'],
          },
          {
            id: 'p2',
            type: 'science-inquiry',
            number: 2,
            prompt: 'When you pluck a guitar string or rubber band, what do you see and hear?',
            options: ['The string vibrates and makes a musical note 🎸', 'Nothing happens at all', 'It turns into water', 'It disappears'],
          },
          {
            id: 'p3',
            type: 'science-inquiry',
            number: 3,
            prompt: 'What body organ catches sound vibrations in the air so we can hear music and words?',
            options: ['Our EARS 👂', 'Our elbows', 'Our toes', 'Our kneecaps'],
          },
        ],
        cutStrip: {
          type: 'straight-strips',
          stage: 'Ages 3-5 (Bottom-Edge Cut)',
          items: ['Vibration = Sound', 'Throat Buzzes = Voice', 'Ears = Hear Sound', 'Quiet & Loud 🎶'],
        },
        answerKey: [
          { number: 1, solution: 'VIBRATION (rapid back-and-forth motion) 〰️' },
          { number: 2, solution: 'The string vibrates and makes a musical note 🎸' },
          { number: 3, solution: 'Our EARS 👂' },
        ],
      }),
    },

    // -------------------------------------------------------------------------
    // DAY 19: Light & Shadows (How Shadows Are Formed)
    // -------------------------------------------------------------------------
    {
      day: 19,
      title: 'Light & Shadows (How Shadows Are Formed)',
      standard: 'NGSS 1-PS4-2 / K Physical Science Foundations',
      strictBoundary: 'Light travels from a source; shadows are formed when an object blocks light. No ray optics or refraction.',
      script: {
        say: '“Light travels in straight lines from a light source like a lamp or the Sun. When your hand blocks the light, it makes a dark shape called a SHADOW!”',
        do: 'Shine a flashlight against a blank wall: make a shadow bunny or dog with your hand!',
        lookFor: 'Explains that a shadow appears behind an object because the object blocks the light.',
      },
      generateSheet: (variant = 1) => ({
        id: `sci-d19-v${variant}`,
        title: 'Science Day 19: Light & Shadows',
        subject: 'science',
        grade: 'K',
        instructions: 'Explore how light sources make shadows when light is blocked!',
        kidDirections: {
          text: '💡 Light shines bright! 🖐️ Block the light to make a shadow! ✏️ Circle the answers!',
          icons: ['💡', '🖐️', '👥', '✏️'],
          badge: 'Day 19 Science',
        },
        problems: [
          {
            id: 'p1',
            type: 'science-inquiry',
            number: 1,
            prompt: 'Which of these is a powerful natural LIGHT SOURCE that lights our world?',
            options: ['The SUN ☀️', 'A glass window', 'A dark rock', 'A pillow'],
          },
          {
            id: 'p2',
            type: 'science-inquiry',
            number: 2,
            prompt: 'What happens when you stand outside in front of the sun and block its light?',
            options: ['Your body casts a dark SHADOW on the ground 👥', 'You turn invisible', 'It turns into snow', 'Night begins immediately'],
          },
          {
            id: 'p3',
            type: 'science-inquiry',
            number: 3,
            prompt: 'Does a clear glass window cast a dark shadow?',
            options: ['No, light passes straight through clear glass! 🪟', 'Yes, it makes a jet black wall', 'Glass absorbs all light', 'Glass creates nighttime'],
          },
        ],
        cutStrip: {
          type: 'straight-strips',
          stage: 'Ages 3-5 (Bottom-Edge Cut)',
          items: ['Light Source = Lamp/Sun', 'Block Light = Shadow', 'Window = Light Passes', 'Shadow Puppet! 🐰'],
        },
        answerKey: [
          { number: 1, solution: 'The SUN ☀️' },
          { number: 2, solution: 'Your body casts a dark SHADOW on the ground 👥' },
          { number: 3, solution: 'No, light passes straight through clear glass! 🪟' },
        ],
      }),
    },

    // -------------------------------------------------------------------------
    // DAY 20: Mid-Quarter 1 Nature Detective Grand Champion Review
    // -------------------------------------------------------------------------
    {
      day: 20,
      title: 'Nature Detective Grand Champion Review (Days 11–20 Mastery)',
      standard: 'NGSS K Cumulative Physical & Life Science Mastery',
      strictBoundary: 'Comprehensive review of plant parts, animal habitats, states of matter, and light/sound. No premature upper-elementary content.',
      script: {
        say: '“Day 20 Science Grand Champion! Today you earn your Nature Detective Badge! Show everything you know about plants, habitats, seasons, solids, and light!”',
        do: 'Celebrate with your child! Review their favorite science experiments from the last 20 days.',
        lookFor: 'Solves questions independently with confident scientific terminology.',
      },
      generateSheet: (variant = 1) => ({
        id: `sci-d20-v${variant}`,
        title: 'Science Day 20: Nature Detective Grand Champion',
        subject: 'science',
        grade: 'K',
        instructions: 'Complete the Day 20 Nature Detective Grand Champion Challenge!',
        kidDirections: {
          text: '🏆 Day 20 Grand Champion! 🔍 Use your scientific clues! ✏️ Earn your badge!',
          icons: ['🏆', '🔍', '⭐'],
          badge: 'Day 20 Science Champion',
        },
        problems: [
          {
            id: 'p1',
            type: 'science-inquiry',
            number: 1,
            prompt: 'Which plant part drinks water from deep underground?',
            options: ['The ROOTS 🌱', 'The flower petals', 'The leaf tips', 'The wind'],
          },
          {
            id: 'p2',
            type: 'science-inquiry',
            number: 2,
            prompt: 'What habitat does a polar bear call home?',
            options: ['The icy ARCTIC ❄️', 'The hot desert', 'The tropical rainforest', 'The warm beach'],
          },
          {
            id: 'p3',
            type: 'science-inquiry',
            number: 3,
            prompt: 'An ice cube is a SOLID. When it warms up, what state of matter does it become?',
            options: ['A LIQUID (Water) 💧', 'A heavy rock', 'A piece of wood', 'A flower'],
          },
          {
            id: 'p4',
            type: 'science-inquiry',
            number: 4,
            prompt: 'What forms when an object blocks light from a flashlight or the Sun?',
            options: ['A SHADOW 👥', 'A rainbow cloud', 'A lightning bolt', 'A campfire'],
          },
        ],
        cutStrip: {
          type: 'straight-strips',
          stage: 'Ages 3-5 (Bottom-Edge Cut)',
          items: ['Plant Roots', 'Arctic Habitat', 'Ice to Liquid', '🏆 Junior Scientist!'],
        },
        answerKey: [
          { number: 1, solution: 'The ROOTS 🌱' },
          { number: 2, solution: 'The icy ARCTIC ❄️' },
          { number: 3, solution: 'A LIQUID (Water) 💧' },
          { number: 4, solution: 'A SHADOW 👥' },
        ],
      }),
    },
  ],

  // =========================================================================
  // SOCIAL STUDIES & GEOGRAPHY TRACK (Core Knowledge CKHG Kindergarten)
  // =========================================================================
  socialStudies: [
    {
      day: 1,
      title: 'Maps vs. Globes (Water is Blue, Land is Green/Brown)',
      standard: 'CKHG Kindergarten Unit 1: Let’s Explore Our World',
      strictBoundary: 'Basic distinction between round globes and flat maps (land vs water colors). No latitude/longitude coordinates.',
      script: {
        say: '“Look at this globe! It is shaped like a round ball, just like planet Earth! Can you point to the blue water and the green land?”',
        do: 'Hold up a round ball or globe and a flat piece of paper. Ask: "Which one is shaped like our Earth?"',
        lookFor: 'Recognizes that a globe is a 3D sphere and a map is flat. Identifies blue as water/oceans and green/brown as land.',
      },
      generateSheet: (variant = 1) => ({
        id: `soc-d1-v${variant}`,
        title: 'Social Studies Day 1: Maps vs. Globes (Water & Land)',
        subject: 'socialStudies',
        grade: 'K',
        instructions: 'Discover how we represent planet Earth using round globes and flat maps!',
        kidDirections: {
          text: '🌍 Earth is round like a ball! 🌊 Blue is water, 🌲 Green is land! ✏️ Circle the right answer!',
          icons: ['🌍', '🌊', '✏️'],
          badge: 'Day 1 Social Studies',
        },
        problems: [
          {
            id: 'p1',
            type: 'social-studies',
            number: 1,
            topic: 'maps-globes',
            icon: '🌍',
            prompt: 'What shape is planet Earth in real life?',
            subtext: 'Think of a ball vs a flat piece of paper.',
            options: ['Round like a ball (Sphere)', 'Flat like a pancake', 'A triangle box', 'A star'],
          },
          {
            id: 'p2',
            type: 'social-studies',
            number: 2,
            topic: 'maps-globes',
            icon: '🌊',
            prompt: 'On a globe or map, what does the color BLUE show?',
            subtext: 'Most of Earth is covered in this liquid.',
            options: ['Water / Oceans', 'Grass & Trees', 'Sandy Deserts', 'Snowy Mountains'],
          },
          {
            id: 'p3',
            type: 'social-studies',
            number: 3,
            topic: 'maps-globes',
            icon: '🗺️',
            prompt: 'What is a MAP?',
            subtext: 'We fold it up and take it with us on trips.',
            options: ['A flat drawing of a place', 'A round ball of the Earth', 'A telescope', 'A clock'],
          },
        ],
        cutStrip: {
          type: 'straight-strips',
          stage: 'Ages 3-5 (Bottom-Edge Cut)',
          items: ['Globe = Round', 'Map = Flat', 'Blue = Ocean', 'Green = Land'],
        },
        answerKey: [
          { number: 1, solution: 'Round like a ball (Sphere)' },
          { number: 2, solution: 'Water / Oceans' },
          { number: 3, solution: 'A flat drawing of a place' },
        ],
      }),
    },
    {
      day: 2,
      title: 'Cardinal Directions & The Compass Rose (N, S, E, W)',
      standard: 'CKHG Kindergarten Unit 1: Spatial Directions',
      strictBoundary: 'Cardinal directions (North, South, East, West). No intermediate degrees or azimuth navigation.',
      script: {
        say: '“Every map has a helper called a Compass Rose! North points UP toward the cold North Pole, and South points DOWN toward the South Pole!”',
        do: 'Stand up together. Reach both arms high for North! Touch your toes for South! Point to where the sun rises for East, and where it sets for West.',
        lookFor: 'Identifies North as pointing UP and South as pointing DOWN. Remembers that East and West go side to side.',
      },
      generateSheet: (variant = 1) => ({
        id: `soc-d2-v${variant}`,
        title: 'Social Studies Day 2: The Compass Rose (N, S, E, W)',
        subject: 'socialStudies',
        grade: 'K',
        instructions: 'Learn the cardinal directions that help explorers navigate maps!',
        kidDirections: {
          text: '🧭 North points UP! ⬇️ South points DOWN! ☀️ East is sunrise! ✏️ Circle the answers!',
          icons: ['🧭', '⬆️', '⬇️', '✏️'],
          badge: 'Day 2 Social Studies',
        },
        problems: [
          {
            id: 'p1',
            type: 'social-studies',
            number: 1,
            topic: 'compass-rose',
            icon: '🧭',
            prompt: 'On a standard map, which direction does NORTH always point?',
            subtext: 'Look at the top of the compass rose.',
            options: ['UP toward the top', 'DOWN toward the bottom', 'To the right side', 'In circles'],
          },
          {
            id: 'p2',
            type: 'social-studies',
            number: 2,
            topic: 'compass-rose',
            icon: '🧭',
            prompt: 'Which direction points DOWN toward the bottom of the map?',
            subtext: 'Opposite of North.',
            options: ['SOUTH', 'WEST', 'EAST', 'UP'],
          },
          {
            id: 'p3',
            type: 'social-studies',
            number: 3,
            topic: 'compass-rose',
            icon: '☀️',
            prompt: 'Where does the bright morning sun rise every day?',
            subtext: 'The sun wakes up in the morning sky.',
            options: ['In the EAST', 'In the WEST', 'In the SOUTH', 'In the NORTH'],
          },
        ],
        cutStrip: {
          type: 'straight-strips',
          stage: 'Ages 3-5 (Bottom-Edge Cut)',
          items: ['N = North', 'S = South', 'E = East', 'W = West'],
        },
        answerKey: [
          { number: 1, solution: 'UP toward the top (North)' },
          { number: 2, solution: 'SOUTH' },
          { number: 3, solution: 'In the EAST' },
        ],
      }),
    },
    {
      day: 3,
      title: 'Map Keys, Symbols & Room Mapping',
      standard: 'CKHG Kindergarten Unit 1: Map Symbols and Keys',
      strictBoundary: 'Map keys and pictorial symbols for familiar rooms. No topographic contour lines or scale ratios.',
      script: {
        say: '“A map key is like a secret code! A little blue square means your bed, and an open line means your door!”',
        do: 'Look around the room. Ask: "If you looked down like a bird from the ceiling, what shapes would you see for our bed and table?"',
        lookFor: 'Understands that symbols stand for real furniture and rooms. Can draw a basic symbol in the scratchpad.',
      },
      generateSheet: (variant = 1) => ({
        id: `soc-d3-v${variant}`,
        title: 'Social Studies Day 3: Map Keys & Symbols',
        subject: 'socialStudies',
        grade: 'K',
        instructions: 'Read map symbols and draw your own room map!',
        kidDirections: {
          text: '🔑 Map keys unlock secrets! 🛏️ Symbols stand for real things! ✏️ Draw and circle!',
          icons: ['🔑', '🛏️', '✏️'],
          badge: 'Day 3 Social Studies',
        },
        problems: [
          {
            id: 'p1',
            type: 'social-studies',
            number: 1,
            topic: 'map-skills',
            icon: '🔑',
            prompt: 'What does a MAP KEY tell us on a map?',
            subtext: 'Look for the little legend box with pictures.',
            options: ['What the symbols and drawings stand for', 'The time to go to bed', 'How to cook food', 'The weather outside'],
          },
          {
            id: 'p2',
            type: 'social-studies',
            number: 2,
            topic: 'map-skills',
            icon: '🛏️',
            prompt: 'If a small blue rectangle represents a BED, what shape would you draw for a rug?',
            subtext: 'Choose the best top-down match.',
            options: ['An oval or rectangle on the floor', 'A star in the sky', 'A cloud', 'A bicycle'],
          },
          {
            id: 'p3',
            type: 'social-studies',
            number: 3,
            topic: 'map-skills',
            icon: '✏️',
            prompt: 'Junior Cartographer Challenge: Draw a symbol for your door and a symbol for your window!',
            drawBox: true,
            drawPrompt: 'Draw a Door symbol and a Window symbol:',
            options: [],
          },
        ],
        cutStrip: null,
        answerKey: [
          { number: 1, solution: 'What the symbols and drawings stand for' },
          { number: 2, solution: 'An oval or rectangle on the floor' },
          { number: 3, solution: 'Student draws door and window symbols in box' },
        ],
      }),
    },
    {
      day: 4,
      title: 'Earth’s Natural Landforms (Mountains, Oceans, Rivers, Plains)',
      standard: 'CKHG Kindergarten Unit 1: Landforms & Water Bodies',
      strictBoundary: 'Four fundamental landforms and bodies of water (mountain, river, plain, ocean). No plate tectonics or erosion chemistry.',
      script: {
        say: '“Planet Earth has tall rocky mountains that scrape the sky, flat grassy plains for animals to run, and rushing rivers!”',
        do: 'Make a tall triangle peak with your hands for a mountain, then hold your hand flat for a plain.',
        lookFor: 'Differentiates a high, steep mountain from a flat plain. Knows rivers carry flowing water.',
      },
      generateSheet: (variant = 1) => ({
        id: `soc-d4-v${variant}`,
        title: 'Social Studies Day 4: Mountains, Rivers & Plains',
        subject: 'socialStudies',
        grade: 'K',
        instructions: 'Identify the major natural landforms and water bodies of planet Earth.',
        kidDirections: {
          text: '🏔️ Mountains are tall! 🏞️ Rivers rush! 🌾 Plains are flat! ✏️ Circle the answers!',
          icons: ['🏔️', '🏞️', '🌾', '✏️'],
          badge: 'Day 4 Social Studies',
        },
        problems: [
          {
            id: 'p1',
            type: 'social-studies',
            number: 1,
            topic: 'maps-globes',
            icon: '🏔️',
            prompt: 'What is a MOUNTAIN?',
            subtext: 'Look high above the clouds.',
            options: ['A very tall, steep rock landform', 'A flat hole in the ground', 'A bucket of sand', 'A swimming pool'],
          },
          {
            id: 'p2',
            type: 'social-studies',
            number: 2,
            topic: 'maps-globes',
            icon: '🏞️',
            prompt: 'What flows through valleys and carries fresh water toward the ocean?',
            options: ['A rushing RIVER', 'A giant mountain', 'A desert dune', 'A highway'],
          },
          {
            id: 'p3',
            type: 'social-studies',
            number: 3,
            topic: 'maps-globes',
            icon: '🌾',
            prompt: 'What do we call a wide, flat area of grassy land?',
            options: ['A PLAIN / Prairie', 'A tall peak', 'A cave', 'A glacier'],
          },
        ],
        cutStrip: {
          type: 'straight-strips',
          stage: 'Ages 3-5 (Bottom-Edge Cut)',
          items: ['Mountain: Tall Peak', 'River: Flowing Water', 'Plain: Flat Grass', 'Ocean: Salty Sea'],
        },
        answerKey: [
          { number: 1, solution: 'A very tall, steep rock landform' },
          { number: 2, solution: 'A rushing RIVER' },
          { number: 3, solution: 'A PLAIN / Prairie' },
        ],
      }),
    },
    {
      day: 5,
      title: 'Native American Shelters (Tipis, Pueblos, Longhouses)',
      standard: 'CKHG Kindergarten Unit 2: Native Americans',
      strictBoundary: 'Traditional shelter structures and natural regional materials (tipi, pueblo, longhouse). No complex anthropological treaties.',
      script: {
        say: '“Long ago, Native Americans built ingenious homes from natural materials! Plains tribes made cone-shaped tipis from buffalo hides, while Southwest tribes built adobe pueblos from clay and stone!”',
        do: 'Show a picture of a cone-shaped tipi and a stacked pueblo village.',
        lookFor: 'Associates cone shape with tipi and clay/brick with pueblo. Understands shelters protect families from weather.',
      },
      generateSheet: (variant = 1) => ({
        id: `soc-d5-v${variant}`,
        title: 'Social Studies Day 5: Native American Shelters',
        subject: 'socialStudies',
        grade: 'K',
        instructions: 'Match the regional Native American shelters to their natural building materials.',
        kidDirections: {
          text: '⛺ Tipis move with herds! 🏜️ Pueblos are made of adobe clay! ✏️ Circle the right matches!',
          icons: ['⛺', '🏜️', '✏️'],
          badge: 'Day 5 Social Studies',
        },
        problems: [
          {
            id: 'p1',
            type: 'social-studies',
            number: 1,
            topic: 'history',
            icon: '⛺',
            prompt: 'Which Native American shelter was cone-shaped and could be folded up to follow buffalo herds?',
            subtext: 'Great Plains tribes built these strong shelters.',
            options: ['A TIPI', 'A Pueblo', 'A Log Cabin', 'A Skyscraper'],
          },
          {
            id: 'p2',
            type: 'social-studies',
            number: 2,
            topic: 'history',
            icon: '🏜️',
            prompt: 'In the dry Southwest, what did Pueblo tribes use to build their multi-story homes?',
            subtext: 'Sun-baked mud bricks and stones.',
            options: ['Adobe clay and stones', 'Plastic and metal', 'Glass windows', 'Cardboard boxes'],
          },
          {
            id: 'p3',
            type: 'social-studies',
            number: 3,
            topic: 'history',
            icon: '🪵',
            prompt: 'Eastern Woodlands tribes built LONGHOUSES made from:',
            options: ['Wood poles and bark sheets', 'Sand and water', 'Metal sheets', 'Snow blocks'],
          },
        ],
        cutStrip: {
          type: 'straight-strips',
          stage: 'Ages 3-5 (Bottom-Edge Cut)',
          items: ['Tipi: Plains', 'Pueblo: Southwest', 'Longhouse: Woodlands', 'Buffalo: Food & Hides'],
        },
        answerKey: [
          { number: 1, solution: 'A TIPI' },
          { number: 2, solution: 'Adobe clay and stones' },
          { number: 3, solution: 'Wood poles and bark sheets' },
        ],
      }),
    },
    {
      day: 6,
      title: 'Native American Culture: Respect for Nature & Storytelling',
      standard: 'CKHG Kindergarten Unit 2: Culture & Traditions',
      strictBoundary: 'Values of ecological gratitude, storytelling, and animal symbolism. No modern geopolitical history.',
      script: {
        say: '“Native American cultures teach deep gratitude for Mother Earth! They only take what they need and treat animals, trees, and water like family.”',
        do: 'Talk about how we can show gratitude when we eat, and how we take care of outdoor animals and trees.',
        lookFor: 'Identifies respect for living things and understanding that stories teach important values.',
      },
      generateSheet: (variant = 1) => ({
        id: `soc-d6-v${variant}`,
        title: 'Social Studies Day 6: Respect for Nature & Storytelling',
        subject: 'socialStudies',
        grade: 'K',
        instructions: 'Explore how storytelling and gratitude for the earth guided Native American traditions.',
        kidDirections: {
          text: '🦅 The eagle is brave! 🌲 Care for trees and water! ✏️ Circle and draw!',
          icons: ['🦅', '🌲', '✏️'],
          badge: 'Day 6 Social Studies',
        },
        problems: [
          {
            id: 'p1',
            type: 'social-studies',
            number: 1,
            topic: 'history',
            icon: '🦅',
            prompt: 'In Native American storytelling, what does the majestic BALD EAGLE often symbolize?',
            subtext: 'Soaring high above the clouds with keen eyes.',
            options: ['Courage, wisdom & strength', 'Going to sleep', 'Being noisy', 'Cold ice'],
          },
          {
            id: 'p2',
            type: 'social-studies',
            number: 2,
            topic: 'citizenship',
            icon: '🌱',
            prompt: 'How did Native American tribes show respect for the earth and living things?',
            options: ['Using natural resources wisely and never wasting them', 'Throwing trash into rivers', 'Cutting down whole forests needlessly', 'Ignoring the seasons'],
          },
          {
            id: 'p3',
            type: 'social-studies',
            number: 3,
            topic: 'citizenship',
            icon: '✏️',
            prompt: 'Draw one way YOU can care for animals, plants, or water outdoors:',
            drawBox: true,
            drawPrompt: 'Draw caring for plants, trees, or wildlife:',
            options: [],
          },
        ],
        cutStrip: null,
        answerKey: [
          { number: 1, solution: 'Courage, wisdom & strength' },
          { number: 2, solution: 'Using natural resources wisely and never wasting them' },
          { number: 3, solution: 'Student draws an act of environmental care' },
        ],
      }),
    },
    {
      day: 7,
      title: 'Founding Presidents: George Washington (Father of Our Country)',
      standard: 'CKHG Kindergarten Unit 4: Mount Rushmore & Presidents',
      strictBoundary: 'George Washington: 1st president, profile on quarter, Mount Rushmore. No constitutional law or wartime politics.',
      script: {
        say: '“George Washington was the first President of our country! People called him the \'Father of Our Country\' because he led America when it was brand new.”',
        do: 'Show a one-dollar bill or quarter coin. Point to George Washington’s face.',
        lookFor: 'Knows George Washington is the 1st president and finds his profile on the quarter or dollar bill.',
      },
      generateSheet: (variant = 1) => ({
        id: `soc-d7-v${variant}`,
        title: 'Social Studies Day 7: George Washington',
        subject: 'socialStudies',
        grade: 'K',
        instructions: 'Learn about George Washington, our nation’s first president and leader.',
        kidDirections: {
          text: '🏛️ 1st President! 🪙 On the Quarter! 🇺🇸 Father of Our Country! ✏️ Circle the answers!',
          icons: ['🏛️', '🪙', '🇺🇸', '✏️'],
          badge: 'Day 7 Social Studies',
        },
        problems: [
          {
            id: 'p1',
            type: 'social-studies',
            number: 1,
            topic: 'presidents',
            icon: '🏛️',
            prompt: 'Who was the very FIRST President of the United States of America?',
            subtext: 'He helped guide our country when it was brand new.',
            options: ['George Washington', 'Benjamin Franklin', 'Thomas Jefferson', 'Neil Armstrong'],
          },
          {
            id: 'p2',
            type: 'social-studies',
            number: 2,
            topic: 'presidents',
            icon: '🪙',
            prompt: 'Which United States coin features George Washington on the front?',
            options: ['The QUARTER (25 cents)', 'The Penny (1 cent)', 'The Dime (10 cents)', 'The Nickel (5 cents)'],
          },
          {
            id: 'p3',
            type: 'social-studies',
            number: 3,
            topic: 'presidents',
            icon: '🎖️',
            prompt: 'Where is George Washington’s face carved into giant stone along with 3 other presidents?',
            options: ['Mount Rushmore in South Dakota', 'A sandcastle at the beach', 'Underneath the ocean', 'Inside a deep cave'],
          },
        ],
        cutStrip: {
          type: 'straight-strips',
          stage: 'Ages 3-5 (Bottom-Edge Cut)',
          items: ['1st President', 'George Washington', 'Quarter: 25¢', 'Mount Rushmore'],
        },
        answerKey: [
          { number: 1, solution: 'George Washington' },
          { number: 2, solution: 'The QUARTER (25 cents)' },
          { number: 3, solution: 'Mount Rushmore in South Dakota' },
        ],
      }),
    },
    {
      day: 8,
      title: 'Presidents: Abraham Lincoln (Honest Abe & The Log Cabin)',
      standard: 'CKHG Kindergarten Unit 4: Abraham Lincoln',
      strictBoundary: 'Abraham Lincoln: 16th president, penny, log cabin, honesty. No Civil War battle tactics.',
      script: {
        say: '“Abraham Lincoln grew up in a one-room log cabin in the woods. He worked hard, loved reading books, and everyone called him \'Honest Abe\'!”',
        do: 'Show a copper penny. Point to Abraham Lincoln and note his tall hat and beard.',
        lookFor: 'Identifies Lincoln by his log cabin childhood, penny coin, and reputation for honesty and fairness.',
      },
      generateSheet: (variant = 1) => ({
        id: `soc-d8-v${variant}`,
        title: 'Social Studies Day 8: Abraham Lincoln',
        subject: 'socialStudies',
        grade: 'K',
        instructions: 'Discover the inspiring life of Abraham Lincoln, our 16th president.',
        kidDirections: {
          text: '🎩 Honest Abe! 🪙 On the copper Penny! 🪵 Born in a log cabin! ✏️ Circle the answers!',
          icons: ['🎩', '🪙', '🪵', '✏️'],
          badge: 'Day 8 Social Studies',
        },
        problems: [
          {
            id: 'p1',
            type: 'social-studies',
            number: 1,
            topic: 'presidents',
            icon: '🪵',
            prompt: 'What kind of home was Abraham Lincoln born in when he was a boy?',
            subtext: 'A simple rustic home built of tree logs in the woods.',
            options: ['A one-room Log Cabin', 'A giant brick palace', 'A metal rocket ship', 'A houseboat'],
          },
          {
            id: 'p2',
            type: 'social-studies',
            number: 2,
            topic: 'presidents',
            icon: '🪙',
            prompt: 'Which copper coin features Abraham Lincoln on the front?',
            subtext: 'It is worth 1 cent.',
            options: ['The PENNY (1 cent)', 'The Quarter (25 cents)', 'The Dime (10 cents)', 'The Five-Dollar Bill'],
          },
          {
            id: 'p3',
            type: 'social-studies',
            number: 3,
            topic: 'presidents',
            icon: '⭐',
            prompt: 'Why was Abraham Lincoln nicknamed "Honest Abe"?',
            options: ['Because he always told the truth and treated people fairly', 'Because he could run fast', 'Because he loved sweets', 'Because he wore boots'],
          },
        ],
        cutStrip: {
          type: 'straight-strips',
          stage: 'Ages 3-5 (Bottom-Edge Cut)',
          items: ['Abraham Lincoln', '16th President', 'Penny: 1¢', 'Honest Abe'],
        },
        answerKey: [
          { number: 1, solution: 'A one-room Log Cabin' },
          { number: 2, solution: 'The PENNY (1 cent)' },
          { number: 3, solution: 'Because he always told the truth and treated people fairly' },
        ],
      }),
    },
    {
      day: 9,
      title: 'American Symbols: The Flag & The Liberty Bell',
      standard: 'CKHG Kindergarten Unit 5: American Symbols',
      strictBoundary: 'American flag (colors, stars, stripes) and the Liberty Bell. No constitutional amendments.',
      script: {
        say: '“Our American Flag has 13 red and white stripes for the first 13 colonies, and 50 stars for all 50 states! And the Liberty Bell rang to celebrate freedom!”',
        do: 'Look at a flag picture. Count some stripes together and notice the blue box with white stars.',
        lookFor: 'Names the flag colors (red, white, and blue) and recognizes the Liberty Bell as a symbol of freedom.',
      },
      generateSheet: (variant = 1) => ({
        id: `soc-d9-v${variant}`,
        title: 'Social Studies Day 9: The Flag & Liberty Bell',
        subject: 'socialStudies',
        grade: 'K',
        instructions: 'Explore the proud symbols of freedom and unity in the United States.',
        kidDirections: {
          text: '🇺🇸 Red, White & Blue! ⭐ 50 Stars for 50 States! 🔔 Liberty Bell! ✏️ Circle the answers!',
          icons: ['🇺🇸', '⭐', '🔔', '✏️'],
          badge: 'Day 9 Social Studies',
        },
        problems: [
          {
            id: 'p1',
            type: 'social-studies',
            number: 1,
            topic: 'american-symbols',
            icon: '🇺🇸',
            prompt: 'What 3 colors are on the American Flag?',
            subtext: 'Look closely at our nation’s flag.',
            options: ['Red, White, and Blue', 'Yellow, Pink, and Purple', 'Green, Orange, and Black', 'Brown, Silver, and Gold'],
          },
          {
            id: 'p2',
            type: 'social-studies',
            number: 2,
            topic: 'american-symbols',
            icon: '⭐',
            prompt: 'How many white STARS are on the American flag today?',
            subtext: 'One star for every state in our country.',
            options: ['50 Stars (for 50 states)', '10 Stars', '100 Stars', '5 Stars'],
          },
          {
            id: 'p3',
            type: 'social-studies',
            number: 3,
            topic: 'american-symbols',
            icon: '🔔',
            prompt: 'What famous historic bell in Philadelphia has a crack in it and rang for freedom?',
            options: ['The LIBERTY BELL', 'A school desk bell', 'A bicycle bell', 'A doorbell'],
          },
        ],
        cutStrip: {
          type: 'straight-strips',
          stage: 'Ages 3-5 (Bottom-Edge Cut)',
          items: ['Red, White, Blue', '50 Stars: 50 States', '13 Stripes: Colonies', 'Liberty Bell: Freedom'],
        },
        answerKey: [
          { number: 1, solution: 'Red, White, and Blue' },
          { number: 2, solution: '50 Stars (for 50 states)' },
          { number: 3, solution: 'The LIBERTY BELL' },
        ],
      }),
    },
    {
      day: 10,
      title: 'Community Helpers & Good Citizenship',
      standard: 'CKHG Civics & Community Life',
      strictBoundary: 'Community helpers and foundational citizenship (kindness, helping, rules). No municipal government structure.',
      script: {
        say: '“Our community is strong because people help each other! Firefighters put out fires, doctors heal us, and YOU are a citizen who helps by being kind and following rules!”',
        do: 'Ask: "When you see someone who dropped their toys, how can you be a good community helper?"',
        lookFor: 'Identifies community helpers (firefighter, doctor, mail carrier, teacher) and states an action of good citizenship.',
      },
      generateSheet: (variant = 1) => ({
        id: `soc-d10-v${variant}`,
        title: 'Social Studies Day 10: Community Helpers & Citizenship',
        subject: 'socialStudies',
        grade: 'K',
        instructions: 'Celebrate community helpers and learn what it means to be a helpful, kind citizen!',
        kidDirections: {
          text: '🚒 Firefighters help us! 🩺 Doctors keep us healthy! 🤝 You are a great citizen! ✏️ Circle!',
          icons: ['🚒', '🩺', '🤝', '🏆'],
          badge: 'Day 10 Social Studies',
        },
        problems: [
          {
            id: 'p1',
            type: 'social-studies',
            number: 1,
            topic: 'citizenship',
            icon: '🚒',
            prompt: 'Which community helper rides in a big red truck and helps keep our homes safe from fire?',
            subtext: 'They wear a protective helmet and use a hose.',
            options: ['A FIREFIGHTER', 'A Baker', 'An Astronaut', 'A Painter'],
          },
          {
            id: 'p2',
            type: 'social-studies',
            number: 2,
            topic: 'citizenship',
            icon: '🩺',
            prompt: 'Who uses a stethoscope to listen to your heartbeat and helps you feel better when you are sick?',
            options: ['A DOCTOR or NURSE', 'A Mail Carrier', 'A Bus Driver', 'A Chef'],
          },
          {
            id: 'p3',
            type: 'social-studies',
            number: 3,
            topic: 'citizenship',
            icon: '🤝',
            prompt: 'What makes YOU a wonderful, kind citizen in your home and neighborhood?',
            options: ['Sharing, telling the truth, and helping others', 'Leaving messes everywhere', 'Never listening to anyone', 'Hiding toys away'],
          },
        ],
        cutStrip: {
          type: 'straight-strips',
          stage: 'Ages 3-5 (Bottom-Edge Cut)',
          items: ['Firefighter: Safety', 'Doctor: Health', 'Teacher: Learning', 'Citizen: Kindness'],
        },
        answerKey: [
          { number: 1, solution: 'A FIREFIGHTER' },
          { number: 2, solution: 'A DOCTOR or NURSE' },
          { number: 3, solution: 'Sharing, telling the truth, and helping others' },
        ],
      }),
    },

    // -------------------------------------------------------------------------
    // DAY 11: Types of Communities: Urban, Suburban, and Rural
    // -------------------------------------------------------------------------
    {
      day: 11,
      title: 'Types of Communities: Urban (City), Suburban, and Rural (Country)',
      standard: 'CKHG Kindergarten Unit 2: Exploring Communities',
      strictBoundary: 'Differentiating city (urban), town/suburb, and country (rural/farm). No demographic statistics.',
      script: {
        say: '“People live in different kinds of communities! An URBAN city has tall skyscrapers and buses. A SUBURBAN neighborhood has houses with backyards. A RURAL community has big open farms and barns!”',
        do: 'Look out your window or think about your neighborhood: "Do we live in a city, a suburb, or out in the country?"',
        lookFor: 'Matches community pictures/descriptions correctly: tall buildings = urban city, farms/barns = rural country.',
      },
      generateSheet: (variant = 1) => ({
        id: `soc-d11-v${variant}`,
        title: 'Social Studies Day 11: Types of Communities',
        subject: 'socialStudies',
        grade: 'K',
        instructions: 'Explore Urban cities, Suburban towns, and Rural farm communities!',
        kidDirections: {
          text: '🏙️ City (Urban), 🏡 Suburb, 🚜 Country (Rural)! ✏️ Match each community clue!',
          icons: ['🏙️', '🏡', '🚜', '✏️'],
          badge: 'Day 11 Social Studies',
        },
        problems: [
          {
            id: 'p1',
            type: 'social-studies',
            number: 1,
            topic: 'communities',
            icon: '🏙️',
            prompt: 'Which community has giant skyscrapers, lots of people walking, and city buses?',
            options: ['An URBAN community (Big City) 🏙️', 'A quiet cornfield farm', 'An empty desert', 'A forest campsite'],
          },
          {
            id: 'p2',
            type: 'social-studies',
            number: 2,
            topic: 'communities',
            icon: '🚜',
            prompt: 'Where will you find red barns, open pastures, tractors, and farm animals?',
            options: ['A RURAL community (Country / Farms) 🚜', 'The subway station', 'Inside an airport', 'A tall skyscraper'],
          },
          {
            id: 'p3',
            type: 'social-studies',
            number: 3,
            topic: 'communities',
            icon: '🏡',
            prompt: 'Which community has houses with grassy yards and parks close to a city?',
            options: ['A SUBURBAN community (Town / Neighborhood) 🏡', 'Under ocean waves', 'At the North Pole', 'On a space station'],
          },
        ],
        cutStrip: {
          type: 'straight-strips',
          stage: 'Ages 3-5 (Bottom-Edge Cut)',
          items: ['Urban = Big City', 'Suburban = Town/Houses', 'Rural = Farms/Country', 'My Community! 🏡'],
        },
        answerKey: [
          { number: 1, solution: 'An URBAN community (Big City) 🏙️' },
          { number: 2, solution: 'A RURAL community (Country / Farms) 🚜' },
          { number: 3, solution: 'A SUBURBAN community (Town / Neighborhood) 🏡' },
        ],
      }),
    },

    // -------------------------------------------------------------------------
    // DAY 12: Transportation: Land, Water, and Air
    // -------------------------------------------------------------------------
    {
      day: 12,
      title: 'Transportation: Land, Water, and Air',
      standard: 'CKHG Geography & Technology: Moving People & Goods',
      strictBoundary: 'Categorizing vehicles by environment (land, water, air). No complex logistics networks.',
      script: {
        say: '“How do people and groceries travel from place to place? By transportation! Cars and trains travel on LAND, boats travel on WATER, and airplanes fly through the AIR!”',
        do: 'Ask: "If you had to cross a giant ocean to visit another continent, which transportation would you take?" (Airplane or Ship!).',
        lookFor: 'Correctly sorts vehicles into land, water, and air categories.',
      },
      generateSheet: (variant = 1) => ({
        id: `soc-d12-v${variant}`,
        title: 'Social Studies Day 12: Transportation (Land, Water, Air)',
        subject: 'socialStudies',
        grade: 'K',
        instructions: 'Sort vehicles by whether they travel on Land, in Water, or through the Air!',
        kidDirections: {
          text: '🚗 Land, 🚢 Water, ✈️ Air! ✏️ Circle the right transportation for each journey!',
          icons: ['🚗', '🚢', '✈️', '✏️'],
          badge: 'Day 12 Social Studies',
        },
        problems: [
          {
            id: 'p1',
            type: 'social-studies',
            number: 1,
            topic: 'transportation',
            icon: '✈️',
            prompt: 'Which vehicle flies high through the clouds in the AIR with wings?',
            options: ['An AIRPLANE ✈️', 'A submarine', 'A bicycle', 'A tractor'],
          },
          {
            id: 'p2',
            type: 'social-studies',
            number: 2,
            topic: 'transportation',
            icon: '🚢',
            prompt: 'Which vehicle floats on top of the deep blue WATER to carry passengers or cargo?',
            options: ['A SHIP or BOAT 🚢', 'A yellow school bus', 'A skateboard', 'A freight train'],
          },
          {
            id: 'p3',
            type: 'social-studies',
            number: 3,
            topic: 'transportation',
            icon: '🚌',
            prompt: 'What vehicle travels on paved roads on LAND to safely bring children to school?',
            options: ['A SCHOOL BUS 🚌', 'A hot air balloon', 'A rocket ship', 'A kayak'],
          },
        ],
        cutStrip: {
          type: 'straight-strips',
          stage: 'Ages 3-5 (Bottom-Edge Cut)',
          items: ['Bus/Train = Land', 'Ship/Ferry = Water', 'Plane/Rocket = Air', 'Safe Travels! 🚀'],
        },
        answerKey: [
          { number: 1, solution: 'An AIRPLANE ✈️' },
          { number: 2, solution: 'A SHIP or BOAT 🚢' },
          { number: 3, solution: 'A SCHOOL BUS 🚌' },
        ],
      }),
    },

    // -------------------------------------------------------------------------
    // DAY 13: Goods vs. Services (Basic Economics)
    // -------------------------------------------------------------------------
    {
      day: 13,
      title: 'Goods vs. Services (Basic Economics)',
      standard: 'C3 Framework D2.Eco.1.K-2 & CKHG Civics & Economics',
      strictBoundary: 'Distinction between physical objects you can touch (goods) and jobs done for others (services). No monetary supply or pricing formulas.',
      script: {
        say: '“Economics is easy! GOODS are physical things you can touch and take home, like apples or shoes. SERVICES are helpful jobs that people do for you, like a haircut or a doctor checkup!”',
        do: 'Hold up a pencil: "Is this a good or a service?" (Good!). "What about when the teacher teaches you to read?" (Service!).',
        lookFor: 'Explains that a good is a tangible object and a service is an action or work done to help.',
      },
      generateSheet: (variant = 1) => ({
        id: `soc-d13-v${variant}`,
        title: 'Social Studies Day 13: Goods vs. Services',
        subject: 'socialStudies',
        grade: 'K',
        instructions: 'Decide whether each item is a GOOD (touchable thing) or a SERVICE (helpful job)!',
        kidDirections: {
          text: '🍎 Goods are things you can touch! ✂️ Services are jobs that help! ✏️ Choose Good or Service!',
          icons: ['🍎', '✂️', '✏️'],
          badge: 'Day 13 Social Studies',
        },
        problems: [
          {
            id: 'p1',
            type: 'social-studies',
            number: 1,
            topic: 'economics',
            icon: '🍞',
            prompt: 'A baker bakes a fresh loaf of warm bread you can buy, hold, and eat. The bread is a...',
            options: ['GOOD (A physical item) 🍞', 'Service', 'Cloud', 'Rule'],
          },
          {
            id: 'p2',
            type: 'social-studies',
            number: 2,
            topic: 'economics',
            icon: '✂️',
            prompt: 'A barber trims your hair with scissors so you look neat. Cutting hair is a...',
            options: ['SERVICE (A helpful job) ✂️', 'Good you keep in a pocket', 'Fruit', 'Building'],
          },
          {
            id: 'p3',
            type: 'social-studies',
            number: 3,
            topic: 'economics',
            icon: '👟',
            prompt: 'A brand-new pair of running sneakers you put on your feet is a...',
            options: ['GOOD 👟', 'Service', 'Idea', 'Song'],
          },
        ],
        cutStrip: {
          type: 'straight-strips',
          stage: 'Ages 3-5 (Bottom-Edge Cut)',
          items: ['Bread = Good', 'Haircut = Service', 'Shoes = Good', 'Teaching = Service'],
        },
        answerKey: [
          { number: 1, solution: 'GOOD (A physical item) 🍞' },
          { number: 2, solution: 'SERVICE (A helpful job) ✂️' },
          { number: 3, solution: 'GOOD 👟' },
        ],
      }),
    },

    // -------------------------------------------------------------------------
    // DAY 14: Needs vs. Wants (Wise Choices)
    // -------------------------------------------------------------------------
    {
      day: 14,
      title: 'Needs vs. Wants (Wise Choices)',
      standard: 'C3 Framework D2.Eco.2.K-2 & Core Knowledge Economics',
      strictBoundary: 'Differentiating survival essentials (needs: water, food, warm clothes, shelter) from desires (wants: candy, video games). No financial budgeting formulas.',
      script: {
        say: '“A NEED is something you must have to live and be safe: clean water, healthy food, warm clothes, and a home. A WANT is something fun to have, like candy or a video game, but you can live without it!”',
        do: 'Ask: "If you were on a camping trip, is a warm jacket a need or a want? What about a toy dinosaur?"',
        lookFor: 'Accurately categorizes survival essentials as needs and entertainment/treats as wants.',
      },
      generateSheet: (variant = 1) => ({
        id: `soc-d14-v${variant}`,
        title: 'Social Studies Day 14: Needs vs. Wants',
        subject: 'socialStudies',
        grade: 'K',
        instructions: 'Sort each item into a NEED (for survival & health) or a WANT (fun extra)!',
        kidDirections: {
          text: '🥛 Needs keep us alive and safe! 🎮 Wants are fun extras! ✏️ Circle Need or Want!',
          icons: ['🥛', '🏠', '🎮', '✏️'],
          badge: 'Day 14 Social Studies',
        },
        problems: [
          {
            id: 'p1',
            type: 'social-studies',
            number: 1,
            topic: 'economics',
            icon: '💧',
            prompt: 'Pure clean drinking water that keeps your body hydrated and alive is a...',
            options: ['NEED (Essential for survival) 💧', 'Want', 'Toy', 'Game'],
          },
          {
            id: 'p2',
            type: 'social-studies',
            number: 2,
            topic: 'economics',
            icon: '🎮',
            prompt: 'A brand-new video game console or plastic action figure is a...',
            options: ['WANT (Fun, but not needed to live) 🎮', 'Need for survival', 'Food group', 'Medicine'],
          },
          {
            id: 'p3',
            type: 'social-studies',
            number: 3,
            topic: 'economics',
            icon: '🏠',
            prompt: 'A safe roof over your head that keeps you warm and dry during a rainstorm is a...',
            options: ['NEED (Shelter) 🏠', 'Want', 'Decoration', 'Game'],
          },
        ],
        cutStrip: {
          type: 'straight-strips',
          stage: 'Ages 3-5 (Bottom-Edge Cut)',
          items: ['Water = Need', 'Shelter = Need', 'Toy = Want', 'Candy = Want'],
        },
        answerKey: [
          { number: 1, solution: 'NEED (Essential for survival) 💧' },
          { number: 2, solution: 'WANT (Fun, but not needed to live) 🎮' },
          { number: 3, solution: 'NEED (Shelter) 🏠' },
        ],
      }),
    },

    // -------------------------------------------------------------------------
    // DAY 15: The 7 Continents of Planet Earth
    // -------------------------------------------------------------------------
    {
      day: 15,
      title: 'The 7 Continents of Planet Earth',
      standard: 'CKHG World Geography & Global Literacy',
      strictBoundary: 'Identification of Earth\'s 7 great landmasses (continents). Identifying North America as our home continent. No country borders or geopolitical conflicts.',
      script: {
        say: '“Earth has 7 giant pieces of land called CONTINENTS: North America, South America, Europe, Africa, Asia, Australia, and Antarctica! We live on the continent of North America!”',
        do: 'Look at a world map: point to each continent. Point out how vast the oceans are between them.',
        lookFor: 'Remembers there are 7 continents and identifies North America as our home continent.',
      },
      generateSheet: (variant = 1) => ({
        id: `soc-d15-v${variant}`,
        title: 'Social Studies Day 15: The 7 Continents',
        subject: 'socialStudies',
        grade: 'K',
        instructions: 'Explore the 7 great continents of planet Earth!',
        kidDirections: {
          text: '🌍 Earth has 7 huge continents! 📍 We live in North America! ✏️ Answer the questions!',
          icons: ['🌍', '📍', '✏️'],
          badge: 'Day 15 Social Studies',
        },
        problems: [
          {
            id: 'p1',
            type: 'social-studies',
            number: 1,
            topic: 'maps-globes',
            icon: '🌍',
            prompt: 'How many giant continents of land are on planet Earth?',
            options: ['7 Continents 🌍', '2 Continents', '50 Continents', '100 Continents'],
          },
          {
            id: 'p2',
            type: 'social-studies',
            number: 2,
            topic: 'maps-globes',
            icon: '📍',
            prompt: 'What is the name of our home continent where the United States is located?',
            options: ['NORTH AMERICA 🗺️', 'Antarctica', 'Australia', 'Africa'],
          },
          {
            id: 'p3',
            type: 'social-studies',
            number: 3,
            topic: 'maps-globes',
            icon: '❄️',
            prompt: 'Which continent is at the very bottom of the Earth and is covered in freezing ice and penguins?',
            options: ['ANTARCTICA 🐧', 'South America', 'Europe', 'Asia'],
          },
        ],
        cutStrip: {
          type: 'straight-strips',
          stage: 'Ages 3-5 (Bottom-Edge Cut)',
          items: ['7 Continents', 'North America: Home', 'Antarctica: Ice', 'Asia: Biggest'],
        },
        answerKey: [
          { number: 1, solution: '7 Continents 🌍' },
          { number: 2, solution: 'NORTH AMERICA 🗺️' },
          { number: 3, solution: 'ANTARCTICA 🐧' },
        ],
      }),
    },

    // -------------------------------------------------------------------------
    // DAY 16: The 5 Great Oceans of Earth
    // -------------------------------------------------------------------------
    {
      day: 16,
      title: 'The 5 Great Oceans of Earth',
      standard: 'CKHG World Geography: Global Waters',
      strictBoundary: 'The 5 great oceans (Pacific, Atlantic, Indian, Southern, Arctic). Saltwater vs freshwater. No ocean floor trenches.',
      script: {
        say: '“Most of our planet is covered in deep blue saltwater oceans! There are 5 oceans: the giant PACIFIC (the biggest!), the ATLANTIC, the INDIAN, the SOUTHERN, and the icy ARCTIC!”',
        do: 'Point out that ocean water is salty (we can’t drink it), unlike river or lake freshwater.',
        lookFor: 'Identifies that Earth has 5 oceans, Pacific is largest, and ocean water is saltwater.',
      },
      generateSheet: (variant = 1) => ({
        id: `soc-d16-v${variant}`,
        title: 'Social Studies Day 16: The 5 Great Oceans',
        subject: 'socialStudies',
        grade: 'K',
        instructions: 'Learn about the 5 giant saltwater oceans that connect the continents!',
        kidDirections: {
          text: '🌊 5 Oceans cover most of Earth! 🐋 The Pacific is the biggest! ✏️ Circle the answers!',
          icons: ['🌊', '🐋', '🌍', '✏️'],
          badge: 'Day 16 Social Studies',
        },
        problems: [
          {
            id: 'p1',
            type: 'social-studies',
            number: 1,
            topic: 'maps-globes',
            icon: '🌊',
            prompt: 'How many great blue oceans cover our planet Earth?',
            options: ['5 Great Oceans 🌊', '1 Ocean', '20 Oceans', '100 Oceans'],
          },
          {
            id: 'p2',
            type: 'social-studies',
            number: 2,
            topic: 'maps-globes',
            icon: '🐋',
            prompt: 'Which ocean is the LARGEST of all, covering more area than all land combined?',
            options: ['The PACIFIC Ocean 🐋', 'A small swimming pool', 'A garden pond', 'A mountain stream'],
          },
          {
            id: 'p3',
            type: 'social-studies',
            number: 3,
            topic: 'maps-globes',
            icon: '🧂',
            prompt: 'What kind of water fills our planet\'s giant oceans?',
            options: ['SALTWATER (Salty) 🧂', 'Sweet chocolate milk', 'Fizzy soda', 'Hot tea'],
          },
        ],
        cutStrip: {
          type: 'straight-strips',
          stage: 'Ages 3-5 (Bottom-Edge Cut)',
          items: ['5 Great Oceans', 'Pacific = Largest 🐋', 'Arctic = Coldest ❄️', 'Ocean = Saltwater 🌊'],
        },
        answerKey: [
          { number: 1, solution: '5 Great Oceans 🌊' },
          { number: 2, solution: 'The PACIFIC Ocean 🐋' },
          { number: 3, solution: 'SALTWATER (Salty) 🧂' },
        ],
      }),
    },

    // -------------------------------------------------------------------------
    // DAY 17: Our Nation's Capital & The White House
    // -------------------------------------------------------------------------
    {
      day: 17,
      title: 'Our Nation\'s Capital & The White House',
      standard: 'CKHG American Civics & Government',
      strictBoundary: 'Washington D.C. as capital, White House as home/office of President. No political parties or constitutional debates.',
      script: {
        say: '“Our country’s leader is the President of the United States! The President lives and works in a famous building called the WHITE HOUSE in our capital city: Washington, D.C.!”',
        do: 'Show a picture of the White House with the American flag flying on top.',
        lookFor: 'Names the White House as the President’s home and Washington D.C. as our capital city.',
      },
      generateSheet: (variant = 1) => ({
        id: `soc-d17-v${variant}`,
        title: 'Social Studies Day 17: The White House & Capital',
        subject: 'socialStudies',
        grade: 'K',
        instructions: 'Discover where our nation’s leader lives and works!',
        kidDirections: {
          text: '🏛️ Washington, D.C. is our capital! 🇺🇸 The President lives in the White House! ✏️ Answer!',
          icons: ['🏛️', '🇺🇸', '✏️'],
          badge: 'Day 17 Social Studies',
        },
        problems: [
          {
            id: 'p1',
            type: 'social-studies',
            number: 1,
            topic: 'presidents',
            icon: '🏛️',
            prompt: 'In what special building does the President of the United States live and work?',
            options: ['The WHITE HOUSE 🏛️', 'A treehouse', 'A pirate ship', 'A circus tent'],
          },
          {
            id: 'p2',
            type: 'social-studies',
            number: 2,
            topic: 'presidents',
            icon: '🇺🇸',
            prompt: 'What is the name of the capital city of our country, the United States?',
            options: ['WASHINGTON, D.C. 🇺🇸', 'Paris', 'London', 'Tokyo'],
          },
          {
            id: 'p3',
            type: 'social-studies',
            number: 3,
            topic: 'presidents',
            icon: '⭐',
            prompt: 'What flies proudly on top of the White House roof every day?',
            options: ['The AMERICAN FLAG 🇺🇸', 'A kite', 'A birthday balloon', 'A pirate flag'],
          },
        ],
        cutStrip: {
          type: 'straight-strips',
          stage: 'Ages 3-5 (Bottom-Edge Cut)',
          items: ['White House', 'Washington, D.C.', 'President = Leader', 'American Pride 🇺🇸'],
        },
        answerKey: [
          { number: 1, solution: 'The WHITE HOUSE 🏛️' },
          { number: 2, solution: 'WASHINGTON, D.C. 🇺🇸' },
          { number: 3, solution: 'The AMERICAN FLAG 🇺🇸' },
        ],
      }),
    },

    // -------------------------------------------------------------------------
    // DAY 18: The Statue of Liberty: Welcome to America
    // -------------------------------------------------------------------------
    {
      day: 18,
      title: 'The Statue of Liberty: Welcome to America',
      standard: 'CKHG American Heritage & Immigration',
      strictBoundary: 'Statue of Liberty as a symbol of freedom in New York Harbor, gift of friendship from France. Torch stands for freedom. No treaty details.',
      script: {
        say: '“Standing tall in New York Harbor is Lady Liberty—the STATUE OF LIBERTY! She was a gift of friendship from France. She holds high a golden torch of freedom welcoming visitors!”',
        do: 'Stand like Lady Liberty: hold right arm straight up holding a torch, and left arm holding a tablet of laws.',
        lookFor: 'Recognizes the Statue of Liberty as a symbol of freedom and welcomes people to our nation.',
      },
      generateSheet: (variant = 1) => ({
        id: `soc-d18-v${variant}`,
        title: 'Social Studies Day 18: The Statue of Liberty',
        subject: 'socialStudies',
        grade: 'K',
        instructions: 'Learn about the famous symbol of freedom in New York Harbor!',
        kidDirections: {
          text: '🗽 Lady Liberty holds a torch of freedom! 🇫🇷 Gift from France! ✏️ Circle the answers!',
          icons: ['🗽', ' torch', '🇺🇸', '✏️'],
          badge: 'Day 18 Social Studies',
        },
        problems: [
          {
            id: 'p1',
            type: 'social-studies',
            number: 1,
            topic: 'american-symbols',
            icon: '🗽',
            prompt: 'What does the Statue of Liberty hold high in her right hand to shine for freedom?',
            options: ['A golden TORCH OF FREEDOM 🗽', 'An ice cream cone', 'A baseball bat', 'An umbrella'],
          },
          {
            id: 'p2',
            type: 'social-studies',
            number: 2,
            topic: 'american-symbols',
            icon: '🌊',
            prompt: 'In what famous harbor does the Statue of Liberty stand to welcome ships and visitors?',
            options: ['NEW YORK Harbor 🗽', 'A swimming pool', 'A small creek', 'A dry desert'],
          },
          {
            id: 'p3',
            type: 'social-studies',
            number: 3,
            topic: 'american-symbols',
            icon: '🇫🇷',
            prompt: 'Which friendly country gave the Statue of Liberty to America as a giant birthday gift?',
            options: ['FRANCE 🇫🇷', 'Outer space', 'Underground dwarfs', 'A toy store'],
          },
        ],
        cutStrip: {
          type: 'straight-strips',
          stage: 'Ages 3-5 (Bottom-Edge Cut)',
          items: ['Lady Liberty 🗽', 'Torch of Freedom', 'New York Harbor', 'Friendship Gift'],
        },
        answerKey: [
          { number: 1, solution: 'A golden TORCH OF FREEDOM 🗽' },
          { number: 2, solution: 'NEW YORK Harbor 🗽' },
          { number: 3, solution: 'FRANCE 🇫🇷' },
        ],
      }),
    },

    // -------------------------------------------------------------------------
    // DAY 19: National Holidays: 4th of July & Thanksgiving
    // -------------------------------------------------------------------------
    {
      day: 19,
      title: 'National Holidays: 4th of July & Thanksgiving',
      standard: 'CKHG American History & Cultural Traditions',
      strictBoundary: '4th of July as birthday of USA (parades, fireworks) and Thanksgiving as day of gratitude and harvest feast. No military tactics or complex colonial history.',
      script: {
        say: '“Holidays are special days to remember! On the 4th of July, we celebrate America’s birthday with fireworks and picnics! On Thanksgiving, we gather to say thank you for family and food!”',
        do: 'Ask: "What are you thankful for this year? What do you like to do on the 4th of July?"',
        lookFor: 'Associates 4th of July with Independence Day/America’s birthday and Thanksgiving with gratitude/family feasts.',
      },
      generateSheet: (variant = 1) => ({
        id: `soc-d19-v${variant}`,
        title: 'Social Studies Day 19: 4th of July & Thanksgiving',
        subject: 'socialStudies',
        grade: 'K',
        instructions: 'Discover why Americans celebrate the 4th of July and Thanksgiving!',
        kidDirections: {
          text: '🎆 4th of July: America’s Birthday! 🦃 Thanksgiving: Gratitude & Family! ✏️ Circle answers!',
          icons: ['🎆', '🦃', '🇺🇸', '✏️'],
          badge: 'Day 19 Social Studies',
        },
        problems: [
          {
            id: 'p1',
            type: 'social-studies',
            number: 1,
            topic: 'american-symbols',
            icon: '🎆',
            prompt: 'On the 4th of July (Independence Day), what special occasion do Americans celebrate with parades and fireworks?',
            options: ['America’s BIRTHDAY 🎆', 'Winter snowfall', 'Bedtime', 'April Fools Day'],
          },
          {
            id: 'p2',
            type: 'social-studies',
            number: 2,
            topic: 'american-symbols',
            icon: '🦃',
            prompt: 'On Thanksgiving in November, what do families gather to do?',
            options: ['Give THANKS for blessings, food, and family 🦃', 'Open Halloween candy', 'Plant spring flowers', 'Go swimming in the snow'],
          },
          {
            id: 'p3',
            type: 'social-studies',
            number: 3,
            topic: 'american-symbols',
            icon: '🤝',
            prompt: 'What was shared at the very first Thanksgiving harvest feast between the Pilgrims and Wampanoag?',
            options: ['Food, friendship, and gratitude 🌽', 'A spaceship trip', 'A snowball fight', 'Car keys'],
          },
        ],
        cutStrip: {
          type: 'straight-strips',
          stage: 'Ages 3-5 (Bottom-Edge Cut)',
          items: ['4th of July = Birthday 🎆', 'Thanksgiving = Gratitude 🦃', 'Parades & Picnics', 'American Holidays 🇺🇸'],
        },
        answerKey: [
          { number: 1, solution: 'America’s BIRTHDAY 🎆' },
          { number: 2, solution: 'Give THANKS for blessings, food, and family 🦃' },
          { number: 3, solution: 'Food, friendship, and gratitude 🌽' },
        ],
      }),
    },

    // -------------------------------------------------------------------------
    // DAY 20: Junior Global Citizen Grand Champion Review
    // -------------------------------------------------------------------------
    {
      day: 20,
      title: 'Junior Global Citizen Grand Champion Review (Days 11–20 Mastery)',
      standard: 'CKHG Cumulative Mid-Quarter Social Studies Review',
      strictBoundary: 'Cumulative review of communities, transportation, needs/wants, continents, oceans, and American symbols. No premature upper-grade civics.',
      script: {
        say: '“Day 20 Social Studies Grand Champion! You know the 7 continents, the 5 oceans, how communities work, and what makes America special! You are a Junior Global Citizen!”',
        do: 'Award your child the Junior Global Citizen title with a proud high-five and cheer!',
        lookFor: 'Demonstrates confident retention across geography, economics, and American heritage.',
      },
      generateSheet: (variant = 1) => ({
        id: `soc-d20-v${variant}`,
        title: 'Social Studies Day 20: Junior Global Citizen Grand Champion',
        subject: 'socialStudies',
        grade: 'K',
        instructions: 'Complete the Day 20 Junior Global Citizen Grand Champion Challenge!',
        kidDirections: {
          text: '🏆 Day 20 Grand Champion! 🌍 You know our world and nation! ✏️ Earn your badge!',
          icons: ['🏆', '🌍', '🇺🇸', '⭐'],
          badge: 'Day 20 Social Studies Champion',
        },
        problems: [
          {
            id: 'p1',
            type: 'social-studies',
            number: 1,
            topic: 'communities',
            icon: '🏙️',
            prompt: 'Which community has giant skyscrapers, subways, and lots of people?',
            options: ['An URBAN City 🏙️', 'A farm barn', 'A forest campsite', 'An empty desert'],
          },
          {
            id: 'p2',
            type: 'social-studies',
            number: 2,
            topic: 'economics',
            icon: '💧',
            prompt: 'Clean drinking water is an essential necessity for life. It is a...',
            options: ['NEED (Essential for life) 💧', 'Want (Fun extra)', 'Toy', 'Game'],
          },
          {
            id: 'p3',
            type: 'social-studies',
            number: 3,
            topic: 'maps-globes',
            icon: '🌍',
            prompt: 'How many giant continents of land are on our planet Earth?',
            options: ['7 Continents 🌍', '2 Continents', '20 Continents', '100 Continents'],
          },
          {
            id: 'p4',
            type: 'social-studies',
            number: 4,
            topic: 'american-symbols',
            icon: '🗽',
            prompt: 'What famous symbol of freedom holds a torch in New York Harbor?',
            options: ['The STATUE OF LIBERTY 🗽', 'A Ferris wheel', 'A train station', 'A billboard'],
          },
        ],
        cutStrip: {
          type: 'straight-strips',
          stage: 'Ages 3-5 (Bottom-Edge Cut)',
          items: ['Urban City', 'Clean Water: Need', '7 Continents', '🏆 Junior Global Citizen!'],
        },
        answerKey: [
          { number: 1, solution: 'An URBAN City 🏙️' },
          { number: 2, solution: 'NEED (Essential for life) 💧' },
          { number: 3, solution: '7 Continents 🌍' },
          { number: 4, solution: 'The STATUE OF LIBERTY 🗽' },
        ],
      }),
    },
  ],
};

/**
 * Retrieves the lesson object for a given subject and day number.
 * @param {'math'|'phonics'|'science'|'socialStudies'} subject 
 * @param {number} dayNumber (1 to 20)
 * @returns {object}
 */
export function getDailyLesson(subject, dayNumber) {
  const track = DAILY_CURRICULUM[subject] || DAILY_CURRICULUM.math;
  const maxDay = track.length || 20;
  const safeDay = Math.max(1, Math.min(maxDay, dayNumber));
  return track.find((d) => d.day === safeDay) || track[0];
}
