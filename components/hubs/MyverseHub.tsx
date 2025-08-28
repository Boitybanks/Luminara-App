import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../../types';
import ChatIcon from '../icons/ChatIcon';
import ChatMessageBubble from '../ChatMessageBubble';

interface HubProps {
  isActive: boolean;
}

const MyverseHub: React.FC<HubProps> = ({ isActive }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 1, text: "Welcome to your Myverse. How can I help you today?", sender: 'contact' }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    const userMessage: ChatMessage = {
      id: Date.now(),
      text: newMessage,
      sender: 'user',
    };
    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');

    // Simulate contact reply
    setTimeout(() => {
      const contactReply: ChatMessage = {
        id: Date.now() + 1,
        text: "That's interesting! Tell me more.",
        sender: 'contact',
      };
      setMessages(prev => [...prev, contactReply]);
    }, 1500);
  };

  return (
    <div className={`
      w-full max-w-2xl h-[32rem] p-4 sm:p-6 rounded-2xl 
      bg-white/5 border border-white/10 backdrop-blur-lg
      flex flex-col
      transition-all duration-700 ease-in-out
      ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
      ${isActive ? '' : 'absolute'}
    `}>
      <h2 className="text-3xl font-thin text-cyan-200 tracking-widest text-center mb-4">MYVERSE CHAT</h2>
      
      <div className="flex-grow overflow-y-auto pr-2 space-y-4">
        {messages.map(msg => (
          <ChatMessageBubble key={msg.id} message={msg} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSendMessage} className="mt-4 flex items-center space-x-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Message your contacts..."
          className="flex-grow bg-black/20 border border-cyan-300/20 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder-white/40"
          aria-label="Chat message input"
        />
        <button 
          type="submit"
          className="p-3 rounded-full bg-cyan-500/50 hover:bg-cyan-500/80 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-cyan-400"
          aria-label="Send message"
        >
          <ChatIcon />
        </button>
      </form>
    </div>
  );
};

export default MyverseHub;
