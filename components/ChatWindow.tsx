import React, { useState, useRef, useEffect } from 'react';
import type { ChatMessage, Subject } from '../types';
import Message from './Message';
import { SendIcon, ResetIcon, HomeIcon, SubjectsIcon } from './icons';

interface ChatWindowProps {
  messages: ChatMessage[];
  isLoading: boolean;
  onSendMessage: (message: string) => void;
  subject: Subject | null;
  onResetChat: () => void;
  onResetHome: () => void;
  onBackToSubjects: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages, isLoading, onSendMessage, subject, onResetChat, onResetHome, onBackToSubjects }) => {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSendMessage(input);
      setInput('');
    }
  };

  return (
    <div className="flex flex-col h-full w-full bg-gray-900 rounded-lg">
      <header className="relative flex items-center justify-between p-4 border-b border-gray-700/50 shrink-0">
          <div className="flex items-center gap-3">
              <div className="w-10 h-10 text-white">{subject?.icon}</div>
              <div>
                <h2 className="font-bold text-lg text-white">{subject?.name}</h2>
              </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={onResetChat} className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-full transition-colors" title="Change Topic">
                <ResetIcon className="w-5 h-5" />
            </button>
            <button onClick={onBackToSubjects} className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-full transition-colors" title="Change Subject">
                <SubjectsIcon className="w-5 h-5" />
            </button>
             <button onClick={onResetHome} className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-full transition-colors" title="Go Home">
                <HomeIcon className="w-5 h-5" />
            </button>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-400"></div>
      </header>
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((msg, index) => (
          <Message key={index} message={msg} />
        ))}
        {isLoading && <Message message={{ role: 'model', text: '...' }} isLoading={true} />}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 border-t border-gray-700/50 shrink-0">
        <form onSubmit={handleSubmit} className="flex items-center gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your answer or ask a question..."
            className="w-full px-4 py-3 bg-gray-800 border border-transparent rounded-full text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="p-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500"
          >
            <SendIcon className="w-6 h-6" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatWindow;