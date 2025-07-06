import React, { createContext, useContext, useReducer, useEffect, useCallback } from 'react';
import { AppSettings, UserProgress, Mode, Subject, Chapter, Exercise, SubHeading, MainHeading, BookHeading, Definition, SaveStatus } from '../types';
import { cloudStorage } from '../services/cloudStorage';

interface AppState {
  currentMode: Mode;
  selectedSubject: string | null;
  selectedChapter: string | null;
  settings: AppSettings;
  progress: UserProgress[];
  customSubjects: Subject[];
  currentUser: string | null;
  isLoading: boolean;
  saveStatus: SaveStatus;
  selectedText: {
    text: string;
    chapterId: string;
    elementId: string;
    start: number;
    end: number;
  } | null;
  showDefinitionModal: boolean;
}

type AppAction = 
  | { type: 'SET_MODE'; payload: Mode }
  | { type: 'SET_SUBJECT'; payload: string | null }
  | { type: 'SET_CHAPTER'; payload: string | null }
  | { type: 'UPDATE_SETTINGS'; payload: Partial<AppSettings> }
  | { type: 'UPDATE_PROGRESS'; payload: UserProgress }
  | { type: 'ADD_CUSTOM_SUBJECT'; payload: Subject }
  | { type: 'ADD_CUSTOM_CHAPTER'; payload: { subjectId: string; chapter: Chapter } }
  | { type: 'ADD_CUSTOM_EXERCISE'; payload: { subjectId: string; chapterId: string; exercise: Exercise } }
  | { type: 'ADD_BOOK_HEADING'; payload: { subjectId: string; heading: BookHeading } }
  | { type: 'UPDATE_BOOK_HEADING'; payload: { subjectId: string; headingId: string; heading: Partial<BookHeading> } }
  | { type: 'DELETE_BOOK_HEADING'; payload: { subjectId: string; headingId: string } }
  | { type: 'ASSIGN_CHAPTER_TO_HEADING'; payload: { subjectId: string; chapterId: string; headingId: string | null } }
  | { type: 'MOVE_CHAPTER'; payload: { subjectId: string; chapterId: string; newHeadingId: string | null; newOrder: number } }
  | { type: 'DELETE_CUSTOM_SUBJECT'; payload: string }
  | { type: 'DELETE_CUSTOM_CHAPTER'; payload: { subjectId: string; chapterId: string } }
  | { type: 'DELETE_CUSTOM_EXERCISE'; payload: { subjectId: string; chapterId: string; exerciseId: string } }
  | { type: 'ADD_DEFINITION'; payload: { subjectId: string; definition: Definition } }
  | { type: 'DELETE_DEFINITION'; payload: { subjectId: string; definitionId: string } }
  | { type: 'SET_SELECTED_TEXT'; payload: AppState['selectedText'] }
  | { type: 'SET_SHOW_DEFINITION_MODAL'; payload: boolean }
  | { type: 'SET_USER'; payload: string }
  | { type: 'LOGOUT' }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_SAVE_STATUS'; payload: SaveStatus }
  | { type: 'LOAD_USER_DATA'; payload: { settings: AppSettings; progress: UserProgress[]; customSubjects: Subject[] } };

