// Dependencies
const mongoose = require('../connection')
// const uuid = require('uuid/v1')

// Defining the schema
const Schema = mongoose.Schema

// The Announcements Schema
const AnnouncementSchema = new Schema({
  // uuid: {type: String, unique: true, required: true, default: uuid},
  title: { type: String, unique: false, required: true },
  description: { type: String, unique: false, required: true },
  up_votes: { type: Number, unique: false, required: true, default: 0 },
  deleted: { type: Boolean, unique: false, required: true, default: false }
}, {
  timestamps: true
})

// Defining the model
const Announcement = mongoose.model('Announcement', AnnouncementSchema)

module.exports = Announcement
