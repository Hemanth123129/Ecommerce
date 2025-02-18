import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import About from './Pages/About'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Collection from './Pages/Collection'
import Product from './Pages/Product'
import Contact from './Pages/Contact'
import Orders from './Pages/Orders'
import PlaceOrder from './Pages/PlaceOrder'
import Login from './Pages/Login'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import SearchBar from './Components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';



function App() {

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw]'>
      <ToastContainer/>
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/product/:productid' element={<Product/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/placeorder' element={<PlaceOrder/>}/>
        <Route path='/login' element={<Login/>}/>   
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
