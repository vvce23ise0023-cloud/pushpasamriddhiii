import React, { useState, useEffect } from 'react';

export default function Marketplace() {
  const [list, setList] = useState([]);
  const [flower, setFlower] = useState('');
  const [qty, setQty] = useState('');
  const [price, setPrice] = useState('');
  const [loc, setLoc] = useState('');

  const refreshData = () => {
    fetch('http://localhost:5000/api/marketplace')
      .then(res => res.json())
      .then(data => setList(data));
  };

  useEffect(() => { refreshData(); }, []);

  const postAd = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/marketplace', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ flowerType: flower, quantity: qty, price, location: loc })
    }).then(() => {
      setFlower(''); setQty(''); setPrice(''); setLoc('');
      refreshData();
    });
  };

  return (
    <div className="space-y-4">
      <form onSubmit={postAd} className="bg-white p-4 rounded-2xl border space-y-2 shadow-sm">
        <h4 className="font-black text-xs text-stone-500 uppercase">Sell Your Crop</h4>
        <input type="text" placeholder="Flower Name" value={flower} onChange={e=>setFlower(e.target.value)} className="w-full p-2.5 border text-xs rounded-lg outline-none" required />
        <input type="text" placeholder="Quantity (e.g. 100 kg)" value={qty} onChange={e=>setQty(e.target.value)} className="w-full p-2.5 border text-xs rounded-lg outline-none" required />
        <input type="number" placeholder="Price per kg" value={price} onChange={e=>setPrice(e.target.value)} className="w-full p-2.5 border text-xs rounded-lg outline-none" required />
        <input type="text" placeholder="Mandi / Market Village" value={loc} onChange={e=>setLoc(e.target.value)} className="w-full p-2.5 border text-xs rounded-lg outline-none" required />
        <button className="w-full bg-emerald-600 text-white py-2 rounded-lg font-black text-sm">Submit Offer</button>
      </form>
      <div className="space-y-2">
        {list.map((item, i) => (
          <div key={i} className="bg-white p-3 rounded-xl border flex justify-between items-center text-sm">
            <div>
              <span className="font-black block">{item.flowerType}</span>
              <span className="text-xs text-stone-400">{item.location} • Qty: {item.quantity}</span>
            </div>
            <span className="font-black text-emerald-600">₹{item.price}/kg</span>
          </div>
        ))}
      </div>
    </div>
  );
}