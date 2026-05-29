import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function WeatherWidget() {
  const { t } = useLanguage();
  const [w, setW] = useState({ temp: 30, humidity: 65, advice: "Checking weather..." });

  useEffect(() => {
    fetch('http://localhost:5000/api/data/weather')
      .then(res => res.json())
      .then(data => setW(data))
      .catch(() => setW({ temp: 31, humidity: 60, advice: "Drip-irrigate roses before noon." }));
  }, []);

  return (
    <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200 shadow-sm space-y-2">
      <h3 className="font-black text-amber-900 text-sm">☀️ {t.weatherTitle}</h3>
      <div className="grid grid-cols-2 gap-2 text-xs font-bold text-amber-900">
        <div className="bg-white/80 p-2 rounded-xl">🌡️ {w.temp}°C</div>
        <div className="bg-white/80 p-2 rounded-xl">💧 Humid: {w.humidity}%</div>
      </div>
      <p className="bg-emerald-600 text-white p-2.5 rounded-xl text-xs font-bold">{w.advice}</p>
    </div>
  );
}