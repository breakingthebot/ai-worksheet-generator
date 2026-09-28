// src/domain/curriculum/kindergarten/day02Block.js
// Kindergarten Day 2 Daily Block: Schedule, Hands-On Activities, Field Trip Guide & Sheets.
// Accredited sources: Eureka Math K Mod 1 Lesson 2, CKLA Skills Unit 1 Lesson 2, NGSS K-PS3-1, CKHG K Unit 1 Lesson 2.
// Connects to: src/domain/curriculum/dailyBlockModel.js, src/domain/curriculum/dailyBlockRegistry.js
// Created: 2026-09-27

import { BLOCK_CATEGORIES } from '../dailyBlockModel.js';

export const KINDERGARTEN_DAY_02_BLOCK = {
  day: 2,
  grade: 'Kindergarten',
  theme: 'Auditory Wonder, Left-to-Right Tracks & "What’s Different?"',
  overview:
    'Day 2 builds directly on yesterday’s bedrock foundations: advancing from exact identical twins to finding the "odd-one-out" in Math, shifting from vertical downward raindrops to left-to-right horizontal racecar strokes in Phonics, exploring our ears and loud vs. soft sounds in Science, and establishing cooperative safety rules in Social Studies.',

  // Explicit pedagogical progression connecting Day 1 to Day 2
  pedagogicalProgression: {
    math: 'Day 1 identified 100% identical twins. Day 2 advances to finding the "odd-one-out" by analyzing specific attributes (e.g. 3 apples + 1 banana; 3 cars + 1 airplane).',
    phonics: 'Day 1 trained vertical headline-to-baseline pull-down lines. Day 2 trains horizontal left-to-right strokes along the dashed midline, matching English reading/writing directionality.',
    science: 'Day 1 explored the sense of sight. Day 2 investigates our sense of hearing, comparing loud sounds (drums, thunder) to soft sounds (whispers, purrs).',
    socialStudies: 'Day 1 introduced personal identity and helping hands. Day 2 advances to why we have classroom and home rules (taking turns, safe walking feet).',
    fieldTrip: 'Day 1 searched for identical nature twins. Day 2 explores the acoustic environment on a Loud & Quiet Sound Hunt and identifies neighborhood differences.',
  },

  // =========================================================================
  // 1. TIME-SCHEDULED DAILY BLOCKS (Pacing, Activities, Parent Scripts)
  // =========================================================================
  timeBlocks: [
    {
      id: 'k-d2-b1',
      category: BLOCK_CATEGORIES.PHONICS_LITERACY,
      timeSlot: '8:30 AM – 9:00 AM',
      durationMinutes: 30,
      title: 'Morning Circle: Loud vs. Soft Sounds & Left-to-Right Racecar Strokes',
      standard: 'CCSS.ELA-LITERACY.RF.K.1.D • CKLA Skills Unit 1 Lesson 2',
      materials: ['Green crayon', 'Pencil with eraser', 'Toy car or small block to slide', 'Two hands to clap'],
      handsOnActivity: {
        title: 'Loud Lion / Quiet Mouse Game & The Sliding Racecar',
        steps: [
          'Roar like a loud, friendly lion: "ROAR!" Then whisper like a tiny, secret mouse: "(squeak, squeak)".',
          'Notice how our ears hear loud sounds with lots of power and quiet sounds with gentle softness.',
          'Take a toy car or block and slide it on the table from LEFT to RIGHT: "Zoom across the street!"',
          'Practice tracing in the air from left to right along an imaginary road: "Start at the green light, zoom to the checkered flag!"',
        ],
      },
      script: {
        sayThis:
          '“Let’s test our detective ears! Can you roar like a big, loud lion? Now can you whisper like a tiny mouse? In reading and writing, our words always zoom from the left side of the page all the way to the right side, just like a racecar on a track!”',
        whatToDo:
          'Point to the green starter dot on the left. Guide your child’s hand to slide smoothly across the dashed midline to the checkered flag on the right without lifting the pencil.',
        whatToLookFor:
          'Does your child move smoothly from left to right? Ensure they do not push backwards from right to left.',
      },
      worksheetId: 'k-phonics-day-2',
    },
    {
      id: 'k-d2-b2',
      category: BLOCK_CATEGORIES.MATH_EXPLORATION,
      timeSlot: '9:00 AM – 9:45 AM',
      durationMinutes: 45,
      title: 'Math Lab: Similar but Different (The Odd-One-Out Detective)',
      standard: 'CCSS.MATH.CONTENT.K.MD.B.3 • Eureka Math K Module 1 Lesson 2',
      materials: ['3 identical items (e.g. 3 forks, 3 red blocks) + 1 different item (1 spoon, 1 blue block)', 'Crayon or pencil'],
      handsOnActivity: {
        title: 'The Real-World Odd-One-Out Mystery Pile',
        steps: [
          'Place 3 green apples and 1 yellow banana on the table.',
          'Ask: "Three of these friends match because they are all apples. But which one is DIFFERENT? Why is it the odd one out?"',
          'Encourage your child to explain: "The banana is different because it is yellow and curved!"',
          'Try another set: 3 small toy cars and 1 toy airplane: "What makes the airplane different? (It flies in the sky; cars roll on roads)."',
        ],
      },
      script: {
        sayThis:
          '“Look closely, Detective! Three of these friends belong together, but one is DIFFERENT! Circle the one that is different and tell me its secret difference!”',
        whatToDo:
          'Encourage your child to use complete descriptive sentences: "This one is different because it is a banana, not an apple."',
        whatToLookFor:
          'Does your child identify the specific attribute that makes the object different (color, shape, or category)?',
      },
      worksheetId: 'k-math-day-2',
    },
    {
      id: 'k-d2-b3',
      category: BLOCK_CATEGORIES.BRAIN_BREAK_SNACK,
      timeSlot: '9:45 AM – 10:15 AM',
      durationMinutes: 30,
      title: 'Sensory Brain Break & Crunchy Sound Snack',
      standard: 'Developmental Movement & Auditory Reset',
      materials: ['Crisp crackers, carrot sticks, or pretzel sticks', 'Small cup of water'],
      handsOnActivity: {
        title: 'The Loud vs. Quiet Crunch Experiment',
        steps: [
          'Stand up and do 5 jumping jacks: count them out loud!',
          'Wash hands and sit down with a crisp cracker or carrot stick.',
          'Bite 1: Take a big bite with open mouth—listen to the LOUD crunch!',
          'Bite 2: Take a small bite with lips closed—listen to how much QUIETER it sounds.',
          'Notice how our jaw and ears work together to make and hear sound!',
        ],
      },
      script: {
        sayThis:
          '“Let’s do 5 big star jumps! Now let’s sit down for a crunchy snack. Can you make a LOUD crunch with your first bite? Now chew with your mouth closed—is it softer and quieter?”',
        whatToDo: 'Have fun experimenting with loud vs. quiet eating sounds before transitioning to science.',
        whatToLookFor: 'Does your child enjoy noticing the auditory difference between loud and quiet crunches?',
      },
      worksheetId: null,
    },
    {
      id: 'k-d2-b4',
      category: BLOCK_CATEGORIES.SCIENCE_DISCOVERY,
      timeSlot: '10:15 AM – 10:50 AM',
      durationMinutes: 35,
      title: 'Science Discovery: Our Amazing Sense of Hearing',
      standard: 'NGSS K-PS3-1 • Auditory Perception & Sound Waves',
      materials: ['Metal spoon & pot lid or bowl', 'Soft cotton ball or tissue', 'Red and blue crayons'],
      handsOnActivity: {
        title: 'The Sound Dish Experiment & Loud/Soft Sort',
        steps: [
          'Cup your hands behind your ears like big dog or elephant ears. Speak in a normal voice: "Does my voice sound louder when you cup your ears?"',
          'Explain: "Our ears are shaped like little cups to catch sound waves floating through the air!"',
          'Drop a cotton ball on the table: can your ears hear it? (It’s super soft and silent!).',
          'Gently tap a metal spoon on a pot lid: "What kind of sound is that? (Loud and ringing!)."',
          'Classify sounds in the room: clock ticking (soft), door shutting (loud), whispering (soft).',
        ],
      },
      script: {
        sayThis:
          '“Put your hands behind your ears like big elephant ears! Your ears are your body’s sound catchers! Some sounds are BIG and LOUD like thunder, and some are gentle and SOFT like a sleeping kitten purr.”',
        whatToDo: 'Guide child to use a RED crayon to circle loud sounds and a BLUE crayon for soft sounds on the worksheet.',
        whatToLookFor: 'Child correctly distinguishes loud acoustic events (thunder, drums) from soft ones (whispers, purrs).',
      },
      worksheetId: 'k-science-day-2',
    },
    {
      id: 'k-d2-b5',
      category: BLOCK_CATEGORIES.SOCIAL_STUDIES,
      timeSlot: '10:50 AM – 11:20 AM',
      durationMinutes: 30,
      title: 'Social Studies Circle: Why We Have Rules (Keeping Us Safe)',
      standard: 'Core Knowledge CKHG Kindergarten Unit 1 Lesson 2 • C3 Framework D2.Civ.3.K-2',
      materials: ['Paper plate or circle card with Red on one side, Green on other', 'Crayons'],
      handsOnActivity: {
        title: 'Red Light, Green Light & Safe Rules Game',
        steps: [
          'Hold up the Green side: child takes walking steps. Hold up Red side: child freezes!',
          'Ask: "Why do cars stop at a red light? What would happen if there were no traffic rules?" (Cars would crash; rules keep us safe!).',
          'Discuss our home and school rules: Walking feet indoors, listening ears when someone is speaking, taking turns with toys.',
          'Praise your child: "Rules are not to be bossy—rules are to keep our bodies safe and our hearts happy!"',
        ],
      },
      script: {
        sayThis:
          '“Why do we have rules in our classroom and family? Imagine if everyone shouted at once! No one could hear! Rules are friendly promises that protect our safety and keep us smiling together.”',
        whatToDo: 'Ask your child to demonstrate "Walking Feet" vs. "Running Feet" and "Listening Ears".',
        whatToLookFor: 'Child articulates that rules prevent accidents and help everyone have a turn.',
      },
      worksheetId: 'k-social-day-2',
    },
    {
      id: 'k-d2-b6',
      category: BLOCK_CATEGORIES.FIELD_TRIP_IMMERSION,
      timeSlot: '11:20 AM – 12:15 PM',
      durationMinutes: 55,
      title: 'Experiential Immersion: The Loud & Quiet Sound Hunt',
      standard: 'Cross-Disciplinary Real-World Auditory & Rule Immersion',
      materials: ['Small clipboard or notebook', 'Pencil or crayon', 'Walking shoes', 'Water bottle'],
      handsOnActivity: {
        title: 'Neighborhood Sound Audit & Spot the Difference Walk',
        steps: [
          'Step outside for a focused sound-and-rule walk through the neighborhood or nearby park.',
          'Stop at the curb: practice the pedestrian safety rule ("Stop, look left, look right, look left again!").',
          'Conduct a 60-second acoustic audit: count how many loud sounds vs. quiet sounds you hear.',
          'Search for an "odd-one-out" along the street (e.g. 3 brick houses + 1 blue house; 3 green trees + 1 red tree).',
        ],
      },
      script: {
        sayThis:
          '“Put on your sound detective ears! As we walk, we are going to hunt for 2 loud sounds and 2 quiet sounds. And remember our walking rule: Stop at every curb!”',
        whatToDo: 'Walk at a gentle pace. Whenever a car drives by or a bird sings, pause and ask: "Was that loud or soft?"',
        whatToLookFor: 'Child demonstrates curb safety awareness and identifies ambient sounds accurately.',
      },
      worksheetId: null,
    },
    {
      id: 'k-d2-b7',
      category: BLOCK_CATEGORIES.REFLECTION_MASTERY,
      timeSlot: '12:15 PM – 12:30 PM',
      durationMinutes: 15,
      title: 'Daily Wrap-Up: Day 2 Star Mastery & Refrigerator Showcase',
      standard: 'Metacognitive Reflection & Daily Celebration',
      materials: ['Gold or yellow crayon', 'Refrigerator magnet'],
      handsOnActivity: {
        title: 'Reviewing Day 2 Milestones & Coloring Stars',
        steps: [
          'Stack today’s 4 completed worksheets alongside yesterday’s Day 1 worksheets.',
          'Celebrate: "Look how much you learned: yesterday you made raindrops, and today you drove racecars across the page!"',
          'Color in the 3 reward stars at the top header of each sheet.',
          'Place Day 2’s favorite worksheet proudly on the refrigerator gallery next to Day 1!',
        ],
      },
      script: {
        sayThis:
          '“Day 2 Champion! You mastered the Odd-One-Out, drove your racecar straight across the track, listened like an elephant, and followed our safety rules! Let’s color your 3 golden stars!”',
        whatToDo: 'Offer specific praise for stamina and focus during the left-to-right line tracing.',
        whatToLookFor: 'Pride in seeing Day 1 and Day 2 hanging side-by-side on the refrigerator.',
      },
      worksheetId: null,
    },
  ],

  // =========================================================================
  // 2. FIELD TRIP & REAL-WORLD EXPERIENTIAL REINFORCEMENT GUIDE
  // =========================================================================
  fieldTrip: {
    title: 'The Loud & Quiet Sound Hunt + Spot the Difference Walk',
    duration: '45–60 Minutes',
    location: 'Neighborhood Sidewalk, Local Park, or Community Green',
    learningConnection:
      'Directly connects Morning Math (finding visual differences), Phonics/Science (auditory discrimination of loud vs. soft sounds), and Social Studies (practicing street and pedestrian safety rules).',
    materials: ['Walking shoes', 'Small notepad & crayon', 'Water bottle'],
    outdoorMission: {
      headline: 'Outdoor Sound & Rule Detective Quest',
      description:
        'Walk through your neighborhood or park with your child. Focus on acoustic awareness and pedestrian safety rules.',
      scavengerChecklist: [
        'Practice the curb safety rule: Stop at the sidewalk edge, look left, right, and left again',
        'Spot 1 LOUD sound in the neighborhood (e.g. barking dog, garbage truck, lawnmower, car engine)',
        'Spot 1 QUIET sound in the neighborhood (e.g. breeze rustling dry leaves, distant bird chirping, footsteps)',
        'Find an "Odd-One-Out" house, car, or tree along the street (e.g. 3 white cars + 1 red car)',
        'Cup your hands behind your ears like big sound dishes and listen for 30 seconds',
        'Find a pedestrian crosswalk sign or stop sign and explain what rule it tells us',
      ],
    },
    indoorAlternative: {
      headline: 'Rainy Day / Kitchen Cupboard Sound & Mystery Sort',
      description:
        'If raining, conduct an acoustic and rule investigation throughout the home and kitchen.',
      scavengerChecklist: [
        'Compare 2 kitchen sounds: gently tap a spoon on wood (soft) vs. tap on a metal lid (loud)',
        'Spot the "Odd-One-Out" in the pantry: line up 3 soup cans and 1 box of crackers',
        'Practice a home safety rule: walk with gentle walking feet down the hallway',
        'Listen to the refrigerator motor hum: is it loud or quiet?',
        'Whisper a secret rule to your parent: "In our home, we share our toys!"',
      ],
    },
    conversationPrompts: [
      {
        question: '“Listen right now! Is that sound loud or quiet? Is it coming from up in the sky or down on the ground?”',
        talkingPoints:
          'Helps children localize sounds and categorize acoustic volume—a direct precursor to isolating subtle phonemes in speech.',
      },
      {
        question: '“Look at those 4 parked cars: three are silver sedans, and one is a big red pickup truck. What makes that one different?”',
        talkingPoints:
          'Encourages comparative language: color, size, and vehicle type. Cements Eureka Math Module 1 Lesson 2 classification.',
      },
      {
        question: '“Why do we stop at the curb before crossing the street? What would happen if nobody followed traffic rules?”',
        talkingPoints:
          'Connects rules to community care and personal safety. Demonstrates that rules exist to protect everyone.',
      },
    ],
  },

  // =========================================================================
  // 3. MATCHING PRINTABLE WORKSHEET DEFINITIONS (Math, Phonics, Science, Social)
  // =========================================================================
  sheets: {
    math: {
      id: 'k-math-day-2',
      day: 2,
      subject: 'math',
      title: 'Math Day 2: Classify & Sort — Finding the One That Is Different',
      framework: 'CCSS.MATH.CONTENT.K.MD.B.3 • Eureka Math K Module 1 Lesson 2',
      instructions: 'Look closely at each row. Circle the ONE picture that is DIFFERENT from the others!',
      strictBoundary: 'Classify by visual difference (color, category, size). Do not introduce counting sets or addition equations today.',
      parentGuide: {
        standard: 'CCSS.MATH.CONTENT.K.MD.B.3 (Classify objects and count the number of objects in each category)',
        whyWeAreDoingThis:
          'Yesterday, we matched identical twins. Today, children learn to contrast attributes. Recognizing what is *different* develops mathematical categorization and critical reasoning.',
        verbalCue: '“Look at Row 1: Apple, Apple, Banana, Apple! Which friend is different? Why does the banana not match?”',
        whatToWatchFor:
          'Encourage your child to verbally name the attribute that makes the item different (e.g. "It’s yellow, not red!" or "It flies, but cars drive!").',
      },
      kidDirections: {
        badge: 'Spot the Difference Mission',
        text: 'Look at each row like a detective! Circle the one friend that is DIFFERENT!',
        icons: ['🔍', '⭕', '🧐'],
      },
      problems: [
        {
          id: 'm2-row1',
          label: 'Row 1: Fruit Basket',
          caption: 'Find the different fruit: 🍎 🍎 🍌 🍎',
          emoji: '🍎 🍎 🍌 🍎',
          isHelperAction: false,
        },
        {
          id: 'm2-row2',
          label: 'Row 2: Vehicle Garage',
          caption: 'Find the different vehicle: 🚗 🚗 🚗 ✈️',
          emoji: '🚗 🚗 🚗 ✈️',
          isHelperAction: false,
        },
        {
          id: 'm2-row3',
          label: 'Row 3: Friendly Animals',
          caption: 'Find the different animal: 🐶 🐶 🐱 🐶',
          emoji: '🐶 🐶 🐱 🐶',
          isHelperAction: false,
        },
        {
          id: 'm2-row4',
          label: 'Row 4: Weather Sky',
          caption: 'Find the different sky icon: ☀️ ☀️ 🌧️ ☀️',
          emoji: '☀️ ☀️ 🌧️ ☀️',
          isHelperAction: false,
        },
      ],
      answerKey: [
        'Row 1: Circle Banana 🍌 (banana vs. 3 apples)',
        'Row 2: Circle Airplane ✈️ (airplane flies in sky vs. 3 cars on road)',
        'Row 3: Circle Cat 🐱 (cat vs. 3 puppies)',
        'Row 4: Circle Rain Cloud 🌧️ (rain vs. 3 smiling suns)',
      ],
    },

    phonics: {
      id: 'k-phonics-day-2',
      day: 2,
      subject: 'phonics',
      title: 'Phonics Day 2: Left-to-Right Horizontal Strokes (The Racecar Track)',
      framework: 'CCSS.ELA-LITERACY.RF.K.1.D • CKLA Skills Unit 1 Lesson 2',
      instructions: 'Put your pencil on the green star on the left. Zoom your pencil straight across from LEFT to RIGHT to the checkered flag!',
      strictBoundary: 'Horizontal prewriting strokes along the midline. Left-to-right tracking only. No formal letter spelling today.',
      parentGuide: {
        standard: 'CCSS.ELA-LITERACY.RF.K.1.D (Left-to-Right & Top-to-Bottom Directionality)',
        whyWeAreDoingThis:
          'English text is read and written strictly from left to right. Training the ocular and fine-motor muscles to track effortlessly from left to right prevents letter reversals and establishes fluid reading habits.',
        verbalCue: '“Start at the green star on the left! Zoom straight across to the checkered flag on the right: ‘Zoom across the track, don’t turn back!’”',
        whatToWatchFor:
          'Ensure your child starts on the LEFT and moves toward the RIGHT. If they start on the right and push left, gently reposition their pencil at the green star.',
      },
      kidDirections: {
        badge: 'Racecar Track Mission',
        text: 'Put your pencil on the green star on the left. Zoom straight across to the checkered flag on the right!',
        icons: ['🏎️', '✏️', '🏁'],
      },
      problems: [
        {
          id: 'p2-1',
          prompt: 'Track 1: Start at green star on the left, zoom across to checkered flag',
          startDot: 'midline',
          topIcon: '🏎️ 🟢',
          bottomIcon: '🏁',
        },
        {
          id: 'p2-2',
          prompt: 'Track 2: Start at green star on the left, zoom across to checkered flag',
          startDot: 'midline',
          topIcon: '🚀 🟢',
          bottomIcon: '🪐',
        },
        {
          id: 'p2-3',
          prompt: 'Track 3: Start at green star on the left, zoom across to checkered flag',
          startDot: 'midline',
          topIcon: '🚂 🟢',
          bottomIcon: '🚉',
        },
        {
          id: 'p2-4',
          prompt: 'Track 4: Start at green star on the left, zoom across to checkered flag',
          startDot: 'midline',
          topIcon: '🚲 🟢',
          bottomIcon: '🏠',
        },
      ],
      answerKey: ['4 straight horizontal lines drawn smoothly from left green stars to right destination targets along the dashed midline.'],
    },

    science: {
      id: 'k-science-day-2',
      day: 2,
      subject: 'science',
      title: 'Science Day 2: Our Sense of Hearing — Loud vs. Soft Sounds',
      framework: 'NGSS K-PS3-1 • Auditory Perception & Sound Waves',
      instructions: 'Which sounds are LOUD and which are SOFT? Circle the LOUD sounds in RED. Circle the gentle, SOFT sounds in BLUE!',
      strictBoundary: 'Classifying everyday sounds into loud vs. soft. No decibel calculations or complex acoustic physics.',
      parentGuide: {
        standard: 'NGSS K-PS3-1 / Scientific Sensory Investigation',
        whyWeAreDoingThis:
          'Hearing is the primary sense for language acquisition and environmental awareness. Categorizing loud vs. soft sounds sharpens auditory discrimination, preparing the brain to distinguish subtle speech sounds (phonemes).',
        verbalCue: '“Does a booming drum make a BIG LOUD sound? Yes! Circle it in Red! What about a whispering secret? It’s quiet and soft! Circle it in Blue!”',
        whatToWatchFor:
          'Ask your child to demonstrate the sound with their voice: can they make a loud drum beat and a soft mouse whisper?',
      },
      kidDirections: {
        badge: 'Sound Super Sleuth',
        text: 'Circle the BIG LOUD sounds in Red! Circle the gentle, quiet sounds in Blue!',
        icons: ['👂', '🥁', '🤫'],
      },
      matchingData: {
        leftColumn: [
          { id: 'snd-1', label: 'Booming Drum Beat', emoji: '🥁', matchId: 'vol-1' },
          { id: 'snd-2', label: 'Whispering a Secret', emoji: '🤫', matchId: 'vol-2' },
          { id: 'snd-3', label: 'Crashing Thunderstorm', emoji: '⚡', matchId: 'vol-1' },
          { id: 'snd-4', label: 'Sleeping Kitten Purr', emoji: '🐱', matchId: 'vol-2' },
        ],
        rightColumn: [
          { id: 'vol-2', label: 'SOFT & Quiet Sound (Circle in Blue)', emoji: '🔵', matchId: 'vol-2' },
          { id: 'vol-1', label: 'LOUD & Booming Sound (Circle in Red)', emoji: '🔴', matchId: 'vol-1' },
        ],
      },
      answerKey: [
        'LOUD Sounds (Red): Booming Drum 🥁, Crashing Thunder ⚡',
        'SOFT Sounds (Blue): Whispering Secret 🤫, Sleeping Kitten Purr 🐱',
      ],
    },

    socialStudies: {
      id: 'k-social-day-2',
      day: 2,
      subject: 'socialStudies',
      title: 'Social Studies Day 2: School & Family Rules — Keeping Us Safe and Happy',
      framework: 'Core Knowledge CKHG K Unit 1 Lesson 2 • C3 Framework D2.Civ.3.K-2',
      instructions: 'Look at each friendly rule! Circle the pictures that show a SAFE and KIND choice!',
      strictBoundary: 'Focus on safety rules (walking feet, taking turns, listening). No complex legal systems.',
      parentGuide: {
        standard: 'C3 Framework D2.Civ.3.K-2 (Apply civic virtues in school and classroom settings)',
        whyWeAreDoingThis:
          'Children thrive when they understand that rules are not arbitrary restrictions, but protective agreements that keep our bodies safe and ensure fair play for all friends.',
        verbalCue: '“Look at these choices: Is using walking feet in the hallway a safe choice? Yes! Let’s circle the safe and kind choice!”',
        whatToWatchFor:
          'Child articulates why a rule exists (e.g. "We walk so we don’t slip and fall!").',
      },
      kidDirections: {
        badge: 'Safety Star Mission',
        text: 'Circle the SAFE and KIND choices! Color the happy badge!',
        icons: ['🚦', '👟', '🤝'],
      },
      problems: [
        {
          id: 'ss2-1',
          label: 'Using calm walking feet inside the classroom and home',
          emoji: '👟 🚶',
          isHelperAction: true,
          caption: 'Calm walking feet inside',
        },
        {
          id: 'ss2-2',
          label: 'Listening with quiet ears when a teacher or friend speaks',
          emoji: '👂 📖',
          isHelperAction: true,
          caption: 'Listening ears during storytime',
        },
        {
          id: 'ss2-3',
          label: 'Running with open scissors in hand',
          emoji: '✂️ ⚠️',
          isHelperAction: false,
          caption: 'Running with scissors (Unsafe!)',
        },
        {
          id: 'ss2-4',
          label: 'Taking turns on the playground slide and swings',
          emoji: '🛝 🤝',
          isHelperAction: true,
          caption: 'Taking turns on the slide',
        },
      ],
      answerKey: [
        'Circle: Walking feet 👟, Listening ears 👂, and Taking turns 🛝.',
        'Do not circle: Running with scissors ✂️ (Unsafe).',
      ],
    },
  },
};
