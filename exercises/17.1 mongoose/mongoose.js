const mongoose = require('mongoose');
const validator = require('validator');
const express = require('express');
const fs = require('fs');

mongoose.connect('mongodb://127.0.0.1:27017/shop-api', {
  useNewUrlParser: true,
  useCreateIndex: true,
});

const shop = mongoose.model(
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
const file1 = fs.readFileSync(
  './images/122000950_621185588552788_4563057512020849938_n.jpg',
  'base64'
);
const file2 = fs.readFileSync('./images/3.jpg', 'base64');
const bike = new shop({
  name: 'grapefruit',
  category: 'vegies',
  isActice: true,
  details: {
    description: 'bitter but good',
    price: 10,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Grapefruits_-_whole-halved-segments.jpg/1200px-Grapefruits_-_whole-halved-segments.jpg',
      'https://fbi.org.il/wp-content/uploads/2019/05/grapefruit.png',
    ],
    phoneNumber: '0542294480',
  },
});
console.log(bike.images);
bike
  .save()
  .then(console.log(bike.name))
  .catch((error) => {
    console.log(error);
  });
