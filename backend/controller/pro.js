const mode = require('../model/skele')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const getdata = async (req,res)=>{
    try{
        const all_data = await mode.find();
        res.status(200).json({
            success:true,
            item:all_data
        })
        console.log(all_data)
        
    }
    catch(err){
        console.log(err.message);
    }
}
const authen = async (req,res)=>{
    try{
        console.log('login request')
        const {email,password}=req.body;
        const user = await mode.findOne({email})
        if(!user){
            return res.status(404).json({
                success:false,
                message:'Invalid User'
            })
        }
        const pass = await bcrypt.compare(password,user.password);
        if(!pass){
            return res.status(400).json({
                success:false,
                message:"Wrong Password"
            })
        }
        const token = await jwt.sign({
            id:user._id,
            email:user.email
        },process.env.JWTKEY,
        {
            expiresIn:"1d"
        },
        );
    res.status(200).json({
        success:true,
        Token:token
    });
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}
const create = async (req,res)=>{
    try{
        console.log("kuch to aaya hai");
        const {name,email,password} = req.body;
        const user = await mode.findOne({email})
        if(user){
            console.log('found');
            res.status(400).json({
                success:false,
                message:"This email is already registered"
            })
        }
        else{
            const encry = await bcrypt.hash(password,10)
            const newdata = new mode({name,email,password:encry});
            await newdata.save();
            res.status(200).json({
                success:true
            });
        }
        
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}
module.exports={getdata,create,authen};