const router = require('express').Router();
let doctorDetail = require('../models/doctors.model');

router.route('/').get((req, res) => {
    doctorDetail.find()
    .then(doctors => res.json(doctors))
    .catch(err => res.status(400).json('Error: ' + err));
});

  router.route('/:id').get((req, res) => {
    doctorDetail.findById(req.params.id)
      .then(doctors => res.json(doctors))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;