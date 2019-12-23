const express = require('express');
const app = express();

const entry = require('./routes/entry');
const entries = require('./routes/entries');

app.use('/entry', entry);
app.use('/entries', entries);

module.exports = app;
