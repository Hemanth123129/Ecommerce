import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const RelatedProducts = ({category,subCategory}) => {
    const [related,setrelated] = useState([])
    const {products} = useContext(Shopcontext)

    useEffect(()=>{
        if(products.length > 0){
            let productscopy = products.slice()
            productscopy = productscopy.filter((item)=> category === item.category)
            productscopy = productscopy.filter((item)=>item.subCategory === subCategory)

            console.log(productscopy.slice(0,5))
            setrelated(productscopy)
        }
    },[products])
  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-2'>
            <Title text1={"RELATED"} text-2={"PRODUCTS"}/>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
            {related.map((item,index) => (
                <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>
            ))}
        </div>
    </div>
  ) 
}

export default RelatedProducts
