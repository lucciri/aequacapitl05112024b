import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { Loader2, Mail } from 'lucide-react';

const EmailVerification: React.FC = () => {
  const { user, resendVerificationEmail, logout } = useAuth();
  const [loading, setLoading] = React.useState(false);

  const handleResendEmail = async () => {
    setLoading(true);
    try {
      await resendVerificationEmail();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md mx-4">
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <Mail className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Verify your email</h2>
          <p className="text-gray-600 mb-6">
            We've sent a verification email to <strong>{user?.email}</strong>. 
            Please check your inbox and click the verification link to continue.
          </p>

          <div className="space-y-4">
            <button
              onClick={handleResendEmail}
              disabled={loading}
              className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 flex items-center justify-center space-x-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <span>Resend verification email</span>
              )}
            </button>

            <button
              onClick={() => logout()}
              className="w-full py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;