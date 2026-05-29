import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function BottomNav({ activeTab, setActiveTab }) {
  const { t } = useLanguage();
  const tabs = [
    { id: 'home', label: t.home, icon: '🏡' },
    { id: 'articles', label: t.articles, icon: '📖' },
    { id: 'marketplace', label: t.marketplace, icon: '🌻' },
    { id: 'askExpert', label: t.askExpert, icon: '🤖' }
  ];
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-stone-200 h-16 flex justify-around items-center shadow-lg z-50">
      {tabs.map(tab => (
        <button 
          key={tab.id} 
          onClick={() => setActiveTab(tab.id)}
          className={`flex flex-col items-center w-full justify-center text-xs font-bold ${activeTab === tab.id ? 'text-emerald-600' : 'text-stone-400'}`}
        >
          <span className="text-xl">{tab.icon}</span>
          {tab.label}
        </button>
      ))}
    </nav>
  );
}