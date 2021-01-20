const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    name: { 
      type: String,
      required: true
    },
    phone: { 
      type: Number,
      required: true
    },
    emailAddress: { 
      type: String,
      required: true
    },
    dateOfBirth: { 
        type: Date,
        required: true
    },
    appointmentDate: {
        type: Date,
        required: true
    },
    message: {
        type: String,
        required: true
    } },
    {timestamps: true,
});

const appointments = mongoose.model('AppointmentBookings', appointmentSchema);

module.exports = appointments;