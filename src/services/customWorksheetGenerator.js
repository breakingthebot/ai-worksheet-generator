// src/services/customWorksheetGenerator.js
// Custom Adventure Worksheet Generator powering personalized homeschool learning experiences.
// Supports Google Gemini API generation with rich deterministic pedagogical fallback.
// Connects to: src/components/custom/CustomAdventureStudio.jsx
// Created: 2026-09-22

/**
 * Standard curriculum prompts by subject and grade for fallback and guidance.
 */
const SUBJECT_CURRICULUM_ANCHORS = {
  Math: {
    Kindergarten: 'Counting objects, subitizing to 5, addition within 5 using fingers or objects (CCSS.MATH.K.OA.A.2)',
    '1st Grade': 'Addition and subtraction word problems within 20, tens and ones (CCSS.MATH.1.OA.A.1)',
    '2nd Grade': 'Two-step addition/subtraction within 100, money, simple arrays (CCSS.MATH.2.OA.A.1)',
    '3rd Grade': 'Multiplication, division concepts, fractions as numbers on a number line (CCSS.MATH.3.OA.A.3)',
    '4th Grade': 'Multi-digit multiplication, division with remainders, fraction equivalence (CCSS.MATH.4.OA.A.3)',
    '5th Grade': 'Fractions with unlike denominators, decimals to thousandths, volume (CCSS.MATH.5.NF.A.1)',
  },
  'Language Arts': {
    Kindergarten: 'CVC words, initial sounds, simple rhyming and sight words (CCSS.ELA-LITERACY.RF.K.2)',
    '1st Grade': 'Short vowels, digraphs, asking and answering questions about key details (CCSS.ELA-LITERACY.RL.1.1)',
    '2nd Grade': 'Reading comprehension, character motives, capitalization and punctuation (CCSS.ELA-LITERACY.RL.2.1)',
    '3rd Grade': 'Paragraph main idea, cause and effect, prefixes and suffixes (CCSS.ELA-LITERACY.RI.3.2)',
    '4th Grade': 'Inferences, summarizing, figurative language (metaphors, similes) (CCSS.ELA-LITERACY.RL.4.1)',
    '5th Grade': 'Theme analysis, comparing text perspectives, advanced vocabulary (CCSS.ELA-LITERACY.RL.5.2)',
  },
  Science: {
    Kindergarten: 'Living vs non-living, weather patterns, animal needs (NGSS K-LS1-1)',
    '1st Grade': 'Plant parts, light and sound waves, animal parents and offspring (NGSS 1-LS1-1)',
    '2nd Grade': 'Habitats, properties of materials, seed dispersal (NGSS 2-LS2-2)',
    '3rd Grade': 'Forces and interactions, life cycles, fossils and environmental traits (NGSS 3-PS2-1)',
    '4th Grade': 'Energy transfer, erosion and earth features, sensory processing (NGSS 4-PS3-2)',
    '5th Grade': 'Ecosystem food webs, water cycle, matter and chemical changes (NGSS 5-LS2-1)',
  },
  'Social Studies': {
    Kindergarten: 'Family traditions, neighborhood helpers, basic map symbols',
    '1st Grade': 'Community roles, landforms, goods and services in a town',
    '2nd Grade': 'Continents and oceans, historical explorers, producers and consumers',
    '3rd Grade': 'Local community history, geography, environmental adaptation',
    '4th Grade': 'State history, indigenous peoples, government branches',
    '5th Grade': 'Early American civilizations, colonial life, the Constitution and rights',
  },
};

/**
 * Deterministic generator that constructs a fun, personalized adventure worksheet
 * incorporating the student name, pet/friends, grade level, and subject.
 */
