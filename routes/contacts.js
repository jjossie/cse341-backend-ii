const routes = require('express').Router();

const { getAllContacts, getContactById } = require('../controllers/contacts');

routes.get('/', (req, res) => {
  // res.json(getAllContacts());
  getAllContacts()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// eslint-disable-next-line no-unused-vars
routes.get('/:contactId', (req, res) => {
  getContactById(req.params.contactId)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = routes;
