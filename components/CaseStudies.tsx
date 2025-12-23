
import React from 'react';

const CaseStudyItem = ({ 
  quote, 
  stats, 
  logo, 
  logoIcon, 
  reversed = false, 
  gradientClass,
  isTymeless = false
}: { 
  quote: string; 
  stats: { label: string; value: string }[]; 
  logo: string; 
  logoIcon: React.ReactNode; 
  reversed?: boolean;
  gradientClass: string;
  isTymeless?: boolean;
}) => {
  return (
    <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24 py-16 md:py-28`}>
      {/* Text Content Block */}
      <div className="flex-1 space-y-10">
        <h3 className="text-3xl md:text-5xl font-bold leading-[1.1] text-white max-w-xl tracking-tight">
          "{quote}"
        </h3>
        
        <div className="flex gap-12 md:gap-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <p className="text-4xl md:text-5xl font-bold text-white tracking-tighter">{stat.value}</p>
              <p className="text-white/40 text-[10px] md:text-xs uppercase tracking-[0.2em] font-black">{stat.label}</p>
            </div>
          ))}
        </div>

        <button className="px-8 py-3.5 bg-neutral-900 border border-white/10 hover:border-white/20 text-white rounded-full text-sm font-bold transition-all hover:bg-neutral-800 active:scale-95">
          Get started
        </button>
      </div>

      {/* Visual Card Block */}
      <div className="flex-1 w-full flex justify-center lg:justify-end">
        <div 
          className={`relative w-full max-w-[440px] aspect-square rounded-[2.5rem] overflow-hidden group border border-white/5 shadow-2xl transition-all duration-700 hover:scale-[1.02] hover:shadow-white/5 flex items-center justify-center`}
        >
          {/* Iridescent Gradient Background */}
          <div className={`absolute inset-0 opacity-90 group-hover:opacity-100 transition-opacity duration-700 ${gradientClass}`}></div>
          
          {/* Subtle Noise Texture overlay */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

          {/* Centered Logo Asset */}
          <div className="relative z-10 flex items-center gap-4 transition-transform duration-700 group-hover:scale-105">
             <div className="drop-shadow-2xl flex items-center justify-center">
              {logoIcon}
             </div>
             <span className={`text-3xl tracking-tight text-white drop-shadow-xl ${isTymeless ? 'font-tymeless !font-normal' : 'md:text-4xl font-bold'}`}>
               {logo}
             </span>
          </div>

          {/* Glassy overlay at bottom for depth */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export const CaseStudies: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] max-w-4xl mx-auto">
          Built with Buildhouse
        </h2>
      </div>

      <div className="flex flex-col">
        {/* Tymeless Case Study */}
        <CaseStudyItem 
          quote="Working with this AI platform helped us launch faster and smarter than ever before."
          logo="Tymeless"
          isTymeless={true}
          logoIcon={(
            <svg 
              viewBox="0 0 256 256" 
              className="w-10 h-10 md:w-11 md:h-11 text-primary" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="256" height="256" fill="none" />
              <path 
                d="M232,104a104.11,104.11,0,0,1-104,104,103.42,103.42,0,0,1-13.06-.82l-18.28,18.28a6,6,0,0,1-8.49-8.49l18.28-18.28A103.42,103.42,0,0,1,104.82,185.7,104.11,104.11,0,0,1,104,136c0-57.44,46.56-104,104-104a103.42,103.42,0,0,1,13.06.82l18.28-18.28a6,6,0,0,1,8.49,8.49l-18.28,18.28A103.42,103.42,0,0,1,231.18,55.3,104.11,104.11,0,0,1,232,104Z" 
                fill="none" 
                stroke="currentColor" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="12" 
              />
              <line 
                x1="128" 
                y1="136" 
                x2="24" 
                y2="224" 
                fill="none" 
                stroke="currentColor" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="12" 
              />
            </svg>
          )}
          gradientClass="bg-[radial-gradient(circle_at_20%_20%,_#1a1a1a_0%,_#000000_100%)] after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_80%_80%,_oklch(0.65_0.15_45),_transparent_60%)] after:opacity-10"
          stats={[
            { label: 'CONVERSION', value: '+50%' },
            { label: 'ROI', value: '+145%' }
          ]}
        />

        {/* Proline Case Study */}
        <CaseStudyItem 
          reversed
          quote="We've seen a 40% drop in support tickets after integrating their AI assistant."
          logo="Proline"
          logoIcon={(
            <div className="flex flex-col gap-1.5 -rotate-12">
              <div className="w-10 h-3 bg-white rounded-full translate-x-1 shadow-lg"></div>
              <div className="w-10 h-3 bg-white rounded-full -translate-x-1 shadow-lg"></div>
            </div>
          )}
          gradientClass="bg-[linear-gradient(135deg,_#A7B5FF_0%,_#F3ACFF_45%,_#FFD68A_100%)]"
          stats={[
            { label: 'CONVERSION', value: '+120%' },
            { label: 'ROI', value: '+210%' }
          ]}
        />
      </div>
    </div>
  );
};
