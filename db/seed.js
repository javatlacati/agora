// Calling the models
const Contribution = require('./Models/Contribution')
const Message = require('./Models/Message')
const Forum = require('./Models/Topic')
const User = require('./Models/User')

// Loading the user data
const userData = require('./userData')

// Seeding the database
Contribution.remove({}).then(() => { process.exit() })
Message.remove({}).then(() => { process.exit() })
Forum.remove({}).then(() => { process.exit() })
User.remove({}).then(() => {
  console.log('here')
  User.collection.insert(userData).then(function () {
    process.exit()
  })
})

// const forumData = require('./forumData')
// Forum.remove({}).then(function () {
//   Forum.collection.insert(forumData).then(function () {
//     process.exit()
//   })
// })
