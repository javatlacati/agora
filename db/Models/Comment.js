// Dependencies
const mongoose = require('../connection')
// const uuid = require('uuid/v1')

// Defining the schema
const Schema = mongoose.Schema

// The Comments Schema
const CommentSchema = new Schema({
  // uuid: {type: String, unique: true, required: true, default: uuid},
  text: { type: String, unique: false, required: true },
  announcementId: { type: String, unique: false, required: true },
  user: { type: String, unique: false, required: true },
  deleted: { type: Boolean, required: true, unique: false, default: false }
}, {
  timestamps: true
})

// Defining the model
const Comment = mongoose.model('Comment', CommentSchema)

module.exports = Comment
