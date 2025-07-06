import { useEffect, useCallback } from 'react';
import { useApp } from '../contexts/AppContext';

export interface AudioHook {
  playSuccess: () => void;
  playError: () => void;
  playClick: () => void;
  playHover: () => void;
}

export function useAudio(): AudioHook {
  const { state } = useApp();

  // Create audio context and oscillator for generating sounds
  const createBeep = useCallback((frequency: number, duration: number, type: OscillatorType = 'sine') => {
    if (!state.settings.audioEnabled) return;

    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.value = frequency;
      oscillator.type = type;

      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + duration);
    } catch (error) {
      console.warn('Audio not supported:', error);
    }
  }, [state.settings.audioEnabled]);

  const playSuccess = useCallback(() => {
    // Play ascending notes for success
    createBeep(523.25, 0.1); // C5
    setTimeout(() => createBeep(659.25, 0.1), 100); // E5
    setTimeout(() => createBeep(783.99, 0.2), 200); // G5
  }, [createBeep]);

  const playError = useCallback(() => {
    // Play descending notes for error
    createBeep(329.63, 0.3, 'square'); // E4
    setTimeout(() => createBeep(293.66, 0.3, 'square'), 150); // D4
  }, [createBeep]);

  const playClick = useCallback(() => {
    createBeep(800, 0.1, 'square');
  }, [createBeep]);

  const playHover = useCallback(() => {
    createBeep(1000, 0.05, 'sine');
  }, [createBeep]);

  return {
    playSuccess,
    playError,
    playClick,
    playHover
  };
}