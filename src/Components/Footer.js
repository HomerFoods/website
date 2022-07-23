import React from 'react'
import fb from '../assets/images/fb.png'
import ig from '../assets/images/ig.png'
import twitter from '../assets/images/twitter.png'

const Footer = () => {
  return (
    <div className='items-center justify-center text-center font-heading md:mt-10 mt-10'>
         <hr className=' mx-3 text-section'></hr>
        <h2 className='md:mt-4 mt-4 font-extrabold'>Homer Foods</h2>
        <p className='md:text-base text-tiny'>Homer foods is  an online food  ordering platform that brings foreigners 
         a taste of their  homeland meals</p>
         <hr className='mt-5 mx-3 text-section'></hr>
         <div className='md:flex flex-row justify-between md:mt-5 mt-3 md:pb-10'> 
         <h6 className='md:mx-4 text-sm md:text-base'>Copyright © 2022 Homer Foods. All rights reserved.</h6>
         <div className='md:flex flex text-center items-center justify-center text-sm md:text-base'>
             <h6 className='cursor-pointer md:mx-3 mx-3' >Help</h6>
             <h6 className='cursor-pointer md:mx-3 mx-3' >Privacy</h6>
             <h6 className='cursor-pointer md:mx-3 mx-3' >Terms</h6>
         </div>
         <div className='md:flex flex text-center items-center justify-center md:pb-0 pb-2'>
            <img className='md:w-[8%] md:h-[90%] w-[3%]  cursor-pointer md:mx-3 mx-3' src={fb}/>
            <img className='md:w-[8%] md:h-[90%] w-[3%] cursor-pointer md:mx-3 mx-3' src={ig}/>
            <img className='md:w-[8%] md:h-[90%] w-[3%] cursor-pointer md:mx-3 mx-3' src={twitter}/>
         </div>
         </div>
    </div>
  )
}

export default Footer