# AI Worksheet Generator & Curriculum Studio

An evidence-based educational studio that combines a structured K-1 curriculum roadmap, print-ready worksheets, and local session observation logging anchored in Common Core State Standards (CCSS), Singapore Math CPA, and Orton-Gillingham Phonics.

## Features

- **Dual-Mode Daily Teaching Cockpit**: Switch seamlessly between **Guided Foundation Lessons (CPA)** and **Traditional Classroom Drill Packets** with 1-click printing and word-for-word parent scripts.
- **Traditional Classroom Multi-Section Worksheets**:
  - *Math*: 12-problem vertical addition/subtraction drills, real-world story problems, and scratchpad drawing boxes.
  - *Reading Comprehension*: Informational passages with line numbers, highlighted vocabulary banks, multiple-choice bubbles, and written short-answer lines.
  - *Grammar & Mechanics*: Sentence editing clinic (capitalization & ending punctuation corrections) and 2-column parts-of-speech matching.
  - *Science Diagrams*: Anatomy matching (roots, stems, leaves, flowers) and photosynthesis inquiry questions.
- **Curriculum Roadmap & Milestone Tracking**: Progressive learning pathways for Mathematics, Phonics, and Science with explicit criteria for *"When to Move On"* (mastery) versus *"When to Keep Practicing"* (warning signs).
- **"Why We Are Doing This" Parent & Educator Guides**: Collapsible guidance banner on every worksheet explaining the cognitive goal, curriculum standard, and verbal coaching prompts.
- **Kid-Friendly Directions**: Age-tailored directions with visual emoji icons (✏️, ✂️, 🔢) so young learners can understand tasks independently.
- **Local Session Observation Storage**: In-app logging tool that saves session scores, timing, and qualitative child observations directly to `student_progress.json` for AI progress analysis.
- **Singapore Math & CCSS Numeracy**: 2×5 Ten-Frames for perceptual subitizing and part-whole Number Bonds alongside vertical arithmetic drills.
- **Orton-Gillingham Phonics**: Controlled decodable CVC words with Elkonin sound boxes and handwriting guidelines.
- **Core Knowledge & Inquiry Science**: Biological classification (Living vs. Non-Living) and outdoor wilderness survival STEM (Rule of Threes).
- **Pediatric Motor Safeguards**: Bottom-of-page scissor cut strips with thick dashed lines designed for early developmental fine-motor stages.
- **1-Click Print & PDF**: Pixel-perfect `@media print` styling for standard 8.5×11 Letter paper.
- **Teacher Answer Keys**: Companion solution keys with pedagogical rubrics.

## Quickstart

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 3. Run Tests
```bash
npm test
```

## Collaborative AI Workflow

1. Explore the **Curriculum Roadmap** in the app to identify your child's current milestone.
2. Select and print the corresponding worksheet.
3. Work through the sheet with your child and click **"Log Child Notes"** to record their score and qualitative observations (what clicked, where they hesitated).
4. In our conversation, ask Antigravity to analyze the notes:
   > *"Check my notes in student_progress.json and advise what we should practice next."*
5. Antigravity analyzes the cognitive roadblocks, advises whether to advance or reinforce, and writes the next custom worksheet straight into your app!

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
