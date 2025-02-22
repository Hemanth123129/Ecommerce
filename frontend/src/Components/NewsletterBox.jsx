import React from 'react'

const NewsletterBox = () => {
    
    const HandleSubmit = (e) =>{
        e.preventDefault()
    }
    
    return (
        <div className='text-center mt-10'>
            <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>     
            <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p> 
            <form onSubmit= {HandleSubmit} className="flex w-3/4 sm:w-3/4 md:w-3.5/4 lg:w-1/2 text-center items-center border gap-2 mx-auto my-6" >
                <input className=" px-2 w-full sm:flex-1 outline-none" type="email" placeholder='Enter your email' required />   
                <button className="bg-black text-white text-xs px-6 sm:px-10 py-3 " type='submit'>SUBSCRIBE</button>   
            </form>    
        </div>
  )
}

export default NewsletterBox
