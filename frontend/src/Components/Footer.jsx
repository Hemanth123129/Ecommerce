import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mt-25 text-sm '>       
            
            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />

                <p className='w-full md:w-2/3 text-gray-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, officiis velit hic nobis id suscipit tempore, consequatur error, sequi excepturi commodi soluta aspernatur ipsam earum quaerat! Unde, repellendus. Ea, hic. 
                </p>
            </div>

            <div className='sm:mt-2'>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
 
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div className='sm:mt-2'>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+1-212-242-0637</li>
                    <li>saketh.tukuntla@gmail.com</li>      
                </ul>
            </div>
        
        </div>
        
        <div className='my-10'>
            <hr/>
            <p className='py-5 text-sm text-center'>Copyright 2024@ forever.com -All Copyrights reserved</p>
        
        </div>
    </div>
    
  )
}

export default Footer
