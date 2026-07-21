const express = require('express')
const app = express()
const con1 = require('./database/base')
const route = require('./route/route')
const cors = require('cors')
app.use(cors());
app.use(express.json());
con1()
app.use('/ace-ai',route);
app.listen(3000,()=>{
    console.log("jai mata di");
})