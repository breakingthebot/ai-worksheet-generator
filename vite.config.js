// vite.config.js
// Vite bundler configuration with local student progress storage middleware.
// Connects to: student_progress.json, src/components/notes/SessionNotesDrawer.jsx
// Created: 2026-09-22

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

function localStudentStoragePlugin() {
  return {
    name: 'local-student-storage-plugin',
    configureServer(server) {
      server.middlewares.use('/api/progress', (req, res) => {
        const filePath = path.resolve(process.cwd(), 'student_progress.json');

        if (req.method === 'GET') {
          if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf8');
            res.setHeader('Content-Type', 'application/json');
            return res.end(data);
          }
          res.setHeader('Content-Type', 'application/json');
          return res.end(JSON.stringify({ sessions: [], milestoneStatus: {} }));
        }

        if (req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              JSON.parse(body); // validate valid JSON
              fs.writeFileSync(filePath, body, 'utf8');
              res.setHeader('Content-Type', 'application/json');
              return res.end(JSON.stringify({ success: true }));
            } catch (err) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              return res.end(JSON.stringify({ error: 'Invalid JSON payload' }));
            }
          });
        }
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), localStudentStoragePlugin()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