export function generateLocalAdventureWorksheet({
  grade = '2nd Grade',
  subject = 'Language Arts',
  topic = 'A brave little toaster goes on an adventure',
  studentName = 'Leo',
  additionalCharacters = 'his dog Buster',
}) {
  const safeName = studentName.trim() || 'Explorer';
  const safeCompanions = additionalCharacters.trim() ? additionalCharacters.trim() : 'a trusty backpack';
  const cleanTopic = topic.trim() || 'an exciting backyard discovery';
  const standard = SUBJECT_CURRICULUM_ANCHORS[subject]?.[grade] || 'Elementary Learning Progression';

  // Construct context-rich questions based on subject
  if (subject === 'Math') {
    return {
      title: `${safeName}'s Great ${cleanTopic.slice(0, 30)} Math Mission`,
      subtitle: `Help ${safeName} and ${safeCompanions} solve these real-world math challenges!`,
      passage: `One sunny morning, ${safeName} and ${safeCompanions} set out on a special adventure involving ${cleanTopic}. To complete their mission successfully, they need to count their supplies, calculate their travel distances, and solve the math clues hidden along the way.`,
      kidBadge: `⭐ ${safeName}'s Math Adventure`,
      parentGuide: {
        whyWeAreDoingThis: `Personalized word problems help children decontextualize real-world narratives into mathematical operations without testing anxiety.`,
        standard,
        whatToWatchFor: `Encourage ${safeName} to underline the numbers in each story before writing the equation.`,
        verbalCue: `“What numbers did ${safeName} start with, and what is happening in the story?”`,
      },
      questions: [
        {
          questionText: `${safeName} counted 12 special trail markers near the path. ${safeCompanions} spotted 7 more hidden behind a boulder. How many trail markers did they find altogether?`,
          answerType: 'box',
          scratchpadHint: 'Draw the trail markers, write the equation, and find the total.',
        },
        {
          questionText: `Later in the afternoon, ${safeName} had 18 shiny pebbles in a collection pouch. ${safeName} shared 6 of them with ${safeCompanions}. How many pebbles does ${safeName} have left?`,
          answerType: 'box',
          scratchpadHint: 'Draw the pouch, cross out the shared pebbles, and write the subtraction equation.',
        },
        {
          questionText: `Before heading home, ${safeName} needs to pack 3 snack bags. If each bag gets 4 apple slices, how many apple slices are needed in total?`,
          answerType: 'lines',
          scratchpadHint: 'Write your number sentence and explain how you figured it out.',
        },
      ],
      answerKey: [
        { number: 1, solution: '12 + 7 = 19 trail markers altogether.' },
        { number: 2, solution: '18 - 6 = 12 pebbles remaining.' },
        { number: 3, solution: '3 groups of 4 = 12 apple slices (or 4 + 4 + 4 = 12).' },
      ],
    };
  }

  if (subject === 'Science') {
    return {
      title: `${safeName}'s Field Investigation: ${cleanTopic.slice(0, 32)}`,
      subtitle: `Observe, hypothesize, and record field notes with ${safeName} and ${safeCompanions}!`,
      passage: `${safeName} grabbed a magnifying glass and a field notebook to investigate ${cleanTopic}. Along with ${safeCompanions}, ${safeName} noticed something extraordinary in nature. The living creatures in the area were busy finding food and building shelters, while natural forces like sunlight and rushing water were constantly shaping the landscape.`,
      kidBadge: `🔬 Junior Scientist ${safeName}`,
      parentGuide: {
        whyWeAreDoingThis: `Connects narrative reading with scientific observation, hypothesis formation, and evidence-based reasoning.`,
        standard,
        whatToWatchFor: `Listen for whether ${safeName} uses scientific vocabulary (living, habitat, energy, observation) rather than just storytelling.`,
        verbalCue: `“What clues did ${safeName} observe with the magnifying glass?”`,
      },
      questions: [
        {
          questionText: `What did ${safeName} and ${safeCompanions} observe during their field investigation? Name two living things and one non-living thing they encountered:`,
          answerType: 'lines',
        },
        {
          questionText: `Draw a detailed field diagram of what ${safeName} and ${safeCompanions} discovered during the ${cleanTopic}:`,
          answerType: 'box',
          scratchpadHint: 'Sketch your discovery and label at least two important parts.',
        },
        {
          questionText: `Why do you think the living creatures needed shelter and clean water in this environment? Explain what would happen without them:`,
          answerType: 'lines',
        },
      ],
      answerKey: [
        { number: 1, solution: 'Living things (animals, plants); Non-living things (rocks, water, sunlight).' },
        { number: 2, solution: 'Student field sketch showing the environment with clear descriptive labels.' },
        { number: 3, solution: 'All living organisms require water for hydration and shelter for temperature control and predator safety.' },
      ],
    };
  }

  if (subject === 'Social Studies') {
    return {
      title: `${safeName}'s Community & World Expedition: ${cleanTopic.slice(0, 30)}`,
      subtitle: `Explore geography, community leaders, and history with ${safeName}!`,
      passage: `${safeName} and ${safeCompanions} discovered a vintage hand-drawn explorer map that described ${cleanTopic}. The map had a compass rose showing North, South, East, and West, with landmarks pointing toward different parts of the community where people work together every day.`,
      kidBadge: `🧭 Explorer ${safeName}`,
      parentGuide: {
        whyWeAreDoingThis: `Builds spatial awareness, map reading skills, and an understanding of community roles and history.`,
        standard,
        whatToWatchFor: `Check if ${safeName} understands cardinal directions and the difference between natural landforms and human-made places.`,
        verbalCue: `“Look at the compass rose—which way is ${safeName} traveling?”`,
      },
      questions: [
        {
          questionText: `Imagine ${safeName} is mapping out this journey. Draw a map showing the start location, two landmarks, and a compass rose:`,
          answerType: 'box',
          scratchpadHint: 'Draw your map key and compass rose (N, S, E, W).',
        },
        {
          questionText: `Who in the community could help ${safeName} and ${safeCompanions} learn more about ${cleanTopic}? Describe their job:`,
          answerType: 'lines',
        },
        {
          questionText: `Write one rule that ${safeName} and all travelers should follow to protect the places they visit:`,
          answerType: 'lines',
        },
      ],
      answerKey: [
        { number: 1, solution: 'Map with symbols, landmarks, and cardinal compass points.' },
        { number: 2, solution: 'Identifies a community helper (librarian, ranger, historian) and describes their role.' },
        { number: 3, solution: 'Leave no trace, respect property, or follow posted safety rules.' },
      ],
    };
  }

  // Default: Language Arts / Reading & Phonics
  return {
    title: `${safeName}'s Grand Adventure: ${cleanTopic.slice(0, 32)}`,
    subtitle: `Read the story closely and answer the reading comprehension questions!`,
    passage: `It was a crisp morning when ${safeName} heard a curious rustle outside. ${safeName} called over ${safeCompanions} to take a closer look. Together, they discovered that ${cleanTopic}! 
    
"Look at that!" exclaimed ${safeName}, pointing toward the sparkling trail ahead. ${safeCompanions} wagged with excitement as they followed the path step by step. They worked as an unstoppable team, solving every riddle and overcoming every challenge along the way until they proudly completed their grand journey.`,
    kidBadge: `📖 Author & Hero: ${safeName}`,
    parentGuide: {
      whyWeAreDoingThis: `Combines high-interest personalized storytelling with close reading comprehension and text-evidence citation.`,
      standard,
      whatToWatchFor: `Ask ${safeName} to read the passage out loud. For Question 1, prompt them to point to the sentence where the answer appears.`,
      verbalCue: `“Find the part of the story where ${safeName} sees the sparkling trail!”`,
    },
    questions: [
      {
        questionText: `Who was on the adventure with ${safeName}, and how did they work together as a team?`,
        answerType: 'lines',
      },
      {
        questionText: `Draw your favorite scene from the story where ${safeName} and ${safeCompanions} discover ${cleanTopic}:`,
        answerType: 'box',
        scratchpadHint: 'Draw the characters and add speech bubbles for what they say!',
      },
      {
        questionText: `What do you think ${safeName} and ${safeCompanions} should explore next on their upcoming journey? Write 2 complete sentences:`,
        answerType: 'lines',
      },
    ],
    answerKey: [
      { number: 1, solution: `${safeName} was with ${safeCompanions}; they followed clues and solved riddles together.` },
      { number: 2, solution: `Child illustration depicting the characters exploring ${cleanTopic}.` },
      { number: 3, solution: `Two complete sentences with capital letters and ending punctuation describing a future adventure.` },
    ],
  };
}

