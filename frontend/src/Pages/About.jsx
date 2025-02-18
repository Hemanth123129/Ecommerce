import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../Components/NewsletterBox'
export default function About() {
  return (
    <div className=''>
        <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={"ABOUT"} text2={"US"}/>
        </div>
        <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4'>
             <p className='text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe est nostrum consequatur quis placeat vel? Vel corporis eligendi, voluptates ad excepturi magnam similique, perferendis culpa nesciunt inventore, libero possimus cum.</p>
             <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti fugiat tempora ducimus vero exercitationem impedit debitis suscipit facere accusamus sunt officiis, sapiente, itaque numquam molestias? Expedita id quae eaque commodi.</p>
             <b className='text-gray-800'>Our Mission</b>
             <p className='text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. orem, ipsum dolor sit amet consectetur adipisicing elit. reiciendis aliquid animi quisquam sed, doloremque blanditiis eum hic quibusdam iure! Quae, sunt officia cupiditate delectus explicabo nemo quaerat quo dolorem!</p>
          </div>
        </div>

        <div className='text-2xl py-4'>
          <Title text1={"WHY"} text2={"CHOOSE US"}></Title>
        </div>

        <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border border-gray-300 px-10 md:px-14 py-6 sm:py-15 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique blanditiis a eveniet illum atque velit </p>
          </div>
          <div className='border-t border-gray-300 border-b px-10 md:px-14 py-6 sm:py-15 flex flex-col gap-5'>
            <b>Convinience:</b>
            <p className='text-gray-600'>Similique a aborum tibus perspiciatis. Quia quis corporis et dolore quo doloribus incidunt praesentium in.</p>
          </div>
          <div className='border border-gray-300 px-10 md:px-14 py-8 sm:py-15 flex flex-col gap-5'>
            <b>Excpetional Customer Service:</b>
            <p className='text-gray-600'>Lorem, ipsum dolor sit Similique blanditiis a eveniet  laborum dolores iure voluptatibus perspiciatis. Quia quis .</p>
          </div>
        </div>

        <NewsletterBox/>
        
    </div>
  )
}
