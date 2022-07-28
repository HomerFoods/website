import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from '../assets/images/meals.png'
import Carousel from 'better-react-carousel'

const SliderComponent = () => {
 
  return (
    <div className='md:mt-40 mt-20 items-center justify-center text-center font-heading'>
    <h6 className='text-sm text-secondary'>~ Popular Delivery ~</h6>
       <h2 className='text-3xl'>See what people love recently</h2>
       <Carousel 
       cols={6} rows={1} 
       gap={10} loop={true} 
       hideArrow={false} 
       autoplay={5000}>
        <Carousel.Item>
      <div className=' w-fit text-start align-center rounded-md '>
                     <img className='text-center md:w-[90%] p-3' src={img1}/>
                 <h4 className='mt-0 p-3 text-tiny font-heading'> Eba and Egusi</h4>
           </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className=' w-fit text-start align-center rounded-md '>
                     <img className='text-center w-[90%] p-3' src={img1}/>
                 <h4 className='mt-0 p-3 text-tiny font-heading'> Jollof Rice </h4>
           </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className=' w-fit text-start align-center rounded-md '>
                     <img className='text-center w-[90%] p-3' src={img1}/>
                 <h4 className='mt-0 p-3 text-tiny font-heading'> Fried Rice</h4>
           </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className=' w-fit text-start align-center rounded-md '>
                     <img className='text-center w-[90%] p-3' src={img1}/>
                 <h4 className='mt-0 p-3 text-tiny font-heading'> Semo and Efo riro</h4>
           </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className=' w-fit text-start align-center rounded-md '>
                     <img className='text-center w-[90%] p-3' src={img1}/>
                 <h4 className='mt-0 p-3 text-tiny font-heading'> Rice and Beans</h4>
           </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className=' w-fit text-start align-center rounded-md '>
                     <img className='text-center w-[90%] p-3' src={img1}/>
                 <h4 className='mt-0 p-3 text-tiny font-heading'> Moi Moi</h4>
           </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className=' w-fit text-start align-center rounded-md '>
                     <img className='text-center w-[90%] p-3' src={img1}/>
                 <h4 className='mt-0 p-3 text-tiny font-heading'> Moi Moi</h4>
           </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className=' w-fit text-start align-center rounded-md '>
                     <img className='text-center w-[90%] p-3' src={img1}/>
                 <h4 className='mt-0 p-3 text-tiny font-heading'> Moi Moi</h4>
           </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className=' w-fit text-start align-center rounded-md '>
                     <img className='text-center w-[90%] p-3' src={img1}/>
                 <h4 className='mt-0 p-3 text-tiny font-heading'> Moi Moi</h4>
           </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className=' w-fit text-start align-center rounded-md '>
                     <img className='text-center w-[90%] p-3' src={img1}/>
                 <h4 className='mt-0 p-3 text-tiny font-heading'> Jollof Rice </h4>
           </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className=' w-fit text-start align-center rounded-md '>
                     <img className='text-center w-[90%] p-3' src={img1}/>
                 <h4 className='mt-0 p-3 text-tiny font-heading'> Jollof Rice </h4>
           </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className=' w-fit text-start align-center rounded-md '>
                     <img className='text-center w-[90%] p-3' src={img1}/>
                 <h4 className='mt-0 p-3 text-tiny font-heading'> Jollof Rice </h4>
           </div>
      </Carousel.Item>
    </Carousel>
  </div>
  )
}

export default SliderComponent