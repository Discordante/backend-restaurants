const mongoose = require('mongoose')

const RestaurantSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    neighborhood: {
      type: String,
      required: true
    },
    photograph: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    latlng: {
      lat: {
        type: Number,
        required: true,
      },
      lng: {
        type: Number,
        required: true,
      }
    },
    image: {
      type: String,
      required: false
    },
    cuisine_type: {
      type: String,
      required: true
    },
    operating_hours: {
      type: [String],
      required: true
    },
    reviews: 
    [{
      name: {
        type: String,
        required: false
      },
      date: {
        type: String,
        required: false
      },
      rating: {
        type: Number,
        required: false
      },
      comments: {
        type: String,
        required: false
      }
    }]
  },
  {
    versionKey: false,
    toJSON: {
      transform: (doc, ret) => {
        ret.id = doc._id
        delete ret._id
        delete ret.__v
        return ret
      }
    }
  }
);

const Restaurant = mongoose.model('Restaurant', RestaurantSchema)

module.exports = Restaurant