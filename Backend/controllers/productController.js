import { v2 as cloudinary } from "cloudinary";
import productmodel from "../models/productmodel.js";

const addproduct = async (req,res) =>{
    try {
        const {name,description,price,category,SubCategory,sizes,bestseller} = req.body
        
        const image1 =  req.files.image1 && req.files.image1[0]
        const image2 =  req.files.image2 && req.files.image2[0]
        const image3 =  req.files.image3 && req.files.image3[0]
        const image4 =  req.files.image4 && req.files.image4[0]

        const images = [image1,image2,image3,image4]
        images.filter((item)=>{
            item !== undefined
        })

        let imageUrl = await Promise.all(
            images.map(async (item) =>{
                let result = await cloudinary.uploader.upload(item.path,{resource_type:"image"});
                return result.secure_url
            })
        ) // uploads images to cloudinary and returns list of image urls 

        const productData = {
            name,
            description,
            category,
            price:Number(price),
            SubCategory,
            bestseller: bestseller === "true"? true:false,
            sizes:JSON.parse(sizes), // why is this
            images: imageUrl,
            date: Date.now()
        }

        const productdata = new productmodel(productData)
        await productdata.save()
        
        console.log(name,description,price,category,SubCategory,sizes,bestseller)
        console.log(req.files)
        console.log(imageUrl)
        
        return res.json({success:true,message:"Product added"})
    } 
    catch(error){
            console.log(error)
            return res.json({success:false,msg:error.msg})
        }
}

const listproducts = async (req,res) =>{
    try {
        const products = await productmodel.find({});
        res.json({success:true,products})
    } catch (error) {
        console.log(error)
        return res.json({success:false,msg:error.msg})
    }
}

const removeproduct = async (req,res) =>{
    try {
        const productid = req.params.productid
        const product = await productmodel.findById( productid )

        if(!product){
            return res.json({success:false,msg:"Invalid ProductID"})
        }

        await productmodel.findByIdAndDelete(req.params.productid)
        res.json({success:true,message:"Product removed"})
    } catch (error) {
        console.log(error)
        return res.json({success:false,msg:error.msg})
    }
}

const singleproduct = async (req,res) =>{
    try {
        const productid = req.params.productid
        const product = await productmodel.findById( productid )
        if(!product){
            return res.json({success:false,msg:"Invalid ProductID"})
        }

        const getproduct = await productmodel.findById(productid)
        console.log(getproduct)
        res.json({success:true,getproduct})
    } catch (error) {
        console.log(error)
        return res.json({success:false,msg:error.msg})
    }
}


export {addproduct,removeproduct,listproducts,singleproduct}