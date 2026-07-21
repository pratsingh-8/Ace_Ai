const {model,Schema}=require('mongoose')
const myschema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})

const taskmodel = model('users',myschema)
module.exports = taskmodel;