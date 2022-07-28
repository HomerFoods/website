import React from 'react'
import fb from '../assets/images/fb.png'
import ig from '../assets/images/ig.png'
import twitter from '../assets/images/twitter.png'

const Footer = () => {
  return (
  <div>
     <div className='md:flex justify-between md:px-20 p-5 pt-20 bg-blackfooter font-heading'>
       <div>
         <h4 className='text-secondary font-bold'>HOMER FOODS</h4>
         <span className='flex md:justify-between justify-start mt-5 text-white text-lg'>
         <ion-icon name="logo-facebook"></ion-icon>
         <ion-icon name="logo-instagram"></ion-icon>
         </span>
         <span className='flex md:justify-between justify-start text-white mt-4 text-lg'>
         <ion-icon name="mail-outline"></ion-icon>
         <ion-icon name="logo-twitter"></ion-icon>
         </span>
       </div>
       <div className='text-white cursor-pointer md:mt-0 mt-10'>
         <h4 className=''>Our Product</h4>
         <p className='text-sm mt-2 font-light'>Support</p>
         <p className='text-sm mt-2 font-light'>Guide</p>
       </div>
       <div className='text-white cursor-pointer md:mt-0 mt-10'>
         <h4 className=''>Terms and Policies</h4>
         <p className='text-sm mt-2 font-light'>Terms of Service</p>
         <p className='text-sm mt-2 font-light'>Privacy Policy</p>
       </div>
       <div className='text-white cursor-pointer md:mt-0 mt-10'>
         <h4 className=''>Company</h4>
         <p className='text-sm mt-4 font-light'>Home</p>
         <p className='text-sm mt-2 font-light'>About us</p>
         <p className='text-sm mt-2 font-light'>Services</p>
       </div>
       <div className='text-white cursor-pointer md:mt-0 mt-10'>
         <h4 className=''>Contact</h4>
         <p className='text-sm mt-2 font-light'>+60 (533 066 8900)</p>
         <p className='text-sm mt-2'>hello@homerfoods.app</p>
       </div>
   </div>

   <p className='text-sm font-heading bg-blackfooter text-center text-white pb-5 pt-10'> © Homer Foods 2022 - All Rights Reserved</p>
  </div>
  )
}

export default Footer