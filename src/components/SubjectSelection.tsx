import React from 'react';
import { ArrowLeft } from 'lucide-react';
import * as Icons from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { useAudio } from '../hooks/useAudio';
import { useTranslation } from '../hooks/useTranslation';
import { subjects } from '../data/subjects';

interface SubjectSelectionProps {
  mode: 'learn' | 'practice';
}

export function SubjectSelection({ mode }: SubjectSelectionProps) {
  const { state, dispatch } = useApp();
  const { playClick, playHover } = useAudio();
  const { t } = useTranslation();

  const handleSubjectSelect = (subjectId: string) => {
    playClick();
    dispatch({ type: 'SET_SUBJECT', payload: subjectId });
  };

  const handleBack = () => {
    playClick();
    dispatch({ type: 'SET_MODE', payload: 'home' });
  };

  const getProgressForSubject = (subjectId: string) => {
    const progress = state.progress.find(p => p.subjectId === subjectId);
    return progress || { subjectId, completedChapters: [], exerciseScores: {}, totalScore: 0 };
  };

  // Only use custom subjects since we removed the default ones
  const allSubjects = state.customSubjects;

  return (
    <div 
      className={`min-h-screen transition-all duration-500 ${
        state.settings.darkMode 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
          : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
      }`}
    >
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="flex items-center justify-between mb-12">
          <div className="flex items-center space-x-4">
            <button
              onClick={handleBack}
              onMouseEnter={playHover}
              className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 ${
                state.settings.darkMode 
                  ? 'bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white' 
                  : 'bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-900 shadow-lg hover:shadow-xl'
              }`}
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div>
              <h1 className={`text-3xl font-bold ${
                state.settings.darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {mode === 'learn' ? t('chooseSubjectLearn') : t('chooseSubjectPractice')}
              </h1>
              <p className={`text-lg ${
                state.settings.darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {mode === 'learn' ? t('selectSubjectLearn') : t('selectSubjectPractice')}
              </p>
            </div>
          </div>
        </header>

        {/* Subjects Grid */}
        {allSubjects.length === 0 ? (
          <div className="text-center py-20">
            <div className={`text-6xl mb-6 ${
              state.settings.darkMode ? 'text-gray-600' : 'text-gray-400'
            }`}>
              📚
            </div>
            <h2 className={`text-2xl font-bold mb-4 ${
              state.settings.darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Veel pole aineid lisatud
            </h2>
            <p className={`text-lg mb-8 ${
              state.settings.darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Mine seadetesse ja lisa oma esimene õppeaine!
            </p>
            <button
              onClick={() => {
                playClick();
                dispatch({ type: 'SET_MODE', payload: 'settings' });
              }}
              onMouseEnter={playHover}
              className={`px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                state.settings.darkMode 
                  ? 'bg-blue-600 hover:bg-blue-500 text-white' 
                  : 'bg-blue-500 hover:bg-blue-400 text-white'
              } shadow-lg hover:shadow-xl`}
            >
              Mine seadetesse
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {allSubjects.map((subject) => {
              const IconComponent = (Icons as any)[subject.icon];
              const progress = getProgressForSubject(subject.id);
              
              return (
                <button
                  key={subject.id}
                  onClick={() => handleSubjectSelect(subject.id)}
                  onMouseEnter={playHover}
                  className={`group relative overflow-hidden p-8 rounded-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                    state.settings.darkMode 
                      ? 'bg-gray-800/80 hover:bg-gray-700/80' 
                      : 'bg-white/80 hover:bg-white/90'
                  } backdrop-blur-sm border ${
                    state.settings.darkMode ? 'border-gray-700' : 'border-white/20'
                  } shadow-2xl hover:shadow-3xl`}
                  style={{
                    background: state.settings.darkMode 
                      ? undefined 
                      : `linear-gradient(135deg, ${subject.color}15, ${subject.color}25)`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 flex flex-col items-center space-y-6">
                    {/* Icon */}
                    <div 
                      className="w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: subject.color + '20' }}
                    >
                      <IconComponent 
                        className="w-10 h-10" 
                        style={{ color: subject.color }}
                      />
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h3 className={`text-2xl font-bold mb-2 ${
                        state.settings.darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {subject.name}
                      </h3>
                      <p className={`text-base mb-4 ${
                        state.settings.darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {subject.description}
                      </p>
                      
                      {/* Progress */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className={`text-sm ${
                            state.settings.darkMode ? 'text-gray-400' : 'text-gray-500'
                          }`}>
                            {t('progress')}
                          </span>
                          <span className={`text-sm font-semibold ${
                            state.settings.darkMode ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            {Math.round(progress.totalScore)}%
                          </span>
                        </div>
                        <div className={`w-full h-2 rounded-full ${
                          state.settings.darkMode ? 'bg-gray-700' : 'bg-gray-200'
                        }`}>
                          <div 
                            className="h-full rounded-full transition-all duration-500"
                            style={{ 
                              width: `${progress.totalScore}%`,
                              backgroundColor: subject.color 
                            }}
                          ></div>
                        </div>
                      </div>

                      {/* Chapters info */}
                      <div className={`mt-4 text-sm ${
                        state.settings.darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {progress.completedChapters.length} {t('outOf')} {subject.chapters.length} {t('chaptersCompleted')}
                        <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                          state.settings.darkMode ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {t('customContent')}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                       style={{ backgroundColor: subject.color }}></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                       style={{ backgroundColor: subject.color }}></div>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}