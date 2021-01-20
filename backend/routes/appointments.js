const router = require('express').Router();
let appointment = require('../models/appointmentBooking.model');

router.route('/').get((req, res) => {
    appointment.find()
    .then(appointments => res.json(appointments))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const phone = Number(req.body.phone);
  const emailAddress = req.body.emailAddress;
  const dateOfBirth = Date.parse(req.body.dateOfBirth);
  const appointmentDate = Date.parse(req.body.appointmentDate);
  const message = req.body.message;

  const newAppointmentBooking = new appointment({
    name,
    phone,
    emailAddress,
    dateOfBirth,
    appointmentDate,
    message
  });

  router.route('/:id').get((req, res) => {
    appointment.findById(req.params.id)
      .then(appointments => res.json(appointments))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/:id').delete((req, res) => {
    appointment.findByIdAndDelete(req.params.id)
      .then(() => res.json('Appointment deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/update/:id').post((req, res) => {
    appointment.findById(req.params.id)
      .then(doctors => {
        doctors.name = req.body.name;
        doctors.description = req.body.description;
        doctors.fees = Number(req.body.fees);
        doctors.date = Date.parse(req.body.date);
  
        doctors.save()
          .then(() => res.json('doctors updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

  newAppointmentBooking.save()
  .then(() => res.json('Appointment added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;