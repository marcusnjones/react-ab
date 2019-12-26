const mongoose = require('mongoose');

const entrySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    _dateCreated: Date,
    dateUpdated: Date,
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    address1: String,
    address2: String,
    city: String,
    state: String,
    zip: Number,
    country: String
});

module.exports = mongoose.model('Entry', entrySchema);
