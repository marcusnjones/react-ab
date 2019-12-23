const express = require('express');
const app = express();

const entriesRoutes = require('./routes/entries');

app.use('/entries', entriesRoutes);

// app.use((req, res, next) => {
//     res.status(200).json({
//         message: 'It works!'
//     });
// });

module.exports = app;
