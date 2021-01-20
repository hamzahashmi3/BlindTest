const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactSchema = new Schema({
  name: { 
      type: String,
      required: true
    },
    address:{
      type: String,
      required: true
    },
    subject:{
      type: String,
      required: true
    },
    message: { 
      type: String,
      required: true
    },
}, {
  timestamps: true,
});

const contact = mongoose.model('contactUs', contactSchema);

module.exports = contact;