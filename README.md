# AI Worksheet Generator & Curriculum Studio

An evidence-based educational studio that combines a structured K-1 curriculum roadmap, print-ready worksheets, and local session observation logging anchored in Common Core State Standards (CCSS), Singapore Math CPA, and Orton-Gillingham Phonics.

## Features

- **📅 180-Day School Year Academic Pacing Engine**:
  - Full standard 180-day US school year structured across **36 Weeks and 4 Quarters** (9 weeks / 45 days per quarter).
  - Integrated **36-Week Pacing Guide Modal** with thematic weekly anchors across all four subjects, quarter milestones (100th Day Celebration, Mid-Year Assessment, Kindergarten Graduation Bridge), and 1-click day jumping.
  - Real-time instructional day tracking (`Quarter • Week • Day X of 180`) with progress indicators.
- **🔢 Kindergarten Quarter 1 Math Progression (CCSS K.CC Counting & Cardinality)**:
  - 10-day early numeracy continuum strictly avoiding premature written addition/subtraction equations:
    - *Day 1*: One-to-One Counting & Tactile Subitizing 1–3 (touch-and-count points beneath apples, stars, puppies).
    - *Day 2*: 5-Frame Array Subitizing & Numeral Formation (full row is 5, stroke practice).
    - *Day 3*: Successive Quantities & "One More" (counting on 1–5 without restarting).
    - *Day 4*: Comparing Sets: Which Group has MORE? (side-by-side group matching lines).
    - *Day 5*: Comparing Sets: Which Group has FEWER? (less than, fewer, and equal quantities).
    - *Day 6*: Ten-Frame Launch: Quantities 6 & 7 (top row 5 + bottom row extra dots).
    - *Day 7*: Ten-Frame Quantities 8 & 9 (visualizing empty space complements to landmark 10).
    - *Day 8*: Landmark Number 10 Benchmark (full ten-frame & 2-digit numeral 10 formation).
    - *Day 9*: Numeral Comparison (comparing written numbers 1–10 directly: greater vs. less).
    - *Day 10*: Quarter 1 Grand Champion Review (mixed counting, ten-frames, comparisons & champion badge).
  - Adaptive ten-frame rendering displaying single-numeral write boxes for early counting rather than premature equations.
- **🗺️ Core Knowledge Social Studies & Geography Track (CKHG)**:
  - 10-day foundational Kindergarten track covering **Maps vs. Globes** (3D sphere vs flat, water vs land), **Cardinal Directions & Compass Rose** (North, South, East, West), **Map Keys & Room Mapping**, **Natural Landforms** (mountains, rivers, plains), **Native American Shelters** (Tipis, Pueblos, Longhouses), **Founding Presidents** (George Washington & Abraham Lincoln), **American Symbols** (The Flag & Liberty Bell), and **Civics & Community Helpers**.
  - Word-for-word parent scripts (`🗣️ Say this`, `🖐️ What to do`, `👁️ What to look for`) and printable worksheets with primary handwriting lines and drawing scratchpads.
- **✨ Personalized Custom Adventure Studio**: Create fun, custom worksheets starring your child and their pets/friends as the main heroes!
  - Supports **Kindergarten through 5th Grade** across **Language Arts, Math, Science, and Social Studies**.
  - Weaves high-interest custom topics (dinosaurs, space rockets, pirate islands, treehouse safaris) into authentic Common Core & NGSS challenges.
  - Generates reading passages, ruled primary handwriting lines for writing, and dedicated scratchpad drawing boxes for showing math work.
  - Powered by Google Gemini API with a zero-setup, offline deterministic curriculum engine fallback.
- **Dual-Mode Daily Teaching Cockpit**: Switch seamlessly between **Guided Foundation Lessons (CPA)** and **Traditional Classroom Drill Packets** with 1-click printing and word-for-word parent scripts across **Math, Phonics, Science, and Social Studies**.
- **Traditional Classroom Multi-Section Worksheets**:
  - *Math*: 12-problem vertical addition/subtraction drills, real-world story problems, and scratchpad drawing boxes.
  - *Concrete Visual Scaffolding Toggle (Touch-Point Counting Dots)*: 1-click toggle that displays 5-structured tactile counting dots directly beside or on vertical numerals (TouchMath style) to bridge concrete CPA manipulatives with abstract vertical calculations.
  - *Reading Comprehension*: Informational passages with line numbers, highlighted vocabulary banks, multiple-choice bubbles, and written short-answer lines.
  - *Grammar & Mechanics*: Sentence editing clinic (capitalization & ending punctuation corrections) and 2-column parts-of-speech matching.
  - *Science Diagrams*: Anatomy matching (roots, stems, leaves, flowers) and photosynthesis inquiry questions.
  - *Social Studies Drills*: Geographic matching, compass rose direction drills, and history facts.
- **Curriculum Roadmap & Milestone Tracking**: Progressive learning pathways for Mathematics, Phonics, Science, and Social Studies with explicit criteria for *"When to Move On"* (mastery) versus *"When to Keep Practicing"* (warning signs).
- **"Why We Are Doing This" Parent & Educator Guides**: Collapsible guidance banner on every worksheet explaining the cognitive goal, curriculum standard, and verbal coaching prompts.
- **Kid-Friendly Directions**: Age-tailored directions with visual emoji icons (✏️, ✂️, 🔢, 🧭) so young learners can understand tasks independently.
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
