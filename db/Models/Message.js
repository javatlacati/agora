// Dependencies
const mongoose = require('../connection')
// const uuid = require('uuid/v1')

// Defining the schema
const Schema = mongoose.Schema

// The Messsages Schema
const MessageSchema = new Schema({
  // uuid: {type: String, unique: true, required: true, default: uuid},
  body: {type: String, unique: false, required: true},
  deleted: {type: Boolean, required: true, unique: false, default: false}
}, {
  timestamps: true
})

// Defining the model
const Message = mongoose.model('Message', MessageSchema)

module.exports = Message
