const {model,Schema}=require('mongoose')
const myschema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:Number
    },
    MySkill:{
        type:String,
    },
    prepare_for:{
        type:String,
    }

})

const taskmodel = model('users',myschema)
module.exports = taskmodel;