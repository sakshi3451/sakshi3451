var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/logout', function(req, res, next) {
res.clearCookie('login','login cookies');
res.render('login');
});

router.get('/logout', function(req, res, next) {
   });
  
module.exports = router;

