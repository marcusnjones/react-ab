const mongoose = require('mongoose');

const entrySchema = mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, required: true },
    _dateCreated: { type: Date, required: true },
    dateUpdated: { type: Date, required: false },
    firstName: { type: String, required: true} ,
    lastName: { type: String, required: true },
    email: { type: String, required: false },
    phone: { type: String, required: true },
    address: { type: String, required: false },
    city: { type: String, required: false },
    state: { type: String, required: false },
    zip: { type: Number, required: false }
});

module.exports = mongoose.model('Entry', entrySchema);
