const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config();
const connectdb = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.uri)
        console.log('connected to data base')
    }
    catch(err){
        console.log(err)
    }
}

module.exports = connectdb;