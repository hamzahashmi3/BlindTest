const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const doctorSchema = new Schema({
  name: { 
      type: String,
      required: true
    },
    img:{
      type: String,
      required: true
    },
    intro:{
      type: String,
      required: true
    },
    Biography:{
      type: String,
      required: true
    },
    description: { 
      type: String,
      required: true
    },
    fees: { 
      type: Number,
      required: true
    }
}, {
  timestamps: true,
});

const doctors = mongoose.model('doctors', doctorSchema);

module.exports = doctors;