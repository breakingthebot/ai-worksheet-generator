// src/domain/curriculum/days31_40/socialStudiesDays31_40.js
// Kindergarten Social Studies Curriculum: Days 31 to 40 (Weeks 7–8 / Pre-Q1 Assessment Milestone)
// Focus: Core Knowledge CKHG Kindergarten (American Symbols: Liberty Bell, Bald Eagle, Flag & Pledge; Great Presidents: Lincoln, Washington; Landmarks: Mount Rushmore; Community Rules & Laws; Good Neighbor Citizenship; US Coins Basics; Pre-Q1 Champion Review)
// Standards: CKHG Kindergarten Units 4 & 5
// Created: 2026-09-22

export const socialStudiesDays31_40 = [
  // -------------------------------------------------------------------------
  // DAY 31: American Symbols: The Liberty Bell
  // -------------------------------------------------------------------------
  {
    day: 31,
    title: 'American Symbols: The Liberty Bell (Ring for Freedom)',
    standard: 'CKHG Kindergarten Unit 4: Symbols and Figures of America',
    strictBoundary: 'The Liberty Bell as a symbol of American freedom in Philadelphia. No advanced colonial constitutional history.',
    script: {
      say: '“Look at this famous bell! It’s called the Liberty Bell. It rang out loud in Philadelphia when America declared its freedom! It has a famous crack down its side.”',
      do: 'Ring a small handbell. Ask: ‘Why do you think bells were used to gather people together in town squares?’',
      lookFor: 'Recognizes the Liberty Bell as a historic American symbol of liberty and freedom.',
    },
    generateSheet: (variant = 1) => ({
      id: `social-d31-v${variant}`,
      title: 'Social Studies Day 31: The Liberty Bell',
      subject: 'socialStudies',
      grade: 'K',
      instructions: 'Learn about the Liberty Bell! Discover where it lived, why it rang, and the famous crack that makes it famous.',
      kidDirections: {
        text: '🔔 The Liberty Bell! 🗽 Rang for freedom! ⭕ Circle the bell facts!',
        icons: ['🔔', '🗽', '⭕'],
        badge: 'Liberty Bell Scout',
      },
      problems: [
        {
          id: 'p1',
          type: 'social-studies',
          number: 1,
          prompt: 'What special message was the Liberty Bell rung to announce in Philadelphia?',
          options: [
            'American freedom and liberty for all 🔔',
            'Bedtime for puppies',
            'Dinner is ready at the diner',
          ],
        },
        {
          id: 'p2',
          type: 'social-studies',
          number: 2,
          prompt: 'What famous feature does the Liberty Bell have down its front side?',
          options: [
            'A famous zigzag crack ⚡',
            'A painted rainbow flower',
            'A neon green light',
          ],
        },
        {
          id: 'p3',
          type: 'social-studies',
          number: 3,
          prompt: 'In which historic American city does the real Liberty Bell live today?',
          options: [
            'Philadelphia, Pennsylvania 🏛️',
            'On an iceberg in the Arctic',
            'Under the ocean waves',
          ],
        },
        {
          id: 'p4',
          type: 'social-studies',
          number: 4,
          prompt: 'What does the word "Liberty" mean?',
          options: [
            'Freedom to live and choose fairly 🗽',
            'A very sweet candy cane',
            'A heavy metal anchor',
          ],
        },
      ],
      cutStrip: {
        type: 'straight-strips',
        stage: 'Ages 3-5 (Bottom-Edge Cut)',
        items: ['Liberty Means Freedom 🗽', 'Famous Bell Crack 🔔', 'Philadelphia Bell 🏛️', 'American Symbol 🇺🇸'],
      },
      answerKey: [
        { number: 1, solution: 'American freedom and liberty for all 🔔' },
        { number: 2, solution: 'A famous zigzag crack ⚡' },
        { number: 3, solution: 'Philadelphia, Pennsylvania 🏛️' },
        { number: 4, solution: 'Freedom to live and choose fairly 🗽' },
      ],
    }),
  },

  // -------------------------------------------------------------------------
  // DAY 32: American Symbols: The Bald Eagle
  // -------------------------------------------------------------------------
  {
    day: 32,
    title: 'American Symbols: The Bald Eagle (National Bird)',
    standard: 'CKHG Kindergarten Unit 4: Symbols and Figures of America',
    strictBoundary: 'The Bald Eagle as America’s national bird and emblem of strength. No endangered species legislation.',
    script: {
      say: '“Soaring high in the sky is the Bald Eagle! It has bright white feathers on its head and sharp eyes. Our country chose it as our national bird because it is strong, brave, and free!”',
      do: 'Spread arms wide like eagle wings and pretend to soar high above mountain peaks.',
      lookFor: 'Identifies the bald eagle as the national bird symbol representing American strength and freedom.',
    },
    generateSheet: (variant = 1) => ({
      id: `social-d32-v${variant}`,
      title: 'Social Studies Day 32: The American Bald Eagle',
      subject: 'socialStudies',
      grade: 'K',
      instructions: 'Discover our majestic national bird, the Bald Eagle! Learn why it represents strength and freedom.',
      kidDirections: {
        text: '🦅 Majestic Bald Eagle! 🇺🇸 National bird! ✏️ Circle the eagle facts!',
        icons: ['🦅', '🇺🇸', '✏️'],
        badge: 'Eagle Eye Scout',
      },
      problems: [
        {
          id: 'p1',
          type: 'social-studies',
          number: 1,
          prompt: 'What magnificent creature was chosen as the national bird of the United States?',
          options: [
            'The Bald Eagle 🦅',
            'A barnyard chicken 🐔',
            'A green parrot 🦜',
          ],
        },
        {
          id: 'p2',
          type: 'social-studies',
          number: 2,
          prompt: 'Why did America’s founders choose the Bald Eagle as our national symbol?',
          options: [
            'Because it is strong, courageous, and flies free 🦅',
            'Because it makes squeaky mouse sounds',
            'Because it likes to swim in pools',
          ],
        },
        {
          id: 'p3',
          type: 'social-studies',
          number: 3,
          prompt: 'Where can you see pictures of the American Bald Eagle today?',
          options: [
            'On US dollar bills, coins, and official seals 🪙',
            'Only on cereal boxes',
            'Nowhere in the world',
          ],
        },
        {
          id: 'p4',
          type: 'social-studies',
          number: 4,
          prompt: 'What color are the adult bald eagle’s head feathers?',
          options: [
            'Pure bright white 🪶',
            'Polka dot purple',
            'Neon orange',
          ],
        },
      ],
      cutStrip: {
        type: 'straight-strips',
        stage: 'Ages 3-5 (Bottom-Edge Cut)',
        items: ['National Bird 🦅', 'Strong and Free 🇺🇸', 'White Head Feathers 🪶', 'Featured on Coins 🪙'],
      },
      answerKey: [
        { number: 1, solution: 'The Bald Eagle 🦅' },
        { number: 2, solution: 'Because it is strong, courageous, and flies free 🦅' },
        { number: 3, solution: 'On US dollar bills, coins, and official seals 🪙' },
        { number: 4, solution: 'Pure bright white 🪶' },
      ],
    }),
  },

  // -------------------------------------------------------------------------
  // DAY 33: American Symbols: The US Flag & Pledge of Allegiance
  // -------------------------------------------------------------------------
  {
    day: 33,
    title: 'American Symbols: The US Flag & The Pledge of Allegiance',
    standard: 'CKHG Kindergarten Unit 4: Symbols and Figures of America',
    strictBoundary: 'Respecting the US flag and learning the Pledge of Allegiance. No flag etiquette legal codes.',
    script: {
      say: '“Put your right hand over your heart! Look at our flag with 50 white stars for 50 states, and 13 red and white stripes! When we say the Pledge of Allegiance, we promise to be loyal and kind citizens.”',
      do: 'Demonstrate placing your right hand over your heart. Recite the opening lines of the Pledge of Allegiance together.',
      lookFor: 'Places right hand over heart with respect and knows the flag has stars (states) and stripes.',
    },
    generateSheet: (variant = 1) => ({
      id: `social-d33-v${variant}`,
      title: 'Social Studies Day 33: Stars, Stripes & The Pledge',
      subject: 'socialStudies',
      grade: 'K',
      instructions: 'Examine Old Glory! Count the stars and stripes and learn the meaning of the Pledge of Allegiance.',
      kidDirections: {
        text: '🇺🇸 Stars and Stripes! ❤️ Hand over heart! 🌟 Stand with respect!',
        icons: ['🇺🇸', '❤️', '🌟'],
        badge: 'Flag Bearer',
      },
      problems: [
        {
          id: 'p1',
          type: 'social-studies',
          number: 1,
          prompt: 'What do the 50 white stars on the American flag represent?',
          options: [
            'All 50 states in the United States 🇺🇸',
            '50 different kinds of ice cream',
            '50 giant rocket ships',
          ],
        },
        {
          id: 'p2',
          type: 'social-studies',
          number: 2,
          prompt: 'What colors are on the American flag?',
          options: [
            'Red, White, and Blue 🇺🇸',
            'Pink, Green, and Purple',
            'Orange, Yellow, and Brown',
          ],
        },
        {
          id: 'p3',
          type: 'social-studies',
          number: 3,
          prompt: 'Where do citizens place their hand when reciting the Pledge of Allegiance?',
          options: [
            'Over their heart with respect ❤️',
            'On top of their head',
            'Behind their back',
          ],
        },
        {
          id: 'p4',
          type: 'social-studies',
          number: 4,
          prompt: 'How many red and white stripes are on the American flag?',
          options: [
            '13 stripes (for the 13 original colonies) 📜',
            '100 stripes',
            '2 stripes',
          ],
        },
      ],
      cutStrip: {
        type: 'straight-strips',
        stage: 'Ages 3-5 (Bottom-Edge Cut)',
        items: ['50 Stars = 50 States ⭐', '13 Stripes 📜', 'Red, White & Blue 🇺🇸', 'Hand Over Heart ❤️'],
      },
      answerKey: [
        { number: 1, solution: 'All 50 states in the United States 🇺🇸' },
        { number: 2, solution: 'Red, White, and Blue 🇺🇸' },
        { number: 3, solution: 'Over their heart with respect ❤️' },
        { number: 4, solution: '13 stripes (for the 13 original colonies) 📜' },
      ],
    }),
  },

  // -------------------------------------------------------------------------
  // DAY 34: Great Americans: Abraham Lincoln
  // -------------------------------------------------------------------------
  {
    day: 34,
    title: 'Great Americans: Abraham Lincoln (Honest Abe)',
    standard: 'CKHG Kindergarten Unit 4: Symbols and Figures of America',
    strictBoundary: 'Lincoln’s childhood honesty, love of learning, and role as president. No Civil War battle tactics.',
    script: {
      say: '“Abraham Lincoln grew up in a tiny log cabin in the woods. He loved books so much he read by fireplace light! People called him ‘Honest Abe’ because he always told the truth. He grew up to be our 16th President!”',
      do: 'Look at a copper penny. Point to Lincoln’s profile and tall stovepipe hat picture.',
      lookFor: 'Associates Abraham Lincoln with honesty, love of reading, and being a great president on the penny.',
    },
    generateSheet: (variant = 1) => ({
      id: `social-d34-v${variant}`,
      title: 'Social Studies Day 34: Abraham Lincoln (Honest Abe)',
      subject: 'socialStudies',
      grade: 'K',
      instructions: 'Learn about young Abe Lincoln who loved to read in a log cabin and grew up to become President!',
      kidDirections: {
        text: '🪵 Log cabin boy! 🎩 Tall stovepipe hat! 🪙 Lincoln on the penny!',
        icons: ['🪵', '🎩', '🪙'],
        badge: 'Honest Citizen',
      },
      problems: [
        {
          id: 'p1',
          type: 'social-studies',
          number: 1,
          prompt: 'What kind of humble home did young Abraham Lincoln live in as a boy?',
          options: [
            'A wooden log cabin in the woods 🪵',
            'A golden castle with a moat',
            'A glass skyscraper',
          ],
        },
        {
          id: 'p2',
          type: 'social-studies',
          number: 2,
          prompt: 'Why did people nickname Abraham Lincoln "Honest Abe"?',
          options: [
            'Because he was fair, trustworthy, and always told the truth 🤝',
            'Because he won a race',
            'Because he had tall boots',
          ],
        },
        {
          id: 'p3',
          type: 'social-studies',
          number: 3,
          prompt: 'What famous coin shows Abraham Lincoln’s profile?',
          options: [
            'The copper one-cent penny 🪙',
            'A silver quarter',
            'A gold medal',
          ],
        },
        {
          id: 'p4',
          type: 'social-studies',
          number: 4,
          prompt: 'What did young Abe love to do every evening by the warm fireplace light?',
          options: [
            'Read books to learn everything he could 📖',
            'Play loud drums',
            'Throw rocks',
          ],
        },
      ],
      cutStrip: {
        type: 'straight-strips',
        stage: 'Ages 3-5 (Bottom-Edge Cut)',
        items: ['Log Cabin 🪵', 'Loved Books 📖', 'Honest Abe 🤝', 'On the Penny 🪙'],
      },
      answerKey: [
        { number: 1, solution: 'A wooden log cabin in the woods 🪵' },
        { number: 2, solution: 'Because he was fair, trustworthy, and always told the truth 🤝' },
        { number: 3, solution: 'The copper one-cent penny 🪙' },
        { number: 4, solution: 'Read books to learn everything he could 📖' },
      ],
    }),
  },

  // -------------------------------------------------------------------------
  // DAY 35: Great Americans: George Washington
  // -------------------------------------------------------------------------
  {
    day: 35,
    title: 'Great Americans: George Washington (First President)',
    standard: 'CKHG Kindergarten Unit 4: Symbols and Figures of America',
    strictBoundary: 'George Washington as the first president and leader. No military strategy or Revolutionary War campaigns.',
    script: {
      say: '“George Washington was the very first President of the United States! People called him the ‘Father of Our Country’ because he helped lead our new nation when it was born!”',
      do: 'Show a quarter and a one-dollar bill. Point out George Washington’s face on both.',
      lookFor: 'Knows George Washington was the 1st president and is featured on the quarter and one-dollar bill.',
    },
    generateSheet: (variant = 1) => ({
      id: `social-d35-v${variant}`,
      title: 'Social Studies Day 35: George Washington (1st President)',
      subject: 'socialStudies',
      grade: 'K',
      instructions: 'Discover George Washington, the brave general and the very first President of our country!',
      kidDirections: {
        text: '🏛️ First President! 🎖️ Brave leader! 💵 Washington on the dollar bill!',
        icons: ['🏛️', '🎖️', '💵'],
        badge: 'First Leader Scout',
      },
      problems: [
        {
          id: 'p1',
          type: 'social-studies',
          number: 1,
          prompt: 'Who was chosen as the very first President of the United States?',
          options: [
            'George Washington 🏛️',
            'Benjamin Franklin',
            'Thomas Edison',
          ],
        },
        {
          id: 'p2',
          type: 'social-studies',
          number: 2,
          prompt: 'What special title is George Washington fondly called?',
          options: [
            'The "Father of Our Country" 🇺🇸',
            'The King of Mountains',
            'The Silver Captain',
          ],
        },
        {
          id: 'p3',
          type: 'social-studies',
          number: 3,
          prompt: 'Where can you see George Washington’s face today in everyday life?',
          options: [
            'On the one-dollar bill and the quarter 💵🪙',
            'Only in a museum in Europe',
            'On toy cars',
          ],
        },
        {
          id: 'p4',
          type: 'social-studies',
          number: 4,
          prompt: 'What is our nation’s capital city named after George Washington?',
          options: [
            'Washington, D.C. 🏛️',
            'Sunny Beach Town',
            'Apple Valley',
          ],
        },
      ],
      cutStrip: {
        type: 'straight-strips',
        stage: 'Ages 3-5 (Bottom-Edge Cut)',
        items: ['1st US President 🏛️', 'Father of Our Country 🇺🇸', 'On the Dollar Bill 💵', 'Washington D.C. 🌆'],
      },
      answerKey: [
        { number: 1, solution: 'George Washington 🏛️' },
        { number: 2, solution: 'The "Father of Our Country" 🇺🇸' },
        { number: 3, solution: 'On the one-dollar bill and the quarter 💵🪙' },
        { number: 4, solution: 'Washington, D.C. 🏛️' },
      ],
    }),
  },

  // -------------------------------------------------------------------------
  // DAY 36: American Landmarks: Mount Rushmore
  // -------------------------------------------------------------------------
  {
    day: 36,
    title: 'American Landmarks: Mount Rushmore (Giant Mountain Monument)',
    standard: 'CKHG Kindergarten Unit 4: Symbols and Figures of America',
    strictBoundary: 'Mount Rushmore memorial in South Dakota featuring Washington, Jefferson, Roosevelt, Lincoln. No quarry geology.',
    script: {
      say: '“High on a mountain in South Dakota, sculptors carved giant 60-foot stone faces of four great presidents: George Washington, Thomas Jefferson, Theodore Roosevelt, and Abraham Lincoln! It’s called Mount Rushmore!”',
      do: 'Trace a giant face outline in the air. Wonder together how sculptors used drills and ropes to carve a whole mountain.',
      lookFor: 'Identifies Mount Rushmore as a giant mountain monument honoring American presidents.',
    },
    generateSheet: (variant = 1) => ({
      id: `social-d36-v${variant}`,
      title: 'Social Studies Day 36: Mount Rushmore Memorial',
      subject: 'socialStudies',
      grade: 'K',
      instructions: 'Look up at Mount Rushmore! Learn about the giant granite faces carved into the mountain cliffs.',
      kidDirections: {
        text: '⛰️ Giant mountain! 🗿 Four presidents! 🇺🇸 Mount Rushmore!',
        icons: ['⛰️', '🗿', '🇺🇸'],
        badge: 'Mountain Explorer',
      },
      problems: [
        {
          id: 'p1',
          type: 'social-studies',
          number: 1,
          prompt: 'What is carved into the giant granite rock face of Mount Rushmore?',
          options: [
            'The giant faces of four US presidents 🗿',
            'A giant rocket ship',
            'A huge dinosaur',
          ],
        },
        {
          id: 'p2',
          type: 'social-studies',
          number: 2,
          prompt: 'Which two presidents that we learned about are on Mount Rushmore?',
          options: [
            'George Washington and Abraham Lincoln 🏛️',
            'Christopher Columbus and Marco Polo',
            'King George and Queen Elizabeth',
          ],
        },
        {
          id: 'p3',
          type: 'social-studies',
          number: 3,
          prompt: 'In which state can families visit Mount Rushmore today?',
          options: [
            'South Dakota in the Black Hills ⛰️',
            'Under the ocean in Hawaii',
            'In the desert of Africa',
          ],
        },
        {
          id: 'p4',
          type: 'social-studies',
          number: 4,
          prompt: 'How big are the carved stone faces on the mountain?',
          options: [
            'Huge! As tall as a 6-story building (60 feet tall) 🏢',
            'Small like a postage stamp',
            'Tiny like a coin',
          ],
        },
      ],
      cutStrip: {
        type: 'straight-strips',
        stage: 'Ages 3-5 (Bottom-Edge Cut)',
        items: ['Mount Rushmore ⛰️', 'Washington & Lincoln 🗿', 'South Dakota 🌄', '60-Foot Carvings 🏢'],
      },
      answerKey: [
        { number: 1, solution: 'The giant faces of four US presidents 🗿' },
        { number: 2, solution: 'George Washington and Abraham Lincoln 🏛️' },
        { number: 3, solution: 'South Dakota in the Black Hills ⛰️' },
        { number: 4, solution: 'Huge! As tall as a 6-story building (60 feet tall) 🏢' },
      ],
    }),
  },

  // -------------------------------------------------------------------------
  // DAY 37: Community Rules & Laws: Staying Safe & Fair
  // -------------------------------------------------------------------------
  {
    day: 37,
    title: 'Community Rules & Laws: Staying Safe, Fair & Orderly',
    standard: 'CKHG Kindergarten Unit 5: Community and Citizenship',
    strictBoundary: 'Why communities have rules and laws (safety, fairness, order). No criminal justice system or statutes.',
    script: {
      say: '“Why do we have red traffic lights and seat belts in cars? Rules keep us safe and help everyone take turns fairly! When we follow rules, our community is peaceful and happy!”',
      do: 'Play a quick game of ‘Red Light, Green Light’ to demonstrate how rules keep people safe and organized.',
      lookFor: 'Articulates that rules and laws protect people, prevent accidents, and treat everyone fairly.',
    },
    generateSheet: (variant = 1) => ({
      id: `social-d37-v${variant}`,
      title: 'Social Studies Day 37: Community Rules & Laws',
      subject: 'socialStudies',
      grade: 'K',
      instructions: 'Think about rules at home, school, and on the road. Why do communities need good rules?',
      kidDirections: {
        text: '🚦 Red light means stop! 🛑 Rules keep us safe! ⭕ Circle the good rules!',
        icons: ['🚦', '🛑', '⭕'],
        badge: 'Rule Champion',
      },
      problems: [
        {
          id: 'p1',
          type: 'social-studies',
          number: 1,
          prompt: 'What traffic rule keeps drivers and pedestrians safe at street corners?',
          options: [
            'Stop on Red, Go on Green 🚦',
            'Drive as fast as possible on sidewalks',
            'Close your eyes while driving',
          ],
        },
        {
          id: 'p2',
          type: 'social-studies',
          number: 2,
          prompt: 'Why do we have the rule to wear a seat belt in the car?',
          options: [
            'To keep us safe and protected in case the car stops suddenly 🚗',
            'To tickle our toes',
            'To listen to the radio',
          ],
        },
        {
          id: 'p3',
          type: 'social-studies',
          number: 3,
          prompt: 'What is a fair playground rule when many kids want to use the swings?',
          options: [
            'Take turns and share the swings nicely 🛝',
            'Keep the swing all day and never get off',
            'Push others away',
          ],
        },
        {
          id: 'p4',
          type: 'social-studies',
          number: 4,
          prompt: 'Who helps our town make sure people follow safety rules and stay protected?',
          options: [
            'Police officers, firefighters, and crossing guards 👮',
            'Pirates on a ship',
            'Monkeys in trees',
          ],
        },
      ],
      cutStrip: {
        type: 'straight-strips',
        stage: 'Ages 3-5 (Bottom-Edge Cut)',
        items: ['Stop on Red 🚦', 'Wear Seat Belts 🚗', 'Take Turns 🛝', 'Community Helpers 👮'],
      },
      answerKey: [
        { number: 1, solution: 'Stop on Red, Go on Green 🚦' },
        { number: 2, solution: 'To keep us safe and protected in case the car stops suddenly 🚗' },
        { number: 3, solution: 'Take turns and share the swings nicely 🛝' },
        { number: 4, solution: 'Police officers, firefighters, and crossing guards 👮' },
      ],
    }),
  },

  // -------------------------------------------------------------------------
  // DAY 38: Being a Good Neighbor: Kindness & Helping Others
  // -------------------------------------------------------------------------
  {
    day: 38,
    title: 'Being a Good Neighbor: Kindness, Respect & Helping',
    standard: 'CKHG Kindergarten Unit 5: Community and Citizenship',
    strictBoundary: 'Characteristics of a good neighbor and community member. No municipal budgeting.',
    script: {
      say: '“A good neighbor is kind, waves hello, helps carry groceries, and picks up litter at the playground. How can you be a wonderful neighbor today?”',
      do: 'Name three specific kind actions child can do in your neighborhood or family today.',
      lookFor: 'Gives concrete examples of being a caring, responsible, and helpful community neighbor.',
    },
    generateSheet: (variant = 1) => ({
      id: `social-d38-v${variant}`,
      title: 'Social Studies Day 38: Being a Good Neighbor',
      subject: 'socialStudies',
      grade: 'K',
      instructions: 'Discover what makes someone a wonderful neighbor and friend! Circle the helpful neighbor choices.',
      kidDirections: {
        text: '🏡 Friendly neighborhood! 🤝 Help others! 🌟 Be a star neighbor!',
        icons: ['🏡', '🤝', '🌟'],
        badge: 'Super Neighbor',
      },
      problems: [
        {
          id: 'p1',
          type: 'social-studies',
          number: 1,
          prompt: 'What does a kind neighbor do when an elderly neighbor drops their bag?',
          options: [
            'Politely helps pick up the bag and hands it back 🤝',
            'Laughs and runs away',
            'Kicks the bag into the street',
          ],
        },
        {
          id: 'p2',
          type: 'social-studies',
          number: 2,
          prompt: 'How can you help keep your neighborhood park clean and beautiful for everyone?',
          options: [
            'Put trash in the recycling and garbage cans 🚮',
            'Throw empty candy wrappers on the grass',
            'Pick all the flowers from the garden',
          ],
        },
        {
          id: 'p3',
          type: 'social-studies',
          number: 3,
          prompt: 'What friendly greeting shows respect to neighbors walking by on the sidewalk?',
          options: [
            'A warm smile and a friendly "Good morning!" 👋',
            'Yelling angrily at them',
            'Hiding behind a garbage can',
          ],
        },
        {
          id: 'p4',
          type: 'social-studies',
          number: 4,
          prompt: 'What should you do if your neighbor’s friendly dog gets out of the gate?',
          options: [
            'Tell a grown-up right away so they can help the neighbor find the dog 🐕',
            'Chase the dog into traffic',
            'Ignore it completely',
          ],
        },
      ],
      cutStrip: {
        type: 'straight-strips',
        stage: 'Ages 3-5 (Bottom-Edge Cut)',
        items: ['Help Others 🤝', 'Keep Park Clean 🚮', 'Friendly Wave 👋', 'Good Neighbor 🏡'],
      },
      answerKey: [
        { number: 1, solution: 'Politely helps pick up the bag and hands it back 🤝' },
        { number: 2, solution: 'Put trash in the recycling and garbage cans 🚮' },
        { number: 3, solution: 'A warm smile and a friendly "Good morning!" 👋' },
        { number: 4, solution: 'Tell a grown-up right away so they can help the neighbor find the dog 🐕' },
      ],
    }),
  },

  // -------------------------------------------------------------------------
  // DAY 39: Money Basics: US Coins (Penny, Nickel, Dime, Quarter)
  // -------------------------------------------------------------------------
  {
    day: 39,
    title: 'Money Basics: US Coins (Penny 1¢, Nickel 5¢, Dime 10¢, Quarter 25¢)',
    standard: 'CKHG Kindergarten Unit 5: Community and Citizenship (Economic Basics)',
    strictBoundary: 'Identifying penny, nickel, dime, and quarter by appearance and basic value. No making complex change.',
    script: {
      say: '“Look at these four shiny coins: Copper penny is worth 1¢. Thick silver nickel is 5¢. Tiny silver dime is 10¢. Big silver quarter is 25¢! Coins help people buy goods and services.”',
      do: 'Hold real or toy coins in your hand. Let child feel the copper penny vs the tiny dime.',
      lookFor: 'Can visually identify a copper penny (1¢) and knows coins have different values.',
    },
    generateSheet: (variant = 1) => ({
      id: `social-d39-v${variant}`,
      title: 'Social Studies Day 39: Money Basics (US Coins)',
      subject: 'socialStudies',
      grade: 'K',
      instructions: 'Explore the four common US coins! Learn their names, colors, and values.',
      kidDirections: {
        text: '🪙 Shiny coins! 1¢, 5¢, 10¢, 25¢! ✏️ Match coin to its name!',
        icons: ['🪙', '1¢', '✏️'],
        badge: 'Coin Banker',
      },
      problems: [
        {
          id: 'p1',
          type: 'social-studies',
          number: 1,
          prompt: 'Which coin is made of brown copper metal and worth 1 cent (1¢)?',
          options: [
            'The Penny 🪙',
            'The Quarter',
            'The Dime',
          ],
        },
        {
          id: 'p2',
          type: 'social-studies',
          number: 2,
          prompt: 'Which tiny silver coin is worth 10 cents (10¢)?',
          options: [
            'The Dime 🪙',
            'The Penny',
            'The Hundred Dollar Bill',
          ],
        },
        {
          id: 'p3',
          type: 'social-studies',
          number: 3,
          prompt: 'Which larger silver coin with George Washington’s face is worth 25 cents (25¢)?',
          options: [
            'The Quarter 🪙',
            'The Penny',
            'The Nickel',
          ],
        },
        {
          id: 'p4',
          type: 'social-studies',
          number: 4,
          prompt: 'Why do families and shoppers use coins and dollar bills at the grocery store?',
          options: [
            'To purchase food, clothes, and things families need 🛒',
            'To build toy towers on shelves',
            'To feed to pet birds',
          ],
        },
      ],
      cutStrip: {
        type: 'straight-strips',
        stage: 'Ages 3-5 (Bottom-Edge Cut)',
        items: ['Penny = 1¢ (Copper) 🪙', 'Nickel = 5¢ 🪙', 'Dime = 10¢ 🪙', 'Quarter = 25¢ 🪙'],
      },
      answerKey: [
        { number: 1, solution: 'The Penny (1¢, copper color) 🪙' },
        { number: 2, solution: 'The Dime (10¢, smallest silver coin) 🪙' },
        { number: 3, solution: 'The Quarter (25¢, largest silver coin) 🪙' },
        { number: 4, solution: 'To purchase food, clothes, and things families need 🛒' },
      ],
    }),
  },

  // -------------------------------------------------------------------------
  // DAY 40: Junior Global Leader Pre-Quarter 1 Grand Champion Review
  // -------------------------------------------------------------------------
  {
    day: 40,
    title: 'Junior Global Leader Pre-Quarter 1 Grand Champion Review',
    standard: 'CKHG Kindergarten Units 4 & 5 (Pre-Q1 Civics and Economics Review)',
    strictBoundary: 'Pre-Quarter 1 comprehensive review of national symbols, presidents, community citizenship, and basic coins.',
    script: {
      say: '“Day 40 Junior Global Leader Grand Champion! You know our national symbols (Liberty Bell, Bald Eagle, US Flag), great leaders (Lincoln and Washington), Mount Rushmore, community rules, being a kind neighbor, and our coins! You are an inspiring young citizen!”',
      do: 'Present child with their Day 40 Junior Citizen of the Quarter badge with fanfare and applause!',
      lookFor: 'Shares understanding of American symbols, leadership virtues, and good neighbor qualities with confidence.',
    },
    generateSheet: (variant = 1) => ({
      id: `social-d40-v${variant}`,
      title: 'Social Studies Day 40: Pre-Quarter 1 Global Leader Champion',
      subject: 'socialStudies',
      grade: 'K',
      instructions: 'Celebrate 40 Days of Citizenship! Answer the champion questions on American symbols, presidents, and kindness.',
      kidDirections: {
        text: '🏆 Day 40 Citizen Champion! 🇺🇸 Symbols, Leaders, Coins! 🌟 You lead the way!',
        icons: ['🏆', '🇺🇸', '🌟'],
        badge: 'Day 40 Citizen Champion',
      },
      problems: [
        {
          id: 'p1',
          type: 'social-studies',
          number: 1,
          prompt: 'What famous cracked bell in Philadelphia rang out to declare American freedom?',
          options: [
            'The Liberty Bell 🔔',
            'A bicycle bell',
            'A school fire alarm',
          ],
        },
        {
          id: 'p2',
          type: 'social-studies',
          number: 2,
          prompt: 'Who was our nation’s first president, called the "Father of Our Country"?',
          options: [
            'George Washington 🏛️',
            'Abraham Lincoln',
            'Benjamin Franklin',
          ],
        },
        {
          id: 'p3',
          type: 'social-studies',
          number: 3,
          prompt: 'How many white stars are on the American flag for our 50 states?',
          options: [
            '50 stars ⭐',
            '10 stars',
            '100 stars',
          ],
        },
        {
          id: 'p4',
          type: 'social-studies',
          number: 4,
          prompt: 'Which brown copper coin has Abraham Lincoln on it and is worth 1 cent (1¢)?',
          options: [
            'The Penny 🪙',
            'The Quarter',
            'The Dime',
          ],
        },
      ],
      cutStrip: {
        type: 'straight-strips',
        stage: 'Ages 3-5 (Bottom-Edge Cut)',
        items: ['Liberty Bell 🔔', 'George Washington 🏛️', '50 Stars Flag 🇺🇸', '🏆 Day 40 Global Citizen!'],
      },
      answerKey: [
        { number: 1, solution: 'The Liberty Bell 🔔' },
        { number: 2, solution: 'George Washington 🏛️' },
        { number: 3, solution: '50 stars (for all 50 states) ⭐' },
        { number: 4, solution: 'The Penny (1¢) 🪙' },
      ],
    }),
  },
];
