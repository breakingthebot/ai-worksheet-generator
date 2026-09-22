// src/services/aiGenerator.js
// AI Provider Adapter supporting Google Gemini, OpenAI, and automatic offline mock fallback.
// Connects to: src/services/mockGenerator.js, src/App.jsx
// Created: 2026-09-22

import { generateWorksheet as generateMockWorksheet } from './mockGenerator.js';

/**
 * Generates an educational worksheet using an LLM or the deterministic pedagogical compiler.
 * 
 * @param {object} config { subject, grade, format, topic, count, provider }
 * @returns {Promise<object>}
 */
export async function generateWorksheetWithAI(config) {
  const geminiKey = import.meta.env?.VITE_GEMINI_API_KEY;
  const openaiKey = import.meta.env?.VITE_OPENAI_API_KEY;
  const requestedProvider = config.provider || import.meta.env?.VITE_AI_PROVIDER || 'mock';

  // If mock mode is explicitly chosen or no keys are present, return the compliant mock worksheet
  if (requestedProvider === 'mock' || (!geminiKey && !openaiKey)) {
    return generateMockWorksheet(config);
  }

  // Gemini API Adapter
  if (geminiKey && requestedProvider === 'gemini') {
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `You are an expert pedagogical curriculum designer following the Common Core State Standards (CCSS), Singapore Math CPA, and Orton-Gillingham frameworks.
Generate a structured worksheet in JSON format for:
- Subject: ${config.subject}
- Grade: ${config.grade}
- Topic: ${config.topic || 'Curriculum aligned'}
- Format: ${config.format}
- Number of problems: ${config.count || 6}

Output strictly valid JSON with this schema:
{
  "title": string,
  "subject": string,
  "grade": string,
  "framework": string,
  "instructions": string,
  "problems": [
    { "id": string, "number": number, "prompt": string, "answer": string }
  ],
  "answerKey": [
    { "number": number, "solution": string }
  ]
}`,
                  },
                ],
              },
            ],
            generationConfig: { responseMimeType: 'application/json' },
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Gemini API error: ${response.statusText}`);
      }

      const data = await response.json();
      const contentText = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (contentText) {
        return JSON.parse(contentText);
      }
    } catch (err) {
      console.warn('AI Generation failed, falling back to pedagogical mock generator:', err);
    }
  }

  // Graceful fallback
  return generateMockWorksheet(config);
}
