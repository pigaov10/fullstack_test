const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

require('../models/Default');
const Default = mongoose.model('default');

router.get('/list', (req, res) => {
  Default.find({}) 
    .then(defaultPayment => {
      res.json(defaultPayment);
    });
});

router.get('/value', (req, res) => {
    Default.find({})
      .sort({value:'asc'})
      .then(defaultPayment => {
        res.json(defaultPayment);
      });
});

router.get('/client', (req, res) => {
    Default.find({})
      .sort({client:'asc'})
      .then(defaultPayment => {
        res.json(defaultPayment);
      });
});

router.get('/since', (req, res) => {
    Default.find({})
      .sort({since:'asc'})
      .then(defaultPayment => {
        res.json(defaultPayment);
      });
});

module.exports = router;