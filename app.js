var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var logger = require('morgan');
var jwt = require('jsonwebtoken');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const mongoose = require('./config/mongoose');
const db = mongoose();
var app = express();


const token = jwt.sign({name: '张三的空间框架'}, 'suuiuuuuiuiiu', {expiresIn: 10080});

jwt.verify(token, 'suuiuuuuiuiiu', function (err, decoded) {
	if (err) throw err;
	console.log(decoded);
});
console.log(token);

//  跨域配置

/*app.all('*', function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});*/

//  view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json({limit: '1mb'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//  catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

app.use(cors({
	origin: ['http://localhost:8080'],
	methods: ['GET', 'POST'],
	alloweHeaders: ['Content-Type', 'Authorization', 'Cache-Control', 'no-cache, no-store, must-revalidate']
}));

//  error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	//  render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
