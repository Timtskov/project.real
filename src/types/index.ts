export interface Subject {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
  chapters: Chapter[];
  bookHeadings: BookHeading[];
  definitions: Definition[];
  isCustom?: boolean;
}

export interface BookHeading {
  id: string;
  title: string;
  content: string;
  order: number;
  chapterIds: string[]; // Chapters that belong to this heading
}

export interface Definition {
  id: string;
  word: string;
  definition: string;
  highlightColor: 'yellow' | 'green' | 'blue' | 'pink' | 'orange';
  chapterId: string;
  position: {
    start: number;
    end: number;
    elementId: string; // ID of the element containing the text
  };
}

export interface ChapterImage {
  id: string;
  url: string;
  description: string;
  alt: string;
  width?: number;
  height?: number;
  position?: 'left' | 'center' | 'right';
}

export interface ExerciseImage {
  id: string;
  url: string;
  description?: string;
  alt: string;
  width?: number;
  height?: number;
  position?: 'left' | 'center' | 'right';
}

export interface MainHeading {
  id: string;
  title: string;
  content: string;
  subHeadings: SubHeading[];
  images: ChapterImage[];
  order: number;
}

export interface SubHeading {
  id: string;
  title: string;
  level: number; // 1, 2, or 3 for h2, h3, h4
  content: string;
  images: ChapterImage[];
  order: number;
}

export interface Chapter {
  id: string;
  title: string;
  content: string;
  mainHeadings: MainHeading[];
  images: ChapterImage[];
  exercises: Exercise[];
  bookHeadingId?: string; // Which book heading this chapter belongs to
  order: number;
  isCustom?: boolean;
}

export interface Exercise {
  id: string;
  question: string;
  type: 'multiple-choice' | 'drag-drop' | 'fill-blank';
  options?: string[];
  correctAnswer: string | string[];
  explanation: string;
  images: ExerciseImage[];
  isCustom?: boolean;
}

export interface UserProgress {
  subjectId: string;
  completedChapters: string[];
  exerciseScores: Record<string, number>;
  totalScore: number;
}

export interface AppSettings {
  darkMode: boolean;
  fontSize: 'small' | 'medium' | 'large';
  audioEnabled: boolean;
  backgroundColor: string;
  language: 'en' | 'et';
}

export interface SaveStatus {
  status: 'saving' | 'saved' | 'error' | 'idle';
  message: string;
  timestamp: number;
}

export type Mode = 'home' | 'learn' | 'practice' | 'settings' | 'add-content';

export interface Translation {
  [key: string]: string | Translation;
}