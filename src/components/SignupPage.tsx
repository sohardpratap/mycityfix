import React, { useState } from 'react';
import { Hand, MapPin, Leaf } from 'lucide-react';
import { Page } from '../App';

interface SignupPageProps {
  onNavigate: (page: Page) => void;
  onSignup: (email: string, password: string) => void;
}

const SignupPage: React.FC<SignupPageProps> = ({ onNavigate, onSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password && password === confirmPassword) {
      onSignup(email, password);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-400 via-blue-200 to-green-400 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative cursor-pointer" onClick={() => onNavigate('landing')}>
            <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-4 border-green-500">
              <Hand className="w-12 h-12 text-blue-600" fill="currentColor" />
              <div className="absolute bottom-1 right-1">
                <MapPin className="w-4 h-4 text-orange-500" fill="currentColor" />
              </div>
              <div className="absolute top-1 right-1">
                <Leaf className="w-6 h-6 text-green-600" fill="currentColor" />
              </div>
            </div>
          </div>
        </div>

        {/* App Name */}
        <h1 className="text-4xl font-bold mb-12 text-center cursor-pointer" onClick={() => onNavigate('landing')}>
          <span className="text-blue-600">City</span>
          <span className="text-orange-500">Fix</span>
        </h1>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-800 font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-full border-2 border-blue-300 bg-white/70 backdrop-blur-sm focus:outline-none focus:border-blue-500 transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-gray-800 font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-full border-2 border-blue-300 bg-white/70 backdrop-blur-sm focus:outline-none focus:border-blue-500 transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-gray-800 font-medium mb-2">Correct Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-full border-2 border-blue-300 bg-white/70 backdrop-blur-sm focus:outline-none focus:border-blue-500 transition-colors"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-full transition-colors duration-300"
          >
            Login
          </button>
        </form>

        {/* Back to Login */}
        <div className="text-center mt-6">
          <button
            onClick={() => onNavigate('login')}
            className="text-blue-600 hover:text-blue-700 font-medium underline"
          >
            Already have an account? Login here
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;