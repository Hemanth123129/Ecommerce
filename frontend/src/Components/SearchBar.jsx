import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'


const SearchBar = () => {
    
    const {search,setsearch,showsearch,setshowsearch} = useContext(Shopcontext)
    const [Visible,setVisible] = useState(false)
    const path = useLocation()
    const location = path.pathname
    console.log(path.pathname)
    console.log(showsearch)

    useEffect(()=>{
        if(location.includes("/collection")){
            setVisible(true)
        }
        else{
            setVisible(false)
        }
    })
    

    return (showsearch && Visible) ? (
    <div className='border-t border-gray-400 text-center bg-gray-50'>
      <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
        <input value={search} 
            className="flex-1 outline-none bg-inherit text-sm" 
            onChange={(e)=>setsearch(e.target.value)}              
            type="text" placeholder='Search'/>
        <img className="w-4" src={assets.search_icon} alt="" />
      </div>

      <img onClick={()=>setshowsearch(false)} className="inline w-3 cursor-pointer" src={assets.cross_icon} alt="" />

    </div>
  ):null

}

export default SearchBar
