require('dotenv').config()
let express = require('express');
let app = express();
let db_test = require('./db');
const port = 3341;

app.use('/', require('./routes'));

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    console.log(`Connecting to mongodb`);
    db_test.mongo_connect()
      .then()
      .catch(e => console.log(e));
});