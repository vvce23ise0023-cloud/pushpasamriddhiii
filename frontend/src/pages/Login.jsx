import React, { useState } from 'react';

export default function Login({ onLoginSuccess }) {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1);

  const sendOtp = () => {
    if (phone.length < 10) return alert("Enter valid phone");
    setStep(2);
  };

  const verifyOtp = () => {
    if (otp === '123456') {
      onLoginSuccess('mock-token-123');
    } else {
      alert("Please enter default testing code: 123456");
    }
  };

  return (
    <div className="min-h-screen bg-stone-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-sm p-6 rounded-3xl shadow-xl space-y-4 border border-stone-200">
        <div className="text-center">
          <span className="text-4xl">🌸</span>
          <h2 className="text-xl font-black text-emerald-600">PushpaSamriddhi Portal</h2>
        </div>
        {step === 1 ? (
          <div className="space-y-3">
            <input type="tel" placeholder="Mobile Number (मोबाइल नंबर)" value={phone} onChange={e => setPhone(e.target.value)} className="w-full p-4 border-2 rounded-xl text-center font-bold outline-none" />
            <button onClick={sendOtp} className="w-full bg-emerald-600 text-white py-3.5 rounded-xl font-black">Get OTP (ओटीपी भेजें)</button>
          </div>
        ) : (
          <div className="space-y-3">
            <input type="text" placeholder="Enter 123456" value={otp} onChange={e => setOtp(e.target.value)} className="w-full p-4 border-2 rounded-xl text-center font-black text-xl tracking-widest outline-none" />
            <button onClick={verifyOtp} className="w-full bg-emerald-600 text-white py-3.5 rounded-xl font-black">Login (लॉगिन करें)</button>
          </div>
        )}
      </div>
    </div>
  );
}