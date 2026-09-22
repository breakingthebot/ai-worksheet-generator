# AI Worksheet Generator

An evidence-based educational tool that generates print-ready worksheets and teacher answer keys anchored to real curriculum standards (Common Core State Standards, Singapore Math CPA, and Orton-Gillingham Phonics).

## Features

- **Singapore Math & CCSS Numeracy**: Generates 2×5 Ten-Frames for perceptual subitizing and part-whole Number Bonds instead of abstract drills.
- **Orton-Gillingham Phonics**: Strictly controlled decodable text (CVC words, blends, digraphs) with Elkonin sound boxes and handwriting guidelines.
- **Core Knowledge & Inquiry Science**: Classification activities (Living vs Non-Living) and outdoor survival science scenarios.
- **Pediatric Motor & Ergonomic Safeguards**: Bottom-of-page scissor cut strips with thick dashed guidelines designed for early fine-motor stages.
- **1-Click Print & PDF**: Pixel-perfect `@media print` styling for standard 8.5×11 Letter paper.
- **Teacher Answer Keys**: Instant solution companion with grading rubrics.
- **Offline Out-of-the-Box**: Includes a deterministic generator engine that works immediately without API keys.

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

## AI Configuration (Optional)

The application works 100% offline out-of-the-box using its built-in pedagogical compiler. If you wish to connect an AI provider:

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Add your Gemini or OpenAI API key:
   ```env
   VITE_AI_PROVIDER="gemini"
   VITE_GEMINI_API_KEY="your-api-key-here"
   ```

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
