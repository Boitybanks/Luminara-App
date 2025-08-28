import React from 'react';
import { Hub } from '../types';

interface BubbleProps {
  hub: Hub;
  isActive: boolean;
  onClick: () => void;
  animationDelay: string;
}

const Bubble: React.FC<BubbleProps> = ({ hub, isActive, onClick, animationDelay }) => {
  const { label, Icon } = hub;

  return (
    <button
      onClick={onClick}
      className={`
        relative flex flex-col items-center justify-center 
        w-28 h-28 md:w-36 md:h-36 
        rounded-full 
        border border-cyan-300/20
        bg-cyan-400/10 backdrop-blur-md
        text-white/80
        transition-all duration-500 ease-in-out
        hover:border-cyan-300/50 hover:bg-cyan-400/20 hover:scale-105
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0A1B2A] focus:ring-cyan-400
        animate-drift
      `}
      style={{ animationDelay }}
      aria-label={`Navigate to ${label} hub`}
      aria-pressed={isActive}
    >
      <div className={`
        absolute inset-0 rounded-full
        transition-all duration-500 ease-in-out
        ${isActive ? 'shadow-[0_0_25px_5px_rgba(0,255,255,0.4)]' : 'shadow-[0_0_15px_rgba(0,255,255,0.1)]'}
      `}></div>
      <Icon className="w-8 h-8 md:w-10 md:h-10 text-cyan-200/80 mb-1" />
      <span className="text-sm md:text-base font-light tracking-wider">{label}</span>
    </button>
  );
};

export default Bubble;