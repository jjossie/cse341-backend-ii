const swaggerAutogen = require('swagger-autogen')();

require('dotenv').config();
const port = process.env.PORT;

const doc = {
  info: {
    title: 'My API',
    description: 'Description'
  },
  host: 'localhost:' + port + '',
  schemes: ['http']
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./app.js'];

/* NOTE: if you use the express Router, you must pass in the
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);