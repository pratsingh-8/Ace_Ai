const express = require('express')
const route = express.Router();
const multer=require('multer')
const {getdata,create, authen}=require('../controller/pro')
const {resume,Ats}=require('../controller/Ai_api')
const upload = multer({dest:'uploads/'})

route.get('/login',getdata);
route.post('/register',create)
route.post('/login',authen)
route.post('/resume',resume)
route.post('/Ats',upload.single("atsresume"),Ats)
module.exports = route