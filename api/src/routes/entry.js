const express = require('express');
const router = express.Router();
const Entry = require('../models/entry');

router.post('/:entryId', (req, res, next) => {
    res.status(200).json({
        message: 'POST /entry' + req.params.entryId
    });
});

router.get('/:entryId', (req, res, next) => {
    const id = req.params.entryId;
    let query = Entry.findById(id);
    query
    .exec()
    .then(entry => {
        console.log(entry);
        res.status(200).json(entry);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
});

router.delete('/:entryId', (req, res, next) => {
    res.status(200).json({
        message: 'DELETE /entry' + req.params.entryId
    });
});

module.exports = router;
