import React, { useState, useEffect } from 'react';
import type { Subject, Game } from '../types';
import { GAMES } from '../games';
import GameWindow from './GameWindow';
import { BackArrowIcon, GameControllerIcon, Grade1Icon, Grade2Icon, Grade3Icon, Grade4Icon, Grade5Icon, Grade6Icon, Grade7Icon, Grade8Icon, Grade9Icon, Grade10Icon, Grade11Icon, RocketIcon } from './icons';

interface SubjectSelectorProps {
  subjects: Subject[];
  onSelect: (subject: Subject, grade: number) => void;
  initialGrade?: number | null;
  initialLevel?: 'primary' | 'secondary';
}

const SubjectCard: React.FC<{ subject: Subject; onSelect: () => void }> = ({ subject, onSelect }) => {
  return (
    <button
      onClick={onSelect}
      className="group relative flex flex-col items-center justify-center p-6 bg-gray-800 rounded-xl border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300 transform hover:-translate-y-1"
    >
        <div className={`absolute top-0 left-0 w-full h-full rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${subject.color}`}></div>
        <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-10 h-10 mb-4 text-gray-300 group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                {subject.icon}
            </div>
            <h3 className="text-lg font-semibold text-white">{subject.name}</h3>
        </div>
    </button>
  );
};

const GradeCard: React.FC<{ icon: React.ReactNode; label: string; onSelect: () => void }> = ({ icon, label, onSelect }) => (
    <button
      onClick={onSelect}
      className="group relative flex flex-col items-center justify-center p-4 bg-gray-800 rounded-xl border border-gray-700/50 transition-all duration-300 transform hover:-translate-y-1 aspect-square overflow-hidden hover:border-indigo-500/50"
    >
      <div className="absolute -inset-px bg-gradient-to-br from-indigo-500 to-cyan-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative w-full h-full bg-gray-800 rounded-[11px] flex flex-col items-center justify-center p-2">
        <div className="w-2/3 h-2/3 transform transition-transform duration-300 group-hover:scale-110 mb-1">
            {icon}
        </div>
        <h3 className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors duration-300 leading-tight text-center">{label}</h3>
      </div>
    </button>
  );

const GameCard: React.FC<{ game: Game; onPlay: () => void }> = ({ game, onPlay }) => (
    <div className="relative flex flex-col bg-gray-800/50 rounded-lg border border-gray-700/50 overflow-hidden transform transition-transform duration-300 hover:-translate-y-1">
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
            <h4 className="font-bold text-white text-lg">{game.title}</h4>
            <p className="text-sm text-gray-400 mt-1">{game.description}</p>
        </div>
        <button 
            onClick={onPlay}
            className="mt-4 self-start flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md text-sm font-semibold hover:bg-indigo-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500"
        >
            <GameControllerIcon className="w-5 h-5" />
            Jugar
        </button>
      </div>
    </div>
);


const NavButton: React.FC<{
  label: string;
  isSelected: boolean;
  onClick: () => void;
}> = ({ label, isSelected, onClick }) => (
  <button
    onClick={onClick}
    className={`w-40 px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500 ${
      isSelected
        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 scale-105'
        : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600 hover:text-white'
    }`}
  >
    {label}
  </button>
);

const ContentTypeButton: React.FC<{
  label: string;
  isSelected: boolean;
  onClick: () => void;
}> = ({ label, isSelected, onClick }) => (
  <button
    onClick={onClick}
    className={`px-5 py-2 text-sm font-medium rounded-md transition-colors duration-200 focus:outline-none ${
      isSelected
        ? 'bg-gray-700 text-white'
        : 'text-gray-400 hover:bg-gray-800 hover:text-white'
    }`}
  >
    {label}
  </button>
);


