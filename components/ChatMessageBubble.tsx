import React from 'react';
import { ChatMessage } from '../types';

interface ChatMessageBubbleProps {
  message: ChatMessage;
}

const ChatMessageBubble: React.FC<ChatMessageBubbleProps> = ({ message }) => {
  const isUser = message.sender === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} animate-fade-in-up`}>
      <div className={`
        relative max-w-xs md:max-w-md px-4 py-2 rounded-2xl
        border 
        ${isUser 
          ? 'bg-cyan-500/10 border-cyan-400/30 text-right rounded-br-none' 
          : 'bg-white/10 border-white/20 text-left rounded-bl-none'
        }
      `}>
        <p className="text-white/90 whitespace-pre-wrap">{message.text}</p>
        <div className={`
          absolute bottom-0 h-full w-full rounded-2xl
          opacity-20 blur-md
          ${isUser ? 'bg-cyan-400' : 'bg-white'}
        `}></div>
      </div>
    </div>
  );
};

export default ChatMessageBubble;
