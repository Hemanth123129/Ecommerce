import express from "express"
import {addproduct,removeproduct,listproducts,singleproduct} from "../controllers/productController.js"
import upload from "../middleware/multer.js"
import adminauth from "../middleware/adminauth.js"



const productRouter = express.Router()

productRouter.post("/add",upload.fields([{name:'image1',maxCount:1},{name:'image2',maxCount:1},
                                         {name:'image3',maxCount:1},{name:'image4',maxCount:1},
                                         {name:'image5',maxCount:1}]),addproduct)

productRouter.delete("/remove/:productid",adminauth,removeproduct)
productRouter.get("/listproducts",adminauth,listproducts)
productRouter.get("/showproduct/:productid",adminauth,singleproduct)

export default productRouter