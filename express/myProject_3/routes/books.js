var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/books', function(req, res, next) {
  res.render('books', { title:'books',company:'flipcart'});
});

module.exports = router;
