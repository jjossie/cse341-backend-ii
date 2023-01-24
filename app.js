// Set up Express
let express = require('express');
let cors = require('cors');
let app = express();

// Middlewares / Routes
app.use(express.json());

let whitelist = ['https://cse341-contacts-frontend.netlify.app'];
let corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(cors(corsOptions));
app.use('/', require('./routes'));


// Modules
let db = require('./db');

// Config
require('dotenv').config();

db.initDb((err, client) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(process.env.PORT, () => {
      console.log(`Listening on port ${process.env.PORT}`);
    });
  }
});
