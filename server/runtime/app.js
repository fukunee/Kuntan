const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const app = express();

// view engine setup - ejs.html
app.set('views', path.join(__dirname, '../dist'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// runtime middleware setup
app.use(logger('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public/dist')));
app.use(express.static(path.join(__dirname, '../public')));

// http routing
const Router = express.Router(app);
// noinspection JSUnresolvedFunction
Router.use('/', require('../api/IndexRoute'));
// noinspection JSUnresolvedFunction
Router.use('/auth', require('../api/AuthRoute'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module["exports"] = app;
