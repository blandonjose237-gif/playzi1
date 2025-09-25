import React from 'react';
import type { ChatMessage } from '../types';
import { EduBotIcon, UserIcon } from './icons';

interface MessageProps {
  message: ChatMessage;
  isLoading?: boolean;
}

const LoadingDots: React.FC = () => (
    <div className="flex items-center space-x-2">
        <span className="text-gray-300">EduBot está pensando</span>
        <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
    </div>
);

const SimpleMarkdown: React.FC<{ text: string }> = ({ text }) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return (
        <p className="whitespace-pre-wrap">
            {parts.map((part, i) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={i}>{part.slice(2, -2)}</strong>;
                }
                return part;
            })}
        </p>
    );
};


const Message: React.FC<MessageProps> = ({ message, isLoading = false }) => {
  const isUser = message.role === 'user';

  const containerClasses = `flex items-start gap-4 ${isUser ? 'justify-end' : ''}`;
  const bubbleClasses = `max-w-xl px-5 py-3 rounded-2xl ${
    isUser
      ? 'bg-indigo-600 text-white rounded-tr-none'
      : message.isError 
      ? 'bg-red-500/20 text-red-200 border border-red-500/50 rounded-tl-none'
      : 'bg-gray-700 text-gray-200 rounded-tl-none'
  }`;

  return (
    <div className={containerClasses}>
      {!isUser && (
        <div className="flex-shrink-0 w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center border-2 border-gray-700">
          <EduBotIcon className="w-6 h-6" />
        </div>
      )}
      <div className="flex flex-col gap-2 items-start">
        <div className={bubbleClasses}>
            {isLoading ? <LoadingDots /> : <SimpleMarkdown text={message.text} />}
        </div>
        {!isUser && message.videoIds && message.videoIds.length > 0 && (
            <div className="max-w-xl w-full grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {message.videoIds.slice(0, 2).map(videoId => (
                    <div key={videoId} className="aspect-video">
                        <iframe
                            className="w-full h-full rounded-lg shadow-lg"
                            src={`https://www.youtube.com/embed/${videoId}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                ))}
            </div>
        )}
      </div>
       {isUser && (
        <div className="flex-shrink-0 w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center border-2 border-gray-600">
          <UserIcon className="w-6 h-6" />
        </div>
      )}
    </div>
  );
};

export default Message;