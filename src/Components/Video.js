import React from 'react'
import img1 from '../assets/images/googleplay.png'
import img2 from '../assets/images/applestore.png'

const Video = () => {
  return (
    <div className='text-center items-center justify-center bg-section md:pb-10'>
       <p className='text-button md:text-xs text-xc text-center font-extrabold font-heading pt-20'>Video</p>
       <h3 className='text-xl font-heading text-black'>How to use the App </h3>

       <video></video>

       <div className='bg-sectiond md:mx-36 mx-5 rounded-lg'>
           <h4 className='font-heading text-extrabold mt-5 pt-5'>Download the app</h4>
           <p className='font-heading text-medium md:text-base text-tiny'>Join the fast growing community of homer foods friends <br/> and begin to enjoy your homeland meals like never before.</p>
           <div className='flex justify-center mt-2 pb-5'>  
           <img src={img1} className='md:w-[16%] w-[30%] text-center md:mx-4 mx-2'/>
           <img src={img2} className='md:w-[16%] w-[30%] text-center  md:mx-4 mx-2'/>
       </div>
       </div>
       
    </div>
  )
}

export default Video