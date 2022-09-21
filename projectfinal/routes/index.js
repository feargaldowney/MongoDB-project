var express = require('express');
const articles = require('../models/article');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Feargal\'s Blog' });
});
// router.get('/', function(req, res, next) {
//   res.render('article', { title: 'Feargal\'s Blog' }); 
// });
// router.get('/', function(req, res, next) {
//   res.render('articleList', { title: 'Feargal\'s Blog' });
// });

// These dont seem to do anything


module.exports = router;
