const routes = require('express').Router();

const myController = require('../controllers');

routes.get("/name", myController.getName);

module.exports = routes;