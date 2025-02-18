import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { Shopcontext } from '../context/ShopContext'


function Navbar() {

  const [visible,setVisible] = useState(false)
  const {setshowsearch , getCartCount} = useContext(Shopcontext)
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
        <Link to="/"><img src={assets.logo} className='w-36'></img></Link>
        <ul className='sm:flex gap-5 text-sm text-gray-700 hidden'>
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
          </NavLink>
          <NavLink to="/collection" className="flex flex-col items-center gap-1">
            <p>COLLECTION</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
          </NavLink>
          <NavLink to="/about" className="flex flex-col items-center gap-1">
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
          </NavLink>
          <NavLink to="/contact" className="flex flex-col items-center gap-1">
            <p>CONTACT</p>
            <hr className='w-1/2 border-none h-[1.5px] bg-gray-700 hidden'/>
          </NavLink>
        </ul>

        <div className='flex items-center gap-4'>
          <img onClick={()=> setshowsearch(true)} src={assets.search_icon} className='cursor-pointer h-4'/>
          
          <div className='group relative'>
              <Link to="/login">
                <img src={assets.profile_icon} className='cursor-pointer h-4'/>
              </Link>
              <div className="hidden group-hover:block absolute right-0 pt-4">
                  <div className='flex flex-col text-sm gap-2 px-5 py-3 w-36 bg-slate-100 text-gray-500 rounded' >
                    <p className='cursor-pointer hover:text-black'>My Profile</p>
                    <p className='cursor-pointer hover:text-black'>Orders</p>
                    <p className='cursor-pointer hover:text-black'>Logout</p>
                  </div>
              </div>
          </div>

          <Link to='/cart' className='relative'>
            <img src={assets.cart_icon}className='h-4'/>
            <p className='absolute right-[-5px] top-[8px] text-center text-[7px] w-3 leading-3 bg-black text-white aspect-square rounded-full'>{getCartCount()}</p>
          </Link>

          <img onClick={()=>{setVisible(true)}}src={assets.menu_icon} className='h-4 sm:hidden'/>
        </div>
        {/* SideBar for small screen*/}
        <div className= {`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible? 'w-full': 'w-0'}`}>
          <div className='flex flex-col text-gray-600'>
            <div onClick={()=>{setVisible(false)}} className='flex items-center gap-4 p-3 cursor-pointer'>
              <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
              <p>Back</p>
            </div>
            <NavLink onClick={()=>{setVisible(false)}} className="cursor-pointer pl-6 py-3 border-t" to='/'> HOME</NavLink>
            <NavLink onClick={()=>{setVisible(false)}} className="cursor-pointer pl-6 py-3 border-t" to='/collection'> COLLECTION</NavLink>
            <NavLink onClick={()=>{setVisible(false)}} className="cursor-pointer pl-6 py-3 border-t" to='/about'> ABOUT</NavLink>
            <NavLink onClick={()=>{setVisible(false)}} className="cursor-pointer pl-6 py-3 border-t border-y" to='/contact'> CONTACT</NavLink>
          </div>
        </div>
    </div>
  )
}

export default Navbar
