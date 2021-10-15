const mongoose = require('mongoose');
const Entry = require('./../models/entry');

module.exports = {
  entry: async (arg) => {
    const id = arg.id;

    try {
      const entry = await Entry
      .findById(id);
      if (entry) {
        return { ...entry._doc };
      }
      else {
        return entry;
      }
    }
    catch (err) {
      console.log(err);
      throw err;
    }
  },
  entries: async () => {
    try {
      const entries = await Entry
      .find();
      if (entries.length > 0) {
        return entries.map(entry => {
          return { ...entry._doc }
        });
      }
      else {
        return entries;
      }
    }
    catch (err) {
      console.log(err);
      throw err;
    }
  },
  createEntry: async (arg) => {
    const entry = new Entry({
      _id: new mongoose.Types.ObjectId(),
      _dateCreated: new Date(),
      dateUpdated: null,
      firstName: arg.data.firstName,
      lastName: arg.data.lastName,
      email: arg.data.email,
      phone: arg.data.phone,
      address: arg.data.address,
      city: arg.data.city,
      state: arg.data.state,
      zip: arg.data.zip
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
  },
  updateEntry: async (arg) => {
    const id = arg.data._id,
    entry = await Entry
    .findById(id);
    let updates = { 'dateUpdated': new Date() };

    for (const [key, value] of Object.entries(arg.data)) {
      if (typeof value == 'undefined') {
        return;
      }
      if (Object.values(entry._doc).indexOf(value) == -1) {
        if (key != '_id') {
          updates[key] = value;
        }
      }
    }
    if (Object.keys(updates).includes('dateUpdated') && Object.entries(updates).length == 1) {
      console.log('No fields updated for: ' + id);
    } else {
      let size = Object.keys(updates).length - 1;

      await Entry
      .updateOne({ '_id': id }, { $set: updates }, () => {
        console.log('[' + size + '] field(s) updated for: ' + id);
      });
    }
  },
  deleteEntry: async (arg) => {
    // const id = arg.data._id;
  }
};
