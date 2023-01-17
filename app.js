let express = require('express');
let app = express();

const port = 3341;

app.use('/', require('./routes'));

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});