import React from 'react'
import img1 from '../assets/images/meals.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Pagination, EffectCoverflow } from 'swiper'
import 'swiper/css';
import star from '../assets/images/star.svg';
import img2 from '../assets/images/pizzameal.jpeg';
const SliderComponent = () => {
 
  return (
    <div className='md:mt-40 mt-20 items-center justify-center text-center font-heading'>
    <h6 className='text-sm text-secondary'>~ Popular Delivery ~</h6>
       <h2 className='text-3xl mb-7'>See what people love recently</h2>

      <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={4}
      loop={true}
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
          <div className='w-[320px] relative h-[320px] rounded-[16px] flex overflow-hidden p-4 flex-col justify-between  text-start align-center'>
            <div className="font-bold flex self-end text-[23px] w-fit text-center px-[25px] py-[5px] z-[12] text-white border border-solid rounded-[6rem]">$20</div>
            <img alt="" className='text-center left-0 top-0 absolute h-full w-full z-10' src={img2} />
            <div className="z-[12]">
              <h2 className="capitalize text-white mb-[13px] font-[600] text-[23px] leading-[32px]">Special Pizza</h2>
              
              <div className="flex w-full items-center">
                <span className="text-[16px] text-white leading-5 font-[500] mr-1">4.2</span>
                <img alt="a star" className="mr-[5px]" src={star} width={15}/>
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='w-[320px] relative h-[320px] rounded-[16px] flex overflow-hidden p-4 flex-col justify-between  text-start align-center'>
            <div className="font-bold flex self-end text-[23px] w-fit text-center px-[25px] py-[5px] z-[12] text-white border border-solid rounded-[6rem]">$20</div>
            <img alt="" className='text-center left-0 top-0 absolute h-full w-full z-10' src={img2} />
            <div className="z-[12]">
              <h2 className="capitalize text-white mb-[13px] font-[600] text-[23px] leading-[32px]">Special Pizza</h2>

              <div className="flex w-full items-center">
                <span className="text-[16px] text-white leading-5 font-[500] mr-1">4.2</span>
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-[320px] relative h-[320px] rounded-[16px] flex overflow-hidden p-4 flex-col justify-between  text-start align-center'>
            <div className="font-bold flex self-end text-[23px] w-fit text-center px-[25px] py-[5px] z-[12] text-white border border-solid rounded-[6rem]">$20</div>
            <img alt="" className='text-center left-0 top-0 absolute h-full w-full z-10' src={img2} />
            <div className="z-[12]">
              <h2 className="capitalize text-white mb-[13px] font-[600] text-[23px] leading-[32px]">Special Pizza</h2>

              <div className="flex w-full items-center">
                <span className="text-[16px] text-white leading-5 font-[500] mr-1">4.2</span>
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-[320px] relative h-[320px] rounded-[16px] flex overflow-hidden p-4 flex-col justify-between  text-start align-center'>
            <div className="font-bold flex self-end text-[23px] w-fit text-center px-[25px] py-[5px] z-[12] text-white border border-solid rounded-[6rem]">$20</div>
            <img alt="" className='text-center left-0 top-0 absolute h-full w-full z-10' src={img2} />
            <div className="z-[12]">
              <h2 className="capitalize text-white mb-[13px] font-[600] text-[23px] leading-[32px]">Special Pizza</h2>

              <div className="flex w-full items-center">
                <span className="text-[16px] text-white leading-5 font-[500] mr-1">4.2</span>
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-[320px] relative h-[320px] rounded-[16px] flex overflow-hidden p-4 flex-col justify-between  text-start align-center'>
            <div className="font-bold flex self-end text-[23px] w-fit text-center px-[25px] py-[5px] z-[12] text-white border border-solid rounded-[6rem]">$20</div>
            <img alt="" className='text-center left-0 top-0 absolute h-full w-full z-10' src={img2} />
            <div className="z-[12]">
              <h2 className="capitalize text-white mb-[13px] font-[600] text-[23px] leading-[32px]">Special Pizza</h2>

              <div className="flex w-full items-center">
                <span className="text-[16px] text-white leading-5 font-[500] mr-1">4.2</span>
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-[320px] relative h-[320px] rounded-[16px] flex overflow-hidden p-4 flex-col justify-between  text-start align-center'>
            <div className="font-bold flex self-end text-[23px] w-fit text-center px-[25px] py-[5px] z-[12] text-white border border-solid rounded-[6rem]">$20</div>
            <img alt="" className='text-center left-0 top-0 absolute h-full w-full z-10' src={img2} />
            <div className="z-[12]">
              <h2 className="capitalize text-white mb-[13px] font-[600] text-[23px] leading-[32px]">Special Pizza</h2>

              <div className="flex w-full items-center">
                <span className="text-[16px] text-white leading-5 font-[500] mr-1">4.2</span>
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-[320px] relative h-[320px] rounded-[16px] flex overflow-hidden p-4 flex-col justify-between  text-start align-center'>
            <div className="font-bold flex self-end text-[23px] w-fit text-center px-[25px] py-[5px] z-[12] text-white border border-solid rounded-[6rem]">$20</div>
            <img alt="" className='text-center left-0 top-0 absolute h-full w-full z-10' src={img2} />
            <div className="z-[12]">
              <h2 className="capitalize text-white mb-[13px] font-[600] text-[23px] leading-[32px]">Special Pizza</h2>

              <div className="flex w-full items-center">
                <span className="text-[16px] text-white leading-5 font-[500] mr-1">4.2</span>
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-[320px] relative h-[320px] rounded-[16px] flex overflow-hidden p-4 flex-col justify-between  text-start align-center'>
            <div className="font-bold flex self-end text-[23px] w-fit text-center px-[25px] py-[5px] z-[12] text-white border border-solid rounded-[6rem]">$20</div>
            <img alt="" className='text-center left-0 top-0 absolute h-full w-full z-10' src={img2} />
            <div className="z-[12]">
              <h2 className="capitalize text-white mb-[13px] font-[600] text-[23px] leading-[32px]">Special Pizza</h2>

              <div className="flex w-full items-center">
                <span className="text-[16px] text-white leading-5 font-[500] mr-1">4.2</span>
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-[320px] relative h-[320px] rounded-[16px] flex overflow-hidden p-4 flex-col justify-between  text-start align-center'>
            <div className="font-bold flex self-end text-[23px] w-fit text-center px-[25px] py-[5px] z-[12] text-white border border-solid rounded-[6rem]">$20</div>
            <img alt="" className='text-center left-0 top-0 absolute h-full w-full z-10' src={img2} />
            <div className="z-[12]">
              <h2 className="capitalize text-white mb-[13px] font-[600] text-[23px] leading-[32px]">Special Pizza</h2>

              <div className="flex w-full items-center">
                <span className="text-[16px] text-white leading-5 font-[500] mr-1">4.2</span>
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-[320px] relative h-[320px] rounded-[16px] flex overflow-hidden p-4 flex-col justify-between  text-start align-center'>
            <div className="font-bold flex self-end text-[23px] w-fit text-center px-[25px] py-[5px] z-[12] text-white border border-solid rounded-[6rem]">$20</div>
            <img alt="" className='text-center left-0 top-0 absolute h-full w-full z-10' src={img2} />
            <div className="z-[12]">
              <h2 className="capitalize text-white mb-[13px] font-[600] text-[23px] leading-[32px]">Special Pizza</h2>

              <div className="flex w-full items-center">
                <span className="text-[16px] text-white leading-5 font-[500] mr-1">4.2</span>
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-[320px] relative h-[320px] rounded-[16px] flex overflow-hidden p-4 flex-col justify-between  text-start align-center'>
            <div className="font-bold flex self-end text-[23px] w-fit text-center px-[25px] py-[5px] z-[12] text-white border border-solid rounded-[6rem]">$20</div>
            <img alt="" className='text-center left-0 top-0 absolute h-full w-full z-10' src={img2} />
            <div className="z-[12]">
              <h2 className="capitalize text-white mb-[13px] font-[600] text-[23px] leading-[32px]">Special Pizza</h2>

              <div className="flex w-full items-center">
                <span className="text-[16px] text-white leading-5 font-[500] mr-1">4.2</span>
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-[320px] relative h-[320px] rounded-[16px] flex overflow-hidden p-4 flex-col justify-between  text-start align-center'>
            <div className="font-bold flex self-end text-[23px] w-fit text-center px-[25px] py-[5px] z-[12] text-white border border-solid rounded-[6rem]">$20</div>
            <img alt="" className='text-center left-0 top-0 absolute h-full w-full z-10' src={img2} />
            <div className="z-[12]">
              <h2 className="capitalize text-white mb-[13px] font-[600] text-[23px] leading-[32px]">Special Pizza</h2>

              <div className="flex w-full items-center">
                <span className="text-[16px] text-white leading-5 font-[500] mr-1">4.2</span>
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
                <img alt="a star" className="mr-[5px]" src={star} width={15} />
              </div>
            </div>
          </div>
        </SwiperSlide>   

      </Swiper>

      
  </div>
  )
}

export default SliderComponent