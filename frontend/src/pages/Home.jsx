import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import WeatherWidget from '../components/WeatherWidget';

export default function Home({ setActiveTab }) {
  const { t } = useLanguage();
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
      <input type="text" placeholder={t.searchPlaceholder} className="w-full p-3 border rounded-xl bg-white shadow-sm font-bold text-sm outline-none" />
      <WeatherWidget />
      <div onClick={() => setActiveTab('askExpert')} className="bg-emerald-600 text-white p-4 rounded-2xl flex justify-between items-center cursor-pointer shadow">
        <div>
          <h4 className="font-black text-sm">🎙️ Voice & Crop Disease AI Assistant</h4>
          <p className="text-[11px] opacity-90">Tap to upload picture of infected flowers</p>
        </div>
        <span className="text-2xl">➔</span>
      </div>
    </motion.div>
  );
}