import { GoogleGenAI, Chat } from '@google/genai';
import type { Subject } from '../types';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const gradeLevelText = (grade: number): string => {
    const grades: { [key: number]: string } = {
        1: 'primer grado de primaria', 2: 'segundo grado de primaria', 3: 'tercer grado de primaria',
        4: 'cuarto grado de primaria', 5: 'quinto grado de primaria', 6: 'sexto grado de primaria',
        7: 'séptimo grado (secundaria)', 8: 'octavo grado (secundaria)', 9: 'noveno grado (secundaria)',
        10: 'décimo grado (secundaria)', 11: 'undécimo grado (secundaria)',
    };
    return grades[grade] || `grado ${grade}`;
}

export function createTutorChat(subject: Subject, grade: number): Chat {
  const dynamicSystemInstruction = `${subject.systemInstruction} Adicionalmente, eres un tutor experto para un estudiante de ${gradeLevelText(grade)}. Tu misión es hacer el aprendizaje visual e interactivo. Al explicar cualquier tema, busca proactivamente videos educativos relevantes de YouTube usando la herramienta de búsqueda disponible. No esperes a que te lo pidan. Integra estos videos directamente en tus respuestas para complementar tus explicaciones. Introduce siempre cada video, explicando por qué es útil. Después de explicar y mostrar los videos, haz una pregunta para mantener al estudiante involucrado y comprobar su comprensión. Adapta la profundidad y complejidad de todo tu contenido a la edad del estudiante.`;

  const chat: Chat = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: dynamicSystemInstruction,
      temperature: 0.8,
      topP: 0.9,
      tools: [{ googleSearch: {} }],
    },
  });
  return chat;
}