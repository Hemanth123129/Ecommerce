import React, { useContext } from 'react'
import { Shopcontext } from '../context/ShopContext'
import Title from './Title'

function CartTotal() {

const { currency, deliveryfee,getcartAmount} = useContext(Shopcontext)
  return (
    <div className='w-full'>
        <div className='text-2xl'>
            <Title text1={'CART'} text2={'TOTAL'}/>
        </div>
        <div className='flex flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between'>
                <p>Subtotal</p>
                <p>{currency} {getcartAmount()}.00</p>
            </div>
            <hr/>
            <div className='flex justify-between'>
                <p>Shippingfee</p>
                <p>{currency} {deliveryfee}.00</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <b>Total</b>
                <b>{currency} {deliveryfee}.00</b>
            </div>
            
        </div>
      
    </div>
  )
}

export default CartTotal
