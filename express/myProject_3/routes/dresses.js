var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/dresses', function(req, res, next) {
  res.render('dresses', { title: 'dresses',company:'Amazon'});
});

module.exports = router;
