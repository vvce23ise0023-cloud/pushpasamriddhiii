import React from 'react';

export default function Articles() {
  const guides = [
    { title: "Marigold Seasonal Care & Trimming", text: "Pinch early buds to boost final branching yield.", icon: "🌼" },
    { title: "Natural Organic Neem Solution", text: "Mix 10ml neem oil per liter water for whitefly prevention.", icon: "🍃" }
  ];
  return (
    <div className="space-y-3">
      {guides.map((g, i) => (
        <div key={i} className="bg-white p-4 rounded-2xl border flex gap-3 items-center">
          <span className="text-3xl">{g.icon}</span>
          <div>
            <h4 className="font-black text-sm">{g.title}</h4>
            <p className="text-xs text-stone-500">{g.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}