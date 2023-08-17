var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Introducción a los Sistemas de Control 2023' });
});

module.exports = router;
