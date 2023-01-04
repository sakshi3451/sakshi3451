var express = require('express');
const collection = require('../utils/mongoconnection').connection();
var router = express.Router();

/* GET home page. */
router.get('/logout', function(req, res, next) {
res.clearCookie('login',' loginCookie');
res.render('login',{error:null, loginStatus:false});
});


module.exports = router;

