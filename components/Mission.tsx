
import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Brain, Cpu } from 'lucide-react';

interface HighlightParagraphProps {
  children: React.ReactNode;
}

const HighlightParagraph: React.FC<HighlightParagraphProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // We highlight the text when its top reaches the 70% mark of the screen
      // and keep it highlighted as long as it's above that.
      const activationPoint = windowHeight * 0.75;
      
      if (rect.top < activationPoint) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount to catch elements already in view
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${
        isActive 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-20 translate-y-4'
      }`}
    >
      {children}
    </div>
  );
};

export const Mission: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 md:px-12 flex flex-col gap-24 md:gap-32 py-20">
      <HighlightParagraph>
        <p className="text-3xl md:text-5xl font-medium leading-tight md:leading-snug text-white">
          We believe that AI <Sparkles className="inline-block mx-1 mb-1 text-indigo-400/80" size={40} /> should amplify human potential — not replace it.
        </p>
      </HighlightParagraph>

      <HighlightParagraph>
        <p className="text-3xl md:text-5xl font-medium leading-tight md:leading-snug text-white">
          By designing tools that are smart, ethical, and intuitive, we help people <Brain className="inline-block mx-1 mb-1 text-emerald-400/80" size={40} /> unlock deeper insights, work more creatively, and make better decisions.
        </p>
      </HighlightParagraph>

      <HighlightParagraph>
        <p className="text-3xl md:text-5xl font-medium leading-tight md:leading-snug text-white">
          With technology <Cpu className="inline-block mx-1 mb-1 text-blue-400/80" size={40} /> that adapts to real-world needs, we’re shaping a future where humans <span className="text-white/30">and AI build together.</span>
        </p>
      </HighlightParagraph>
    </div>
  );
};
