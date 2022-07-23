import React from 'react'
import img1 from '../assets/images/chef.png'

const Chef = () => {
  return (
   <div className='md:flex justify-between md:mx-20 mx-5 mt-28 items-center'>
     <img className='md:w-[40%] w-[35%] md:ml-0 ml-5'
     src={img1}/>
     <div className='items-center justify-center text-start'>
     <p className='text-button md:text-xs text-xc md:ml-0 ml-4 text-start font-heading md:mt-0 mt-8'> For Chefs</p>
           <h5 className='md:text-xl text-xv font-heading mr-20 md:ml-0 ml-4 z-20 text-black'>Advertise Your Meals</h5>
           <p className='font-heading md:text-base text-tiny md:ml-0 ml-4'>Join the fast growing community of homer foods friends <br/>
and begin to enjoy your homeland meals like never before. <br/> From all the way in Africa to foreign soils delivering freshly <br/>
cooked meals </p>
          <div className='flex md:mt-8 mt-3 hover:text-gray-400 md:text-base text-xb transition-all md:ml-0 ml-4 duration-500 ease-in cursor-pointer text-primary'>
              <h6 className='font-heading'>Learn more</h6>
              <span className='mt-1 mx-2'>
              <ion-icon name="arrow-forward-circle-outline"></ion-icon>
              </span>
          </div>
     </div>
   </div>
  )
}

export default Chef