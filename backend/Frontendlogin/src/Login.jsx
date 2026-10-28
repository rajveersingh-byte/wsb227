import axios from 'axios';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const nav = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const credentials = {
      Email: form.Email.value,
      Password: form.Password.value,
    };

    setIsLoading(true);
    setIsSuccess(false);
    setErrorMessage('');

    try {
      const apiBaseUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';
      const response = await axios.post(
        `${apiBaseUrl}/web/user/login-user`,
        credentials,
      );

      console.log(response.data)

      if (!response.data?.token) {
        throw new Error(response.data?.message || 'The server did not return an authentication token.');
      }

      Cookies.set('authtoken', response.data.token, {
        expires: rememberMe ? 7 : undefined,
        path: '/',
        sameSite: 'lax',
      });
      window.dispatchEvent(new Event('auth-change'));
      setIsSuccess(true);
      form.reset();
      nav('/');
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message
          || error.response?.data?._message
          || error.message
          || 'Unable to sign in. Please try again.',
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full flex items-center justify-center p-4 relative overflow-hidden font-sans">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-md bg-slate-900/80 border border-slate-800/80 backdrop-blur-xl rounded-2xl p-8 shadow-2xl relative z-10 transition-all duration-300">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold tracking-tight text-white">Login</h1>
          <p className="text-sm text-slate-400 mt-1">Please enter your details to sign in</p>
        </div>

        {isSuccess && (
          <div className="mb-6 p-3 bg-emerald-500/15 border border-emerald-500/30 rounded-xl text-emerald-400 text-xs text-center font-medium animate-fadeIn">
            Login successful! Redirecting...
          </div>
        )}
        {errorMessage && (
          <div role="alert" className="mb-6 p-3 bg-red-500/15 border border-red-500/30 rounded-xl text-red-300 text-xs text-center font-medium">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="login-email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
              Email Address
            </label>
            <input
              id="login-email"
              type="email"
              required
              name="Email"
              autoComplete="email"
              placeholder="name@example.com"
              className="w-full px-4 py-3 rounded-xl text-sm bg-slate-950/60 border border-slate-800 text-white placeholder-slate-500 outline-none transition-all duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>

          <div>
            <label htmlFor="login-password" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
              Password
            </label>
            <div className="relative group">
              <input
                id="login-password"
                type={showPassword ? 'text' : 'password'}
                required
                name="Password"
                autoComplete="current-password"
                placeholder="••••••••••••"
                className="w-full px-4 pr-16 py-3 rounded-xl text-sm bg-slate-950/60 border border-slate-800 text-white placeholder-slate-500 outline-none transition-all duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs text-slate-400 hover:text-slate-200 transition-colors"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between pt-1">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded border-slate-700 bg-slate-950 text-indigo-600 focus:ring-indigo-500/20 accent-indigo-600"
              />
              <span className="text-xs text-slate-400 hover:text-slate-300 transition-colors">Remember me</span>
            </label>
            <a
              href="#forgot-password"
              className="text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-2 py-3 px-4 rounded-xl font-medium text-white text-sm bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-indigo-600/25 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              <span>Sign In</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
