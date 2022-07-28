import React from 'react'
import img1 from '../assets/images/one.png'
import img2 from '../assets/images/two.png'
import img3 from '../assets/images/three.png'
import img4 from '../assets/images/four.png'
import img5 from '../assets/images/five.png'

const Support = () => {
  return (
  <div className='font-heading items-center justify-center text-center md:mt-10'>
    <h6 className='text-gray-400'>Supported By</h6>
    <div className='md:flex flex text-center justify-between m-5 md:mx-20 md:mt-10'>
      <span className='md:mx-1'>
        <img 
        className='md:w-[80%] w-[60%]'
        src={img4}/>
      </span>
      <span className='md:mx-1'>
      <img 
        className='md:w-[80%] w-[60%]'
        src={img1}/>
      </span>
      <span className='md:mx-1'>
      <img 
        className='md:w-[80%] w-[60%]'
        src={img2}/>
      </span>
      <span className='md:mx-1'>
      <img 
        className='md:w-[80%] w-[60%]'
        src={img3}/>
      </span>
      <span className='md:mx-1'>
      <img 
        className='md:w-[80%] w-[60%]'
        src={img5}/>
      </span>
    </div>
  </div>
  )
}

export default Support