const routes = require('express').Router();

const { getAllContacts, getContactById } = require('../controllers/contacts');

routes.get("/", (req, res) => {
  // res.json(getAllContacts());
  getAllContacts()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.sendStatus(400);
    });
});

module.exports = routes;