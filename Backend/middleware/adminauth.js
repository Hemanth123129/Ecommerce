import jwt from "jsonwebtoken"
import { adminLogin } from "../controllers/userController"
const adminauth = async (req,res,next) =>{
    try {
        const {token} = req.headers
        if(!token){
            return res.json({success:false,message:"Not Authorized Login Again"})
        }
        const token_decode = jwt.verify(token,process.env.process.env.JWT_SECRET)
        if(token_decode != (process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD)){
            return res.json({success:false,message:"Not Authorized Login Again"})
        }
        next()
    } catch (error) {
        console.log(error)
        return res.json({success:false,msg:error.msg})
    }
}

export default adminauth