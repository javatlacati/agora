// Calling the models
const Announcement = require('./Models/Announcement')
const Comment = require('./Models/Comment')
const Contribution = require('./Models/Contribution')
const Message = require('./Models/Message')
const Forum = require('./Models/Topic')
const User = require('./Models/User')

// Loading the seed data
const announcementData = require('./Seeds/announcementData')
const commentData = require('./Seeds/commentData')
const forumData = require('./Seeds/forumData')
const userData = require('./Seeds/userData')

// Seeding the database
Announcement.remove({})
  .then(() => { Announcement.collection.insert(announcementData) })
  .then(() => { Comment.remove({}) })
  .then(() => { Contribution.remove({}) })
  .then(() => { Message.remove({}) })
  .then(() => { Forum.remove({}) })
  .then(() => { User.remove({}) })
  .then(() => { Forum.collection.insert(forumData) })
  .then(() => { User.collection.insert(userData) })
  .then(() => {
    Announcement.find({}).then((announcements) => {
      let comments = commentData.map((e) => {
        e.announcementId = announcements[Math.floor(Math.random() * announcements.length)]['_doc']['_id']
        return e
      })
      Comment.collection.insert(comments)
    })
  })
  // .then(() => { process.exit() })
