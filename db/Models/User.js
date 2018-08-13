// Dependencies
const mongoose = require('../connection')
const bcrypt = require('bcrypt-nodejs')
// const uuid = require('uuid/v1')

// Defining the schema
const Schema = mongoose.Schema

// The User Schema
const UserSchema = new Schema({
  local: {
    email: {type: String, unique: true, required: false, sparse: true, trim: true},
    password: {type: String, unique: false, required: false}
  },
  facebook: {
    id: String,
    token: String,
    email: {type: String, unique: true, required: false, sparse: true, trim: true},
    name: String
  },
  twitter: {
    id: String,
    token: String,
    displayName: String,
    username: String
  },
  google: {
    id: String,
    token: String,
    email: {type: String, unique: true, required: false, sparse: true, trim: true},
    name: String
  },
  displayName: {type: String, required: false, unique: false},
  bio: {type: String, required: false, unique: false},
  admin: {type: Boolean, required: true, unique: false, default: false},
  deleted: {type: Boolean, required: true, unique: false, default: false}
}, {
  timestamps: true
})

UserSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.local.password)
}

UserSchema.methods.encrypt = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

// Defining the model
const User = mongoose.model('User', UserSchema)

module.exports = User
