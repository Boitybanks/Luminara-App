import React from 'react';

const HandshakeIcon: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75a3.75 3.75 0 01-3.75-3.75v-2.25c0-.99.81-1.8 1.8-1.8s1.8.81 1.8 1.8v2.25a1.5 1.5 0 001.5 1.5h.75a1.5 1.5 0 001.5-1.5v-2.25a3.75 3.75 0 013.75-3.75h.75a3.75 3.75 0 013.75 3.75v2.25a3.75 3.75 0 01-3.75 3.75h-2.25a.75.75 0 00-.75.75v.75c0 .414-.336.75-.75.75h-2.25a.75.75 0 01-.75-.75v-1.5a.75.75 0 00-.75-.75h-.75a3.75 3.75 0 01-3.75-3.75v-2.25A3.75 3.75 0 014.5 9.75h.75a3.75 3.75 0 013.75 3.75v2.25a3.75 3.75 0 01-3.75 3.75H3.75a.75.75 0 01-.75-.75V15c0-.99.81-1.8 1.8-1.8s1.8.81 1.8 1.8v.75a.75.75 0 00.75.75h.75" />
  </svg>
);

export default HandshakeIcon;