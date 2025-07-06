import React from 'react';
import { AppProvider, useApp } from './contexts/AppContext';
import { LoginScreen } from './components/LoginScreen';
import { HomePage } from './components/HomePage';
import { SubjectSelection } from './components/SubjectSelection';
import { LearnMode } from './components/LearnMode';
import { PracticeMode } from './components/PracticeMode';
import { SettingsPage } from './components/SettingsPage';
import { AddContentPage } from './components/AddContentPage';
import { SaveStatusIndicator } from './components/SaveStatusIndicator';

function AppContent() {
  const { state, dispatch } = useApp();

  const handleLogin = (username: string) => {
    dispatch({ type: 'SET_USER', payload: username });
  };

  const renderCurrentView = () => {
    switch (state.currentMode) {
      case 'home':
        return <HomePage />;
      case 'learn':
        if (state.selectedSubject) {
          return <LearnMode />;
        }
        return <SubjectSelection mode="learn" />;
      case 'practice':
        if (state.selectedSubject) {
          return <PracticeMode />;
        }
        return <SubjectSelection mode="practice" />;
      case 'settings':
        return <SettingsPage />;
      case 'add-content':
        return <AddContentPage />;
      default:
        return <HomePage />;
    }
  };

  // Show login screen if no user is logged in
  if (!state.currentUser) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  // Show loading screen while data is loading
  if (state.isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Andmete laadimine...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans antialiased">
      <SaveStatusIndicator />
      {renderCurrentView()}
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;