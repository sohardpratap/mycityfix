import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import UserDashboard from './components/UserDashboard';

export type Page = 'landing' | 'login' | 'signup' | 'dashboard';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
  };

  const handleLogin = (email: string, password: string) => {
    // Simple mock login
    setUser({ name: 'User Name', email });
    setCurrentPage('dashboard');
  };

  const handleSignup = (email: string, password: string) => {
    // Simple mock signup
    setUser({ name: 'User Name', email });
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('landing');
  };

  switch (currentPage) {
    case 'landing':
      return <LandingPage onNavigate={navigateTo} />;
    case 'login':
      return <LoginPage onNavigate={navigateTo} onLogin={handleLogin} />;
    case 'signup':
      return <SignupPage onNavigate={navigateTo} onSignup={handleSignup} />;
    case 'dashboard':
      return <UserDashboard user={user} onLogout={handleLogout} />;
    default:
      return <LandingPage onNavigate={navigateTo} />;
  }
}

export default App;