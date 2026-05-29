import React, { useState } from 'react';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Marketplace from './pages/Marketplace';
import AskExpert from './pages/AskExpert';
import Login from './pages/Login';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [activeTab, setActiveTab] = useState('home');

  if (!token) return <Login onLoginSuccess={(tk) => { localStorage.setItem('token', tk); setToken(tk); }} />;

  return (
    <LanguageProvider>
      <div className="min-h-screen pb-20 bg-stone-50">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="max-w-md mx-auto px-4 pt-4">
          {activeTab === 'home' && <Home setActiveTab={setActiveTab} />}
          {activeTab === 'articles' && <Articles />}
          {activeTab === 'marketplace' && <Marketplace />}
          {activeTab === 'askExpert' && <AskExpert />}
        </main>
        <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </LanguageProvider>
  );
}