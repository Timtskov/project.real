import React, { useState } from 'react';
import { ArrowLeft, Plus, Save, X, Upload, Image as ImageIcon, Trash2 } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { useAudio } from '../hooks/useAudio';
import { useTranslation } from '../hooks/useTranslation';
import { Subject, Chapter, Exercise, ChapterImage, ExerciseImage, MainHeading, BookHeading } from '../types';

type ContentType = 'subject' | 'chapter' | 'exercise' | 'book-heading';

interface ImageUpload {
  file: File;
  preview: string;
  id: string;
}

export function AddContentPage() {
  const { state, dispatch } = useApp();
  const { playClick, playHover } = useAudio();
  const { t } = useTranslation();
  
  const [contentType, setContentType] = useState<ContentType>('subject');
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const [selectedChapter, setSelectedChapter] = useState<string>('');
  
  // Subject form
  const [subjectName, setSubjectName] = useState('');
  const [subjectDescription, setSubjectDescription] = useState('');
  const [subjectIcon, setSubjectIcon] = useState('BookOpen');
  const [subjectColor, setSubjectColor] = useState('#3B82F6');
  
  // Book heading form
  const [bookHeadingTitle, setBookHeadingTitle] = useState('');
  const [bookHeadingContent, setBookHeadingContent] = useState('');
  
  // Chapter form
  const [chapterTitle, setChapterTitle] = useState('');
  const [chapterContent, setChapterContent] = useState('');
  const [chapterImages, setChapterImages] = useState<ChapterImage[]>([]);
  const [mainHeadings, setMainHeadings] = useState<MainHeading[]>([]);
  const [imageUploads, setImageUploads] = useState<ImageUpload[]>([]);
  const [selectedBookHeading, setSelectedBookHeading] = useState<string>('');
  
  // Exercise form
  const [exerciseQuestion, setExerciseQuestion] = useState('');
  const [exerciseType, setExerciseType] = useState<'multiple-choice' | 'fill-blank'>('multiple-choice');
  const [exerciseOptions, setExerciseOptions] = useState<string[]>(['', '']);
  const [exerciseCorrectAnswer, setExerciseCorrectAnswer] = useState('');
  const [exerciseExplanation, setExerciseExplanation] = useState('');
  const [exerciseImages, setExerciseImages] = useState<ExerciseImage[]>([]);
  const [exerciseImageUploads, setExerciseImageUploads] = useState<ImageUpload[]>([]);

  const handleBack = () => {
    playClick();
    dispatch({ type: 'SET_MODE', payload: 'settings' });
  };

  const resetForms = () => {
    setSubjectName('');
    setSubjectDescription('');
    setSubjectIcon('BookOpen');
    setSubjectColor('#3B82F6');
    setBookHeadingTitle('');
    setBookHeadingContent('');
    setChapterTitle('');
    setChapterContent('');
    setChapterImages([]);
    setMainHeadings([]);
    setImageUploads([]);
    setSelectedBookHeading('');
    setExerciseQuestion('');
    setExerciseType('multiple-choice');
    setExerciseOptions(['', '']);
    setExerciseCorrectAnswer('');
    setExerciseExplanation('');
    setExerciseImages([]);
    setExerciseImageUploads([]);
  };

  const handleImageUpload = (files: FileList | null, isExercise: boolean = false) => {
    if (!files) return;

    Array.from(files).forEach(file => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const preview = e.target?.result as string;
          const imageUpload: ImageUpload = {
            file,
            preview,
            id: Math.random().toString(36).substr(2, 9)
          };

          if (isExercise) {
            setExerciseImageUploads(prev => [...prev, imageUpload]);
          } else {
            setImageUploads(prev => [...prev, imageUpload]);
          }
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const removeImageUpload = (id: string, isExercise: boolean = false) => {
    if (isExercise) {
      setExerciseImageUploads(prev => prev.filter(img => img.id !== id));
    } else {
      setImageUploads(prev => prev.filter(img => img.id !== id));
    }
  };

  const addImageFromUpload = (upload: ImageUpload, isExercise: boolean = false) => {
    const newImage = {
      id: Math.random().toString(36).substr(2, 9),
      url: upload.preview,
      description: '',
      alt: upload.file.name,
      width: 400,
      height: 300,
      position: 'center' as const
    };

    if (isExercise) {
      setExerciseImages(prev => [...prev, newImage]);
      removeImageUpload(upload.id, true);
    } else {
      setChapterImages(prev => [...prev, newImage]);
      removeImageUpload(upload.id, false);
    }
  };

  const addMainHeading = () => {
    const newHeading: MainHeading = {
      id: Math.random().toString(36).substr(2, 9),
      title: '',
      content: '',
      subHeadings: [],
      images: [],
      order: mainHeadings.length
    };
    setMainHeadings(prev => [...prev, newHeading]);
  };

  const updateMainHeading = (id: string, field: keyof MainHeading, value: any) => {
    setMainHeadings(prev => prev.map(heading => 
      heading.id === id ? { ...heading, [field]: value } : heading
    ));
  };

  const removeMainHeading = (id: string) => {
    setMainHeadings(prev => prev.filter(heading => heading.id !== id));
  };

  const handleSaveSubject = () => {
    if (!subjectName.trim()) return;

    const newSubject: Subject = {
      id: Math.random().toString(36).substr(2, 9),
      name: subjectName,
      description: subjectDescription,
      icon: subjectIcon,
      color: subjectColor,
      chapters: [],
      bookHeadings: [],
      isCustom: true
    };

    dispatch({ type: 'ADD_CUSTOM_SUBJECT', payload: newSubject });
    playClick();
    resetForms();
  };

  const handleSaveBookHeading = () => {
    if (!bookHeadingTitle.trim() || !selectedSubject) return;

    const subject = state.customSubjects.find(s => s.id === selectedSubject);
    if (!subject) return;

    const newHeading: BookHeading = {
      id: Math.random().toString(36).substr(2, 9),
      title: bookHeadingTitle,
      content: bookHeadingContent,
      order: (subject.bookHeadings || []).length,
      chapterIds: []
    };

    dispatch({ 
      type: 'ADD_BOOK_HEADING', 
      payload: { subjectId: selectedSubject, heading: newHeading }
    });
    playClick();
    resetForms();
  };

  const handleSaveChapter = () => {
    if (!chapterTitle.trim() || !selectedSubject) return;

    const newChapter: Chapter = {
      id: Math.random().toString(36).substr(2, 9),
      title: chapterTitle,
      content: chapterContent,
      mainHeadings: mainHeadings,
      images: chapterImages,
      exercises: [],
      bookHeadingId: selectedBookHeading || undefined,
      isCustom: true
    };

    dispatch({ 
      type: 'ADD_CUSTOM_CHAPTER', 
      payload: { subjectId: selectedSubject, chapter: newChapter }
    });
    playClick();
    resetForms();
  };

  const handleSaveExercise = () => {
    if (!exerciseQuestion.trim() || !selectedSubject || !selectedChapter) return;

    const newExercise: Exercise = {
      id: Math.random().toString(36).substr(2, 9),
      question: exerciseQuestion,
      type: exerciseType,
      options: exerciseType === 'multiple-choice' ? exerciseOptions.filter(opt => opt.trim()) : undefined,
      correctAnswer: exerciseCorrectAnswer,
      explanation: exerciseExplanation,
      images: exerciseImages,
      isCustom: true
    };

    dispatch({ 
      type: 'ADD_CUSTOM_EXERCISE', 
      payload: { 
        subjectId: selectedSubject, 
        chapterId: selectedChapter, 
        exercise: newExercise 
      }
    });
    playClick();
    resetForms();
  };

  const iconOptions = [
    'BookOpen', 'Calculator', 'Atom', 'Beaker', 'Globe', 'Music', 'Palette', 'Camera'
  ];

  const colorOptions = [
    '#3B82F6', '#10B981', '#8B5CF6', '#EC4899', '#F59E0B', '#EF4444', '#06B6D4', '#84CC16'
  ];

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
                {t('addContent')}
              </h1>
              <p className={`text-lg ${
                state.settings.darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {t('addContentDescription')}
              </p>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto">
          {/* Content Type Selection */}
          <div className={`mb-8 p-6 rounded-2xl ${
            state.settings.darkMode 
              ? 'bg-gray-800/80 border border-gray-700' 
              : 'bg-white/80 border border-white/20'
          } backdrop-blur-sm shadow-xl`}>
            <h2 className={`text-xl font-semibold mb-4 ${
              state.settings.darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Mida soovid lisada?
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { type: 'subject' as ContentType, label: t('addSubject'), icon: '📚' },
                { type: 'book-heading' as ContentType, label: t('addBookHeading'), icon: '📑' },
                { type: 'chapter' as ContentType, label: t('addChapter'), icon: '📖' },
                { type: 'exercise' as ContentType, label: t('addExercise'), icon: '❓' }
              ].map((option) => (
                <button
                  key={option.type}
                  onClick={() => {
                    setContentType(option.type);
                    playClick();
                  }}
                  onMouseEnter={playHover}
                  className={`p-4 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                    contentType === option.type
                      ? state.settings.darkMode
                        ? 'bg-blue-600 text-white'
                        : 'bg-blue-500 text-white'
                      : state.settings.darkMode
                        ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  <div className="text-2xl mb-2">{option.icon}</div>
                  <div className="font-medium text-sm">{option.label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Subject Form */}
          {contentType === 'subject' && (
            <div className={`p-8 rounded-3xl ${
              state.settings.darkMode 
                ? 'bg-gray-800/80 border border-gray-700' 
                : 'bg-white/80 border border-white/20'
            } backdrop-blur-sm shadow-2xl`}>
              <h2 className={`text-2xl font-bold mb-6 ${
                state.settings.darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {t('createSubject')}
              </h2>

              <div className="space-y-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    state.settings.darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {t('subjectName')}
                  </label>
                  <input
                    type="text"
                    value={subjectName}
                    onChange={(e) => setSubjectName(e.target.value)}
                    className={`w-full p-3 rounded-xl border transition-all duration-300 ${
                      state.settings.darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                    } focus:outline-none`}
                    placeholder="Sisesta aine nimi..."
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    state.settings.darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {t('subjectDescription')}
                  </label>
                  <textarea
                    value={subjectDescription}
                    onChange={(e) => setSubjectDescription(e.target.value)}
                    rows={3}
                    className={`w-full p-3 rounded-xl border transition-all duration-300 ${
                      state.settings.darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                    } focus:outline-none`}
                    placeholder="Kirjelda ainet..."
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    state.settings.darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Ikoon
                  </label>
                  <div className="grid grid-cols-4 gap-3">
                    {iconOptions.map((icon) => (
                      <button
                        key={icon}
                        onClick={() => setSubjectIcon(icon)}
                        className={`p-3 rounded-xl transition-all duration-300 ${
                          subjectIcon === icon
                            ? state.settings.darkMode
                              ? 'bg-blue-600 text-white'
                              : 'bg-blue-500 text-white'
                            : state.settings.darkMode
                              ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                              : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                        }`}
                      >
                        {icon}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    state.settings.darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Värv
                  </label>
                  <div className="grid grid-cols-8 gap-3">
                    {colorOptions.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSubjectColor(color)}
                        className={`w-12 h-12 rounded-full transition-all duration-300 transform hover:scale-110 ${
                          subjectColor === color ? 'ring-4 ring-offset-2 ring-white' : ''
                        }`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleSaveSubject}
                  onMouseEnter={playHover}
                  disabled={!subjectName.trim()}
                  className={`w-full flex items-center justify-center space-x-2 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                    subjectName.trim()
                      ? state.settings.darkMode
                        ? 'bg-green-600 hover:bg-green-500 text-white'
                        : 'bg-green-500 hover:bg-green-400 text-white'
                      : state.settings.darkMode
                        ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  } text-lg font-semibold shadow-lg`}
                >
                  <Save className="w-6 h-6" />
                  <span>{t('save')}</span>
                </button>
              </div>
            </div>
          )}

          {/* Book Heading Form */}
          {contentType === 'book-heading' && (
            <div className={`p-8 rounded-3xl ${
              state.settings.darkMode 
                ? 'bg-gray-800/80 border border-gray-700' 
                : 'bg-white/80 border border-white/20'
            } backdrop-blur-sm shadow-2xl`}>
              <h2 className={`text-2xl font-bold mb-6 ${
                state.settings.darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {t('createBookHeading')}
              </h2>

              <div className="space-y-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    state.settings.darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {t('selectSubject')}
                  </label>
                  <select
                    value={selectedSubject}
                    onChange={(e) => setSelectedSubject(e.target.value)}
                    className={`w-full p-3 rounded-xl border transition-all duration-300 ${
                      state.settings.darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                    } focus:outline-none`}
                  >
                    <option value="">Vali aine...</option>
                    {state.customSubjects.map((subject) => (
                      <option key={subject.id} value={subject.id}>
                        {subject.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    state.settings.darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {t('bookHeadingTitle')}
                  </label>
                  <input
                    type="text"
                    value={bookHeadingTitle}
                    onChange={(e) => setBookHeadingTitle(e.target.value)}
                    className={`w-full p-3 rounded-xl border transition-all duration-300 ${
                      state.settings.darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                    } focus:outline-none`}
                    placeholder="Sisesta raamatu pealkirja pealkiri..."
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    state.settings.darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {t('bookHeadingContent')}
                  </label>
                  <textarea
                    value={bookHeadingContent}
                    onChange={(e) => setBookHeadingContent(e.target.value)}
                    rows={4}
                    className={`w-full p-3 rounded-xl border transition-all duration-300 ${
                      state.settings.darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                    } focus:outline-none`}
                    placeholder="Kirjuta raamatu pealkirja sisu..."
                  />
                </div>

                <button
                  onClick={handleSaveBookHeading}
                  onMouseEnter={playHover}
                  disabled={!bookHeadingTitle.trim() || !selectedSubject}
                  className={`w-full flex items-center justify-center space-x-2 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                    bookHeadingTitle.trim() && selectedSubject
                      ? state.settings.darkMode
                        ? 'bg-green-600 hover:bg-green-500 text-white'
                        : 'bg-green-500 hover:bg-green-400 text-white'
                      : state.settings.darkMode
                        ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  } text-lg font-semibold shadow-lg`}
                >
                  <Save className="w-6 h-6" />
                  <span>{t('save')}</span>
                </button>
              </div>
            </div>
          )}

          {/* Chapter Form */}
          {contentType === 'chapter' && (
            <div className={`p-8 rounded-3xl ${
              state.settings.darkMode 
                ? 'bg-gray-800/80 border border-gray-700' 
                : 'bg-white/80 border border-white/20'
            } backdrop-blur-sm shadow-2xl`}>
              <h2 className={`text-2xl font-bold mb-6 ${
                state.settings.darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {t('createChapter')}
              </h2>

              <div className="space-y-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    state.settings.darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {t('selectSubject')}
                  </label>
                  <select
                    value={selectedSubject}
                    onChange={(e) => {
                      setSelectedSubject(e.target.value);
                      setSelectedBookHeading('');
                    }}
                    className={`w-full p-3 rounded-xl border transition-all duration-300 ${
                      state.settings.darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                    } focus:outline-none`}
                  >
                    <option value="">Vali aine...</option>
                    {state.customSubjects.map((subject) => (
                      <option key={subject.id} value={subject.id}>
                        {subject.name}
                      </option>
                    ))}
                  </select>
                </div>

                {selectedSubject && (
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      state.settings.darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {t('assignToHeading')}
                    </label>
                    <select
                      value={selectedBookHeading}
                      onChange={(e) => setSelectedBookHeading(e.target.value)}
                      className={`w-full p-3 rounded-xl border transition-all duration-300 ${
                        state.settings.darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                          : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                      } focus:outline-none`}
                    >
                      <option value="">{t('noHeading')}</option>
                      {state.customSubjects
                        .find(s => s.id === selectedSubject)
                        ?.bookHeadings?.map((heading) => (
                          <option key={heading.id} value={heading.id}>
                            {heading.title}
                          </option>
                        ))}
                    </select>
                  </div>
                )}

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    state.settings.darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {t('chapterTitle')}
                  </label>
                  <input
                    type="text"
                    value={chapterTitle}
                    onChange={(e) => setChapterTitle(e.target.value)}
                    className={`w-full p-3 rounded-xl border transition-all duration-300 ${
                      state.settings.darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                    } focus:outline-none`}
                    placeholder="Sisesta peatüki pealkiri..."
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    state.settings.darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {t('chapterContent')}
                  </label>
                  <textarea
                    value={chapterContent}
                    onChange={(e) => setChapterContent(e.target.value)}
                    rows={6}
                    className={`w-full p-3 rounded-xl border transition-all duration-300 ${
                      state.settings.darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                    } focus:outline-none`}
                    placeholder="Kirjuta peatüki sisu..."
                  />
                </div>

                {/* Main Headings */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <label className={`text-sm font-medium ${
                      state.settings.darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {t('mainHeadings')}
                    </label>
                    <button
                      onClick={addMainHeading}
                      onMouseEnter={playHover}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                        state.settings.darkMode 
                          ? 'bg-blue-600 hover:bg-blue-500 text-white' 
                          : 'bg-blue-500 hover:bg-blue-400 text-white'
                      }`}
                    >
                      <Plus className="w-4 h-4" />
                      <span>{t('addMainHeading')}</span>
                    </button>
                  </div>

                  {mainHeadings.map((heading, index) => (
                    <div key={heading.id} className={`mb-4 p-4 rounded-xl border ${
                      state.settings.darkMode ? 'border-gray-600 bg-gray-700/50' : 'border-gray-200 bg-gray-50'
                    }`}>
                      <div className="flex items-center justify-between mb-3">
                        <span className={`font-medium ${
                          state.settings.darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          Peapealkiri {index + 1}
                        </span>
                        <button
                          onClick={() => removeMainHeading(heading.id)}
                          className={`p-1 rounded transition-colors ${
                            state.settings.darkMode 
                              ? 'text-red-400 hover:text-red-300' 
                              : 'text-red-500 hover:text-red-400'
                          }`}
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <div className="space-y-3">
                        <input
                          type="text"
                          value={heading.title}
                          onChange={(e) => updateMainHeading(heading.id, 'title', e.target.value)}
                          placeholder="Peapealkirja pealkiri..."
                          className={`w-full p-2 rounded-lg border transition-all duration-300 ${
                            state.settings.darkMode 
                              ? 'bg-gray-600 border-gray-500 text-white focus:border-blue-500' 
                              : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                          } focus:outline-none`}
                        />
                        <textarea
                          value={heading.content}
                          onChange={(e) => updateMainHeading(heading.id, 'content', e.target.value)}
                          rows={3}
                          placeholder="Peapealkirja sisu..."
                          className={`w-full p-2 rounded-lg border transition-all duration-300 ${
                            state.settings.darkMode 
                              ? 'bg-gray-600 border-gray-500 text-white focus:border-blue-500' 
                              : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                          } focus:outline-none`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Image Upload */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    state.settings.darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {t('chapterImages')}
                  </label>
                  
                  <div 
                    className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
                      state.settings.darkMode 
                        ? 'border-gray-600 hover:border-gray-500 bg-gray-700/30' 
                        : 'border-gray-300 hover:border-gray-400 bg-gray-50'
                    }`}
                    onDrop={(e) => {
                      e.preventDefault();
                      handleImageUpload(e.dataTransfer.files);
                    }}
                    onDragOver={(e) => e.preventDefault()}
                  >
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e.target.files)}
                      className="hidden"
                      id="image-upload"
                    />
                    <label htmlFor="image-upload" className="cursor-pointer">
                      <Upload className={`w-12 h-12 mx-auto mb-4 ${
                        state.settings.darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`} />
                      <p className={`text-lg font-medium mb-2 ${
                        state.settings.darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {t('dragDropImages')}
                      </p>
                      <p className={`text-sm ${
                        state.settings.darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {t('supportedFormats')}
                      </p>
                    </label>
                  </div>

                  {/* Image Previews */}
                  {imageUploads.length > 0 && (
                    <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
                      {imageUploads.map((upload) => (
                        <div key={upload.id} className={`relative rounded-lg overflow-hidden ${
                          state.settings.darkMode ? 'bg-gray-700' : 'bg-gray-100'
                        }`}>
                          <img
                            src={upload.preview}
                            alt="Preview"
                            className="w-full h-32 object-cover"
                          />
                          <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
                            <button
                              onClick={() => addImageFromUpload(upload)}
                              className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-400 transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => removeImageUpload(upload.id)}
                              className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-400 transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Added Images */}
                  {chapterImages.length > 0 && (
                    <div className="mt-4 space-y-3">
                      <h4 className={`font-medium ${
                        state.settings.darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        Lisatud pildid:
                      </h4>
                      {chapterImages.map((image, index) => (
                        <div key={image.id} className={`p-3 rounded-lg border ${
                          state.settings.darkMode ? 'border-gray-600 bg-gray-700/50' : 'border-gray-200 bg-gray-50'
                        }`}>
                          <div className="flex items-center justify-between">
                            <span className={`text-sm ${
                              state.settings.darkMode ? 'text-gray-300' : 'text-gray-700'
                            }`}>
                              Pilt {index + 1}: {image.alt}
                            </span>
                            <button
                              onClick={() => setChapterImages(prev => prev.filter(img => img.id !== image.id))}
                              className={`p-1 rounded transition-colors ${
                                state.settings.darkMode 
                                  ? 'text-red-400 hover:text-red-300' 
                                  : 'text-red-500 hover:text-red-400'
                              }`}
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  onClick={handleSaveChapter}
                  onMouseEnter={playHover}
                  disabled={!chapterTitle.trim() || !selectedSubject}
                  className={`w-full flex items-center justify-center space-x-2 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                    chapterTitle.trim() && selectedSubject
                      ? state.settings.darkMode
                        ? 'bg-green-600 hover:bg-green-500 text-white'
                        : 'bg-green-500 hover:bg-green-400 text-white'
                      : state.settings.darkMode
                        ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  } text-lg font-semibold shadow-lg`}
                >
                  <Save className="w-6 h-6" />
                  <span>{t('save')}</span>
                </button>
              </div>
            </div>
          )}

          {/* Exercise Form */}
          {contentType === 'exercise' && (
            <div className={`p-8 rounded-3xl ${
              state.settings.darkMode 
                ? 'bg-gray-800/80 border border-gray-700' 
                : 'bg-white/80 border border-white/20'
            } backdrop-blur-sm shadow-2xl`}>
              <h2 className={`text-2xl font-bold mb-6 ${
                state.settings.darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {t('createExercise')}
              </h2>

              <div className="space-y-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    state.settings.darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {t('selectSubject')}
                  </label>
                  <select
                    value={selectedSubject}
                    onChange={(e) => {
                      setSelectedSubject(e.target.value);
                      setSelectedChapter('');
                    }}
                    className={`w-full p-3 rounded-xl border transition-all duration-300 ${
                      state.settings.darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                    } focus:outline-none`}
                  >
                    <option value="">Vali aine...</option>
                    {state.customSubjects.map((subject) => (
                      <option key={subject.id} value={subject.id}>
                        {subject.name}
                      </option>
                    ))}
                  </select>
                </div>

                {selectedSubject && (
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      state.settings.darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {t('selectChapter')}
                    </label>
                    <select
                      value={selectedChapter}
                      onChange={(e) => setSelectedChapter(e.target.value)}
                      className={`w-full p-3 rounded-xl border transition-all duration-300 ${
                        state.settings.darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                          : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                      } focus:outline-none`}
                    >
                      <option value="">Vali peatükk...</option>
                      {state.customSubjects
                        .find(s => s.id === selectedSubject)
                        ?.chapters.map((chapter) => (
                          <option key={chapter.id} value={chapter.id}>
                            {chapter.title}
                          </option>
                        ))}
                    </select>
                  </div>
                )}

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    state.settings.darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {t('exerciseQuestion')}
                  </label>
                  <textarea
                    value={exerciseQuestion}
                    onChange={(e) => setExerciseQuestion(e.target.value)}
                    rows={3}
                    className={`w-full p-3 rounded-xl border transition-all duration-300 ${
                      state.settings.darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                    } focus:outline-none`}
                    placeholder="Kirjuta harjutuse küsimus..."
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    state.settings.darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {t('exerciseType')}
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { type: 'multiple-choice' as const, label: t('multipleChoice') },
                      { type: 'fill-blank' as const, label: t('fillBlank') }
                    ].map((option) => (
                      <button
                        key={option.type}
                        onClick={() => setExerciseType(option.type)}
                        className={`p-3 rounded-xl transition-all duration-300 ${
                          exerciseType === option.type
                            ? state.settings.darkMode
                              ? 'bg-blue-600 text-white'
                              : 'bg-blue-500 text-white'
                            : state.settings.darkMode
                              ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                              : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                {exerciseType === 'multiple-choice' && (
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      state.settings.darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {t('options')}
                    </label>
                    <div className="space-y-3">
                      {exerciseOptions.map((option, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <input
                            type="text"
                            value={option}
                            onChange={(e) => {
                              const newOptions = [...exerciseOptions];
                              newOptions[index] = e.target.value;
                              setExerciseOptions(newOptions);
                            }}
                            className={`flex-1 p-3 rounded-xl border transition-all duration-300 ${
                              state.settings.darkMode 
                                ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                                : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                            } focus:outline-none`}
                            placeholder={`Valik ${index + 1}...`}
                          />
                          {exerciseOptions.length > 2 && (
                            <button
                              onClick={() => {
                                const newOptions = exerciseOptions.filter((_, i) => i !== index);
                                setExerciseOptions(newOptions);
                              }}
                              className={`p-2 rounded-lg transition-colors ${
                                state.settings.darkMode 
                                  ? 'text-red-400 hover:text-red-300' 
                                  : 'text-red-500 hover:text-red-400'
                              }`}
                            >
                              <X className="w-5 h-5" />
                            </button>
                          )}
                        </div>
                      ))}
                      <button
                        onClick={() => setExerciseOptions([...exerciseOptions, ''])}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                          state.settings.darkMode 
                            ? 'bg-blue-600 hover:bg-blue-500 text-white' 
                            : 'bg-blue-500 hover:bg-blue-400 text-white'
                        }`}
                      >
                        <Plus className="w-4 h-4" />
                        <span>{t('addOption')}</span>
                      </button>
                    </div>
                  </div>
                )}

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    state.settings.darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {t('correctAnswerLabel')}
                  </label>
                  {exerciseType === 'multiple-choice' ? (
                    <select
                      value={exerciseCorrectAnswer}
                      onChange={(e) => setExerciseCorrectAnswer(e.target.value)}
                      className={`w-full p-3 rounded-xl border transition-all duration-300 ${
                        state.settings.darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                          : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                      } focus:outline-none`}
                    >
                      <option value="">Vali õige vastus...</option>
                      {exerciseOptions.filter(opt => opt.trim()).map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type="text"
                      value={exerciseCorrectAnswer}
                      onChange={(e) => setExerciseCorrectAnswer(e.target.value)}
                      className={`w-full p-3 rounded-xl border transition-all duration-300 ${
                        state.settings.darkMode 
                          ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                          : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                      } focus:outline-none`}
                      placeholder="Kirjuta õige vastus..."
                    />
                  )}
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    state.settings.darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {t('explanation')}
                  </label>
                  <textarea
                    value={exerciseExplanation}
                    onChange={(e) => setExerciseExplanation(e.target.value)}
                    rows={3}
                    className={`w-full p-3 rounded-xl border transition-all duration-300 ${
                      state.settings.darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                    } focus:outline-none`}
                    placeholder="Selgita vastust..."
                  />
                </div>

                {/* Exercise Image Upload */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    state.settings.darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {t('exerciseImages')}
                  </label>
                  
                  <div 
                    className={`border-2 border-dashed rounded-xl p-6 text-center transition-all duration-300 ${
                      state.settings.darkMode 
                        ? 'border-gray-600 hover:border-gray-500 bg-gray-700/30' 
                        : 'border-gray-300 hover:border-gray-400 bg-gray-50'
                    }`}
                    onDrop={(e) => {
                      e.preventDefault();
                      handleImageUpload(e.dataTransfer.files, true);
                    }}
                    onDragOver={(e) => e.preventDefault()}
                  >
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e.target.files, true)}
                      className="hidden"
                      id="exercise-image-upload"
                    />
                    <label htmlFor="exercise-image-upload" className="cursor-pointer">
                      <ImageIcon className={`w-8 h-8 mx-auto mb-2 ${
                        state.settings.darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`} />
                      <p className={`text-sm ${
                        state.settings.darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Lisa pildid harjutusele
                      </p>
                    </label>
                  </div>

                  {/* Exercise Image Previews */}
                  {exerciseImageUploads.length > 0 && (
                    <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
                      {exerciseImageUploads.map((upload) => (
                        <div key={upload.id} className={`relative rounded-lg overflow-hidden ${
                          state.settings.darkMode ? 'bg-gray-700' : 'bg-gray-100'
                        }`}>
                          <img
                            src={upload.preview}
                            alt="Preview"
                            className="w-full h-24 object-cover"
                          />
                          <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
                            <button
                              onClick={() => addImageFromUpload(upload, true)}
                              className="p-1 bg-green-500 text-white rounded hover:bg-green-400 transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                            <button
                              onClick={() => removeImageUpload(upload.id, true)}
                              className="p-1 bg-red-500 text-white rounded hover:bg-red-400 transition-colors"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  onClick={handleSaveExercise}
                  onMouseEnter={playHover}
                  disabled={!exerciseQuestion.trim() || !selectedSubject || !selectedChapter || !exerciseCorrectAnswer}
                  className={`w-full flex items-center justify-center space-x-2 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                    exerciseQuestion.trim() && selectedSubject && selectedChapter && exerciseCorrectAnswer
                      ? state.settings.darkMode
                        ? 'bg-green-600 hover:bg-green-500 text-white'
                        : 'bg-green-500 hover:bg-green-400 text-white'
                      : state.settings.darkMode
                        ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  } text-lg font-semibold shadow-lg`}
                >
                  <Save className="w-6 h-6" />
                  <span>{t('save')}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}