var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/dresses', function(req, res, next) {
  res.render('dresses', { title: 'Express one'});
});

module.exports = router;
