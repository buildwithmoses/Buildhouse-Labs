
import React, { useState, useEffect } from 'react';

const TESTIMONIALS = [
  {
    quote: "It's been a game-changer. The AI saves us hours each week and delivers insights that help us make faster, smarter decisions.",
    author: "Linda Evans",
    role: "Head of Marketing at Lumexa Labs",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    quote: "The clarity we've gained in our document processing pipeline is unprecedented. MONO AI is simply in a league of its own.",
    author: "Marcus Chen",
    role: "CTO at Orbitc",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    quote: "Integrating this platform was the best operational decision we've made this year. It feels like adding a superpower to the team.",
    author: "Sarah Jenkins",
    role: "Operations Director at Springfield",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const handleNext = () => {
    setIsExiting(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
      setIsExiting(false);
    }, 400);
  };

  return (
    <div className="w-full bg-black py-24 md:py-32 flex flex-col items-center">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Quote */}
        <div 
          className={`transition-all duration-500 transform ${
            isExiting ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'
          }`}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-16 tracking-tight">
            "{TESTIMONIALS[activeIndex].quote}"
          </h2>

          {/* Attribution */}
          <div className="flex items-center justify-center gap-4 text-left">
            <img 
              src={TESTIMONIALS[activeIndex].avatar} 
              alt={TESTIMONIALS[activeIndex].author}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover grayscale brightness-110"
            />
            <div>
              <p className="text-white font-bold text-base md:text-lg tracking-tight">
                {TESTIMONIALS[activeIndex].author}
              </p>
              <p className="text-white/40 text-sm md:text-base">
                {TESTIMONIALS[activeIndex].role}
              </p>
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-20">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if(idx !== activeIndex) {
                   setIsExiting(true);
                   setTimeout(() => {
                     setActiveIndex(idx);
                     setIsExiting(false);
                   }, 400);
                }
              }}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                idx === activeIndex 
                  ? 'w-10 bg-white/60' 
                  : 'w-10 bg-white/10 hover:bg-white/20'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
