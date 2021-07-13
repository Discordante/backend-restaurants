const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller')
const restaurantsController = require('../controllers/products.controller')

// Users routes
router.post('/users', usersController.create)

// Products routes
router.get('/products', restaurantsController.list)
router.post('/products', restaurantsController.create)
router.get('/products/:id', restaurantsController.get)
router.delete('/products/:id', restaurantsController.delete)
router.put('/products/:id', restaurantsController.update)

module.exports = router;