import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Loader2 } from 'lucide-react';

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });
  const { login, signup, resetPassword } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (showResetPassword) {
        await resetPassword(formData.email);
        setShowResetPassword(false);
      } else if (isLogin) {
        await login(formData.email, formData.password);
      } else {
        await signup(formData.email, formData.password, formData.name);
      }
    } catch (error) {
      console.error('Auth error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Blurred Background Dashboard */}
      <div className="absolute inset-0 filter blur-sm opacity-30">
        <div className="p-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Industry Distribution</h3>
              <div className="h-48 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full border-8 border-blue-500 border-t-transparent animate-spin"></div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Portfolio Performance</h3>
              <div className="h-48 bg-gray-100 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Auth Modal */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md mx-4">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">ÆquaCapital</h1>
            <p className="text-gray-600 mt-2">
              {showResetPassword 
                ? 'Reset your password'
                : isLogin 
                  ? 'Sign in to your account' 
                  : 'Create your account'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && !showResetPassword && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {!showResetPassword && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 flex items-center justify-center space-x-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <span>
                  {showResetPassword 
                    ? 'Send Reset Link'
                    : isLogin 
                      ? 'Sign In' 
                      : 'Create Account'}
                </span>
              )}
            </button>

            <div className="text-center space-y-2">
              {isLogin && !showResetPassword && (
                <button
                  type="button"
                  onClick={() => setShowResetPassword(true)}
                  className="text-sm text-blue-600 hover:text-blue-700 block w-full"
                >
                  Forgot your password?
                </button>
              )}

              <button
                type="button"
                onClick={() => {
                  setIsLogin(!isLogin);
                  setShowResetPassword(false);
                }}
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
              </button>

              {showResetPassword && (
                <button
                  type="button"
                  onClick={() => setShowResetPassword(false)}
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  Back to sign in
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;