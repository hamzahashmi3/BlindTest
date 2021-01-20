const router = require('express').Router();
let contact = require('../models/contact.model');

router.route('/').get((req, res) => {
    contact.find()
    .then(contact => res.json(contact))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const address = req.body.address;
  const subject = req.body.subject;
  const message = req.body.message;

  const newcontact = new contact({
    name,
    address,
    subject,
    message
  });

  router.route('/:id').get((req, res) => {
    contact.findById(req.params.id)
      .then(contact => res.json(contact))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/:id').delete((req, res) => {
    contact.findByIdAndDelete(req.params.id)
      .then(() => res.json('Message deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/update/:id').post((req, res) => {
    contact.findById(req.params.id)
      .then(contact => {
        contact.name = req.body.name;
        contact.address = req.body.address;
        contact.subject = req.body.subject;
        contact.message = req.body.message;
  
        contact.save()
          .then(() => res.json('message updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

  newcontact.save()
  .then(() => res.json('message added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;