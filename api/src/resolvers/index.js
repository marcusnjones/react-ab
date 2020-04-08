const mongoose = require('mongoose');
const Entry = require('./../models/entry');

module.exports = {
  entries: async () => {
    try {
      const entries = await Entry
      .find();
      if (entries.length > 0) {
        return entries;
      }
      else {
        return entries;
      }
    }
    catch (err) {
      throw err;
    }
  },
  createEntry: async (arg) => {
    const entry = new Entry({
      _id: new mongoose.Types.ObjectId(),
      _dateCreated: new Date(arg.entryInput._dateCreated),
      dateUpdated: null,
      firstName: arg.entryInput.firstName,
      lastName: arg.entryInput.lastName,
      email: arg.entryInput.email,
      phone: arg.entryInput.phone,
      address: arg.entryInput.address,
      city: arg.entryInput.city,
      state: arg.entryInput.state,
      zip: arg.entryInput.zip
    });

    try {
      const createdEntry = await entry.save();
      console.log('Entry created for:', createdEntry.firstName + ' ' + createdEntry.lastName);
      return { ...createdEntry._doc };
    }
    catch (err) {
      console.log(err);
      throw err;
    }
  }
};
