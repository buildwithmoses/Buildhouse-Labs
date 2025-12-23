
import React from 'react';

export const FramerBadge: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <div className="bg-white text-black px-4 py-2 rounded-lg flex items-center gap-2 shadow-xl cursor-default transition-transform hover:scale-105">
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
          <path d="M4 0h16v8l-8 8 8 8H4v-8l8-8-8-8z" />
        </svg>
        <span className="text-xs font-bold tracking-tight">Made in Framer</span>
      </div>
    </div>
  );
};
