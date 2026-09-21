const authorization = (req,res,next)=>{
    try{
        const token = req.headers.authorization.split(" ")[1]
        if(token){
            req.key=token
            next();
        }
        else{
            return res.status(401).json({
                success:false,
                message:"UNAUTHORIZED"
            })
        }
    }catch(err){
        console.error(err.message)
    }
}

module.exports={authorization}