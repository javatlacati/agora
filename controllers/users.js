const passport = require('passport')
const jwt = require('jsonwebtoken')

// Loading the model
// const User = require('../db/Models/User.js')

module.exports = {
  // POST /signup
  postSignup (request, response, next) {
    passport.authenticate('local-signup', { session: false }, (err, user, info) => {
      if (err || !user) { return response.json(info) } else if (user) {
        request.login(user, { session: false }, (err) => {
          if (err) { response.send(err) }
          return response.json({
            token: jwt.sign(user.toJSON(), process.env.jwtSecret),
            user: user
          })
        })
      }
    })(request, response, next)
  },

  // POST /login
  postLogin (request, response) {
    passport.authenticate('local-login', { session: false }, (err, user, info) => {
      if (err || !user) { return response.json(info) }
      request.login(user, { session: false }, (err) => {
        if (err) { response.send(err) }
        return response.json({
          token: jwt.sign(user.toJSON(), process.env.jwtSecret),
          user: user
        })
      })
    })(request, response)
  }
}
