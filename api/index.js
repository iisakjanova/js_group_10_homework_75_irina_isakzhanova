const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;
const cors = require('cors');
const bodyParser = require("body-parser");

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());

app.post('/encode', (req, res) => {
    const encoded = Vigenere.Cipher(req.body.password).crypt(req.body.text);
    res.send({encoded});
});

app.post('/decode', (req, res) => {
    const decoded = Vigenere.Decipher(req.body.password).crypt(req.body.text);
    res.send({decoded});
});

app.listen(port, () => {
    console.log('We are live in ' + port);
});
