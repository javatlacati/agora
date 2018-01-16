// Initializing Mongoose
const mongoose = require('mongoose')
var bcrypt = require('bcrypt-nodejs')

// Overriding Mongoose Promise
mongoose.Promise = Promise

// Database Connection
if (process.env.NODE_ENV === 'production') {
  mongoose.connect(process.env.MONGODB_URI)
} else {
  mongoose.connect('mongodb://localhost/agora')
}

// Connecting to the database
const db = mongoose.connection
db.on('error', err => { console.log(err) })
db.once('open', () => { console.log('database has been connected!') })

// Defining the schemas
const Schema = mongoose.Schema

// The User Schema
var UserSchema = mongoose.Schema({
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

// The Forum Schema
const ForumSchema = new Schema({
  id: {type: Number, unique: true, required: true},
  title: {type: String, unique: false, required: true, maxlength: [50, `Error: Too long title. Titles shouldn't exceed 50 charachters`]},
  description: {type: String, unique: false, required: true},
  contributions: {type: Array, unique: false, required: false},
  deleted: {type: Boolean, required: true, unique: false, default: false}
}, {
  timestamps: true
})

// The Contribution Schema
const ContributionSchema = new Schema({
  author: {type: String, unique: false, required: true},
  comment: {type: String, unique: false, required: true}
})

// Defining the models
const User = mongoose.model('User', UserSchema)
const Forum = mongoose.model('Forum', ForumSchema)
const Contribution = mongoose.model('Contribution', ContributionSchema)

// Exporting
module.exports = { mongoose, User, Forum, Contribution }
