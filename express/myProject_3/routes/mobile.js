var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/mobile', function(req, res, next) {
  res.render('mobile', { title: 'samsung mobile',modle:'Galaxy s22'});
});

module.exports = router;
