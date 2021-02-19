const express= require('express')
,     routes= require('./routes')
,     user= require('/routes/user')
,     path= reqire('/path');

const session= require('express');
const reg1= express();
const my sql= require('my sql');
const bodyParser= require('bodyParser');
const connect= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'registration'
});

Connection.connect();
globalThis.db= connection;
reg1.set('port',)