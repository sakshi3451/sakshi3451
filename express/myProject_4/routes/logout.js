var express = require('express');
var router = express.Router();
const connObj  = require('../utils/sqlConnection');
const sql = require('mssql');
var cookieParser = require('cookie-parser');
router.use(cookieParser());
const jwt = require('jsonwebtoken');

/* GET home page. */
router.get('/logout', function(req, res, next) {
    
  res.render('login');
});

router.get('/logout', function(req, res, next) {
   });
  
module.exports = router;