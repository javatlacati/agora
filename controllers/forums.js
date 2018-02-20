// Loading the schema
const Schema = require('../db/schema.js')

// Loading the model
const Forum = Schema.Forum

// The Forum methods
module.exports = {
  index (req, res) {
    Forum.find({}, (err, forums) => {
      if (err) { res.json(err) }
      if (forums) { res.json(forums) }
    })
  },

  post (req, res) {
    Forum.create(req.body.forum, (err, forum) => {
      if (err) { res.json(err) }
      if (forum) { res.json(forum) }
    })
  },

  show (req, res) {
    Forum.findOne({_id: req.params.id}, (err, forum) => {
      if (err) { res.json(err) }
      if (!forum) { res.json('There is no Forum with this ID') }
      if (forum) { res.json(forum) }
    })
  },

  update (req, res) {
    Forum.findOneAndUpdate({_id: req.params.id}, req.body.forum, {new: true}, (err, forum) => {
      if (err) { res.json(err) }
      if (!forum) { res.json('There is no Forum with this ID') }
      if (forum) { res.json(forum) }
    })
  },

  destroy (req, res) {
    Forum.findOneAndRemove({_id: req.params.id}, (err, forum) => {
      if (err) { res.json(err) }
      if (!forum) { res.json('There is no Forum with this ID') }
      if (forum) { res.json(forum) }
    })
  }
}
