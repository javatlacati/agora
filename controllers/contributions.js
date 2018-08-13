// Loading the model
const Contribution = require('../db/Models/Contribution.js')

// The Contributions methods
module.exports = {
  post (req, res) {
    Contribution.create(req.body.contribution, (err, contribution) => {
      if (err) {
        res.json(err)
      } else if (contribution) {
        res.json(contribution)
      }
    })
  },

  show (req, res) {
    Contribution.find({forumId: req.params.id}, (err, contributions) => {
      if (err) {
        res.json(err)
      } else if (contributions) {
        res.json(contributions)
      }
    })
  },

  update (req, res) {
    console.log('Unimplemented')
  },

  destroy (req, res) {
    console.log(req.params)
    Contribution.findOneAndRemove({_id: req.params.id}, (err, forum) => {
      if (err) {
        res.json(err)
      } else if (!forum) {
        res.json('There is no Forum with this ID')
      } else if (forum) {
        res.json(forum)
      }
    })
  }
}
