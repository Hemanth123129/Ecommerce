import React, { useContext, useEffect, useState,useRef } from 'react'
import { Shopcontext } from '../context/ShopContext'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import CartTotal from '../Components/CartTotal'

function Cart() {

  const {products, currency , cartitems, updatecartquantity, navigate} = useContext(Shopcontext)
  
  const [cartpageData, setcartpagedata] = useState([])

  const [focused, setFocused] = useState(false)
  const onFocus = () => setFocused(true)
  const onBlur = () => setFocused(false)

  useEffect(()=>{
    const tempData = [];
    for(const items in cartitems)
      {
      for(const size in cartitems[items])
        {
          if(cartitems[items][size] > 0 ){
            tempData.push({_id: items,size: size, quantity:cartitems[items][size]})
          }

        }
      }
      setcartpagedata(tempData)
    },[cartitems])
  
  return (
    <div className='border-t pt-7'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'}/>
      </div>
      <div className=''>
        {
          cartpageData.map((item,index)=>{
            const productdata = products.find((product)=>product._id === item._id);

            return(
              <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-3'>
                
                <div className='flex items-start gap-6'>
                  <img className="w-16 sm:w-20" src={productdata.image[0]} alt="" />
                  <div>
                    <p className='text-xs sm:text-lg font-medium'>{productdata.name}</p>
                    <div className='flex items-center gap-5 mt-2'>
                      <p>{currency}{productdata.price}</p>
                      <p className='px-2 py-1 sm:px-3 sm:py-1 border bg-slate-100'>{item.size}</p>
                    </div>
                  </div>
                </div>
                <input onFocus={onFocus} 
                       onBlur={onBlur} 
                       onChange={(e)=> e.target.value === "" || e.target.value === 0 ? null:updatecartquantity(item._id,item.size,Number(e.target.value))} className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1" type="number" min={1} defaultValue={item.quantity}/>
                <img onClick={()=>updatecartquantity(item._id,item.size,0)} className="w-4 mr-4 sm:w-5 cursor-pointer" src={assets.bin_icon} alt="" />
              </div>
            )


          })
        }
      </div>

      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal/>
          <div className='w-full text-end'>
            <button onClick={()=> navigate('/placeorder')} className='bg-black text-white text-sm my-8 px-8 py-3'>CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
