const express = require('express');
const router = express.Router();

router.post('/send-otp', (req, res) => {
  const { phone } = req.body;
  if (!phone) return res.status(400).json({ message: 'Phone number is required' });
  return res.status(200).json({ message: 'OTP sent successfully', mockOtp: '123456' });
});

router.post('/verify-otp', (req, res) => {
  const { phone, otp } = req.body;
  if (otp === '123456') {
    return res.status(200).json({
      token: 'mock-jwt-token-abcd1234',
      user: { phone, preferredLanguage: 'en', name: 'Farmer Friend' }
    });
  }
  return res.status(400).json({ message: 'Invalid OTP code. Try entering 123456' });
});

module.exports = router;