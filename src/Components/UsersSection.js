import React from 'react'
import img1 from '../assets/images/users.png'

const UsersSection = () => {
  return (
    <div className='md:flex flex flex-col justify-between md:mx-20 mx-5 md:mt-20 mt-5 items-center'>
    <div className='items-center justify-center text-start'>
    <p className='text-button md:text-xs text-xc text-start font-heading'> For users</p>
          <h5 className='md:text-xl text-xs font-heading mr-20 z-20 text-normal  font-extrabold'> Explore varieties of freshly cooked Home meals</h5>
          <p className='font-heading md:text-base text-tiny '>Join the fast growing community of homer  <br/> foods friends
and begin to enjoy your homeland meals like never before. From all the way in Africa to foreign soils delivering freshly <br/>
cooked meals </p>
         <div className='flex md:mt-8 mt-3 hover:text-gray-400 md:text-base text-xb transition-all duration-500 ease-in cursor-pointer text-primary'>
             <h6 className='font-heading'>Learn more</h6>
             <span className='mt-1 mx-2'>
             <ion-icon name="arrow-forward-circle-outline"></ion-icon>
             </span>
         </div>
    </div>
    <img className='md:w-[35%] w-[40%] md:mx-0 mx-1 text-center'
    src={img1}/>
  </div>
  )
}

export default UsersSection