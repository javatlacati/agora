// Loading the model
const Forum = require('../db/Models/Topic.js')

// The Forum methods
module.exports = {
  index (req, res) {
    Forum.find({}, (err, forums) => {
      if (err) {
        res.json(err)
      } else if (forums) {
        res.json(forums)
      }
    })
  },

  post (req, res) {
    Forum.create(req.body.forum, (err, forum) => {
      if (err) {
        res.json(err)
      } else if (forum) {
        res.json(forum)
      }
    })
  },

  show (req, res) {
    Forum.findOne({_id: req.params.id}, (err, forum) => {
      if (err) { res.json(err) } else if (!forum) { res.json('There is no Forum with this ID') } else if (forum) { res.json(forum) }
    })
  },

  update (req, res) {
    Forum.findOneAndUpdate({_id: req.params.id}, req.body.forum, {new: true}, (err, forum) => {
      if (err) { res.json(err) } else if (!forum) { res.json('There is no Forum with this ID') } else if (forum) { res.json(forum) }
    })
  },

  destroy (req, res) {
    Forum.findOneAndRemove({_id: req.params.id}, (err, forum) => {
      if (err) { res.json(err) } else if (!forum) { res.json('There is no Forum with this ID') } else if (forum) { res.json(forum) }
    })
  }
}
