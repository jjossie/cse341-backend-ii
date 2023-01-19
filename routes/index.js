const routes = require('express').Router();

const myController = require('../controllers');

routes.use("/contacts", require('./contacts'));

routes.get("/", myController.hello);
routes.get("/names", myController.getNames);

module.exports = routes;