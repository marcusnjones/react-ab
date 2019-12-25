const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const mongoUrl = `mongodb://${process.env.MONGO_SERVICENAME}:${process.env.MONGO_PORT}/${process.env.APP_DB_NAME}`;
const dbName = process.env.APP_DB_NAME;

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const entry = require('./routes/entry');
const entries = require('./routes/entries');

// TODO: Configure morgan based on env
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') {
        res.append('Access-Control-Allow-Methods', 'PUT, POST, DELETE, GET');
    }
    next();
});

app.use('/api/entry', entry);
app.use('/api/entries', entries);

app.use((req, res, next) => {
    const error = new Error('Not found!');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;
