const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller')
const restaurantsController = require('../controllers/restaurants.controller')
const authMiddleware = require('../middlewares/auth.middleware')

// Users routes
router.post('/users', usersController.create)
router.get('/users/me', authMiddleware.isAuthenticated, usersController.get)

// Auth routes
router.post('/login', usersController.authenticate)

// Restaurants routes
router.get('/restaurants', restaurantsController.list)
router.get('/restaurants/:id', restaurantsController.get)
router.post('/restaurants', authMiddleware.isAuthenticated, restaurantsController.create)
router.delete('/restaurants/:id', restaurantsController.delete)
router.put('/restaurants/:id', restaurantsController.update)

module.exports = router;