const mongoose = require('mongoose');

const entrySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    _dateCreated: Date,
    dateUpdated: {type: Date, required: false},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: String,
    phone: {type: String, required: true},
    address: String,
    city: String,
    state: String,
    zip: Number
});

module.exports = mongoose.model('Entry', entrySchema);
