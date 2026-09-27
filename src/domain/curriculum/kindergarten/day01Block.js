// src/domain/curriculum/kindergarten/day01Block.js
// Kindergarten Day 1 "Golden Master" Daily Block: Schedule, Activities, Field Trip Guide & Sheets.
// Accredited sources: Eureka Math K Mod 1 Lesson 1, CKLA Skills Unit 1 Lesson 1, NGSS K-LS1-1, CKHG K Unit 1.
// Connects to: src/domain/curriculum/dailyBlockModel.js, src/components/daily/DailyDashboard.jsx
// Created: 2026-09-27

import { BLOCK_CATEGORIES } from '../dailyBlockModel.js';

export const KINDERGARTEN_DAY_01_BLOCK = {
  day: 1,
  grade: 'Kindergarten',
  theme: 'Sensory Discovery, Twin Detectives & Community Welcome',
  overview:
    'Welcome to Kindergarten! Today establishes baseline routines: developing auditory attention and top-to-bottom pencil strokes in Phonics, training visual discrimination of identical twins in Math, exploring the 5 senses with an apple in Science, and establishing kind helping hands in Social Studies.',

  // =========================================================================
  // 1. TIME-SCHEDULED DAILY BLOCKS (Pacing, Activities, Parent Scripts)
  // =========================================================================
  timeBlocks: [
    {
      id: 'k-d1-b1',
      category: BLOCK_CATEGORIES.PHONICS_LITERACY,
      timeSlot: '8:30 AM – 9:00 AM',
      durationMinutes: 30,
      title: 'Morning Circle: Environmental Sounds & Raindrop Strokes',
      standard: 'CCSS.ELA-LITERACY.RF.K.1.D • CKLA Skills Unit 1 Lesson 1',
      materials: ['Green crayon', 'Pencil with eraser', 'Jangling keys or bell', 'Piece of scratch paper to crumple'],
      handsOnActivity: {
        title: 'Mystery Sound Detective Game & Skywriting',
        steps: [
          'Ask your child to close their eyes tightly.',
          'Make 3 distinct sounds: jangle keys, crumple a paper ball, and clap hands twice. Ask: "Can your detective ears tell me what made that sound?"',
          'Practice left-to-right tracking by moving your hand across the room like a sliding airplane.',
          'Pretend raindrops are falling from the clouds: trace finger in the air from high (headline) straight down to the floor (baseline) reciting: "Rain falls down, touch the ground!"',
        ],
      },
      script: {
        sayThis:
          '“Listen closely with your detective ears! What sounds do you hear in our room? Now let’s pretend rain is falling straight down from the fluffy cloud to the thirsty flower: ‘Rain falls down, touch the ground!’”',
        whatToDo:
          'Guide your child’s hand to find the green starter star at the top headline. Ensure they pull straight down to the solid baseline without stopping mid-air.',
        whatToLookFor:
          'Does your child hold the pencil with a comfortable 3-finger tripod pinch? Do they stabilize the paper with their non-dominant helper hand?',
      },
      worksheetId: 'k-phonics-day-1',
    },
    {
      id: 'k-d1-b2',
      category: BLOCK_CATEGORIES.MATH_EXPLORATION,
      timeSlot: '9:00 AM – 9:45 AM',
      durationMinutes: 45,
      title: 'Math Lab: The Twin Detective (Visual Discrimination)',
      standard: 'CCSS.MATH.CONTENT.K.MD.B.3 • Eureka Math K Module 1 Lesson 1',
      materials: ['4 pairs of matching socks or toy blocks', 'Toy magnifying glass (optional)', 'Crayon or pencil'],
      handsOnActivity: {
        title: 'The Sock & Toy Twin Sorting Match',
        steps: [
          'Dump 4 pairs of mismatched socks or colored building blocks in a cheerful pile on the rug or table.',
          'Hold up one striped sock: "This mitten needs its exact matching twin! Who has the same stripes, color, and size?"',
          'Have your child inspect the items and pair up the twins together.',
          'Discuss what makes something NOT a twin (e.g., "This one has polka dots, but that one has stripes!").',
        ],
      },
      script: {
        sayThis:
          '“Welcome, Junior Detective! Look at our pile of objects. Some are exact twins because they look 100% the same! Point to this mitten. Can you find its matching twin?”',
        whatToDo:
          'Have your child trace their pointer finger from the left item across to the matching right item before drawing a pencil line.',
        whatToLookFor:
          'Ensure your child compares all visual attributes (color, pattern, shape) and does not confuse items that merely share a color.',
      },
      worksheetId: 'k-math-day-1',
    },
    {
      id: 'k-d1-b3',
      category: BLOCK_CATEGORIES.BRAIN_BREAK_SNACK,
      timeSlot: '9:45 AM – 10:15 AM',
      durationMinutes: 30,
      title: 'Sensory Brain Break & Apple Crunch Snack',
      standard: 'Developmental Movement & Sensory Reset',
      materials: ['Fresh red apple slices', 'Small plate', 'Cup of water'],
      handsOnActivity: {
        title: 'Headline-to-Baseline Body Stretches & Sensory Taste Test',
        steps: [
          'Stand up tall like a tree! Reach fingers high to the sky ("Top Headline!").',
          'Bend down and touch your toes ("Solid Baseline!"). Repeat 3 times to get the wiggles out.',
          'Wash hands and sit down for an apple snack.',
          'Notice how the apple feels smooth in our hands and makes a crisp "CRUNCH!" when we take our first bite.',
        ],
      },
      script: {
        sayThis:
          '“Reach, reach, reach up high to the sky! Now bend, bend, bend down low to the baseline! Let’s wash our hands and crunch into a sweet, juicy apple!”',
        whatToDo: 'Encourage energetic gross-motor stretching before settling into the calm snack transition.',
        whatToLookFor: 'Does your child transition calmly after physical stretching?',
      },
      worksheetId: null,
    },
    {
      id: 'k-d1-b4',
      category: BLOCK_CATEGORIES.SCIENCE_DISCOVERY,
      timeSlot: '10:15 AM – 10:50 AM',
      durationMinutes: 35,
      title: 'Science Discovery: 5 Senses & Living vs. Non-Living',
      standard: 'NGSS K-LS1-1 • Sensory Scientific Observation',
      materials: ['Fresh apple slice', 'Magnifying glass (optional)', 'Crayons'],
      handsOnActivity: {
        title: 'The 5 Senses Apple Investigation',
        steps: [
          'Place an apple slice on a paper plate in front of your junior scientist.',
          'Sight: Use eyes to observe the bright red peel and pale white flesh.',
          'Touch: Run fingertips over the smooth waxy skin.',
          'Smell: Hold the slice to the nose and inhale the fresh sweet scent.',
          'Hearing: Tap fingernail against the skin and listen.',
          'Taste: Take a small bite and savor the flavor.',
          'Ask: "Did the apple grow on a living apple tree? Does an apple tree need water and sunshine to grow?"',
        ],
      },
      script: {
        sayThis:
          '“Today you are an official Junior Scientist! Look at this apple. We can SEE its red skin with our eyes. We can FEEL its smooth shape with our hands. We can SMELL its sweet scent with our nose. When we bite it, we HEAR the crunch with our ears, and TASTE the sweet juice with our tongue! All 5 senses work together!”',
        whatToDo: 'Guide child to point to each body part as they describe the matching sensory observation.',
        whatToLookFor: 'Child can name their 5 senses (sight, touch, hearing, smell, taste) and connect each to the correct body part.',
      },
      worksheetId: 'k-science-day-1',
    },
    {
      id: 'k-d1-b5',
      category: BLOCK_CATEGORIES.SOCIAL_STUDIES,
      timeSlot: '10:50 AM – 11:20 AM',
      durationMinutes: 30,
      title: 'Social Studies Circle: Helping Hands & Kindness Rules',
      standard: 'Core Knowledge CKHG Kindergarten Unit 1 • C3 Framework D2.Civ.2.K-2',
      materials: ['Sheet of paper', 'Washable markers or crayons'],
      handsOnActivity: {
        title: 'Our Helping Hand Family & Classroom Pledge',
        steps: [
          'Trace your child’s hand gently on a piece of paper with a crayon.',
          'Ask: "What is one special way our hands can help our family or classroom today?" (e.g., putting toys in the bin, sharing a hug, gently holding a book).',
          'Write their answer inside the palm of their traced hand.',
          'Celebrate their role as an important helper in your community!',
        ],
      },
      script: {
        sayThis:
          '“Our hands are wonderful tools. In our classroom and home family, we use our helping hands to share, care, and clean up! What is one way your hands will be a superstar helper today?”',
        whatToDo: 'Encourage positive, concrete actions such as packing up pencils or pushing in their chair.',
        whatToLookFor: 'Child articulates that helping others and cooperating makes our home and school a safe, happy place.',
      },
      worksheetId: 'k-social-day-1',
    },
    {
      id: 'k-d1-b6',
      category: BLOCK_CATEGORIES.FIELD_TRIP_IMMERSION,
      timeSlot: '11:20 AM – 12:15 PM',
      durationMinutes: 55,
      title: 'Experiential Immersion: The Great Twin Detective Quest',
      standard: 'Cross-Disciplinary Real-World Experiential Learning',
      materials: ['Small tote bag or bucket for nature treasures', 'Comfortable walking shoes', 'Water bottle'],
      handsOnActivity: {
        title: 'Real-World Scavenger Walk & Sensory Audit',
        steps: [
          'Head outside for an intentional discovery walk in the neighborhood, local park, or backyard.',
          'Search for nature twins: compare two fallen oak leaves or two round river pebbles.',
          'Identify living vs. non-living items along the sidewalk.',
          'Pause for a 30-second silent sound audit with closed eyes.',
        ],
      },
      script: {
        sayThis:
          '“Put on your invisible detective hat! We are heading out on a real-world mission to find twins in nature and spot living creatures in our neighborhood!”',
        whatToDo: 'Keep the pace leisurely. Pause whenever the child notices a bug, leaf, or cloud.',
        whatToLookFor: 'Child enthusiastically applies their morning concepts to the real outdoor environment.',
      },
      worksheetId: null,
    },
    {
      id: 'k-d1-b7',
      category: BLOCK_CATEGORIES.REFLECTION_MASTERY,
      timeSlot: '12:15 PM – 12:30 PM',
      durationMinutes: 15,
      title: 'Daily Wrap-Up: Star Mastery & Refrigerator Art Gallery',
      standard: 'Metacognitive Self-Reflection & Positive Reinforcement',
      materials: ['Gold or yellow crayon', 'Refrigerator magnet or tape'],
      handsOnActivity: {
        title: 'Coloring Daily Stars & Gallery Display',
        steps: [
          'Review the 4 completed worksheets together.',
          'Color in the 3 reward stars at the top header of each page.',
          'Choose their single favorite sheet of the day to proudly stick onto the refrigerator or bulletin board!',
        ],
      },
      script: {
        sayThis:
          '“Look at all the hard work you accomplished today on Day 1! You are a master Twin Detective and Junior Scientist! Let’s color your 3 golden stars and hang your masterpiece on the fridge!”',
        whatToDo: 'Praise specific effort: "I love how patiently you pulled your crayon down from headline to baseline!"',
        whatToLookFor: 'Sense of pride, joy, and accomplishment in finishing their first kindergarten day.',
      },
      worksheetId: null,
    },
  ],

  // =========================================================================
  // 2. FIELD TRIP & REAL-WORLD EXPERIENTIAL REINFORCEMENT GUIDE
  // =========================================================================
  fieldTrip: {
    title: 'The Great Twin Detective Nature Quest & Living Senses Walk',
    duration: '45–60 Minutes',
    location: 'Local Neighborhood Park, Community Nature Trail, or Backyard',
    learningConnection:
      'Directly cements Morning Math (finding identical twins vs. non-twins), Science (distinguishing living trees/bugs from non-living benches/rocks), and Phonics (auditory discrimination of ambient outdoor sounds).',
    materials: ['Nature treasure collection bag or small bucket', 'Walking shoes', 'Magnifying glass (optional)'],
    outdoorMission: {
      headline: 'Outdoor Nature Scavenger Quest',
      description:
        'Take a 30-to-45 minute stroll through a nearby park, tree-lined sidewalk, or garden. Have your child carry a collection bag for natural treasures.',
      scavengerChecklist: [
        'Find 2 fallen leaves that are "Twins" (same shape, color, and tree type)',
        'Find 2 leaves that are "Different" (e.g., one tiny jagged leaf and one large smooth leaf)',
        'Touch 1 rough tree bark (Touch Sense)',
        'Find 3 Living Things (e.g., singing bird, crawling ant, green leafy bush)',
        'Find 3 Non-Living Things (e.g., wooden park bench, concrete sidewalk, grey pebble)',
        'Close eyes for 30 seconds and count 3 different sounds (wind in leaves, barking dog, car passing)',
      ],
    },
    indoorAlternative: {
      headline: 'Rainy Day / Kitchen Pantry Detective Hunt',
      description:
        'If weather prohibits outdoor walking, explore the kitchen pantry and living room with a detective magnifying glass.',
      scavengerChecklist: [
        'Find 2 identical canned food twin cans in the pantry (exact same size & label)',
        'Compare 2 fruits: an apple vs. a banana (notice differences in skin texture, color, and scent)',
        'Spot 3 non-living items in the kitchen (metal spoon, ceramic bowl, wooden cutting board)',
        'Spot 1 living houseplant or pet and observe how it needs water or food',
        'Close eyes and identify 3 kitchen sounds (running faucet, refrigerator hum, opening cabinet door)',
      ],
    },
    conversationPrompts: [
      {
        question: '“Look at that oak tree and look at that park bench. Why is the tree living, but the park bench is non-living?”',
        talkingPoints:
          'The tree grows, drinks water from its roots, and needs sunshine. The bench was made by people from wood, but it cannot drink water, eat food, or grow taller!',
      },
      {
        question: '“Look at these two pebbles in our bag. Are they exact twins, or do they have different bumps and colors?”',
        talkingPoints:
          'In nature, almost every rock has tiny differences in size, smoothness, and speckles. Exact twins are special!',
      },
      {
        question: '“Close your eyes and point your ears to the sky. What is the quietest sound you can hear right now?”',
        talkingPoints:
          'Encourages auditory discrimination and mindfulness—the foundational brain skill for hearing individual letter sounds (phonemes) in words.',
      },
    ],
  },

  // =========================================================================
  // 3. MATCHING PRINTABLE WORKSHEET DEFINITIONS (Math, Phonics, Science, Social)
  // =========================================================================
  sheets: {
    math: {
      id: 'k-math-day-1',
      day: 1,
      subject: 'math',
      title: 'Math Day 1: Visual Discrimination — Exactly the Same Twins',
      framework: 'CCSS.MATH.CONTENT.K.MD.B.3 • Eureka Math K Module 1 Lesson 1',
      instructions: 'Draw a straight pencil line to connect each picture on the left to its EXACT matching twin on the right!',
      strictBoundary: 'Focus strictly on finding identical visual pairs. Do not introduce numbers, counting, or addition today.',
      parentGuide: {
        standard: 'CCSS.MATH.CONTENT.K.MD.B.3 (Classify objects into given categories)',
        whyWeAreDoingThis:
          'Visual discrimination is the essential prerequisite for mathematical numeral recognition. Before a child can distinguish "6" from "9" or "3" from "8", they must accurately perceive identical attributes, patterns, and orientations.',
        verbalCue: '“Look closely! Trace your pointer finger from this striped mitten straight across to find its identical twin!”',
        whatToWatchFor:
          'Check that your child does not connect items that merely share a color (e.g., connecting a red apple to a red boot). They must match exact shape and details.',
      },
      kidDirections: {
        badge: 'Twin Detective Mission',
        text: 'Use your magic pencil to connect each picture to its exact matching twin!',
        icons: ['👁️', '✏️', '🧤'],
      },
      matchingData: {
        leftColumn: [
          { id: 'left-1', label: 'Striped Mitten', emoji: '🧤', matchId: 'right-1' },
          { id: 'left-2', label: 'Crisp Red Apple', emoji: '🍎', matchId: 'right-2' },
          { id: 'left-3', label: 'Smiling Warm Sun', emoji: '☀️', matchId: 'right-3' },
          { id: 'left-4', label: 'Blue Winter Hat', emoji: '🧢', matchId: 'right-4' },
        ],
        rightColumn: [
          { id: 'right-3', label: 'Smiling Warm Sun', emoji: '☀️', matchId: 'right-3' },
          { id: 'right-1', label: 'Striped Mitten', emoji: '🧤', matchId: 'right-1' },
          { id: 'right-4', label: 'Blue Winter Hat', emoji: '🧢', matchId: 'right-4' },
          { id: 'right-2', label: 'Crisp Red Apple', emoji: '🍎', matchId: 'right-2' },
        ],
      },
      answerKey: [
        'Striped Mitten 🧤 connects to Striped Mitten 🧤',
        'Red Apple 🍎 connects to Red Apple 🍎',
        'Smiling Sun ☀️ connects to Smiling Sun ☀️',
        'Blue Winter Hat 🧢 connects to Blue Winter Hat 🧢',
      ],
    },

    phonics: {
      id: 'k-phonics-day-1',
      day: 1,
      subject: 'phonics',
      title: 'Phonics Day 1: Prewriting Strokes & Environmental Sounds',
      framework: 'CCSS.ELA-LITERACY.RF.K.1.D • CKLA Skills Unit 1 Lesson 1',
      instructions: 'Start your pencil on the green star at the top headline. Pull straight down to the solid baseline like falling rain!',
      strictBoundary: 'Prewriting vertical strokes only. Do not teach formal letter names or spelling today.',
      parentGuide: {
        standard: 'CCSS.ELA-LITERACY.RF.K.1.D (Orientation & Motor Directionality)',
        whyWeAreDoingThis:
          'All English letters are formed using top-to-bottom and left-to-right strokes (l, t, b, d, i). Training the hand to pull down rather than push up creates fluent handwriting habits and prevents wrist fatigue.',
        verbalCue: '“Start at the green star on the top cloud! Pull your pencil straight down: ‘Rain falls down, touch the ground!’”',
        whatToWatchFor:
          'Ensure your child pulls downward from top to bottom. If they try pushing upward from the baseline, gently model the downward raindrop motion.',
      },
      kidDirections: {
        badge: 'Raindrop Drawing Mission',
        text: 'Start at the green star. Pull your pencil straight down like raindrops falling from the sky!',
        icons: ['🌧️', '✏️', '🌸'],
      },
      problems: [
        {
          id: 'p1',
          prompt: 'Raindrop 1: Start at cloud star, pull down to the tulip',
          startDot: 'headline',
          topIcon: '🌧️',
          bottomIcon: '🌷',
        },
        {
          id: 'p2',
          prompt: 'Raindrop 2: Start at cloud star, pull down to the sunflower',
          startDot: 'headline',
          topIcon: '🌧️',
          bottomIcon: '🌻',
        },
        {
          id: 'p3',
          prompt: 'Raindrop 3: Start at cloud star, pull down to the daisy',
          startDot: 'headline',
          topIcon: '🌧️',
          bottomIcon: '🌼',
        },
        {
          id: 'p4',
          prompt: 'Raindrop 4: Start at cloud star, pull down to the green grass',
          startDot: 'headline',
          topIcon: '🌧️',
          bottomIcon: '🌱',
        },
      ],
      answerKey: ['4 straight vertical lines drawn downward from headline green dots to bottom floral targets.'],
    },

    science: {
      id: 'k-science-day-1',
      day: 1,
      subject: 'science',
      title: 'Science Day 1: Exploring Our 5 Senses with an Apple',
      framework: 'NGSS K-LS1-1 • Sensory Scientific Observation',
      instructions: 'Which body part helps us investigate the apple? Match each body part to how it senses the apple!',
      strictBoundary: 'Observing the 5 senses with a familiar apple. No cellular biology or complex internal anatomy.',
      parentGuide: {
        standard: 'NGSS K-LS1-1 (Use observations to describe patterns of living things)',
        whyWeAreDoingThis:
          'Science begins with concrete sensory observation. Teaching kindergarteners to explicitly link the 5 senses to their respective body parts builds the vocabulary needed for scientific inquiry.',
        verbalCue: '“We use our eyes to see the red skin! We use our ears to hear the crunch! Which sense tastes the juice?”',
        whatToWatchFor:
          'Child recognizes that they use their entire body to gather information about the world around them.',
      },
      kidDirections: {
        badge: 'Apple Scientist Award',
        text: 'Match each body part to how it investigates our juicy apple!',
        icons: ['🍎', '🔬', '⭐'],
      },
      matchingData: {
        leftColumn: [
          { id: 'bp-1', label: 'Eyes (Sight)', emoji: '👀', matchId: 'sa-1' },
          { id: 'bp-2', label: 'Ears (Hearing)', emoji: '👂', matchId: 'sa-2' },
          { id: 'bp-3', label: 'Nose (Smell)', emoji: '👃', matchId: 'sa-3' },
          { id: 'bp-4', label: 'Hands (Touch)', emoji: '🖐️', matchId: 'sa-4' },
          { id: 'bp-5', label: 'Tongue (Taste)', emoji: '👅', matchId: 'sa-5' },
        ],
        rightColumn: [
          { id: 'sa-3', label: 'Smell the sweet apple scent', emoji: '🍏', matchId: 'sa-3' },
          { id: 'sa-1', label: 'See the shiny red skin', emoji: '🍎', matchId: 'sa-1' },
          { id: 'sa-5', label: 'Taste the delicious sweet juice', emoji: '😋', matchId: 'sa-5' },
          { id: 'sa-2', label: 'Hear the loud crisp CRUNCH!', emoji: '🔊', matchId: 'sa-2' },
          { id: 'sa-4', label: 'Feel the smooth, cool peel', emoji: '✨', matchId: 'sa-4' },
        ],
      },
      answerKey: [
        'Eyes 👀 -> See the shiny red skin',
        'Ears 👂 -> Hear the loud crisp CRUNCH!',
        'Nose 👃 -> Smell the sweet apple scent',
        'Hands 🖐️ -> Feel the smooth, cool peel',
        'Tongue 👅 -> Taste the delicious sweet juice',
      ],
    },

    socialStudies: {
      id: 'k-social-day-1',
      day: 1,
      subject: 'socialStudies',
      title: 'Social Studies Day 1: Helping Hands in Our Family & School',
      framework: 'Core Knowledge CKHG K Unit 1 • C3 Framework D2.Civ.2.K-2',
      instructions: 'Circle all the pictures that show a wonderful helping hand! Put a friendly smile next to your favorite one!',
      strictBoundary: 'Focus on family roles, school manners, and cooperative sharing. No complex political or historical structures.',
      parentGuide: {
        standard: 'C3 Framework D2.Civ.2.K-2 (Explain how all people play important roles in a community)',
        whyWeAreDoingThis:
          'Early social studies anchors a child’s understanding of their immediate community—their home and classroom. Identifying prosocial actions fosters belonging, empathy, and collaborative habits.',
        verbalCue: '“Look at these friends! Is picking up toys with a smile being a helper? Yes! Let’s circle the helping hands!”',
        whatToWatchFor:
          'Child explains in their own words why helping and sharing makes our classroom and home family feel safe and happy.',
      },
      kidDirections: {
        badge: 'Super Helper Mission',
        text: 'Circle all the friendly helping hands! Color the happy star!',
        icons: ['🤝', '❤️', '🌟'],
      },
      problems: [
        {
          id: 'ss1',
          label: 'Putting toys neatly into the storage bin',
          emoji: '🧸 📦',
          isHelperAction: true,
          caption: 'Cleaning up toys together',
        },
        {
          id: 'ss2',
          label: 'Sharing crayons and colored pencils with a friend',
          emoji: '🖍️ 🤝',
          isHelperAction: true,
          caption: 'Sharing coloring supplies',
        },
        {
          id: 'ss3',
          label: 'Knocking over someone’s tall block tower',
          emoji: '💥 😢',
          isHelperAction: false,
          caption: 'Knocking over blocks (Not helpful)',
        },
        {
          id: 'ss4',
          label: 'Holding the door open and saying "Please" and "Thank you"',
          emoji: '🚪 💖',
          isHelperAction: true,
          caption: 'Kind manners and holding the door',
        },
      ],
      answerKey: [
        'Circle: Cleaning up toys 🧸, Sharing crayons 🖍️, and Kind manners 🚪.',
        'Do not circle: Knocking over blocks 💥.',
      ],
    },
  },
};
