import React, { useContext, useState } from 'react'
import CartTotal from '../Components/CartTotal'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import { Shopcontext } from '../context/ShopContext'

function PlaceOrder() {

  const [paymentmethod, setpaymentmethod] = useState()

  const {navigate} = useContext(Shopcontext)
   
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-18 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/*------------ Left Side ------------- */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[450px]">
        
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'}></Title> 
        </div>
        
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3 w-full' type='text' placeholder='First name'/>
          <input className='border border-gray-300 rounded py-1.5 px-3 w-full' type='text' placeholder='Last Name'/>
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3 w-full' type='email' placeholder='Email address'/>
        <input className='border border-gray-300 rounded py-1.5 px-3 w-full' type='text' placeholder='Address'/>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3 w-full' type='text' placeholder='City'/>
          <input className='border border-gray-300 rounded py-1.5 px-3 w-full' type='text' placeholder='State'/>
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3 w-full' type='number' placeholder='Zip code'/>
          <input className='border border-gray-300 rounded py-1.5 px-3 w-full' type='text' placeholder='Country'/>
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3 w-full' type='number' placeholder='Phone'/>
      </div>
      {/*------------  Right Side ------------- */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal/>
        </div>

        <div className='mt-12'>
          <Title text1={"PAYMENT"} text2={'METHOD'}></Title>
          {/*------------ Payment Selection ------------- */}
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={()=>{setpaymentmethod('stripe')}} className='flex items-center gap-2 border rounded p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${paymentmethod === "stripe"?"bg-green-500" :null}`}></p>
              <img className="h-4 w-10 mx-2" src={assets.stripe_logo} alt="" />
            </div>
            <div onClick={()=>{setpaymentmethod('razorpay')}} className='flex items-center gap-2 border rounded p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${paymentmethod === "razorpay"?"bg-green-500" :null}`}></p>
              <img className="h-4 w-18 mx-2" src={assets.razorpay_logo} alt="" />
            </div>
            <div onClick={()=>{setpaymentmethod('cod')}} className='flex items-center gap-2 border rounded p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${paymentmethod === "cod"?"bg-green-500" :null}`}></p>
              <p className='text-gray-700 text-xs font-medium mx-2'>CASH ON DELIVERY</p>
            </div>
          </div>

          <div className='w-full text-end mt-8'>
            <button onClick={()=>(navigate("/orders"))} className='text-white bg-black px-16 py-3 text-sm'>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder
