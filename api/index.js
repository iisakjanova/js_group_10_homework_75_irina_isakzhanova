const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;
const cors = require('cors');
const bodyParser = require("body-parser");

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());

app.post('/encode', (req, res) => {
    res.send(Vigenere.Cipher(req.body.password).crypt(req.body.text));
});

app.listen(port, () => {
    console.log('We are live in ' + port);
});
