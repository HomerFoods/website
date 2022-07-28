import React from 'react'
import { Button, Input } from 'reactstrap'
import img1 from '../assets/images/headerhero.png'
import img2 from '../assets/images/customerrev.png'

const Header = () => {
  return (
   <div className='md:flex md:mx-10 font-heading md:mt-28 mt-20 mx-2'>
      <div className='md:mt-10'>
        <h2 className='md:text-5xl text-la'>Hungry ?</h2>
        <h4 className='md:text-la text-base'>Living in a foreign land and you miss home cooked meals ?</h4>
        <p className='font-bold md:mt-5 md:text-base text-sm mt-3'> Taste home away from home with HomerFoods</p>
        <div className='md:flex flex md:mt-10 '>
            <button className='bg-secondary text-white md:p-2 p-0 rounded-full md:w-[20%] w-[24%] md:mt-0 mt-5 text-xc md:text-base md:h-14 h-8'>Find Food</button>
            <button className='bg-white text-secondary p-2 rounded-full items-center justify-center border-solid border-2 border-secondary md:mx-12 mx-4 md:w-[30%] w-[35%] md:mt-0 mt-5 text-xc md:text-base md:h-14 h-8 text-center'>
            <ion-icon className='mx-5' name="play-circle-outline"></ion-icon>
            How to Order</button>
        </div>
        <div className='md:flex flex items-center justify-start md:mt-10 relative'>
               <img 
               className='md:w-[15%] w-[12%] ml-4 '
               src={img2}/>
             <div className='text-start m-1'>
               <h6 className='font-bold ml-1 md:mt-0 mt-5'>Customer Review</h6>
               <div className='md:flex flex items-center justify-center'>
                 <span className='text-secondary'>
                 <ion-icon name="star"></ion-icon>
                 </span>
               <h6 className='mx-1'>4.8</h6>
               <h6 className='text-sm text-gray-400'>(5K Reviews)</h6>
               </div>
             </div>
        </div>
      </div>
      <div>
        <img 
        className='md:w-[90%] w-[96%] mt-6 md:mt-0'
        src={img1}/>
      </div>
   </div>
  )
}

export default Header