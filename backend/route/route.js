const express = require('express')
const route = express.Router();
const {getdata,create, authen}=require('../controller/pro')
const {resume}=require('../controller/Ai_api')

route.get('/login',getdata);
route.post('/register',create)
route.post('/login',authen)
route.post('/resume',resume)
module.exports = route