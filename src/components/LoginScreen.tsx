<!DOCTYPE html>
<html lang="et">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login Demo</title>
  <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@3.3.3/dist/tailwind.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/lucide@0.258.0/dist/lucide.min.js"></script>
</head>
<body class="bg-gray-900">

<div id="root"></div>

<script type="text/babel">

const { useState } = React;
const { User, Lock, Eye, EyeOff, LogIn } = lucide;

function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    await new Promise(r => setTimeout(r, 300));

    // Kontrollime 20 kindlat kasutajat/parooli
    if (username === 'user1' && password === 'pass123') alert('User1 login edukas');
    else if (username === 'user2' && password === 'secure456') alert('User2 login edukas');
    else if (username === 'user3' && password === 'mypass789') alert('User3 login edukas');
    else if (username === 'user4' && password === 'login2024') alert('User4 login edukas');
    else if (username === 'user5' && password === 'password1') alert('User5 login edukas');
    else if (username === 'user6' && password === 'access999') alert('User6 login edukas');
    else if (username === 'user7' && password === 'key2023') alert('User7 login edukas');
    else if (username === 'user8' && password === 'secret888') alert('User8 login edukas');
    else if (username === 'user9' && password === 'code777') alert('User9 login edukas');
    else if (username === 'user10' && password === 'auth666') alert('User10 login edukas');
    else if (username === 'user11' && password === 'entry555') alert('User11 login edukas');
    else if (username === 'user12' && password === 'token444') alert('User12 login edukas');
    else if (username === 'user13' && password === 'verify333') alert('User13 login edukas');
    else if (username === 'user14' && password === 'check222') alert('User14 login edukas');
    else if (username === 'user15' && password === 'valid111') alert('User15 login edukas');
    else if (username === 'user16' && password === 'open000') alert('User16 login edukas');
    else if (username === 'user17' && password === 'start999') alert('User17 login edukas');
    else if (username === 'user18' && password === 'begin888') alert('User18 login edukas');
    else if (username === 'user19' && password === 'enter777') alert('User19 login edukas');
    else if (username === 'user20' && password === 'login666') alert('User20 login edukas');
    else setError('Vale kasutajanimi või parool');

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 shadow-2xl">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Eesti Keele Õpe</h1>
          <p className="text-gray-300">8. Klassi Õppeplatvorm</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Kasutajanimi</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                value={username}
                onChange={e => setUsername(e.target.value)}
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
                onChange={e => setPassword(e.target.value)}
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
          {error && <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-3 text-red-300 text-sm">{error}</div>}
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
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<LoginScreen />);
</script>

</body>
</html>
