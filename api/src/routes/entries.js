const express = require('express');
const router = express.Router();
const Entry = require('../models/entry');

router.get('/', (req, res, next) => {
    let query = Entry.find().exec();

    query
    .then(entries => {
        if (entries.length > 0) {
            console.log('GET /entries', entries);
            res.status(200).json(entries);
        } else {
            console.log('No entries found!');
            res.status(200).json({});
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
