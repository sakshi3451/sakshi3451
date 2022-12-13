var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const mobileRouter=require('./routes/mobile');
const shoesRouter=require('./routes/shoes');
const dressesRouter=require('./routes/dresses');
const booksRouter=require('./routes/books');
const mongooperations =require('./routes/mongooperations');
const addData= require('./routes/addData.js');
const updateData= require('./routes/updateData.js');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.get('/mobile',mobileRouter);
app.get('/shoes',shoesRouter);
app.get('/dresses',dressesRouter);
app.get('/books',booksRouter);
app.get('/getdata',mongooperations);
app.get('/getdatabyparam/:name/:city',mongooperations);
app.get('/getspecificdata',mongooperations);
app.post('/addData',mongooperations);
app.put('/updateData',mongooperations);
app.delete('/deleteData',mongooperations);
app.get('/openForm',addData);
app.post('/addNewData',addData);
app.get('/getDataToBeUpdated',updateData);
app.post('/updateNewData',updateData);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
