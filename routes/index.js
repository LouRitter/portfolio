var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Louis Ritter | Web Developer' });
});
router.get('/about', function (req, res) {
  res.render('about');
});
router.get('/portfolio', function (req, res) {
  res.render('portfolio');
});
router.get('/contact', function (req, res) {
  res.render('contact');
});


module.exports = router;