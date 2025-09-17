import React, { useEffect, useState } from 'react';
import { Hand, MapPin, Leaf } from 'lucide-react';
import { Page } from '../App';

interface LandingPageProps {
  onNavigate: (page: Page) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-400 via-blue-200 to-green-400 flex items-center justify-center">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-4 border-green-500">
                <Hand className="w-16 h-16 text-blue-600" fill="currentColor" />
                <div className="absolute bottom-2 right-2">
                  <MapPin className="w-6 h-6 text-orange-500" fill="currentColor" />
                </div>
                <div className="absolute top-2 right-2">
                  <Leaf className="w-8 h-8 text-green-600" fill="currentColor" />
                </div>
              </div>
            </div>
          </div>

          {/* App Name */}
          <h1 className="text-5xl font-bold mb-8">
            <span className="text-blue-600">City</span>
            <span className="text-orange-500">Fix</span>
          </h1>

          {/* Loading Text */}
          <div className="text-2xl font-semibold text-gray-800 mb-4">
            LOADING
          </div>

          {/* Loading Animation */}
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce delay-100"></div>
            <div className="w-3 h-3 bg-green-600 rounded-full animate-bounce delay-200"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-400 via-blue-200 to-green-400 flex items-center justify-center">
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative cursor-pointer" onClick={() => onNavigate('login')}>
            <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-4 border-green-500 hover:scale-105 transition-transform duration-300">
              <Hand className="w-16 h-16 text-blue-600" fill="currentColor" />
              <div className="absolute bottom-2 right-2">
                <MapPin className="w-6 h-6 text-orange-500" fill="currentColor" />
              </div>
              <div className="absolute top-2 right-2">
                <Leaf className="w-8 h-8 text-green-600" fill="currentColor" />
              </div>
            </div>
          </div>
        </div>

        {/* App Name */}
        <h1 className="text-5xl font-bold mb-12 cursor-pointer" onClick={() => onNavigate('login')}>
          <span className="text-blue-600">City</span>
          <span className="text-orange-500">Fix</span>
        </h1>

        {/* Coming Soon Message */}
        <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Coming Soon</h2>
          <p className="text-gray-700 mb-6">
            Bridging communities with local authorities for a better tomorrow
          </p>
          <button 
            onClick={() => onNavigate('login')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;