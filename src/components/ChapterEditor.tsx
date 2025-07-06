import React, { useState, useRef, useEffect } from 'react';
import { X, Bold, Italic, Underline, Type, AlignLeft, AlignCenter, AlignRight, List, ListOrdered, Save, Eye } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { useAudio } from '../hooks/useAudio';
import { useTranslation } from '../hooks/useTranslation';
import { Chapter } from '../types';

interface ChapterEditorProps {
  chapter: Chapter;
  subjectId: string;
  onClose: () => void;
}

export function ChapterEditor({ chapter, subjectId, onClose }: ChapterEditorProps) {
  const { state, dispatch } = useApp();
  const { playClick, playHover } = useAudio();
  const { t } = useTranslation();
  const [title, setTitle] = useState(chapter.title);
  const [content, setContent] = useState(chapter.content);
  const [isPreview, setIsPreview] = useState(false);
  const editorRef = useRef<HTMLDivElement>(null);

  const handleSave = () => {
    playClick();
    
    const updatedChapter: Chapter = {
      ...chapter,
      title,
      content: editorRef.current?.innerHTML || content
    };

    // Update the chapter in the subject
    const updatedSubjects = state.customSubjects.map(subject => 
      subject.id === subjectId 
        ? {
            ...subject,
            chapters: subject.chapters.map(ch =>
              ch.id === chapter.id ? updatedChapter : ch
            )
          }
        : subject
    );

    // Update the state with new subjects
    dispatch({ type: 'LOAD_USER_DATA', payload: {
      settings: state.settings,
      progress: state.progress,
      customSubjects: updatedSubjects
    }});

    onClose();
  };

  const execCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Handle keyboard shortcuts
    if (e.ctrlKey || e.metaKey) {
      switch (e.key) {
        case 'b':
          e.preventDefault();
          execCommand('bold');
          break;
        case 'i':
          e.preventDefault();
          execCommand('italic');
          break;
        case 'u':
          e.preventDefault();
          execCommand('underline');
          break;
        case 's':
          e.preventDefault();
          handleSave();
          break;
      }
    }
  };

  const formatButtons = [
    { command: 'bold', icon: Bold, title: 'Bold (Ctrl+B)' },
    { command: 'italic', icon: Italic, title: 'Italic (Ctrl+I)' },
    { command: 'underline', icon: Underline, title: 'Underline (Ctrl+U)' },
  ];

  const alignButtons = [
    { command: 'justifyLeft', icon: AlignLeft, title: 'Align Left' },
    { command: 'justifyCenter', icon: AlignCenter, title: 'Align Center' },
    { command: 'justifyRight', icon: AlignRight, title: 'Align Right' },
  ];

  const listButtons = [
    { command: 'insertUnorderedList', icon: List, title: 'Bullet List' },
    { command: 'insertOrderedList', icon: ListOrdered, title: 'Numbered List' },
  ];

  const fontSizes = [
    { value: '1', label: 'Väike' },
    { value: '3', label: 'Tavaline' },
    { value: '4', label: 'Suur' },
    { value: '5', label: 'Väga suur' },
    { value: '6', label: 'Pealkiri' },
  ];

  useEffect(() => {
    if (editorRef.current && !isPreview) {
      editorRef.current.innerHTML = content;
    }
  }, [content, isPreview]);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="w-full max-w-6xl h-[90vh] bg-white rounded-3xl shadow-2xl flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <h2 className="text-2xl font-bold text-gray-900">
              {t('editChapter')}
            </h2>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsPreview(false)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  !isPreview 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Muuda
              </button>
              <button
                onClick={() => setIsPreview(true)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  isPreview 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Eye className="w-4 h-4 mr-2 inline" />
                Eelvaade
              </button>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <button
              onClick={handleSave}
              onMouseEnter={playHover}
              className="flex items-center space-x-2 px-6 py-3 bg-green-500 hover:bg-green-400 text-white rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              <Save className="w-5 h-5" />
              <span>{t('save')}</span>
            </button>
            <button
              onClick={onClose}
              onMouseEnter={playHover}
              className="p-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-110"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Title Input */}
        <div className="p-6 border-b border-gray-200">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Peatüki pealkiri"
            className="w-full text-3xl font-bold text-gray-900 bg-transparent border-none outline-none placeholder-gray-400"
          />
        </div>

        {/* Toolbar */}
        {!isPreview && (
          <div className="flex items-center space-x-4 p-4 border-b border-gray-200 bg-gray-50">
            
            {/* Font Size */}
            <select
              onChange={(e) => execCommand('fontSize', e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:border-blue-500"
            >
              <option value="">Fondi suurus</option>
              {fontSizes.map((size) => (
                <option key={size.value} value={size.value}>
                  {size.label}
                </option>
              ))}
            </select>

            <div className="w-px h-6 bg-gray-300"></div>

            {/* Format Buttons */}
            <div className="flex items-center space-x-1">
              {formatButtons.map((button) => (
                <button
                  key={button.command}
                  onClick={() => execCommand(button.command)}
                  onMouseEnter={playHover}
                  title={button.title}
                  className="p-2 rounded-lg hover:bg-gray-200 text-gray-600 hover:text-gray-900 transition-all duration-300"
                >
                  <button.icon className="w-5 h-5" />
                </button>
              ))}
            </div>

            <div className="w-px h-6 bg-gray-300"></div>

            {/* Alignment Buttons */}
            <div className="flex items-center space-x-1">
              {alignButtons.map((button) => (
                <button
                  key={button.command}
                  onClick={() => execCommand(button.command)}
                  onMouseEnter={playHover}
                  title={button.title}
                  className="p-2 rounded-lg hover:bg-gray-200 text-gray-600 hover:text-gray-900 transition-all duration-300"
                >
                  <button.icon className="w-5 h-5" />
                </button>
              ))}
            </div>

            <div className="w-px h-6 bg-gray-300"></div>

            {/* List Buttons */}
            <div className="flex items-center space-x-1">
              {listButtons.map((button) => (
                <button
                  key={button.command}
                  onClick={() => execCommand(button.command)}
                  onMouseEnter={playHover}
                  title={button.title}
                  className="p-2 rounded-lg hover:bg-gray-200 text-gray-600 hover:text-gray-900 transition-all duration-300"
                >
                  <button.icon className="w-5 h-5" />
                </button>
              ))}
            </div>

            <div className="w-px h-6 bg-gray-300"></div>

            {/* Text Color */}
            <input
              type="color"
              onChange={(e) => execCommand('foreColor', e.target.value)}
              className="w-10 h-8 rounded border border-gray-300 cursor-pointer"
              title="Teksti värv"
            />

            {/* Background Color */}
            <input
              type="color"
              onChange={(e) => execCommand('hiliteColor', e.target.value)}
              className="w-10 h-8 rounded border border-gray-300 cursor-pointer"
              title="Tausta värv"
            />
          </div>
        )}

        {/* Content Area */}
        <div className="flex-1 p-6 overflow-auto">
          {isPreview ? (
            <div className="prose prose-lg max-w-none">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">{title}</h1>
              <div 
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: editorRef.current?.innerHTML || content }}
              />
            </div>
          ) : (
            <div
              ref={editorRef}
              contentEditable
              onKeyDown={handleKeyDown}
              className="w-full min-h-full p-4 text-gray-900 leading-relaxed focus:outline-none border-2 border-dashed border-gray-200 rounded-xl"
              style={{ 
                fontSize: '16px',
                lineHeight: '1.6'
              }}
              suppressContentEditableWarning={true}
            />
          )}
        </div>

        {/* Footer with shortcuts */}
        {!isPreview && (
          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <div className="flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center space-x-4">
                <span><kbd className="px-2 py-1 bg-gray-200 rounded">Ctrl+B</kbd> Paks</span>
                <span><kbd className="px-2 py-1 bg-gray-200 rounded">Ctrl+I</kbd> Kaldkiri</span>
                <span><kbd className="px-2 py-1 bg-gray-200 rounded">Ctrl+U</kbd> Allajoonitud</span>
                <span><kbd className="px-2 py-1 bg-gray-200 rounded">Ctrl+S</kbd> Salvesta</span>
              </div>
              <span>Vali tekst ja kasuta tööriistariba vormindamiseks</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}