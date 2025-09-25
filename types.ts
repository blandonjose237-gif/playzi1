// FIX: Import React to provide the React namespace for types like React.ReactNode.
import React from 'react';

export interface Subject {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  systemInstruction: string;
  level: 'primary' | 'secondary';
  grades?: number[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
  videoIds?: string[];
}

export enum GameState {
  SUBJECT_SELECTION = 'SUBJECT_SELECTION',
  CHATTING = 'CHATTING',
}

export interface Game {
  id: string;
  title: string;
  description: string;
  embedUrl: string;
  subjectId: string;
}
