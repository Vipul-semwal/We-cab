var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cookieSession = require('cookie-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var vendorRouter = require('./routes/Vendors')

// admin's routes
var AdminRouter = require('./routes/admin/admin');
var UiRouter = require('./routes/admin/adminUI')
var AdminAuthRouter = require('./routes/admin/adminAuth')


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieSession({
  name: 'session',
  keys: [process.env.SESSION_SECRET],
  maxAge: 30 * 24 * 60 * 60 * 1000, 
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: process.env.NODE_ENV === 'production' ? 'None' : ''
}));

app.use('/', indexRouter);
app.use('/admin', AdminRouter)
app.use('/admin/auth', AdminAuthRouter)
app.use('/admin/ui', UiRouter)
app.use('/users', usersRouter);
app.use('/vendor', vendorRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
