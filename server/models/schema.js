const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  f_name: String,
  l_name: String,
  email: String,
  pno: Int32Array,
});

module.exports = mongoose.model('Contact', contactSchema);
