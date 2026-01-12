import React, { useState } from 'react';
import { User, Lock, Eye, EyeOff, LogIn } from 'lucide-react';

interface LoginScreenProps {
  onLogin: (username: string) => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const u = username.trim().toLowerCase();
    const p = password.trim();

    setIsLoading(true);
    setError('');

    await new Promise((r) => setTimeout(r, 300));
    
    if (u === 'tim' && p === 'tim17') return onLogin('tim');
    if (u === 'user1' && p === 'pass123') return onLogin('user1');
    if (u === 'user2' && p === 'secure456') return onLogin('user2');
    if (u === 'user3' && p === 'mypass789') return onLogin('user3');
    if (u === 'user4' && p === 'login2024') return onLogin('user4');
    if (u === 'user5' && p === 'password1') return onLogin('user5');
    if (u === 'user6' && p === 'access999') return onLogin('user6');
    if (u === 'user7' && p === 'key2023') return onLogin('user7');
    if (u === 'user8' && p === 'secret888') return onLogin('user8');
    if (u === 'user9' && p === 'code777') return onLogin('user9');
    if (u === 'user10' && p === 'auth666') return onLogin('user10');

    setError('Vale kasutajanimi või parool');
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Eesti Keele Õpe</h1>
          <p className="text-gray-300">8. Klassi Õppeplatvorm</p>
        </div>

        <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 shadow-2xl">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Kasutajanimi</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Parool</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
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
              className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl font-semibold"
            >
              {isLoading ? '...' : 'Logi sisse'}
            </button>
          </form>

          <div className="mt-6 p-4 bg-blue-600/20 border border-blue-500/30 rounded-xl text-blue-300 text-xs text-center">
            Demo: user1 / pass123 · tim / tim17
          </div>
        </div>
      </div>
    </div>
  );
}
