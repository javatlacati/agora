// Connecting with the schema
const Schema = require('./schema.js')

// Loading the user data
var userData = require('./userData')
var forumData = require('./forumData')

// Calling the models
const User = Schema.User
const Forum = Schema.Forum
const Contribution = Schema.Contribution

// Seeding the database
User.remove({}).then(function () {
  User.collection.insert(userData).then(function () {
    // process.exit()
  })
})

// Clear the database
Forum.remove({}).then(function () {
  Forum.collection.insert(forumData).then(function () {
    // process.exit()
  })
})

Contribution.remove({}, err => {
  if (err) {
    console.log(err)
  }
})
