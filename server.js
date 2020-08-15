const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const managerapi=require('./api/login');
const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//session authentication
app.use(session({
    secret: 'f9Crj@U+]}DB*z.e',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge:3600000
    }
  }))

app.use('/managerAPI/',managerapi);
  
app.listen(port, () => {
    console.log('listening on 3000')
  })