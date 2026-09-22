// src/data/worksheets.js
// Comprehensive worksheet library featuring Traditional Classroom Packets and Developmental CPA models.
// Connects to: src/components/worksheet/WorksheetCanvas.jsx, src/domain/curriculum/roadmap.js
// Created: 2026-09-22

import { generateTenFrame } from '../domain/math/tenFrame.js';
import { createNumberBond } from '../domain/math/numberBonds.js';

export const WORKSHEET_LIBRARY = [
  // =========================================================================
  // TRADITIONAL WORKSHEET 1: Math Fact Fluency & Word Problems (Grades 1-2)
  // =========================================================================
  {
    id: 'ws-trad-math-addition',
    milestoneId: 'math-m2',
    title: 'Grade 1-2 Math: Addition & Subtraction Fluency with Story Problems',
    subject: 'math',
    grade: '1',
    parentGuide: {
      whyWeAreDoingThis:
        'Standard elementary school math requires both rapid computational fact fluency and the ability to decontextualize real-world word problems into mathematical equations.',
      standard: 'CCSS.MATH.CONTENT.1.OA.C.6 & 1.OA.A.1',
      whatToWatchFor:
        'Look at whether your child computes Section A quickly without counting on fingers for single digits. For Section B, verify they write the equation before giving the final answer.',
      verbalCue: '“Solve the top row facts first, then read the story carefully to find what the problem is asking!”',
    },
    kidDirections: {
      text: '✏️ Solve the vertical math problems in Section A. 📖 Read the stories in Section B, draw a picture, and write your answer!',
      icons: ['✏️', '📖', '🔢'],
      badge: 'Traditional Classroom Worksheet',
    },
    instructions: 'Complete the vertical math problems. Then solve the story word problems below.',
    verticalMath: {
      title: 'Section A: Math Fact Fluency Drills',
      problems: [
        { number: 1, topNumber: 6, bottomNumber: 3, operator: '+' },
        { number: 2, topNumber: 9, bottomNumber: 4, operator: '-' },
        { number: 3, topNumber: 5, bottomNumber: 5, operator: '+' },
        { number: 4, topNumber: 8, bottomNumber: 2, operator: '-' },
        { number: 5, topNumber: 7, bottomNumber: 4, operator: '+' },
        { number: 6, topNumber: 10, bottomNumber: 6, operator: '-' },
        { number: 7, topNumber: 8, bottomNumber: 5, operator: '+' },
        { number: 8, topNumber: 7, bottomNumber: 3, operator: '-' },
        { number: 9, topNumber: 4, bottomNumber: 9, operator: '+' },
        { number: 10, topNumber: 11, bottomNumber: 4, operator: '-' },
        { number: 11, topNumber: 6, bottomNumber: 6, operator: '+' },
        { number: 12, topNumber: 12, bottomNumber: 5, operator: '-' },
      ],
    },
    wordProblems: [
      {
        number: 13,
        story: 'Liam found 8 smooth river pebbles on the hiking trail. Maya found 5 shiny quartz rocks. How many rocks did the two explorers collect altogether?',
        prompt: 'Show your work in the scratchpad, write the addition equation, and write the total number of rocks.',
      },
      {
        number: 14,
        story: 'The classroom bird feeder had 14 sunflower seeds. A hungry blue jay flew in and ate 6 seeds. How many sunflower seeds were left on the feeder?',
        prompt: 'Draw a picture, write the subtraction equation, and state how many seeds remain.',
      },
    ],
    answerKey: [
      { number: 1, solution: '6 + 3 = 9' },
      { number: 2, solution: '9 - 4 = 5' },
      { number: 3, solution: '5 + 5 = 10' },
      { number: 4, solution: '8 - 2 = 6' },
      { number: 5, solution: '7 + 4 = 11' },
      { number: 6, solution: '10 - 6 = 4' },
      { number: 7, solution: '8 + 5 = 13' },
      { number: 8, solution: '7 - 3 = 4' },
      { number: 9, solution: '4 + 9 = 13' },
      { number: 10, solution: '11 - 4 = 7' },
      { number: 11, solution: '6 + 6 = 12' },
      { number: 12, solution: '12 - 5 = 7' },
      { number: 13, solution: 'Equation: 8 + 5 = 13 rocks altogether' },
      { number: 14, solution: 'Equation: 14 - 6 = 8 seeds left' },
    ],
  },

  // =========================================================================
  // TRADITIONAL WORKSHEET 2: Reading Comprehension Passage & Questions
  // =========================================================================
  {
    id: 'ws-trad-reading-beaver',
    milestoneId: 'phonics-p2',
    title: 'Grade 1-2 Reading Comprehension: "The Secret River Architects"',
    subject: 'phonics',
    grade: '1',
    parentGuide: {
      whyWeAreDoingThis:
        'Standardized reading comprehension requires students to read informational texts closely and cite textual evidence directly to answer questions, fulfilling the CCSS College and Career Readiness mandate.',
      standard: 'CCSS.ELA-LITERACY.RI.1.1 & RI.1.4',
      whatToWatchFor:
        'Encourage your child to look back at the text rather than guessing. Prompt them: "Where does the story say what beavers use to build their homes?"',
      verbalCue: '“Read the passage with your finger under the words. Then look back at the text to prove your answer!”',
    },
    kidDirections: {
      text: '📖 Read the story about beavers. ✏️ Fill in the bubble for the best answer, and write your answer for question #4!',
      icons: ['📖', '✏️', '⭕'],
      badge: 'Traditional Reading Comprehension',
    },
    instructions: 'Read the informational passage carefully. Answer the questions using evidence from the text.',
    readingPassage: {
      title: 'The Secret River Architects',
      genre: 'Informational Science Text',
      paragraphs: [
        'Beavers are famous for being nature\'s greatest builders. They live in ponds, lakes, and rushing forest streams. A beaver uses its strong, orange front teeth to gnaw through tree trunks until the branches tumble down into the water.',
        'With mud, rocks, and thick branches, beavers build strong dams. These dams slow down the fast river current and create deep, quiet ponds. Inside the pond, the beaver family builds a cozy dome-shaped home called a lodge. The only doorway into the lodge is hidden safely deep underwater!',
      ],
      vocabularyBank: [
        { word: 'Dam', definition: 'A barrier built across water' },
        { word: 'Lodge', definition: 'A beaver’s safe dome home' },
        { word: 'Gnaw', definition: 'To chew with sharp teeth' },
      ],
      questions: [
        {
          number: 1,
          question: 'What do beavers use to cut down trees and branches?',
          options: ['Sharp claws on their paws', 'Strong orange front teeth', 'Heavy river rocks', 'Their flat tails'],
        },
        {
          number: 2,
          question: 'Why do beavers build dams across forest streams?',
          options: ['To trap fish for winter', 'To slow down fast water and make a deep pond', 'To hide from the sun', 'To play games'],
        },
        {
          number: 3,
          question: 'Where is the doorway to a beaver’s lodge hidden?',
          options: ['High up in a tree trunk', 'Underneath the green grass', 'Safely hidden underwater', 'Behind a rock wall'],
        },
        {
          number: 4,
          type: 'written',
          question: 'Why do you think beavers put their home entrance underwater? Write one complete sentence:',
        },
      ],
    },
    answerKey: [
      { number: 1, solution: 'B: Strong orange front teeth' },
      { number: 2, solution: 'B: To slow down fast water and make a deep pond' },
      { number: 3, solution: 'C: Safely hidden underwater' },
      { number: 4, solution: 'Written response: To protect themselves and their babies from predators / keep enemies out.' },
    ],
  },

  // =========================================================================
  // TRADITIONAL WORKSHEET 3: ELA Grammar & Sentence Mechanics
  // =========================================================================
  {
    id: 'ws-trad-grammar-mechanics',
    milestoneId: 'phonics-p1',
    title: 'Grade 1-2 Grammar: Sentence Mechanics & Editing Clinic',
    subject: 'phonics',
    grade: '1',
    parentGuide: {
      whyWeAreDoingThis:
        'Teaches capitalization of proper nouns and sentence starters, correct ending punctuation (periods, question marks, exclamation points), and parts of speech identification.',
      standard: 'CCSS.ELA-LITERACY.L.1.2 & L.2.2',
      whatToWatchFor:
        'Verify that your child starts each rewrite with a capital letter and concludes with the appropriate punctuation mark.',
      verbalCue: '“Every sentence starts with a capital and ends with a punctuation stop sign!”',
    },
    kidDirections: {
      text: '🔍 Find the mistakes in each sentence! ✏️ Rewrite the sentence correctly on the line below with capitals and periods!',
      icons: ['🔍', '✏️', '✍️'],
      badge: 'Traditional Grammar & Mechanics',
    },
    instructions: 'Find the errors in capitalization and punctuation. Rewrite each sentence correctly on the line.',
    editingData: {
      title: 'Section A: Fix the Broken Sentences',
      instructions: 'Each sentence has missing capital letters and missing punctuation. Rewrite them cleanly on the lines:',
      sentences: [
        { incorrect: 'the little brown dog barked at the mail truck' },
        { incorrect: 'can you help me find my missing red sneaker' },
        { incorrect: 'we are going to the park on saturday morning' },
        { incorrect: 'look out for that giant puddle of water' },
      ],
    },
    matchingData: {
      title: 'Section B: Parts of Speech Match-Up',
      instructions: 'Draw a line from the word in Column A to its correct part of speech in Column B:',
      columnA: [
        { text: 'Puppy' },
        { text: 'Jump' },
        { text: 'Shiny' },
        { text: 'Quickly' },
      ],
      columnB: [
        { text: 'Action Verb' },
        { text: 'Naming Noun' },
        { text: 'Adverb (How)' },
        { text: 'Describing Adjective' },
      ],
    },
    answerKey: [
      { number: 1, solution: 'The little brown dog barked at the mail truck.' },
      { number: 2, solution: 'Can you help me find my missing red sneaker?' },
      { number: 3, solution: 'We are going to the park on Saturday morning.' },
      { number: 4, solution: 'Look out for that giant puddle of water!' },
      { number: 5, solution: 'Puppy -> Noun, Jump -> Verb, Shiny -> Adjective, Quickly -> Adverb' },
    ],
  },

  // =========================================================================
  // TRADITIONAL WORKSHEET 4: Science - Photosynthesis & Plant Anatomy
  // =========================================================================
  {
    id: 'ws-trad-science-plants',
    milestoneId: 'science-s1',
    title: 'Grade 1-2 Science: Plant Anatomy & Photosynthesis Inquiry',
    subject: 'science',
    grade: '1',
    parentGuide: {
      whyWeAreDoingThis:
        'Introduces the functional biology of plants and the basic inputs of photosynthesis (light, water, carbon dioxide) through diagrams and vocabulary matching.',
      standard: 'NGSS 1-LS1-1 & Core Knowledge Science',
      whatToWatchFor:
        'Ask your child: "Which part of the plant drinks water from the soil?" (Roots) and "Which part catches sunlight?" (Leaves).',
      verbalCue: '“Roots drink, stems carry, leaves make food with sunlight!”',
    },
    kidDirections: {
      text: '🌱 Plants are food factories! ✏️ Match each plant part to its job, and answer the science questions!',
      icons: ['🌱', '☀️', '✏️'],
      badge: 'Traditional Science Diagram',
    },
    instructions: 'Match the plant organ to its survival function and complete the science questions.',
    matchingData: {
      title: 'Section A: Plant Part to Job Match-Up',
      instructions: 'Draw a line from the plant part to what it does for the plant:',
      columnA: [
        { text: 'Roots' },
        { text: 'Stem' },
        { text: 'Leaves' },
        { text: 'Flower' },
      ],
      columnB: [
        { text: 'Makes seeds to grow new plants' },
        { text: 'Absorbs water and anchors plant in soil' },
        { text: 'Catches sunlight to make sweet sugar food' },
        { text: 'Acts like a straw to carry water upward' },
      ],
    },
    problems: [
      {
        id: 'p1',
        type: 'science-inquiry',
        number: 1,
        prompt: 'What green chemical inside plant leaves absorbs sunlight?',
        options: ['Chlorophyll', 'Green paint', 'Tree sap', 'Pollen'],
      },
      {
        id: 'p2',
        type: 'science-inquiry',
        number: 2,
        prompt: 'What gas do plants release into the air that humans need to breathe?',
        options: ['Fresh Oxygen', 'Steam', 'Helium', 'Smoke'],
      },
    ],
    answerKey: [
      { number: 1, solution: 'Roots -> Absorbs water; Stem -> Acts like a straw; Leaves -> Catches sunlight; Flower -> Makes seeds' },
      { number: 2, solution: 'Chlorophyll' },
      { number: 3, solution: 'Fresh Oxygen' },
    ],
  },

  // =========================================================================
  // DEVELOPMENTAL CPA WORKSHEETS (Preserved from Iterations 1 & 2)
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
      badge: 'Visual Subitizing (CPA)',
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
      badge: 'Singapore Math CPA',
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
      badge: 'Orton-Gillingham Phonics',
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
      badge: 'Core Knowledge Science',
    },
    instructions: 'Examine each item below. Check whether it is Living or Non-Living, and identify what it needs.',
    scenario: 'Living things need water, air, and energy to grow and change.',
    problems: [
      { id: 'p1', type: 'science-classification', number: 1, item: 'Baby Oak Tree Seedling' },
      { id: 'p2', type: 'science-classification', number: 2, item: 'Plastic Toy Robot' },
      { id: 'p3', type: 'science-classification', number: 3, item: 'Playful Kitten' },
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
      badge: 'Wilderness Survival STEM',
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
  // =========================================================================
  // TRADITIONAL WORKSHEET: Social Studies & Map Exploration (Grade K-1)
  // =========================================================================
  {
    id: 'ws-trad-social-geography',
    milestoneId: 'soc-m1',
    title: 'Grade K-1 Social Studies: Map Navigation, Landforms & Compass Rose',
    subject: 'socialStudies',
    grade: 'K',
    parentGuide: {
      whyWeAreDoingThis:
        'Spatial reasoning and geographic literacy allow young learners to understand maps, directional orientation, and their place in the world.',
      standard: 'CKHG Kindergarten Unit 1: Spatial Sense & Map Skills',
      whatToWatchFor:
        'Check if your child remembers that North is UP and South is DOWN on maps, and that blue indicates water.',
      verbalCue: '“North points UP to the top of our map, and South points DOWN to the bottom!”',
    },
    kidDirections: {
      text: '🧭 Use the Compass Rose to answer direction questions. 🗺️ Match geographic features and circle the best answers!',
      icons: ['🧭', '🗺️', '✏️'],
      badge: 'Traditional Social Studies Drill',
    },
    instructions: 'Draw lines to match geographic terms in Section A. Then answer the direction and history questions in Section B.',
    matchingData: {
      title: 'Section A: Geographic Terms Matching',
      instructions: 'Draw a straight line from each term on the left to its matching meaning on the right:',
      pairs: [
        { id: 'm1', left: 'Globe', right: 'Round 3D sphere model of planet Earth' },
        { id: 'm2', left: 'Map', right: 'Flat drawing of a room, city, or country' },
        { id: 'm3', left: 'Compass Rose', right: 'Tool pointing North, South, East, West' },
        { id: 'm4', left: 'River', right: 'Flowing natural stream of fresh water' },
      ],
    },
    problems: [
      {
        id: 'p1',
        type: 'social-studies',
        number: 5,
        topic: 'compass-rose',
        icon: '🧭',
        prompt: 'Which direction points UP to the top of a standard map?',
        options: ['North', 'South', 'East', 'West'],
      },
      {
        id: 'p2',
        type: 'social-studies',
        number: 6,
        topic: 'maps-globes',
        icon: '🌊',
        prompt: 'Why are oceans colored BLUE on maps and globes?',
        options: ['Because water absorbs and reflects blue light', 'Because of green trees', 'Because of red rocks', 'Because of snow'],
      },
      {
        id: 'p3',
        type: 'social-studies',
        number: 7,
        topic: 'presidents',
        icon: '🏛️',
        prompt: 'Who was our 1st President and is known as the "Father of Our Country"?',
        options: ['George Washington', 'Abraham Lincoln', 'Thomas Jefferson', 'Theodore Roosevelt'],
      },
    ],
    cutStrip: {
      type: 'straight-strips',
      stage: 'Ages 3-5 (Bottom-Edge Cut)',
      items: ['North = UP', 'South = DOWN', 'East = Sunrise', 'West = Sunset'],
    },
    answerKey: [
      { number: 1, solution: 'Globe -> Round 3D sphere model of planet Earth' },
      { number: 2, solution: 'Map -> Flat drawing of a room, city, or country' },
      { number: 3, solution: 'Compass Rose -> Tool pointing North, South, East, West' },
      { number: 4, solution: 'River -> Flowing natural stream of fresh water' },
      { number: 5, solution: 'North' },
      { number: 6, solution: 'Because water absorbs and reflects blue light' },
      { number: 7, solution: 'George Washington' },
    ],
  },

  // =========================================================================
  // TRADITIONAL WORKSHEET: Kindergarten Math Fact Fluency (Within 5)
  // =========================================================================
  {
    id: 'ws-trad-math-k-fluency',
    milestoneId: 'math-m1',
    title: 'Kindergarten Math: Single-Digit Addition & Subtraction (Within 5)',
    subject: 'math',
    grade: 'K',
    parentGuide: {
      whyWeAreDoingThis:
        'CCSS Kindergarten math benchmark standard requires fact fluency within 5 (1+1, 2+2, 3+1, 4+1, 5-2, etc.) using concrete objects and simple vertical stacked formats.',
      standard: 'CCSS.MATH.CONTENT.K.OA.A.5',
      whatToWatchFor:
        'Encourage instant recall for 1+1, 2+1, 2+2. For subtraction, encourage fingers or crossing out. Check that they do not confuse + and - symbols.',
      verbalCue: '“Add the numbers together! If you have 2 apples and get 2 more, you have 4!”',
    },
    kidDirections: {
      text: '✏️ Solve the Kindergarten math facts within 5. 📖 Read the story problem and draw your work!',
      icons: ['✏️', '📖', '🔢'],
      badge: 'Kindergarten Fact Fluency Drill',
    },
    instructions: 'Complete the vertical addition and subtraction problems. Then solve the story problems below.',
    verticalMath: {
      title: 'Section A: Kindergarten Math Fact Drills (Within 5)',
      problems: [
        { number: 1, topNumber: 1, bottomNumber: 1, operator: '+' },
        { number: 2, topNumber: 2, bottomNumber: 1, operator: '+' },
        { number: 3, topNumber: 1, bottomNumber: 3, operator: '+' },
        { number: 4, topNumber: 2, bottomNumber: 2, operator: '+' },
        { number: 5, topNumber: 3, bottomNumber: 1, operator: '+' },
        { number: 6, topNumber: 4, bottomNumber: 1, operator: '+' },
        { number: 7, topNumber: 2, bottomNumber: 1, operator: '-' },
        { number: 8, topNumber: 3, bottomNumber: 1, operator: '-' },
        { number: 9, topNumber: 4, bottomNumber: 2, operator: '-' },
        { number: 10, topNumber: 5, bottomNumber: 1, operator: '-' },
        { number: 11, topNumber: 5, bottomNumber: 2, operator: '-' },
        { number: 12, topNumber: 5, bottomNumber: 4, operator: '-' },
      ],
    },
    wordProblems: [
      {
        number: 13,
        story: 'Leo has 2 green toy frogs. 2 more green frogs jump over to play. How many frogs are there altogether?',
        prompt: 'Draw the frogs in the scratchpad, write the addition sentence (2 + 2 = _), and write the answer.',
      },
      {
        number: 14,
        story: 'There were 5 shiny butterflies resting on a flower. 2 butterflies flew up into the sky. How many butterflies are left on the flower?',
        prompt: 'Draw 5 butterflies and cross out 2. Write the subtraction sentence (5 - 2 = _).',
      },
    ],
    cutStrip: {
      type: 'straight-strips',
      stage: 'Ages 3-5 (Bottom-Edge Cut)',
      items: ['1 + 1 = 2', '2 + 2 = 4', '3 + 2 = 5', '5 - 2 = 3'],
    },
    answerKey: [
      { number: 1, solution: '2' },
      { number: 2, solution: '3' },
      { number: 3, solution: '4' },
      { number: 4, solution: '4' },
      { number: 5, solution: '4' },
      { number: 6, solution: '5' },
      { number: 7, solution: '1' },
      { number: 8, solution: '2' },
      { number: 9, solution: '2' },
      { number: 10, solution: '4' },
      { number: 11, solution: '3' },
      { number: 12, solution: '1' },
      { number: 13, solution: '2 + 2 = 4 frogs' },
      { number: 14, solution: '5 - 2 = 3 butterflies' },
    ],
  },

  // =========================================================================
  // TRADITIONAL WORKSHEET: Kindergarten Math Counting & Comparison
  // =========================================================================
  {
    id: 'ws-trad-math-k-counting',
    milestoneId: 'math-m1',
    title: 'Kindergarten Math: Counting Objects, Number Writing & Comparison',
    subject: 'math',
    grade: 'K',
    parentGuide: {
      whyWeAreDoingThis:
        'Kindergarten traditional math drills build one-to-one counting cardinality, correct numeral formation, and the ability to visually compare sets without guessing.',
      standard: 'CCSS.MATH.CONTENT.K.CC.B.4 & K.CC.C.7',
      whatToWatchFor:
        'Does your child touch each item once when counting? Watch that numbers like 3, 5, and 7 are written with correct orientation.',
      verbalCue: '“Count each object carefully, write the number in the box, and circle which group has MORE!”',
    },
    kidDirections: {
      text: '🔢 Count the objects in each box. ✏️ Match the numbers to dots and circle which group has MORE!',
      icons: ['🔢', '✏️', '⭐'],
      badge: 'Kindergarten Counting & Comparison Drill',
    },
    instructions: 'Draw a line from each numeral to the matching dots in Section A. Then answer the comparison questions in Section B.',
    matchingData: {
      title: 'Section A: Number to Quantity Matching',
      instructions: 'Draw a line from the numeral in Column A to the matching dots in Column B:',
      columnA: [
        { text: 'Numeral 3' },
        { text: 'Numeral 5' },
        { text: 'Numeral 7' },
        { text: 'Numeral 10' },
      ],
      columnB: [
        { text: '● ● ● (Three Dots)' },
        { text: '● ● ● ● ● (Five Dots)' },
        { text: '● ● ● ● ● ● ● (Seven Dots)' },
        { text: '● ● ● ● ● ● ● ● ● ● (Ten Dots)' },
      ],
    },
    problems: [
      {
        id: 'p1',
        type: 'social-studies',
        number: 5,
        topic: 'citizenship',
        icon: '🍎',
        prompt: 'Group A has 4 apples. Group B has 7 apples. Which group has MORE apples?',
        subtext: 'Compare the two quantities.',
        options: ['Group B (7 apples) has MORE', 'Group A (4 apples) has MORE', 'They are equal'],
      },
      {
        id: 'p2',
        type: 'social-studies',
        number: 6,
        topic: 'citizenship',
        icon: '⭐',
        prompt: 'Count the stars: ⭐ ⭐ ⭐ ⭐ ⭐ ⭐. How many stars did you count?',
        options: ['6 Stars', '5 Stars', '7 Stars', '4 Stars'],
      },
      {
        id: 'p3',
        type: 'social-studies',
        number: 7,
        topic: 'citizenship',
        icon: '🔢',
        prompt: 'Which number comes right after 8 when counting?',
        options: ['9', '7', '10', '6'],
      },
    ],
    wordProblems: [
      {
        number: 8,
        story: 'Mia has 3 red crayons in her cup. Her teacher gives her 2 more crayons. How many crayons does Mia have now?',
        prompt: 'Draw the crayons, write the addition equation, and state the total.',
      },
    ],
    cutStrip: {
      type: 'straight-strips',
      stage: 'Ages 3-5 (Bottom-Edge Cut)',
      items: ['1, 2, 3', '4, 5, 6', '7, 8, 9', '10 Stars!'],
    },
    answerKey: [
      { number: 1, solution: 'Numeral 3 -> ● ● ● (Three Dots)' },
      { number: 2, solution: 'Numeral 5 -> ● ● ● ● ● (Five Dots)' },
      { number: 3, solution: 'Numeral 7 -> ● ● ● ● ● ● ● (Seven Dots)' },
      { number: 4, solution: 'Numeral 10 -> ● ● ● ● ● ● ● ● ● ● (Ten Dots)' },
      { number: 5, solution: 'Group B (7 apples) has MORE' },
      { number: 6, solution: '6 Stars' },
      { number: 7, solution: '9' },
      { number: 8, solution: '3 + 2 = 5 crayons' },
    ],
  },

  // =========================================================================
  // TRADITIONAL WORKSHEET: Kindergarten Phonics & CVC Decoding
  // =========================================================================
  {
    id: 'ws-trad-reading-k-cvc',
    milestoneId: 'phonics-p1',
    title: 'Kindergarten Phonics: Short-Vowel CVC Words & Rhyme Matching',
    subject: 'phonics',
    grade: 'K',
    parentGuide: {
      whyWeAreDoingThis:
        'Kindergarten traditional phonics requires matching decodable 3-letter CVC words to pictures and recognizing auditory rhyming families.',
      standard: 'CCSS.ELA-LITERACY.RF.K.2.D & RF.K.3.B',
      whatToWatchFor:
        'Have your child tap out the 3 sounds /k/ - /a/ - /t/ before matching. Ensure they blend continuously without adding /uh/ to consonants.',
      verbalCue: '“Tap each sound box with your finger, then slide them together: c-a-t -> cat!”',
    },
    kidDirections: {
      text: '🔤 Read the CVC words. ✏️ Match each word to its meaning in Section A. ⭐ Find the rhyming words in Section B!',
      icons: ['🔤', '✏️', '⭐'],
      badge: 'Kindergarten Phonics & Rhyme Drill',
    },
    instructions: 'Match the decodable CVC words in Column A to their meaning in Column B. Then answer the rhyming questions below.',
    matchingData: {
      title: 'Section A: CVC Word Match-Up',
      instructions: 'Draw a line from the sounded-out word in Column A to its picture meaning in Column B:',
      columnA: [
        { text: 'c - a - t' },
        { text: 's - u - n' },
        { text: 'p - i - n' },
        { text: 'b - e - d' },
      ],
      columnB: [
        { text: 'cat 🐱 (meowing pet)' },
        { text: 'sun ☀️ (bright sky)' },
        { text: 'pin 🧷 (sharp sewing tool)' },
        { text: 'bed 🛏️ (cozy sleep place)' },
      ],
    },
    problems: [
      {
        id: 'p1',
        type: 'social-studies',
        number: 5,
        topic: 'citizenship',
        icon: '🎩',
        prompt: 'Which word RHYMES with "hat"?',
        subtext: 'Words that rhyme have the same ending sound (-at).',
        options: ['cat', 'dog', 'pig', 'sun'],
      },
      {
        id: 'p2',
        type: 'social-studies',
        number: 6,
        topic: 'citizenship',
        icon: '🐸',
        prompt: 'Which word RHYMES with "hop"?',
        subtext: 'Words that rhyme have the same ending sound (-op).',
        options: ['mop', 'mat', 'run', 'bed'],
      },
      {
        id: 'p3',
        type: 'social-studies',
        number: 7,
        topic: 'citizenship',
        icon: '👂',
        prompt: 'What is the very FIRST sound you hear in the word "sun"?',
        options: ['/s/ sound', '/m/ sound', '/t/ sound', '/p/ sound'],
      },
    ],
    cutStrip: {
      type: 'straight-strips',
      stage: 'Ages 3-5 (Bottom-Edge Cut)',
      items: ['cat / sat / mat', 'sun / run / fun', 'pin / win / tin', 'bed / red / fed'],
    },
    answerKey: [
      { number: 1, solution: 'c-a-t -> cat 🐱' },
      { number: 2, solution: 's-u-n -> sun ☀️' },
      { number: 3, solution: 'p-i-n -> pin 🧷' },
      { number: 4, solution: 'b-e-d -> bed 🛏️' },
      { number: 5, solution: 'cat (rhymes with hat)' },
      { number: 6, solution: 'mop (rhymes with hop)' },
      { number: 7, solution: '/s/ sound' },
    ],
  },

  // =========================================================================
  // TRADITIONAL WORKSHEET: Kindergarten Science Living & 5 Senses
  // =========================================================================
  {
    id: 'ws-trad-science-k-living',
    milestoneId: 'science-s1',
    title: 'Kindergarten Science: Living vs. Non-Living & The 5 Senses',
    subject: 'science',
    grade: 'K',
    parentGuide: {
      whyWeAreDoingThis:
        'Kindergarten science teaches children to distinguish living things (which need food, water, air, and grow) from non-living objects, and to connect the five sense organs to observation.',
      standard: 'NGSS K-LS1-1 & Core Knowledge CKSci Unit 1',
      whatToWatchFor:
        'Ask: "Does a bicycle grow bigger if you give it water?" Helps the child understand that non-living things never eat or grow.',
      verbalCue: '“Living things eat, drink, and grow! Non-living things do not!”',
    },
    kidDirections: {
      text: '🔬 Match your 5 senses to what they do in Section A. 🌿 Check which items are LIVING or NON-LIVING!',
      icons: ['🔬', '🌿', '✏️'],
      badge: 'Kindergarten Science Drill',
    },
    instructions: 'Draw a line from the sense organ in Column A to its function in Column B. Then answer the living vs. non-living questions.',
    matchingData: {
      title: 'Section A: The Five Senses Match-Up',
      instructions: 'Draw a line from the sense organ in Column A to how it explores the world in Column B:',
      columnA: [
        { text: 'Eyes 👀' },
        { text: 'Ears 👂' },
        { text: 'Hands / Skin ✋' },
        { text: 'Nose 👃' },
      ],
      columnB: [
        { text: 'Sense of Sight (See bright colors)' },
        { text: 'Sense of Hearing (Listen to birds)' },
        { text: 'Sense of Touch (Feel soft puppy fur)' },
        { text: 'Sense of Smell (Smell pine needles)' },
      ],
    },
    problems: [
      {
        id: 'p1',
        type: 'science-classification',
        number: 5,
        item: 'Fluffy Dog Puppy (Barks, drinks milk, grows)',
      },
      {
        id: 'p2',
        type: 'science-classification',
        number: 6,
        item: 'Metal Toy Truck (Made of steel and plastic)',
      },
      {
        id: 'p3',
        type: 'social-studies',
        number: 7,
        topic: 'citizenship',
        icon: '🌱',
        prompt: 'What 3 things does a living plant NEED to stay alive and grow?',
        options: ['Water, Sunlight, and Soil', 'Juice, Candy, and Toys', 'Shoes, Socks, and Hats', 'Ice cream and Cake'],
      },
    ],
    cutStrip: {
      type: 'straight-strips',
      stage: 'Ages 3-5 (Bottom-Edge Cut)',
      items: ['Eyes = Sight', 'Ears = Sound', 'Skin = Touch', 'Nose = Smell'],
    },
    answerKey: [
      { number: 1, solution: 'Eyes -> Sight' },
      { number: 2, solution: 'Ears -> Hearing' },
      { number: 3, solution: 'Hands/Skin -> Touch' },
      { number: 4, solution: 'Nose -> Smell' },
      { number: 5, solution: 'Puppy: Living (Eats, drinks, grows)' },
      { number: 6, solution: 'Metal Truck: Non-Living' },
      { number: 7, solution: 'Water, Sunlight, and Soil' },
    ],
  },
];

