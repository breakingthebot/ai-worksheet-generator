// src/domain/curriculum/academicYear180.js
// 180-Day Academic Calendar & Curriculum Pacing Engine (36 Weeks × 5 Days / 4 Quarters).
// Connects to: src/components/daily/DailyDashboard.jsx, src/domain/curriculum/dailySchedule.js
// Created: 2026-09-22

/**
 * Global Academic Year Configuration
 * Standard US School Year: 180 Instructional Days across 36 Weeks and 4 Quarters.
 */
export const ACADEMIC_YEAR_CONFIG = {
  totalDays: 180,
  totalWeeks: 36,
  daysPerWeek: 5,
  totalQuarters: 4,
  daysPerQuarter: 45,
};

/**
 * 4 Academic Quarters Metadata & Core Developmental Themes
 */
export const QUARTERS = [
  {
    quarter: 1,
    name: 'Quarter 1: Bedrock Foundations & Diagnostic Baseline',
    weeks: [1, 9],
    days: [1, 45],
    description: 'Perceptual subitizing, single-sound phonemes, living vs. non-living, and spatial mapping.',
    milestone: 'Day 45: Q1 Comprehensive Review & Diagnostic Baseline',
  },
  {
    quarter: 2,
    name: 'Quarter 2: Concrete-to-Pictorial Operations & Structured Decoding',
    weeks: [10, 18],
    days: [46, 90],
    description: 'Addition within 10, digraphs /sh/ & /ch/, 2D geometry, weather cycles, and founding heritage.',
    milestone: 'Day 90: Mid-Year Kindergarten Assessment & 100th Day Preparation',
  },
  {
    quarter: 3,
    name: 'Quarter 3: Subtraction, Place Value & World Communities',
    weeks: [19, 27],
    days: [91, 135],
    description: 'Decomposing teen numbers, subtraction within 10, consonant blends, life cycles, and world geography.',
    milestone: 'Day 100: 100th Day Celebration • Day 135: Q3 Synthesis Challenge',
  },
  {
    quarter: 4,
    name: 'Quarter 4: Mastery, Synthesis & 1st Grade Bridge',
    weeks: [28, 36],
    days: [136, 180],
    description: 'Story word problems with scratchpads, decodable text evidence, 3D shapes, and wilderness STEM.',
    milestone: 'Day 180: Kindergarten Graduation Capstone & 1st Grade Readiness Diagnostic',
  },
];

/**
 * Complete 36-Week Pacing Roadmap across all 4 subjects
 */
