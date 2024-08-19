const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  id:mongoose.Schema.Types.ObjectId,
  title: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model('Card', cardSchema);
