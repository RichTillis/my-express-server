const express = require('express');
const cors = require('cors');

const app = express();

app.get('/', function (req, res) {
    res.send('Hello World. CORS-enabled web server listening on port 3000')
});

app.get('/json-example', function (req, res) {
    res.json({
        msg: 'Hello World. CORS-enabled web server listening on port 3000',
        fakeValue: '1234'
    })
});

app.use(cors());

app.use(function (req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist");
});

app.listen(3000);