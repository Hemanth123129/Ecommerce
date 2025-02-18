import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Shopcontext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import RelatedProducts from '../Components/RelatedProducts'

const Product = () => {

  const {productid} = useParams()
  const {products, currency, addtocart} = useContext(Shopcontext)
  const [productData, setproductData] = useState()
  const [image,setimage] = useState(null)
  const [size,setsize] = useState("")
  console.log(productid)
  
  const fetchproductdata = () =>{
    products.map((item) => {
      if(item._id === productid){
        setproductData(item)
        console.log(productData)
        setimage(item.image[0])
      }
    }) 
  }

  useEffect(()=>{
    fetchproductdata()
  },[productid,products])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Data*/}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        
        {/* ---------------- Product Images*/}
        <div className='flex-1 flex flex-col-reverse gap-3 md:flex-row'>
          
          {/*All Images Left side */}
          <div className='flex md:flex-col overflow-x-auto md:overflow-y-scroll justify-between md:justify-normal sm:w-[18.7%] w-full'>
            {
              // console.log(productData.image)
              productData.image.map((item,index) =>(
                <img onClick={() => setimage(item)} key={index} src={item} alt="" className='w-[24%] sm:w-full h-fit sm:mb-2 cursor-pointer'/>
              ))
            }
          </div>
          
          {/*One Image Right side */}
          <div className='w-full sm:w-[80%]'>
            <img className="w-full md:max-h-svh" src={image} alt="" />
          </div>
        </div>
        {/* --------------- Product Images end*/}

        {/* ----------------Product Info*/}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2' >{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img className="w-3.5" src={assets.star_icon} alt="" />
            <img className="w-3.5" src={assets.star_icon} alt="" />
            <img className="w-3.5" src={assets.star_icon} alt="" />
            <img className="w-3.5" src={assets.star_icon} alt="" />
            <img className="w-3.5" src={assets.star_dull_icon} alt="" />
            <p className='pl-2'>{122}</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-[4/5]'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
              <p>Select Size</p>
              <div className='flex gap-2'>
                {productData.sizes.map((item,index)=>
                <button onClick={()=>setsize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500':""}`} key={index} >{item}</button>
                )}
              </div>
          </div>
          <button onClick={()=>addtocart(productData._id, size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'> ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5'/>
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p> 100% Orginal Products</p>
            <p> Cash on Delivery is available on this products</p>
            <p> Easy return and exchange policy within 7 days</p>
          </div>  
        </div>
        {/* --------------- Product Info ends*/}

      </div>
      {/* --------------- Description & Review Section*/}
      <div className='mt-20'>
        <div className='flex gap-1'>
          <b className='border px-5 py-3 text-sm'> Description</b>
          <p className='border px-5 py-3 text-sm'> Reviews(122)</p>
        </div>
        <div className='flex flex-col gap-4 border mt-1 px-6 py-6 text-sm text-gray-500'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, debitis. Neque alias vero, sint dignissimos aut vel totam beatae maxime eveniet eligendi facilis illum excepturi perspiciatis ea quod quas quibusdam?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ea vero sint ad a laborum sequi at laudantium, dignissimos aliquam! Neque harum quidem aliquam aut tempore nulla iusto distinctio eveniet?</p>
        </div>
      </div>
      {/* --------------- display related products-----*/}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ): <div className='opacity-0'></div>
}

export default Product