const SubjectSelector: React.FC<SubjectSelectorProps> = ({ subjects, onSelect, initialGrade, initialLevel }) => {
  const [selectedLevel, setSelectedLevel] = useState<'primary' | 'secondary'>(initialLevel || 'primary');
  const [selectedGrade, setSelectedGrade] = useState<number | null>(initialGrade || null);
  const [contentType, setContentType] = useState<'subjects' | 'games' | 'textos'>('subjects');
  const [playingGameUrl, setPlayingGameUrl] = useState<string | null>(null);

  const primarySubjects = subjects.filter(subject => subject.level === 'primary');
  const secondarySubjects = subjects.filter(subject => subject.level === 'secondary');
  const primaryGrades = [1, 2, 3, 4, 5, 6];
  const secondaryGrades = [7, 8, 9, 10, 11];

  const gradeIcons: { [key: number]: React.ReactNode } = {
      1: <Grade1Icon />, 2: <Grade2Icon />, 3: <Grade3Icon />,
      4: <Grade4Icon />, 5: <Grade5Icon />, 6: <Grade6Icon />,
      7: <Grade7Icon />, 8: <Grade8Icon />, 9: <Grade9Icon />,
      10: <Grade10Icon />, 11: <Grade11Icon />,
  };
  
  const primaryGradeLabels: { [key: number]: string } = {
    1: 'Primer Grado', 2: 'Segundo Grado', 3: 'Tercer Grado',
    4: 'Cuarto Grado', 5: 'Quinto Grado', 6: 'Sexto Grado',
  };

  const secondaryGradeLabels: { [key: number]: string } = {
    7: 'Séptimo', 8: 'Octavo', 9: 'Noveno',
    10: 'Décimo', 11: 'Undécimo',
  };

  useEffect(() => {
    // Do not reset grade if an initial grade was provided for the current level
    if (initialGrade && initialLevel === selectedLevel) {
        return;
    }
    setSelectedGrade(null);
    setContentType('subjects');
  }, [selectedLevel]);

  const handleBackToGrades = () => {
    setSelectedGrade(null);
  };
  
  if (playingGameUrl) {
    return <GameWindow url={playingGameUrl} onClose={() => setPlayingGameUrl(null)} />;
  }

  const renderPrimaryContent = () => {
    if (selectedGrade === null) {
        return (
            <>
                <div className="flex justify-center items-center gap-2 mb-8 p-1 bg-gray-800/60 rounded-lg">
                    <ContentTypeButton
                        label="Grados"
                        isSelected={contentType === 'subjects'}
                        onClick={() => setContentType('subjects')}
                    />
                    <ContentTypeButton
                        label="Juegos Educativos"
                        isSelected={contentType === 'games'}
                        onClick={() => setContentType('games')}
                    />
                </div>
                {contentType === 'subjects' ? (
                    <div className="w-full max-w-3xl text-center">
                        <h3 className="text-3xl font-bold text-white mb-8">Selecciona un grado</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                            {primaryGrades.map((grade) => (
                                <GradeCard key={grade} icon={gradeIcons[grade]} label={primaryGradeLabels[grade]} onSelect={() => setSelectedGrade(grade)} />
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="w-full max-w-5xl text-left px-4">
                        <h3 className="text-3xl font-bold text-white mb-8 text-center">Juegos Educativos</h3>
                        <div className="space-y-12">
                            {primarySubjects.map(subject => {
                                const subjectGames = GAMES.filter(game => game.subjectId === subject.id);
                                if (subjectGames.length === 0) return null;
                                return (
                                    <div key={subject.id}>
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className={`flex items-center justify-center w-12 h-12 p-2 rounded-lg ${subject.color}`}>
                                                {subject.icon}
                                            </div>
                                            <h4 className="text-2xl font-bold text-white">{subject.name}</h4>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                            {subjectGames.map(game => (
                                                <GameCard key={game.id} game={game} onPlay={() => setPlayingGameUrl(game.embedUrl)} />
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </>
        );
    }

    return (
        <div className="w-full max-w-5xl flex flex-col">
            <div className="mb-4 self-start">
                <button onClick={handleBackToGrades} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                    <BackArrowIcon className="w-5 h-5" />
                    <span>Volver a Grados</span>
                </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {primarySubjects
                    .filter(subject => !subject.grades || subject.grades.includes(selectedGrade!))
                    .map((subject) => (
                    <SubjectCard key={subject.id} subject={subject} onSelect={() => onSelect(subject, selectedGrade)} />
                ))}
            </div>
        </div>
    );
  }

  const renderSecondaryContent = () => {
    if (selectedGrade === null) {
      return (
        <>
            <div className="flex justify-center items-center gap-2 mb-8 p-1 bg-gray-800/60 rounded-lg">
                <ContentTypeButton
                    label="Grados"
                    isSelected={contentType === 'subjects'}
                    onClick={() => setContentType('subjects')}
                />
                <ContentTypeButton
                    label="Textos"
                    isSelected={contentType === 'textos'}
                    onClick={() => setContentType('textos')}
                />
            </div>
            {contentType === 'subjects' && (
                <div className="w-full max-w-4xl text-center">
                    <h3 className="text-3xl font-bold text-white mb-8">Selecciona un grado</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                        {secondaryGrades.map((grade) => (
                            <GradeCard key={grade} icon={gradeIcons[grade]} label={secondaryGradeLabels[grade]} onSelect={() => setSelectedGrade(grade)} />
                        ))}
                    </div>
                </div>
            )}
            {contentType === 'textos' && (
                 <div className="w-full max-w-lg text-center flex flex-col items-center justify-center h-64 bg-gray-800/50 rounded-lg border-2 border-dashed border-gray-700 p-8">
                    <div className="p-4 bg-indigo-500/20 rounded-full mb-4">
                        <RocketIcon className="w-12 h-12 text-indigo-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">¡Próximamente!</h3>
                    <p className="text-gray-400 mt-2 max-w-sm">Estamos preparando nuevos recursos y textos para enriquecer tu aprendizaje. ¡Vuelve pronto!</p>
                </div>
            )}
        </>
      );
    }

    return (
        <div className="w-full max-w-5xl flex flex-col">
            <div className="mb-4 self-start">
                <button onClick={handleBackToGrades} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                    <BackArrowIcon className="w-5 h-5" />
                    <span>Volver a Grados</span>
                </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {secondarySubjects
                    .filter(subject => !subject.grades || subject.grades.includes(selectedGrade!))
                    .map((subject) => (
                    <SubjectCard key={subject.id} subject={subject} onSelect={() => onSelect(subject, selectedGrade)} />
                ))}
            </div>
        </div>
    );
  }

  return (
    <div className="flex flex-col h-full p-4">
      <div className="shrink-0 flex flex-col items-center">
        <h2 className="text-4xl font-extrabold text-center mb-2 text-white">Welcome to Playzi!</h2>
        <p className="text-lg text-gray-400 text-center mb-6">What would you like to learn about today?</p>

        <div className="flex justify-center items-center gap-4 mb-6 p-2 bg-gray-800/60 rounded-full">
          <NavButton
              label="Primaria"
              isSelected={selectedLevel === 'primary'}
              onClick={() => setSelectedLevel('primary')}
            />
            <NavButton
              label="Secundaria"
              isSelected={selectedLevel === 'secondary'}
              onClick={() => setSelectedLevel('secondary')}
            />
        </div>
      </div>
      
      <div className="w-full flex-1 min-h-0 overflow-y-auto flex flex-col items-center py-2">
        { selectedLevel === 'primary' ? (
            renderPrimaryContent()
        ) : (
          renderSecondaryContent()
        )}
      </div>
    </div>
  );
};

export default SubjectSelector;