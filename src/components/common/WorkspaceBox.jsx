// src/components/common/WorkspaceBox.jsx
// High-contrast, well-defined workspace zone designed to scaffold executive function.
// Connects to: src/components/math/TenFrameView.jsx, src/components/math/NumberBondView.jsx
// Created: 2026-09-22

import React from 'react';

export default function WorkspaceBox({ children, title, subtitle, className = '' }) {
  return (
    <div className={`border-2 border-slate-300 rounded-lg p-4 bg-white relative break-inside-avoid shadow-sm ${className}`}>
      {title && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">{title}</span>
          {subtitle && <span className="text-[11px] text-slate-400">{subtitle}</span>}
        </div>
      )}
      {children}
    </div>
  );
}
