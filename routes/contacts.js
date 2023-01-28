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
/* #swagger.responses[200] = {
    description: 'Get All Contacts',
    schema: { $ref: '#/definitions/Contacts' }
} */
  getAllContacts()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

routes.get('/:contactId', (req, res) => {
/* #swagger.responses[200] = {
    description: 'Get One Contact by ID',
    schema: { $ref: '#/definitions/Contact' }
} */
  getContactById(req.params.contactId)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

routes.post('/', (req, res) => {
/* #swagger.parameters['contact'] = {
    in: 'body',
    description: 'Create a new contact',
    schema: { $ref: '#/definitions/Contact' }
} */
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
/* #swagger.parameters['contact'] = {
    in: 'body',
    description: 'Update a single contact',
    schema: { $ref: '#/definitions/Contact' }
}
   #swagger.responses[204] = {
    description: 'Updated successfully'
}*/
  const contactId = req.params.contactId;
  const updatedContact = req.body;
  if (updatedContact && contactId) {
    updateContact(contactId, updatedContact)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  } else {
    res.status(400).send('Missing required contact info');
  }
});

routes.delete('/:contactId', (req, res) => {
  /* #swagger.responses[200] = {
    description: 'Contact successfully deleted',
    schema: { $ref: '#/definitions/Contact' }
} */
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
