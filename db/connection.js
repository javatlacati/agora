// Initializing Mongoose
const mongoose = require('mongoose')

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

module.exports = mongoose
