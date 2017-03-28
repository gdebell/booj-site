const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');
const knex = require('../db/knex');

router.get('/', function (req, res, next) {
  return knex('home_listings')
  .then(function(data) {
    const renderObject = {};
    renderObject.homes = data;
    res.render('index', renderObject);
  });
});

router.get('/lowToHigh', function(req, res, next) {
  return knex('home_listings')
  .select('*')
  .orderBy('price')
  .then(function(data){
    const renderObject = {};
    renderObject.homes = data;
    res.render('index', renderObject);
  });
});


router.get('/highToLow', function(req, res, next) {
  return knex('home_listings')
  .select('*')
  .orderBy('price', 'desc')
  .then(function(data){
    const renderObject = {};
    renderObject.homes = data;
    res.render('index', renderObject);
  });
});


module.exports = router;
