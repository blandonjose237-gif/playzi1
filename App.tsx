
import React, { useState, useCallback, useRef, useEffect } from 'react';
// FIX: Import GenerateContentResponse to correctly type the response from the Gemini API.
import type { Chat, GenerateContentResponse } from '@google/genai';
import type { Subject, ChatMessage } from './types';
import { GameState } from './types';
import { SUBJECTS } from './constants';
import { createTutorChat } from './services/geminiService';
import SubjectSelector from './components/SubjectSelector';
import ChatWindow from './components/ChatWindow';

const gradeLevelText = (grade: number): string => {
    const grades: { [key: number]: string } = {
        1: 'primer grado de primaria', 2: 'segundo grado de primaria', 3: 'tercer grado de primaria',
        4: 'cuarto grado de primaria', 5: 'quinto grado de primaria', 6: 'sexto grado de primaria',
        7: 'séptimo grado (secundaria)', 8: 'octavo grado (secundaria)', 9: 'noveno grado (secundaria)',
        10: 'décimo grado (secundaria)', 11: 'undécimo grado (secundaria)',
    };
    return grades[grade] || `grado ${grade}`;
}

export default function App(): React.ReactNode {
  const [gameState, setGameState] = useState<GameState>(GameState.SUBJECT_SELECTION);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedGrade, setSelectedGrade] = useState<number | null>(null);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const chatRef = useRef<Chat | null>(null);

  const handleSubjectSelect = (subject: Subject, grade: number): void => {
    setSelectedSubject(subject);
    setSelectedGrade(grade);
    chatRef.current = createTutorChat(subject, grade);

    const welcomeMessage: ChatMessage = {
      role: 'model',
      text: `¡Hola! Soy tu tutor de ${subject.name} para ${gradeLevelText(grade)}. ¿Qué tema quieres que exploremos hoy?`,
    };

    setChatHistory([welcomeMessage]);
    setGameState(GameState.CHATTING);
  };
  
  const handleSendMessage = useCallback(async (message: string): Promise<void> => {
    if (!chatRef.current) return;

    const userMessage: ChatMessage = { role: 'user', text: message };
    setChatHistory(prev => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);

    try {
      // FIX: Add type annotation to ensure TypeScript correctly infers types for the response object.
      const response: GenerateContentResponse = await chatRef.current.sendMessage({ message });

      const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks ?? [];
      const videoIds = groundingChunks
        // FIX: Explicitly type `chunk` as `any` to resolve type inference issues with `groundingChunks`.
        .map((chunk: any) => {
            const uri = chunk.web?.uri;
            if (!uri || !(uri.includes('youtube.com/watch') || uri.includes('youtu.be/'))) {
                return null;
            }
            try {
                if (uri.includes('youtu.be/')) {
                    const urlParts = uri.split('youtu.be/');
                    const videoId = urlParts[1].split('?')[0];
                    return videoId;
                }
                const url = new URL(uri);
                return url.searchParams.get('v');
            } catch (e) {
                console.error('Error parsing YouTube URL:', e);
                return null;
            }
        })
        .filter((id): id is string => id !== null && id.length > 0);
      
      // FIX: Add a type assertion to `videoIds` to ensure `uniqueVideoIds` is correctly typed as `string[]`. This resolves an issue where it was being inferred as `unknown[]`.
      const uniqueVideoIds = [...new Set(videoIds as string[])];

      const botMessage: ChatMessage = {
        role: 'model',
        text: response.text,
        videoIds: uniqueVideoIds.length > 0 ? uniqueVideoIds : undefined,
      };
      setChatHistory(prev => [...prev, botMessage]);
    } catch (err) {
      console.error(err);
      setError('Failed to get a response. Please check your connection or API key and try again.');
      setChatHistory(prev => [...prev, { role: 'model', text: 'Oops! I had a little trouble thinking. Could you try asking again?', isError: true }]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const resetToHome = (): void => {
      setGameState(GameState.SUBJECT_SELECTION);
      setSelectedSubject(null);
      setSelectedGrade(null);
      setChatHistory([]);
      chatRef.current = null;
  }

  const handleBackToSubjects = (): void => {
      setGameState(GameState.SUBJECT_SELECTION);
      setSelectedSubject(null);
      setChatHistory([]);
      chatRef.current = null;
      // selectedGrade is intentionally preserved
  }

  const resetChat = (): void => {
      if (selectedSubject && selectedGrade) {
          chatRef.current = createTutorChat(selectedSubject, selectedGrade);
          const welcomeMessage: ChatMessage = {
              role: 'model',
              text: `¡Hola! Soy tu tutor de ${selectedSubject.name} para ${gradeLevelText(selectedGrade)}. ¿Qué tema quieres que exploremos hoy?`,
          };
          setChatHistory([welcomeMessage]);
      }
  }

  const renderContent = (): React.ReactNode => {
    switch (gameState) {
      case GameState.SUBJECT_SELECTION:
        return <SubjectSelector
                    subjects={SUBJECTS}
                    onSelect={handleSubjectSelect}
                    initialGrade={selectedGrade}
                    initialLevel={selectedGrade ? (selectedGrade <= 6 ? 'primary' : 'secondary') : undefined}
                />;
      case GameState.CHATTING:
        return <ChatWindow
                    messages={chatHistory}
                    isLoading={isLoading}
                    onSendMessage={handleSendMessage}
                    subject={selectedSubject}
                    onResetChat={resetChat}
                    onBackToSubjects={handleBackToSubjects}
                    onResetHome={resetToHome}
                />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-800 text-white min-h-screen font-sans flex flex-col items-center justify-center p-4 selection:bg-indigo-500 selection:text-white">
        <header className="w-full max-w-5xl mx-auto py-4 flex items-center justify-center">
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text">
                Playzi
            </h1>
        </header>
        <main className="w-full max-w-5xl h-[calc(100vh-120px)] bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-2xl shadow-2xl shadow-indigo-900/20 p-0.5">
            <div className="w-full h-full bg-gray-900 rounded-[14px] flex flex-col">
              {renderContent()}
            </div>
        </main>
    </div>
  );
}
