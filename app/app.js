const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

// json parser
app.use(express.json());

// middleware for template engine
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express);

app.use(express.static('public'));
app.use(express.static('views'));

module.exports = app;