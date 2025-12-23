
import React from 'react';

const LOGO_DATA = [
  { name: 'Springfield', icon: '✦' },
  { name: 'Orbitc', icon: '◉' },
  { name: 'Cloud', icon: '☁' },
  { name: 'Amsterdam', icon: '◌' },
  { name: 'Linear', icon: '≣' }
];

export const Logos: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center gap-6 md:gap-8 mt-12 md:mt-20 opacity-40 hover:opacity-100 transition-opacity duration-500">
      <span className="text-[11px] md:text-[13px] uppercase tracking-[0.2em] font-medium text-white/60 text-center px-4">
        Trusted by industry leaders
      </span>
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-16 grayscale px-6">
        {LOGO_DATA.map((logo) => (
          <div key={logo.name} className="flex items-center gap-2 md:gap-3">
            <span className="text-xl md:text-2xl font-bold">{logo.icon}</span>
            <span className="text-base md:text-lg font-bold tracking-tight">{logo.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
