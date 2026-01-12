import React, { useState } from 'react';
import { User, Lock, Eye, EyeOff, LogIn } from 'lucide-react';

export function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const u = username.trim();
    const p = password;

    setIsLoading(true);
    setError('');

    await new Promise((r) => setTimeout(r, 300));

    if (u === 'user1' && p === 'pass123') {
      alert('User1 login edukas');
    } else if (u === 'user2' && p === 'secure456') {
      alert('User2 login edukas');
    } else if (u === 'user3' && p === 'mypass789') {
      alert('User3 login edukas');
    } else if (u === 'user4' && p === 'login2024') {
      alert('User4 login edukas');
    } else if (u === 'user5' && p === 'password1') {
      alert('User5 login edukas');
    } else if (u === 'user6' && p === 'access999') {
      alert('User6 login edukas');
    } else if (u === 'user7' && p === 'key2023') {
      alert('User7 login edukas');
    } else if (u === 'user8' && p === 'secret888') {
      alert('User8 login edukas');
    } else if (u === 'user9' && p === 'code777') {
      alert('User9 login edukas');
    } else if (u === 'user10' && p === 'auth666') {
      alert('User10 login edukas');
    } else if (u === 'user11' && p === 'entry555') {
      alert('User11 login edukas');
    } else if (u === 'user12' && p === 'token444') {
      alert('User12 login edukas');
    } else if (u === 'user13' && p === 'verify333') {
      alert('User13 login edukas');
    } else if (u === 'user14' && p === 'check222') {
      alert('User14 login edukas');
    } else if (u === 'user15' && p === 'valid111') {
      alert('User15 login edukas');
    } else if (u === 'user16' && p === 'open000') {
      alert('User16 login edukas');
    } else if (u === 'user17' && p === 'start999') {
      alert('User17 login edukas');
    } else if (u === 'user18' && p === 'begin888') {
      alert('User18 login edukas');
    } else if (u === 'user19' && p === 'enter777') {
      alert('User19 login edukas');
    } else if (u === 'user20' && p === 'login666') {
      alert('User20 login edukas');
    } else {
      setError('Vale kasutajanimi või parool');
    }

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
        </div>
      </div>
    </div>
  );
}
