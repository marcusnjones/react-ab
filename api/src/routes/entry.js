const express = require('express');
const router = express.Router();
const Entry = require('../models/entry');
const mongoose = require('mongoose');

router.post('/', (req, res, next) => {
    const entry = new Entry({
        _id: new mongoose.Types.ObjectId(),
        _dateCreated: new Date(),
        dateUpdated: new Date(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip
    });

    entry
    .save()
    .then(entry => {
        console.log('Entry created for:', entry.firstName + ' ' + entry.lastName);
        res.status(201).json(entry);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:entryId', (req, res, next) => {
    const id = req.params.entryId;
    let query = Entry.findById(id).exec();

    query
    .then(entry => {
        if (entry) {
            console.log('GET /entry', entry);
            res.status(200).json(entry);
        } else {
            console.log('Not found!');
            res.status(200).json({});
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:entryId', (req, res, next) => {
    const id = req.params.entryId;
    let query = Entry.deleteOne({_id : id}).exec();

    query
    .then(entry => {
        // TODO: Log deleted entry to console
        if (entry) {
            res.status(200).json(entry);
        } else {
            console.log('Not found!');
            res.status(200).json({});
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
