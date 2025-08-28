import React from 'react';

interface HubProps {
  isActive: boolean;
}

const WorkforceHub: React.FC<HubProps> = ({ isActive }) => {
  return (
    <div className={`
      w-full max-w-2xl h-[32rem] p-8 rounded-2xl 
      bg-white/5 border border-white/10 backdrop-blur-lg
      transition-all duration-700 ease-in-out
      ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
    `}>
      <h2 className="text-4xl font-thin text-cyan-200 tracking-widest">WORKFORCE</h2>
      <p className="mt-4 text-white/60">Collaborate on projects and find new opportunities.</p>
    </div>
  );
};

export default WorkforceHub;