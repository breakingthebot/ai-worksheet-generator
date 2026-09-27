// src/domain/curriculum/kindergarten/kindergartenMasterSchedule.js
// Authentic Kindergarten Master Curriculum (Days 1–10)
// Built directly from Eureka Math Module 1, Core Knowledge CKLA Skills & Knowledge, NGSS K, and CKHG K.
// Features: Word-for-word parent scripts, visual scaffolds (3-line rulings, 5-frames, cut strips, Elkonin boxes).
// Created: 2026-09-27

export const KINDERGARTEN_MASTER_DAYS = {
  1: {
    day: 1,
    theme: "Orientation & Visual Discrimination",
    math: {
      id: "k-math-day-1",
      day: 1,
      subject: "math",
      title: "Visual Discrimination: Exactly the Same",
      framework: "CCSS.MATH.CONTENT.K.MD.B.3 / Eureka Math K Module 1 Lesson 1",
      scaffoldType: "matching-pairs",
      instructions: "Draw a straight line to connect the two pictures that are EXACTLY the same.",
      strictBoundary: "Focus strictly on finding identical pairs. Do not introduce numbers, counting, or addition today.",
      parentGuide: {
        objective: "Child identifies two objects that are exactly identical in shape, color, and size.",
        sayThis: "Look at these pictures! Some are twins because they are exactly the same. Point to this mitten. Can you find its matching twin?",
        whatToDo: "Have child trace their index finger from the left mitten across to the matching right mitten before drawing a pencil line.",
        whatToLookFor: "Check that child compares details like stripes or patterns. Encourage holding the pencil with a tripod pinch."
      },
      kidDirections: {
        badge: "Twin Detective Mission",
        text: "Use your magic pencil to connect each picture to its exact matching twin!",
        icons: ["👁️", "✏️", "🧤"]
      },
      items: [
        {
          id: "m1-item1",
          left: { label: "Striped Mitten", emoji: "🧤" },
          rightMatches: [
            { id: "r1", label: "Striped Mitten", emoji: "🧤", isCorrect: true },
            { id: "r2", label: "Warm Boot", emoji: "🥾", isCorrect: false },
            { id: "r3", label: "Winter Hat", emoji: "🧢", isCorrect: false }
          ]
        },
        {
          id: "m1-item2",
          left: { label: "Red Apple", emoji: "🍎" },
          rightMatches: [
            { id: "r4", label: "Yellow Banana", emoji: "🍌", isCorrect: false },
            { id: "r5", label: "Red Apple", emoji: "🍎", isCorrect: true },
            { id: "r6", label: "Green Pear", emoji: "🍐", isCorrect: false }
          ]
        },
        {
          id: "m1-item3",
          left: { label: "Smiling Sun", emoji: "☀️" },
          rightMatches: [
            { id: "r7", label: "Rain Cloud", emoji: "🌧️", isCorrect: false },
            { id: "r8", label: "Night Moon", emoji: "🌙", isCorrect: false },
            { id: "r9", label: "Smiling Sun", emoji: "☀️", isCorrect: true }
          ]
        }
      ],
      answerKey: ["Mitten connects to Mitten", "Apple connects to Apple", "Sun connects to Sun"]
    },
    phonics: {
      id: "k-phonics-day-1",
      day: 1,
      subject: "phonics",
      title: "Environmental Sounds & Prewriting Strokes (Top to Bottom)",
      framework: "CCSS.ELA-LITERACY.RF.K.1.D / Core Knowledge CKLA Skills Unit 1 Lesson 1",
      scaffoldType: "primary-three-line",
      instructions: "Start at the green star at the top headline. Pull your pencil straight down to the baseline!",
      strictBoundary: "Prewriting vertical strokes only. Do not teach letter names or spelling today.",
      parentGuide: {
        objective: "Child demonstrates left-to-right tracking, top-to-bottom stroke direction, and tripod pencil grip.",
        sayThis: "Close your eyes. What sounds do you hear around the room? Now let's pretend rain is falling straight down from the cloud to the flower: 'Rain falls down, touch the ground!'",
        whatToDo: "Guide child's hand: place pencil point on the green starter dot at the top headline, pull straight down to the baseline.",
        whatToLookFor: "Ensure child pulls down from top to bottom, not bottom to top. Check that the other hand stabilizes the paper."
      },
      kidDirections: {
        badge: "Raindrop Drawing Mission",
        text: "Start at the green star. Pull your pencil straight down like raindrops falling from the sky!",
        icons: ["🌧️", "✏️", "🌸"]
      },
      items: [
        {
          id: "p1-line1",
          starterDot: "headline",
          prompt: "Raindrop 1: Top headline to baseline",
          visual: "🌧️ ──> 🌸"
        },
        {
          id: "p1-line2",
          starterDot: "headline",
          prompt: "Raindrop 2: Top headline to baseline",
          visual: "🌧️ ──> 🌻"
        },
        {
          id: "p1-line3",
          starterDot: "headline",
          prompt: "Raindrop 3: Top headline to baseline",
          visual: "🌧️ ──> 🌷"
        }
      ],
      answerKey: ["3 straight vertical downward lines drawn from top headline to bottom baseline"]
    },
    science: {
      id: "k-science-day-1",
      day: 1,
      subject: "science",
      title: "The 5 Senses: Our Amazing Sense of Sight",
      framework: "NGSS K-PS3-1 / Core Knowledge CKLA Knowledge Unit 2 Lesson 1",
      scaffoldType: "sensory-observation",
      instructions: "Circle the things you observe using your eyes and sense of sight.",
      strictBoundary: "Focus exclusively on sight (eyes). Do not introduce abstract light physics or waves.",
      parentGuide: {
        objective: "Child identifies eyes as the body organ for sight and uses sight to observe colors and shapes.",
        sayThis: "Cover your eyes with your hands. What do you see? Nothing! It is dark! Now open your eyes. Your eyes are your super cameras! What bright colors can you see around us?",
        whatToDo: "Point to objects of different colors in the room. Mention the eye safety rule: never look directly at the bright Sun.",
        whatToLookFor: "Child accurately connects the eyes to sight and identifies observable visual attributes like colors and shapes."
      },
      kidDirections: {
        badge: "Super Eye Detective",
        text: "Circle all the beautiful things you can see with your amazing eyes! Put an ✕ on the bright Sun (never look at the Sun!).",
        icons: ["👀", "🌈", "⭕"]
      },
      items: [
        { id: "s1-item1", label: "Colorful Rainbow", emoji: "🌈", isSight: true },
        { id: "s1-item2", label: "Storybook Pictures", emoji: "📖", isSight: true },
        { id: "s1-item3", label: "Bright Red Strawberry", emoji: "🍓", isSight: true },
        { id: "s1-item4", label: "A Bell Ringing", emoji: "🔔", isSight: false, note: "We hear bells with ears" }
      ],
      answerKey: ["Circle Rainbow, Storybook, and Strawberry. Bell is heard with ears."]
    },
    socialStudies: {
      id: "k-social-day-1",
      day: 1,
      subject: "socialStudies",
      title: "All About Me: I Am Unique & Special",
      framework: "Core Knowledge CKHG Kindergarten Unit 1 Lesson 1 / C3 Framework D2.Civ.1.K-2",
      scaffoldType: "self-portrait",
      instructions: "Draw a wonderful picture of yourself in the frame! Tell an adult your favorite thing to do.",
      strictBoundary: "Focus on personal identity and feelings. No complex history dates.",
      parentGuide: {
        objective: "Child communicates their own name, recognizes personal strengths, and understands that every person is special.",
        sayThis: "Look in the mirror! Look at your wonderful smile and eyes! There is nobody else in the whole wide world exactly like you. You are one of a kind and very special!",
        whatToDo: "Ask child: 'What is your favorite color? What do you love to play?' Write their words under their self-portrait.",
        whatToLookFor: "Encourage drawing a head, eyes, smile, and body. Celebrate effort and self-expression."
      },
      kidDirections: {
        badge: "Star Student Portrait",
        text: "Draw your best self-portrait inside the superstar frame! Color your hair and favorite clothes!",
        icons: ["⭐", "🖍️", "😊"]
      },
      items: [
        { id: "ss1-frame", prompt: "Draw yourself here:", placeholder: "Superstar Self-Portrait Box" }
      ],
      answerKey: ["Child completes self-portrait and shares name and favorite activity with adult."]
    }
  },
  2: {
    day: 2,
    theme: "Visual Differences, Horizontal Lines & Hearing",
    math: {
      id: "k-math-day-2",
      day: 2,
      subject: "math",
      title: "Visual Discrimination: Similar but Different",
      framework: "CCSS.MATH.CONTENT.K.MD.B.3 / Eureka Math K Module 1 Lesson 2",
      scaffoldType: "odd-one-out",
      instructions: "In each row, find the object that is DIFFERENT and circle it. Tell an adult why it does not match.",
      strictBoundary: "Classifying by visual difference. No numerical comparison yet.",
      parentGuide: {
        objective: "Child analyzes visual attributes (color, type, orientation) to identify the one that is different.",
        sayThis: "Look at these four objects. Three of them are good friends that match, but one is different! Can you find the odd one out and tell me why?",
        whatToDo: "Prompt child to use full sentences: 'This one is different because it is blue, and the others are red.'",
        whatToLookFor: "Listen for attribute vocabulary: bigger, smaller, different color, different shape."
      },
      kidDirections: {
        badge: "Spot the Difference Mission",
        text: "Look closely at each row. Circle the one picture that is DIFFERENT from the others!",
        icons: ["🔍", "⭕", "🧐"]
      },
      items: [
        {
          id: "m2-row1",
          prompt: "Row 1: Find the different fruit",
          options: [
            { id: "o1", label: "Red Apple", emoji: "🍎", isDifferent: false },
            { id: "o2", label: "Red Apple", emoji: "🍎", isDifferent: false },
            { id: "o3", label: "Yellow Banana", emoji: "🍌", isDifferent: true },
            { id: "o4", label: "Red Apple", emoji: "🍎", isDifferent: false }
          ]
        },
        {
          id: "m2-row2",
          prompt: "Row 2: Find the different vehicle",
          options: [
            { id: "o5", label: "Red Car", emoji: "🚗", isDifferent: false },
            { id: "o6", label: "Yellow Airplane", emoji: "✈️", isDifferent: true },
            { id: "o7", label: "Red Car", emoji: "🚗", isDifferent: false },
            { id: "o8", label: "Red Car", emoji: "🚗", isDifferent: false }
          ]
        }
      ],
      answerKey: ["Row 1: Banana is different (banana vs apples)", "Row 2: Airplane is different (flies in air vs cars on road)"]
    },
    phonics: {
      id: "k-phonics-day-2",
      day: 2,
      subject: "phonics",
      title: "Loud vs. Soft Sounds & Horizontal Strokes (Left to Right)",
      framework: "CCSS.ELA-LITERACY.RF.K.1.D / Core Knowledge CKLA Skills Unit 1 Lesson 2",
      scaffoldType: "primary-three-line",
      instructions: "Start at the green dot on the left. Slide your pencil straight across from left to right along the dashed midline!",
      strictBoundary: "Horizontal prewriting stroke practice. Left-to-right directionality.",
      parentGuide: {
        objective: "Child demonstrates left-to-right stroke formation along the dashed midline.",
        sayThis: "Let's listen! Can you roar like a LOUD lion? (ROAR!) Now can you whisper like a SOFT little mouse? (squeak). Now let's drive our pencil car across the street from left to right!",
        whatToDo: "Point to the left green dot. Remind child: in reading and writing, we always move from the left side of the page to the right side.",
        whatToLookFor: "Check that child does not push from right to left. Stroke should be smooth and straight."
      },
      kidDirections: {
        badge: "Racecar Track Mission",
        text: "Put your pencil on the green star on the left. Zoom your pencil straight across to the checkered flag on the right!",
        icons: ["🏎️", "✏️", "🏁"]
      },
      items: [
        {
          id: "p2-line1",
          starterDot: "midline",
          prompt: "Track 1: Left to right slide",
          visual: "🟢 ──────> 🏁"
        },
        {
          id: "p2-line2",
          starterDot: "midline",
          prompt: "Track 2: Left to right slide",
          visual: "🟢 ──────> 🏁"
        },
        {
          id: "p2-line3",
          starterDot: "midline",
          prompt: "Track 3: Left to right slide",
          visual: "🟢 ──────> 🏁"
        }
      ],
      answerKey: ["3 straight horizontal lines drawn left to right across the dashed midline"]
    },
    science: {
      id: "k-science-day-2",
      day: 2,
      subject: "science",
      title: "The 5 Senses: Our Wonderful Sense of Hearing",
      framework: "NGSS K-PS3-1 / Core Knowledge CKLA Knowledge Unit 2 Lesson 2",
      scaffoldType: "sound-sorting",
      instructions: "Circle the loud sounds in RED. Circle the quiet, soft sounds in BLUE!",
      strictBoundary: "Auditory exploration of loud vs. soft sounds. No decibel math.",
      parentGuide: {
        objective: "Child identifies ears as organ of hearing and distinguishes between loud and soft sounds.",
        sayThis: "Cup your hands behind your ears. Does that make sounds louder? Your ears catch sound waves floating through the air like invisible cups! Let's listen closely!",
        whatToDo: "Tap gently on the table (soft sound), then clap hands firmly (loud sound). Ask child to name other loud and quiet sounds.",
        whatToLookFor: "Child correctly distinguishes loud sounds (thunder, drums) from soft sounds (whispers, ticking clock)."
      },
      kidDirections: {
        badge: "Sound Super Sleuth",
        text: "Circle the BIG LOUD sounds in Red! Circle the tiny quiet sounds in Blue!",
        icons: ["👂", "🥁", "🤫"]
      },
      items: [
        { id: "s2-item1", label: "Loud Drum", emoji: "🥁", soundType: "loud" },
        { id: "s2-item2", label: "Whispering Secret", emoji: "🤫", soundType: "soft" },
        { id: "s2-item3", label: "Booming Thunder", emoji: "⚡", soundType: "loud" },
        { id: "s2-item4", label: "Sleeping Kitten Purr", emoji: "🐱", soundType: "soft" }
      ],
      answerKey: ["Loud in Red: Drum, Thunder. Soft in Blue: Whispering, Kitten purr."]
    },
    socialStudies: {
      id: "k-social-day-2",
      day: 2,
      subject: "socialStudies",
      title: "Classroom & Home Rules: Keeping Us Safe and Happy",
      framework: "Core Knowledge CKHG Kindergarten Unit 1 Lesson 2 / C3 Framework D2.Civ.3.K-2",
      scaffoldType: "rule-matching",
      instructions: "Circle the pictures that show good rules that keep us safe and happy!",
      strictBoundary: "Basic safety and community rules. No complex legal terms.",
      parentGuide: {
        objective: "Child understands that rules exist to protect everyone, keep people safe, and make learning fun.",
        sayThis: "Why do we use walking feet inside instead of running? To keep from tripping and getting hurt! Rules are like helper shields that keep our family and friends safe.",
        whatToDo: "Review 3 golden rules: 1. Listening ears when others speak. 2. Gentle hands. 3. Walking feet.",
        whatToLookFor: "Child identifies safe behaviors (walking, listening, taking turns) vs unsafe behaviors."
      },
      kidDirections: {
        badge: "Safety Super Champion",
        text: "Circle the superstar friends who are following the safety rules!",
        icons: ["🛡️", "🚶", "👂"]
      },
      items: [
        { id: "ss2-item1", label: "Walking Feet Inside", emoji: "🚶", isGoodRule: true },
        { id: "ss2-item2", label: "Listening Ears to Teacher", emoji: "👂", isGoodRule: true },
        { id: "ss2-item3", label: "Running with Scissors", emoji: "✂️", isGoodRule: false, note: "Unsafe!" },
        { id: "ss2-item4", label: "Cleaning Up Toys", emoji: "🧸", isGoodRule: true }
      ],
      answerKey: ["Circle Walking Feet, Listening Ears, and Cleaning Up. Running with scissors is unsafe."]
    }
  },
  3: {
    day: 3,
    theme: "Sorting by Attribute, Slants & Rhymes",
    math: {
      id: "k-math-day-3",
      day: 3,
      subject: "math",
      title: "Classify & Sort by One Attribute (Color & Size)",
      framework: "CCSS.MATH.CONTENT.K.MD.B.3 / Eureka Math K Module 1 Lesson 3",
      scaffoldType: "sorting-buckets",
      instructions: "Sort the buttons! Draw a line from each RED button to the Red Jar. Draw a line from each BLUE button to the Blue Jar.",
      strictBoundary: "Sorting by a single attribute (color). Do not sort by multiple attributes simultaneously.",
      parentGuide: {
        objective: "Child sorts a collection into two distinct groups based on one clear attribute (color).",
        sayThis: "Look at all these colorful buttons spilled on the floor! Let's help sort them so our sewing basket is tidy. Put all the red buttons in the red jar, and all the blue buttons in the blue jar!",
        whatToDo: "Give child real red and blue blocks or crayons to practice physical sorting first before doing pencil lines.",
        whatToLookFor: "Child focuses on the color and sorts without getting distracted by button shapes or sizes."
      },
      kidDirections: {
        badge: "Color Sorting Master",
        text: "Connect all the RED buttons to the Red Jar! Connect all the BLUE buttons to the Blue Jar!",
        icons: ["🔴", "🔵", "🫙"]
      },
      items: [
        { id: "b1", label: "Red Button", emoji: "🔴", targetJar: "red" },
        { id: "b2", label: "Blue Button", emoji: "🔵", targetJar: "blue" },
        { id: "b3", label: "Red Heart Button", emoji: "❤️", targetJar: "red" },
        { id: "b4", label: "Blue Circle Button", emoji: "🔷", targetJar: "blue" }
      ],
      answerKey: ["Red buttons to Red Jar, Blue buttons to Blue Jar."]
    },
    phonics: {
      id: "k-phonics-day-3",
      day: 3,
      subject: "phonics",
      title: "Rhyming Words & Slanted Strokes (Playground Slide)",
      framework: "CCSS.ELA-LITERACY.RF.K.2.A / Core Knowledge CKLA Skills Unit 1 Lesson 3",
      scaffoldType: "rhyme-match",
      instructions: "Draw a line between the two pictures that RHYME (sound the same at the end)!",
      strictBoundary: "Oral phonological rhyming. Do not ask child to spell the endings yet.",
      parentGuide: {
        objective: "Child identifies pairs of words that share the same rime/ending sound (cat - hat).",
        sayThis: "Listen to these words: 'c-at' and 'h-at'. They rhyme because their ends sound the exact same: -at! Does 'cat' rhyme with 'dog'? No way! But 'cat' rhymes with 'hat'!",
        whatToDo: "Say word pairs aloud with emphasis on the ending: 'f-ox ... b-ox! Do they rhyme?' Yes!",
        whatToLookFor: "Child listens to the auditory ending rather than semantic association (e.g. dog and cat do not rhyme even though both are pets)."
      },
      kidDirections: {
        badge: "Rhyme Time Detective",
        text: "Say each word out loud. Draw a line between the twin rhyming words!",
        icons: ["🐱", "🎩", "🎵"]
      },
      items: [
        {
          left: { label: "Cat", emoji: "🐱" },
          rightMatches: [
            { label: "Hat", emoji: "🎩", isRhyme: true },
            { label: "Sun", emoji: "☀️", isRhyme: false }
          ]
        },
        {
          left: { label: "Dog", emoji: "🐶" },
          rightMatches: [
            { label: "Frog", emoji: "🐸", isRhyme: true },
            { label: "Car", emoji: "🚗", isRhyme: false }
          ]
        },
        {
          left: { label: "Star", emoji: "⭐" },
          rightMatches: [
            { label: "Car", emoji: "🚗", isRhyme: true },
            { label: "Pig", emoji: "🐷", isRhyme: false }
          ]
        }
      ],
      answerKey: ["Cat rhymes with Hat", "Dog rhymes with Frog", "Star rhymes with Car"]
    },
    science: {
      id: "k-science-day-3",
      day: 3,
      subject: "science",
      title: "The 5 Senses: Our Sensitive Sense of Touch",
      framework: "NGSS K-PS3-1 / Core Knowledge CKLA Knowledge Unit 2 Lesson 3",
      scaffoldType: "texture-sorting",
      instructions: "Draw lines to match each object to how it feels: Soft or Rough!",
      strictBoundary: "Tactile texture identification. No thermal temperature equations.",
      parentGuide: {
        objective: "Child identifies skin/hands as organ of touch and classifies textures (soft, rough, smooth, hard).",
        sayThis: "Touch your cheek. It feels soft and smooth! Now touch the tree bark outside or a piece of sandpaper. It feels rough and scratchy! Our skin tells our brain how things feel.",
        whatToDo: "Have child feel a cotton ball (soft) and a rough pinecone or sandpaper.",
        whatToLookFor: "Child uses descriptive adjectives: bumpy, soft, scratchy, smooth, fuzzy."
      },
      kidDirections: {
        badge: "Touch & Texture Explorer",
        text: "Connect the fluffy SOFT things to the Soft Pillow! Connect the scratchy ROUGH things to the Rough Sandpaper!",
        icons: ["🖐️", "☁️", "🧱"]
      },
      items: [
        { id: "t1", label: "Fluffy Bunny", emoji: "🐰", feel: "soft" },
        { id: "t2", label: "Rough Tree Bark", emoji: "🪵", feel: "rough" },
        { id: "t3", label: "Cotton Ball", emoji: "☁️", feel: "soft" },
        { id: "t4", label: "Bumpy Pinecone", emoji: "🌲", feel: "rough" }
      ],
      answerKey: ["Bunny and Cotton Ball are Soft; Tree Bark and Pinecone are Rough."]
    },
    socialStudies: {
      id: "k-social-day-3",
      day: 3,
      subject: "socialStudies",
      title: "Kindness, Sharing & Taking Turns",
      framework: "Core Knowledge CKHG Kindergarten Unit 1 Lesson 3 / C3 Framework D2.Civ.6.K-2",
      scaffoldType: "kindness-badge",
      instructions: "Circle the pictures that show children being kind, sharing toys, and taking turns!",
      strictBoundary: "Interpersonal social skills and sharing. No advanced conflict theory.",
      parentGuide: {
        objective: "Child defines kindness and recognizes taking turns and sharing as essential friendship habits.",
        sayThis: "How does it feel when a friend shares a cool toy with you? It feels warm and happy! When we take turns on the swing or share our crayons, everyone gets to have fun.",
        whatToDo: "Practice polite language: 'May I please have a turn when you are finished?' and 'Thank you!'",
        whatToLookFor: "Child distinguishes sharing/cooperation from grabbing/excluding."
      },
      kidDirections: {
        badge: "Super Kindness Hero",
        text: "Circle all the kind friends who are sharing, taking turns, and smiling!",
        icons: ["🤝", "💖", "🧸"]
      },
      items: [
        { id: "ss3-item1", label: "Sharing Blocks Together", emoji: "🧱", isKind: true },
        { id: "ss3-item2", label: "Taking Turns on the Slide", emoji: "🛝", isKind: true },
        { id: "ss3-item3", label: "Grabbing a Toy from a Friend", emoji: "😡", isKind: false, note: "Grabbing hurts feelings" },
        { id: "ss3-item4", label: "Helping Pick Up Spilled Crayons", emoji: "🖍️", isKind: true }
      ],
      answerKey: ["Circle Sharing Blocks, Taking Turns on Slide, and Helping Pick Up Crayons."]
    }
  },
  4: {
    day: 4,
    theme: "Counting Small Sets, Circles & Taste/Smell",
    math: {
      id: "k-math-day-4",
      day: 4,
      subject: "math",
      title: "Count Small Groups: How Many? (Quantities 1 and 2)",
      framework: "CCSS.MATH.CONTENT.K.CC.B.4 / Eureka Math K Module 1 Lesson 4",
      scaffoldType: "touch-count",
      instructions: "Touch and count each item with your finger. How many are there: 1 or 2? Circle the correct number!",
      strictBoundary: "Quantities 1 and 2 only. One-to-one correspondence.",
      parentGuide: {
        objective: "Child demonstrates 1-to-1 correspondence for sets of 1 and 2 objects, understanding that the last number said tells 'how many'.",
        sayThis: "Put your finger on this picture. How many smiling suns do you see? Touch it and say: 'One!' Now touch the shoes: 'One... two!' There are two shoes!",
        whatToDo: "Guide child to touch each object with their index finger exactly once. Do not rush.",
        whatToLookFor: "Check that child does not double-count or skip items. Ensure they know the final number counted is the total."
      },
      kidDirections: {
        badge: "Finger Counting Detective",
        text: "Touch each picture with your finger and count aloud! Circle the magic number: 1 or 2?",
        icons: ["🖐️", "1️⃣", "2️⃣"]
      },
      items: [
        {
          id: "cnt1",
          label: "One Bright Sun",
          emojiGroup: ["☀️"],
          count: 1,
          options: [1, 2]
        },
        {
          id: "cnt2",
          label: "Two Little Puppies",
          emojiGroup: ["🐶", "🐶"],
          count: 2,
          options: [1, 2]
        },
        {
          id: "cnt3",
          label: "One Friendly Duck",
          emojiGroup: ["🦆"],
          count: 1,
          options: [1, 2]
        },
        {
          id: "cnt4",
          label: "Two Running Shoes",
          emojiGroup: ["👟", "👟"],
          count: 2,
          options: [1, 2]
        }
      ],
      answerKey: ["1 Sun, 2 Puppies, 1 Duck, 2 Shoes"]
    },
    phonics: {
      id: "k-phonics-day-4",
      day: 4,
      subject: "phonics",
      title: "Phonemic Awareness: Syllable Clapping & Circle Strokes",
      framework: "CCSS.ELA-LITERACY.RF.K.2.B / Core Knowledge CKLA Skills Unit 1 Lesson 4",
      scaffoldType: "primary-three-line",
      instructions: "Start at the 2 o'clock dot on the dashed midline. Curve up, around to the baseline, and close it back at the top!",
      strictBoundary: "Prewriting counterclockwise circles and oral syllable clapping. No letter-sound test yet.",
      parentGuide: {
        objective: "Child claps syllables in spoken words and practices counterclockwise circular strokes essential for letters a, c, d, g, o.",
        sayThis: "Words are made of beats called syllables! Let's clap our hands to hear the beats: 'cat' (1 clap!), 'sun-ny' (2 claps!), 'el-e-phant' (3 claps!). Now let's draw round bubbles starting at 2 o'clock and curving around!",
        whatToDo: "Say family names and clap the syllables together. When drawing circles, enforce counterclockwise direction.",
        whatToLookFor: "Ensure child curves to the left (counterclockwise), NOT to the right."
      },
      kidDirections: {
        badge: "Syllable Clapper & Bubble Drawer",
        text: "Clap the word beats with an adult! Then trace the round bubbles starting at the green dot!",
        icons: ["👏", "🫧", "✏️"]
      },
      items: [
        {
          id: "p4-circle1",
          starterDot: "midline",
          prompt: "Bubble 1: Counterclockwise circle",
          visual: "🟢 ↺ ◯"
        },
        {
          id: "p4-circle2",
          starterDot: "midline",
          prompt: "Bubble 2: Counterclockwise circle",
          visual: "🟢 ↺ ◯"
        },
        {
          id: "p4-circle3",
          starterDot: "midline",
          prompt: "Bubble 3: Counterclockwise circle",
          visual: "🟢 ↺ ◯"
        }
      ],
      answerKey: ["3 neat counterclockwise circles drawn between dashed midline and baseline"]
    },
    science: {
      id: "k-science-day-4",
      day: 4,
      subject: "science",
      title: "The 5 Senses: Our Senses of Smell and Taste",
      framework: "NGSS K-PS3-1 / Core Knowledge CKLA Knowledge Unit 2 Lesson 4",
      scaffoldType: "taste-smell",
      instructions: "Circle the things that smell sweet and delicious! Put an ✕ on the yucky trash that smells bad!",
      strictBoundary: "Taste and smell safety. Safety rule: NEVER taste unknown things without parent permission.",
      parentGuide: {
        objective: "Child identifies nose for smell and tongue for taste, and recalls essential taste safety rules.",
        sayThis: "Sniff the air with your nose! Does your nose know when cookies are baking? Yes! And your tongue has tiny taste buds for sweet, salty, and sour! What is the #1 science rule? NEVER put unknown things in your mouth without asking an adult first!",
        whatToDo: "Have child smell a lemon slice or cinnamon stick.",
        whatToLookFor: "Child articulates the safety rule that we never taste things unless an adult confirms it is safe food."
      },
      kidDirections: {
        badge: "Nose & Tongue Explorer",
        text: "Circle the sweet, yummy smells! Put an ✕ on the stinky smelly trash!",
        icons: ["👃", "👅", "🍪"]
      },
      items: [
        { id: "sm1", label: "Fresh Baked Cookies", emoji: "🍪", isPleasant: true },
        { id: "sm2", label: "Beautiful Red Rose", emoji: "🌹", isPleasant: true },
        { id: "sm3", label: "Stinky Garbage Can", emoji: "🗑️", isPleasant: false },
        { id: "sm4", label: "Juicy Orange Slice", emoji: "🍊", isPleasant: true }
      ],
      answerKey: ["Circle Cookies, Rose, and Orange. ✕ on Garbage Can."]
    },
    socialStudies: {
      id: "k-social-day-4",
      day: 4,
      subject: "socialStudies",
      title: "My Family: Helping and Caring at Home",
      framework: "Core Knowledge CKHG Kindergarten Unit 1 Lesson 4 / C3 Framework D2.Civ.2.K-2",
      scaffoldType: "family-helping",
      instructions: "Draw a line to match each child with the helpful job they do at home!",
      strictBoundary: "Family cooperation and helping at home. No economic labor laws.",
      parentGuide: {
        objective: "Child recognizes family roles, cooperation, and how members help and care for one another.",
        sayThis: "Families are a team! How do people in your family help each other? Mom and Dad make dinner, and you can help pick up toys or put away shoes. When everyone helps, our home is happy!",
        whatToDo: "Ask child: 'What is one helpful job you are big enough to do today?'",
        whatToLookFor: "Child identifies positive contributions they can make (putting toys in bin, wiping table)."
      },
      kidDirections: {
        badge: "Family Helper Star",
        text: "Connect each child to the helpful job they are doing for their family!",
        icons: ["🏠", "❤️", "🧹"]
      },
      items: [
        { id: "fh1", label: "Putting Toys Away in Toybox", emoji: "🧸", helperAction: "Tidy Bedroom" },
        { id: "fh2", label: "Feeding the Hungry Puppy", emoji: "🐕", helperAction: "Pet Care" },
        { id: "fh3", label: "Setting Napkins on the Dinner Table", emoji: "🍽️", helperAction: "Meal Helper" }
      ],
      answerKey: ["All matchings show positive family helpfulness."]
    }
  },
  5: {
    day: 5,
    theme: "The Number 1, Letter M & Community Helpers",
    math: {
      id: "k-math-day-5",
      day: 5,
      subject: "math",
      title: "The Number 1: 5-Frame & Numeral Writing",
      framework: "CCSS.MATH.CONTENT.K.CC.A.3 / Eureka Math K Module 1 Lesson 5",
      scaffoldType: "five-frame-and-trace",
      instructions: "Color 1 box in the 5-frame. Then trace and write the numeral 1 on the primary lines!",
      strictBoundary: "Numeral 1 only. Eureka Math 'math-way' finger counting starting with pinky finger.",
      parentGuide: {
        objective: "Child represents quantity 1 in a 5-frame, on fingers, and writes numeral 1 from top headline to baseline.",
        sayThis: "Look at our 5-frame box! Color just ONE box with your crayon. Now show me 1 finger the Math Way: pop up your pinky finger! Now let's write 1: 'Come straight down and that is all, come straight down to make a 1!'",
        whatToDo: "Watch child start numeral 1 at the top headline and pull straight down to the baseline.",
        whatToLookFor: "Make sure child stops right at the bottom baseline and does not curl or slant the line."
      },
      kidDirections: {
        badge: "Number 1 Champion",
        text: "Color ONE box in the 5-frame! Then trace and write the number 1 on the lines!",
        icons: ["1️⃣", "🖍️", "✏️"]
      },
      items: [
        {
          id: "m5-5frame",
          type: "five-frame",
          count: 1,
          totalBoxes: 5,
          counterType: "star"
        },
        {
          id: "m5-write",
          type: "primary-three-line",
          numeral: "1",
          chant: "Come straight down and that is all, to make a number 1 so tall!",
          traces: ["1", "1", "1"]
        }
      ],
      answerKey: ["1 box colored in 5-frame, numeral 1 written correctly on primary lines"]
    },
    phonics: {
      id: "k-phonics-day-5",
      day: 5,
      subject: "phonics",
      title: "Letter M and the /m/ Sound: Monkey Munching",
      framework: "CCSS.ELA-LITERACY.RF.K.1.D & RF.K.3.A / Core Knowledge CKLA Skills Unit 3 Lesson 1",
      scaffoldType: "letter-formation-and-sound",
      instructions: "Say /m/ like delicious food! Trace the letter M and color the pictures that start with /m/.",
      strictBoundary: "Sound /m/ and letter M m. Do not blend with vowels yet.",
      parentGuide: {
        objective: "Child articulates /m/ sound with lips pressed together and writes lowercase 'm' on primary guidelines.",
        sayThis: "Press your lips firmly together. Let's make the /m/ sound hum through your nose: 'Mmm-mmm, delicious!' What begins with /m/? Mmm-monkey! Mmm-mitten! Now trace 'm': 'Down, bounce up and over, bounce up and over!'",
        whatToDo: "Have child look in a mirror to verify lips are closed flat. Practice finger tracing 'm' in the air.",
        whatToLookFor: "Child starts at the dashed midline, pulls down, and bounces up without lifting pencil."
      },
      kidDirections: {
        badge: "Monkey 'M' Mission",
        text: "Make your lips hum: 'Mmm!' Trace lowercase 'm' on the lines and circle the monkey!",
        icons: ["🐵", "Ⓜ️", "✏️"]
      },
      items: [
        {
          id: "p5-letter",
          letter: "M m",
          anchorWord: "Monkey",
          anchorEmoji: "🐵",
          mouthCue: "Press lips together and hum: /mmm/",
          strokeChant: "Start at midline. Pull down, bounce up and over, bounce up and over to baseline.",
          traces: ["m", "m", "m"]
        },
        {
          id: "p5-pictures",
          prompt: "Circle pictures that begin with /m/:",
          options: [
            { label: "Monkey", emoji: "🐵", startsWithM: true },
            { label: "Mitten", emoji: "🧤", startsWithM: true },
            { label: "Sun", emoji: "☀️", startsWithM: false }
          ]
        }
      ],
      answerKey: ["Lowercase 'm' traced on midline; Monkey and Mitten circled."]
    },
    science: {
      id: "k-science-day-5",
      day: 5,
      subject: "science",
      title: "The 5 Senses Grand Review: The Apple Scientist",
      framework: "NGSS K-PS3-1 / Core Knowledge CKLA Knowledge Unit 2 Lesson 5",
      scaffoldType: "sensory-synthesis",
      instructions: "Use all 5 senses to observe an apple! Match which sense checks each part of the apple.",
      strictBoundary: "Reviewing all 5 senses. No cell biology.",
      parentGuide: {
        objective: "Child synthesizes all 5 senses (sight, touch, hearing, smell, taste) in an authentic scientific observation.",
        sayThis: "Today you are an official Junior Scientist! Look at this apple. We can SEE its red skin with our eyes. We can FEEL its smooth shape with our hands. We can SMELL its sweet scent with our nose. When we bite it, we HEAR the crunch with our ears, and TASTE the sweet juice with our tongue! All 5 senses work together!",
        whatToDo: "Cut an apple slice with the child to perform the sensory test live.",
        whatToLookFor: "Child names all 5 body parts (eyes, ears, hands/skin, nose, tongue) and matching senses."
      },
      kidDirections: {
        badge: "Apple Scientist Award",
        text: "Connect each body part to how it investigates the juicy red apple!",
        icons: ["🍎", "🔬", "⭐"]
      },
      items: [
        { id: "as1", bodyPart: "Eyes 👀", senseAction: "See Red Color" },
        { id: "as2", bodyPart: "Nose 👃", senseAction: "Smell Sweet Scent" },
        { id: "as3", bodyPart: "Tongue 👅", senseAction: "Taste Sweet Juice" },
        { id: "as4", bodyPart: "Ears 👂", senseAction: "Hear the Loud Crunch" },
        { id: "as5", bodyPart: "Hands 🖐️", senseAction: "Feel the Smooth Skin" }
      ],
      answerKey: ["All 5 senses correctly matched to apple observations."]
    },
    socialStudies: {
      id: "k-social-day-5",
      day: 5,
      subject: "socialStudies",
      title: "Community Helpers: Brave Firefighters & 911 Safety",
      framework: "Core Knowledge CKHG Kindergarten Unit 2 Lesson 1 / C3 Framework D2.Civ.2.K-2",
      scaffoldType: "helper-investigation",
      instructions: "Circle the firefighter's helper tools! Color the big red fire truck!",
      strictBoundary: "Emergency helpers and fire safety rules. No scary disaster scenarios.",
      parentGuide: {
        objective: "Child identifies firefighters as community helpers, recognizes emergency 911, and practices Stop, Drop and Roll.",
        sayThis: "Who comes to help when there is a fire emergency? The brave firefighters in their big red fire truck! What is our fire safety rule? 'Stop, Drop, and Roll!' And what is the special emergency number to call? 9-1-1!",
        whatToDo: "Have child practice gently dropping to the floor and rolling like a log with hands over their face.",
        whatToLookFor: "Child knows that firefighters are friendly helpers who protect our neighborhood."
      },
      kidDirections: {
        badge: "Junior Fire Chief Badge",
        text: "Circle all the firefighter helper tools! Practice 'Stop, Drop & Roll' with an adult!",
        icons: ["🚒", "🧯", "👨‍🚒"]
      },
      items: [
        { id: "ff1", label: "Fire Hose & Nozzle", emoji: "🚒", isFireTool: true },
        { id: "ff2", label: "Fire Extinguisher", emoji: "🧯", isFireTool: true },
        { id: "ff3", label: "Frying Pan", emoji: "🍳", isFireTool: false },
        { id: "ff4", label: "Firefighter Helmet", emoji: "⛑️", isFireTool: true }
      ],
      answerKey: ["Circle Fire Hose, Fire Extinguisher, and Helmet."]
    }
  }
};
