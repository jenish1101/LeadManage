// models/Message.js
const mongoose = require('mongoose');

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/TableMessages', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error('MongoDB connection error:', err));
  

const messageSchema = new mongoose.Schema({
  status: String,
  crm: String,
  contact: {
    name: String,
    phone: String,
  },
  details: {
    cd: String,
    by: String,
    to: String,
    nfd: String,
  },
  icons: {
    delete: String,
    link: String,
    trendUp: String,
    email: String,
    message: String,
    whatsapp: String,
    building: String,
    userPlus: String,
    send: String,
  },
});

module.exports = mongoose.model('message', messageSchema);
