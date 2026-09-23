// src/domain/curriculum/days31_40/mathDays31_40.js
// Kindergarten Mathematics Curriculum: Days 31 to 40 (Weeks 7–8 / Pre-Q1 Assessment Milestone)
// Focus: Counting On, Vertical Math (+/-), Fact Families to 5, Equation Balance & Pre-Q1 Fluency Review
// Standards: CCSS.MATH.CONTENT.K.OA.A.1, K.OA.A.2, K.OA.A.3, K.OA.A.4, K.OA.A.5
// Created: 2026-09-22

export const mathDays31_40 = [
  // -------------------------------------------------------------------------
  // DAY 31: Strategy: Counting On from a Given Number
  // -------------------------------------------------------------------------
  {
    day: 31,
    title: 'Strategy: Counting On from a Number (3 + 1, 3 + 2, 4 + 1)',
    standard: 'CCSS.MATH.CONTENT.K.OA.A.1 & K.OA.A.2 (Counting On Strategy)',
    strictBoundary: 'Counting on strategy within 5. Start with a given numeral and count forward 1 or 2. No sums greater than 5.',
    script: {
      say: '“Look at the first number: 3! Keep 3 in your head. Now count on the dots: 4, 5! 3 plus 2 equals 5!”',
      do: 'Tap child’s forehead gently for the starting number (‘3 in your head!’), then hold up fingers or touch dots for the rest: ‘4, 5!’',
      lookFor: 'Does child start counting from the first number instead of recounting from 1? This is the key ‘counting on’ cognitive leap.',
    },
    generateSheet: (variant = 1) => ({
      id: `math-d31-v${variant}`,
      title: 'Math Day 31: Counting On Strategy (Within 5)',
      subject: 'math',
      grade: 'K',
      instructions: 'Keep the big number in your head, then count on the dots to find the total sum!',
      kidDirections: {
        text: '🧠 Number in your head! 👆 Count on the dots! ✏️ Write the total sum!',
        icons: ['🧠', '👆', '✏️'],
        badge: 'Count-On Starter',
      },
      problems: [
        {
          id: 'p1',
          type: 'counting-objects',
          number: 1,
          targetNumber: variant % 2 === 0 ? 3 : 2,
          count: variant % 2 === 0 ? 1 : 2,
          itemIcon: '🔴',
          prompt: variant % 2 === 0 ? 'Keep 3 in your head. Count on 1 dot: 3... [4]! 3 + 1 = ?' : 'Keep 2 in your head. Count on 2 dots: 2... [3, 4]! 2 + 2 = ?',
        },
        {
          id: 'p2',
          type: 'counting-objects',
          number: 2,
          targetNumber: 3,
          count: 2,
          itemIcon: '🔵',
          prompt: 'Keep 3 in your head. Count on 2 dots: 3... [4, 5]! 3 + 2 = ?',
        },
        {
          id: 'p3',
          type: 'counting-objects',
          number: 3,
          targetNumber: 4,
          count: 1,
          itemIcon: '🟡',
          prompt: 'Keep 4 in your head. Count on 1 dot: 4... [5]! 4 + 1 = ?',
        },
        {
          id: 'p4',
          type: 'counting-objects',
          number: 4,
          targetNumber: 2,
          count: 3,
          itemIcon: '🟢',
          prompt: 'Keep 2 in your head. Count on 3 dots: 2... [3, 4, 5]! 2 + 3 = ?',
        },
      ],
      cutStrip: {
        type: 'straight-strips',
        stage: 'Ages 3-5 (Bottom-Edge Cut)',
        items: ['3 + 1 = 4', '3 + 2 = 5', '4 + 1 = 5', '2 + 3 = 5'],
      },
      answerKey: [
        { number: 1, solution: variant % 2 === 0 ? '3 + 1 = 4' : '2 + 2 = 4' },
        { number: 2, solution: '3 + 2 = 5' },
        { number: 3, solution: '4 + 1 = 5' },
        { number: 4, solution: '2 + 3 = 5' },
      ],
    }),
  },

  // -------------------------------------------------------------------------
  // DAY 32: Addition Word Stories (Join Situations Within 5)
  // -------------------------------------------------------------------------
  {
    day: 32,
    title: 'Addition Word Stories: Joining Groups Within 5',
    standard: 'CCSS.MATH.CONTENT.K.OA.A.2 (Solve Addition Word Problems Within 5)',
    strictBoundary: 'Single-step join addition word problems with totals up to 5. No multi-step word problems or sums over 5.',
    script: {
      say: '“3 little bunnies are sitting on the grass. 2 more bunnies hop over to play! How many bunnies are in the meadow now? Let’s write 3 + 2 = 5!”',
      do: 'Act out the story using toy figures or fingers. Have child draw simple circles for the characters in the workspace box.',
      lookFor: 'Understands that adding means putting groups together or joining more to an existing group.',
    },
    generateSheet: (variant = 1) => ({
      id: `math-d32-v${variant}`,
      title: 'Math Day 32: Addition Word Stories (Join Situations)',
      subject: 'math',
      grade: 'K',
      instructions: 'Listen to the math story, draw circles in the box to show the story, and write the addition sentence!',
      kidDirections: {
        text: '📖 Listen to the story! 🎨 Draw circles! ✏️ Write the plus equation!',
        icons: ['📖', '🎨', '✏️'],
        badge: 'Story Solver',
      },
      problems: [
        {
          id: 'p1',
          type: 'story-problem',
          number: 1,
          story: '3 fluffy kittens are napping in the sun. 1 more kitten runs over to curl up! How many kittens are sleeping in all?',
          equation: '3 + 1 = 4',
          itemIcon: '🐱',
          prompt: 'Draw the kittens: 3 kittens + 1 kitten = ? kittens',
        },
        {
          id: 'p2',
          type: 'story-problem',
          number: 2,
          story: '2 green frogs sit on a log. 2 more frogs jump up with a splash! How many frogs are on the log now?',
          equation: '2 + 2 = 4',
          itemIcon: '🐸',
          prompt: 'Draw the frogs: 2 frogs + 2 frogs = ? frogs',
        },
        {
          id: 'p3',
          type: 'story-problem',
          number: 3,
          story: '3 shiny red apples are in the basket. Mom picks 2 more apples from the tree! How many apples do we have?',
          equation: '3 + 2 = 5',
          itemIcon: '🍎',
          prompt: 'Draw the apples: 3 apples + 2 apples = ? apples',
        },
        {
          id: 'p4',
          type: 'story-problem',
          number: 4,
          story: '4 little ducklings are swimming in the pond. 1 more duckling paddles behind them! How many ducklings are swimming?',
          equation: '4 + 1 = 5',
          itemIcon: '🦆',
          prompt: 'Draw the ducklings: 4 ducklings + 1 duckling = ? ducklings',
        },
      ],
      cutStrip: {
        type: 'straight-strips',
        stage: 'Ages 3-5 (Bottom-Edge Cut)',
        items: ['3 + 1 = 4 kittens', '2 + 2 = 4 frogs', '3 + 2 = 5 apples', '4 + 1 = 5 ducklings'],
      },
      answerKey: [
        { number: 1, solution: '3 + 1 = 4 kittens' },
        { number: 2, solution: '2 + 2 = 4 frogs' },
        { number: 3, solution: '3 + 2 = 5 apples' },
        { number: 4, solution: '4 + 1 = 5 ducklings' },
      ],
    }),
  },

  // -------------------------------------------------------------------------
  // DAY 33: Vertical Addition Notation Intro
  // -------------------------------------------------------------------------
  {
    day: 33,
    title: 'Vertical Addition Notation Intro (Stacked Numbers to 5)',
    standard: 'CCSS.MATH.CONTENT.K.OA.A.1 & K.OA.A.5 (Vertical Addition Representation)',
    strictBoundary: 'Vertical addition notation within 5. Single digit addition only. No sums exceeding 5.',
    script: {
      say: '“Math can go sideways: 2 + 1 = 3, or it can stand tall like a tower! The top number is 2, the bottom is 1, and the bottom line means EQUALS!”',
      do: 'Trace down the vertical problem with your finger: top number, plus sign, bottom number, then slide across the equal bar to write the sum underneath.',
      lookFor: 'Child writes the answer directly underneath the horizontal line, aligning digits vertically.',
    },
    generateSheet: (variant = 1) => ({
      id: `math-d33-v${variant}`,
      title: 'Math Day 33: Vertical Addition Towers (Within 5)',
      subject: 'math',
      grade: 'K',
      instructions: 'Solve these vertical addition towers! Touch the dots, add the numbers, and write the answer under the bar.',
      kidDirections: {
        text: '🏢 Tall addition towers! ➕ Add top and bottom! ✏️ Write your answer under the line!',
        icons: ['🏢', '➕', '✏️'],
        badge: 'Tower Builder',
      },
      problems: [
        {
          id: 'p1',
          type: 'vertical-math',
          number: 1,
          topNumber: 2,
          bottomNumber: 1,
          operator: '+',
          itemIcon: '⭐',
          prompt: 'Solve: 2 + 1',
        },
        {
          id: 'p2',
          type: 'vertical-math',
          number: 2,
          topNumber: 3,
          bottomNumber: 2,
          operator: '+',
          itemIcon: '🚀',
          prompt: 'Solve: 3 + 2',
        },
        {
          id: 'p3',
          type: 'vertical-math',
          number: 3,
          topNumber: 1,
          bottomNumber: 3,
          operator: '+',
          itemIcon: '🎈',
          prompt: 'Solve: 1 + 3',
        },
        {
          id: 'p4',
          type: 'vertical-math',
          number: 4,
          topNumber: 4,
          bottomNumber: 1,
          operator: '+',
          itemIcon: '🌸',
          prompt: 'Solve: 4 + 1',
        },
      ],
      cutStrip: {
        type: 'straight-strips',
        stage: 'Ages 3-5 (Bottom-Edge Cut)',
        items: ['2 + 1 = 3', '3 + 2 = 5', '1 + 3 = 4', '4 + 1 = 5'],
      },
      answerKey: [
        { number: 1, solution: '2 + 1 = 3' },
        { number: 2, solution: '3 + 2 = 5' },
        { number: 3, solution: '1 + 3 = 4' },
        { number: 4, solution: '4 + 1 = 5' },
      ],
    }),
  },

  // -------------------------------------------------------------------------
  // DAY 34: Subtraction Word Stories (Take-Away Situations Within 5)
  // -------------------------------------------------------------------------
  {
    day: 34,
    title: 'Subtraction Word Stories: Taking Away Within 5',
    standard: 'CCSS.MATH.CONTENT.K.OA.A.2 (Solve Subtraction Word Problems Within 5)',
    strictBoundary: 'Word problem separate/take-away situations within 5. No multi-step problems or negative results.',
    script: {
      say: '“There are 5 birds on a tree branch. 2 birds fly away into the sky! Whoosh! How many birds are left on the branch? 5 take away 2 is 3!”',
      do: 'Have child draw 5 circles, then use a bold pencil line to cross out 2 of them: ‘Bye-bye birds!’ Count how many are left uncrossed.',
      lookFor: 'Identifies that subtraction means taking away or removing from the starting total.',
    },
    generateSheet: (variant = 1) => ({
      id: `math-d34-v${variant}`,
      title: 'Math Day 34: Subtraction Word Stories (Take-Away)',
      subject: 'math',
      grade: 'K',
      instructions: 'Listen to the subtraction story, draw the items, cross out the ones that left, and write the subtraction sentence!',
      kidDirections: {
        text: '📖 Listen to the story! ❌ Cross out the ones that left! ✏️ Write the minus equation!',
        icons: ['📖', '❌', '✏️'],
        badge: 'Take-Away Detective',
      },
      problems: [
        {
          id: 'p1',
          type: 'story-problem',
          number: 1,
          story: '5 sweet strawberries were on the plate. Tommy ate 2 of them! Yum! How many strawberries are left on the plate?',
          equation: '5 − 2 = 3',
          itemIcon: '🍓',
          prompt: 'Draw 5 berries, cross out 2: 5 strawberries − 2 strawberries = ?',
        },
        {
          id: 'p2',
          type: 'story-problem',
          number: 2,
          story: '4 toy cars were parked in the toy garage. 1 car drove away down the road! How many toy cars are left in the garage?',
          equation: '4 − 1 = 3',
          itemIcon: '🚗',
          prompt: 'Draw 4 cars, cross out 1: 4 cars − 1 car = ?',
        },
        {
          id: 'p3',
          type: 'story-problem',
          number: 3,
          story: '5 colorful balloons floated in the room. 3 balloons popped with a bang! How many balloons are still floating?',
          equation: '5 − 3 = 2',
          itemIcon: '🎈',
          prompt: 'Draw 5 balloons, cross out 3: 5 balloons − 3 balloons = ?',
        },
        {
          id: 'p4',
          type: 'story-problem',
          number: 4,
          story: '3 cookies were fresh on the cooling tray. Puppy took 1 cookie! How many cookies are left on the tray?',
          equation: '3 − 1 = 2',
          itemIcon: '🍪',
          prompt: 'Draw 3 cookies, cross out 1: 3 cookies − 1 cookie = ?',
        },
      ],
      cutStrip: {
        type: 'straight-strips',
        stage: 'Ages 3-5 (Bottom-Edge Cut)',
        items: ['5 − 2 = 3 berries', '4 − 1 = 3 cars', '5 − 3 = 2 balloons', '3 − 1 = 2 cookies'],
      },
      answerKey: [
        { number: 1, solution: '5 − 2 = 3 strawberries' },
        { number: 2, solution: '4 − 1 = 3 cars' },
        { number: 3, solution: '5 − 3 = 2 balloons' },
        { number: 4, solution: '3 − 1 = 2 cookies' },
      ],
    }),
  },

  // -------------------------------------------------------------------------
  // DAY 35: Vertical Subtraction Notation Intro
  // -------------------------------------------------------------------------
  {
    day: 35,
    title: 'Vertical Subtraction Notation Intro (Stacked Numbers Within 5)',
    standard: 'CCSS.MATH.CONTENT.K.OA.A.1 & K.OA.A.5 (Vertical Subtraction Representation)',
    strictBoundary: 'Vertical subtraction notation within 5. Single digit minuend and subtrahend only. No results below 0.',
    script: {
      say: '“Look at this tall subtraction tower! We start with 4 at the top. The minus sign says take away 1. The line at the bottom means equals! 4 minus 1 equals 3!”',
      do: 'Point to the top number (starting total), touch the minus sign, point to the bottom number (how many to take away), and trace the line.',
      lookFor: 'Understands the top number is the whole group and the bottom number is the quantity removed.',
    },
    generateSheet: (variant = 1) => ({
      id: `math-d35-v${variant}`,
      title: 'Math Day 35: Vertical Subtraction Towers (Within 5)',
      subject: 'math',
      grade: 'K',
      instructions: 'Solve these vertical subtraction towers! Start with the top number, cross out the bottom amount, and write the answer under the bar.',
      kidDirections: {
        text: '🏢 Subtraction towers! ➖ Minus means take away! ✏️ Write answer under the line!',
        icons: ['🏢', '➖', '✏️'],
        badge: 'Minus Master',
      },
      problems: [
        {
          id: 'p1',
          type: 'vertical-math',
          number: 1,
          topNumber: 4,
          bottomNumber: 1,
          operator: '-',
          itemIcon: '🍎',
          prompt: 'Solve: 4 − 1',
        },
        {
          id: 'p2',
          type: 'vertical-math',
          number: 2,
          topNumber: 5,
          bottomNumber: 2,
          operator: '-',
          itemIcon: '🐶',
          prompt: 'Solve: 5 − 2',
        },
        {
          id: 'p3',
          type: 'vertical-math',
          number: 3,
          topNumber: 3,
          bottomNumber: 2,
          operator: '-',
          itemIcon: '🍕',
          prompt: 'Solve: 3 − 2',
        },
        {
          id: 'p4',
          type: 'vertical-math',
          number: 4,
          topNumber: 5,
          bottomNumber: 4,
          operator: '-',
          itemIcon: '⚽',
          prompt: 'Solve: 5 − 4',
        },
      ],
      cutStrip: {
        type: 'straight-strips',
        stage: 'Ages 3-5 (Bottom-Edge Cut)',
        items: ['4 − 1 = 3', '5 − 2 = 3', '3 − 2 = 1', '5 − 4 = 1'],
      },
      answerKey: [
        { number: 1, solution: '4 − 1 = 3' },
        { number: 2, solution: '5 − 2 = 3' },
        { number: 3, solution: '3 − 2 = 1' },
        { number: 4, solution: '5 − 4 = 1' },
      ],
    }),
  },

  // -------------------------------------------------------------------------
  // DAY 36: Fact Families for 3 and 4 (Inverse Operations)
  // -------------------------------------------------------------------------
  {
    day: 36,
    title: 'Fact Families for 3 and 4 (Addition & Subtraction Triads)',
    standard: 'CCSS.MATH.CONTENT.K.OA.A.3 & K.OA.A.4 (Fact Families & Inverse Relationship)',
    strictBoundary: 'Inverse relationship between addition and subtraction for sums 3 and 4. No totals greater than 4.',
    script: {
      say: '“Numbers 2, 1, and 3 are a family! They live in the same house. 2 + 1 = 3, 1 + 2 = 3, 3 − 1 = 2, and 3 − 2 = 1. They always stick together!”',
      do: 'Use 3 building blocks (2 green, 1 blue). Put them together to make 3, then remove the blue block to show 3 − 1 = 2.',
      lookFor: 'Recognizes that addition and subtraction undo each other using the exact same three numbers.',
    },
    generateSheet: (variant = 1) => ({
      id: `math-d36-v${variant}`,
      title: 'Math Day 36: Fact Families for 3 and 4',
      subject: 'math',
      grade: 'K',
      instructions: 'Complete the fact family houses! Use the three numbers to write two plus equations and two minus equations.',
      kidDirections: {
        text: '🏠 Number family house! ➕ Two addition facts! ➖ Two subtraction facts!',
        icons: ['🏠', '➕', '➖'],
        badge: 'Family Detective',
      },
      problems: [
        {
          id: 'p1',
          type: 'fact-family',
          number: 1,
          whole: 3,
          partA: 2,
          partB: 1,
          prompt: 'Fact Family for 3 (Parts: 2 and 1): Write 2 addition and 2 subtraction equations.',
        },
        {
          id: 'p2',
          type: 'fact-family',
          number: 2,
          whole: 4,
          partA: 3,
          partB: 1,
          prompt: 'Fact Family for 4 (Parts: 3 and 1): Write 2 addition and 2 subtraction equations.',
        },
        {
          id: 'p3',
          type: 'fact-family',
          number: 3,
          whole: 4,
          partA: 2,
          partB: 2,
          prompt: 'Fact Family for 4 (Doubles Parts: 2 and 2): Write addition and subtraction facts.',
        },
        {
          id: 'p4',
          type: 'fact-family',
          number: 4,
          whole: 3,
          partA: 3,
          partB: 0,
          prompt: 'Fact Family for 3 with Zero (Parts: 3 and 0): Write addition and subtraction facts.',
        },
      ],
      cutStrip: {
        type: 'straight-strips',
        stage: 'Ages 3-5 (Bottom-Edge Cut)',
        items: ['2+1=3 & 3−1=2', '3+1=4 & 4−1=3', '2+2=4 & 4−2=2', '3+0=3 & 3−0=3'],
      },
      answerKey: [
        { number: 1, solution: '2+1=3, 1+2=3, 3−1=2, 3−2=1' },
        { number: 2, solution: '3+1=4, 1+3=4, 4−1=3, 4−3=1' },
        { number: 3, solution: '2+2=4, 4−2=2' },
        { number: 4, solution: '3+0=3, 0+3=3, 3−0=3, 3−3=0' },
      ],
    }),
  },

  // -------------------------------------------------------------------------
  // DAY 37: Fact Families for 5 (The 5-Family Triads)
  // -------------------------------------------------------------------------
  {
    day: 37,
    title: 'Fact Families for 5 (3+2=5, 2+3=5, 5-2=3, 5-3=2)',
    standard: 'CCSS.MATH.CONTENT.K.OA.A.3 & K.OA.A.4 (Fact Family Triads for 5)',
    strictBoundary: 'Fact family triads for target sum 5 only. No operations exceeding 5.',
    script: {
      say: '“Meet the 5-Family: 3, 2, and 5! If 3 + 2 = 5, then what is 5 take away 2? It has to be 3! The family never changes!”',
      do: 'Hold up 5 fingers (3 on left hand, 2 on right hand). Put hands together to show 3 + 2 = 5. Hide the right hand behind your back to show 5 − 2 = 3!',
      lookFor: 'Uses the addition fact to solve the subtraction fact without needing to recount all fingers from 1.',
    },
    generateSheet: (variant = 1) => ({
      id: `math-d37-v${variant}`,
      title: 'Math Day 37: Fact Families for 5',
      subject: 'math',
      grade: 'K',
      instructions: 'Solve the 5-Family! Use the number bond triad to write the connected plus and minus facts.',
      kidDirections: {
        text: '🖐️ The 5-Family! ➕ Add the parts! ➖ Subtract from 5!',
        icons: ['🖐️', '➕', '➖'],
        badge: 'High-Five Master',
      },
      problems: [
        {
          id: 'p1',
          type: 'fact-family',
          number: 1,
          whole: 5,
          partA: 3,
          partB: 2,
          prompt: 'Fact Family for 5 (Parts: 3 and 2): Complete all 4 equations.',
        },
        {
          id: 'p2',
          type: 'fact-family',
          number: 2,
          whole: 5,
          partA: 4,
          partB: 1,
          prompt: 'Fact Family for 5 (Parts: 4 and 1): Complete all 4 equations.',
        },
        {
          id: 'p3',
          type: 'fact-family',
          number: 3,
          whole: 5,
          partA: 5,
          partB: 0,
          prompt: 'Fact Family for 5 (Parts: 5 and 0): Complete all 4 equations.',
        },
        {
          id: 'p4',
          type: 'vertical-math',
          number: 4,
          topNumber: 5,
          bottomNumber: 3,
          operator: '-',
          itemIcon: '🖐️',
          prompt: 'Quick Subtraction Check: 5 − 3 = ? (Think of the 3 and 2 family!)',
        },
      ],
      cutStrip: {
        type: 'straight-strips',
        stage: 'Ages 3-5 (Bottom-Edge Cut)',
        items: ['3+2=5 & 5−2=3', '4+1=5 & 5−1=4', '5+0=5 & 5−0=5', '5 − 3 = 2'],
      },
      answerKey: [
        { number: 1, solution: '3+2=5, 2+3=5, 5−2=3, 5−3=2' },
        { number: 2, solution: '4+1=5, 1+4=5, 5−1=4, 5−4=1' },
        { number: 3, solution: '5+0=5, 0+5=5, 5−0=5, 5−5=0' },
        { number: 4, solution: '5 − 3 = 2' },
      ],
    }),
  },

  // -------------------------------------------------------------------------
  // DAY 38: Comparing Equations: True or False?
  // -------------------------------------------------------------------------
  {
    day: 38,
    title: 'Comparing Equations: True or False? (Equality as Balance)',
    standard: 'CCSS.MATH.CONTENT.K.OA.A.1 & K.OA.A.2 (Understanding Equality and Balance)',
    strictBoundary: 'Equation truth evaluation within 5. Comparing single expressions to totals. No inequalities with variables.',
    script: {
      say: '“The equal sign is like a balance scale! Both sides must weigh the exact same. Is 2 + 2 the same as 4? Yes, TRUE! Is 3 + 1 the same as 5? No, that tilts the scale! FALSE!”',
      do: 'Hold arms out like a balance scale. Move hands up and down to demonstrate balance when amounts match, and tilting when they don’t.',
      lookFor: 'Understands that the equals sign (=) means ‘is the same as’, not just ‘the answer comes next’.',
    },
    generateSheet: (variant = 1) => ({
      id: `math-d38-v${variant}`,
      title: 'Math Day 38: Equation Balance: True or False?',
      subject: 'math',
      grade: 'K',
      instructions: 'Check if each balance scale is true or false! Circle TRUE if both sides match, or FALSE if they do not.',
      kidDirections: {
        text: '⚖️ Scale in balance! ✅ Circle TRUE if equal! ❌ Circle FALSE if not equal!',
        icons: ['⚖️', '✅', '❌'],
        badge: 'Scale Inspector',
      },
      problems: [
        {
          id: 'p1',
          type: 'equation-balance',
          number: 1,
          equation: '2 + 2 = 4',
          answer: 'True',
          prompt: 'Is 2 + 2 equal to 4? Check the balance scale!',
        },
        {
          id: 'p2',
          type: 'equation-balance',
          number: 2,
          equation: '3 + 1 = 5',
          answer: 'False',
          prompt: 'Is 3 + 1 equal to 5? Check the balance scale!',
        },
        {
          id: 'p3',
          type: 'equation-balance',
          number: 3,
          equation: '5 − 2 = 3',
          answer: 'True',
          prompt: 'Is 5 − 2 equal to 3? Check the balance scale!',
        },
        {
          id: 'p4',
          type: 'equation-balance',
          number: 4,
          equation: '4 − 1 = 2',
          answer: 'False',
          prompt: 'Is 4 − 1 equal to 2? Check the balance scale!',
        },
      ],
      cutStrip: {
        type: 'straight-strips',
        stage: 'Ages 3-5 (Bottom-Edge Cut)',
        items: ['2 + 2 = 4 (TRUE)', '3 + 1 = 5 (FALSE)', '5 − 2 = 3 (TRUE)', '4 − 1 = 2 (FALSE)'],
      },
      answerKey: [
        { number: 1, solution: 'TRUE (2 + 2 is exactly 4)' },
        { number: 2, solution: 'FALSE (3 + 1 is 4, not 5)' },
        { number: 3, solution: 'TRUE (5 − 2 is exactly 3)' },
        { number: 4, solution: 'FALSE (4 − 1 is 3, not 2)' },
      ],
    }),
  },

  // -------------------------------------------------------------------------
  // DAY 39: Missing Addends within 5
  // -------------------------------------------------------------------------
  {
    day: 39,
    title: 'Missing Addends within 5 (3 + ? = 5, 2 + ? = 4)',
    standard: 'CCSS.MATH.CONTENT.K.OA.A.4 (Find the Number That Makes 5)',
    strictBoundary: 'Missing addend equations within 5 (e.g., 3 + ? = 5). No missing subtrahends or values beyond 5.',
    script: {
      say: '“We have 3 apples in our basket, but we need 5 for our picnic pie! 3 plus how many more makes 5? Count up from 3: 4, 5... we need 2 more!”',
      do: 'Place 3 counters in front of child. Place an empty bowl. Say: ‘We need 5 total counters! How many go in the mystery bowl?’',
      lookFor: 'Child counts up from the known part to reach the whole, recognizing the missing piece.',
    },
    generateSheet: (variant = 1) => ({
      id: `math-d39-v${variant}`,
      title: 'Math Day 39: Missing Addends within 5',
      subject: 'math',
      grade: 'K',
      instructions: 'Find the missing number to complete the puzzle! How many more do we need to reach the target total?',
      kidDirections: {
        text: '❓ Find the missing number! ➕ Count up to the target! ✏️ Fill in the mystery box!',
        icons: ['❓', '➕', '✏️'],
        badge: 'Mystery Solver',
      },
      problems: [
        {
          id: 'p1',
          type: 'concrete-addition',
          number: 1,
          partA: { count: 3, icon: '🍎', label: 'In Basket' },
          partB: { count: 2, icon: '❓', label: 'How Many More?' },
          prompt: '3 + [ ? ] = 5 apples. How many more apples are needed?',
        },
        {
          id: 'p2',
          type: 'concrete-addition',
          number: 2,
          partA: { count: 2, icon: '⭐', label: 'On Paper' },
          partB: { count: 2, icon: '❓', label: 'How Many More?' },
          prompt: '2 + [ ? ] = 4 stars. How many more stars are needed?',
        },
        {
          id: 'p3',
          type: 'concrete-addition',
          number: 3,
          partA: { count: 4, icon: '🌸', label: 'In Garden' },
          partB: { count: 1, icon: '❓', label: 'How Many More?' },
          prompt: '4 + [ ? ] = 5 flowers. How many more flowers are needed?',
        },
        {
          id: 'p4',
          type: 'concrete-addition',
          number: 4,
          partA: { count: 1, icon: '🚗', label: 'On Road' },
          partB: { count: 3, icon: '❓', label: 'How Many More?' },
          prompt: '1 + [ ? ] = 4 cars. How many more cars are needed?',
        },
      ],
      cutStrip: {
        type: 'straight-strips',
        stage: 'Ages 3-5 (Bottom-Edge Cut)',
        items: ['3 + 2 = 5', '2 + 2 = 4', '4 + 1 = 5', '1 + 3 = 4'],
      },
      answerKey: [
        { number: 1, solution: 'Missing number is 2 (3 + 2 = 5)' },
        { number: 2, solution: 'Missing number is 2 (2 + 2 = 4)' },
        { number: 3, solution: 'Missing number is 1 (4 + 1 = 5)' },
        { number: 4, solution: 'Missing number is 3 (1 + 3 = 4)' },
      ],
    }),
  },

  // -------------------------------------------------------------------------
  // DAY 40: Pre-Quarter 1 Math Grand Champion Review
  // -------------------------------------------------------------------------
  {
    day: 40,
    title: 'Pre-Quarter 1 Math Grand Champion Review (Mixed Fluency Within 5)',
    standard: 'CCSS.MATH.CONTENT.K.OA.A.5 (Pre-Q1 Fluency Review Within 5)',
    strictBoundary: 'Pre-Quarter 1 comprehensive fluency review within 5. Mixed horizontal, vertical, and word problem representations.',
    script: {
      say: '“Day 40 Math Grand Champion! You have mastered counting on, vertical addition and subtraction, story problems, and fact families up to 5! You are ready for any math challenge!”',
      do: 'Award the Day 40 Grand Champion badge with big cheers! Let child pick their favorite colored pencil to complete the review.',
      lookFor: 'Solves mixed addition and subtraction accurately using efficient strategies (counting on, known facts, touch points).',
    },
    generateSheet: (variant = 1) => ({
      id: `math-d40-v${variant}`,
      title: 'Math Day 40: Pre-Quarter 1 Math Grand Champion',
      subject: 'math',
      grade: 'K',
      instructions: 'Celebrate 40 Days of Kindergarten Math! Show your champion math skills on this grand review!',
      kidDirections: {
        text: '🏆 Day 40 Grand Champion! 🌟 Towers, stories, and facts! ✏️ You are a math star!',
        icons: ['🏆', '🌟', '✏️'],
        badge: 'Day 40 Math Champion',
      },
      problems: [
        {
          id: 'p1',
          type: 'vertical-math',
          number: 1,
          topNumber: 3,
          bottomNumber: 2,
          operator: '+',
          itemIcon: '🦁',
          prompt: 'Vertical Addition Champion: 3 + 2 = ?',
        },
        {
          id: 'p2',
          type: 'vertical-math',
          number: 2,
          topNumber: 5,
          bottomNumber: 1,
          operator: '-',
          itemIcon: '🐯',
          prompt: 'Vertical Subtraction Champion: 5 − 1 = ?',
        },
        {
          id: 'p3',
          type: 'story-problem',
          number: 3,
          story: '4 little puppies are playing in the yard. 1 puppy runs inside to sleep. How many puppies are still playing?',
          equation: '4 − 1 = 3',
          itemIcon: '🐶',
          prompt: 'Draw and solve: 4 puppies − 1 puppy = ? puppies',
        },
        {
          id: 'p4',
          type: 'fact-family',
          number: 4,
          whole: 5,
          partA: 3,
          partB: 2,
          prompt: 'Fact Family Grand Finale: Write 3+2=5 and 5−2=3!',
        },
      ],
      cutStrip: {
        type: 'straight-strips',
        stage: 'Ages 3-5 (Bottom-Edge Cut)',
        items: ['3 + 2 = 5', '5 − 1 = 4', '4 − 1 = 3 puppies', '🏆 Day 40 Math Grand Champion!'],
      },
      answerKey: [
        { number: 1, solution: '3 + 2 = 5' },
        { number: 2, solution: '5 − 1 = 4' },
        { number: 3, solution: '4 − 1 = 3 puppies' },
        { number: 4, solution: '3+2=5, 2+3=5, 5−2=3, 5−3=2' },
      ],
    }),
  },
];
