import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar({ activeTab, setActiveTab }) {
  const { lang, setLang } = useLanguage();
  return (
    <header className="bg-emerald-600 text-white p-4 sticky top-0 shadow-md flex justify-between items-center z-50">
      <h1 className="text-lg font-black tracking-tight flex items-center gap-1">🌸 PushpaSamriddhi</h1>
      <select 
        value={lang} 
        onChange={(e) => setLang(e.target.value)}
        className="bg-emerald-700 text-white font-bold p-1 rounded border border-emerald-500 text-sm outline-none"
      >
        <option value="en">English</option>
        <option value="hi">हिंदी</option>
        <option value="kn">ಕನ್ನಡ</option>
        <option value="ta">தமிழ்</option>
        <option value="mr">मराठी</option>
      </select>
    </header>
  );
}