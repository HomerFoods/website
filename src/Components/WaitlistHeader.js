import React, { useState } from 'react'
import { Button } from 'reactstrap'
import Waitlist from './Waitlist'

const WaitlistHeader = () => {
    const Links = [
        {name:"Features", link:"/"},
        {name:"Contact Us", link:"/"},
    ]

    const [open, setOpen] = useState(false)
  return (
    <div className='font-poppins  w-full fixed top-0 left-0 z-40 bg-secondary'>
        <div className='md:flex items-center justify-between  py-4 md:px-10 px-7 md:bg-secondary bg-white'>
            <div className='font-extrabold text-2xl cursor-pointer flex items-center text-secondary'>
                {/* Logo is going to be in the span tag */}
                <span className='text-2xl text-black mr-1 pt-2'> HOMERFOODS</span>
            </div>
            <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-3 cursor-pointer md:hidden md: items-center pt-[-3]'>
            <ion-icon name={open ? 'close': 'menu'}></ion-icon>
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:bg-secondary bg-white
             md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 
             transition-all duration-500 ease-in 
             ${open ? 'top-10 opacity-100': 'hidden top-20'}  
             `}>
                  {
                      Links.map((link) => (
                          <li key={link.name} className='md:ml-8 text-2xl font-poppins text-x1 md:my-0 my-7'>
                              <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
                          </li>
                      ))
                  }
                   <div className='md:flex justify-between'>
            <button className='bg-secondary text-white p-2 rounded-full md:w-[120%] text-2xl w-[40%] md:ml-20 ml-0'> Share </button>
        </div>
                </ul>
        </div>
    </div>
  )
}

export default WaitlistHeader