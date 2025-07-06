import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Award, RotateCcw } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { useAudio } from '../hooks/useAudio';
import { useTranslation } from '../hooks/useTranslation';
import { subjects } from '../data/subjects';
import { Exercise } from '../types';

interface ExerciseState {
  currentExercise: number;
  answers: (string | string[])[];
  showResults: boolean;
  score: number;
}

export function PracticeMode() {
  const { state, dispatch } = useApp();
  const { playClick, playHover, playSuccess, playError } = useAudio();
  const { t } = useTranslation();
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);
  const [exerciseState, setExerciseState] = useState<ExerciseState>({
    currentExercise: 0,
    answers: [],
    showResults: false,
    score: 0
  });
  const [userAnswer, setUserAnswer] = useState<string>('');

  // Only use custom subjects since we removed the default ones
  const allSubjects = state.customSubjects;
  const currentSubject = allSubjects.find(s => s.id === state.selectedSubject);
  const currentChapter = currentSubject?.chapters.find(c => c.id === selectedChapter);
  const exercises = currentChapter?.exercises || [];
  const currentExercise = exercises[exerciseState.currentExercise];

  const handleBack = () => {
    playClick();
    if (selectedChapter) {
      setSelectedChapter(null);
      setExerciseState({
        currentExercise: 0,
        answers: [],
        showResults: false,
        score: 0
      });
    } else {
      dispatch({ type: 'SET_SUBJECT', payload: null });
    }
  };

  const handleChapterSelect = (chapterId: string) => {
    playClick();
    setSelectedChapter(chapterId);
    setExerciseState({
      currentExercise: 0,
      answers: [],
      showResults: false,
      score: 0
    });
    setUserAnswer('');
  };

  const checkAnswer = (answer: string | string[]) => {
    const isCorrect = Array.isArray(currentExercise.correctAnswer)
      ? Array.isArray(answer) && 
        currentExercise.correctAnswer.every(a => answer.includes(a)) &&
        answer.every(a => currentExercise.correctAnswer.includes(a))
      : answer === currentExercise.correctAnswer;

    if (isCorrect) {
      playSuccess();
    } else {
      playError();
    }

    return isCorrect;
  };

  const handleSubmitAnswer = () => {
    if (!currentExercise) return;

    const isCorrect = checkAnswer(userAnswer);
    const newAnswers = [...exerciseState.answers];
    newAnswers[exerciseState.currentExercise] = userAnswer;

    setExerciseState(prev => ({
      ...prev,
      answers: newAnswers,
      score: prev.score + (isCorrect ? 1 : 0)
    }));

    // Move to next exercise or show results
    setTimeout(() => {
      if (exerciseState.currentExercise < exercises.length - 1) {
        setExerciseState(prev => ({
          ...prev,
          currentExercise: prev.currentExercise + 1
        }));
        setUserAnswer('');
      } else {
        setExerciseState(prev => ({ ...prev, showResults: true }));
        updateProgress();
      }
    }, 1500);
  };

  const updateProgress = () => {
    if (!currentSubject || !selectedChapter) return;

    const progress = state.progress.find(p => p.subjectId === currentSubject.id) || {
      subjectId: currentSubject.id,
      completedChapters: [],
      exerciseScores: {},
      totalScore: 0
    };

    const chapterScore = Math.round((exerciseState.score / exercises.length) * 100);
    const newExerciseScores = {
      ...progress.exerciseScores,
      [selectedChapter]: chapterScore
    };

    const avgScore = Object.values(newExerciseScores).reduce((a, b) => a + b, 0) / Object.values(newExerciseScores).length;

    const newProgress = {
      ...progress,
      exerciseScores: newExerciseScores,
      totalScore: avgScore || 0
    };

    dispatch({ type: 'UPDATE_PROGRESS', payload: newProgress });
  };

  const handleRestart = () => {
    playClick();
    setExerciseState({
      currentExercise: 0,
      answers: [],
      showResults: false,
      score: 0
    });
    setUserAnswer('');
  };

  const renderExercise = (exercise: Exercise) => {
    const isAnswered = exerciseState.answers[exerciseState.currentExercise] !== undefined;
    const userAnswerForThis = exerciseState.answers[exerciseState.currentExercise];
    const isCorrect = isAnswered && checkAnswer(userAnswerForThis);

    switch (exercise.type) {
      case 'multiple-choice':
        return (
          <div className="space-y-4">
            <h3 className={`text-xl font-semibold mb-6 ${
              state.settings.darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {exercise.question}
            </h3>
            <div className="grid gap-3">
              {exercise.options?.map((option, index) => (
                <button
                  key={index}
                  onClick={() => !isAnswered && setUserAnswer(option)}
                  disabled={isAnswered}
                  className={`p-4 rounded-xl text-left transition-all duration-300 ${
                    isAnswered
                      ? option === exercise.correctAnswer
                        ? 'bg-green-500 text-white'
                        : option === userAnswerForThis
                          ? 'bg-red-500 text-white'
                          : state.settings.darkMode
                            ? 'bg-gray-700 text-gray-300'
                            : 'bg-gray-100 text-gray-600'
                      : userAnswer === option
                        ? state.settings.darkMode
                          ? 'bg-blue-600 text-white'
                          : 'bg-blue-500 text-white'
                        : state.settings.darkMode
                          ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            {isAnswered && (
              <div className={`mt-4 p-4 rounded-xl ${
                isCorrect 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                <div className="flex items-center space-x-2 mb-2">
                  {isCorrect ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <XCircle className="w-5 h-5" />
                  )}
                  <span className="font-semibold">
                    {isCorrect ? t('correct') : t('incorrect')}
                  </span>
                </div>
                <p className="text-sm">{exercise.explanation}</p>
              </div>
            )}
          </div>
        );

      case 'fill-blank':
        return (
          <div className="space-y-4">
            <h3 className={`text-xl font-semibold mb-6 ${
              state.settings.darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {exercise.question}
            </h3>
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => !isAnswered && setUserAnswer(e.target.value)}
              disabled={isAnswered}
              placeholder="Kirjuta oma vastus siia..."
              className={`w-full p-4 rounded-xl border-2 transition-all duration-300 ${
                isAnswered
                  ? isCorrect
                    ? 'border-green-500 bg-green-50 text-green-800'
                    : 'border-red-500 bg-red-50 text-red-800'
                  : state.settings.darkMode
                    ? 'border-gray-600 bg-gray-700 text-white focus:border-blue-500'
                    : 'border-gray-300 bg-white text-gray-900 focus:border-blue-500'
              } focus:outline-none`}
            />
            {isAnswered && (
              <div className={`mt-4 p-4 rounded-xl ${
                isCorrect 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                <div className="flex items-center space-x-2 mb-2">
                  {isCorrect ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <XCircle className="w-5 h-5" />
                  )}
                  <span className="font-semibold">
                    {isCorrect ? t('correct') : t('incorrect')}
                  </span>
                </div>
                {!isCorrect && (
                  <p className="text-sm mb-2">
                    {t('correctAnswer')}: {exercise.correctAnswer}
                  </p>
                )}
                <p className="text-sm">{exercise.explanation}</p>
              </div>
            )}
          </div>
        );

      default:
        return <div>Exercise type not supported</div>;
    }
  };

  if (!currentSubject) return null;

  const progress = state.progress.find(p => p.subjectId === currentSubject.id);

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
        <header className="flex items-center justify-between mb-8">
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
                {selectedChapter ? currentChapter?.title : currentSubject.name}
              </h1>
              <p className={`text-lg ${
                state.settings.darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {selectedChapter ? t('practiceExercises') : t('chooseChapterPractice')}
              </p>
            </div>
          </div>
        </header>

        {selectedChapter && currentChapter ? (
          <div className="max-w-4xl mx-auto">
            {exercises.length === 0 ? (
              <div className="text-center py-20">
                <div className={`text-6xl mb-6 ${
                  state.settings.darkMode ? 'text-gray-600' : 'text-gray-400'
                }`}>
                  ❓
                </div>
                <h2 className={`text-2xl font-bold mb-4 ${
                  state.settings.darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Selles peatükis pole veel harjutusi
                </h2>
                <p className={`text-lg mb-8 ${
                  state.settings.darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Lisa harjutusi seadetes!
                </p>
                <button
                  onClick={() => {
                    playClick();
                    dispatch({ type: 'SET_MODE', payload: 'add-content' });
                  }}
                  onMouseEnter={playHover}
                  className={`px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                    state.settings.darkMode 
                      ? 'bg-blue-600 hover:bg-blue-500 text-white' 
                      : 'bg-blue-500 hover:bg-blue-400 text-white'
                  } shadow-lg hover:shadow-xl`}
                >
                  Lisa harjutus
                </button>
              </div>
            ) : exerciseState.showResults ? (
              /* Results View */
              <div className={`rounded-3xl p-8 text-center ${
                state.settings.darkMode 
                  ? 'bg-gray-800/80 border border-gray-700' 
                  : 'bg-white/80 border border-white/20'
              } backdrop-blur-sm shadow-2xl`}>
                <div className="mb-8">
                  <Award className={`w-20 h-20 mx-auto mb-4 ${
                    exerciseState.score / exercises.length >= 0.8 
                      ? 'text-yellow-500' 
                      : exerciseState.score / exercises.length >= 0.6
                        ? 'text-blue-500'
                        : 'text-gray-500'
                  }`} />
                  <h2 className={`text-3xl font-bold mb-2 ${
                    state.settings.darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {t('practiceComplete')}
                  </h2>
                  <p className={`text-xl ${
                    state.settings.darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {t('youScored')} {exerciseState.score} {t('outOf')} {exercises.length}
                  </p>
                </div>

                <div className={`text-6xl font-bold mb-8 ${
                  exerciseState.score / exercises.length >= 0.8 
                    ? 'text-green-500' 
                    : exerciseState.score / exercises.length >= 0.6
                      ? 'text-yellow-500'
                      : 'text-red-500'
                }`}>
                  {Math.round((exerciseState.score / exercises.length) * 100)}%
                </div>

                <div className="flex justify-center space-x-4">
                  <button
                    onClick={handleRestart}
                    onMouseEnter={playHover}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                      state.settings.darkMode 
                        ? 'bg-blue-600 hover:bg-blue-500 text-white' 
                        : 'bg-blue-500 hover:bg-blue-400 text-white'
                    } shadow-lg hover:shadow-xl`}
                  >
                    <RotateCcw className="w-5 h-5" />
                    <span>{t('tryAgain')}</span>
                  </button>
                  <button
                    onClick={handleBack}
                    onMouseEnter={playHover}
                    className={`px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                      state.settings.darkMode 
                        ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' 
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                    } shadow-lg hover:shadow-xl`}
                  >
                    {t('backToChapters')}
                  </button>
                </div>
              </div>
            ) : (
              /* Exercise View */
              <div className={`rounded-3xl p-8 ${
                state.settings.darkMode 
                  ? 'bg-gray-800/80 border border-gray-700' 
                  : 'bg-white/80 border border-white/20'
              } backdrop-blur-sm shadow-2xl`}>
                
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className={`text-sm font-medium ${
                      state.settings.darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {t('question')} {exerciseState.currentExercise + 1} {t('outOf')} {exercises.length}
                    </span>
                    <span className={`text-sm font-medium ${
                      state.settings.darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {t('score')}: {exerciseState.score}
                    </span>
                  </div>
                  <div className={`w-full h-2 rounded-full ${
                    state.settings.darkMode ? 'bg-gray-700' : 'bg-gray-200'
                  }`}>
                    <div 
                      className="h-full rounded-full bg-blue-500 transition-all duration-300"
                      style={{ width: `${((exerciseState.currentExercise + 1) / exercises.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Exercise Content */}
                {currentExercise && renderExercise(currentExercise)}

                {/* Submit Button */}
                {!exerciseState.answers[exerciseState.currentExercise] && (
                  <div className="mt-8 flex justify-center">
                    <button
                      onClick={handleSubmitAnswer}
                      onMouseEnter={playHover}
                      disabled={!userAnswer}
                      className={`px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                        userAnswer
                          ? state.settings.darkMode
                            ? 'bg-green-600 hover:bg-green-500 text-white'
                            : 'bg-green-500 hover:bg-green-400 text-white'
                          : state.settings.darkMode
                            ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      } text-lg font-semibold shadow-lg`}
                    >
                      {t('submitAnswer')}
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          /* Chapter Selection View */
          <div className="max-w-4xl mx-auto">
            {currentSubject.chapters.length === 0 ? (
              <div className="text-center py-20">
                <div className={`text-6xl mb-6 ${
                  state.settings.darkMode ? 'text-gray-600' : 'text-gray-400'
                }`}>
                  📝
                </div>
                <h2 className={`text-2xl font-bold mb-4 ${
                  state.settings.darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Selles aines pole veel peatükke
                </h2>
                <p className={`text-lg mb-8 ${
                  state.settings.darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Lisa peatükke seadetes!
                </p>
                <button
                  onClick={() => {
                    playClick();
                    dispatch({ type: 'SET_MODE', payload: 'add-content' });
                  }}
                  onMouseEnter={playHover}
                  className={`px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                    state.settings.darkMode 
                      ? 'bg-blue-600 hover:bg-blue-500 text-white' 
                      : 'bg-blue-500 hover:bg-blue-400 text-white'
                  } shadow-lg hover:shadow-xl`}
                >
                  Lisa peatükk
                </button>
              </div>
            ) : (
              <div className="grid gap-6">
                {currentSubject.chapters.map((chapter, index) => {
                  const chapterScore = progress?.exerciseScores[chapter.id];
                  
                  return (
                    <button
                      key={chapter.id}
                      onClick={() => handleChapterSelect(chapter.id)}
                      onMouseEnter={playHover}
                      className={`group p-6 rounded-2xl transition-all duration-300 transform hover:scale-102 hover:-translate-y-1 ${
                        state.settings.darkMode 
                          ? 'bg-gray-800/80 hover:bg-gray-700/80 border border-gray-700' 
                          : 'bg-white/80 hover:bg-white/90 border border-white/20'
                      } backdrop-blur-sm shadow-xl hover:shadow-2xl text-left`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div 
                            className={`w-12 h-12 rounded-full flex items-center justify-center ${
                              chapterScore !== undefined
                                ? chapterScore >= 80
                                  ? 'bg-green-500 text-white'
                                  : chapterScore >= 60
                                    ? 'bg-yellow-500 text-white'
                                    : 'bg-red-500 text-white'
                  
                                : state.settings.darkMode 
                                  ? 'bg-gray-700 text-gray-300' 
                                  : 'bg-gray-100 text-gray-600'
                            }`}
                          >
                            {chapterScore !== undefined ? (
                              <span className="text-sm font-bold">{chapterScore}%</span>
                            ) : (
                              <span className="font-bold">{index + 1}</span>
                            )}
                          </div>
                          <div>
                            <h3 className={`text-xl font-semibold ${
                              state.settings.darkMode ? 'text-white' : 'text-gray-900'
                            }`}>
                              {chapter.title}
                            </h3>
                            <p className={`text-sm ${
                              state.settings.darkMode ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                              {chapter.exercises.length} {t('exercises')}
                              <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                                state.settings.darkMode ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800'
                              }`}>
                                {t('customContent')}
                              </span>
                            </p>
                          </div>
                        </div>
                        <ArrowRight className={`w-6 h-6 transition-transform group-hover:translate-x-1 ${
                          state.settings.darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`} />
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}