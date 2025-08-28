import React from 'react';
import { Hub, HubId } from '../types';
import Bubble from './Bubble';

interface NavigationProps {
  hubs: Hub[];
  activeHub: HubId;
  setActiveHub: (id: HubId) => void;
}

const Navigation: React.FC<NavigationProps> = ({ hubs, activeHub, setActiveHub }) => {
  return (
    <nav className="w-full flex justify-center p-4 md:p-6" aria-label="Main navigation">
      <div className="flex items-center justify-center space-x-4 md:space-x-8">
        {hubs.map((hub, index) => (
          <Bubble
            key={hub.id}
            hub={hub}
            isActive={activeHub === hub.id}
            onClick={() => setActiveHub(hub.id)}
            animationDelay={`${index * 2}s`}
          />
        ))}
      </div>
    </nav>
  );
};

export default Navigation;