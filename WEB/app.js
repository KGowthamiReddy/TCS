var createError=require('http-errors)
var express=require('express');
var path=require('path');
var cookieParser=require('cookie-parser');
var logger=require('morgen');
var cors=require('cors');
var indexRouter=require('./routers/index');
var usersRouter=require('./routers/users');
var app=express();
app.use(cors{origin: 'http://localhost:3001'});
//view engine setup
app.set('views',path.join(-dirnames,'views'));
app.set('vieew engine','jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.joim(-dirname,'public')));
app.use('/', indexRouter);
app.use('/users',usersRouter);
// catch 404 and forward to error handler
app.use(fuction(req,res,next) {
next(createError(404));
)
