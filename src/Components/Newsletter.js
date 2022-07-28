import React from 'react'
import img1 from '../assets/images/newsletter.png'
import imga from '../assets/images/googleplay.png'
import imgb from '../assets/images/applestore.png'

const Newsletter = () => {
  return (
    <div className='md:flex flex flex-col md:flex-row md:justify-between justify-center items-center font-heading mt-20 bg-secondary md:p-20 p-5'>
        <span className='md:w-[50%] text-center'>
            <img
            className='md:w-[60%] w-[50%] md:ml-10'
            src={img1}/>
        </span>

        <div className='md:w-[50%]'>
            <h3 className='text-3xl text-white'>You too can find Homer Foods</h3>
            <p className='text-sm text-white'>Join us and lets get you that homer food feeling</p>
            <input
            className='md:w-[60%] w-[50%] bg-white text-gray-600 p-2 mt-5 md:text-sm text-xc rounded-md md:h-12 h-8'
            placeholder='Your Email Address'
            />
            <button className='bg-black text-white md:w-[30%] w-[35%] rounded-md p-2 md:text-sm text-xc mx-2 md:h-12 h-8'>GET STARTED</button>
            <div className='flex justify-start mt-9'>  
           <img src={imga} className='md:w-[30%] w-[40%] text-start'/>
           <img src={imgb} className='md:w-[30%] w-[40%] text-start  md:mx-4 mx-2'/>
       </div>
        </div>
    </div>
  )
}

export default Newsletter