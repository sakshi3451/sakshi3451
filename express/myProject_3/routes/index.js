var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 //res.render('index', { title: 'Express one'});
 res.render('index', { title: 'Express One', loginStatus: false });
});

module.exports = router;

