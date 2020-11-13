const router = require('express').Router();
let doctors = require('../models/doctors.module');

router.route('/').get((req, res) => {
    doctors.find()
    .then(doctors => res.json(doctors))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const fees = Number(req.body.fees);
  const date = Date.parse(req.body.date);

  const newDoctors = new doctors({
    name,
    description,
    fees,
    date,
  });

  router.route('/:id').get((req, res) => {
    doctors.findById(req.params.id)
      .then(doctors => res.json(doctors))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/:id').delete((req, res) => {
    doctors.findByIdAndDelete(req.params.id)
      .then(() => res.json('doctor deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/update/:id').post((req, res) => {
    doctors.findById(req.params.id)
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

  newDoctors.save()
  .then(() => res.json('Doctor added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;