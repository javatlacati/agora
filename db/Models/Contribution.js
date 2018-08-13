// Dependencies
const mongoose = require('../connection')
// const uuid = require('uuid/v1')

// Defining the schema
const Schema = mongoose.Schema

// The Contribution Schema
const ContributionSchema = new Schema({
  // uuid: {type: String, unique: true, required: true, default: uuid},
  author: {type: String, unique: false, required: true},
  text: {type: String, unique: false, required: true},
  forumId: {type: String, unique: false, required: true},
  deleted: {type: Boolean, required: true, unique: false, default: false}
})

// Defining the model
const Contribution = mongoose.model('Contribution', ContributionSchema)

module.exports = Contribution
