const express = require('express')
const route = express.Router();
const multer=require('multer')
const {getdata,create, authen,profile}=require('../controller/pro')
const {resume,Ats,asses,calc}=require('../controller/Ai_api')
const {authorization}=require('../custom_middleaware/middle')
const upload = multer({dest:'uploads/'})


route.post('/register',create)
route.post('/login',authen)
route.post('/resume',authorization,resume)
route.post('/Ats',authorization,upload.single("atsresume"),Ats)
route.post('/asses',authorization,asses)
route.post('/calc',authorization,calc)
route.patch('/profile',authorization,profile)
route.get('/profetch',authorization,getdata)
module.exports = route
