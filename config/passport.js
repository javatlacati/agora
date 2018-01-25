// Most of code this file is copied from: https://github.com/scotch-io/easy-node-authentication/blob/master/config/passport.js

const LocalStrategy = require('passport-local').Strategy
const TwitterStrategy = require('passport-twitter').Strategy
const FacebookStrategy = require('passport-facebook').Strategy
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy

// Calling the User model
const Schema = require('../db/schema.js')
const User = Schema.User

module.exports = function (passport) {
  passport.serializeUser(function (user, done) {
    done(null, user.id)
  })

  passport.deserializeUser(function (id, callback) {
    User.findById(id, function (err, user) {
      callback(err, user)
    })
  })

  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, function (req, email, password, callback) {
    // Find a user with this e-mail
    User.findOne({
      'local.email': email
    }, function (err, user) {
      if (err) return callback(err)

      // If there already is a user with this email
      if (user) {
        return callback(null, false, req.flash('signupMessage', 'This email is already used.'))
      } else {
        // There is no email registered with this email

        // Create a new user
        var newUser = new User()
        newUser.local.email = email
        newUser.local.password = newUser.encrypt(password)

        newUser.save(function (err) {
          if (err) throw err
          return callback(null, newUser)
        })
      }
    })
  }))

  passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, function (req, email, password, callback) {
    // Search for a user with this email
    User.findOne({
      'local.email': email
    }, function (err, user) {
      if (err) {
        return callback(err)
      }

      // If no user is found
      if (!user) {
        return callback(null, false, req.flash('loginMessage', 'No user found.'))
      }
      // Wrong password
      if (!user.validPassword(password)) {
        return callback(null, false, req.flash('loginMessage', 'Oops! Wrong password.'))
      }

      return callback(null, user)
    })
  }))

  passport.use('twitter', new TwitterStrategy({
      consumerKey: process.env.twitterKey,
      consumerSecret: process.env.twitterSecret,
      callbackURL: process.env.twitterCallbackURL,
      passReqToCallback: true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
    },
    function (req, token, tokenSecret, profile, done) {
      // asynchronous
      process.nextTick(function () {
        // check if the user is already logged in
        if (!req.user) {
          User.findOne({
            'twitter.id': profile.id
          }, function (err, user) {
            if (err) {
              return done(err)
            }

            if (user) {
              // if there is a user id already but no token (user was linked at one point and then removed)
              if (!user.twitter.token) {
                user.twitter.token = token
                user.twitter.username = profile.username
                user.twitter.displayName = profile.displayName

                user.save(function (err) {
                  if (err) {
                    return done(err)
                  }

                  return done(null, user)
                })
              }

              return done(null, user) // user found, return that user
            } else {
              // if there is no user, create them
              var newUser = new User()

              newUser.twitter.id = profile.id
              newUser.twitter.token = token
              newUser.twitter.username = profile.username
              newUser.twitter.displayName = profile.displayName

              newUser.save(function (err) {
                if (err) {
                  return done(err)
                }

                return done(null, newUser)
              })
            }
          })
        } else {
          // user already exists and is logged in, we have to link accounts
          var user = req.user // pull the user out of the session

          user.twitter.id = profile.id
          user.twitter.token = token
          user.twitter.username = profile.username
          user.twitter.displayName = profile.displayName

          user.save(function (err) {
            if (err) {
              return done(err)
            }

            return done(null, user)
          })
        }
      })
    }))

  passport.use('facebook', new FacebookStrategy({
      clientID: process.env.facebookClientID,
      clientSecrett: process.env.facebookClientSecret,
      callbackURL: process.env.facebookCallbackURL,
      profileURL: process.env.facebookProfileURL,
      profileFields: ['id', 'email', 'name'],
      passReqToCallback: true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
    },
    function (req, token, refreshToken, profile, done) {
      // asynchronous
      process.nextTick(function () {
        // check if the user is already logged in
        if (!req.user) {
          User.findOne({
            'facebook.id': profile.id
          }, function (err, user) {
            if (err) {
              return done(err)
            }

            if (user) {
              // if there is a user id already but no token (user was linked at one point and then removed)
              if (!user.facebook.token) {
                user.facebook.token = token
                user.facebook.name = profile.name.givenName + ' ' + profile.name.familyName
                user.facebook.email = (profile.emails[0].value || '').toLowerCase()

                user.save(function (err) {
                  if (err) {
                    return done(err)
                  }

                  return done(null, user)
                })
              }

              return done(null, user) // user found, return that user
            } else {
              // if there is no user, create them
              var newUser = new User()

              newUser.facebook.id = profile.id
              newUser.facebook.token = token
              newUser.facebook.name = profile.name.givenName + ' ' + profile.name.familyName
              newUser.facebook.email = (profile.emails[0].value || '').toLowerCase()

              newUser.save(function (err) {
                if (err) {
                  return done(err)
                }

                return done(null, newUser)
              })
            }
          })
        } else {
          // user already exists and is logged in, we have to link accounts
          var user = req.user // pull the user out of the session

          user.facebook.id = profile.id
          user.facebook.token = token
          user.facebook.name = profile.name.givenName + ' ' + profile.name.familyName
          user.facebook.email = (profile.emails[0].value || '').toLowerCase()

          user.save(function (err) {
            if (err) {
              return done(err)
            }

            return done(null, user)
          })
        }
      })
    }))

  passport.use('google', new GoogleStrategy({
      clientID: process.env.googleClientID,
      clientSecret: process.env.googleClientSecret,
      callbackURL: process.env.googleCallbackURL,
      passReqToCallback: true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
    },
    function (req, token, refreshToken, profile, done) {
      // asynchronous
      process.nextTick(function () {
        // check if the user is already logged in
        if (!req.user) {
          User.findOne({
            'google.id': profile.id
          }, function (err, user) {
            if (err) {
              return done(err)
            }

            if (user) {
              // if there is a user id already but no token (user was linked at one point and then removed)
              if (!user.google.token) {
                user.google.token = token
                user.google.name = profile.displayName
                user.google.email = (profile.emails[0].value || '').toLowerCase() // pull the first email

                user.save(function (err) {
                  if (err) {
                    return done(err)
                  }

                  return done(null, user)
                })
              }

              return done(null, user)
            } else {
              var newUser = new User()

              newUser.google.id = profile.id
              newUser.google.token = token
              newUser.google.name = profile.displayName
              newUser.google.email = (profile.emails[0].value || '').toLowerCase() // pull the first email

              newUser.save(function (err) {
                if (err) {
                  return done(err)
                }

                return done(null, newUser)
              })
            }
          })
        } else {
          // user already exists and is logged in, we have to link accounts
          var user = req.user // pull the user out of the session

          user.google.id = profile.id
          user.google.token = token
          user.google.name = profile.displayName
          user.google.email = (profile.emails[0].value || '').toLowerCase() // pull the first email

          user.save(function (err) {
            if (err) {
              return done(err)
            }

            return done(null, user)
          })
        }
      })
    }))
}
