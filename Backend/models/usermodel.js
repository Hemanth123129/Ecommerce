import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: {type:String, required:true},
    email: {type:String, required:true, unique:true},
    password: {type:String, required:true},
    cartData: {type:Object, default:{}},
},{minimize:false})  // since we are initalizing cartdata with empty{}
                     // mongoose by default neglects this to create a user
                     // who uses the schema in this model with inintalised 
                     // cartdata to be {} we use minimize:false which is
                     // inbuilt parameter    

const userModel = mongoose.models.user || mongoose.model("user", userSchema)

export default userModel