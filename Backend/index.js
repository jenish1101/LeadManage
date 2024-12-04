// index.js
const express = require('express');
const cors = require('cors');
const messageRoutes = require('./routes/Message_Routes');

const app = express();
const port = process.env.PORT  || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/messages', messageRoutes);


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



