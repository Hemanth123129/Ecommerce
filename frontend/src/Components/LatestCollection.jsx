import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Shopcontext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

function LatestCollection() {

    const {products} = useContext(Shopcontext)
    const [latest,setlatest] = useState([])

    useEffect(()=>{
        setlatest(products.slice(0,10))
    },[])

  return (
    <div className='my-5'>
        
        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
            <p className='w-3/4 text-xs sm:text-sm md:text-base text-gray-600 m-auto' >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum velit impedit sapiente, ratione saepe dolores non excepturi laudantium labore modi quo expedita eaque doloremque animi, enim ducimus odio similique atque?
            </p>
        </div>
        {/* */}
        <div className='grid mx-auto sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5'>
                {latest.map((item,index)=>{ 
                    return <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>
                })}         
        </div>
    </div>
  )
}

export default LatestCollection
