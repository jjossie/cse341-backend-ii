// Set up Express
let express = require('express');
let cors = require('cors');
let app = express();

// Use CORS or so help me I will hunt down every web browser on the planet and disable all security policies then release a virus the likes of which have never been imagined by mankind that will eliminate all computers as we know them and plunge this digital-era society back to the stone age if i get one more heaven-forsaken CORS error this will be the fate and the inevitable downfall of mankind
app.use(cors());


// Middlewares / Routes
app.use(express.json());

// let whitelist = ['https://cse341-contacts-frontend.netlify.app'];
// let corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   }
// };

app.use('/', require('./routes'));


// Modules
let db = require('./db');

// Config
require('dotenv').config();

db.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(process.env.PORT, () => {
      console.log(`Listening on port ${process.env.PORT}`);
    });
  }
});
