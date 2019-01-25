// Loading the model
const Announcement = require('../db/Models/Announcement.js')

// The Announcement methods
module.exports = {
  index (req, res) {
    Announcement.find({}, (err, announcements) => {
      // (err) ? res.json(err) : res.json(announcements)
      if (err) {
        res.json(err)
      } else if (announcements) {
        res.json(announcements)
      }
    })
  },

  update (req, res) {
    Announcement.findOneAndUpdate({ _id: req.params.id }, req.body.announcement, { new: true }, (err, announcement) => {
      if (err) { res.json(err) } else if (!announcement) { res.json('There is no Forum with this ID') } else if (announcement) { res.json(announcement) }
    })
  }
}
