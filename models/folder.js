'use strict';

const mongoose = require('mongoose');

const folderSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }
});

// Add `createdAt` and `updatedAt` fields
folderSchema.set('timestamps', true);

// Customize output for `res.json(data)`, `console.log(data)` etc.
folderSchema.set('toObject', {
  virtuals: true,     // include built-in virtual `id`
  transform: (doc, result) => {
    delete result._id;
    delete result.__v;
  }
});

module.exports = mongoose.model('Folder', folderSchema);
