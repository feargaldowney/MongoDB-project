var express = require('express');
const articles = require('../models/article');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Feargal\'s Blog' });
});

module.exports = router;
