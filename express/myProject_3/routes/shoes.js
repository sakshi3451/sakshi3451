var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/shoes', function(req, res, next) {
  res.render('shoes', { title: 'shoes',company:'Bata'});
});

module.exports = router;
