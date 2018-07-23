// Initializing Mongoose
const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')
const uuid = require('uuid/v1')

// Overriding Mongoose Promise
mongoose.Promise = Promise

// Database Connection
if (process.env.NODE_ENV === 'production') {
  mongoose.connect(process.env.MONGODB_URI)
} else {
  mongoose.connect('mongodb://localhost/agora', { useMongoClient: true })
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

// function getId () {
//   return db.forums.find().count() + 1000001
// }

// The Forum Schema
const ForumSchema = new Schema({
  // id: {type: Number, unique: true, required: true, default: getId},
  uuid: {type: String, unique: true, required: true, default: uuid},
  title: {type: String, unique: false, required: true, maxlength: [50, `Error: Too long title. Titles shouldn't exceed 50 charachters`]},
  description: {type: String, unique: false, required: true},
  deleted: {type: Boolean, required: true, unique: false, default: false}
}, {
  timestamps: true
})

// The Contribution Schema
const ContributionSchema = new Schema({
  uuid: {type: String, unique: true, required: true, default: uuid},
  author: {type: String, unique: false, required: true},
  comment: {type: String, unique: false, required: true},
  forumId: {type: String, unique: false, required: true},
  deleted: {type: Boolean, required: true, unique: false, default: false}
})

// The Messsages Schema
const MessageSchema = new Schema({
  uuid: {type: String, unique: true, required: true, default: uuid},
  body: {type: String, unique: false, required: true},
  deleted: {type: Boolean, required: true, unique: false, default: false}
}, {
  timestamps: true
})

// Defining the models
const User = mongoose.model('User', UserSchema)
const Forum = mongoose.model('Forum', ForumSchema)
const Contribution = mongoose.model('Contribution', ContributionSchema)
const Message = mongoose.model('Message', MessageSchema)

// Exporting
module.exports = { mongoose, User, Forum, Contribution, Message }
