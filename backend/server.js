const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config');

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: config.corsOrigin, credentials: true }));

// Connect to MongoDB
mongoose.connect(config.mongoURI)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));

const PORT = config.port;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 