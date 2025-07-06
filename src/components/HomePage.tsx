import React from 'react';
import { BookOpen, PenTool, Settings, Plus } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { useAudio } from '../hooks/useAudio';
import { useTranslation } from '../hooks/useTranslation';

export function HomePage() {
  const { state, dispatch } = useApp();
  const { playClick, playHover } = useAudio();
  const { t } = useTranslation();

  const handleModeSelect = (mode: 'learn' | 'practice') => {
    playClick();
    dispatch({ type: 'SET_MODE', payload: mode });
  };

  const handleSettingsClick = () => {
    playClick();
    dispatch({ type: 'SET_MODE', payload: 'settings' });
  };

  const handleAddContentClick = () => {
    playClick();
    dispatch({ type: 'SET_MODE', payload: 'add-content' });
  };

  return (
    <div 
      className={`min-h-screen transition-all duration-500 ${
        state.settings.darkMode 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
          : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
      }`}
      style={{ backgroundColor: state.settings.darkMode ? undefined : state.settings.backgroundColor + '10' }}
    >
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-12">
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
              state.settings.darkMode ? 'bg-indigo-600' : 'bg-white shadow-lg'
            }`}>
              <BookOpen className={`w-6 h-6 ${
                state.settings.darkMode ? 'text-white' : 'text-indigo-600'
              }`} />
            </div>
            <div>
              <h1 className={`text-2xl font-bold ${
                state.settings.darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {t('appTitle')}
              </h1>
              <p className={`text-sm ${
                state.settings.darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {t('appSubtitle')}
              </p>
            </div>
          </div>
          
          <div className="flex space-x-2">
            <button
              onClick={handleAddContentClick}
              onMouseEnter={playHover}
              className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 ${
                state.settings.darkMode 
                  ? 'bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white' 
                  : 'bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-900 shadow-lg hover:shadow-xl'
              }`}
            >
              <Plus className="w-6 h-6" />
            </button>
            <button
              onClick={handleSettingsClick}
              onMouseEnter={playHover}
              className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 ${
                state.settings.darkMode 
                  ? 'bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white' 
                  : 'bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-900 shadow-lg hover:shadow-xl'
              }`}
            >
              <Settings className="w-6 h-6" />
            </button>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center space-y-8 py-20">
          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
              state.settings.darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {t('chooseYourPath')}
            </h2>
            <p className={`text-lg md:text-xl ${
              state.settings.darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {t('startLearningDescription')}
            </p>
          </div>

          {/* Mode Selection Buttons */}
          <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
            {/* Learn Button */}
            <button
              onClick={() => handleModeSelect('learn')}
              onMouseEnter={playHover}
              className={`group relative overflow-hidden p-12 rounded-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                state.settings.darkMode 
                  ? 'bg-gradient-to-br from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700' 
                  : 'bg-gradient-to-br from-blue-500 to-blue-700 hover:from-blue-400 hover:to-blue-600'
              } shadow-2xl hover:shadow-3xl`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col items-center space-y-6">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-10 h-10 text-white" />
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-white mb-2">{t('learn')}</h3>
                  <p className="text-blue-100 text-lg">
                    {t('learnDescription')}
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-32 h-32 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100"></div>
            </button>

            {/* Practice Button */}
            <button
              onClick={() => handleModeSelect('practice')}
              onMouseEnter={playHover}
              className={`group relative overflow-hidden p-12 rounded-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                state.settings.darkMode 
                  ? 'bg-gradient-to-br from-green-600 to-green-800 hover:from-green-500 hover:to-green-700' 
                  : 'bg-gradient-to-br from-green-500 to-green-700 hover:from-green-400 hover:to-green-600'
              } shadow-2xl hover:shadow-3xl`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col items-center space-y-6">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <PenTool className="w-10 h-10 text-white" />
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-white mb-2">{t('practice')}</h3>
                  <p className="text-green-100 text-lg">
                    {t('practiceDescription')}
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-32 h-32 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100"></div>
            </button>
          </div>

          {/* Progress Overview */}
          <div className={`mt-16 p-8 rounded-2xl ${
            state.settings.darkMode 
              ? 'bg-gray-800/50 backdrop-blur-sm' 
              : 'bg-white/50 backdrop-blur-sm'
          } border ${
            state.settings.darkMode ? 'border-gray-700' : 'border-white/20'
          } shadow-xl`}>
            <h3 className={`text-xl font-semibold mb-4 text-center ${
              state.settings.darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {t('yourProgress')}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {state.progress.map((progress) => (
                <div key={progress.subjectId} className="text-center">
                  <div className={`text-2xl font-bold ${
                    state.settings.darkMode ? 'text-indigo-400' : 'text-indigo-600'
                  }`}>
                    {Math.round(progress.totalScore)}%
                  </div>
                  <div className={`text-sm capitalize ${
                    state.settings.darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {progress.subjectId}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}