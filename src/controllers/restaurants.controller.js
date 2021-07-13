const createError = require('http-errors')
const Restaurant = require('../models/Restaurant.model')

module.exports.list = (req, res, next) => {
  Restaurant.find()
  .then(restaurant => res.json(restaurant))
  .catch(next)
}

module.exports.get = (req, res, next) => {
  Restaurant.findById(req.params.id)
  .then(restaurant => {
    if (!restaurant) {
      next(createError(404, 'Restaurant not found'))
    } else {
      res.json(restaurant)
    }
  })
  .catch(next)
}

//module.exports.create = (req, res, next) => {}

//module.exports.update = (req, res, next) => {}

//module.exports.delete = (req, res, next) => {}
