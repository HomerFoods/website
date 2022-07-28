import React from 'react'
import img1 from '../assets/images/pana1.png'
import img2 from '../assets/images/amico.png'
import img3 from '../assets/images/pana.png'

const UsersSection = () => {
  return (
   <div className='items-center justify-center font-heading text-center md:mt-32'>
       <h6 className='text-sm text-secondary'>~ Our Servies ~</h6>
       <h2 className='text-3xl'>Need an Intro ?</h2>
       <div className='md:flex justify-between items-center text-center md:mt-20'>
          <div className='md:mx-28 md:flex flex flex-col items-center justify-center text-center md:mt-0 mt-5'>
            <img 
            className='md:w-[90%] w-[50%]'
            src={img1}/>
            <h4 className='font-extrabold text-lg md:mt-5'>Food Delivery</h4>
            <p className='text-gray-500 md:text-base text-sm md:mt-3 md:mx-50'>Lorem ipsum dolor sit amet, consectetur </p>
          </div>
          <div className='md:mx-28 md:flex flex flex-col items-center justify-center text-center md:mt-0 mt-10'>
            <img 
            className='md:w-[90%]'
            src={img2}/>
            <h4 className='font-extrabold text-lg md:mt-5'>Find Restaurnts</h4>
            <p className='text-gray-500 md:text-base text-sm md:mt-3 md:mx-50'>Lorem ipsum dolor sit amet, consectetur </p>
          </div>
          <div className='md:mx-28 md:flex flex flex-col items-center justify-center text-center md:mt-0 mt-10'>
            <img 
            className='md:w-[90%]'
            src={img3}/>
            <h4 className='font-extrabold text-lg md:mt-5'>Pre Order</h4>
            <p className='text-gray-500 md:text-base text-sm md:mt-3 md:mx-50'>Lorem ipsum dolor sit amet, consectetur </p>
          </div>
       </div>
   </div>
  )
}

export default UsersSection