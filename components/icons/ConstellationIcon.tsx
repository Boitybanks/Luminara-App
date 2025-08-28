import React from 'react';

const ConstellationIcon: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="6.5" cy="6.5" r="2.5" />
        <circle cx="17.5" cy="17.5" r="2.5" />
        <circle cx="6.5" cy="17.5" r="2.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 7.5l7 9M8.5 16.5l-1-8" />
    </svg>
);

export default ConstellationIcon;