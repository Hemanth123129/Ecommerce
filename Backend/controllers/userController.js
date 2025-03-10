import userModel from "../models/usermodel.js";
import validator from "validator"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const createToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

const loginuser = async (req,res) =>{
    try {
        const {email,password} = req.body
        const user = await userModel.findOne({email})

        if(!user){
            return res.json({success:false,msg:"User dont exists"})  
        }

        const isMatch =  await bcrypt.compare(password, user.password)

        if(isMatch){
            const token = createToken(user._id)
            return res.json({success:true,token})
        }
        else{
            return res.json({success:false,msg:"invalidcredentials"})
        }
    } catch (error) {
        console.log(error)
        return res.json({success:false,msg:error.msg})
    }
}

const getallusers = async (req,res) =>{
    try {
        const users = await userModel.find({})
        if(users.length > 0){
            return res.json({success:true,users})
        }
        else{
            return res.json({success:true,msg:"Users not registered"})
        }
    } catch (error) {
        console.log(error)
        return res.json({success:false,msg:error.msg})
    }
}

const registeruser = async (req,res) =>{
    try {
        const {name,email,password} = req.body;
        // checking user exists or not
        const exists = await userModel.findOne({email})
        if(exists){
          return res.json({success:false,msg:"User already exists"})  
        }

        if(!validator.isEmail(email)){
            return res.json({success:false,msg:"Please enter a valid email"})
        }

        if(password.length < 8){
            return res.json({success:false,msg:"Please enter a strong password"})
        }

        const salt = await bcrypt.genSalt(10)
        const hashedpassword = await bcrypt.hash(password,salt)

        const newuser = new userModel({
            name,   
            email,
            password:hashedpassword
        })

        const user = await newuser.save()
        const token = createToken(user._id)
        return res.json({success:true,token})

    } catch (error) {
        console.log(error)
        return res.json({success:false,msg:error.msg})

    }
}

const adminLogin = async (req,res) =>{
    try {
        const {email,password} = req.body
        if(email === process.env.ADMIN_EMAIL && password == process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password,process.env.JWT_SECRET)
            res.json({success:true,token})
        }
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}

export {loginuser,registeruser,getallusers,adminLogin}