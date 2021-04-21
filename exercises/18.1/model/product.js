const mongoose = require('mongoose');
const validator = require('validator');
const product = mongoose.model(
  'shop',
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      uniqe: true,
    },
    category: {
      type: String,
      required: true,
    },
    isActice: Boolean,
    details: {
      type: new mongoose.Schema({
        description: {
          type: String,
          required: true,
          minLength: 10,
        },
        price: {
          type: Number,
          required: true,
          min: 0,
        },
        discount: {
          type: Number,
          default: 0,
        },
        images: {
          type: [String],
          validate(value) {
            if (value.length < 2)
              throw new Error('image must include at least 2 pictures');
          },
        },
        phoneNumber: {
          type: String,
          validate(value) {
            if (!validator.isMobilePhone(value, ['he-IL']))
              throw new Error('invalid phone');
          },
        },
        DateAdded: {
          type: Date,
          default: new Date(),
        },
      }),
    },
  })
);
module.exports = product;
