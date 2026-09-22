// src/domain/science/coreKnowledgeUnits.js
// Core Knowledge Foundation Science Units + NGSS 3D Inquiry Scenarios & Wilderness Integration.
// Connects to: src/components/science/ScienceSection.jsx, src/services/mockGenerator.js
// Created: 2026-09-22

export const CORE_KNOWLEDGE_SCIENCE_K = [
  {
    id: 'k-sci-1',
    unit: 'Unit 1: Pushes and Pulls',
    domain: 'Physical Science',
    focus: 'Identifying forces, direction changes, and collisions.',
    activityType: 'Observation & Cause-Effect',
    scenario: 'A student pushes a toy car across the floor into a wooden block. What happens to the car speed after the collision?',
    prompts: [
      { question: 'Circle what made the car move:', options: ['A gentle push', 'A whistle', 'A flashlight'], answer: 'A gentle push' },
      { question: 'When the car hits the wooden block, does it move faster or slower?', answer: 'It moves slower or stops.' },
    ],
  },
  {
    id: 'k-sci-2',
    unit: 'Unit 2: Needs of Plants & Animals',
    domain: 'Life Science',
    focus: 'Distinguishing living vs non-living matter based on energy, water, and growth.',
    activityType: 'Classification & Sorting',
    scenario: 'Living things need water, air, and energy to grow and change.',
    prompts: [
      { item: 'Oak Tree seedling', type: 'Living', needs: 'Sunlight, soil, water' },
      { item: 'Plastic Toy Robot', type: 'Non-Living', needs: 'Batteries' },
      { item: 'Golden Retriever Puppy', type: 'Living', needs: 'Food, water, shelter' },
      { item: 'River Stone', type: 'Non-Living', needs: 'None' },
    ],
  },
  {
    id: 'k-sci-3',
    unit: 'Unit 3: Changing Environments',
    domain: 'Earth & Ecology',
    focus: 'Analyzing how environmental shifts impact habitats and animal survival.',
    activityType: 'Ecosystem Matching',
    scenario: 'In winter, the temperature drops and snow falls. How do forest animals adapt?',
    prompts: [
      { question: 'Match the animal adaptation to winter:', options: ['Bear hibernates in cave', 'Bird grows wheels', 'Fish walks on snow'], answer: 'Bear hibernates in cave' },
    ],
  },
  {
    id: 'k-sci-4',
    unit: 'Unit 4: Weather Patterns',
    domain: 'Earth Science',
    focus: 'Tracking temperature, cloud types, and severe weather patterns.',
    activityType: 'Data Table & Pattern Recognition',
    tableData: [
      { day: 'Monday', temp: '68°F', sky: 'Sunny' },
      { day: 'Tuesday', temp: '65°F', sky: 'Partly Cloudy' },
      { day: 'Wednesday', temp: '54°F', sky: 'Rainy' },
      { day: 'Thursday', temp: '52°F', sky: 'Thunderstorm' },
    ],
    prompts: [
      { question: 'Which day had the coldest temperature?', answer: 'Thursday (52°F)' },
      { question: 'What weather gear is needed on Wednesday?', answer: 'Raincoat or umbrella' },
    ],
  },
  {
    id: 'k-sci-5',
    unit: 'Unit 5: Our Five Senses',
    domain: 'Human Biology',
    focus: 'Sensory organs and processing environmental stimuli.',
    activityType: 'Sensory Mapping',
    prompts: [
      { sense: 'Sight', organ: 'Eyes', example: 'Seeing colors on a rainbow' },
      { sense: 'Hearing', organ: 'Ears', example: 'Listening to bird song' },
      { sense: 'Smell', organ: 'Nose', example: 'Smelling pine needles in the forest' },
      { sense: 'Taste', organ: 'Tongue', example: 'Tasting a sweet apple' },
      { sense: 'Touch', organ: 'Skin / Hands', example: 'Feeling rough tree bark' },
    ],
  },
];

export const WILDERNESS_SCIENCE_MODULES = [
  {
    id: 'wild-1',
    topic: 'Wilderness Survival: The Rule of Threes',
    integration: 'Applied Science & Executive Prioritization',
    scenario: 'Survival experts prioritize physiological threats using the Rule of Threes: 3 Minutes without air, 3 Hours without shelter (extreme cold/heat), 3 Days without water, 3 Weeks without food.',
    prompts: [
      { priority: 1, timeframe: '3 Minutes', threat: 'Oxygen / Breathing', action: 'Clear airway' },
      { priority: 2, timeframe: '3 Hours', threat: 'Hypothermia / Heatstroke', action: 'Construct debris shelter' },
      { priority: 3, timeframe: '3 Days', threat: 'Dehydration', action: 'Filter and boil water' },
      { priority: 4, timeframe: '3 Weeks', threat: 'Malnutrition', action: 'Forage safe edible plants' },
    ],
  },
  {
    id: 'wild-2',
    topic: 'Firecraft: Physics & Friction',
    integration: 'Combustion Chemistry',
    scenario: 'Creating fire requires three components of the fire triangle: Heat (friction), Fuel (dry tinder), and Oxygen.',
    question: 'Why does packing kindling too tightly prevent a fire from starting?',
    answer: 'It suffocates the fire by blocking oxygen flow.',
  },
];
