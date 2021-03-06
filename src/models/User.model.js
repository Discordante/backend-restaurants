const mongoose = require('mongoose')
const { Schema } = require('mongoose');
const bcrypt = require('bcrypt')

const SALT_WORK_FACTOR = 10;

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: 'Name is required'
    },
    password: {
      type: String,
      required: 'Password is required',
      minLength: [8, 'Password must have 8 characters or more']
    },
    favourites: 
      [{ type: Schema.Types.ObjectId, 
        ref: 'Restaurant' 
      }]
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (doc, ret) => {
        ret.id = doc._id
        delete ret._id
        delete ret.__v
        delete ret.password
        return ret
      }
    }
  }
)

userSchema.pre('save', function(next) {
  if (this.isModified('password')) {
    bcrypt.hash(this.password, SALT_WORK_FACTOR)
      .then(hash => {
        this.password = hash
        next()
      })
  } else {
    next()
  }
})

userSchema.methods.checkPassword = function (passwordToCheck) {
  return bcrypt.compare(passwordToCheck, this.password);
};

const User = mongoose.model('User', userSchema)

module.exports = User