const express = require("express");
const router = express.Router();
const Product = require('../models/product');
const Order = require('../models/order');


router.get('/products', (req, res) => {
  Product.find().then(rec => {
    if(rec) {
      res.status(200).json(rec);
    } else {
      res.status(200).json([]);
    }
  })
})
router.post('/checkout', (req, res) => {
  const newOrder = new Order({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    addressOne: req.body.addressOne,
    addressTwo: req.body.addressTwo,
    country: req.body.country,
    state: req.body.state,
    zip: req.body.zip,
    items: req.body.items.map(item => item._id) || []
  })
  newOrder.save().then(rec => {
    res.status(200).json(rec)
  }, (err) => {
    res.status(500).json({error: 'error'})
  });
})
router.get('/orders', (req, res) => {
  Order.find()
  .populate('items')
  .exec()
  .then(rec => {
    res.status(200).json(rec);
  })
  .catch(err => {
    res.status(500).json(err);
  })
})
