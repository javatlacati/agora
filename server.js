// Dependencies
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
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

// Configuring the Server
app.listen(process.env.PORT, () => {
  console.log(`The server is running on port ${process.env.PORT}`)
})

// Configuring Method-Override
app.use(methodOverride('_method'))

// Configure Morgan
app.use(morgan('dev'))

// configuring body-parser
app.use(bodyParser.json()) // handles json post requests
app.use(bodyParser.urlencoded({extended: true})) // handles form submission

// Configure Passport
app.use(cookieParser())
app.use(session({
  secret: process.env.sessionSecert,
  name: 'Agora.mikenabil.net',
  // store: sessionStore, // connect-mongo session store
  proxy: true,
  resave: true,
  saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

// Load Passport configuration
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

// Socket.io Connection
io.on('connection', (socket) => {
  socket.on('chat message', (msg) => io.emit('chat message', msg))
  socket.on('disconnect', () => console.log('user disconnected'))
})

// Errors formatting
app.use(require('better-express-errors')(app))
