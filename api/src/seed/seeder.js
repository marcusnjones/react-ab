const fs = require('fs');
const mongoose = require('mongoose');
const Entry = require('../models/entry');
const data = JSON.parse(fs.readFileSync('./seed/MOCK_DATA.json'));

/**
 * Defines the function that generates mock data for the database.
 * @return {void}
 */
async function seed() {
  try {
    const existingEntries = await Entry.find();
    if (existingEntries.length == 0) {
      const newEntries = data.map((entry) => new Entry({
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
        zip: entry.zip,
      }));
      
      let done = 0;
      for (let i = 0; i < newEntries.length; i++) {
        newEntries[i].save((err, result) => {
          console.log(`Entry created for: ${newEntries[i].firstName} ${newEntries[i].lastName}`);
          done++;
          if (done === newEntries.length) {
            console.log('Seeding has completed!');
          }
        });
      }
    }
  }
  catch (err) {
    console.log(err);
    throw err;
  }
}

exports.seed = seed;
