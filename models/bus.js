const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
  rota: String,
}, { collection: 'bus' });

module.exports = mongoose.model('bus', busSchema);