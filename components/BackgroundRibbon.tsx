
import React from 'react';

export const BackgroundRibbon: React.FC = () => {
  return (
    <svg 
      className="absolute top-0 left-0 w-full h-full opacity-60"
      viewBox="0 0 1440 900" 
      preserveAspectRatio="xMidYMid slice" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M-100 200C200 100 600 800 1000 400C1200 200 1400 300 1600 500" 
        stroke="url(#gradient-ribbon)" 
        strokeWidth="120" 
        strokeLinecap="round" 
        className="blur-3xl animate-pulse"
      />
      <path 
        d="M-100 220C250 120 650 820 1050 420C1250 220 1450 320 1650 520" 
        stroke="url(#gradient-ribbon-2)" 
        strokeWidth="60" 
        strokeLinecap="round" 
        style={{ filter: 'blur(80px)' }}
      />
      
      <defs>
        <linearGradient id="gradient-ribbon" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4f46e5" />
          <stop offset="25%" stopColor="#7c3aed" />
          <stop offset="50%" stopColor="#10b981" />
          <stop offset="75%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <linearGradient id="gradient-ribbon-2" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#064e3b" />
          <stop offset="50%" stopColor="#4338ca" />
          <stop offset="100%" stopColor="#701a75" />
        </linearGradient>
      </defs>
    </svg>
  );
};
