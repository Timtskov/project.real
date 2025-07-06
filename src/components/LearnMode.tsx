import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle, List, ChevronRight, Highlighter, Plus, Edit } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { useAudio } from '../hooks/useAudio';
import { useTranslation } from '../hooks/useTranslation';
import { DefinitionModal } from './DefinitionModal';
import { ChapterEditor } from './ChapterEditor';

export function LearnMode() {
  const { state, dispatch } = useApp();
  const { playClick, playHover } = useAudio();
  const { t } = useTranslation();
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);
  const [showTableOfContents, setShowTableOfContents] = useState(false);
  const [hoveredDefinition, setHoveredDefinition] = useState<string | null>(null);
  const [editingChapter, setEditingChapter] = useState<string | null>(null);

  const allSubjects = state.customSubjects;
  const currentSubject = allSubjects.find(s => s.id === state.selectedSubject);
  const currentChapter = currentSubject?.chapters.find(c => c.id === selectedChapter);
  const definitions = currentSubject?.definitions?.filter(def => def.chapterId === selectedChapter) || [];

  const handleBack = () => {
    playClick();
    if (selectedChapter) {
      setSelectedChapter(null);
    } else {
      dispatch({ type: 'SET_SUBJECT', payload: null });
    }
  };

  const handleChapterSelect = (chapterId: string) => {
    playClick();
    setSelectedChapter(chapterId);
  };

  const handleEditChapter = () => {
    if (selectedChapter) {
      setEditingChapter(selectedChapter);
    }
  };

  const handleCompleteChapter = () => {
    if (!currentSubject || !selectedChapter) return;
    
    playClick();
    
    const progress = state.progress.find(p => p.subjectId === currentSubject.id) || {
      subjectId: currentSubject.id,
      completedChapters: [],
      exerciseScores: {},
      totalScore: 0
    };

    const newCompletedChapters = progress.completedChapters.includes(selectedChapter)
      ? progress.completedChapters
      : [...progress.completedChapters, selectedChapter];

    const newProgress = {
      ...progress,
      completedChapters: newCompletedChapters,
      totalScore: (newCompletedChapters.length / currentSubject.chapters.length) * 100
    };

    dispatch({ type: 'UPDATE_PROGRESS', payload: newProgress });
    setSelectedChapter(null);
  };

  const handleAddDefinition = () => {
    playClick();
    
    // Clear any previous selection
    dispatch({ type: 'SET_SELECTED_TEXT', payload: null });
    
    // Show the definition modal
    dispatch({ type: 'SET_SHOW_DEFINITION_MODAL', payload: true });
  };

  const handleTextSelection = () => {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed || !selectedChapter || !state.selectedSubject) return;

    const selectedText = selection.toString().trim();
    if (selectedText.length < 2) return;

    const range = selection.getRangeAt(0);
    const container = range.commonAncestorContainer;
    
    // Find the closest element with an ID
    let element = container.nodeType === Node.TEXT_NODE ? container.parentElement : container as Element;
    while (element && !element.id) {
      element = element.parentElement;
    }

    if (!element || !element.id) {
      // If no ID found, use a default element ID
      element = { id: 'main-content' } as Element;
    }

    dispatch({
      type: 'SET_SELECTED_TEXT',
      payload: {
        text: selectedText,
        chapterId: selectedChapter,
        elementId: element.id,
        start: range.startOffset,
        end: range.endOffset
      }
    });

    dispatch({ type: 'SET_SHOW_DEFINITION_MODAL', payload: true });
    
    // Clear selection
    selection.removeAllRanges();
  };

  const applyHighlights = (content: string, elementId: string) => {
    if (!definitions.length) return content;

    let highlightedContent = content;
    const relevantDefinitions = definitions.filter(def => def.position.elementId === elementId);

    // Sort definitions by start position (descending) to avoid offset issues
    relevantDefinitions.sort((a, b) => b.position.start - a.position.start);

    relevantDefinitions.forEach(def => {
      const beforeText = highlightedContent.substring(0, def.position.start);
      const highlightedText = highlightedContent.substring(def.position.start, def.position.end);
      const afterText = highlightedContent.substring(def.position.end);

      const colorClasses = {
        yellow: 'bg-yellow-200 dark:bg-yellow-600/30',
        green: 'bg-green-200 dark:bg-green-600/30',
        blue: 'bg-blue-200 dark:bg-blue-600/30',
        pink: 'bg-pink-200 dark:bg-pink-600/30',
        orange: 'bg-orange-200 dark:bg-orange-600/30'
      };

      highlightedContent = beforeText + 
        `<span 
          class="highlighted-term cursor-help px-1 rounded ${colorClasses[def.highlightColor]} relative" 
          data-definition-id="${def.id}"
          data-definition="${def.definition}"
          style="text-decoration: underline; text-decoration-style: dotted;"
        >${highlightedText}</span>` + 
        afterText;
    });

    return highlightedContent;
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setShowTableOfContents(false);
      playClick();
    }
  };

  const getProgressForSubject = () => {
    if (!currentSubject) return null;
    return state.progress.find(p => p.subjectId === currentSubject.id) || {
      subjectId: currentSubject.id,
      completedChapters: [],
      exerciseScores: {},
      totalScore: 0
    };
  };

  const renderChapterContent = () => {
    if (!currentChapter) return null;

    const content = [];
    
    // Add main content if exists
    if (currentChapter.content) {
      const highlightedContent = applyHighlights(currentChapter.content, 'main-content');
      content.push(
        <div 
          key="main-content"
          id="main-content"
          className={`prose prose-lg max-w-none scroll-mt-24 ${
            state.settings.darkMode ? 'prose-invert' : ''
          } ${
            state.settings.fontSize === 'small' ? 'text-sm' :
            state.settings.fontSize === 'large' ? 'text-xl' : 'text-base'
          }`}
          dangerouslySetInnerHTML={{ __html: highlightedContent }}
          onMouseUp={handleTextSelection}
        />
      );
    }

    // Add main headings with their content and subheadings
    const mainHeadings = currentChapter.mainHeadings || [];
    const sortedMainHeadings = [...mainHeadings].sort((a, b) => a.order - b.order);
    
    sortedMainHeadings.forEach((mainHeading) => {
      content.push(
        <div key={`main-heading-${mainHeading.id}`} className="mt-12">
          <h2 
            id={mainHeading.id}
            className={`text-3xl font-bold mb-6 scroll-mt-24 ${
              state.settings.darkMode ? 'text-white' : 'text-gray-900'
            } ${
              state.settings.fontSize === 'small' ? 'text-2xl' :
              state.settings.fontSize === 'large' ? 'text-4xl' : 'text-3xl'
            }`}
          >
            {mainHeading.title}
          </h2>
          
          {/* Main heading content */}
          {mainHeading.content && (
            <div 
              className={`prose prose-lg max-w-none mb-8 ${
                state.settings.darkMode ? 'prose-invert' : ''
              } ${
                state.settings.fontSize === 'small' ? 'text-sm' :
                state.settings.fontSize === 'large' ? 'text-xl' : 'text-base'
              }`}
              dangerouslySetInnerHTML={{ __html: applyHighlights(mainHeading.content, mainHeading.id) }}
              onMouseUp={handleTextSelection}
            />
          )}

          {/* Main heading images */}
          {mainHeading.images && mainHeading.images.length > 0 && (
            <div className="mb-8 space-y-6">
              {mainHeading.images.map((image) => (
                <div key={image.id} className={`rounded-2xl overflow-hidden ${
                  state.settings.darkMode ? 'bg-gray-700/50' : 'bg-gray-50'
                } ${
                  image.position === 'left' ? 'mr-auto' :
                  image.position === 'right' ? 'ml-auto' : 'mx-auto'
                }`} style={{ 
                  width: image.width ? `${image.width}px` : 'auto',
                  maxWidth: '100%'
                }}>
                  <img
                    src={image.url}
                    alt={image.alt || image.description}
                    className="w-full h-auto object-cover"
                    style={{ 
                      height: image.height ? `${image.height}px` : 'auto'
                    }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  {image.description && (
                    <div className="p-4">
                      <p className={`text-sm ${
                        state.settings.darkMode ? 'text-gray-300' : 'text-gray-600'
                      } ${
                        state.settings.fontSize === 'small' ? 'text-xs' :
                        state.settings.fontSize === 'large' ? 'text-base' : 'text-sm'
                      }`}>
                        {image.description}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Subheadings */}
          {mainHeading.subHeadings && mainHeading.subHeadings.length > 0 && (
            <div className="space-y-8">
              {[...(mainHeading.subHeadings || [])].sort((a, b) => a.order - b.order).map((subHeading) => {
                const HeadingTag = `h${subHeading.level + 2}` as keyof JSX.IntrinsicElements;
                
                return (
                  <div key={subHeading.id} className="ml-4">
                    <HeadingTag 
                      id={subHeading.id}
                      className={`font-bold mb-4 scroll-mt-24 ${
                        state.settings.darkMode ? 'text-white' : 'text-gray-900'
                      } ${
                        subHeading.level === 1 ? 'text-2xl' :
                        subHeading.level === 2 ? 'text-xl' : 'text-lg'
                      } ${
                        state.settings.fontSize === 'small' ? 
                          (subHeading.level === 1 ? 'text-xl' : subHeading.level === 2 ? 'text-lg' : 'text-base') :
                        state.settings.fontSize === 'large' ? 
                          (subHeading.level === 1 ? 'text-3xl' : subHeading.level === 2 ? 'text-2xl' : 'text-xl') :
                          (subHeading.level === 1 ? 'text-2xl' : subHeading.level === 2 ? 'text-xl' : 'text-lg')
                      }`}
                    >
                      {subHeading.title}
                    </HeadingTag>
                    
                    {subHeading.content && (
                      <div 
                        className={`prose prose-lg max-w-none mb-6 ${
                          state.settings.darkMode ? 'prose-invert' : ''
                        } ${
                          state.settings.fontSize === 'small' ? 'text-sm' :
                          state.settings.fontSize === 'large' ? 'text-xl' : 'text-base'
                        }`}
                        dangerouslySetInnerHTML={{ __html: applyHighlights(subHeading.content, subHeading.id) }}
                        onMouseUp={handleTextSelection}
                      />
                    )}

                    {/* Subheading images */}
                    {subHeading.images && subHeading.images.length > 0 && (
                      <div className="mb-6 space-y-4">
                        {subHeading.images.map((image) => (
                          <div key={image.id} className={`rounded-2xl overflow-hidden ${
                            state.settings.darkMode ? 'bg-gray-700/50' : 'bg-gray-50'
                          } ${
                            image.position === 'left' ? 'mr-auto' :
                            image.position === 'right' ? 'ml-auto' : 'mx-auto'
                          }`} style={{ 
                            width: image.width ? `${image.width}px` : 'auto',
                            maxWidth: '100%'
                          }}>
                            <img
                              src={image.url}
                              alt={image.alt || image.description}
                              className="w-full h-auto object-cover"
                              style={{ 
                                height: image.height ? `${image.height}px` : 'auto'
                              }}
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                            {image.description && (
                              <div className="p-4">
                                <p className={`text-sm ${
                                  state.settings.darkMode ? 'text-gray-300' : 'text-gray-600'
                                } ${
                                  state.settings.fontSize === 'small' ? 'text-xs' :
                                  state.settings.fontSize === 'large' ? 'text-base' : 'text-sm'
                                }`}>
                                  {image.description}
                                </p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      );
    });

    // Add chapter images at the end
    if (currentChapter.images && currentChapter.images.length > 0) {
      content.push(
        <div key="chapter-images" className="mt-12 space-y-6">
          <h3 className={`text-xl font-bold ${
            state.settings.darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Pildid
          </h3>
          {currentChapter.images.map((image) => (
            <div key={image.id} className={`rounded-2xl overflow-hidden ${
              state.settings.darkMode ? 'bg-gray-700/50' : 'bg-gray-50'
            } ${
              image.position === 'left' ? 'mr-auto' :
              image.position === 'right' ? 'ml-auto' : 'mx-auto'
            }`} style={{ 
              width: image.width ? `${image.width}px` : 'auto',
              maxWidth: '100%'
            }}>
              <img
                src={image.url}
                alt={image.alt || image.description}
                className="w-full h-auto object-cover"
                style={{ 
                  height: image.height ? `${image.height}px` : 'auto'
                }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              {image.description && (
                <div className="p-4">
                  <p className={`text-sm ${
                    state.settings.darkMode ? 'text-gray-300' : 'text-gray-600'
                  } ${
                    state.settings.fontSize === 'small' ? 'text-xs' :
                    state.settings.fontSize === 'large' ? 'text-base' : 'text-sm'
                  }`}>
                    {image.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      );
    }

    return content;
  };

  const generateTableOfContents = () => {
    if (!currentChapter) return [];

    const tocItems = [];

    // Add main content if exists
    if (currentChapter.content) {
      tocItems.push({
        id: 'main-content',
        title: 'Sissejuhatus',
        level: 0
      });
    }

    // Add main headings and their subheadings
    const mainHeadings = currentChapter.mainHeadings || [];
    const sortedMainHeadings = [...mainHeadings].sort((a, b) => a.order - b.order);
    
    sortedMainHeadings.forEach((mainHeading) => {
      tocItems.push({
        id: mainHeading.id,
        title: mainHeading.title,
        level: 1
      });

      // Add subheadings
      if (mainHeading.subHeadings && mainHeading.subHeadings.length > 0) {
        const subHeadings = mainHeading.subHeadings || [];
        const sortedSubHeadings = [...subHeadings].sort((a, b) => a.order - b.order);
        sortedSubHeadings.forEach((subHeading) => {
          tocItems.push({
            id: subHeading.id,
            title: subHeading.title,
            level: subHeading.level + 1
          });
        });
      }
    });

    return tocItems;
  };

  // Add event listeners for definition tooltips
  useEffect(() => {
    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && target.classList && target.classList.contains('highlighted-term')) {
        const definitionId = target.getAttribute('data-definition-id');
        if (definitionId) {
          setHoveredDefinition(definitionId);
        }
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && target.classList && target.classList.contains('highlighted-term')) {
        setHoveredDefinition(null);
      }
    };

    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  if (!currentSubject) return null;

  const progress = getProgressForSubject();
  const tocItems = generateTableOfContents();

  return (
    <div 
      className={`min-h-screen transition-all duration-500 ${
        state.settings.darkMode 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
          : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
      }`}
    >
      <DefinitionModal />
      
      {/* Chapter Editor */}
      {editingChapter && currentChapter && (
        <ChapterEditor
          chapter={currentChapter}
          subjectId={state.selectedSubject!}
          onClose={() => setEditingChapter(null)}
        />
      )}
      
      {/* Definition Tooltip */}
      {hoveredDefinition && (
        <div className="fixed z-50 pointer-events-none">
          {definitions.map(def => {
            if (def.id !== hoveredDefinition) return null;
            
            return (
              <div
                key={def.id}
                className={`absolute transform -translate-x-1/2 -translate-y-full mb-2 px-3 py-2 rounded-lg shadow-lg max-w-xs ${
                  state.settings.darkMode ? 'bg-gray-800 text-white border border-gray-600' : 'bg-white text-gray-900 border border-gray-200'
                }`}
                style={{
                  left: '50%',
                  top: '0'
                }}
              >
                <p className="text-sm font-medium mb-1">{def.word}</p>
                <p className="text-xs">{def.definition}</p>
              </div>
            );
          })}
        </div>
      )}

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
                {selectedChapter ? t('learningChapter') : t('chooseChapterLearn')}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-2">
            {selectedChapter && (
              <>
                <button
                  onClick={handleEditChapter}
                  onMouseEnter={playHover}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 ${
                    state.settings.darkMode 
                      ? 'bg-orange-600 hover:bg-orange-500 text-white' 
                      : 'bg-orange-500 hover:bg-orange-400 text-white'
                  } shadow-lg hover:shadow-xl`}
                >
                  <Edit className="w-5 h-5" />
                  <span>{t('editChapter')}</span>
                </button>
                
                <button
                  onClick={handleAddDefinition}
                  onMouseEnter={playHover}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 ${
                    state.settings.darkMode 
                      ? 'bg-purple-600 hover:bg-purple-500 text-white' 
                      : 'bg-purple-500 hover:bg-purple-400 text-white'
                  } shadow-lg hover:shadow-xl`}
                >
                  <Highlighter className="w-5 h-5" />
                  <span>{t('addDefinition')}</span>
                </button>
              </>
            )}
            
            {selectedChapter && tocItems.length > 0 && (
              <button
                onClick={() => setShowTableOfContents(!showTableOfContents)}
                onMouseEnter={playHover}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 ${
                  state.settings.darkMode 
                    ? 'bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white' 
                    : 'bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-900 shadow-lg hover:shadow-xl'
                }`}
              >
                <List className="w-5 h-5" />
                <span>{t('tableOfContents')}</span>
              </button>
            )}
          </div>
        </header>

        {selectedChapter && currentChapter ? (
          /* Chapter Content View */
          <div className="max-w-6xl mx-auto">
            <div className="flex gap-8">
              {/* Table of Contents Sidebar */}
              {showTableOfContents && tocItems.length > 0 && (
                <div className={`w-80 flex-shrink-0 ${
                  state.settings.darkMode 
                    ? 'bg-gray-800/80 border border-gray-700' 
                    : 'bg-white/80 border border-white/20'
                } backdrop-blur-sm shadow-2xl rounded-3xl p-6 h-fit sticky top-8`}>
                  <h3 className={`text-lg font-bold mb-4 ${
                    state.settings.darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {t('tableOfContents')}
                  </h3>
                  
                  <div className="space-y-2">
                    {tocItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full text-left p-2 rounded-lg transition-all duration-300 hover:scale-102 ${
                          state.settings.darkMode 
                            ? 'hover:bg-gray-700 text-gray-300 hover:text-white' 
                            : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                        }`}
                        style={{ paddingLeft: `${item.level * 12 + 8}px` }}
                      >
                        <div className="flex items-center space-x-2">
                          <ChevronRight className="w-4 h-4" />
                          <span className={`text-sm ${
                            item.level === 0 ? 'font-bold' :
                            item.level === 1 ? 'font-semibold' : 
                            item.level === 2 ? 'font-medium' : 'font-normal'
                          }`}>
                            {item.title}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Main Content */}
              <div className={`flex-1 rounded-3xl p-8 ${
                state.settings.darkMode 
                  ? 'bg-gray-800/80 border border-gray-700' 
                  : 'bg-white/80 border border-white/20'
              } backdrop-blur-sm shadow-2xl`}>
                
                {/* Chapter Content */}
                <div className="space-y-8">
                  {renderChapterContent()}
                </div>

                {/* Complete Chapter Button */}
                <div className="mt-12 flex justify-center">
                  <button
                    onClick={handleCompleteChapter}
                    onMouseEnter={playHover}
                    className={`flex items-center space-x-3 px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                      progress?.completedChapters.includes(selectedChapter)
                        ? state.settings.darkMode
                          ? 'bg-green-700 hover:bg-green-600 text-white'
                          : 'bg-green-500 hover:bg-green-400 text-white'
                        : state.settings.darkMode
                          ? 'bg-blue-600 hover:bg-blue-500 text-white'
                          : 'bg-blue-500 hover:bg-blue-400 text-white'
                    } shadow-lg hover:shadow-xl`}
                  >
                    {progress?.completedChapters.includes(selectedChapter) ? (
                      <>
                        <CheckCircle className="w-6 h-6" />
                        <span className="text-lg font-semibold">{t('chapterCompleted')}</span>
                      </>
                    ) : (
                      <>
                        <BookOpen className="w-6 h-6" />
                        <span className="text-lg font-semibold">{t('markAsComplete')}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Chapter Selection View */
          <div className="max-w-4xl mx-auto">
            {currentSubject.chapters.length === 0 ? (
              <div className="text-center py-20">
                <div className={`text-6xl mb-6 ${
                  state.settings.darkMode ? 'text-gray-600' : 'text-gray-400'
                }`}>
                  📖
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
              <>
                {/* Progress Overview */}
                <div className={`mb-8 p-6 rounded-2xl ${
                  state.settings.darkMode 
                    ? 'bg-gray-800/80 border border-gray-700' 
                    : 'bg-white/80 border border-white/20'
                } backdrop-blur-sm shadow-xl`}>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className={`text-xl font-semibold ${
                      state.settings.darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {t('subjectProgress')}
                    </h3>
                    <span className={`text-2xl font-bold ${
                      currentSubject.color ? 'text-blue-600' : state.settings.darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`} style={{ color: currentSubject.color }}>
                      {Math.round(progress?.totalScore || 0)}%
                    </span>
                  </div>
                  <div className={`w-full h-3 rounded-full ${
                    state.settings.darkMode ? 'bg-gray-700' : 'bg-gray-200'
                  }`}>
                    <div 
                      className="h-full rounded-full transition-all duration-500"
                      style={{ 
                        width: `${progress?.totalScore || 0}%`,
                        backgroundColor: currentSubject.color 
                      }}
                    ></div>
                  </div>
                </div>

                {/* Chapters List */}
                <div className="grid gap-6">
                  {currentSubject.chapters.map((chapter, index) => {
                    const isCompleted = progress?.completedChapters.includes(chapter.id);
                    const mainHeadings = chapter.mainHeadings || [];
                    const images = chapter.images || [];
                    const chapterDefinitions = currentSubject.definitions?.filter(def => def.chapterId === chapter.id) || [];
                    
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
                                isCompleted 
                                  ? 'bg-green-500 text-white' 
                                  : state.settings.darkMode 
                                    ? 'bg-gray-700 text-gray-300' 
                                    : 'bg-gray-100 text-gray-600'
                              }`}
                            >
                              {isCompleted ? (
                                <CheckCircle className="w-6 h-6" />
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
                              <div className="flex flex-wrap gap-2 mt-1">
                                <p className={`text-sm ${
                                  state.settings.darkMode ? 'text-gray-400' : 'text-gray-600'
                                }`}>
                                  {isCompleted ? t('completed') : t('notStarted')}
                                </p>
                                <span className={`px-2 py-1 rounded-full text-xs ${
                                  state.settings.darkMode ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800'
                                }`}>
                                  {t('customContent')}
                                </span>
                                {mainHeadings.length > 0 && (
                                  <span className={`px-2 py-1 rounded-full text-xs ${
                                    state.settings.darkMode ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-800'
                                  }`}>
                                    {mainHeadings.length} peapealkirja
                                  </span>
                                )}
                                {images.length > 0 && (
                                  <span className={`px-2 py-1 rounded-full text-xs ${
                                    state.settings.darkMode ? 'bg-green-600 text-white' : 'bg-green-100 text-green-800'
                                  }`}>
                                    {images.length} pilti
                                  </span>
                                )}
                                {chapterDefinitions.length > 0 && (
                                  <span className={`px-2 py-1 rounded-full text-xs ${
                                    state.settings.darkMode ? 'bg-yellow-600 text-white' : 'bg-yellow-100 text-yellow-800'
                                  }`}>
                                    {chapterDefinitions.length} definitsiooni
                                  </span>
                                )}
                              </div>
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
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}