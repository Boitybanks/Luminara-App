import React, { useState, useRef, TouchEvent } from 'react';
import Navigation from './components/Navigation';
import MyverseHub from './components/hubs/MyverseHub';
import MarketplaceHub from './components/hubs/MarketplaceHub';
import WorkforceHub from './components/hubs/WorkforceHub';
import SocialHub from './components/hubs/SocialHub';
import { HubId } from './types';
import { HUBS } from './constants';

const secondaryHubs = HUBS.filter(hub => hub.id !== 'myverse');

const App: React.FC = () => {
  const [activeHub, setActiveHub] = useState<HubId>('marketplace');
  const touchStartRef = useRef<number | null>(null);

  const handleTouchStart = (e: TouchEvent) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (touchStartRef.current === null) return;

    const touchEnd = e.touches[0].clientX;
    const distance = touchStartRef.current - touchEnd;
    
    // Swipe left
    if (distance > 50) {
      const currentIndex = secondaryHubs.findIndex(hub => hub.id === activeHub);
      const nextIndex = (currentIndex + 1) % secondaryHubs.length;
      setActiveHub(secondaryHubs[nextIndex].id);
      touchStartRef.current = null;
    }
    
    // Swipe right
    if (distance < -50) {
      const currentIndex = secondaryHubs.findIndex(hub => hub.id === activeHub);
      const prevIndex = (currentIndex - 1 + secondaryHubs.length) % secondaryHubs.length;
      setActiveHub(secondaryHubs[prevIndex].id);
      touchStartRef.current = null;
    }
  };

  return (
    <main 
      className="relative h-screen w-screen bg-gradient-to-br from-[#0A1B2A] via-[#0f1f3b] to-[#0A1B2A] p-4 overflow-y-auto lg:overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div className="absolute inset-0 sparkles pointer-events-none"></div>
      <div className="absolute inset-0 bg-radial-gradient(ellipse_at_center,_rgba(13,44,83,0.5)_0%,_rgba(10,27,42,0)_70%)"></div>
      
      <div className="container mx-auto h-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="w-full h-full flex items-center justify-center">
          <MyverseHub isActive={true} />
        </div>
        <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="flex-grow flex items-center justify-center w-full">
                <MarketplaceHub isActive={activeHub === 'marketplace'} />
                <WorkforceHub isActive={activeHub === 'workforce'} />
                <SocialHub isActive={activeHub === 'social'} />
            </div>
            <Navigation hubs={secondaryHubs} activeHub={activeHub} setActiveHub={setActiveHub} />
        </div>
      </div>

    </main>
  );
};

export default App;