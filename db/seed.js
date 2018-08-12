// Connecting with the schema
const Schema = require('./schema.js')

// Loading the user data
var userData = require('./userData')
// var forumData = require('./forumData')

// Calling the models
const User = Schema.User
const Forum = Schema.Forum
const Contribution = Schema.Contribution
const Message = Schema.Message

// Seeding the database
User.remove({}).then(() => {
  User.collection.insert(userData).then(function () {
    process.exit()
  })
})

// Clear the database
// Forum.remove({}).then(function () {
//   Forum.collection.insert(forumData).then(function () {
//     process.exit()
//   })
// })
Forum.remove({}).then(() => { process.exit() })
Contribution.remove({}).then(() => { process.exit() })
Message.remove({}).then(() => { process.exit() })
