// Dependencies
const express = require('express');
const contactRoutes = require('./routes/contactRoutes');
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./config/connectionDB');
require('dotenv').config();

// Database Connection
connectDB();

// app instance of express()
const app = express();

// middleware
app.use(express.json());
app.use('/api/contacts', contactRoutes);
app.use(errorHandler);

// PORT
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`);
});
