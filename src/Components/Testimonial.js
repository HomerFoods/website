import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from '../assets/images/Testimonial.png'




const Testimonial = () => {
  const images = [img1, img1, img1, img1]

  const settings = {
   dots: true,
   infinite: true,
   speed: 500,
   slidesToShow: 1,
   SlidesToScroll: 1,
   arrows: true,
   autoplay: true,
   centerMode: true,
   responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
  };
  return (
    <div className='md:mt-40 mt-20 items-center justify-center text-center font-heading'>
    <h6 className='text-sm text-secondary'>~ TESTIMONIAL ~</h6>
       <h2 className='text-3xl'>Comments on Food We Deliver</h2>
      <Slider {...settings} className="md:mt-20 w-[calc(100%-20px-20px)] mt-10">
     {
       images.map((img, index)=>(
         <div className='' key={index}>
           <img 
           className='md:w-[100%] w-40%'
           src={img} alt=""/>
         </div>
       ))
     }
    </Slider>
  </div>
  )
}

export default Testimonial