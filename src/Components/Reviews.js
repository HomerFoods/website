import React from 'react'
import img1 from '../assets/images/review.png'
import img2 from '../assets/images/erick.png'

const Reviews = () => {
  return (
    <div className='md:flex mt-20  md:mx-20 md:ml-7 ml-4 text-center justify-center'>
          <div>
              <div className='flex items-center justify-center text-center relative z-20 mr-4'> 
              <img className='w-50 md:w-[80%] w-[60%] md:ml-10 ml-0 relative md:h-[70%]' src={img1}/>
              </div>
          </div>
          <div className='text-start md:mt-40  mt-10 md:ml-0 font-heading'>
              <h3 className='text-start font-heading text-sm text-secondary font-extrabold'> ~ What users are saying ~ </h3>
              <h2 className='md:text-3xl text-lg'>Reviews are the heart of our existence</h2>
              <div className='md:flex flex items-center justify-start md:mt-5 relative'>
               <img 
               className='md:w-[8%] w-[10%] md:ml-4 ml-2'
               src={img2}/>
             <div className='text-start m-1'>
               <h6 className='font-bold ml-1'>Erick Smith</h6>
               <p className='font-medium text-sm mx-2 text-gray-400'>Food Vlogger</p>
             </div>
        </div>
        <p className='text-gray-400 text-sm text-start md:ml-4 ml-2 mt-3'>“All service provided is so perfect and fast, and im so happy to order from this company”</p>
       <div className='flex mt-3'>
       <h6 className='mx-1 md:ml-4 ml-2'>5.0</h6>
        <span className='text-secondary'>
                 <ion-icon name="star"></ion-icon>
                 </span>
                 <span className='text-secondary'>
                 <ion-icon name="star"></ion-icon>
                 </span>
                 <span className='text-secondary'>
                 <ion-icon name="star"></ion-icon>
                 </span>
                 <span className='text-secondary'>
                 <ion-icon name="star"></ion-icon>
                 </span>
                 <span className='text-secondary'>
                 <ion-icon name="star"></ion-icon>
                 </span>
       </div>
    </div>
          
    </div>
  )
}

export default Reviews