/**
 * Main export that attempts Gemini API generation if key is provided,
 * and seamlessly falls back to the rich local pedagogical generator.
 */
export async function generateCustomAdventureWorksheet({
  grade = '2nd Grade',
  subject = 'Language Arts',
  topic = 'A brave little toaster goes on an adventure',
  studentName = 'Leo',
  additionalCharacters = 'his dog Buster',
  apiKey = '',
}) {
  const activeKey = apiKey.trim() || import.meta.env?.VITE_GEMINI_API_KEY || '';

  // If no Gemini key is provided, use the deterministic local pedagogical engine
  if (!activeKey) {
    return generateLocalAdventureWorksheet({
      grade,
      subject,
      topic,
      studentName,
      additionalCharacters,
    });
  }

  // Live Google Gemini API call
  try {
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${activeKey}`;
    const prompt = `You are an expert elementary curriculum designer creating a custom worksheet for a single homeschooled ${grade} student named ${studentName}.
Subject: ${subject}
Topic: "${topic}"
Supporting characters (friends/family/pets) to include: ${additionalCharacters || 'none'}.

CRITICAL INSTRUCTIONS:
- Make ${studentName} the main character of the passage and the questions/problems!
- Include ${additionalCharacters || 'their companion'} naturally in the story.
- DO NOT mention traditional school buildings, classrooms, teachers, bells, or generic classmates. This is a homeschool adventure environment.
- Tailor all vocabulary and cognitive challenge strictly to ${grade} level.
- Provide 3 to 5 questions where answerType is either 'lines' (for written answers) or 'box' (for math work/drawings).`;

    const payload = {
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: 'OBJECT',
          properties: {
            title: { type: 'STRING', description: 'A catchy, fun title for the worksheet' },
            subtitle: { type: 'STRING', description: 'Brief instructions or subtitle' },
            passage: { type: 'STRING', description: 'A short story or introductory passage' },
            questions: {
              type: 'ARRAY',
              description: 'A list of 3 to 5 questions or problems',
              items: {
                type: 'OBJECT',
                properties: {
                  questionText: { type: 'STRING', description: 'The question or math problem' },
                  answerType: { type: 'STRING', description: "'lines' for written answers, or 'box' for drawings/scratchpad" },
                },
                required: ['questionText', 'answerType'],
              },
            },
          },
          required: ['title', 'subtitle', 'passage', 'questions'],
        },
      },
    };

    const res = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      const data = await res.json();
      const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (rawText) {
        const parsed = JSON.parse(rawText);
        return {
          ...parsed,
          kidBadge: `⭐ ${studentName}'s Custom Sheet`,
          parentGuide: {
            whyWeAreDoingThis: `Custom student-centered storytelling anchors ${subject} skills in your child's personal interests.`,
            standard: SUBJECT_CURRICULUM_ANCHORS[subject]?.[grade] || 'Homeschool Learning Target',
            whatToWatchFor: `Review answers with ${studentName} and celebrate their independent thinking.`,
            verbalCue: `“You are the star of this adventure! Read each problem carefully.”`,
          },
          answerKey: parsed.questions.map((q, idx) => ({
            number: idx + 1,
            solution: `Review child's work for: ${q.questionText.slice(0, 50)}...`,
          })),
        };
      }
    }
  } catch (err) {
    console.warn('Gemini API call failed, falling back to local generator:', err);
  }

  // Graceful fallback
  return generateLocalAdventureWorksheet({
    grade,
    subject,
    topic,
    studentName,
    additionalCharacters,
  });
}