export const WEEKLY_PACING_36 = [
  // --- QUARTER 1 (Weeks 1 to 9 / Days 1 to 45) ---
  {
    week: 1,
    quarter: 1,
    days: [1, 5],
    theme: 'Launchpad: Visual Snapshots & Spatial Exploration',
    mathFocus: 'Perceptual Subitizing 1–5 & Five-Frames (CCSS K.CC.B.4, K.CC.B.5)',
    phonicsFocus: 'Continuous Consonants /m/, /s/ & Short-A CVC (OG Phase 1 & 2)',
    scienceFocus: 'Living vs. Non-Living: The 3 Golden Rules (NGSS K-LS1-1)',
    socialStudiesFocus: 'Spatial Sense: Maps vs. Globes, Water & Land (CKHG Unit 1)',
    milestone: 'Day 1: Kindergarten Launch Day',
  },
  {
    week: 2,
    quarter: 1,
    days: [6, 10],
    theme: 'Foundations: Five-Structures & Compass Directions',
    mathFocus: 'Ten-Frames (6–7) & Number Bonds to 5 (Singapore CPA)',
    phonicsFocus: 'Consonants /p/, /t/, /n/, /c/ & Nonsense Word Blending',
    scienceFocus: 'Seed Germination, Animal Insulation & Senses (CKSci K)',
    socialStudiesFocus: 'Cardinal Directions, Map Keys & Room Mapping (CKHG Unit 1)',
    milestone: 'Day 10: 10-Day Bedrock Mastery Badge',
  },
  {
    week: 3,
    quarter: 1,
    days: [11, 15],
    theme: 'Part-Whole Decomposition & Earth Landforms',
    mathFocus: 'Ten-Frames (8–9) & Number Bonds to 7',
    phonicsFocus: 'Short-O and Short-I CVC Word Families (pot, sit, pin)',
    scienceFocus: 'Five Senses: Environmental Data Collection',
    socialStudiesFocus: "Earth's Landforms: Mountains, Rivers, Oceans, Plains",
  },
  {
    week: 4,
    quarter: 1,
    days: [16, 20],
    theme: 'Complements to 10 & Native American Shelters',
    mathFocus: 'Complements to 10 ("Friends of 10") with Ten-Frames',
    phonicsFocus: 'Short-U and Short-E CVC Word Families (sun, pet, net)',
    scienceFocus: 'Weather Patterns: Daily Tracking & Clothing Choices',
    socialStudiesFocus: 'Native American Shelters: Tipis, Pueblos, Longhouses (CKHG Unit 2)',
  },
  {
    week: 5,
    quarter: 1,
    days: [21, 25],
    theme: '5-Vowel Grand Champion & Water Science',
    mathFocus: 'Number Bonds to 10 (Full Part-Whole Decomposition)',
    phonicsFocus: '5-Vowel Grand Champion Mixed CVC Decoding Review',
    scienceFocus: 'Clean Water Filtration Science & Survival STEM',
    socialStudiesFocus: 'Native American Traditions: Reverence for Nature',
  },
  {
    week: 6,
    quarter: 1,
    days: [26, 30],
    theme: 'Counting Cardinality & Founding Leaders',
    mathFocus: 'Counting & Cardinality to 15 (One-to-One Object Matching)',
    phonicsFocus: 'Initial Consonant Blends Introduction (st, sp, sm)',
    scienceFocus: 'Pushes, Pulls & Collision Direction (NGSS K-PS2-1)',
    socialStudiesFocus: 'Founding Presidents: George Washington, Father of Our Country (CKHG Unit 4)',
  },
  {
    week: 7,
    quarter: 1,
    days: [31, 35],
    theme: 'Quantities to 20 & Abraham Lincoln',
    mathFocus: 'Counting & Numeral Formation to 20',
    phonicsFocus: 'Beginning L-Blends (bl, cl, fl) with Elkonin Sound Boxes',
    scienceFocus: 'Day & Night Sky: Sun Shadows and Daylight Patterns',
    socialStudiesFocus: 'Abraham Lincoln: Honest Abe, Books, and Log Cabin',
  },
  {
    week: 8,
    quarter: 1,
    days: [36, 40],
    theme: 'Comparing Quantities & American Symbols',
    mathFocus: 'Comparing Quantities: Balance Scales & "More / Fewer / Same"',
    phonicsFocus: 'Digraph Introduction: Consonant /sh/ (Two letters, one sound)',
    scienceFocus: 'Animal Homes: Desert, Forest, and Ocean Adaptations',
    socialStudiesFocus: 'American Symbols: The Flag (13 stripes, 50 stars) & Liberty Bell',
  },
  {
    week: 9,
    quarter: 1,
    days: [41, 45],
    theme: 'Quarter 1 Diagnostic & Community Helpers',
    mathFocus: 'Q1 Ten-Frame and Number Bond Mastery Assessment',
    phonicsFocus: 'Q1 Decodable Reading Diagnostic (Heart words + CVC)',
    scienceFocus: 'Living World Observation Journal Synthesis',
    socialStudiesFocus: 'Community Helpers & Good Citizenship Responsibilities',
    milestone: 'Day 45: Quarter 1 Capstone & Diagnostic Review',
  },

  // --- QUARTER 2 (Weeks 10 to 18 / Days 46 to 90) ---
  {
    week: 10,
    quarter: 2,
    days: [46, 50],
    theme: 'Operations Launch: Addition within 5',
    mathFocus: 'Addition within 5 with Physical Manipulatives and CPA Lines',
    phonicsFocus: 'Digraph /ch/ Sound Differentiation & Word Building',
    scienceFocus: 'Plant Structures: Roots, Stems, and Leaves Functions',
    socialStudiesFocus: 'Let’s Explore Our World: Continents & Hemispheres',
  },
  {
    week: 11,
    quarter: 2,
    days: [51, 55],
    theme: 'Addition within 10 & Ocean Exploration',
    mathFocus: 'Addition within 10 using Dual-Color Ten-Frames',
    phonicsFocus: 'Digraph /th/ (Voiced vs. Unvoiced: this vs. thin)',
    scienceFocus: 'Sunlight and Water Requirements for Seed Sprouting',
    socialStudiesFocus: 'Ocean Voyages: Sailing the Atlantic Ocean',
  },
  {
    week: 12,
    quarter: 2,
    days: [56, 60],
    theme: '2D Geometry Foundations & Digraph /wh/',
    mathFocus: '2D Shapes: Identifying Circles, Squares, Triangles',
    phonicsFocus: 'Digraph /wh/ & 4-Sound Digraph Decodable Passages',
    scienceFocus: 'Animal Defense Mechanisms: Fur, Camouflage & Shells',
    socialStudiesFocus: 'The Pilgrims and the First Thanksgiving Partnership',
  },
  {
    week: 13,
    quarter: 2,
    days: [61, 65],
    theme: 'Geometric Attributes & Red Heart Words',
    mathFocus: 'Rectangles, Hexagons, Sides & Corners Counting',
    phonicsFocus: 'High-Frequency Red Words: "the", "was", "said", "are"',
    scienceFocus: 'Properties of Light: Transparent vs. Opaque Shadows',
    socialStudiesFocus: 'Mount Rushmore: Thomas Jefferson and the Declaration',
  },
  {
    week: 14,
    quarter: 2,
    days: [66, 70],
    theme: 'Spatial Relations & Ending Blends',
    mathFocus: 'Positional Spatial Terms: Above, Below, Beside, In Front',
    phonicsFocus: 'Ending Consonant Blends (mp, nd, st) in CVC Words',
    scienceFocus: 'Vibrations Making Sound: Drums, Strings & Whispers',
    socialStudiesFocus: 'Mount Rushmore: Theodore Roosevelt & Nature Parks',
  },
  {
    week: 15,
    quarter: 2,
    days: [71, 75],
    theme: 'Number Line Addition & Winter Science',
    mathFocus: 'Addition within 10 on the Calibrated Number Line',
    phonicsFocus: 'Ending Blends (sk, ft, lt, lk) & Word Building',
    scienceFocus: 'Winter Weather, Snow Crystals & Freezing Temperatures',
    socialStudiesFocus: 'American Monuments: The Statue of Liberty & Harbor',
  },
  {
    week: 16,
    quarter: 2,
    days: [76, 80],
    theme: 'Missing Addends & Compound Words',
    mathFocus: 'Missing Addends ($4 + \\_ = 10$) using Ten-Frame Complements',
    phonicsFocus: 'Compound Words: sun + fish = sunfish, cat + nip = catnip',
    scienceFocus: 'How Animals Prepare for Winter: Hibernation & Migration',
    socialStudiesFocus: 'The Pledge of Allegiance & Meaning of Freedom',
  },
  {
    week: 17,
    quarter: 2,
    days: [81, 85],
    theme: 'Addition Word Problems & Two-Sentence Stories',
    mathFocus: 'Result-Unknown Addition Word Problems with Draw Boxes',
    phonicsFocus: 'Decodable 2-Sentence Stories with Text Evidence Questions',
    scienceFocus: 'Solids and Liquids: Ice Melting into Water',
    socialStudiesFocus: 'Community Helpers: Emergency First Responders',
  },
  {
    week: 18,
    quarter: 2,
    days: [86, 90],
    theme: 'Mid-Year Milestone & Portfolio Assessment',
    mathFocus: 'Mid-Year Addition and Spatial Geometry Diagnostic',
    phonicsFocus: 'Mid-Year Phonics Screening (Digraphs, Blends & Red Words)',
    scienceFocus: 'Science Inquiry Experiment: Which Melts Faster?',
    socialStudiesFocus: 'Mid-Year Civics Review & Community Citizenship Badge',
    milestone: 'Day 90: Mid-Year Kindergarten Assessment Completed',
  },

  // --- QUARTER 3 (Weeks 19 to 27 / Days 91 to 135) ---
  {
    week: 19,
    quarter: 3,
    days: [91, 95],
    theme: 'Base-10 Foundations: Teen Numbers 11–15',
    mathFocus: 'Teen Numbers 11–15 as 10 Ones and Some More Ones (CCSS K.NBT.A.1)',
    phonicsFocus: 'Beginning R-Blends (br, cr, dr, fr, gr, pr, tr)',
    scienceFocus: 'Sun and Shade: Surface Temperatures on Dirt vs. Concrete',
    socialStudiesFocus: 'The Seven Continents: North & South America',
  },
  {
    week: 20,
    quarter: 3,
    days: [96, 100],
    theme: '100th Day Celebration: Teen Numbers 16–19 & 100-Chart',
    mathFocus: 'Teen Numbers 16–19 & Counting to 100 by 10s',
    phonicsFocus: 'Triple Blends (scr, spr, str) Auditory Identification',
    scienceFocus: 'Magnets: Attraction and Repulsion Experiments',
    socialStudiesFocus: 'The Seven Continents: Europe and Africa',
    milestone: 'Day 100: The 100th Day of School Celebration!',
  },
  {
    week: 21,
    quarter: 3,
    days: [101, 105],
    theme: 'Subtraction Foundations: Subtract within 5',
    mathFocus: 'Subtraction within 5 using Crossing-Out and CPA Diagrams',
    phonicsFocus: 'Short-Vowel Word Family Sorts (-at, -an, -op, -it, -ug)',
    scienceFocus: 'Plant Life Cycles: From Tiny Seed to Flowering Blossom',
    socialStudiesFocus: 'The Seven Continents: Asia, Australia, and Antarctica',
  },
  {
    week: 22,
    quarter: 3,
    days: [106, 110],
    theme: 'Subtraction within 10 from Ten-Frames',
    mathFocus: 'Subtraction within 10 from Full Ten-Frames ($10 - 3 = 7$)',
    phonicsFocus: 'Sentence Mechanics: Capital Letter for First Word',
    scienceFocus: 'Animal Life Cycles: The Frog (Egg, Tadpole, Froglet, Frog)',
    socialStudiesFocus: 'The Five Oceans: Pacific, Atlantic, Indian, Southern, Arctic',
  },
  {
    week: 23,
    quarter: 3,
    days: [111, 115],
    theme: 'Part-Whole Subtraction & Butterfly Life Cycle',
    mathFocus: 'Subtraction with Number Bonds (Whole minus Part equals Part)',
    phonicsFocus: 'Sentence Mechanics: Periods, Question Marks, Exclamation Points',
    scienceFocus: 'Butterfly Metamorphosis: Egg, Caterpillar, Chrysalis, Butterfly',
    socialStudiesFocus: 'World Cultures: Traditional Homes Around the Globe',
  },
  {
    week: 24,
    quarter: 3,
    days: [116, 120],
    theme: 'Mixed Addition and Subtraction within 5',
    mathFocus: 'Mixed (+ / -) Fact Fluency Sprints within 5',
    phonicsFocus: 'Informational Text Close-Reading with Line Numbers',
    scienceFocus: 'Earth’s Natural Resources: Soil, Rocks, Water, and Air',
    socialStudiesFocus: 'Community Economics: Needs vs. Wants',
  },
  {
    week: 25,
    quarter: 3,
    days: [121, 125],
    theme: 'Non-Standard Measurement & Environmental Care',
    mathFocus: 'Measuring Lengths with Paperclips, Unifix Cubes & Footsteps',
    phonicsFocus: 'Orthographic Heart Words: "they", "have", "you", "come"',
    scienceFocus: 'Recycling, Composting & Environmental Stewardship',
    socialStudiesFocus: 'Community Helpers: Doctors, Nurses, and Paramedics',
  },
  {
    week: 26,
    quarter: 3,
    days: [126, 130],
    theme: 'Weight & Capacity Comparison',
    mathFocus: 'Comparing Weights (Heavier vs. Lighter) & Capacity (More vs. Less)',
    phonicsFocus: 'Decodable Paragraph Fluency Drills with Timer Bar',
    scienceFocus: 'Wilderness STEM: Animal Tracks Identification',
    socialStudiesFocus: 'Good Citizenship: Voting and Fairness in Games',
  },
  {
    week: 27,
    quarter: 3,
    days: [131, 135],
    theme: 'Quarter 3 Synthesis Challenge & Science Fair Day',
    mathFocus: 'Q3 Fact Fluency & Teen Number Decomposing Review',
    phonicsFocus: 'Q3 Reading Comprehension Diagnostic & Sentence Dictation',
    scienceFocus: 'Backyard Biodiversity Safari: Mini Science Fair',
    socialStudiesFocus: 'Quarter 3 World Geography Synthesis Map Project',
    milestone: 'Day 135: Quarter 3 Synthesis Challenge Completed',
  },

  // --- QUARTER 4 (Weeks 28 to 36 / Days 136 to 180) ---
  {
    week: 28,
    quarter: 4,
    days: [136, 140],
    theme: 'Story Problem Clinic & Creative Sentences',
    mathFocus: 'Story Problems: Both Addends Unknown ($5 = 2 + 3 = 1 + 4$)',
    phonicsFocus: 'Writing Complete Sentences on Primary Handwriting Guidelines',
    scienceFocus: 'Wilderness STEM: The Physiological Rule of Threes',
    socialStudiesFocus: 'Goods and Services: Producers, Consumers & Markets',
  },
  {
    week: 29,
    quarter: 4,
    days: [141, 145],
    theme: '3D Geometry Exploration: Spheres & Cubes',
    mathFocus: '3D Shapes: Spheres and Cubes in Real Life (Roll vs. Stack)',
    phonicsFocus: 'Plural Endings (-s and -es) with Decodable Base Words',
    scienceFocus: 'Wilderness STEM: Finding Clean Water & Filtering Sediment',
    socialStudiesFocus: 'American Currency: Identifying Pennies and Nickels',
  },
  {
    week: 30,
    quarter: 4,
    days: [146, 150],
    theme: '3D Cylinders, Cones & Dimes',
    mathFocus: '3D Shapes: Cylinders, Cones & Flat vs. Curved Faces',
    phonicsFocus: 'Inflectional Ending -ing on Decodable Action Verbs (jump -> jumping)',
    scienceFocus: 'Wilderness STEM: Building a Debris Shelter for Warmth',
    socialStudiesFocus: 'American Currency: Counting Dimes and Pennies',
  },
  {
    week: 31,
    quarter: 4,
    days: [151, 155],
    theme: 'The 100-Chart Matrix & Skip Counting',
    mathFocus: 'The 100-Chart Matrix: Skip Counting by 10s and 5s to 100',
    phonicsFocus: 'Compound Sentences with Conjunction "and"',
    scienceFocus: 'Wilderness STEM: Orienteering with Sun-Shadow Sticks',
    socialStudiesFocus: 'National Parks: Protecting Mountains, Forests & Rivers',
  },
  {
    week: 32,
    quarter: 4,
    days: [156, 160],
    theme: 'Counting to 100 by 1s & Close Reading Passages',
    mathFocus: 'Counting to 100 by 1s from Any Starting Number (CCSS K.CC.A.2)',
    phonicsFocus: 'Passage Close Reading: "The Helpful Honeybee"',
    scienceFocus: 'Honeybee Pollination & Plant Fertilization',
    socialStudiesFocus: 'American Inventors: Alexander Graham Bell & Thomas Edison',
  },
  {
    week: 33,
    quarter: 4,
    days: [161, 165],
    theme: 'Mixed Fact Fluency Drills within 10',
    mathFocus: 'Timed 12-Problem Fact Sprints (Addition and Subtraction within 10)',
    phonicsFocus: 'Passage Close Reading: "The Beaver Dam Engineers"',
    scienceFocus: 'Animal Architects: Beavers, Birds, and Spider Webs',
    socialStudiesFocus: 'American History: The Liberty Bell & Freedom Memorials',
  },
  {
    week: 34,
    quarter: 4,
    days: [166, 170],
    theme: 'First Grade Readiness: Place Value Preview',
    mathFocus: 'Place Value Preview: Grouping 10 Sticks into a Bundle of Ten',
    phonicsFocus: 'Silent-E Sneak Peek: Long Vowel Sounds (cap -> cape)',
    scienceFocus: 'The Water Cycle: Evaporation, Clouds, and Rain',
    socialStudiesFocus: 'Map Skills Mastery: Drawing a Complete Neighborhood Map',
  },
  {
    week: 35,
    quarter: 4,
    days: [171, 175],
    theme: 'Comprehensive Kindergarten Cumulative Review',
    mathFocus: 'Comprehensive Math Portfolio: Numbers, Shapes, Operations',
    phonicsFocus: 'Comprehensive Phonics Review: All Sounds, Blends, and Red Words',
    scienceFocus: 'Comprehensive Science Portfolio: Earth, Life, Physical Inquiry',
    socialStudiesFocus: 'Comprehensive Civics Portfolio: American Symbols & History',
    milestone: 'Day 175: Final Portfolio Completed',
  },
  {
    week: 36,
    quarter: 4,
    days: [176, 180],
    theme: 'Kindergarten Graduation & 1st Grade Bridge',
    mathFocus: 'First Grade Readiness Diagnostic Sprint & Certificate',
    phonicsFocus: 'First Grade Reading Bridge Passage & Certificate',
    scienceFocus: 'Master Junior Scientist Badge & Investigation Log',
    socialStudiesFocus: 'Young Citizen Award & Kindergarten Graduation Day',
    milestone: 'Day 180: Kindergarten Graduation Celebration & 1st Grade Bridge!',
  },
];

