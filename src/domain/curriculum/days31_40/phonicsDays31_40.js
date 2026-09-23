// src/domain/curriculum/days31_40/phonicsDays31_40.js
// Kindergarten Phonics & Reading Curriculum: Days 31 to 40 (Weeks 7–8 / Pre-Q1 Assessment Milestone)
// Focus: Science of Reading / Orton-Gillingham Initial Consonant Blends (L-blends, R-blends, S-blends, Blend vs. Digraph Contrast, Pre-Q1 Champion Reader)
// Standards: CCSS.ELA-LITERACY.RF.K.2, RF.K.3, RF.K.4
// Created: 2026-09-22

export const phonicsDays31_40 = [
  // -------------------------------------------------------------------------
  // DAY 31: Initial L-Blends Part 1: bl & cl
  // -------------------------------------------------------------------------
  {
    day: 31,
    title: 'Initial L-Blends Part 1: bl & cl (black, blob, clap, clock)',
    standard: 'CCSS.ELA-LITERACY.RF.K.2 & RF.K.3 (Initial Consonant Blends bl, cl)',
    strictBoundary: 'Initial l-blends bl and cl with short vowels in CVC/CCVC words. No r-blends, s-blends, or silent-e.',
    script: {
      say: '“Listen to my sounds: /b/ /l/ -> bl! Two consonants standing together side by side, but each letter keeps its own sound! Let’s blend: bl-a-ck -> black!”',
      do: 'Tap two fingers together closely to show the two letters are next to each other, but hold up 2 fingers to show they are 2 distinct sounds.',
      lookFor: 'Understands that in a blend, both consonant sounds are pronounced smoothly, unlike a digraph which makes one brand-new sound.',
    },
    generateSheet: (variant = 1) => ({
      id: `phonics-d31-v${variant}`,
      title: 'Phonics Day 31: Initial L-Blends (bl & cl)',
      subject: 'phonics',
      grade: 'K',
      instructions: 'Listen to each word. Blend the two consonant sounds together and write the missing blend letters bl or cl!',
      kidDirections: {
        text: '👂 Hear two sounds! ✏️ Write bl or cl! 📖 Read the blend words!',
        icons: ['👂', '✏️', '📖'],
        badge: 'L-Blend Pioneer',
      },
      problems: [
        {
          id: 'p1',
          type: 'phonics-dictation',
          number: 1,
          word: 'black',
          prompt: 'Look at the color: [ _ _ ] a c k. Write the blend bl!',
          phonemes: ['b', 'l', 'a', 'ck'],
        },
        {
          id: 'p2',
          type: 'phonics-dictation',
          number: 2,
          word: 'clap',
          prompt: 'Clap your hands: [ _ _ ] a p. Write the blend cl!',
          phonemes: ['c', 'l', 'a', 'p'],
        },
        {
          id: 'p3',
          type: 'phonics-dictation',
          number: 3,
          word: 'blob',
          prompt: 'A round drop of paint: [ _ _ ] o b. Write the blend bl!',
          phonemes: ['b', 'l', 'o', 'b'],
        },
        {
          id: 'p4',
          type: 'phonics-dictation',
          number: 4,
          word: 'clip',
          prompt: 'A paper clip: [ _ _ ] i p. Write the blend cl!',
          phonemes: ['c', 'l', 'i', 'p'],
        },
      ],
      decodableSentences: [
        'The black cat can clap.',
        'Can you clip the black tag?',
      ],
      cutStrip: {
        type: 'word-tiles',
        stage: 'Ages 4-6',
        items: ['bl-ack', 'cl-ap', 'bl-ob', 'cl-ip'],
      },
      answerKey: [
        { number: 1, solution: 'bl (black: /b/ /l/ /æ/ /k/)' },
        { number: 2, solution: 'cl (clap: /k/ /l/ /æ/ /p/)' },
        { number: 3, solution: 'bl (blob: /b/ /l/ /ɒ/ /b/)' },
        { number: 4, solution: 'cl (clip: /k/ /l/ /ɪ/ /p/)' },
      ],
    }),
  },

  // -------------------------------------------------------------------------
  // DAY 32: Initial L-Blends Part 2: fl, gl & pl
  // -------------------------------------------------------------------------
  {
    day: 32,
    title: 'Initial L-Blends Part 2: fl, gl, pl (flag, flip, glad, plug, plum)',
    standard: 'CCSS.ELA-LITERACY.RF.K.2 & RF.K.3 (Initial Consonant Blends fl, gl, pl)',
    strictBoundary: 'Initial l-blends fl, gl, and pl with short vowels. No blends at end of words or long vowel patterns.',
    script: {
      say: '“Let’s meet more friends with the letter L! /f/ /l/ makes fl as in flag. /g/ /l/ makes gl as in glad. /p/ /l/ makes pl as in plum!”',
      do: 'Have child say /f/ with upper teeth on lower lip, then immediately transition to /l/ with tongue behind upper front teeth.',
      lookFor: 'Smooth co-articulation of the two phonemes without inserting a vowel sound (/fuh-luh/ -> correct: /fl/).',
    },
    generateSheet: (variant = 1) => ({
      id: `phonics-d32-v${variant}`,
      title: 'Phonics Day 32: Initial L-Blends (fl, gl & pl)',
      subject: 'phonics',
      grade: 'K',
      instructions: 'Listen to each word. Choose the correct blend (fl, gl, or pl) to complete the word!',
      kidDirections: {
        text: '👂 Listen to the blend! ✏️ Write fl, gl, or pl! 🎯 Read like a champ!',
        icons: ['👂', '✏️', '🎯'],
        badge: 'Blend Builder',
      },
      problems: [
        {
          id: 'p1',
          type: 'phonics-dictation',
          number: 1,
          word: 'flag',
          prompt: 'The red, white, and blue [ _ _ ] a g. Write the blend fl!',
          phonemes: ['f', 'l', 'a', 'g'],
        },
        {
          id: 'p2',
          type: 'phonics-dictation',
          number: 2,
          word: 'glad',
          prompt: 'Happy and joyful: [ _ _ ] a d. Write the blend gl!',
          phonemes: ['g', 'l', 'a', 'd'],
        },
        {
          id: 'p3',
          type: 'phonics-dictation',
          number: 3,
          word: 'plum',
          prompt: 'A sweet purple fruit: [ _ _ ] u m. Write the blend pl!',
          phonemes: ['p', 'l', 'u', 'm'],
        },
        {
          id: 'p4',
          type: 'phonics-dictation',
          number: 4,
          word: 'flip',
          prompt: 'A pancake can [ _ _ ] i p in the pan! Write the blend fl!',
          phonemes: ['f', 'l', 'i', 'p'],
        },
      ],
      decodableSentences: [
        'The glad pig had a plum.',
        'Flip the big red flag!',
      ],
      cutStrip: {
        type: 'word-tiles',
        stage: 'Ages 4-6',
        items: ['fl-ag', 'gl-ad', 'pl-um', 'fl-ip'],
      },
      answerKey: [
        { number: 1, solution: 'fl (flag: /f/ /l/ /æ/ /g/)' },
        { number: 2, solution: 'gl (glad: /g/ /l/ /æ/ /d/)' },
        { number: 3, solution: 'pl (plum: /p/ /l/ /ʌ/ /m/)' },
        { number: 4, solution: 'fl (flip: /f/ /l/ /ɪ/ /p/)' },
      ],
    }),
  },

  // -------------------------------------------------------------------------
  // DAY 33: Initial L-Blends Part 3: sl & Decodable Reading
  // -------------------------------------------------------------------------
  {
    day: 33,
    title: 'Initial L-Blends Part 3: sl & Decodable Fluency (sled, slap, slim)',
    standard: 'CCSS.ELA-LITERACY.RF.K.4 (Read Emergent-Reader L-Blend Texts)',
    strictBoundary: 'Initial l-blend sl and cumulative l-blend decodable sentences. No consonant blends with r or s yet.',
    script: {
      say: '“Slide down the snowy hill on a sled! /s/ /l/ -> sl! Now let’s read our sentence like a river flowing: ‘The black cat can clap!’”',
      do: 'Slide finger smoothly under the decodable sentence from left to right as child reads aloud.',
      lookFor: 'Accurately decodes CCVC words with l-blends within continuous text without stumbling on the blend.',
    },
    generateSheet: (variant = 1) => ({
      id: `phonics-d33-v${variant}`,
      title: 'Phonics Day 33: Initial L-Blend (sl) & Reading Fluency',
      subject: 'phonics',
      grade: 'K',
      instructions: 'Sound out the sl- words and read the full decodable story sentences with confidence!',
      kidDirections: {
        text: '🛷 Slide into sl-! ✏️ Fill in the missing blend! 📖 Read the sentences aloud!',
        icons: ['🛷', '✏️', '📖'],
        badge: 'Sled Runner',
      },
      problems: [
        {
          id: 'p1',
          type: 'phonics-dictation',
          number: 1,
          word: 'sled',
          prompt: 'Ride in the snow: [ _ _ ] e d. Write the blend sl!',
          phonemes: ['s', 'l', 'e', 'd'],
        },
        {
          id: 'p2',
          type: 'phonics-dictation',
          number: 2,
          word: 'slim',
          prompt: 'Thin and narrow: [ _ _ ] i m. Write the blend sl!',
          phonemes: ['s', 'l', 'i', 'm'],
        },
        {
          id: 'p3',
          type: 'phonics-dictation',
          number: 3,
          word: 'slap',
          prompt: 'Slap high five: [ _ _ ] a p. Write the blend sl!',
          phonemes: ['s', 'l', 'a', 'p'],
        },
        {
          id: 'p4',
          type: 'phonics-dictation',
          number: 4,
          word: 'slip',
          prompt: 'Watch out on ice, do not [ _ _ ] i p! Write the blend sl!',
          phonemes: ['s', 'l', 'i', 'p'],
        },
      ],
      decodableSentences: [
        'A red sled was on the hill.',
        'The slim frog can flip and slip.',
        'Chad was glad to clap for the black dog.',
      ],
      cutStrip: {
        type: 'word-tiles',
        stage: 'Ages 4-6',
        items: ['sl-ed', 'sl-im', 'sl-ip', 'L-Blend Master'],
      },
      answerKey: [
        { number: 1, solution: 'sl (sled: /s/ /l/ /ɛ/ /d/)' },
        { number: 2, solution: 'sl (slim: /s/ /l/ /ɪ/ /m/)' },
        { number: 3, solution: 'sl (slap: /s/ /l/ /æ/ /p/)' },
        { number: 4, solution: 'sl (slip: /s/ /l/ /ɪ/ /p/)' },
      ],
    }),
  },

  // -------------------------------------------------------------------------
  // DAY 34: Initial R-Blends Part 1: br & cr
  // -------------------------------------------------------------------------
  {
    day: 34,
    title: 'Initial R-Blends Part 1: br & cr (brag, brim, crab, crop)',
    standard: 'CCSS.ELA-LITERACY.RF.K.2 & RF.K.3 (Initial Consonant Blends br, cr)',
    strictBoundary: 'Initial r-blends br and cr with short vowels. Distinct phonemes /b/ /r/ and /k/ /r/. No vowel teams.',
    script: {
      say: '“Now listen to the rolling R sound: /b/ /r/ -> br as in brag! /k/ /r/ -> cr as in crab! Watch my mouth curve for the /r/!”',
      do: 'Point to your lips curling slightly for /r/. Encourage child to feel their tongue curl back in their mouth without touching the roof.',
      lookFor: 'Does child pronounce /b/ and /r/ distinctly without dropping the /r/ (e.g. saying ‘cab’ instead of ‘crab’)?',
    },
    generateSheet: (variant = 1) => ({
      id: `phonics-d34-v${variant}`,
      title: 'Phonics Day 34: Initial R-Blends (br & cr)',
      subject: 'phonics',
      grade: 'K',
      instructions: 'Listen to the r-blend. Blend the two sounds together and write br or cr to complete the word!',
      kidDirections: {
        text: '🦀 Crab walk with cr-! 🐻 Bear growl with br-! ✏️ Write the blend!',
        icons: ['🦀', '🐻', '✏️'],
        badge: 'R-Blend Explorer',
      },
      problems: [
        {
          id: 'p1',
          type: 'phonics-dictation',
          number: 1,
          word: 'crab',
          prompt: 'A sea creature with claws: [ _ _ ] a b. Write the blend cr!',
          phonemes: ['c', 'r', 'a', 'b'],
        },
        {
          id: 'p2',
          type: 'phonics-dictation',
          number: 2,
          word: 'brim',
          prompt: 'The edge of a hat: [ _ _ ] i m. Write the blend br!',
          phonemes: ['b', 'r', 'i', 'm'],
        },
        {
          id: 'p3',
          type: 'phonics-dictation',
          number: 3,
          word: 'crop',
          prompt: 'Corn growing on a farm: [ _ _ ] o p. Write the blend cr!',
          phonemes: ['c', 'r', 'o', 'p'],
        },
        {
          id: 'p4',
          type: 'phonics-dictation',
          number: 4,
          word: 'brag',
          prompt: 'To boast too much: [ _ _ ] a g. Write the blend br!',
          phonemes: ['b', 'r', 'a', 'g'],
        },
      ],
      decodableSentences: [
        'A red crab hid in the sand.',
        'Do not brag if you win the race.',
      ],
      cutStrip: {
        type: 'word-tiles',
        stage: 'Ages 4-6',
        items: ['cr-ab', 'br-im', 'cr-op', 'br-ag'],
      },
      answerKey: [
        { number: 1, solution: 'cr (crab: /k/ /r/ /æ/ /b/)' },
        { number: 2, solution: 'br (brim: /b/ /r/ /ɪ/ /m/)' },
        { number: 3, solution: 'cr (crop: /k/ /r/ /ɒ/ /p/)' },
        { number: 4, solution: 'br (brag: /b/ /r/ /æ/ /g/)' },
      ],
    }),
  },

  // -------------------------------------------------------------------------
  // DAY 35: Initial R-Blends Part 2: dr, fr & gr
  // -------------------------------------------------------------------------
  {
    day: 35,
    title: 'Initial R-Blends Part 2: dr, fr, gr (drop, drum, frog, grin, grab)',
    standard: 'CCSS.ELA-LITERACY.RF.K.2 & RF.K.3 (Initial Consonant Blends dr, fr, gr)',
    strictBoundary: 'Initial r-blends dr, fr, and gr with short vowels. Address /dr/ vs /jr/ articulation. No multi-syllable words.',
    script: {
      say: '“When /d/ and /r/ come together, they sometimes sound a little like /jr/ in ‘drum’ or ‘drop’! But look at the letters: D and R! And /f/ /r/ makes ‘frog’!”',
      do: 'Show a picture of a drum. Say ‘d-r-u-m’. Emphasize the starting /d/ sound to reinforce the spelling.',
      lookFor: 'Spellings with D rather than J for words starting with /dr/ (drum, drop).',
    },
    generateSheet: (variant = 1) => ({
      id: `phonics-d35-v${variant}`,
      title: 'Phonics Day 35: Initial R-Blends (dr, fr & gr)',
      subject: 'phonics',
      grade: 'K',
      instructions: 'Listen to the starting blend: dr, fr, or gr. Write the two letters that make each blend!',
      kidDirections: {
        text: '🥁 Beat the drum! 🐸 Hop with frog! ✏️ Write dr, fr, or gr!',
        icons: ['🥁', '🐸', '✏️'],
        badge: 'Drummer Blend',
      },
      problems: [
        {
          id: 'p1',
          type: 'phonics-dictation',
          number: 1,
          word: 'drum',
          prompt: 'Tap to the beat: [ _ _ ] u m. Write the blend dr!',
          phonemes: ['d', 'r', 'u', 'm'],
        },
        {
          id: 'p2',
          type: 'phonics-dictation',
          number: 2,
          word: 'frog',
          prompt: 'A green hopper: [ _ _ ] o g. Write the blend fr!',
          phonemes: ['f', 'r', 'o', 'g'],
        },
        {
          id: 'p3',
          type: 'phonics-dictation',
          number: 3,
          word: 'grin',
          prompt: 'A big, happy smile: [ _ _ ] i n. Write the blend gr!',
          phonemes: ['g', 'r', 'i', 'n'],
        },
        {
          id: 'p4',
          type: 'phonics-dictation',
          number: 4,
          word: 'drop',
          prompt: 'A raindrop falling: [ _ _ ] o p. Write the blend dr!',
          phonemes: ['d', 'r', 'o', 'p'],
        },
      ],
      decodableSentences: [
        'A green frog had a big grin.',
        'Can you tap on the big red drum?',
      ],
      cutStrip: {
        type: 'word-tiles',
        stage: 'Ages 4-6',
        items: ['dr-um', 'fr-og', 'gr-in', 'dr-op'],
      },
      answerKey: [
        { number: 1, solution: 'dr (drum: /d/ /r/ /ʌ/ /m/)' },
        { number: 2, solution: 'fr (frog: /f/ /r/ /ɒ/ /g/)' },
        { number: 3, solution: 'gr (grin: /g/ /r/ /ɪ/ /n/)' },
        { number: 4, solution: 'dr (drop: /d/ /r/ /ɒ/ /p/)' },
      ],
    }),
  },

  // -------------------------------------------------------------------------
  // DAY 36: Initial R-Blends Part 3: tr & pr & R-Blend Decodables
  // -------------------------------------------------------------------------
  {
    day: 36,
    title: 'Initial R-Blends Part 3: tr & pr & Decodable Sentences (trip, trap, prop)',
    standard: 'CCSS.ELA-LITERACY.RF.K.4 (Read Emergent-Reader R-Blend Texts)',
    strictBoundary: 'Initial r-blends tr and pr and decodable sentences. Address /tr/ vs /chr/ articulation. No silent letters.',
    script: {
      say: '“/t/ /r/ says tr as in trip! /p/ /r/ says pr as in prop! Let’s read: ‘A frog can grin at the little crab!’”',
      do: 'Help child spot the r-blends in each word before reading the complete decodable story.',
      lookFor: 'Pronounces /tr/ correctly and distinguishes /tr/ spelling from /chr/ sounds.',
    },
    generateSheet: (variant = 1) => ({
      id: `phonics-d36-v${variant}`,
      title: 'Phonics Day 36: Initial R-Blends (tr & pr) & Decodables',
      subject: 'phonics',
      grade: 'K',
      instructions: 'Complete each word with tr or pr, then read the decodable sentences aloud!',
      kidDirections: {
        text: '🚂 Chug with tr-! 🎁 Pack with pr-! 📖 Read the story sentences!',
        icons: ['🚂', '🎁', '📖'],
        badge: 'Track Master',
      },
      problems: [
        {
          id: 'p1',
          type: 'phonics-dictation',
          number: 1,
          word: 'trip',
          prompt: 'Pack a bag for a [ _ _ ] i p! Write the blend tr!',
          phonemes: ['t', 'r', 'i', 'p'],
        },
        {
          id: 'p2',
          type: 'phonics-dictation',
          number: 2,
          word: 'prop',
          prompt: 'Hold up a sign: [ _ _ ] o p. Write the blend pr!',
          phonemes: ['p', 'r', 'o', 'p'],
        },
        {
          id: 'p3',
          type: 'phonics-dictation',
          number: 3,
          word: 'trap',
          prompt: 'A mouse [ _ _ ] a p. Write the blend tr!',
          phonemes: ['t', 'r', 'a', 'p'],
        },
        {
          id: 'p4',
          type: 'phonics-dictation',
          number: 4,
          word: 'trim',
          prompt: 'Cut the grass: [ _ _ ] i m. Write the blend tr!',
          phonemes: ['t', 'r', 'i', 'm'],
        },
      ],
      decodableSentences: [
        'Brad took a trip on a train track.',
        'A frog can grin at the little crab.',
        'Fran will prop up the red drum.',
      ],
      cutStrip: {
        type: 'word-tiles',
        stage: 'Ages 4-6',
        items: ['tr-ip', 'pr-op', 'tr-ap', 'R-Blend Master'],
      },
      answerKey: [
        { number: 1, solution: 'tr (trip: /t/ /r/ /ɪ/ /p/)' },
        { number: 2, solution: 'pr (prop: /p/ /r/ /ɒ/ /p/)' },
        { number: 3, solution: 'tr (trap: /t/ /r/ /æ/ /p/)' },
        { number: 4, solution: 'tr (trim: /t/ /r/ /ɪ/ /m/)' },
      ],
    }),
  },

  // -------------------------------------------------------------------------
  // DAY 37: Initial S-Blends Part 1: sm, sn & sp
  // -------------------------------------------------------------------------
  {
    day: 37,
    title: 'Initial S-Blends Part 1: sm, sn, sp (smell, snip, snap, spot, spin)',
    standard: 'CCSS.ELA-LITERACY.RF.K.2 & RF.K.3 (Initial Consonant Blends sm, sn, sp)',
    strictBoundary: 'Initial s-blends sm, sn, and sp with short vowels. No three-letter s-blends (scr, spl) or ending blends.',
    script: {
      say: '“Listen to the hissing snake: sssss! Now add /m/: sm as in smell! Add /n/: sn as in snap! Add /p/: sp as in spot!”',
      do: 'Trace a snake curve in the air with finger for /s/, then snap fingers for /n/ or pop lips for /p/.',
      lookFor: 'Maintains the initial /s/ sound before moving to the stop consonant without dropping the /s/ (e.g. saying ‘pot’ instead of ‘spot’).',
    },
    generateSheet: (variant = 1) => ({
      id: `phonics-d37-v${variant}`,
      title: 'Phonics Day 37: Initial S-Blends (sm, sn & sp)',
      subject: 'phonics',
      grade: 'K',
      instructions: 'Listen to each word. Write the two-letter s-blend (sm, sn, or sp) that starts each word!',
      kidDirections: {
        text: '🐍 Hiss with S! 👃 Smell, snap, spin! ✏️ Write the s-blend!',
        icons: ['🐍', '👃', '✏️'],
        badge: 'Snake Blend Scout',
      },
      problems: [
        {
          id: 'p1',
          type: 'phonics-dictation',
          number: 1,
          word: 'spot',
          prompt: 'A black dot on a puppy: [ _ _ ] o t. Write the blend sp!',
          phonemes: ['s', 'p', 'o', 't'],
        },
        {
          id: 'p2',
          type: 'phonics-dictation',
          number: 2,
          word: 'snip',
          prompt: 'Cut with scissors: [ _ _ ] i p. Write the blend sn!',
          phonemes: ['s', 'n', 'i', 'p'],
        },
        {
          id: 'p3',
          type: 'phonics-dictation',
          number: 3,
          word: 'smell',
          prompt: 'Sniff with nose: [ _ _ ] e l l. Write the blend sm!',
          phonemes: ['s', 'm', 'e', 'll'],
        },
        {
          id: 'p4',
          type: 'phonics-dictation',
          number: 4,
          word: 'spin',
          prompt: 'Twirl like a top: [ _ _ ] i n. Write the blend sp!',
          phonemes: ['s', 'p', 'i', 'n'],
        },
      ],
      decodableSentences: [
        'The pup with a black spot can spin.',
        'Snip the red yarn with scissors.',
      ],
      cutStrip: {
        type: 'word-tiles',
        stage: 'Ages 4-6',
        items: ['sp-ot', 'sn-ip', 'sm-ell', 'sp-in'],
      },
      answerKey: [
        { number: 1, solution: 'sp (spot: /s/ /p/ /ɒ/ /t/)' },
        { number: 2, solution: 'sn (snip: /s/ /n/ /ɪ/ /p/)' },
        { number: 3, solution: 'sm (smell: /s/ /m/ /ɛ/ /l/)' },
        { number: 4, solution: 'sp (spin: /s/ /p/ /ɪ/ /n/)' },
      ],
    }),
  },

  // -------------------------------------------------------------------------
  // DAY 38: Initial S-Blends Part 2: st & sw
  // -------------------------------------------------------------------------
  {
    day: 38,
    title: 'Initial S-Blends Part 2: st & sw (stop, step, still, swim)',
    standard: 'CCSS.ELA-LITERACY.RF.K.2 & RF.K.3 (Initial Consonant Blends st, sw)',
    strictBoundary: 'Initial s-blends st and sw with short vowels. No silent-w or complex clusters.',
    script: {
      say: '“Look at the red octagon stop sign: S-T-O-P! /s/ /t/ says st! And when fish swim in the pond: /s/ /w/ says sw!”',
      do: 'Hold up a flat hand like a stop sign for ‘stop’. Make swimming fish motions with hands for ‘swim’.',
      lookFor: 'Accurate blending of /st/ and /sw/ in both reading and dictation.',
    },
    generateSheet: (variant = 1) => ({
      id: `phonics-d38-v${variant}`,
      title: 'Phonics Day 38: Initial S-Blends (st & sw)',
      subject: 'phonics',
      grade: 'K',
      instructions: 'Complete each word with st or sw, then read the decodable sentences!',
      kidDirections: {
        text: '🛑 Stop with st-! 🏊 Swim with sw-! ✏️ Write the blend!',
        icons: ['🛑', '🏊', '✏️'],
        badge: 'Swimmer & Stopper',
      },
      problems: [
        {
          id: 'p1',
          type: 'phonics-dictation',
          number: 1,
          word: 'stop',
          prompt: 'Red traffic sign: [ _ _ ] o p. Write the blend st!',
          phonemes: ['s', 't', 'o', 'p'],
        },
        {
          id: 'p2',
          type: 'phonics-dictation',
          number: 2,
          word: 'swim',
          prompt: 'Paddle in water: [ _ _ ] i m. Write the blend sw!',
          phonemes: ['s', 'w', 'i', 'm'],
        },
        {
          id: 'p3',
          type: 'phonics-dictation',
          number: 3,
          word: 'step',
          prompt: 'Take a footstep: [ _ _ ] e p. Write the blend st!',
          phonemes: ['s', 't', 'e', 'p'],
        },
        {
          id: 'p4',
          type: 'phonics-dictation',
          number: 4,
          word: 'swam',
          prompt: 'Past tense of swim: [ _ _ ] a m. Write the blend sw!',
          phonemes: ['s', 'w', 'a', 'm'],
        },
      ],
      decodableSentences: [
        'Stop at the red light.',
        'The duck swam past the big ship.',
        'Stan can step on the wooden deck.',
      ],
      cutStrip: {
        type: 'word-tiles',
        stage: 'Ages 4-6',
        items: ['st-op', 'sw-im', 'st-ep', 'S-Blend Master'],
      },
      answerKey: [
        { number: 1, solution: 'st (stop: /s/ /t/ /ɒ/ /p/)' },
        { number: 2, solution: 'sw (swim: /s/ /w/ /ɪ/ /m/)' },
        { number: 3, solution: 'st (step: /s/ /t/ /ɛ/ /p/)' },
        { number: 4, solution: 'sw (swam: /s/ /w/ /æ/ /m/)' },
      ],
    }),
  },

  // -------------------------------------------------------------------------
  // DAY 39: Blend vs. Digraph Contrast (Two Sounds vs. One Sound)
  // -------------------------------------------------------------------------
  {
    day: 39,
    title: 'Blend vs. Digraph Contrast (bl vs sh, cr vs ch, st vs th)',
    standard: 'CCSS.ELA-LITERACY.RF.K.2 & RF.K.3 (Contrast Consonant Blends vs Digraphs)',
    strictBoundary: 'Auditory and visual contrast between 2-sound consonant blends and 1-sound consonant digraphs. No vowel digraphs.',
    script: {
      say: '“Super Detective Rule: In a BLEND (like bl or st), you hear TWO sounds! In a DIGRAPH (like sh or ch), two letters hold hands to make ONE brand-new sound!”',
      do: 'Hold up 2 fingers for blends (‘2 letters, 2 sounds!’). Glue 2 fingers together for digraphs (‘2 letters, 1 sound!’).',
      lookFor: 'Correctly counts phonemes: ‘ship’ has 3 sounds (/sh/ /i/ /p/); ‘slip’ has 4 sounds (/s/ /l/ /i/ /p/).',
    },
    generateSheet: (variant = 1) => ({
      id: `phonics-d39-v${variant}`,
      title: 'Phonics Day 39: Blend vs. Digraph Contrast',
      subject: 'phonics',
      grade: 'K',
      instructions: 'Decide if the word starts with a 2-sound BLEND or a 1-sound DIGRAPH!',
      kidDirections: {
        text: '✌️ Blend = 2 sounds! ☝️ Digraph = 1 sound! 🎯 Match and sort!',
        icons: ['✌️', '☝️', '🎯'],
        badge: 'Phoneme Detective',
      },
      problems: [
        {
          id: 'p1',
          type: 'phonics-dictation',
          number: 1,
          word: 'ship',
          prompt: 'Word: "ship" -> Does it start with a Digraph (sh = 1 sound) or Blend?',
          phonemes: ['sh', 'i', 'p'],
        },
        {
          id: 'p2',
          type: 'phonics-dictation',
          number: 2,
          word: 'slip',
          prompt: 'Word: "slip" -> Does it start with a Blend (sl = 2 sounds: /s/ /l/) or Digraph?',
          phonemes: ['s', 'l', 'i', 'p'],
        },
        {
          id: 'p3',
          type: 'phonics-dictation',
          number: 3,
          word: 'chin',
          prompt: 'Word: "chin" -> Does it start with Digraph (ch = 1 sound) or Blend?',
          phonemes: ['ch', 'i', 'n'],
        },
        {
          id: 'p4',
          type: 'phonics-dictation',
          number: 4,
          word: 'crab',
          prompt: 'Word: "crab" -> Does it start with a Blend (cr = 2 sounds: /k/ /r/) or Digraph?',
          phonemes: ['c', 'r', 'a', 'b'],
        },
      ],
      decodableSentences: [
        'Chad had a crab on the ship.',
        'She will slip on the slick mud.',
      ],
      cutStrip: {
        type: 'word-tiles',
        stage: 'Ages 4-6',
        items: ['sh (Digraph)', 'sl (Blend)', 'ch (Digraph)', 'cr (Blend)'],
      },
      answerKey: [
        { number: 1, solution: 'DIGRAPH: sh makes 1 sound (/ʃ/)' },
        { number: 2, solution: 'BLEND: sl makes 2 sounds (/s/ and /l/)' },
        { number: 3, solution: 'DIGRAPH: ch makes 1 sound (/tʃ/)' },
        { number: 4, solution: 'BLEND: cr makes 2 sounds (/k/ and /r/)' },
      ],
    }),
  },

  // -------------------------------------------------------------------------
  // DAY 40: Pre-Quarter 1 Phonics Grand Champion Decodable Reader
  // -------------------------------------------------------------------------
  {
    day: 40,
    title: 'Pre-Quarter 1 Phonics Grand Champion Decodable Reader',
    standard: 'CCSS.ELA-LITERACY.RF.K.4 (Read Emergent-Reader Texts with Fluency & Purpose)',
    strictBoundary: 'Pre-Quarter 1 decodable fluency combining short vowels, consonant digraphs, and initial blends. No long vowel words.',
    script: {
      say: '“Day 40 Phonics Grand Champion! You can read words with all vowels, all digraphs, and all consonant blends! Read this champion story with confidence and expression!”',
      do: 'Award the Day 40 Phonics Reading Champion ribbon. Listen to child read the full decodable story aloud with pride.',
      lookFor: 'Reads decodable text with accuracy, self-correcting when needed and demonstrating comprehension of the story.',
    },
    generateSheet: (variant = 1) => ({
      id: `phonics-d40-v${variant}`,
      title: 'Phonics Day 40: Pre-Quarter 1 Phonics Grand Champion',
      subject: 'phonics',
      grade: 'K',
      instructions: 'Celebrate 40 Days of Kindergarten Reading! Read the champion decodable story and answer the comprehension checks!',
      kidDirections: {
        text: '🏆 Day 40 Reading Champion! 📖 Read the full story! 🌟 You are an independent reader!',
        icons: ['🏆', '📖', '🌟'],
        badge: 'Day 40 Reading Champion',
      },
      problems: [
        {
          id: 'p1',
          type: 'phonics-dictation',
          number: 1,
          word: 'frog',
          prompt: 'The champion animal: f - r - o - g. Write the word frog!',
          phonemes: ['f', 'r', 'o', 'g'],
        },
        {
          id: 'p2',
          type: 'phonics-dictation',
          number: 2,
          word: 'sled',
          prompt: 'Ride down the hill: s - l - e - d. Write the word sled!',
          phonemes: ['s', 'l', 'e', 'd'],
        },
        {
          id: 'p3',
          type: 'phonics-dictation',
          number: 3,
          word: 'crab',
          prompt: 'On the beach: c - r - a - b. Write the word crab!',
          phonemes: ['c', 'r', 'a', 'b'],
        },
        {
          id: 'p4',
          type: 'phonics-dictation',
          number: 4,
          word: 'swim',
          prompt: 'In the cool pond: s - w - i - m. Write the word swim!',
          phonemes: ['s', 'w', 'i', 'm'],
        },
      ],
      decodableSentences: [
        'The green frog can swim to the red sled.',
        'A crab on a black rock can spin and grin.',
        'Fran and Brad clap for the quick pup.',
        'Can you stop at the shop for a fresh plum?',
      ],
      cutStrip: {
        type: 'word-tiles',
        stage: 'Ages 4-6',
        items: ['L-Blends Master', 'R-Blends Master', 'S-Blends Master', '🏆 Day 40 Phonics Champion!'],
      },
      answerKey: [
        { number: 1, solution: 'F-R-O-G (/f/ /r/ /ɒ/ /g/)' },
        { number: 2, solution: 'S-L-E-D (/s/ /l/ /ɛ/ /d/)' },
        { number: 3, solution: 'C-R-A-B (/k/ /r/ /æ/ /b/)' },
        { number: 4, solution: 'S-W-I-M (/s/ /w/ /ɪ/ /m/)' },
      ],
    }),
  },
];
