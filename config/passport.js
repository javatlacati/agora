// const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
// const TwitterStrategy = require('passport-twitter').Strategy
// const FacebookStrategy = require('passport-facebook').Strategy
// const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const passportJWT = require('passport-jwt')
const JWTStrategy = passportJWT.Strategy
const ExtractJWT = passportJWT.ExtractJwt

// Calling the User model
const Schema = require('../db/schema.js')
const User = Schema.User

module.exports = function (passport) {
  // passport.serializeUser(function (user, done) {
  //   done(null, user.id)
  // })
  //
  // passport.deserializeUser(function (id, callback) {
  //   User.findById(id, function (err, user) {
  //     callback(err, user)
  //   })
  // })

  passport.use('jwt', new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.jwtSecret
    },
    function (jwtPayload, callback) {
      return User.findOne({ _id: jwtPayload._id })
        .then(user => { return callback(null, user) })
        .catch(err => { return callback(err) })
    }
  ))

  passport.use('local-signup', new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    function (email, password, done) {
      User.findOne({'local.email': email}, (err, user) => {
        if (user) { return done(null, false, { message: 'email address already in use' }) }
        if (err) { return done(err, false, { message: 'something went' }) }
        if (!user) {
          var newUser = new User()
          newUser.local.email = email
          newUser.local.password = newUser.encrypt(password)
          newUser.save(function (err) {
            if (err) { done(err) }
            return done(null, newUser, { message: 'user created' })
          })
        }
      })
    }
  ))

  passport.use('local-login', new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    function (email, password, done) {
      User.findOne({'local.email': email}, (err, user) => {
        if (!user) { return done(null, false, { message: 'Incorrect email or password' }) }
        if (err) { return done(err) }
        if (!user.validPassword(password)) { return done(null, false, {message: 'Oops! Wrong password.'}) }
        return done(null, user, { message: 'Logged in successfully' })
      })
    }
  ))
}
