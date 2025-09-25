import React from 'react';
import { BackArrowIcon } from './icons';

interface GameWindowProps {
  url: string;
  onClose: () => void;
}

const GameWindow: React.FC<GameWindowProps> = ({ url, onClose }) => {
  return (
    <div className="absolute inset-0 bg-gray-900 z-50 flex flex-col h-full w-full rounded-[14px] overflow-hidden">
      <header className="flex items-center p-4 border-b border-gray-700/50 shrink-0">
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200"
        >
          <BackArrowIcon className="w-6 h-6" />
          <span className="font-semibold">Volver a los Juegos</span>
        </button>
      </header>
      <div className="flex-1 w-full h-full">
        <iframe
          src={url}
          className="w-full h-full border-0"
          allowFullScreen
          title="Educational Game"
        ></iframe>
      </div>
    </div>
  );
};

export default GameWindow;
