import React, { useState } from 'react'
import delivery from '../assets/images/delivery.png'
import home from '../assets/images/Home.png'
import orderdetails from '../assets/images/OrderDetails.png'
import preorder from '../assets/images/preorder.png'
import img1 from '../assets/images/headerhero.png'

const Waitlist = () => {

    const APIURL = 'https://homerfoods.app/api/waitlist/add'
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [open, setOpen] = useState({
        one: true,
        two: true,
        three: true,
        four: true,
        five: true
    })

    async function join() {
        const item = {email, name}
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
    <div className='bg-secondary font-poppins mt-6 pb-20'>
       <div className='flex flex-col items-center justify-center text-center pt-10'>
       <div className='md:flex md:px-10 font-heading md:mt-10 mt- mx-2'>
     <div className='mt-10'>
   <div className='mx-2'>
   <h2 className='md:text-5xl text-la text-start'>Hungry ?</h2>
        <h4 className='md:text-la text-base text-start'>Living in a foreign land and you miss home cooked meals ?</h4>
        <p className='font-bold md:mt-5 md:text-base text-sm mt-3 text-start'> Taste home away from home with HomerFoods</p>

        <p className='md:text-base text-sm text-start'>Join the waitlist now and get informed once we launch !</p>
   </div>
        <div className='flex flex-col mt-3 items-start justify-start w-[340px] text-start'>

        <input
          className='w-full mb-3 mx-2 outline-none mt-2 md:mt-0 text-base md:text-base border hover:border-black border-[#d6d5d5] p-2 rounded-md'
          placeholder='Your Name'
          value={email} onChange={(e) => setEmail(e.target.value) }
          />

          <input
            className='mx-2 mb-2 w-full outline-none mt-1 md:mt-0 text-base md:text-base border hover:border-black border-[#d6d5d5] p-2 rounded-md'
            placeholder='Your Email'
            value={name} onChange={(e) => setName(e.target.value)}
          />

          <button className='text-white p-2 w-[80%] bg-button rounded-md mx-2' onClick={join}>Join Waitlist</button>
        </div>
     </div>
      
      <div>
        <img 
        className='md:w-[90%] w-[96%] mt-6 md:mt-0'
        src={img1}/>
      </div>
   </div>
        <div className='flex mx-10 justify-between mt-28'>
            <img src={delivery}
            className='w-[8%] h-[8%]'
            />
            <img src={home} 
            className='mt-10 md:mt-20 mx-5 w-[35%] '
            />
            <img src={orderdetails}
            className='mx-5 w-[30%] h-[30%] md:h-[10%] md:w-[30%]'
            />
            <img src={preorder} 
             className='w-[8%] h-[8%]'/>
        </div>
        <div className='mt-20 items-center justify-center w-[70%] min-w-[350px] flex flex-col md:mx-10 mx-0'>
           <h4 className='text-white text-3xl'>Frequently Asked Questions</h4>
           <div className='border-white border-2 rounded-md bg-faq p-3 w-full mx-10 items-center text-white mt-10'>
                  <div className='text-start flex justify-between'>
                  <h6 className='text-white'>What can i use the app for ?</h6>
              <span onClick={() => setOpen({ ...open, one: !open.one })} className='transition-all duration-500 ease-in cursor-pointer' >
                  <ion-icon name={open.one ? 'chevron-down-outline'  : 'chevron-up-outline'}></ion-icon>
                  </span>
                  </div>
                 <span className='max-w-[10%]'> 
                     <p className={`text-sm text-start max-w-[30%] ${open.one ? ' hidden top-20': 'opacity-100'}`}>What can i use the app for and design development? and hel my whitespace-pre-wrap  and lets see if this works</p>
                 </span>
           </div>
           <div className='border-white border-2 rounded-md bg-faq p-3 w-full mx-10 items-center text-white mt-2'>
                  <div className='text-start flex justify-between'>
                  <h6 className='text-white'>What can i use the app for ?</h6>
                  <span  onClick={() => setOpen({...open, two: !open.two})} className='transition-all duration-500 ease-in cursor-pointer' >
                  <ion-icon name={open.two ? 'chevron-down-outline'  : 'chevron-up-outline'}></ion-icon>
                  </span>
                  </div>
                 <span className='max-w-[10%]'> 
                     <p className={`text-sm text-start max-w-[30%] ${open.two ? ' hidden top-20': 'opacity-100'}`}>What can i use the app for and design development? and hel my whitespace-pre-wrap  and lets see if this works</p>
                 </span>
           </div>
           <div className='border-white border-2 rounded-md bg-faq p-3 w-full mx-10 items-center text-white mt-2'>
                  <div className='text-start flex justify-between'>
                  <h6 className='text-white'>What can i use the app for ?</h6>
              <span onClick={() => setOpen({ ...open, three: !open.three })} className='transition-all duration-500 ease-in cursor-pointer' >
                  <ion-icon name={open.three ? 'chevron-down-outline'  : 'chevron-up-outline'}></ion-icon>
                  </span>
                  </div>
                 <span className='max-w-[10%]'> 
                     <p className={`text-sm text-start max-w-[30%] ${open.three ? ' hidden top-20': 'opacity-100'}`}>What can i use the app for and design development? and hel my whitespace-pre-wrap  and lets see if this works</p>
                 </span>
           </div>
           <div className='border-white border-2 rounded-md bg-faq p-3 w-full mx-10 items-center text-white mt-2'>
                  <div className='text-start flex justify-between'>
                  <h6 className='text-white'>What can i use the app for ?</h6>
              <span onClick={() => setOpen({ ...open, four: !open.four })} className='transition-all duration-500 ease-in cursor-pointer' >
                  <ion-icon name={open.four ? 'chevron-down-outline'  : 'chevron-up-outline'}></ion-icon>
                  </span>
                  </div>
                 <span className='max-w-[10%]'> 
                     <p className={`text-sm text-start max-w-[30%] ${open.four ? ' hidden top-20': 'opacity-100'}`}>What can i use the app for and design development? and hel my whitespace-pre-wrap  and lets see if this works</p>
                 </span>
           </div>
           <div className='border-white border-2 rounded-md bg-faq p-3 w-full mx-10 items-center text-white mt-2'>
                  <div className='text-start flex justify-between'>
                  <h6 className='text-white'>What can i use the app for ?</h6>
              <span onClick={() => setOpen({ ...open, five: !open.five })} className='transition-all duration-500 ease-in cursor-pointer' >
                  <ion-icon name={open.five ? 'chevron-down-outline'  : 'chevron-up-outline'}></ion-icon>
                  </span>
                  </div>
                 <span className='max-w-[10%]'> 
                     <p className={`text-sm text-start max-w-[30%] ${open.five ? ' hidden top-20': 'opacity-100'}`}>What can i use the app for and design development? and hel my whitespace-pre-wrap  and lets see if this works</p>
                 </span>
           </div>
           
        </div>
       </div>
    </div>
  )
}

export default Waitlist