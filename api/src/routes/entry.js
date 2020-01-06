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
    let query = Entry.find({_id : id});

    query
    .exec()
    // .exec((err, usr) => {
    //     if (err) {
    //         console.log(err);
    //     }
    // })
    .then(entry => {
        console.log(id);
        res.status(200)
        .json({
            entry: entry,
            message: 'GET /entry\' + req.params.entryId'
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: {
                message: err.message
            }
        });
    });
});

router.delete('/:entryId', (req, res, next) => {
    res.status(200).json({
        message: 'DELETE /entry' + req.params.entryId
    });
});

module.exports = router;
