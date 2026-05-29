import React, { useState } from 'react';

export default function AskExpert() {
  const [chat, setChat] = useState([{ side: 'ai', text: 'Ram Ram! Send a photo or text your plant question.' }]);
  const [box, setBox] = useState('');

  const send = () => {
    if(!box.trim()) return;
    setChat(p => [...p, { side: 'user', text: box }, { side: 'ai', text: 'Analyzing... Keep your plant in filtered morning sunlight and prevent direct water stagnation.' }]);
    setBox('');
  };

  return (
    <div className="flex flex-col h-[70vh] justify-between">
      <div className="space-y-2 overflow-y-auto p-1">
        {chat.map((c, i) => (
          <div key={i} className={`flex ${c.side === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`p-3 rounded-2xl text-xs font-bold max-w-[80%] ${c.side === 'user' ? 'bg-emerald-600 text-white' : 'bg-white border'}`}>
              {c.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2 bg-white p-2 border rounded-xl items-center shadow-sm">
        <input type="text" placeholder="Type problem or remedy..." value={box} onChange={e=>setBox(e.target.value)} className="w-full p-2 text-xs outline-none font-bold" />
        <button onClick={send} className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-black text-xs">Send</button>
      </div>
    </div>
  );
}