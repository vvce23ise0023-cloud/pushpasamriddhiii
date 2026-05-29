const express = require('express');
const router = express.Router();

// Simulated database array
let mockListings = [
  { _id: '1', sellerName: 'Ramesh Kumar', flowerType: 'Marigold (गेंदा)', quantity: '150 kg', price: 40, location: 'Mysuru Mandi' },
  { _id: '2', sellerName: 'Suresh Gowda', flowerType: 'Rose (गुलाब)', quantity: '80 bundles', price: 110, location: 'Gundlupet Area' }
];

router.get('/', (req, res) => res.json(mockListings));

router.post('/', (req, res) => {
  const { flowerType, quantity, price, location, sellerName } = req.body;
  const newListing = {
    _id: String(mockListings.length + 1),
    sellerName: sellerName || 'Local Farmer',
    flowerType, quantity, price: Number(price), location
  };
  mockListings.unshift(newListing);
  res.status(201).json(newListing);
});

module.exports = router;