// Configuring Express Router
const express = require('express')
const router = express.Router()

// Passport
const passport = require('passport')

// Lading the controllers
const usersController = require('../controllers/users')
const forumsController = require('../controllers/forums')

// Authenticate User function
function authenticatedUser(req, res, next) {
  if (req.isAuthenticated()) return next() // If the user is authenticated, continue the execution
  res.redirect('/') // Otherwise redirect to the home page
}

/// ///////////////////////////////////////////
// Routes

// Forums API routes
router.route('/api/forums/')
  .get(forumsController.index)
  .post(forumsController.post)

// Show & Update
router.route('/api/forums/:id')
  .get(forumsController.show)
  .put(forumsController.update)

// Delete
router.route('/api/forums/:id')
  .delete(forumsController.destroy)

module.exports = router
