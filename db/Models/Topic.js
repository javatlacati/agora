// Dependencies
const mongoose = require('../connection')
// const uuid = require('uuid/v1')

// Defining the schema
const Schema = mongoose.Schema

// The Forum Schema
const ForumSchema = new Schema({
  // id: {type: Number, unique: true, required: true, default: getId},
  // uuid: {type: String, unique: true, required: true, default: uuid},
  title: {type: String, unique: false, required: true, maxlength: [50, `Error: Too long title. Titles shouldn't exceed 50 charachters`]},
  description: {type: String, unique: false, required: true},
  header: {type: String, unique: false, required: true, default: 'https://www.teachermagazine.com.au/files/ce-image/cache/1c03ffc10fd4ef6a/Computing-programming-and-coding-in-schools_855_513_48.jpg'},
  deleted: {type: Boolean, required: true, unique: false, default: false}
}, {
  timestamps: true
})

// function getId () {
//   return db.forums.find().count() + 1000001
// }

// Defining the model
const Forum = mongoose.model('Forum', ForumSchema)

module.exports = Forum
