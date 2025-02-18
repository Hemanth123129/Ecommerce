import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'


const BestSeller = () => {
  const {products} = useContext(Shopcontext)
  const [BestSeller,setBestSeller] = useState([])

  useEffect(()=>{
    const bestproducts = products.filter((item)=>(item.bestseller))
    setBestSeller(bestproducts.slice(0,6))
  },[])

  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'BEST'} text2={'SELLERS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
             Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </div>

        <div className='grid grid-cols-2  md:grid-cols-3 lg:grid-cols-6 gap-3 gap-y-6'>
            {BestSeller.map((item,index)=>(
                <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>
            ))}
        </div>
    </div>
  )
}

export default BestSeller