/**
 * Returns academic pacing details for any given day in the 180-day school year.
 * @param {number} dayNumber - Day number from 1 to 180.
 * @returns {object} Pacing details including Quarter, Week, Day, Themes, and Milestones.
 */
export function getAcademicPacingForDay(dayNumber = 1) {
  const safeDay = Math.max(1, Math.min(180, Math.floor(dayNumber)));
  
  // Calculate quarter (1 to 4)
  const quarterIndex = Math.min(3, Math.floor((safeDay - 1) / 45));
  const quarterInfo = QUARTERS[quarterIndex];
  
  // Calculate week (1 to 36)
  const weekNumber = Math.min(36, Math.floor((safeDay - 1) / 5) + 1);
  const weekInfo = WEEKLY_PACING_36.find((w) => w.week === weekNumber) || WEEKLY_PACING_36[0];
  
  const progressPercent = Math.round((safeDay / 180) * 100);
  
  return {
    day: safeDay,
    totalDays: 180,
    progressPercent,
    quarter: quarterInfo.quarter,
    quarterName: quarterInfo.name,
    quarterDescription: quarterInfo.description,
    week: weekNumber,
    weekDays: weekInfo.days,
    theme: weekInfo.theme,
    mathFocus: weekInfo.mathFocus,
    phonicsFocus: weekInfo.phonicsFocus,
    scienceFocus: weekInfo.scienceFocus,
    socialStudiesFocus: weekInfo.socialStudiesFocus,
    milestone: weekInfo.milestone || null,
  };
}

/**
 * Returns the metadata for a specific academic quarter.
 * @param {number} qNum - Quarter number (1, 2, 3, or 4).
 * @returns {object}
 */
export function getQuarterInfo(qNum = 1) {
  const safeQ = Math.max(1, Math.min(4, qNum));
  return QUARTERS[safeQ - 1];
}

/**
 * Returns all 9 weeks for a specific quarter.
 * @param {number} qNum - Quarter number (1 to 4).
 * @returns {Array}
 */
export function getWeeksForQuarter(qNum = 1) {
  const safeQ = Math.max(1, Math.min(4, qNum));
  return WEEKLY_PACING_36.filter((w) => w.quarter === safeQ);
}
