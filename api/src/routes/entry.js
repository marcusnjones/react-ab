const express = require('express');
const router = express.Router();

router.post('/:entryId', (req, res, next) => {
    res.status(200).json({
        message: 'POST /entry' + req.params.entryId
    });
});

router.get('/:entryId', (req, res, next) => {
    res.status(200).json({
        message: 'GET /entry' + req.params.entryId
    });
});

router.delete('/:entryId', (req, res, next) => {
    res.status(200).json({
        message: 'DELETE /entry' + req.params.entryId
    });
});

module.exports = router;
