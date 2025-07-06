import { useApp } from '../contexts/AppContext';
import { getTranslation } from '../data/translations';

export function useTranslation() {
  const { state } = useApp();
  
  const t = (key: string): string => {
    return getTranslation(key, state.settings.language);
  };
  
  return { t };
}