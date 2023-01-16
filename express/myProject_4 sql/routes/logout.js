var express = require('express');
const collection = require('../utils/mongoconnection').connection();
var router = express.Router();
const jwt = require('jsonwebtoken');

router.get('/logout', function(req, res, next) {
    res.clearCookie('loginCookie');
    //res.send('loginPage cookie cleared');
    res.render('login',{error:null, loginStatus:false});
});

module.exports = router;



/*var express = require('express');
var router = express.Router();
router.get('/logout', function(req, res, next) {
res.clearCookie('login','login cookies');
res.render('login');
});

router.get('/logout', function(req, res, next) {
   })
  
module.exports = router;*/




//var express = require('express');
//const collection = require('../utils/mongoconnection').connection();
//var router = express.Router();

/* GET home page. */
//router.get('/logout', function(req, res, next) {
//res.clearCookie('login',' loginCookie');
//res.render('login',{error:null, loginStatus:false});
//});


//module.exports = router;

