// Dependencies
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const passport = require('passport')
const flash = require('connect-flash')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const http = require('http')
const socketIO = require('socket.io')
require('dotenv').config()

// Initializing an Express app
const app = express()

// CORS Configuration
app.use(cors())

// Configure Morgan
app.use(morgan('dev'))

// configuring body-parser
app.use(bodyParser.json()) // handles json post requests

// Configure Passport
app.use(cookieParser())
app.use(session({
  secret: process.env.sessionSecert,
  name: 'Agora.MikeNabil.net',
  proxy: true,
  resave: true,
  saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

// Load Passport configuration - Currently not working because of missing tokens
// require('./config/passport')(passport)

// Use Passport current user
app.use(function (req, res, next) {
  global.currentUser = req.user
  res.locals.currentUser = req.user
  next()
})

// Routes
const routes = require('./config/routes')
app.use(routes)

// Socket.io Configuration
const server = http.createServer(app)
const io = socketIO.listen(server)

// Schema & Model for Socket.io
const Schema = require('./db/schema.js')
const Message = Schema.Message

// Socket.io Users
let users = 0

// Socket.io Connection
io.on('connection', (socket) => {
  users++
  console.log(`${users} users connected.`)
  Message.find({}).then(messages => { io.emit('initial messages', messages) })
  socket.on('chat message', (msg) => { Message.create({body: msg}).then((msg) => io.emit('chat message', msg)) })
  socket.on('disconnect', () => { users--; console.log(`1 User disconnected. ${users} Users remain connected.`) })
})

// Configuring the Server
// app.listen(process.env.PORT, () => { console.log(`The server is running on port ${process.env.PORT}`) })
server.listen(process.env.PORT, () => { console.log(`The server is running on port ${process.env.PORT}`) })

// Errors formatting
app.use(require('better-express-errors')(app))
