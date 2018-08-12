// Initializing Mongoose
const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')
// const uuid = require('uuid/v1')

// Overriding Mongoose Promise
mongoose.Promise = Promise

// Database Connection
if (process.env.NODE_ENV === 'production') {
  mongoose.connect(process.env.MONGODB_URI)
} else {
  mongoose.connect('mongodb://localhost:27017/agora', { useNewUrlParser: true })
}

// Connecting to the database
const db = mongoose.connection
db.on('error', err => { console.log(err) })
db.once('open', () => { console.log('database has been connected!') })

// Defining the schemas
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

// function getId () {
//   return db.forums.find().count() + 1000001
// }

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

// The Contribution Schema
const ContributionSchema = new Schema({
  // uuid: {type: String, unique: true, required: true, default: uuid},
  author: {type: String, unique: false, required: true},
  text: {type: String, unique: false, required: true},
  forumId: {type: String, unique: false, required: true},
  deleted: {type: Boolean, required: true, unique: false, default: false}
})

// The Messsages Schema
const MessageSchema = new Schema({
  // uuid: {type: String, unique: true, required: true, default: uuid},
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
