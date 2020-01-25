const fs = require('fs');
const mongoose = require('mongoose');

const Entry = require('../models/entry');

const data = JSON.parse(fs.readFileSync('./seed/MOCK_DATA.json'));

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
            console.log('Entry created for:', entries[i].firstName + ' ' + entries[i].lastName);
            done++;
            if (done === entries.length) {
                console.log('Seeding has completed!');
            }
        });
    }
}

exports.seed = seed;
