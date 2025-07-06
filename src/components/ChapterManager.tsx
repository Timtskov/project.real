import React, { useState } from 'react';
import { GripVertical, Move, ArrowRight, Check, X } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { useAudio } from '../hooks/useAudio';
import { useTranslation } from '../hooks/useTranslation';
import { Chapter, BookHeading } from '../types';

interface ChapterManagerProps {
  subjectId: string;
  chapters: Chapter[];
  bookHeadings: BookHeading[];
}

export function ChapterManager({ subjectId, chapters, bookHeadings }: ChapterManagerProps) {
  const { state, dispatch } = useApp();
  const { playClick, playHover, playSuccess } = useAudio();
  const { t } = useTranslation();
  const [draggedChapter, setDraggedChapter] = useState<string | null>(null);
  const [dropTarget, setDropTarget] = useState<string | null>(null);

  const handleDragStart = (e: React.DragEvent, chapterId: string) => {
    setDraggedChapter(chapterId);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', chapterId);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDragEnter = (e: React.DragEvent, targetId: string) => {
    e.preventDefault();
    setDropTarget(targetId);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    // Only clear drop target if we're leaving the drop zone entirely
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setDropTarget(null);
    }
  };

  const handleDrop = (e: React.DragEvent, newHeadingId: string | null) => {
    e.preventDefault();
    
    if (!draggedChapter) return;

    const chapter = chapters.find(c => c.id === draggedChapter);
    if (!chapter) return;

    // Calculate new order based on existing chapters in the target heading
    const chaptersInTargetHeading = chapters.filter(c => c.bookHeadingId === newHeadingId);
    const newOrder = chaptersInTargetHeading.length;

    dispatch({
      type: 'MOVE_CHAPTER',
      payload: {
        subjectId,
        chapterId: draggedChapter,
        newHeadingId,
        newOrder
      }
    });

    playSuccess();
    setDraggedChapter(null);
    setDropTarget(null);
  };

  const getChaptersByHeading = (headingId: string | null) => {
    return chapters
      .filter(chapter => chapter.bookHeadingId === headingId)
      .sort((a, b) => (a.order || 0) - (b.order || 0));
  };

  const standaloneChapters = getChaptersByHeading(null);

  return (
    <div className={`p-6 rounded-2xl ${
      state.settings.darkMode 
        ? 'bg-gray-800/80 border border-gray-700' 
        : 'bg-white/80 border border-white/20'
    } backdrop-blur-sm shadow-xl`}>
      
      <h3 className={`text-xl font-bold mb-6 ${
        state.settings.darkMode ? 'text-white' : 'text-gray-900'
      }`}>
        {t('dragChapter')}
      </h3>

      <div className="space-y-6">
        
        {/* Book Headings with their chapters */}
        {bookHeadings.map((heading) => {
          const headingChapters = getChaptersByHeading(heading.id);
          
          return (
            <div
              key={heading.id}
              className={`border-2 border-dashed rounded-xl p-4 transition-all duration-300 ${
                dropTarget === heading.id
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                  : state.settings.darkMode
                    ? 'border-gray-600 hover:border-gray-500'
                    : 'border-gray-300 hover:border-gray-400'
              }`}
              onDragOver={handleDragOver}
              onDragEnter={(e) => handleDragEnter(e, heading.id)}
              onDragLeave={handleDragLeave}
              onDrop={(e) => handleDrop(e, heading.id)}
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className={`font-semibold ${
                  state.settings.darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  📚 {heading.title}
                </h4>
                <span className={`text-sm px-2 py-1 rounded-full ${
                  state.settings.darkMode ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800'
                }`}>
                  {headingChapters.length} {t('chapters')}
                </span>
              </div>

              {headingChapters.length === 0 ? (
                <div className={`text-center py-8 ${
                  state.settings.darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  <Move className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">{t('dropHere')}</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {headingChapters.map((chapter) => (
                    <div
                      key={chapter.id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, chapter.id)}
                      className={`flex items-center space-x-3 p-3 rounded-lg cursor-move transition-all duration-300 ${
                        draggedChapter === chapter.id
                          ? 'opacity-50 scale-95'
                          : state.settings.darkMode
                            ? 'bg-gray-700 hover:bg-gray-600'
                            : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      <GripVertical className={`w-5 h-5 ${
                        state.settings.darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`} />
                      <div className="flex-1">
                        <p className={`font-medium ${
                          state.settings.darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          {chapter.title}
                        </p>
                        <p className={`text-sm ${
                          state.settings.darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {chapter.exercises.length} {t('exercises')}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {/* Standalone chapters */}
        <div
          className={`border-2 border-dashed rounded-xl p-4 transition-all duration-300 ${
            dropTarget === 'standalone'
              ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
              : state.settings.darkMode
                ? 'border-gray-600 hover:border-gray-500'
                : 'border-gray-300 hover:border-gray-400'
          }`}
          onDragOver={handleDragOver}
          onDragEnter={(e) => handleDragEnter(e, 'standalone')}
          onDragLeave={handleDragLeave}
          onDrop={(e) => handleDrop(e, null)}
        >
          <div className="flex items-center justify-between mb-3">
            <h4 className={`font-semibold ${
              state.settings.darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              📄 {t('moveToStandalone')}
            </h4>
            <span className={`text-sm px-2 py-1 rounded-full ${
              state.settings.darkMode ? 'bg-green-600 text-white' : 'bg-green-100 text-green-800'
            }`}>
              {standaloneChapters.length} {t('chapters')}
            </span>
          </div>

          {standaloneChapters.length === 0 ? (
            <div className={`text-center py-8 ${
              state.settings.darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              <Move className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm">{t('dropHere')}</p>
            </div>
          ) : (
            <div className="space-y-2">
              {standaloneChapters.map((chapter) => (
                <div
                  key={chapter.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, chapter.id)}
                  className={`flex items-center space-x-3 p-3 rounded-lg cursor-move transition-all duration-300 ${
                    draggedChapter === chapter.id
                      ? 'opacity-50 scale-95'
                      : state.settings.darkMode
                        ? 'bg-gray-700 hover:bg-gray-600'
                        : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <GripVertical className={`w-5 h-5 ${
                    state.settings.darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`} />
                  <div className="flex-1">
                    <p className={`font-medium ${
                      state.settings.darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {chapter.title}
                    </p>
                    <p className={`text-sm ${
                      state.settings.darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {chapter.exercises.length} {t('exercises')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Instructions */}
        <div className={`p-4 rounded-xl ${
          state.settings.darkMode ? 'bg-blue-900/20' : 'bg-blue-50'
        }`}>
          <p className={`text-sm ${
            state.settings.darkMode ? 'text-blue-300' : 'text-blue-800'
          }`}>
            💡 {t('dragChapter')}: Lohista peatükke erinevate raamatu pealkirjade vahel või tee need eraldiseisvaks.
          </p>
        </div>
      </div>
    </div>
  );
}