// src/main.jsx
// Main entry point for React mounting.
// Connects to: src/App.jsx, src/styles/index.css
// Created: 2026-09-22

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
