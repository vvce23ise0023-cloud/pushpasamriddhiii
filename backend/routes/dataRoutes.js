const express = require('express');
const router = express.Router();

router.get('/weather', (req, res) => {
  res.json({
    temp: 29,
    humidity: 68,
    rain: '10%',
    wind: '12 km/h',
    advice: 'Perfect dry weather for harvesting Marigolds today. Keep drip irrigation low.'
  });
});

module.exports = router;