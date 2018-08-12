// Configuring Express Router
const express = require('express')
const router = express.Router()

// Passport
// const passport = require('passport')

// Lading the controllers
const usersController = require('../controllers/users.js')
const forumsController = require('../controllers/forums.js')
const contributionsController = require('../controllers/contributions.js')

// Authenticate User function
// function authenticatedUser (req, res, next) {
//   if (req.isAuthenticated()) return next() // If the user is authenticated, continue the execution
//   res.redirect('/') // Otherwise redirect to the home page
// }

/// ///////////////////////////////////////////
// Routes

/// ///////////////////////////////////////////
// Forums
router.route('/api/forums/')
  .get(forumsController.index)
  .post(forumsController.post)

// Forum
router.route('/api/forums/:id')
  .get(forumsController.show)
  .put(forumsController.update)
  .delete(forumsController.destroy)

// Contributions
router.route('/api/contributions/')
  .post(contributionsController.post)

// Contribution
router.route('/api/contributions/:id')
  .get(contributionsController.show)
  .put(contributionsController.update)
  .delete(contributionsController.destroy)

/// ///////////////////////////////////////////
// User routes

router.route('/auth/signup')
  .post(usersController.postSignup)

router.route('/auth/login')
  .post(usersController.postLogin)

// router.route('/logout')
//   .get(usersController.getLogout)
//
// router.route('/users')
//   .get(authenticatedUser, usersController.index)
//
// router.route('/profile')
//   .get(authenticatedUser, usersController.profile)

/// ///////////////////////////////////////////

module.exports = router
