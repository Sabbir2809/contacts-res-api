// Dependencies
const express = require('express');
const contactRoutes = require('./routes/contactRoutes');
const connectDB = require('./config/connectionDB');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

// app instance of express()
const app = express();

// Database Connection
connectDB();

// middleware
app.use(express.json());
app.use('/api/contacts', contactRoutes);
app.use('/api/users', userRoutes);

// PORT
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`);
});
