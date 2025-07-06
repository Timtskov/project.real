import React from 'react';
import { CheckCircle, XCircle, Loader2, Wifi, WifiOff } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { cloudStorage } from '../services/cloudStorage';

export function SaveStatusIndicator() {
  const { state } = useApp();
  const isOnline = cloudStorage.getConnectionStatus();
  const pendingSync = cloudStorage.getPendingSyncCount();

  const getStatusIcon = () => {
    switch (state.saveStatus.status) {
      case 'saving':
        return <Loader2 className="w-4 h-4 animate-spin text-blue-500" />;
      case 'saved':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'error':
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusMessage = () => {
    if (state.saveStatus.status === 'idle') {
      if (!isOnline && pendingSync > 0) {
        return `${pendingSync} muudatust ootab sünkroniseerimist`;
      }
      return '';
    }
    return state.saveStatus.message;
  };

  if (state.saveStatus.status === 'idle' && isOnline && pendingSync === 0) {
    return null;
  }

  return (
    <div className={`fixed top-4 right-4 z-50 flex items-center space-x-2 px-4 py-2 rounded-xl shadow-lg backdrop-blur-sm transition-all duration-300 ${
      state.settings.darkMode 
        ? 'bg-gray-800/90 border border-gray-700' 
        : 'bg-white/90 border border-gray-200'
    }`}>
      {/* Connection Status */}
      <div className="flex items-center space-x-1">
        {isOnline ? (
          <Wifi className="w-4 h-4 text-green-500" />
        ) : (
          <WifiOff className="w-4 h-4 text-red-500" />
        )}
      </div>

      {/* Save Status */}
      {getStatusIcon() && (
        <div className="flex items-center space-x-2">
          {getStatusIcon()}
          <span className={`text-sm font-medium ${
            state.settings.darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            {getStatusMessage()}
          </span>
        </div>
      )}

      {/* Offline Indicator */}
      {!isOnline && (
        <span className={`text-xs ${
          state.settings.darkMode ? 'text-gray-400' : 'text-gray-500'
        }`}>
          Võrguühenduseta
        </span>
      )}
    </div>
  );
}