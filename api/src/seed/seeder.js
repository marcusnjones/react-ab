const fs = require('fs');
const mongoose = require('mongoose');

const Entry = require('../models/entry');

const data = JSON.parse(fs.readFileSync('./seed/MOCK_DATA.json'));

function exit() {
    mongoose.disconnect();
}

function seed() {
    let entries = data.map(entry => new Entry({
        _id: new mongoose.Types.ObjectId(),
        _dateCreated: new Date(),
        dateUpdated: null,
        firstName: entry.firstName,
        lastName: entry.lastName,
        email: entry.email,
        phone: entry.phone,
        address: entry.address,
        city: entry.city,
        state: entry.state,
        zip: entry.zip
    }));
    
    let done = 0;
    for (let i = 0; i < entries.length; i++) {
        entries[i].save((err, result) => {
            done++;
            if (done === entries.length) {
                exit();
            }
        });
    }
}

exports.seed = seed;