export function getAllWorksheets() {
  return WORKSHEET_LIBRARY;
}

export function getWorksheetById(id) {
  return WORKSHEET_LIBRARY.find((w) => w.id === id) || WORKSHEET_LIBRARY[0];
}

/**
 * Normalizes grade strings into canonical grade levels ('K', '1', '2', '3', '4', '5').
 * @param {string} grade 
 * @returns {string}
 */
export function normalizeGrade(grade) {
  if (!grade) return 'K';
  const g = String(grade).toLowerCase().trim();
  if (g.startsWith('k') || g.includes('kindergarten')) return 'K';
  if (g.includes('1') || g.includes('first')) return '1';
  if (g.includes('2') || g.includes('second')) return '2';
  if (g.includes('3') || g.includes('third')) return '3';
  if (g.includes('4') || g.includes('fourth')) return '4';
  if (g.includes('5') || g.includes('fifth')) return '5';
  return 'K';
}

/**
 * Retrieves traditional worksheets filtered by subject and optionally by grade level.
 * @param {string} subject 
 * @param {string} grade 
 * @returns {Array}
 */
export function getTraditionalWorksheets(subject, grade) {
  let list = WORKSHEET_LIBRARY.filter((w) => w.id.startsWith('ws-trad-'));
  if (subject) {
    list = list.filter((w) => w.subject === subject);
  }
  if (grade) {
    const targetGrade = normalizeGrade(grade);
    const gradeFiltered = list.filter((w) => {
      const wGrade = normalizeGrade(w.grade);
      return wGrade === targetGrade;
    });
    // If exact grade matches exist, return them; otherwise fallback to subject list
    if (gradeFiltered.length > 0) {
      return gradeFiltered;
    }
  }
  return list;
}

export function addCustomWorksheet(sheet) {
  if (!sheet || !sheet.id) return null;
  // Deduplicate if already present
  const existingIdx = WORKSHEET_LIBRARY.findIndex((w) => w.id === sheet.id);
  if (existingIdx >= 0) {
    WORKSHEET_LIBRARY[existingIdx] = sheet;
  } else {
    WORKSHEET_LIBRARY.unshift(sheet);
  }
  return sheet;
}
