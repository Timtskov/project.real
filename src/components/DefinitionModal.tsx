import React, { useState, useEffect } from 'react';
import { X, Palette } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { useAudio } from '../hooks/useAudio';
import { useTranslation } from '../hooks/useTranslation';
import { Definition } from '../types';

export function DefinitionModal() {
  const { state, dispatch } = useApp();
  const { playClick, playHover } = useAudio();
  const { t } = useTranslation();
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');
  const [highlightColor, setHighlightColor] = useState<Definition['highlightColor']>('yellow');

  // Update word when selectedText changes
  useEffect(() => {
    if (state.selectedText?.text) {
      setWord(state.selectedText.text);
    }
  }, [state.selectedText]);

  const handleClose = () => {
    playClick();
    dispatch({ type: 'SET_SHOW_DEFINITION_MODAL', payload: false });
    dispatch({ type: 'SET_SELECTED_TEXT', payload: null });
    setWord('');
    setDefinition('');
    setHighlightColor('yellow');
  };

  const handleSave = () => {
    if (!word.trim() || !definition.trim() || !state.selectedSubject) return;

    playClick();
    
    // Use selectedChapter if available, otherwise use the first chapter
    const currentSubject = state.customSubjects.find(s => s.id === state.selectedSubject);
    const targetChapterId = state.selectedChapter || (currentSubject?.chapters[0]?.id);
    
    if (!targetChapterId) {
      console.error('No chapter available for definition');
      return;
    }

    const newDefinition: Definition = {
      id: `def-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      word: word.trim(),
      definition: definition.trim(),
      highlightColor,
      chapterId: targetChapterId,
      position: state.selectedText ? {
        start: state.selectedText.start,
        end: state.selectedText.end,
        elementId: state.selectedText.elementId
      } : {
        start: 0,
        end: word.length,
        elementId: 'main-content'
      }
    };

    dispatch({
      type: 'ADD_DEFINITION',
      payload: {
        subjectId: state.selectedSubject,
        definition: newDefinition
      }
    });

    handleClose();
  };

  const colorOptions: { value: Definition['highlightColor']; label: string; bgClass: string }[] = [
    { value: 'yellow', label: t('yellow'), bgClass: 'bg-yellow-300' },
    { value: 'green', label: t('green'), bgClass: 'bg-green-300' },
    { value: 'blue', label: t('blue'), bgClass: 'bg-blue-300' },
    { value: 'pink', label: t('pink'), bgClass: 'bg-pink-300' },
    { value: 'orange', label: t('orange'), bgClass: 'bg-orange-300' }
  ];

  if (!state.showDefinitionModal) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className={`max-w-md w-full rounded-3xl p-8 ${
        state.settings.darkMode 
          ? 'bg-gray-800 border border-gray-700' 
          : 'bg-white border border-gray-200'
      } shadow-2xl`}>
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className={`text-xl font-bold ${
            state.settings.darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {t('addDefinition')}
          </h3>
          <button
            onClick={handleClose}
            onMouseEnter={playHover}
            className={`p-2 rounded-xl transition-all duration-300 hover:scale-110 ${
              state.settings.darkMode 
                ? 'bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Word Input */}
        <div className="mb-6">
          <label className={`block text-sm font-medium mb-2 ${
            state.settings.darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Sõna
          </label>
          <input
            type="text"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            placeholder="Sisesta sõna"
            className={`w-full p-3 rounded-xl border-2 transition-all duration-300 ${
              state.settings.darkMode
                ? 'border-gray-600 bg-gray-700 text-white focus:border-blue-500'
                : 'border-gray-300 bg-white text-gray-900 focus:border-blue-500'
            } focus:outline-none`}
          />
        </div>

        {/* Definition Input */}
        <div className="mb-6">
          <label className={`block text-sm font-medium mb-2 ${
            state.settings.darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            {t('wordDefinition')}
          </label>
          <textarea
            value={definition}
            onChange={(e) => setDefinition(e.target.value)}
            placeholder={t('wordDefinition')}
            rows={4}
            className={`w-full p-3 rounded-xl border-2 transition-all duration-300 ${
              state.settings.darkMode
                ? 'border-gray-600 bg-gray-700 text-white focus:border-blue-500'
                : 'border-gray-300 bg-white text-gray-900 focus:border-blue-500'
            } focus:outline-none resize-none`}
          />
        </div>

        {/* Highlight Color Selection */}
        <div className="mb-8">
          <label className={`block text-sm font-medium mb-3 ${
            state.settings.darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            {t('highlightColor')}
          </label>
          <div className="flex space-x-3">
            {colorOptions.map((color) => (
              <button
                key={color.value}
                onClick={() => setHighlightColor(color.value)}
                onMouseEnter={playHover}
                className={`flex-1 p-3 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                  highlightColor === color.value
                    ? 'ring-4 ring-blue-500 ring-offset-2'
                    : ''
                } ${
                  state.settings.darkMode ? 'ring-offset-gray-800' : 'ring-offset-white'
                }`}
              >
                <div className={`w-full h-8 rounded-lg ${color.bgClass} mb-2`}></div>
                <p className={`text-xs font-medium ${
                  state.settings.darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {color.label}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button
            onClick={handleClose}
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
            onClick={handleSave}
            disabled={!word.trim() || !definition.trim()}
            onMouseEnter={playHover}
            className={`flex-1 px-4 py-3 rounded-xl transition-all duration-300 ${
              word.trim() && definition.trim()
                ? state.settings.darkMode
                  ? 'bg-blue-600 hover:bg-blue-500 text-white'
                  : 'bg-blue-500 hover:bg-blue-400 text-white'
                : state.settings.darkMode
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {t('createDefinition')}
          </button>
        </div>

        {/* Help text */}
        <div className={`mt-4 p-3 rounded-xl ${
          state.settings.darkMode ? 'bg-blue-900/20' : 'bg-blue-50'
        }`}>
          <p className={`text-sm ${
            state.settings.darkMode ? 'text-blue-300' : 'text-blue-800'
          }`}>
            💡 Vihje: {state.selectedText ? 
              `Valitud tekst: "${state.selectedText.text}"` : 
              'Vali tekst peatükis ja klõpsa siis "Lisa definitsioon" nuppu, et luua automaatselt definitsioon valitud tekstile.'
            }
          </p>
        </div>
      </div>
    </div>
  );
}