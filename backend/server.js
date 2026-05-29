const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const marketRoutes = require('./routes/marketRoutes');
const dataRoutes = require('./routes/dataRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Base test route
app.get('/', (req, res) => res.send('PushpaSamriddhi API running'));

// Setup Routes
app.use('/api/auth', authRoutes);
app.use('/api/marketplace', marketRoutes);
app.use('/api/data', dataRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));