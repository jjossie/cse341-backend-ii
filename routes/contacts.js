// noinspection JSUnresolvedVariable

const routes = require('express').Router();

const {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact
} = require('../controllers/contacts');

routes.get('/', (req, res) => {
  getAllContacts()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

routes.get('/:contactId', (req, res) => {
  getContactById(req.params.contactId)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

routes.post('/', (req, res) => {
  const newContact = req.body;
  createContact(newContact)
    .then((id) => {
      res.status(201).json({
        id: id
      });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

routes.put('/:contactId', (req, res) => {
  const contactId = req.params.contactId;
  const updatedContact = req.body;
  if (updatedContact && contactId) {
    updateContact(contactId, updatedContact)
      .then(() => {
        res.status(204);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  } else {
    res.status(400).send('Missing required contact info');
  }
});

routes.delete('/:contactId', (req, res) => {
  const contactId = req.params.contactId;
  deleteContact(contactId)
    .then((deletedResult) => {
      res.status(200).json(deletedResult);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = routes;
