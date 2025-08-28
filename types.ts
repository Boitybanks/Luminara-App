import React from 'react';

export type HubId = 'myverse' | 'marketplace' | 'workforce' | 'social';

export interface Hub {
  id: HubId;
  label: string;
  Icon: React.FC<{ className?: string }>;
}

export interface ChatMessage {
  id: number;
  text: string;
  sender: 'user' | 'contact';
}
