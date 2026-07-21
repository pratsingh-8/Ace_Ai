const express = require('express')
const route = express.Router();
const {getdata,create, authen}=require('../controller/pro')

route.get('/login',getdata);
route.post('/register',create)
route.post('/login',authen)
module.exports = route