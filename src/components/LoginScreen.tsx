import React, { useState } from 'react';
import { User, Lock, Eye, EyeOff, LogIn } from 'lucide-react';
import { useAudio } from '../hooks/useAudio';

interface LoginScreenProps {
  onLogin: (username: string) => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { playClick, playHover, playError, playSuccess } = useAudio();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Define valid users with their passwords
    const validUsers: { [key: string]: string } = {
      'tim': 'tim17',
      'user1': 'pass123',
      'user2': 'secure456',
      'user3': 'mypass789',
      'user4': 'login2024',
      'user5': 'password1',
      'user6': 'access999',
      'user7': 'key2023',
      'user8': 'secret888',
      'user9': 'code777',
      'user10': 'auth666',
      'user11': 'entry555',
      'user12': 'token444',
      'user13': 'verify333',
      'user14': 'check222',
      'user15': 'valid111',
      'user16': 'open000',
      'user17': 'start999',
      'user18': 'begin888',
      'user19': 'enter777',
      'user20': 'login666'
    };

    const userKey = username.toLowerCase();
    if (validUsers[userKey] && password === validUsers[userKey]) {
      playSuccess();
      onLogin(username);
    } else {
      playError();
      setError('Vale kasutajanimi või parool');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo/Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Eesti Keele Õpe</h1>
          <p className="text-gray-300">8. Klassi Platvorm</p>
        </div>

        {/* Login Form */}
        <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 shadow-2xl">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Kasutajanimi
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
                  placeholder="Sisesta kasutajanimi"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Parool
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
                  placeholder="Sisesta parool"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  onMouseEnter={playHover}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-3 text-red-300 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              onMouseEnter={playHover}
              className={`w-full flex items-center justify-center space-x-2 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                isLoading
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg hover:shadow-xl'
              }`}
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <LogIn className="w-5 h-5" />
                  <span>Logi sisse</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}