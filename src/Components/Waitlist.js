import React, { useState } from 'react'
import delivery from '../assets/images/delivery.png'
import home from '../assets/images/Home.png'
import orderdetails from '../assets/images/OrderDetails.png'
import preorder from '../assets/images/preorder.png'

const Waitlist = () => {

    const APIURL = 'https://homerfoods.app/waitlist/add'
    const [email, setEmail] = useState('')
    const [open, setOpen] = useState(true)

    async function join() {
        const item = {email}
         const result = await fetch(APIURL, {
           method: 'POST',
           body:JSON.stringify(item),
           headers: {
            'Content-Type': 'application/json'
           }
           
        })
        .then(res => res.json())
          .then(data => {
            alert.info(data.message)
          })
        return result
        
      }

  return (
    <div className='bg-secondary font-poppins mt-16 pb-20'>
       <div className='flex flex-col items-center justify-center text-center pt-10'>
        <h4 className='text-3xl'>Taste home away from Home</h4>
        <h6>with <span className='font-extrabold text-32xl'>HomerFoods</span></h6>
        <div className='flex mt-3'>
        <input
          className='rounded-md w-[180%] mx-2 mt-2 md:mt-0 text-xc md:text-base border-2 border-black p-2'
          placeholder='Your Name'
          value={email} onChange={(e) => setEmail(e.target.value) }
          />
          <button className='text-white w-[70%] bg-button rounded-md' onClick={join}>Join Waitlist</button>
        </div>
        <div className='flex mx-10 justify-between mt-20'>
            <img src={delivery}
            className='w-[20%] h-[20%]'
            />
            <img src={home} 
            className='mt-20 mx-5'
            />
            <img src={orderdetails}
            className='mx-5'
            />
            <img src={preorder} 
             className='w-[20%] h-[20%]'/>
        </div>
        <div className='mt-20 items-center justify-center w-[50%] min-w-[350px] flex flex-col mx-10'>
           <h4 className='text-white text-3xl'>Frequently Asked Questions</h4>
           <div className='border-white border-2 rounded-md bg-faq p-3 w-full mx-10 items-center text-white mt-10'>
                  <div className='text-start flex justify-between'>
                  <h6 className='text-white'>What can i use the app for ?</h6>
                  <span  onClick={() => setOpen(!open)} className='transition-all duration-500 ease-in cursor-pointer' >
                  <ion-icon name={open ? 'chevron-down-outline'  : 'chevron-up-outline'}></ion-icon>
                  </span>
                  </div>
                 <span className='max-w-[10%]'> 
                     <p className={`text-sm text-start max-w-[30%] ${open ? ' hidden top-20': 'opacity-100'}`}>What can i use the app for and design development? and hel my whitespace-pre-wrap  and lets see if this works</p>
                 </span>
           </div>
           <div className='border-white border-2 rounded-md bg-faq p-3 w-full mx-10 items-center text-white mt-10'>
                  <div className='text-start flex justify-between'>
                  <h6 className='text-white'>What can i use the app for ?</h6>
                  <span  onClick={() => setOpen(!open)} className='transition-all duration-500 ease-in cursor-pointer' >
                  <ion-icon name={open ? 'chevron-down-outline'  : 'chevron-up-outline'}></ion-icon>
                  </span>
                  </div>
                 <span className='max-w-[10%]'> 
                     <p className={`text-sm text-start max-w-[30%] ${open ? ' hidden top-20': 'opacity-100'}`}>What can i use the app for and design development? and hel my whitespace-pre-wrap  and lets see if this works</p>
                 </span>
           </div>
           <div className='border-white border-2 rounded-md bg-faq p-3 w-full mx-10 items-center text-white mt-10'>
                  <div className='text-start flex justify-between'>
                  <h6 className='text-white'>What can i use the app for ?</h6>
                  <span  onClick={() => setOpen(!open)} className='transition-all duration-500 ease-in cursor-pointer' >
                  <ion-icon name={open ? 'chevron-down-outline'  : 'chevron-up-outline'}></ion-icon>
                  </span>
                  </div>
                 <span className='max-w-[10%]'> 
                     <p className={`text-sm text-start max-w-[30%] ${open ? ' hidden top-20': 'opacity-100'}`}>What can i use the app for and design development? and hel my whitespace-pre-wrap  and lets see if this works</p>
                 </span>
           </div>
           <div className='border-white border-2 rounded-md bg-faq p-3 w-full mx-10 items-center text-white mt-10'>
                  <div className='text-start flex justify-between'>
                  <h6 className='text-white'>What can i use the app for ?</h6>
                  <span  onClick={() => setOpen(!open)} className='transition-all duration-500 ease-in cursor-pointer' >
                  <ion-icon name={open ? 'chevron-down-outline'  : 'chevron-up-outline'}></ion-icon>
                  </span>
                  </div>
                 <span className='max-w-[10%]'> 
                     <p className={`text-sm text-start max-w-[30%] ${open ? ' hidden top-20': 'opacity-100'}`}>What can i use the app for and design development? and hel my whitespace-pre-wrap  and lets see if this works</p>
                 </span>
           </div>
           <div className='border-white border-2 rounded-md bg-faq p-3 w-full mx-10 items-center text-white mt-10'>
                  <div className='text-start flex justify-between'>
                  <h6 className='text-white'>What can i use the app for ?</h6>
                  <span  onClick={() => setOpen(!open)} className='transition-all duration-500 ease-in cursor-pointer' >
                  <ion-icon name={open ? 'chevron-down-outline'  : 'chevron-up-outline'}></ion-icon>
                  </span>
                  </div>
                 <span className='max-w-[10%]'> 
                     <p className={`text-sm text-start max-w-[30%] ${open ? ' hidden top-20': 'opacity-100'}`}>What can i use the app for and design development? and hel my whitespace-pre-wrap  and lets see if this works</p>
                 </span>
           </div>
           
        </div>
       </div>
    </div>
  )
}

export default Waitlist