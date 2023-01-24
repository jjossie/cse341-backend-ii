const routes = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger-output.json');

routes.use('/api-docs', swaggerUi.serve);
routes.get('/api-docs', swaggerUi.setup(swaggerDocument));

const myController = require('../controllers');

routes.use("/contacts", require('./contacts'));

routes.get("/", myController.hello);
routes.get("/names", myController.getNames);

module.exports = routes;