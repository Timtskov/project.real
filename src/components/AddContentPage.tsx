import React, { useState } from 'react';
import { ArrowLeft, Plus, Trash2, Save, BookOpen, FileText, HelpCircle, Book, Image, AlignLeft, AlignCenter, AlignRight } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { useAudio } from '../hooks/useAudio';
import { useTranslation } from '../hooks/useTranslation';
import { Subject, Chapter, Exercise, BookHeading, ChapterImage, ExerciseImage, MainHeading, SubHeading } from '../types';

export function AddContentPage() {
  const { state, dispatch } = useApp();
  const { playClick, playHover } = useAudio();
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'subject' | 'chapter' | 'exercise' | 'heading'>('subject');

  // Subject form state
  const [subjectName, setSubjectName] = useState('');
  const [subjectDescription, setSubjectDescription] = useState('');
  const [subjectIcon, setSubjectIcon] = useState('BookOpen');
  const [subjectColor, setSubjectColor] = useState('#3B82F6');

  // Chapter form state
  const [selectedSubjectId, setSelectedSubjectId] = useState('');
  const [chapterTitle, setChapterTitle] = useState('');
  const [chapterContent, setChapterContent] = useState('');
  const [chapterImages, setChapterImages] = useState<ChapterImage[]>([]);
  const [selectedBookHeadingId, setSelectedBookHeadingId] = useState<string>('');
  const [mainHeadings, setMainHeadings] = useState<MainHeading[]>([]);

  // Exercise form state
  const [selectedChapterId, setSelectedChapterId] = useState('');
  const [exerciseQuestion, setExerciseQuestion] = useState('');
  const [exerciseType, setExerciseType] = useState<'multiple-choice' | 'fill-blank'>('multiple-choice');
  const [exerciseOptions, setExerciseOptions] = useState<string[]>(['', '']);
  const [exerciseCorrectAnswer, setExerciseCorrectAnswer] = useState('');
  const [exerciseExplanation, setExerciseExplanation] = useState('');
  const [exerciseImages, setExerciseImages] = useState<ExerciseImage[]>([]);

  // Book heading form state
  const [headingTitle, setHeadingTitle] = useState('');
  const [headingContent, setHeadingContent] = useState('');

  const handleBack = () => {
    playClick();
    dispatch({ type: 'SET_MODE', payload: 'home' });
  };

  const resetSubjectForm = () => {
    setSubjectName('');
    setSubjectDescription('');
    setSubjectIcon('BookOpen');
    setSubjectColor('#3B82F6');
  };

  const resetChapterForm = () => {
    setSelectedSubjectId('');
    setChapterTitle('');
    setChapterContent('');
    setChapterImages([]);
    setSelectedBookHeadingId('');
    setMainHeadings([]);
  };

  const resetExerciseForm = () => {
    setSelectedSubjectId('');
    setSelectedChapterId('');
    setExerciseQuestion('');
    setExerciseType('multiple-choice');
    setExerciseOptions(['', '']);
    setExerciseCorrectAnswer('');
    setExerciseExplanation('');
    setExerciseImages([]);
  };

  const resetHeadingForm = () => {
    setSelectedSubjectId('');
    setHeadingTitle('');
    setHeadingContent('');
  };

  const handleCreateSubject = () => {
    if (!subjectName.trim()) return;

    playClick();

    const newSubject: Subject = {
      id: `subject-${Date.now()}`,
      name: subjectName.trim(),
      description: subjectDescription.trim(),
      icon: subjectIcon,
      color: subjectColor,
      chapters: [],
      bookHeadings: [],
      definitions: [],
      isCustom: true
    };

    dispatch({ type: 'ADD_CUSTOM_SUBJECT', payload: newSubject });
    resetSubjectForm();
  };

  const handleCreateChapter = () => {
    if (!selectedSubjectId || !chapterTitle.trim()) return;

    playClick();

    const subject = state.customSubjects.find(s => s.id === selectedSubjectId);
    if (!subject) return;

    const newChapter: Chapter = {
      id: `chapter-${Date.now()}`,
      title: chapterTitle.trim(),
      content: chapterContent.trim(),
      mainHeadings: mainHeadings,
      images: chapterImages,
      exercises: [],
      bookHeadingId: selectedBookHeadingId || undefined,
      order: subject.chapters.length,
      isCustom: true
    };

    dispatch({ 
      type: 'ADD_CUSTOM_CHAPTER', 
      payload: { subjectId: selectedSubjectId, chapter: newChapter }
    });
    resetChapterForm();
  };

  const handleCreateExercise = () => {
    if (!selectedSubjectId || !selectedChapterId || !exerciseQuestion.trim()) return;

    playClick();

    const newExercise: Exercise = {
      id: `exercise-${Date.now()}`,
      question: exerciseQuestion.trim(),
      type: exerciseType,
      options: exerciseType === 'multiple-choice' ? exerciseOptions.filter(opt => opt.trim()) : undefined,
      correctAnswer: exerciseCorrectAnswer.trim(),
      explanation: exerciseExplanation.trim(),
      images: exerciseImages,
      isCustom: true
    };

    dispatch({ 
      type: 'ADD_CUSTOM_EXERCISE', 
      payload: { 
        subjectId: selectedSubjectId, 
        chapterId: selectedChapterId, 
        exercise: newExercise 
      }
    });
    resetExerciseForm();
  };

  const handleCreateBookHeading = () => {
    if (!selectedSubjectId || !headingTitle.trim()) return;

    playClick();

    const subject = state.customSubjects.find(s => s.id === selectedSubjectId);
    if (!subject) return;

    const newHeading: BookHeading = {
      id: `heading-${Date.now()}`,
      title: headingTitle.trim(),
      content: headingContent.trim(),
      order: (subject.bookHeadings || []).length,
      chapterIds: []
    };

    dispatch({ 
      type: 'ADD_BOOK_HEADING', 
      payload: { subjectId: selectedSubjectId, heading: newHeading }
    });
    resetHeadingForm();
  };

  const addChapterImage = () => {
    const newImage: ChapterImage = {
      id: `img-${Date.now()}`,
      url: '',
      description: '',
      alt: '',
      width: undefined,
      height: undefined,
      position: 'center'
    };
    setChapterImages([...chapterImages, newImage]);
  };

  const updateChapterImage = (index: number, field: keyof ChapterImage, value: any) => {
    const updatedImages = [...chapterImages];
    updatedImages[index] = { ...updatedImages[index], [field]: value };
    setChapterImages(updatedImages);
  };

  const removeChapterImage = (index: number) => {
    setChapterImages(chapterImages.filter((_, i) => i !== index));
  };

  const addExerciseImage = () => {
    const newImage: ExerciseImage = {
      id: `img-${Date.now()}`,
      url: '',
      description: '',
      alt: '',
      width: undefined,
      height: undefined,
      position: 'center'
    };
    setExerciseImages([...exerciseImages, newImage]);
  };

  const updateExerciseImage = (index: number, field: keyof ExerciseImage, value: any) => {
    const updatedImages = [...exerciseImages];
    updatedImages[index] = { ...updatedImages[index], [field]: value };
    setExerciseImages(updatedImages);
  };

  const removeExerciseImage = (index: number) => {
    setExerciseImages(exerciseImages.filter((_, i) => i !== index));
  };

  const addMainHeading = () => {
    const newHeading: MainHeading = {
      id: `main-${Date.now()}`,
      title: '',
      content: '',
      subHeadings: [],
      images: [],
      order: mainHeadings.length
    };
    setMainHeadings([...mainHeadings, newHeading]);
  };

  const updateMainHeading = (index: number, field: keyof MainHeading, value: any) => {
    const updatedHeadings = [...mainHeadings];
    updatedHeadings[index] = { ...updatedHeadings[index], [field]: value };
    setMainHeadings(updatedHeadings);
  };

  const removeMainHeading = (index: number) => {
    setMainHeadings(mainHeadings.filter((_, i) => i !== index));
  };

  const addSubHeading = (mainHeadingIndex: number) => {
    const newSubHeading: SubHeading = {
      id: `sub-${Date.now()}`,
      title: '',
      level: 1,
      content: '',
      images: [],
      order: mainHeadings[mainHeadingIndex].subHeadings.length
    };
    
    const updatedHeadings = [...mainHeadings];
    updatedHeadings[mainHeadingIndex].subHeadings.push(newSubHeading);
    setMainHeadings(updatedHeadings);
  };

  const updateSubHeading = (mainHeadingIndex: number, subHeadingIndex: number, field: keyof SubHeading, value: any) => {
    const updatedHeadings = [...mainHeadings];
    updatedHeadings[mainHeadingIndex].subHeadings[subHeadingIndex] = {
      ...updatedHeadings[mainHeadingIndex].subHeadings[subHeadingIndex],
      [field]: value
    };
    setMainHeadings(updatedHeadings);
  };

  const removeSubHeading = (mainHeadingIndex: number, subHeadingIndex: number) => {
    const updatedHeadings = [...mainHeadings];
    updatedHeadings[mainHeadingIndex].subHeadings = updatedHeadings[mainHeadingIndex].subHeadings.filter((_, i) => i !== subHeadingIndex);
    setMainHeadings(updatedHeadings);
  };

  const addMainHeadingImage = (mainHeadingIndex: number) => {
    const newImage: ChapterImage = {
      id: `img-${Date.now()}`,
      url: '',
      description: '',
      alt: '',
      width: undefined,
      height: undefined,
      position: 'center'
    };
    
    const updatedHeadings = [...mainHeadings];
    updatedHeadings[mainHeadingIndex].images.push(newImage);
    setMainHeadings(updatedHeadings);
  };

  const updateMainHeadingImage = (mainHeadingIndex: number, imageIndex: number, field: keyof ChapterImage, value: any) => {
    const updatedHeadings = [...mainHeadings];
    updatedHeadings[mainHeadingIndex].images[imageIndex] = {
      ...updatedHeadings[mainHeadingIndex].images[imageIndex],
      [field]: value
    };
    setMainHeadings(updatedHeadings);
  };

  const removeMainHeadingImage = (mainHeadingIndex: number, imageIndex: number) => {
    const updatedHeadings = [...mainHeadings];
    updatedHeadings[mainHeadingIndex].images = updatedHeadings[mainHeadingIndex].images.filter((_, i) => i !== imageIndex);
    setMainHeadings(updatedHeadings);
  };

  const addSubHeadingImage = (mainHeadingIndex: number, subHeadingIndex: number) => {
    const newImage: ChapterImage = {
      id: `img-${Date.now()}`,
      url: '',
      description: '',
      alt: '',
      width: undefined,
      height: undefined,
      position: 'center'
    };
    
    const updatedHeadings = [...mainHeadings];
    updatedHeadings[mainHeadingIndex].subHeadings[subHeadingIndex].images.push(newImage);
    setMainHeadings(updatedHeadings);
  };

  const updateSubHeadingImage = (mainHeadingIndex: number, subHeadingIndex: number, imageIndex: number, field: keyof ChapterImage, value: any) => {
    const updatedHeadings = [...mainHeadings];
    updatedHeadings[mainHeadingIndex].subHeadings[subHeadingIndex].images[imageIndex] = {
      ...updatedHeadings[mainHeadingIndex].subHeadings[subHeadingIndex].images[imageIndex],
      [field]: value
    };
    setMainHeadings(updatedHeadings);
  };

  const removeSubHeadingImage = (mainHeadingIndex: number, subHeadingIndex: number, imageIndex: number) => {
    const updatedHeadings = [...mainHeadings];
    updatedHeadings[mainHeadingIndex].subHeadings[subHeadingIndex].images = 
      updatedHeadings[mainHeadingIndex].subHeadings[subHeadingIndex].images.filter((_, i) => i !== imageIndex);
    setMainHeadings(updatedHeadings);
  };

  const addExerciseOption = () => {
    setExerciseOptions([...exerciseOptions, '']);
  };

  const updateExerciseOption = (index: number, value: string) => {
    const updatedOptions = [...exerciseOptions];
    updatedOptions[index] = value;
    setExerciseOptions(updatedOptions);
  };

  const removeExerciseOption = (index: number) => {
    if (exerciseOptions.length > 2) {
      setExerciseOptions(exerciseOptions.filter((_, i) => i !== index));
    }
  };

  const getSubjectChapters = (subjectId: string) => {
    const subject = state.customSubjects.find(s => s.id === subjectId);
    return subject?.chapters || [];
  };

  const getSubjectBookHeadings = (subjectId: string) => {
    const subject = state.customSubjects.find(s => s.id === subjectId);
    return subject?.bookHeadings || [];
  };

  const iconOptions = [
    'BookOpen', 'Calculator', 'Atom', 'Globe', 'Microscope', 'Music', 'Palette', 'Camera'
  ];

  const colorOptions = [
    { name: t('blue'), value: '#3B82F6' },
    { name: t('green'), value: '#10B981' },
    { name: t('purple'), value: '#8B5CF6' },
    { name: t('pink'), value: '#EC4899' },
    { name: t('orange'), value: '#F59E0B' },
    { name: t('red'), value: '#EF4444' },
  ];

  const renderImageForm = (
    images: (ChapterImage | ExerciseImage)[], 
    onAdd: () => void, 
    onUpdate: (index: number, field: string, value: any) => void, 
    onRemove: (index: number) => void,
    title: string
  ) => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className={`font-semibold ${
          state.settings.darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          {title}
        </h4>
        <button
          onClick={onAdd}
          onMouseEnter={playHover}
          className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
            state.settings.darkMode 
              ? 'bg-blue-600 hover:bg-blue-500 text-white' 
              : 'bg-blue-500 hover:bg-blue-400 text-white'
          }`}
        >
          <Plus className="w-4 h-4" />
          <span>{t('addImage')}</span>
        </button>
      </div>

      {images.map((image, index) => (
        <div key={image.id} className={`p-4 rounded-xl border ${
          state.settings.darkMode ? 'border-gray-600 bg-gray-700/50' : 'border-gray-300 bg-gray-50'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                state.settings.darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {t('imageUrl')}
              </label>
              <input
                type="url"
                value={image.url}
                onChange={(e) => onUpdate(index, 'url', e.target.value)}
                placeholder="https://example.com/image.jpg"
                className={`w-full p-3 rounded-xl border-2 transition-all duration-300 ${
                  state.settings.darkMode
                    ? 'border-gray-600 bg-gray-700 text-white focus:border-blue-500'
                    : 'border-gray-300 bg-white text-gray-900 focus:border-blue-500'
                } focus:outline-none`}
              />
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${
                state.settings.darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {t('imageAlt')}
              </label>
              <input
                type="text"
                value={image.alt}
                onChange={(e) => onUpdate(index, 'alt', e.target.value)}
                placeholder="Pildi kirjeldus ligipääsetavuse jaoks"
                className={`w-full p-3 rounded-xl border-2 transition-all duration-300 ${
                  state.settings.darkMode
                    ? 'border-gray-600 bg-gray-700 text-white focus:border-blue-500'
                    : 'border-gray-300 bg-white text-gray-900 focus:border-blue-500'
                } focus:outline-none`}
              />
            </div>

            <div className="md:col-span-2">
              <label className={`block text-sm font-medium mb-2 ${
                state.settings.darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {t('imageDescription')}
              </label>
              <textarea
                value={image.description || ''}
                onChange={(e) => onUpdate(index, 'description', e.target.value)}
                placeholder="Detailne pildi kirjeldus"
                rows={3}
                className={`w-full p-3 rounded-xl border-2 transition-all duration-300 ${
                  state.settings.darkMode
                    ? 'border-gray-600 bg-gray-700 text-white focus:border-blue-500'
                    : 'border-gray-300 bg-white text-gray-900 focus:border-blue-500'
                } focus:outline-none resize-none`}
              />
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${
                state.settings.darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {t('imagePosition')}
              </label>
              <select
                value={image.position || 'center'}
                onChange={(e) => onUpdate(index, 'position', e.target.value)}
                className={`w-full p-3 rounded-xl border-2 transition-all duration-300 ${
                  state.settings.darkMode
                    ? 'border-gray-600 bg-gray-700 text-white focus:border-blue-500'
                    : 'border-gray-300 bg-white text-gray-900 focus:border-blue-500'
                } focus:outline-none`}
              >
                <option value="left">{t('positionLeft')}</option>
                <option value="center">{t('positionCenter')}</option>
                <option value="right">{t('positionRight')}</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  state.settings.darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {t('imageWidth')}
                </label>
                <input
                  type="number"
                  value={image.width ?? ''}
                  onChange={(e) => onUpdate(index, 'width', e.target.value ? parseInt(e.target.value) : undefined)}
                  placeholder="400"
                  className={`w-full p-3 rounded-xl border-2 transition-all duration-300 ${
                    state.settings.darkMode
                      ? 'border-gray-600 bg-gray-700 text-white focus:border-blue-500'
                      : 'border-gray-300 bg-white text-gray-900 focus:border-blue-500'
                  } focus:outline-none`}
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  state.settings.darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {t('imageHeight')}
                </label>
                <input
                  type="number"
                  value={image.height ?? ''}
                  onChange={(e) => onUpdate(index, 'height', e.target.value ? parseInt(e.target.value) : undefined)}
                  placeholder="300"
                  className={`w-full p-3 rounded-xl border-2 transition-all duration-300 ${
                    state.settings.darkMode
                      ? 'border-gray-600 bg-gray-700 text-white focus:border-blue-500'
                      : 'border-gray-300 bg-white text-gray-900 focus:border-blue-500'
                  } focus:outline-none`}
                />
              </div>
            </div>
          </div>

          <div className="mt-4 flex justify-end">
            <button
              onClick={() => onRemove(index)}
              onMouseEnter={playHover}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                state.settings.darkMode 
                  ? 'bg-red-600 hover:bg-red-500 text-white' 
                  : 'bg-red-500 hover:bg-red-400 text-white'
              }`}
            >
              <Trash2 className="w-4 h-4" />
              <span>{t('removeImage')}</span>
            </button>
          </div>

          {/* Image Preview */}
          {image.url && (
            <div className="mt-4">
              <img
                src={image.url}
                alt={image.alt || image.description}
                className="max-w-full h-auto rounded-lg"
                style={{ 
                  width: image.width ?? 'auto',
                  height: image.height ?? 'auto',
                  maxWidth: '300px',
                  maxHeight: '200px'
                }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              {image.description && (
                <p className={`text-sm mt-2 ${
                  state.settings.darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {image.description}
                </p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );

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

        {/* Tabs */}
        <div className="flex space-x-2 mb-8">
          {[
            { key: 'subject', label: t('addSubject'), icon: BookOpen },
            { key: 'chapter', label: t('addChapter'), icon: FileText },
            { key: 'exercise', label: t('addExercise'), icon: HelpCircle },
            { key: 'heading', label: t('addBookHeading'), icon: Book }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                playClick();
                setActiveTab(tab.key as any);
              }}
              onMouseEnter={playHover}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                activeTab === tab.key
                  ? state.settings.darkMode
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-500 text-white'
                  : state.settings.darkMode
                    ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                    : 'bg-white hover:bg-gray-50 text-gray-600 shadow-lg'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === 'subject' && (
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
                    placeholder="Nt. Matemaatika"
                    className={`w-full p-3 rounded-xl border-2 transition-all duration-300 ${
                      state.settings.darkMode
                        ? 'border-gray-600 bg-gray-700 text-white focus:border-blue-500'
                        : 'border-gray-300 bg-white text-gray-900 focus:border-blue-500'
                    } focus:outline-none`}
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
                    placeholder="Lühike kirjeldus aine kohta"
                    rows={3}
                    className={`w-full p-3 rounded-xl border-2 transition-all duration-300 ${
                      state.settings.darkMode
                        ? 'border-gray-600 bg-gray-700 text-white focus:border-blue-500'
                        : 'border-gray-300 bg-white text-gray-900 focus:border-blue-500'
                    } focus:outline-none resize-none`}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      state.settings.darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Ikoon
                    </label>
                    <select
                      value={subjectIcon}
                      onChange={(e) => setSubjectIcon(e.target.value)}
                      className={`w-full p-3 rounded-xl border-2 transition-all duration-300 ${
                        state.settings.darkMode
                          ? 'border-gray-600 bg-gray-700 text-white focus:border-blue-500'
                          : 'border-gray-300 bg-white text-gray-900 focus:border-blue-500'
                      } focus:outline-none`}
                    >
                      {iconOptions.map((icon) => (
                        <option key={icon} value={icon}>{icon}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      state.settings.darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Värv
                    </label>
                    <div className="flex space-x-2">
                      {colorOptions.map((color) => (
                        <button
                          key={color.value}
                          onClick={() => setSubjectColor(color.value)}
                          onMouseEnter={playHover}
                          className={`w-12 h-12 rounded-full transition-all duration-300 transform hover:scale-110 ${
                            subjectColor === color.value 
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

                <button
                  onClick={handleCreateSubject}
                  disabled={!subjectName.trim()}
                  onMouseEnter={playHover}
                  className={`w-full flex items-center justify-center space-x-2 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                    subjectName.trim()
                      ? state.settings.darkMode
                        ? 'bg-green-600 hover:bg-green-500 text-white'
                        : 'bg-green-500 hover:bg-green-400 text-white'
                      : state.settings.darkMode
                        ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  } text-lg font-semibold shadow-lg`}
                >
                  <Save className="w-6 h-6" />
                  <span>{t('save')}</span>
                </button>
              </div>
            </div>
          )}

          {activeTab === 'chapter' && (
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
                    value={selectedSubjectId}
                    onChange={(e) => setSelectedSubjectId(e.target.value)}
                    className={`w-full p-3 rounded-xl border-2 transition-all duration-300 ${
                      state.settings.darkMode
                        ? 'border-gray-600 bg-gray-700 text-white focus:border-blue-500'
                        : 'border-gray-300 bg-white text-gray-900 focus:border-blue-500'
                    } focus:outline-none`}
                  >
                    <option value="">{t('selectSubject')}</option>
                    {state.customSubjects.map((subject) => (
                      <option key={subject.id} value={subject.id}>{subject.name}</option>
                    ))}
                  </select>
                </div>

                {selectedSubjectId && (
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      state.settings.darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {t('assignToHeading')}
                    </label>
                    <select
                      value={selectedBookHeadingId}
                      onChange={(e) => setSelectedBookHeadingId(e.target.value)}
                      className={`w-full p-3 rounded-xl border-2 transition-all duration-300 ${
                        state.settings.darkMode
                          ? 'border-gray-600 bg-gray-700 text-white focus:border-blue-500'
                          : 'border-gray-300 bg-white text-gray-900 focus:border-blue-500'
                      } focus:outline-none`}
                    >
                      <option value="">{t('noHeading')}</option>
                      {getSubjectBookHeadings(selectedSubjectId).map((heading) => (
                        <option key={heading.id} value={heading.id}>{heading.title}</option>
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
                    placeholder="Nt. Algebralised avaldised"
                    className={`w-full p-3 rounded-xl border-2 transition-all duration-300 ${
                      state.settings.darkMode
                        ? 'border-gray-600 bg-gray-700 text-white focus:border-blue-500'
                        : 'border-gray-300 bg-white text-gray-900 focus:border-blue-500'
                    } focus:outline-none`}
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
                    placeholder="Peatüki põhisisu..."
                    rows={6}
                    className={`w-full p-3 rounded-xl border-2 transition-all duration-300 ${
                      state.settings.darkMode
                        ? 'border-gray-600 bg-gray-700 text-white focus:border-blue-500'
                        : 'border-gray-300 bg-white text-gray-900 focus:border-blue-500'
                    } focus:outline-none resize-none`}
                  />
                </div>

                {/* Main Headings */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-lg font-semibold ${
                      state.settings.darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {t('mainHeadings')}
                    </h3>
                    <button
                      onClick={addMainHeading}
                      onMouseEnter={playHover}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                        state.settings.darkMode 
                          ? 'bg-purple-600 hover:bg-purple-500 text-white' 
                          : 'bg-purple-500 hover:bg-purple-400 text-white'
                      }`}
                    >
                      <Plus className="w-4 h-4" />
                      <span>{t('addMainHeading')}</span>
                    </button>
                  </div>

                  {mainHeadings.map((heading, headingIndex) => (
                    <div key={heading.id} className={`p-4 rounded-xl border ${
                      state.settings.darkMode ? 'border-gray-600 bg-gray-700/30' : 'border-gray-300 bg-gray-50/50'
                    }`}>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className={`font-medium ${
                            state.settings.darkMode ? 'text-white' : 'text-gray-900'
                          }`}>
                            Peapealkiri {headingIndex + 1}
                          </h4>
                          <button
                            onClick={() => removeMainHeading(headingIndex)}
                            onMouseEnter={playHover}
                            className={`p-2 rounded-lg transition-all duration-300 ${
                              state.settings.darkMode 
                                ? 'bg-red-600 hover:bg-red-500 text-white' 
                                : 'bg-red-500 hover:bg-red-400 text-white'
                            }`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        <input
                          type="text"
                          value={heading.title}
                          onChange={(e) => updateMainHeading(headingIndex, 'title', e.target.value)}
                          placeholder={t('mainHeadingTitle')}
                          className={`w-full p-3 rounded-xl border-2 transition-all duration-300 ${
                            state.settings.darkMode
                              ? 'border-gray-600 bg-gray-700 text-white focus:border-blue-500'
                              : 'border-gray-300 bg-white text-gray-900 focus:border-blue-500'
                          } focus:outline-none`}
                        />

                        <textarea
                          value={heading.content}
                          onChange={(e) => updateMainHeading(headingIndex, 'content', e.target.value)}
                          placeholder={t('mainHeadingContent')}
                          rows={4}
                          className={`w-full p-3 rounded-xl border-2 transition-all duration-300 ${
                            state.settings.darkMode
                              ? 'border-gray-600 bg-gray-700 text-white focus:border-blue-500'
                              : 'border-gray-300 bg-white text-gray-900 focus:border-blue-500'
                          } focus:outline-none resize-none`}
                        />

                        {/* Main Heading Images */}
                        {renderImageForm(
                          heading.images,
                          () => addMainHeadingImage(headingIndex),
                          (imageIndex, field, value) => updateMainHeadingImage(headingIndex, imageIndex, field, value),
                          (imageIndex) => removeMainHeadingImage(headingIndex, imageIndex),
                          "Peapealkirja pildid"
                        )}

                        {/* Subheadings */}
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <h5 className={`font-medium ${
                              state.settings.darkMode ? 'text-gray-300' : 'text-gray-700'
                            }`}>
                              {t('subHeadings')}
                            </h5>
                            <button
                              onClick={() => addSubHeading(headingIndex)}
                              onMouseEnter={playHover}
                              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                                state.settings.darkMode 
                                  ? 'bg-green-600 hover:bg-green-500 text-white' 
                                  : 'bg-green-500 hover:bg-green-400 text-white'
                              }`}
                            >
                              <Plus className="w-4 h-4" />
                              <span>{t('addSubHeading')}</span>
                            </button>
                          </div>

                          {heading.subHeadings.map((subHeading, subIndex) => (
                            <div key={subHeading.id} className={`p-3 rounded-lg border ${
                              state.settings.darkMode ? 'border-gray-500 bg-gray-600/30' : 'border-gray-200 bg-white/50'
                            }`}>
                              <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                  <span className={`text-sm font-medium ${
                                    state.settings.darkMode ? 'text-gray-300' : 'text-gray-700'
                                  }`}>
                                    Alapealkirja {subIndex + 1}
                                  </span>
                                  <button
                                    onClick={() => removeSubHeading(headingIndex, subIndex)}
                                    onMouseEnter={playHover}
                                    className={`p-1 rounded transition-all duration-300 ${
                                      state.settings.darkMode 
                                        ? 'bg-red-600 hover:bg-red-500 text-white' 
                                        : 'bg-red-500 hover:bg-red-400 text-white'
                                    }`}
                                  >
                                    <Trash2 className="w-3 h-3" />
                                  </button>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                  <input
                                    type="text"
                                    value={subHeading.title}
                                    onChange={(e) => updateSubHeading(headingIndex, subIndex, 'title', e.target.value)}
                                    placeholder={t('subHeadingTitle')}
                                    className={`md:col-span-2 p-2 rounded-lg border transition-all duration-300 ${
                                      state.settings.darkMode
                                        ? 'border-gray-500 bg-gray-600 text-white focus:border-blue-500'
                                        : 'border-gray-200 bg-white text-gray-900 focus:border-blue-500'
                                    } focus:outline-none`}
                                  />

                                  <select
                                    value={subHeading.level}
                                    onChange={(e) => updateSubHeading(headingIndex, subIndex, 'level', parseInt(e.target.value))}
                                    className={`p-2 rounded-lg border transition-all duration-300 ${
                                      state.settings.darkMode
                                        ? 'border-gray-500 bg-gray-600 text-white focus:border-blue-500'
                                        : 'border-gray-200 bg-white text-gray-900 focus:border-blue-500'
                                    } focus:outline-none`}
                                  >
                                    <option value={1}>{t('level1')}</option>
                                    <option value={2}>{t('level2')}</option>
                                    <option value={3}>{t('level3')}</option>
                                  </select>
                                </div>

                                <textarea
                                  value={subHeading.content}
                                  onChange={(e) => updateSubHeading(headingIndex, subIndex, 'content', e.target.value)}
                                  placeholder={t('subHeadingContent')}
                                  rows={3}
                                  className={`w-full p-2 rounded-lg border transition-all duration-300 ${
                                    state.settings.darkMode
                                      ? 'border-gray-500 bg-gray-600 text-white focus:border-blue-500'
                                      : 'border-gray-200 bg-white text-gray-900 focus:border-blue-500'
                                  } focus:outline-none resize-none`}
                                />

                                {/* Subheading Images */}
                                {renderImageForm(
                                  subHeading.images,
                                  () => addSubHeadingImage(headingIndex, subIndex),
                                  (imageIndex, field, value) => updateSubHeadingImage(headingIndex, subIndex, imageIndex, field, value),
                                  (imageIndex) => removeSubHeadingImage(headingIndex, subIndex, imageIndex),
                                  "Alapealkirja pildid"
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chapter Images */}
                {renderImageForm(
                  chapterImages,
                  addChapterImage,
                  updateChapterImage,
                  removeChapterImage,
                  t('chapterImages')
                )}

                <button
                  onClick={handleCreateChapter}
                  disabled={!selectedSubjectId || !chapterTitle.trim()}
                  onMouseEnter={playHover}
                  className={`w-full flex items-center justify-center space-x-2 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                    selectedSubjectId && chapterTitle.trim()
                      ? state.settings.darkMode
                        ? 'bg-green-600 hover:bg-green-500 text-white'
                        : 'bg-green-500 hover:bg-green-400 text-white'
                      : state.settings.darkMode
                        ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  } text-lg font-semibold shadow-lg`}
                >
                  <Save className="w-6 h-6" />
                  <span>{t('save')}</span>
                </button>
              </div>
            </div>
          )}

          {activeTab === 'exercise' && (
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      state.settings.darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {t('selectSubject')}
                    </label>
                    <select
                      value={selectedSubjectId}
                      onChange={(e) => {
                        setSelectedSubjectId(e.target.value);
                        setSelectedChapterId('');
                      }}
                      className={`w-full p-3 rounded-xl border-2 transition-all duration-300 ${
                        state.settings.darkMode
                          ? 'border-gray-600 bg-gray-700 text-white focus:border-blue-500'
                          : 'border-gray-300 bg-white text-gray-900 focus:border-blue-500'
                      } focus:outline-none`}
                    >
                      <option value="">{t('selectSubject')}</option>
                      {state.customSubjects.map((subject) => (
                        <option key={subject.id} value={subject.id}>{subject.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      state.settings.darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {t('selectChapter')}
                    </label>
                    <select
                      value={selectedChapterId}
                      onChange={(e) => setSelectedChapterId(e.target.value)}
                      disabled={!selectedSubjectId}
                      className={`w-full p-3 rounded-xl border-2 transition-all duration-300 ${
                        state.settings.darkMode
                          ? 'border-gray-600 bg-gray-700 text-white focus:border-blue-500'
                          : 'border-gray-300 bg-white text-gray-900 focus:border-blue-500'
                      } focus:outline-none disabled:opacity-50`}
                    >
                      <option value="">{t('selectChapter')}</option>
                      {selectedSubjectId && getSubjectChapters(selectedSubjectId).map((chapter) => (
                        <option key={chapter.id} value={chapter.id}>{chapter.title}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    state.settings.darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {t('exerciseQuestion')}
                  </label>
                  <textarea
                    value={exerciseQuestion}
                    onChange={(e) => setExerciseQuestion(e.target.value)}
                    placeholder="Kirjuta harjutuse küsimus..."
                    rows={3}
                    className={`w-full p-3 rounded-xl border-2 transition-all duration-300 ${
                      state.settings.darkMode
                        ? 'border-gray-600 bg-gray-700 text-white focus:border-blue-500'
                        : 'border-gray-300 bg-white text-gray-900 focus:border-blue-500'
                    } focus:outline-none resize-none`}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    state.settings.darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {t('exerciseType')}
                  </label>
                  <select
                    value={exerciseType}
                    onChange={(e) => setExerciseType(e.target.value as any)}
                    className={`w-full p-3 rounded-xl border-2 transition-all duration-300 ${
                      state.settings.darkMode
                        ? 'border-gray-600 bg-gray-700 text-white focus:border-blue-500'
                        : 'border-gray-300 bg-white text-gray-900 focus:border-blue-500'
                    } focus:outline-none`}
                  >
                    <option value="multiple-choice">{t('multipleChoice')}</option>
                    <option value="fill-blank">{t('fillBlank')}</option>
                  </select>
                </div>

                {exerciseType === 'multiple-choice' && (
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <label className={`block text-sm font-medium ${
                        state.settings.darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {t('options')}
                      </label>
                      <button
                        onClick={addExerciseOption}
                        onMouseEnter={playHover}
                        className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                          state.settings.darkMode 
                            ? 'bg-blue-600 hover:bg-blue-500 text-white' 
                            : 'bg-blue-500 hover:bg-blue-400 text-white'
                        }`}
                      >
                        <Plus className="w-4 h-4" />
                        <span>{t('addOption')}</span>
                      </button>
                    </div>
                    <div className="space-y-3">
                      {exerciseOptions.map((option, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <input
                            type="text"
                            value={option}
                            onChange={(e) => updateExerciseOption(index, e.target.value)}
                            placeholder={`Valik ${index + 1}`}
                            className={`flex-1 p-3 rounded-xl border-2 transition-all duration-300 ${
                              state.settings.darkMode
                                ? 'border-gray-600 bg-gray-700 text-white focus:border-blue-500'
                                : 'border-gray-300 bg-white text-gray-900 focus:border-blue-500'
                            } focus:outline-none`}
                          />
                          {exerciseOptions.length > 2 && (
                            <button
                              onClick={() => removeExerciseOption(index)}
                              onMouseEnter={playHover}
                              className={`p-3 rounded-xl transition-all duration-300 ${
                                state.settings.darkMode 
                                  ? 'bg-red-600 hover:bg-red-500 text-white' 
                                  : 'bg-red-500 hover:bg-red-400 text-white'
                              }`}
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          )}
                        </div>
                      ))}
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
                      className={`w-full p-3 rounded-xl border-2 transition-all duration-300 ${
                        state.settings.darkMode
                          ? 'border-gray-600 bg-gray-700 text-white focus:border-blue-500'
                          : 'border-gray-300 bg-white text-gray-900 focus:border-blue-500'
                      } focus:outline-none`}
                    >
                      <option value="">Vali õige vastus</option>
                      {exerciseOptions.filter(opt => opt.trim()).map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type="text"
                      value={exerciseCorrectAnswer}
                      onChange={(e) => setExerciseCorrectAnswer(e.target.value)}
                      placeholder="Õige vastus"
                      className={`w-full p-3 rounded-xl border-2 transition-all duration-300 ${
                        state.settings.darkMode
                          ? 'border-gray-600 bg-gray-700 text-white focus:border-blue-500'
                          : 'border-gray-300 bg-white text-gray-900 focus:border-blue-500'
                      } focus:outline-none`}
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
                    placeholder="Selgita, miks see vastus on õige..."
                    rows={3}
                    className={`w-full p-3 rounded-xl border-2 transition-all duration-300 ${
                      state.settings.darkMode
                        ? 'border-gray-600 bg-gray-700 text-white focus:border-blue-500'
                        : 'border-gray-300 bg-white text-gray-900 focus:border-blue-500'
                    } focus:outline-none resize-none`}
                  />
                </div>

                {/* Exercise Images */}
                {renderImageForm(
                  exerciseImages,
                  addExerciseImage,
                  updateExerciseImage,
                  removeExerciseImage,
                  t('exerciseImages')
                )}

                <button
                  onClick={handleCreateExercise}
                  disabled={!selectedSubjectId || !selectedChapterId || !exerciseQuestion.trim() || !exerciseCorrectAnswer.trim()}
                  onMouseEnter={playHover}
                  className={`w-full flex items-center justify-center space-x-2 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                    selectedSubjectId && selectedChapterId && exerciseQuestion.trim() && exerciseCorrectAnswer.trim()
                      ? state.settings.darkMode
                        ? 'bg-green-600 hover:bg-green-500 text-white'
                        : 'bg-green-500 hover:bg-green-400 text-white'
                      : state.settings.darkMode
                        ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  } text-lg font-semibold shadow-lg`}
                >
                  <Save className="w-6 h-6" />
                  <span>{t('save')}</span>
                </button>
              </div>
            </div>
          )}

          {activeTab === 'heading' && (
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
                    value={selectedSubjectId}
                    onChange={(e) => setSelectedSubjectId(e.target.value)}
                    className={`w-full p-3 rounded-xl border-2 transition-all duration-300 ${
                      state.settings.darkMode
                        ? 'border-gray-600 bg-gray-700 text-white focus:border-blue-500'
                        : 'border-gray-300 bg-white text-gray-900 focus:border-blue-500'
                    } focus:outline-none`}
                  >
                    <option value="">{t('selectSubject')}</option>
                    {state.customSubjects.map((subject) => (
                      <option key={subject.id} value={subject.id}>{subject.name}</option>
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
                    value={headingTitle}
                    onChange={(e) => setHeadingTitle(e.target.value)}
                    placeholder="Nt. 1. peatükk - Sissejuhatus"
                    className={`w-full p-3 rounded-xl border-2 transition-all duration-300 ${
                      state.settings.darkMode
                        ? 'border-gray-600 bg-gray-700 text-white focus:border-blue-500'
                        : 'border-gray-300 bg-white text-gray-900 focus:border-blue-500'
                    } focus:outline-none`}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    state.settings.darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {t('bookHeadingContent')}
                  </label>
                  <textarea
                    value={headingContent}
                    onChange={(e) => setHeadingContent(e.target.value)}
                    placeholder="Raamatu pealkirja kirjeldus või sissejuhatus..."
                    rows={4}
                    className={`w-full p-3 rounded-xl border-2 transition-all duration-300 ${
                      state.settings.darkMode
                        ? 'border-gray-600 bg-gray-700 text-white focus:border-blue-500'
                        : 'border-gray-300 bg-white text-gray-900 focus:border-blue-500'
                    } focus:outline-none resize-none`}
                  />
                </div>

                <button
                  onClick={handleCreateBookHeading}
                  disabled={!selectedSubjectId || !headingTitle.trim()}
                  onMouseEnter={playHover}
                  className={`w-full flex items-center justify-center space-x-2 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                    selectedSubjectId && headingTitle.trim()
                      ? state.settings.darkMode
                        ? 'bg-green-600 hover:bg-green-500 text-white'
                        : 'bg-green-500 hover:bg-green-400 text-white'
                      : state.settings.darkMode
                        ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
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