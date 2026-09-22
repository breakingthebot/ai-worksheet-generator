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

  // =========================================================================
  // SOCIAL STUDIES & GEOGRAPHY TRACK (Core Knowledge CKHG Kindergarten)
  // =========================================================================
  socialStudies: [
    {
      day: 1,
      title: 'Maps vs. Globes (Water is Blue, Land is Green/Brown)',
      standard: 'CKHG Kindergarten Unit 1: Let’s Explore Our World',
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
  ],
};

/**
 * Retrieves the lesson object for a given subject and day number.
 * @param {'math'|'phonics'|'science'|'socialStudies'} subject 
 * @param {number} dayNumber (1 to 10)
 * @returns {object}
 */
export function getDailyLesson(subject, dayNumber) {
  const track = DAILY_CURRICULUM[subject] || DAILY_CURRICULUM.math;
  const safeDay = Math.max(1, Math.min(10, dayNumber));
  return track.find((d) => d.day === safeDay) || track[0];
}
