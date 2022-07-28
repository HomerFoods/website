import React from 'react'
import img1 from '../assets/images/meals.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Pagination, EffectCoverflow } from 'swiper'
import 'swiper/css';

const SliderComponent = () => {
 
  return (
    <div className='md:mt-40 mt-20 items-center justify-center text-center font-heading'>
    <h6 className='text-sm text-secondary'>~ Popular Delivery ~</h6>
       <h2 className='text-3xl'>See what people love recently</h2>

      <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={4}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: false,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
      >

        <SwiperSlide>
          <div className=' w-[400px] text-start align-center rounded-md '>
            <img alt="" className='text-center md:w-full p-3' src={img1} />
            <h4 className='mt-0 text-tiny font-heading'> Eba and Egusi</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' w-[400px] text-start align-center rounded-md '>
            <img alt="" className='text-center w-[400px] p-3' src={img1} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' w-[400px] text-start align-center rounded-md '>
            <img alt="" className='text-center w-[400px] p-3' src={img1} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' w-[400px] text-start align-center rounded-md '>
            <img className='text-center w-[400px] p-3' alt={""} src={img1} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' w-[400px] text-start align-center rounded-md '>
            <img alt="" className='text-center w-[400px] p-3' src={img1} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' w-[400px] text-start align-center rounded-md '>
            <img alt="" className='text-center w-[400px] p-3' src={img1} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' w-[400px] text-start align-center rounded-md '>
            <img alt="" className='text-center w-[400px] p-3' src={img1} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' w-[400px] text-start align-center rounded-md '>
            <img alt="" className='text-center w-[400px] p-3' src={img1} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' w-[400px] text-start align-center rounded-md '>
            <img alt="" className='text-center w-[400px] p-3' src={img1} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' w-[400px] text-start align-center rounded-md '>
            <img alt="" className='text-center w-[400px] p-3' src={img1} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' w-[400px] text-start align-center rounded-md '>
            <img alt="" className='text-center w-[400px] p-3' src={img1} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=' w-[400px] text-start align-center rounded-md '>
            <img alt="" className='text-center w-[400px] p-3' src={img1} />
          </div>
        </SwiperSlide>    

      </Swiper>

      
  </div>
  )
}

export default SliderComponent