const initialState: AppState = {
  currentMode: 'home',
  selectedSubject: null,
  selectedChapter: null,
  settings: {
    darkMode: true,
    fontSize: 'medium',
    audioEnabled: true,
    backgroundColor: '#1e40af',
    language: 'et'
  },
  progress: [],
  customSubjects: [],
  currentUser: null,
  isLoading: false,
  saveStatus: {
    status: 'idle',
    message: '',
    timestamp: 0
  },
  selectedText: null,
  showDefinitionModal: false
};

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_MODE':
      return { ...state, currentMode: action.payload };
    case 'SET_SUBJECT':
      return { ...state, selectedSubject: action.payload };
    case 'SET_CHAPTER':
      return { ...state, selectedChapter: action.payload };
    case 'UPDATE_SETTINGS':
      return { ...state, settings: { ...state.settings, ...action.payload } };
    case 'UPDATE_PROGRESS':
      const existingIndex = state.progress.findIndex(p => p.subjectId === action.payload.subjectId);
      const newProgress = [...state.progress];
      if (existingIndex >= 0) {
        newProgress[existingIndex] = action.payload;
      } else {
        newProgress.push(action.payload);
      }
      return { ...state, progress: newProgress };
    case 'ADD_CUSTOM_SUBJECT':
      return { ...state, customSubjects: [...state.customSubjects, action.payload] };
    case 'ADD_CUSTOM_CHAPTER':
      const updatedSubjects = state.customSubjects.map(subject => 
        subject.id === action.payload.subjectId 
          ? { ...subject, chapters: [...subject.chapters, action.payload.chapter] }
          : subject
      );
      return { ...state, customSubjects: updatedSubjects };
    case 'ADD_CUSTOM_EXERCISE':
      const updatedSubjectsWithExercise = state.customSubjects.map(subject => 
        subject.id === action.payload.subjectId 
          ? {
              ...subject,
              chapters: subject.chapters.map(chapter =>
                chapter.id === action.payload.chapterId
                  ? { ...chapter, exercises: [...chapter.exercises, action.payload.exercise] }
                  : chapter
              )
            }
          : subject
      );
      return { ...state, customSubjects: updatedSubjectsWithExercise };
    case 'ADD_BOOK_HEADING':
      const subjectsWithNewHeading = state.customSubjects.map(subject => 
        subject.id === action.payload.subjectId 
          ? { 
              ...subject, 
              bookHeadings: [...(subject.bookHeadings || []), action.payload.heading]
            }
          : subject
      );
      return { ...state, customSubjects: subjectsWithNewHeading };
    case 'UPDATE_BOOK_HEADING':
      const subjectsWithUpdatedHeading = state.customSubjects.map(subject => 
        subject.id === action.payload.subjectId 
          ? { 
              ...subject, 
              bookHeadings: (subject.bookHeadings || []).map(heading =>
                heading.id === action.payload.headingId
                  ? { ...heading, ...action.payload.heading }
                  : heading
              )
            }
          : subject
      );
      return { ...state, customSubjects: subjectsWithUpdatedHeading };
    case 'DELETE_BOOK_HEADING':
      const subjectsWithDeletedHeading = state.customSubjects.map(subject => 
        subject.id === action.payload.subjectId 
          ? { 
              ...subject, 
              bookHeadings: (subject.bookHeadings || []).filter(heading => heading.id !== action.payload.headingId),
              chapters: subject.chapters.map(chapter => 
                chapter.bookHeadingId === action.payload.headingId
                  ? { ...chapter, bookHeadingId: undefined }
                  : chapter
              )
            }
          : subject
      );
      return { ...state, customSubjects: subjectsWithDeletedHeading };
    case 'ASSIGN_CHAPTER_TO_HEADING':
      const subjectsWithAssignedChapter = state.customSubjects.map(subject => 
        subject.id === action.payload.subjectId 
          ? { 
              ...subject, 
              chapters: subject.chapters.map(chapter =>
                chapter.id === action.payload.chapterId
                  ? { ...chapter, bookHeadingId: action.payload.headingId }
                  : chapter
              )
            }
          : subject
      );
      return { ...state, customSubjects: subjectsWithAssignedChapter };
    case 'MOVE_CHAPTER':
      const subjectsWithMovedChapter = state.customSubjects.map(subject => 
        subject.id === action.payload.subjectId 
          ? { 
              ...subject, 
              chapters: subject.chapters.map(chapter =>
                chapter.id === action.payload.chapterId
                  ? { 
                      ...chapter, 
                      bookHeadingId: action.payload.newHeadingId,
                      order: action.payload.newOrder
                    }
                  : chapter
              )
            }
          : subject
      );
      return { ...state, customSubjects: subjectsWithMovedChapter };
    case 'DELETE_CUSTOM_SUBJECT':
      const filteredSubjects = state.customSubjects.filter(subject => subject.id !== action.payload);
      const filteredProgress = state.progress.filter(progress => progress.subjectId !== action.payload);
      return { 
        ...state, 
        customSubjects: filteredSubjects,
        progress: filteredProgress,
        selectedSubject: state.selectedSubject === action.payload ? null : state.selectedSubject
      };
    case 'DELETE_CUSTOM_CHAPTER':
      const subjectsWithDeletedChapter = state.customSubjects.map(subject => 
        subject.id === action.payload.subjectId 
          ? { 
              ...subject, 
              chapters: subject.chapters.filter(chapter => chapter.id !== action.payload.chapterId)
            }
          : subject
      );
      const progressWithDeletedChapter = state.progress.map(progress => 
        progress.subjectId === action.payload.subjectId
          ? {
              ...progress,
              completedChapters: progress.completedChapters.filter(id => id !== action.payload.chapterId),
              exerciseScores: Object.fromEntries(
                Object.entries(progress.exerciseScores).filter(([key]) => key !== action.payload.chapterId)
              )
            }
          : progress
      );
      return { 
        ...state, 
        customSubjects: subjectsWithDeletedChapter,
        progress: progressWithDeletedChapter,
        selectedChapter: state.selectedChapter === action.payload.chapterId ? null : state.selectedChapter
      };
    case 'DELETE_CUSTOM_EXERCISE':
      const subjectsWithDeletedExercise = state.customSubjects.map(subject => 
        subject.id === action.payload.subjectId 
          ? {
              ...subject,
              chapters: subject.chapters.map(chapter =>
                chapter.id === action.payload.chapterId
                  ? { 
                      ...chapter, 
                      exercises: chapter.exercises.filter(exercise => exercise.id !== action.payload.exerciseId)
                    }
                  : chapter
              )
            }
          : subject
      );
      return { ...state, customSubjects: subjectsWithDeletedExercise };
    case 'ADD_DEFINITION':
      const subjectsWithNewDefinition = state.customSubjects.map(subject => 
        subject.id === action.payload.subjectId 
          ? { 
              ...subject, 
              definitions: [...(subject.definitions || []), action.payload.definition]
            }
          : subject
      );
      return { ...state, customSubjects: subjectsWithNewDefinition };
    case 'DELETE_DEFINITION':
      const subjectsWithDeletedDefinition = state.customSubjects.map(subject => 
        subject.id === action.payload.subjectId 
          ? { 
              ...subject, 
              definitions: (subject.definitions || []).filter(def => def.id !== action.payload.definitionId)
            }
          : subject
      );
      return { ...state, customSubjects: subjectsWithDeletedDefinition };
    case 'SET_SELECTED_TEXT':
      return { ...state, selectedText: action.payload };
    case 'SET_SHOW_DEFINITION_MODAL':
      return { ...state, showDefinitionModal: action.payload };
    case 'SET_USER':
      return { ...state, currentUser: action.payload };
    case 'LOGOUT':
      return { 
        ...initialState,
        currentUser: null
      };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_SAVE_STATUS':
      return { ...state, saveStatus: action.payload };
    case 'LOAD_USER_DATA':
      // Ensure bookHeadings and definitions exist for all subjects
      const subjectsWithHeadings = (action.payload.customSubjects || []).map(subject => ({
        ...subject,
        bookHeadings: subject.bookHeadings || [],
        definitions: subject.definitions || [],
        chapters: (subject.chapters || []).map(chapter => ({
          ...chapter,
          order: chapter.order || 0
        }))
      }));
      
      return { 
        ...state, 
        settings: action.payload.settings, 
        progress: action.payload.progress,
        customSubjects: subjectsWithHeadings
      };
    default:
      return state;
  }
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Auto-save functionality
  const autoSave = useCallback(async () => {
    if (!state.currentUser || state.isLoading) return;

    dispatch({
      type: 'SET_SAVE_STATUS',
      payload: { status: 'saving', message: 'Salvestamine...', timestamp: Date.now() }
    });

    try {
      const result = await cloudStorage.saveUserData(state.currentUser, {
        settings: state.settings,
        progress: state.progress,
        customSubjects: state.customSubjects
      });

      dispatch({
        type: 'SET_SAVE_STATUS',
        payload: {
          status: result.success ? 'saved' : 'error',
          message: result.message,
          timestamp: Date.now()
        }
      });

      // Clear status after 3 seconds
      setTimeout(() => {
        dispatch({
          type: 'SET_SAVE_STATUS',
          payload: { status: 'idle', message: '', timestamp: Date.now() }
        });
      }, 3000);

    } catch (error) {
      dispatch({
        type: 'SET_SAVE_STATUS',
        payload: {
          status: 'error',
          message: 'Salvestamine ebaõnnestus',
          timestamp: Date.now()
        }
      });
    }
  }, [state.currentUser, state.settings, state.progress, state.customSubjects, state.isLoading]);

  // Load user data when user is set
  useEffect(() => {
    if (state.currentUser) {
      loadUserData(state.currentUser);
    }
  }, [state.currentUser]);

  // Auto-save every minute
  useEffect(() => {
    if (!state.currentUser) return;

    const interval = setInterval(autoSave, 60000); // 1 minute
    return () => clearInterval(interval);
  }, [autoSave, state.currentUser]);

  // Save when data changes (debounced)
  useEffect(() => {
    if (!state.currentUser || state.isLoading) return;

    const timeoutId = setTimeout(autoSave, 2000); // Save 2 seconds after last change
    return () => clearTimeout(timeoutId);
  }, [state.settings, state.progress, state.customSubjects, autoSave, state.currentUser, state.isLoading]);

  const loadUserData = async (username: string) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const userData = await cloudStorage.syncUserData(username);
      if (userData) {
        dispatch({
          type: 'LOAD_USER_DATA',
          payload: {
            settings: userData.settings || initialState.settings,
            progress: userData.progress || [],
            customSubjects: userData.customSubjects || []
          }
        });
      }
    } catch (error) {
      console.error('Failed to load user data:', error);
      dispatch({
        type: 'SET_SAVE_STATUS',
        payload: {
          status: 'error',
          message: 'Andmete laadimine ebaõnnestus',
          timestamp: Date.now()
        }
      });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}