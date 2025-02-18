// Note here I am using 2 use effects
// First Life cycle // initial render
// filterproducts is set to [] so map is showing no products

// second life cycle

// then because of first use effect  filterproducts is set to products but console.log shows [] because the React batches state updates asynchronusly
// also filterproducts is still [] before this useeffect runs because execution is not at point of rendering 
// so the filterproducts is still not set to products 

// then because of second use effect apply filter runs and filterproducts is again set to [] if we use 
// let productcopy = filterproducts.slice() because filterproducts = []
// so we use let productcopy = products.slice() 
 

// Avoid calling a function that depends on state immediately after setting state. Instead, use useEffect to trigger actions after the state updates.
// State updates in React are asynchronous:
// When you call setsortby(e.target.value), React does not immediately update sortby. Instead, it schedules the update and will apply it before the next render.
// Right after calling setsortby, sortby still holds the old value inside sortProduct.
/* 

const HandleSortType = (e) =>{
    setsortby(e.target.value)
    sortProduct()  eventhough you are calling sortproduct and react re-renders the component because sortproduct 
                   has setFilterProducts which changes the state of Filter Products 
                   here "setsortby" updates the "sortby" state value only {after} the component renders not during component renders
                   so sortby value is still "relevant" at the time of render 
                   once it is rendered then "sortby" is set to "low-high" or "high-low"
                   then we need to render the component again 
                   [ so we use useeffect((),[sortby])]  when ever sortby changes once again after the componenet re-renders and UI updates
  }
*/

import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../Components/Title'
import ProductItem from '../Components/ProductItem'


const Collection = () => {
  const { showsearch, products, search, setsearch} = useContext(Shopcontext)
  
  const [showFilter, setshowFilter] = useState(false)

  const [filterproducts, setFilterProducts] = useState([]);

  const [category, setCategory] = useState([])
  const [subcategory, setsubCategory] = useState([])
  const [sortby, setsortby] = useState("relavent")

  

  useEffect(() => {
    applyfilter();
  }, [category, subcategory, search, setsearch])

  useEffect(()=>{
    sortProduct()
  },[sortby])

  const applyfilter = () => {
    let productcopy = products.slice()

    if(showsearch && search){
      productcopy = productcopy.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productcopy = productcopy.filter((item) => (category.includes(item.category)))}

    if (subcategory.length > 0) {
      productcopy = productcopy.filter((item) => (subcategory.includes(item.subCategory)))}

    setFilterProducts(productcopy)
  }

  const sortProduct = () =>{
    console.log("hello")
    let ftprodcopy = filterproducts.slice()
    console.log(sortby)
    
    switch(sortby){
      case "low-high":
        setFilterProducts(ftprodcopy.sort((a,b) => a.price - b.price))
        break

      case "high-low":
        setFilterProducts(ftprodcopy.sort((a,b) => b.price - a.price))
        break

      default:
        applyfilter()
        break
    }
  }

  const HandleSortType = (e) =>{
    setsortby(e.target.value)
    // sortProduct()
  }

  
  const togglecategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setCategory( (prev) => [...prev, e.target.value])
    }
  }

  const togglesubcategory = (e) => {
    if (subcategory.includes(e.target.value)) {
      setsubCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setsubCategory(prev => [...prev, e.target.value])
    }
  }

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-5 pt-5 border-t border-gray-400'>

     {/*Left Side */}
      <div className='min-w-60'>
        <p className='my-2 text-xl flex items-center cursor-pointer gap-2'>
            <img onClick = {() => setshowFilter(!showFilter)} 
            className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}  src={assets.dropdown_icon} alt="" />
            FILTERS
        </p>

        {/* Category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium '>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className="w-3" type="checkbox" value={'Men'} onChange={togglecategory}/> Men
            </p>
            <p className='flex gap-2'>
              <input className="w-3" type="checkbox" value={'Women'} onChange={togglecategory}/> Women
            </p>
            <p className='flex gap-2'>
              <input className="w-3" type="checkbox" value={'Kids'} onChange={togglecategory}/> Kids
            </p>
          </div>
        </div>

        {/* Sub Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium '>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className="w-3" type="checkbox" value={'Topwear'} onChange={togglesubcategory}/> Topwear
            </p>
            <p className='flex gap-2'>
              <input className="w-3" type="checkbox" value={'Bottomwear'} onChange={togglesubcategory}/> Bottonwear
            </p>
            <p className='flex gap-2'>
              <input className="w-3" type="checkbox" value={'Winterwear'} onChange={togglesubcategory}/> Winterwear
            </p>
          </div>
        </div>

      </div>

      {/*Right Side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          {/* Product Sort */}
          <select onChange={HandleSortType} className='border-2 border-gray-500 text-sm px-2'>
            <option value="relavent">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High </option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            console.log(sortby,filterproducts[0])
          }
          {  
            filterproducts.map((item, index) => (
              <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
            ))
          }
        </div>

      </div>


    </div>

  )
}

export default Collection




