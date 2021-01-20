const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();
//this is used to configure, so that we can have our envirnment variable in a .env file
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


const AppointmentBookingRouter = require('./routes/appointments');
const doctorsDetailRouter = require('./routes/doctorDetail');
const doctorsRouter = require('./routes/doctors');
const usersRouter = require('./routes/users');
const contactRouter = require('./routes/contact');

app.use('/contact', contactRouter);
app.use('/appointments', AppointmentBookingRouter);
app.use('/doctors', doctorsRouter);
app.use('/doctorDetail', doctorsDetailRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
