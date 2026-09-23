// src/domain/curriculum/days31_40/scienceDays31_40.js
// Kindergarten Science & Nature Curriculum: Days 31 to 40 (Weeks 7–8 / Pre-Q1 Assessment Milestone)
// Focus: NGSS Earth & Space / Physical / Life Science (Sunlight Warming, Shade Design, Weather Patterns, Severe Weather Safety, Animal Habitats: Pond, Ocean, Desert, Rainforest, Living Things Changing Environment, Pre-Q1 Champion Review)
// Standards: NGSS K-PS3-1, K-PS3-2, K-ESS2-1, K-ESS2-2, K-ESS3-1, K-ESS3-2
// Created: 2026-09-22

export const scienceDays31_40 = [
  // -------------------------------------------------------------------------
  // DAY 31: The Sun Warms Earth: Light and Warmth
  // -------------------------------------------------------------------------
  {
    day: 31,
    title: 'The Sun Warms Earth: Sunlight and Heat',
    standard: 'NGSS K-PS3-1 (Make Observations on the Effect of Sunlight on Earth’s Surface)',
    strictBoundary: 'Observing that sunlight warms Earth surfaces (sand, rocks, water). No thermodynamic calculations or radiation formulas.',
    script: {
      say: '“Have you ever walked barefoot on sand or pavement in the summer sun? It gets hot! The sun shines down and warms up rocks, sand, soil, and water on planet Earth!”',
      do: 'Place two paper cups with a little soil on a windowsill: one in direct bright sunshine, one in the dark closet. Feel them after 15 minutes.',
      lookFor: 'Notices that surfaces in direct sunlight feel warmer than surfaces kept in the shade or dark.',
    },
    generateSheet: (variant = 1) => ({
      id: `science-d31-v${variant}`,
      title: 'Science Day 31: The Sun Warms the Earth',
      subject: 'science',
      grade: 'K',
      instructions: 'Look at each outdoor object. Circle the things that get WARM when the bright sun shines down on them!',
      kidDirections: {
        text: '☀️ The sun is bright! 🌡️ Sunlight makes things warm! ⭕ Circle the warmed objects!',
        icons: ['☀️', '🌡️', '⭕'],
        badge: 'Solar Scientist',
      },
      problems: [
        {
          id: 'p1',
          type: 'science-inquiry',
          number: 1,
          prompt: 'What happens to black pavement stones on a hot, sunny summer afternoon?',
          options: [
            'They get warm and hot to touch ☀️',
            'They turn into ice blocks',
            'They float up into the sky',
            'Nothing happens at all',
          ],
        },
        {
          id: 'p2',
          type: 'science-classification',
          number: 2,
          prompt: 'Which of these gives Earth both light and warmth?',
          items: [
            { id: 'i1', name: 'The Sun ☀️', category: 'Warms Earth' },
            { id: 'i2', name: 'A Flashlight 🔦', category: 'Only Light' },
            { id: 'i3', name: 'A Mirror 🪞', category: 'Reflects' },
          ],
        },
        {
          id: 'p3',
          type: 'science-inquiry',
          number: 3,
          prompt: 'If you leave a bucket of pool water in direct sunshine, what happens to the water?',
          options: [
            'The water slowly warms up 💧',
            'The water freezes solid',
            'The water turns into milk',
          ],
        },
        {
          id: 'p4',
          type: 'science-inquiry',
          number: 4,
          prompt: 'Where would rocks feel cooler on a sunny day?',
          options: [
            'In the cool shade under a leafy tree 🌳',
            'Directly under the hot sun on the grass',
            'On top of the black car roof',
          ],
        },
      ],
      cutStrip: {
        type: 'straight-strips',
        stage: 'Ages 3-5 (Bottom-Edge Cut)',
        items: ['Sun Gives Warmth ☀️', 'Pavement Gets Hot 🛣️', 'Water Warms Up 💧', 'Shade Stays Cooler 🌳'],
      },
      answerKey: [
        { number: 1, solution: 'They get warm and hot to touch ☀️' },
        { number: 2, solution: 'The Sun ☀️ gives planet Earth both light and warmth.' },
        { number: 3, solution: 'The water slowly warms up 💧' },
        { number: 4, solution: 'In the cool shade under a leafy tree 🌳' },
      ],
    }),
  },

  // -------------------------------------------------------------------------
  // DAY 32: Creating Shade to Cool Down
  // -------------------------------------------------------------------------
  {
    day: 32,
    title: 'Creating Shade: Blocking the Sun to Stay Cool',
    standard: 'NGSS K-PS3-2 (Use Tools and Materials to Design and Build a Structure to Reduce Warming)',
    strictBoundary: 'Designing and identifying shade structures to reduce warming from sunlight. No ultraviolet light physics.',
    script: {
      say: '“When the sun makes the sandbox too hot, what can we do? We can make shade! Umbrellas, leafy trees, and sun hats block the sun’s rays so surfaces stay cooler!”',
      do: 'Hold a piece of cardboard over child’s hand while standing in a sunny spot. Ask: ‘Does your hand feel cooler in the shade?’',
      lookFor: 'Understands that shade structures block sunlight to reduce surface warming.',
    },
    generateSheet: (variant = 1) => ({
      id: `science-d32-v${variant}`,
      title: 'Science Day 32: Creating Shade to Stay Cool',
      subject: 'science',
      grade: 'K',
      instructions: 'Identify which items block sunlight and make cool shade! Circle the shade makers.',
      kidDirections: {
        text: '🏖️ Sun is hot! ☂️ Shade keeps us cool! ⭕ Circle the shade structures!',
        icons: ['🏖️', '☂️', '⭕'],
        badge: 'Shade Architect',
      },
      problems: [
        {
          id: 'p1',
          type: 'science-inquiry',
          number: 1,
          prompt: 'What tool can you open at the beach to block the hot sun and create shade?',
          options: [
            'A large beach umbrella ⛱️',
            'A metal spoon',
            'A pair of swim goggles',
          ],
        },
        {
          id: 'p2',
          type: 'science-classification',
          number: 2,
          prompt: 'Sort items: Does it MAKE SHADE or LET SUN SHINE THROUGH?',
          items: [
            { id: 'i1', name: 'Big Beach Umbrella ⛱️', category: 'Makes Shade' },
            { id: 'i2', name: 'Clear Glass Window 🪟', category: 'Lets Sun Through' },
            { id: 'i3', name: 'Leafy Oak Tree 🌳', category: 'Makes Shade' },
          ],
        },
        {
          id: 'p3',
          type: 'science-inquiry',
          number: 3,
          prompt: 'What can you wear on your head to shade your face and eyes from the bright sun?',
          options: [
            'A wide sun hat 👒',
            'A heavy winter scarf',
            'A metal pot',
          ],
        },
        {
          id: 'p4',
          type: 'science-inquiry',
          number: 4,
          prompt: 'Why do animals rest under a tree canopy at noon?',
          options: [
            'Because the shade is much cooler than the direct sun 🐾',
            'Because trees make it rain inside',
            'Because they want to climb to the clouds',
          ],
        },
      ],
      cutStrip: {
        type: 'straight-strips',
        stage: 'Ages 3-5 (Bottom-Edge Cut)',
        items: ['Beach Umbrella ⛱️', 'Leafy Tree 🌳', 'Sun Hat 👒', 'Cool Shade 🧊'],
      },
      answerKey: [
        { number: 1, solution: 'A large beach umbrella ⛱️' },
        { number: 2, solution: 'Beach Umbrella & Tree = Makes Shade; Glass Window = Lets Sun Through' },
        { number: 3, solution: 'A wide sun hat 👒' },
        { number: 4, solution: 'Because the shade is much cooler than the direct sun 🐾' },
      ],
    }),
  },

  // -------------------------------------------------------------------------
  // DAY 33: Weather Patterns: Rain, Wind, Snow, Sunshine
  // -------------------------------------------------------------------------
  {
    day: 33,
    title: 'Weather Patterns: Rain, Wind, Snow & Sunshine',
    standard: 'NGSS K-ESS2-1 (Use and Share Observations of Local Weather Conditions)',
    strictBoundary: 'Observing and recording local weather conditions (sunny, rainy, windy, snowy). No meteorology instruments or pressure systems.',
    script: {
      say: '“Look outside your window! What is the weather doing right now? Is it sunny, cloudy, raining, or windy? Weather changes day to day and season to season!”',
      do: 'Look out the window together. Draw today’s weather icon (sun, cloud with raindrops, wind swirl).',
      lookFor: 'Can describe current weather using sensory words (bright sun, wet rain, brisk wind).',
    },
    generateSheet: (variant = 1) => ({
      id: `science-d33-v${variant}`,
      title: 'Science Day 33: Weather Watcher (Daily Patterns)',
      subject: 'science',
      grade: 'K',
      instructions: 'Observe the weather pictures. Match each type of weather to the correct activity and clothing!',
      kidDirections: {
        text: '🌤️ Look at the sky! 🌧️ Check the weather! ✏️ Match the weather clothes!',
        icons: ['🌤️', '🌧️', '✏️'],
        badge: 'Weather Watcher',
      },
      problems: [
        {
          id: 'p1',
          type: 'science-inquiry',
          number: 1,
          prompt: 'What should you wear outside when it is pouring cold rain?',
          options: [
            'A waterproof raincoat and rainboots 🌧️',
            'A swimsuit and sandals',
            'A paper costume',
          ],
        },
        {
          id: 'p2',
          type: 'science-classification',
          number: 2,
          prompt: 'Sort weather: Warm Weather vs. Cold Weather',
          items: [
            { id: 'i1', name: 'Sunny Beach Day ☀️', category: 'Warm Weather' },
            { id: 'i2', name: 'Snow Flurries & Ice ❄️', category: 'Cold Weather' },
            { id: 'i3', name: 'Swimming in Pool 🏊', category: 'Warm Weather' },
          ],
        },
        {
          id: 'p3',
          type: 'science-inquiry',
          number: 3,
          prompt: 'What outdoor activity works best on a breezy, windy day?',
          options: [
            'Flying a colorful kite in the park 🪁',
            'Building a card tower on the picnic table',
            'Painting paper outside without weights',
          ],
        },
        {
          id: 'p4',
          type: 'science-inquiry',
          number: 4,
          prompt: 'What falls from winter clouds when the air is freezing cold?',
          options: [
            'White, fluffy snowflakes ❄️',
            'Hot soup drops',
            'Marshmallows',
          ],
        },
      ],
      cutStrip: {
        type: 'straight-strips',
        stage: 'Ages 3-5 (Bottom-Edge Cut)',
        items: ['Raincoat for Rain 🌧️', 'Kite for Wind 🪁', 'Mittens for Snow ❄️', 'Sunglasses for Sun 🕶️'],
      },
      answerKey: [
        { number: 1, solution: 'A waterproof raincoat and rainboots 🌧️' },
        { number: 2, solution: 'Sunny Beach & Swimming = Warm Weather; Snow Flurries = Cold Weather' },
        { number: 3, solution: 'Flying a colorful kite in the park 🪁' },
        { number: 4, solution: 'White, fluffy snowflakes ❄️' },
      ],
    }),
  },

  // -------------------------------------------------------------------------
  // DAY 34: Severe Weather Awareness: Thunderstorms & Safety
  // -------------------------------------------------------------------------
  {
    day: 34,
    title: 'Severe Weather Awareness: Thunderstorms & Safety',
    standard: 'NGSS K-ESS3-2 (Ask Questions to Obtain Information About Severe Weather Safety)',
    strictBoundary: 'Severe weather safety rules: staying inside during thunder/lightning. No atmospheric physics.',
    script: {
      say: '“When thunder roars, go indoors! Lightning flashes and loud thunder mean severe storm weather. Safe scientists head inside a sturdy building!”',
      do: 'Practice the thunderstorm safety rhyme together: ‘When thunder roars, go indoors!’ Discuss why we stay away from tall trees and open fields in a storm.',
      lookFor: 'Knows the golden rule for lightning safety: immediately seek shelter inside a building or car.',
    },
    generateSheet: (variant = 1) => ({
      id: `science-d34-v${variant}`,
      title: 'Science Day 34: Severe Weather & Storm Safety',
      subject: 'science',
      grade: 'K',
      instructions: 'Learn the safety rules for thunderstorms! What should a smart scientist do when severe weather arrives?',
      kidDirections: {
        text: '⚡ Lightning flash! 🌩️ Thunder roar! 🏠 Head indoors for safety!',
        icons: ['⚡', '🌩️', '🏠'],
        badge: 'Storm Safety Scout',
      },
      problems: [
        {
          id: 'p1',
          type: 'science-inquiry',
          number: 1,
          prompt: 'What is the golden safety rule when you hear thunder rumble outside?',
          options: [
            '"When thunder roars, go indoors!" 🏠',
            'Climb to the very top of a tall tree',
            'Jump into the swimming pool',
            'Stand in an open grassy soccer field',
          ],
        },
        {
          id: 'p2',
          type: 'science-classification',
          number: 2,
          prompt: 'Sort places: SAFE SHELTER vs. NOT SAFE in a Lightning Storm',
          items: [
            { id: 'i1', name: 'Inside a Sturdy House 🏡', category: 'Safe Shelter' },
            { id: 'i2', name: 'Under an Isolated Tall Tree 🌲', category: 'Not Safe' },
            { id: 'i3', name: 'Inside a Closed Car 🚗', category: 'Safe Shelter' },
          ],
        },
        {
          id: 'p3',
          type: 'science-inquiry',
          number: 3,
          prompt: 'What tool helps families know if severe storms are coming to their town?',
          options: [
            'A weather forecast on TV, radio, or phone 📱',
            'A magic crystal ball',
            'A toy whistle',
          ],
        },
        {
          id: 'p4',
          type: 'science-inquiry',
          number: 4,
          prompt: 'Why should you stay out of swimming pools and lakes during a thunderstorm?',
          options: [
            'Because water conducts electricity from lightning ⚡',
            'Because fish bite during rain',
            'Because the water turns into juice',
          ],
        },
      ],
      cutStrip: {
        type: 'straight-strips',
        stage: 'Ages 3-5 (Bottom-Edge Cut)',
        items: ['Thunder Roars -> Go Indoors 🏠', 'Stay Away from Tall Trees 🌲', 'Listen to Weather Forecast 📱', 'Storm Safety Hero ⚡'],
      },
      answerKey: [
        { number: 1, solution: '"When thunder roars, go indoors!" 🏠' },
        { number: 2, solution: 'House & Car = Safe Shelter; Isolated Tree = Not Safe' },
        { number: 3, solution: 'A weather forecast on TV, radio, or phone 📱' },
        { number: 4, solution: 'Because water conducts electricity from lightning ⚡' },
      ],
    }),
  },

  // -------------------------------------------------------------------------
  // DAY 35: Animal Habitats: Freshwater Ponds & Streams
  // -------------------------------------------------------------------------
  {
    day: 35,
    title: 'Animal Habitats: Freshwater Ponds & Streams',
    standard: 'NGSS K-ESS3-1 (Use a Model to Represent the Relationship Between Needs and Habitats)',
    strictBoundary: 'Freshwater pond/lake habitats and the plants and animals that live there. No chemical water testing.',
    script: {
      say: '“A habitat is a home where plants and animals get food, water, and shelter! In a freshwater pond, ducks paddle, frogs jump on lily pads, and turtles sunbathe on logs!”',
      do: 'Look at pictures of pond life. Point out how duck webbed feet help them paddle through freshwater.',
      lookFor: 'Identifies that animals live in habitats that provide their specific basic needs (water, food, shelter).',
    },
    generateSheet: (variant = 1) => ({
      id: `science-d35-v${variant}`,
      title: 'Science Day 35: Freshwater Pond Habitat',
      subject: 'science',
      grade: 'K',
      instructions: 'Explore the freshwater pond! Identify which animals and plants make their homes in and around the pond.',
      kidDirections: {
        text: '🦆 Pond water! 🐸 Green frogs! ⭕ Circle the pond animals!',
        icons: ['🦆', '🐸', '⭕'],
        badge: 'Pond Biologist',
      },
      problems: [
        {
          id: 'p1',
          type: 'science-inquiry',
          number: 1,
          prompt: 'Which animal hops from lily pad to lily pad and catches flies in a pond?',
          options: [
            'A green bullfrog 🐸',
            'A desert camel',
            'A polar bear',
          ],
        },
        {
          id: 'p2',
          type: 'science-classification',
          number: 2,
          prompt: 'Sort animals: Lives in POND vs. Does NOT Live in Pond',
          items: [
            { id: 'i1', name: 'Mallard Duck 🦆', category: 'Lives in Pond' },
            { id: 'i2', name: 'African Elephant 🐘', category: 'Not in Pond' },
            { id: 'i3', name: 'Painted Turtle 🐢', category: 'Lives in Pond' },
          ],
        },
        {
          id: 'p3',
          type: 'science-inquiry',
          number: 3,
          prompt: 'What special feature helps ducks swim smoothly across the pond water?',
          options: [
            'Webbed paddle feet 🦆',
            'Sharp climbing claws',
            'Heavy hooves',
          ],
        },
        {
          id: 'p4',
          type: 'science-inquiry',
          number: 4,
          prompt: 'What green floating plant gives pond frogs a resting spot on the water?',
          options: [
            'Lily pads 🪷',
            'Desert cactus spines',
            'Pine tree cones',
          ],
        },
      ],
      cutStrip: {
        type: 'straight-strips',
        stage: 'Ages 3-5 (Bottom-Edge Cut)',
        items: ['Frog on Lily Pad 🐸', 'Duck Webbed Feet 🦆', 'Pond Turtle 🐢', 'Freshwater Habitat 💧'],
      },
      answerKey: [
        { number: 1, solution: 'A green bullfrog 🐸' },
        { number: 2, solution: 'Mallard Duck & Painted Turtle = Lives in Pond; Elephant = Not in Pond' },
        { number: 3, solution: 'Webbed paddle feet 🦆' },
        { number: 4, solution: 'Lily pads 🪷' },
      ],
    }),
  },

  // -------------------------------------------------------------------------
  // DAY 36: Animal Habitats: Saltwater Ocean
  // -------------------------------------------------------------------------
  {
    day: 36,
    title: 'Animal Habitats: Saltwater Ocean & Coral Reefs',
    standard: 'NGSS K-ESS3-1 (Use a Model to Represent Needs and Habitats)',
    strictBoundary: 'Ocean habitat and adaptations for saltwater living. No deep-sea ocean trench bathymetry.',
    script: {
      say: '“The ocean is huge and full of salty water! Whales swim, dolphins leap, sea turtles glide, and clownfish hide in coral reefs! Their bodies are built for ocean life!”',
      do: 'Cup some water and pretend to swim like a fish with fins. Discuss why ocean animals need fins, flippers, and gills to breathe underwater.',
      lookFor: 'Distinguishes ocean saltwater animals (sharks, dolphins, whales) from freshwater pond animals (frogs, pond turtles).',
    },
    generateSheet: (variant = 1) => ({
      id: `science-d36-v${variant}`,
      title: 'Science Day 36: Saltwater Ocean Habitat',
      subject: 'science',
      grade: 'K',
      instructions: 'Dive into the ocean! Identify the magnificent marine creatures that live in the deep blue sea.',
      kidDirections: {
        text: '🌊 Salty ocean! 🐬 Leaping dolphins! ✏️ Discover ocean wonders!',
        icons: ['🌊', '🐬', '✏️'],
        badge: 'Ocean Explorer',
      },
      problems: [
        {
          id: 'p1',
          type: 'science-inquiry',
          number: 1,
          prompt: 'What huge marine mammal breathes air through a blowhole at the ocean surface?',
          options: [
            'A blue whale 🐋',
            'A pond squirrel',
            'A garden robin',
          ],
        },
        {
          id: 'p2',
          type: 'science-classification',
          number: 2,
          prompt: 'Sort creatures: Ocean Creature vs. Land Animal',
          items: [
            { id: 'i1', name: 'Playful Dolphin 🐬', category: 'Ocean Creature' },
            { id: 'i2', name: 'Furry Brown Bear 🐻', category: 'Land Animal' },
            { id: 'i3', name: 'Clownfish in Coral 🐠', category: 'Ocean Creature' },
          ],
        },
        {
          id: 'p3',
          type: 'science-inquiry',
          number: 3,
          prompt: 'What body part helps fish take oxygen out of the water to breathe underwater?',
          options: [
            'Gills on the sides of their heads 🐟',
            'Lungs like humans',
            'Ears',
          ],
        },
        {
          id: 'p4',
          type: 'science-inquiry',
          number: 4,
          prompt: 'What colorful ocean habitat is like an underwater rainforest full of fish homes?',
          options: [
            'A coral reef 🪸',
            'A sand dune',
            'A snowy glacier',
          ],
        },
      ],
      cutStrip: {
        type: 'straight-strips',
        stage: 'Ages 3-5 (Bottom-Edge Cut)',
        items: ['Blue Whale 🐋', 'Ocean Dolphin 🐬', 'Coral Reef 🪸', 'Fish Gills 🐟'],
      },
      answerKey: [
        { number: 1, solution: 'A blue whale 🐋' },
        { number: 2, solution: 'Dolphin & Clownfish = Ocean Creature; Bear = Land Animal' },
        { number: 3, solution: 'Gills on the sides of their heads 🐟' },
        { number: 4, solution: 'A coral reef 🪸' },
      ],
    }),
  },

  // -------------------------------------------------------------------------
  // DAY 37: Animal Habitats: The Dry Desert
  // -------------------------------------------------------------------------
  {
    day: 37,
    title: 'Animal Habitats: The Dry Desert & Survival Adaptations',
    standard: 'NGSS K-ESS3-1 (Use a Model to Represent Needs and Habitats)',
    strictBoundary: 'Desert habitat characteristics (dry, hot days, cold nights) and water-saving adaptations. No biome precipitation charts.',
    script: {
      say: '“In the hot, dry desert, rain almost never falls! Prickly cactus plants store water in their thick stems, and camels can travel for days with little water!”',
      do: 'Touch a damp sponge vs dry sponge to show how a cactus holds onto precious water inside its stem.',
      lookFor: 'Understands that desert animals and plants have special ways to survive with very little water.',
    },
    generateSheet: (variant = 1) => ({
      id: `science-d37-v${variant}`,
      title: 'Science Day 37: The Dry Desert Habitat',
      subject: 'science',
      grade: 'K',
      instructions: 'Explore the desert habitat! Learn how desert creatures and plants survive where water is rare.',
      kidDirections: {
        text: '🏜️ Sandy desert! 🌵 Prickly cactus! 🐪 Amazing camels!',
        icons: ['🏜️', '🌵', '🐪'],
        badge: 'Desert Ranger',
      },
      problems: [
        {
          id: 'p1',
          type: 'science-inquiry',
          number: 1,
          prompt: 'How does a green saguaro cactus survive in the dry desert with so little rain?',
          options: [
            'It stores water inside its thick, fleshy stem 🌵',
            'It drinks soda from bottles',
            'It walks to the grocery store',
          ],
        },
        {
          id: 'p2',
          type: 'science-classification',
          number: 2,
          prompt: 'Sort plants & animals: Desert Living vs. Wet Pond Living',
          items: [
            { id: 'i1', name: 'Desert Camel 🐪', category: 'Desert Living' },
            { id: 'i2', name: 'Pond Water Lily 🪷', category: 'Wet Pond Living' },
            { id: 'i3', name: 'Prickly Cactus 🌵', category: 'Desert Living' },
          ],
        },
        {
          id: 'p3',
          type: 'science-inquiry',
          number: 3,
          prompt: 'Why do many desert animals (like scorpions and foxes) sleep underground during the day?',
          options: [
            'To stay cool in deep burrows away from the hot sun 🌡️',
            'Because they are scared of daylight',
            'Because they forgot to wake up',
          ],
        },
        {
          id: 'p4',
          type: 'science-inquiry',
          number: 4,
          prompt: 'What special body feature helps camels walk across soft, shifting desert sand without sinking?',
          options: [
            'Wide, padded feet 🐪',
            'Tiny sharp claws',
            'Roller skates',
          ],
        },
      ],
      cutStrip: {
        type: 'straight-strips',
        stage: 'Ages 3-5 (Bottom-Edge Cut)',
        items: ['Cactus Stores Water 🌵', 'Camel Padded Feet 🐪', 'Cool Deep Burrows 🦊', 'Dry Desert Land 🏜️'],
      },
      answerKey: [
        { number: 1, solution: 'It stores water inside its thick, fleshy stem 🌵' },
        { number: 2, solution: 'Camel & Cactus = Desert Living; Water Lily = Wet Pond Living' },
        { number: 3, solution: 'To stay cool in deep burrows away from the hot sun 🌡️' },
        { number: 4, solution: 'Wide, padded feet 🐪' },
      ],
    }),
  },

  // -------------------------------------------------------------------------
  // DAY 38: Animal Habitats: The Tropical Rainforest
  // -------------------------------------------------------------------------
  {
    day: 38,
    title: 'Animal Habitats: The Tropical Rainforest & Tree Canopy',
    standard: 'NGSS K-ESS3-1 (Use a Model to Represent Needs and Habitats)',
    strictBoundary: 'Rainforest layers and high-moisture plant/animal life. No deforestation politics.',
    script: {
      say: '“In the tropical rainforest, it rains almost every day! Giant trees grow high into the sky like an umbrella canopy where monkeys swing and colorful parrots fly!”',
      do: 'Make jungle monkey and parrot sounds together! Stretch tall like the tallest canopy tree reaching for sunlight.',
      lookFor: 'Recognizes that rainforests are warm, wet, and filled with diverse plant and animal life.',
    },
    generateSheet: (variant = 1) => ({
      id: `science-d38-v${variant}`,
      title: 'Science Day 38: The Tropical Rainforest Habitat',
      subject: 'science',
      grade: 'K',
      instructions: 'Trek into the lush green rainforest! Discover the monkeys, toucans, and giant leafy trees.',
      kidDirections: {
        text: '🌴 Tall jungle trees! 🐒 Swinging monkeys! 🦜 Colorful toucans!',
        icons: ['🌴', '🐒', '🦜'],
        badge: 'Jungle Explorer',
      },
      problems: [
        {
          id: 'p1',
          type: 'science-inquiry',
          number: 1,
          prompt: 'What kind of weather happens almost every single afternoon in a tropical rainforest?',
          options: [
            'Warm, heavy rain showers 🌧️',
            'Freezing snowstorms',
            'Desert sandstorms',
          ],
        },
        {
          id: 'p2',
          type: 'science-classification',
          number: 2,
          prompt: 'Sort animals: Rainforest Animals vs. Desert Animals',
          items: [
            { id: 'i1', name: 'Howler Monkey 🐒', category: 'Rainforest Animal' },
            { id: 'i2', name: 'Two-Humped Camel 🐪', category: 'Desert Animal' },
            { id: 'i3', name: 'Rainbow Toucan 🦜', category: 'Rainforest Animal' },
          ],
        },
        {
          id: 'p3',
          type: 'science-inquiry',
          number: 3,
          prompt: 'What helps monkeys swing from branch to branch high up in the rainforest trees?',
          options: [
            'Strong arms and grasping tails 🐒',
            'Feather wings',
            'Swimming flippers',
          ],
        },
        {
          id: 'p4',
          type: 'science-inquiry',
          number: 4,
          prompt: 'Why do rainforest plants have giant, wide green leaves?',
          options: [
            'To catch sunlight under the shady canopy trees 🍃',
            'To catch falling snow',
            'To fly away like kites',
          ],
        },
      ],
      cutStrip: {
        type: 'straight-strips',
        stage: 'Ages 3-5 (Bottom-Edge Cut)',
        items: ['Canopy Trees 🌴', 'Swinging Monkey 🐒', 'Rainbow Toucan 🦜', 'Rainforest Rain 🌧️'],
      },
      answerKey: [
        { number: 1, solution: 'Warm, heavy rain showers 🌧️' },
        { number: 2, solution: 'Monkey & Toucan = Rainforest Animal; Camel = Desert Animal' },
        { number: 3, solution: 'Strong arms and grasping tails 🐒' },
        { number: 4, solution: 'To catch sunlight under the shady canopy trees 🍃' },
      ],
    }),
  },

  // -------------------------------------------------------------------------
  // DAY 39: How Living Things Change Their Environment
  // -------------------------------------------------------------------------
  {
    day: 39,
    title: 'How Living Things Change Their Environment (Beavers & Worms)',
    standard: 'NGSS K-ESS2-2 (Construct an Argument for How Plants and Animals Can Change the Environment)',
    strictBoundary: 'Living things (plants and animals) changing their surroundings to meet needs. No industrial environmental impact.',
    script: {
      say: '“Living things can change the world around them! Beavers chop down trees to build dams and ponds. Earthworms dig tunnels that bring air into the soil!”',
      do: 'Build a small ‘beaver dam’ using popsicle sticks or twigs. Notice how it holds back toy water.',
      lookFor: 'Understands that animals and plants actively change their environment to make homes and find food.',
    },
    generateSheet: (variant = 1) => ({
      id: `science-d39-v${variant}`,
      title: 'Science Day 39: Living Things Change Their Surroundings',
      subject: 'science',
      grade: 'K',
      instructions: 'Look at how busy animals and plants shape nature! See how beavers, birds, and worms remodel their world.',
      kidDirections: {
        text: '🦫 Beaver builds a dam! 🪱 Worm digs a tunnel! ✏️ Discover animal builders!',
        icons: ['🦫', '🪱', '✏️'],
        badge: 'Nature Engineer',
      },
      problems: [
        {
          id: 'p1',
          type: 'science-inquiry',
          number: 1,
          prompt: 'What animal cuts branches with sharp teeth to build a dam and create a new pond?',
          options: [
            'A busy beaver 🦫',
            'A sleeping sloth',
            'A goldfish',
          ],
        },
        {
          id: 'p2',
          type: 'science-classification',
          number: 2,
          prompt: 'Sort builders: How Animals Change Their Environment',
          items: [
            { id: 'i1', name: 'Beaver Dam across a Stream 🪵', category: 'Makes New Pond' },
            { id: 'i2', name: 'Robin Twig Nest in a Tree 🪺', category: 'Makes Safe Egg Home' },
            { id: 'i3', name: 'Earthworm Soil Tunnels 🪱', category: 'Airs Out Garden Soil' },
          ],
        },
        {
          id: 'p3',
          type: 'science-inquiry',
          number: 3,
          prompt: 'How do tiny earthworms help garden plants grow stronger?',
          options: [
            'Their tunnels let air, water, and plant roots move through soil 🪱',
            'They paint the flowers pink',
            'They eat the sunshine',
          ],
        },
        {
          id: 'p4',
          type: 'science-inquiry',
          number: 4,
          prompt: 'What happens to a sidewalk when a giant tree root grows underneath it?',
          options: [
            'The tree root pushes up and cracks the concrete 🌳',
            'The sidewalk turns into jelly',
            'Nothing happens at all',
          ],
        },
      ],
      cutStrip: {
        type: 'straight-strips',
        stage: 'Ages 3-5 (Bottom-Edge Cut)',
        items: ['Beaver Dam 🦫', 'Bird Nest 🪺', 'Worm Tunnels 🪱', 'Tree Roots 🌳'],
      },
      answerKey: [
        { number: 1, solution: 'A busy beaver 🦫' },
        { number: 2, solution: 'Beaver = Makes New Pond; Robin = Safe Egg Home; Earthworm = Airs Out Garden Soil' },
        { number: 3, solution: 'Their tunnels let air, water, and plant roots move through soil 🪱' },
        { number: 4, solution: 'The tree root pushes up and cracks the concrete 🌳' },
      ],
    }),
  },

  // -------------------------------------------------------------------------
  // DAY 40: Young Scientist Pre-Quarter 1 Grand Champion Review
  // -------------------------------------------------------------------------
  {
    day: 40,
    title: 'Young Scientist Pre-Quarter 1 Grand Champion Review',
    standard: 'NGSS K-PS3-1, K-ESS2-1 & K-ESS3-1 (Pre-Q1 Cumulative Inquiry Review)',
    strictBoundary: 'Cumulative review of sunlight, weather safety, animal habitats, and environmental change.',
    script: {
      say: '“Day 40 Young Scientist Grand Champion! You know how the sun warms Earth, how to stay safe in storms, the 4 amazing habitats, and how living things change their homes! You are an official nature explorer!”',
      do: 'Present child with their Day 40 Junior Naturalist badge! Review the 4 animal habitats together.',
      lookFor: 'Confidently matches animals to habitats and recalls weather safety rules with enthusiasm.',
    },
    generateSheet: (variant = 1) => ({
      id: `science-d40-v${variant}`,
      title: 'Science Day 40: Pre-Quarter 1 Young Scientist Grand Champion',
      subject: 'science',
      grade: 'K',
      instructions: 'Celebrate 40 Days of Science! Answer the champion questions on weather, habitats, and nature builders!',
      kidDirections: {
        text: '🏆 Day 40 Science Champion! 🌍 Habitats & Weather! 🌟 You are a real scientist!',
        icons: ['🏆', '🌍', '🌟'],
        badge: 'Day 40 Science Champion',
      },
      problems: [
        {
          id: 'p1',
          type: 'science-inquiry',
          number: 1,
          prompt: 'What provides planet Earth with both daylight and surface warmth?',
          options: [
            'The Sun ☀️',
            'A street light',
            'A refrigerator',
          ],
        },
        {
          id: 'p2',
          type: 'science-inquiry',
          number: 2,
          prompt: 'What safety action should you take when thunder roars outside?',
          options: [
            'Go indoors to a safe building immediately 🏠',
            'Climb a metal antenna tower',
            'Stand in an open lake',
          ],
        },
        {
          id: 'p3',
          type: 'science-classification',
          number: 3,
          prompt: 'Match animal to habitat: Ocean vs. Desert vs. Pond',
          items: [
            { id: 'i1', name: 'Blue Whale 🐋', category: 'Ocean' },
            { id: 'i2', name: 'Saguaro Cactus 🌵', category: 'Desert' },
            { id: 'i3', name: 'Green Frog 🐸', category: 'Pond' },
          ],
        },
        {
          id: 'p4',
          type: 'science-inquiry',
          number: 4,
          prompt: 'How does a beaver dam change the flowing stream environment?',
          options: [
            'It slows down water to create a quiet, safe pond 🦫',
            'It empties all the water forever',
            'It turns water into snow',
          ],
        },
      ],
      cutStrip: {
        type: 'straight-strips',
        stage: 'Ages 3-5 (Bottom-Edge Cut)',
        items: ['Sun Warms Earth ☀️', 'Storm Indoor Safety 🏠', 'Habitats Master 🐋🌵🐸', '🏆 Day 40 Science Champion!'],
      },
      answerKey: [
        { number: 1, solution: 'The Sun ☀️' },
        { number: 2, solution: 'Go indoors to a safe building immediately 🏠' },
        { number: 3, solution: 'Whale = Ocean; Cactus = Desert; Frog = Pond' },
        { number: 4, solution: 'It slows down water to create a quiet, safe pond 🦫' },
      ],
    }),
  },
];
