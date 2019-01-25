// Loading the model
const Comment = require('../db/Models/Comment.js')

// The Announcement methods
module.exports = {
  index (req, res) {
    Comment.find({}, (err, comments) => {
      if (err) {
        res.json(err)
      } else if (comments) {
        res.json(comments)
      }
    })
  },

  post (req, res) {
    Comment.create(req.body.comment, (err, comment) => {
      if (err) {
        res.json(err)
      } else if (comment) {
        res.json(comment)
      }
    })
  },

  destroy (req, res) {
    Comment.findOneAndRemove({ _id: req.params.id }, (err, comment) => {
      if (err) { res.json(err) } else if (!comment) { res.json('There is no comment with this ID') } else if (comment) { res.json(comment) }
    })
  }
}
