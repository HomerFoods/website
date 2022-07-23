import React from 'react'
import img1 from '../assets/images/googleplay.png'
import img2 from '../assets/images/applestore.png'

const About = () => {
  return (
    <div className='text-center items-center justify-center bg-secondary mt-20'>
       <p className='text-button text-xs text-center font-extrabold font-heading pt-10'>About us</p>
       <h3 className='text-xl font-heading text-black'>Who we are and what we do </h3>
       <h6 className='font-heading mt-3 text-sm md:text-base md:mx-40 mx-30'>Homer Foods is a mobile app that provides its users with the opportunity 
to explore a variety of freshly cooked home meals, it also has features that home chefs can 
advertise their meals and fully functional online delivery feature.</h6>
        <div className='flex justify-center mt-9 pb-20'>  
           <img src={img1} className='md:w-[16%] w-[30%] text-center md:mx-4 mx-2'/>
           <img src={img2} className='md:w-[16%] w-[30%] text-center  md:mx-4 mx-2'/>
       </div>
    </div>
  )
}

export default About