const swaggerAutogen = require('swagger-autogen')();

require('dotenv').config();
const port = process.env.PORT;

const doc = {
  info: {
    title: 'My API',
    description: 'Description'
  },
  definitions: {
    Contact: {
      $firstName: "Josh",
      $lastName: "Allen",
      $email: "joshallen@gmail.com",
      $favoriteColor: "blue",
      $birthday: "1995-05-22T07:00:00.000Z"
    },
    Contacts: [{
      $firstName: "Josh",
      $lastName: "Allen",
      $email: "joshallen@gmail.com",
      $favoriteColor: "blue",
      $birthday: "1995-05-22T07:00:00.000Z"
    }]
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