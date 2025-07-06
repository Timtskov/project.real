import React, { useState } from 'react';
import { ArrowLeft, Moon, Sun, Volume2, VolumeX, Type, Palette, Globe, Plus, LogOut, User, Trash2, AlertTriangle, Move } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { useAudio } from '../hooks/useAudio';
import { useTranslation } from '../hooks/useTranslation';
import { ChapterManager } from './ChapterManager';

export function SettingsPage() {
  const { state, dispatch } = useApp();
  const { playClick, playHover, playError } = useAudio();
  const { t } = useTranslation();
  const [deleteConfirm, setDeleteConfirm] = useState<{
    type: 'subject' | 'chapter' | 'exercise' | null;
    id: string;
    subjectId?: string;
    chapterId?: string;
    name: string;
  } | null>(null);
  const [showChapterManager, setShowChapterManager] = useState<string | null>(null);

  const handleBack = () => {
    playClick();
    dispatch({ type: 'SET_MODE', payload: 'home' });
  };

  const handleAddContent = () => {
    playClick();
    dispatch({ type: 'SET_MODE', payload: 'add-content' });
  };

  const handleLogout = () => {
    playClick();
    dispatch({ type: 'LOGOUT' });
  };

  const toggleDarkMode = () => {
    playClick();
    dispatch({ 
      type: 'UPDATE_SETTINGS', 
      payload: { darkMode: !state.settings.darkMode } 
    });
  };

  const toggleAudio = () => {
    playClick();
    dispatch({ 
      type: 'UPDATE_SETTINGS', 
      payload: { audioEnabled: !state.settings.audioEnabled } 
    });
  };

  const updateLanguage = (language: 'en' | 'et') => {
    playClick();
    dispatch({ 
      type: 'UPDATE_SETTINGS', 
      payload: { language } 
    });
  };

  const updateFontSize = (size: 'small' | 'medium' | 'large') => {
    playClick();
    dispatch({ 
      type: 'UPDATE_SETTINGS', 
      payload: { fontSize: size } 
    });
  };

  const updateBackgroundColor = (color: string) => {
    playClick();
    dispatch({ 
      type: 'UPDATE_SETTINGS', 
      payload: { backgroundColor: color } 
    });
  };

  const handleDeleteSubject = (subjectId: string, subjectName: string) => {
    setDeleteConfirm({
      type: 'subject',
      id: subjectId,
      name: subjectName
    });
  };

  const handleDeleteChapter = (subjectId: string, chapterId: string, chapterName: string) => {
    setDeleteConfirm({
      type: 'chapter',
      id: chapterId,
      subjectId,
      name: chapterName
    });
  };

  const handleDeleteExercise = (subjectId: string, chapterId: string, exerciseId: string, exerciseName: string) => {
    setDeleteConfirm({
      type: 'exercise',
      id: exerciseId,
      subjectId,
      chapterId,
      name: exerciseName
    });
  };

  const confirmDelete = () => {
    if (!deleteConfirm) return;

    playError();
    
    switch (deleteConfirm.type) {
      case 'subject':
        dispatch({ type: 'DELETE_CUSTOM_SUBJECT', payload: deleteConfirm.id });
        break;
      case 'chapter':
        dispatch({ 
          type: 'DELETE_CUSTOM_CHAPTER', 
          payload: { 
            subjectId: deleteConfirm.subjectId!, 
            chapterId: deleteConfirm.id 
          }
        });
        break;
      case 'exercise':
        dispatch({ 
          type: 'DELETE_CUSTOM_EXERCISE', 
          payload: { 
            subjectId: deleteConfirm.subjectId!, 
            chapterId: deleteConfirm.chapterId!, 
            exerciseId: deleteConfirm.id 
          }
        });
        break;
    }
    
    setDeleteConfirm(null);
  };

  const cancelDelete = () => {
    playClick();
    setDeleteConfirm(null);
  };

  const colorOptions = [
    { name: t('blue'), value: '#3B82F6' },
    { name: t('green'), value: '#10B981' },
    { name: t('purple'), value: '#8B5CF6' },
    { name: t('pink'), value: '#EC4899' },
    { name: t('orange'), value: '#F59E0B' },
    { name: t('red'), value: '#EF4444' },
  ];

  return (
    <div 
      className={`min-h-screen transition-all duration-500 ${
        state.settings.darkMode 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
          : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
      }`}
    >
      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className={`max-w-md w-full rounded-3xl p-8 ${
            state.settings.darkMode 
              ? 'bg-gray-800 border border-gray-700' 
              : 'bg-white border border-gray-200'
          } shadow-2xl`}>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
              
              <h3 className={`text-xl font-bold mb-2 ${
                state.settings.darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {t('confirmDelete')}
              </h3>
              
              <p className={`text-sm mb-6 ${
                state.settings.darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {deleteConfirm.type === 'subject' && t('confirmDeleteSubject')}
                {deleteConfirm.type === 'chapter' && t('confirmDeleteChapter')}
                {deleteConfirm.type === 'exercise' && t('confirmDeleteExercise')}
              </p>

              <div className={`p-4 rounded-xl mb-6 ${
                state.settings.darkMode ? 'bg-red-900/20' : 'bg-red-50'
              }`}>
                <p className={`font-semibold ${
                  state.settings.darkMode ? 'text-red-300' : 'text-red-800'
                }`}>
                  "{deleteConfirm.name}"
                </p>
                <p className={`text-sm mt-1 ${
                  state.settings.darkMode ? 'text-red-400' : 'text-red-600'
                }`}>
                  {t('deleteWarning')}
                </p>
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={cancelDelete}
                  onMouseEnter={playHover}
                  className={`flex-1 px-4 py-3 rounded-xl transition-all duration-300 ${
                    state.settings.darkMode 
                      ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' 
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                  }`}
                >
                  {t('cancel')}
                </button>
                <button
                  onClick={confirmDelete}
                  onMouseEnter={playHover}
                  className="flex-1 px-4 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white transition-all duration-300"
                >
                  {t('delete')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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
                {t('settings')}
              </h1>
              <p className={`text-lg ${
                state.settings.darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {t('customizeExperience')}
              </p>
            </div>
          </div>

          <div className="flex space-x-2">
            <button
              onClick={handleAddContent}
              onMouseEnter={playHover}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 ${
                state.settings.darkMode 
                  ? 'bg-blue-600 hover:bg-blue-500 text-white' 
                  : 'bg-blue-500 hover:bg-blue-400 text-white'
              } shadow-lg hover:shadow-xl`}
            >
              <Plus className="w-5 h-5" />
              <span>{t('addContent')}</span>
            </button>
            <button
              onClick={handleLogout}
              onMouseEnter={playHover}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 ${
                state.settings.darkMode 
                  ? 'bg-red-600 hover:bg-red-500 text-white' 
                  : 'bg-red-500 hover:bg-red-400 text-white'
              } shadow-lg hover:shadow-xl`}
            >
              <LogOut className="w-5 h-5" />
              <span>Logi välja</span>
            </button>
          </div>
        </header>

        {/* User Info */}
        <div className={`mb-8 p-6 rounded-2xl ${
          state.settings.darkMode 
            ? 'bg-gray-800/80 border border-gray-700' 
            : 'bg-white/80 border border-white/20'
        } backdrop-blur-sm shadow-xl`}>
          <div className="flex items-center space-x-4">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
              state.settings.darkMode ? 'bg-blue-600' : 'bg-blue-500'
            }`}>
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className={`text-xl font-semibold ${
                state.settings.darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Tere, {state.currentUser}!
              </h3>
              <p className={`text-sm ${
                state.settings.darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Sinu andmed salvestatakse automaatselt
              </p>
            </div>
          </div>
        </div>

        {/* Settings Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Language Settings */}
          <div className={`p-8 rounded-3xl ${
            state.settings.darkMode 
              ? 'bg-gray-800/80 border border-gray-700' 
              : 'bg-white/80 border border-white/20'
          } backdrop-blur-sm shadow-2xl`}>
            <h2 className={`text-2xl font-bold mb-6 flex items-center space-x-3 ${
              state.settings.darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              <Globe className="w-6 h-6" />
              <span>{t('language')}</span>
            </h2>

            <div className="flex items-center justify-between p-4 rounded-xl mb-6 transition-all duration-300 hover:bg-gray-50 hover:bg-opacity-10">
              <div className="flex items-center space-x-3">
                <Globe className={`w-6 h-6 ${state.settings.darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                <div>
                  <h3 className={`font-semibold ${
                    state.settings.darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {t('language')}
                  </h3>
                  <p className={`text-sm ${
                    state.settings.darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {t('languageDescription')}
                  </p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => updateLanguage('en')}
                  onMouseEnter={playHover}
                  className={`px-4 py-2 rounded-xl transition-all duration-300 ${
                    state.settings.language === 'en'
                      ? state.settings.darkMode
                        ? 'bg-blue-600 text-white'
                        : 'bg-blue-500 text-white'
                      : state.settings.darkMode
                        ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {t('english')}
                </button>
                <button
                  onClick={() => updateLanguage('et')}
                  onMouseEnter={playHover}
                  className={`px-4 py-2 rounded-xl transition-all duration-300 ${
                    state.settings.language === 'et'
                      ? state.settings.darkMode
                        ? 'bg-blue-600 text-white'
                        : 'bg-blue-500 text-white'
                      : state.settings.darkMode
                        ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {t('estonian')}
                </button>
              </div>
            </div>
          </div>

          {/* Appearance Settings */}
          <div className={`p-8 rounded-3xl ${
            state.settings.darkMode 
              ? 'bg-gray-800/80 border border-gray-700' 
              : 'bg-white/80 border border-white/20'
          } backdrop-blur-sm shadow-2xl`}>
            <h2 className={`text-2xl font-bold mb-6 flex items-center space-x-3 ${
              state.settings.darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              <Palette className="w-6 h-6" />
              <span>{t('appearance')}</span>
            </h2>

            {/* Dark Mode Toggle */}
            <div className="flex items-center justify-between p-4 rounded-xl mb-6 transition-all duration-300 hover:bg-gray-50 hover:bg-opacity-10">
              <div className="flex items-center space-x-3">
                {state.settings.darkMode ? (
                  <Moon className={`w-6 h-6 ${state.settings.darkMode ? 'text-blue-400' : 'text-gray-600'}`} />
                ) : (
                  <Sun className="w-6 h-6 text-yellow-500" />
                )}
                <div>
                  <h3 className={`font-semibold ${
                    state.settings.darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {t('darkMode')}
                  </h3>
                  <p className={`text-sm ${
                    state.settings.darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {t('darkModeDescription')}
                  </p>
                </div>
              </div>
              <button
                onClick={toggleDarkMode}
                onMouseEnter={playHover}
                className={`relative w-16 h-8 rounded-full transition-all duration-300 ${
                  state.settings.darkMode ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all duration-300 transform ${
                  state.settings.darkMode ? 'translate-x-9' : 'translate-x-1'
                }`}></div>
              </button>
            </div>

            {/* Background Color */}
            <div className="mb-6">
              <h3 className={`font-semibold mb-4 ${
                state.settings.darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {t('accentColor')}
              </h3>
              <div className="grid grid-cols-6 gap-3">
                {colorOptions.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => updateBackgroundColor(color.value)}
                    onMouseEnter={playHover}
                    className={`w-12 h-12 rounded-full transition-all duration-300 transform hover:scale-110 ${
                      state.settings.backgroundColor === color.value 
                        ? 'ring-4 ring-offset-2 ring-offset-transparent ring-white' 
                        : ''
                    }`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  ></button>
                ))}
              </div>
            </div>
          </div>

          {/* Text Settings */}
          <div className={`p-8 rounded-3xl ${
            state.settings.darkMode 
              ? 'bg-gray-800/80 border border-gray-700' 
              : 'bg-white/80 border border-white/20'
          } backdrop-blur-sm shadow-2xl`}>
            <h2 className={`text-2xl font-bold mb-6 flex items-center space-x-3 ${
              state.settings.darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              <Type className="w-6 h-6" />
              <span>{t('textSettings')}</span>
            </h2>

            {/* Font Size */}
            <div className="mb-6">
              <h3 className={`font-semibold mb-4 ${
                state.settings.darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {t('fontSize')}
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { key: 'small', label: t('small'), size: 'text-sm' },
                  { key: 'medium', label: t('medium'), size: 'text-base' },
                  { key: 'large', label: t('large'), size: 'text-lg' }
                ].map((option) => (
                  <button
                    key={option.key}
                    onClick={() => updateFontSize(option.key as any)}
                    onMouseEnter={playHover}
                    className={`p-4 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                      state.settings.fontSize === option.key
                        ? state.settings.darkMode
                          ? 'bg-blue-600 text-white'
                          : 'bg-blue-500 text-white'
                        : state.settings.darkMode
                          ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    <div className={`${option.size} font-medium`}>
                      {option.label}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Audio Settings */}
          <div className={`p-8 rounded-3xl ${
            state.settings.darkMode 
              ? 'bg-gray-800/80 border border-gray-700' 
              : 'bg-white/80 border border-white/20'
          } backdrop-blur-sm shadow-2xl`}>
            <h2 className={`text-2xl font-bold mb-6 flex items-center space-x-3 ${
              state.settings.darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {state.settings.audioEnabled ? (
                <Volume2 className="w-6 h-6" />
              ) : (
                <VolumeX className="w-6 h-6" />
              )}
              <span>{t('audioSettings')}</span>
            </h2>

            {/* Audio Toggle */}
            <div className="flex items-center justify-between p-4 rounded-xl transition-all duration-300 hover:bg-gray-50 hover:bg-opacity-10">
              <div className="flex items-center space-x-3">
                {state.settings.audioEnabled ? (
                  <Volume2 className={`w-6 h-6 ${state.settings.darkMode ? 'text-green-400' : 'text-green-600'}`} />
                ) : (
                  <VolumeX className={`w-6 h-6 ${state.settings.darkMode ? 'text-red-400' : 'text-red-600'}`} />
                )}
                <div>
                  <h3 className={`font-semibold ${
                    state.settings.darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {t('soundEffects')}
                  </h3>
                  <p className={`text-sm ${
                    state.settings.darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {t('soundEffectsDescription')}
                  </p>
                </div>
              </div>
              <button
                onClick={toggleAudio}
                onMouseEnter={playHover}
                className={`relative w-16 h-8 rounded-full transition-all duration-300 ${
                  state.settings.audioEnabled ? 'bg-green-600' : 'bg-gray-300'
                }`}
              >
                <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all duration-300 transform ${
                  state.settings.audioEnabled ? 'translate-x-9' : 'translate-x-1'
                }`}></div>
              </button>
            </div>
          </div>

          {/* Custom Content Management */}
          {state.customSubjects.length > 0 && (
            <div className={`p-8 rounded-3xl ${
              state.settings.darkMode 
                ? 'bg-gray-800/80 border border-gray-700' 
                : 'bg-white/80 border border-white/20'
            } backdrop-blur-sm shadow-2xl`}>
              <h2 className={`text-2xl font-bold mb-6 ${
                state.settings.darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {t('customContent')}
              </h2>
              
              <div className="space-y-4">
                {state.customSubjects.map((subject) => (
                  <div key={subject.id} className={`border rounded-xl ${
                    state.settings.darkMode ? 'border-gray-600' : 'border-gray-200'
                  }`}>
                    {/* Subject Header */}
                    <div className={`p-4 ${
                      state.settings.darkMode ? 'bg-gray-700/50' : 'bg-gray-50'
                    } rounded-t-xl`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className={`font-semibold ${
                            state.settings.darkMode ? 'text-white' : 'text-gray-900'
                          }`}>
                            {subject.name}
                          </h3>
                          <p className={`text-sm ${
                            state.settings.darkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            {subject.chapters.length} peatükki, {subject.definitions?.length || 0} definitsiooni
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => setShowChapterManager(showChapterManager === subject.id ? null : subject.id)}
                            onMouseEnter={playHover}
                            className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                              state.settings.darkMode 
                                ? 'bg-blue-600 hover:bg-blue-500 text-white' 
                                : 'bg-blue-500 hover:bg-blue-400 text-white'
                            }`}
                          >
                            <Move className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteSubject(subject.id, subject.name)}
                            onMouseEnter={playHover}
                            className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                              state.settings.darkMode 
                                ? 'bg-red-600 hover:bg-red-500 text-white' 
                                : 'bg-red-500 hover:bg-red-400 text-white'
                            }`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Chapter Manager */}
                    {showChapterManager === subject.id && (
                      <div className="p-4">
                        <ChapterManager 
                          subjectId={subject.id}
                          chapters={subject.chapters}
                          bookHeadings={subject.bookHeadings || []}
                        />
                      </div>
                    )}

                    {/* Chapters */}
                    {subject.chapters.length > 0 && showChapterManager !== subject.id && (
                      <div className="p-4 space-y-3">
                        {subject.chapters.map((chapter) => (
                          <div key={chapter.id}>
                            <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 bg-opacity-50">
                              <div>
                                <h4 className={`font-medium ${
                                  state.settings.darkMode ? 'text-white' : 'text-gray-900'
                                }`}>
                                  {chapter.title}
                                </h4>
                                <p className={`text-sm ${
                                  state.settings.darkMode ? 'text-gray-400' : 'text-gray-600'
                                }`}>
                                  {chapter.exercises.length} harjutust
                                  {chapter.images.length > 0 && `, ${chapter.images.length} pilti`}
                                  {subject.definitions?.filter(def => def.chapterId === chapter.id).length > 0 && 
                                    `, ${subject.definitions?.filter(def => def.chapterId === chapter.id).length} definitsiooni`}
                                </p>
                              </div>
                              <button
                                onClick={() => handleDeleteChapter(subject.id, chapter.id, chapter.title)}
                                onMouseEnter={playHover}
                                className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                                  state.settings.darkMode 
                                    ? 'bg-red-600 hover:bg-red-500 text-white' 
                                    : 'bg-red-500 hover:bg-red-400 text-white'
                                }`}
                              >
                                <Trash2 className="w-3 h-3" />
                              </button>
                            </div>

                            {/* Exercises */}
                            {chapter.exercises.length > 0 && (
                              <div className="ml-4 mt-2 space-y-2">
                                {chapter.exercises.map((exercise) => (
                                  <div key={exercise.id} className="flex items-center justify-between p-2 rounded-lg bg-gray-100 bg-opacity-30">
                                    <div>
                                      <p className={`text-sm font-medium ${
                                        state.settings.darkMode ? 'text-gray-300' : 'text-gray-700'
                                      }`}>
                                        {exercise.question.length > 50 
                                          ? exercise.question.substring(0, 50) + '...' 
                                          : exercise.question}
                                      </p>
                                      <p className={`text-xs ${
                                        state.settings.darkMode ? 'text-gray-500' : 'text-gray-500'
                                      }`}>
                                        {exercise.type === 'multiple-choice' ? 'Valikvastus' : 'Täida lünk'}
                                      </p>
                                    </div>
                                    <button
                                      onClick={() => handleDeleteExercise(subject.id, chapter.id, exercise.id, exercise.question)}
                                      onMouseEnter={playHover}
                                      className={`p-1 rounded transition-all duration-300 hover:scale-110 ${
                                        state.settings.darkMode 
                                          ? 'bg-red-600 hover:bg-red-500 text-white' 
                                          : 'bg-red-500 hover:bg-red-400 text-white'
                                      }`}
                                    >
                                      <Trash2 className="w-3 h-3" />
                                    </button>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Preview Section */}
          <div className={`p-8 rounded-3xl ${
            state.settings.darkMode 
              ? 'bg-gray-800/80 border border-gray-700' 
              : 'bg-white/80 border border-white/20'
          } backdrop-blur-sm shadow-2xl`}>
            <h2 className={`text-2xl font-bold mb-6 ${
              state.settings.darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {t('preview')}
            </h2>
            <div className={`p-6 rounded-2xl ${
              state.settings.darkMode ? 'bg-gray-700' : 'bg-gray-50'
            }`}>
              <h3 className={`text-xl font-semibold mb-2 ${
                state.settings.darkMode ? 'text-white' : 'text-gray-900'
              } ${
                state.settings.fontSize === 'small' ? 'text-lg' :
                state.settings.fontSize === 'large' ? 'text-2xl' : 'text-xl'
              }`}>
                {t('sampleContent')}
              </h3>
              <p className={`${
                state.settings.darkMode ? 'text-gray-300' : 'text-gray-600'
              } ${
                state.settings.fontSize === 'small' ? 'text-sm' :
                state.settings.fontSize === 'large' ? 'text-lg' : 'text-base'
              }`}>
                {t('sampleDescription')}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}