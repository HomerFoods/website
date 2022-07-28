import React, { useState } from 'react'
import { Button } from 'reactstrap'

const NavBar = () => {
    const Links = [
        {name:"Home", link:"/"},
        {name:"Menu", link:"/"},
        {name:"Services", link:"/"},
        {name:"Contact us", link:"/"}
    ]

    const [open, setOpen] = useState(false)
  return (
    <div className='font-heading  w-full fixed top-0 left-0 z-40'>
        <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
            <div className='font-extrabold text-2xl cursor-pointer flex items-center text-secondary'>
                {/* Logo is going to be in the span tag */}
                <span className='text-2xl text-secondary mr-1 pt-2'></span>
                HOMERFOODS
            </div>
            <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-3 cursor-pointer md:hidden md: items-center pt-[-3]'>
            <ion-icon name={open ? 'close': 'menu'}></ion-icon>
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white
             md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 
             transition-all duration-500 ease-in 
             ${open ? 'top-10 opacity-100': 'hidden top-20'}  m
             `}>
                  {
                      Links.map((link) => (
                          <li key={link.name} className='md:ml-8 text-2xl font-heading text-x1 md:my-0 my-7'>
                              <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
                          </li>
                      ))
                  }
                   <div className='md:flex justify-between'>
                      <span className='text-32xl md:ml-20 mt-2 mr-5 md:mr-0 cursor-pointer'><ion-icon name="bag-handle-outline"></ion-icon></span>
            <button className='mr-8 text-2xl md:my-0 p-2 rounded-full md:w-[70%] w-[40%] my-7 ml-0 md:ml-10 border-2 bg-white text-secondary border-secondary'> Register </button>
            <Button className='bg-secondary text-white p-2 rounded-full md:w-[120%] text-2xl w-[30%]'> Login </Button>
        </div>
                </ul>
        </div>
    </div>
  )
}

export default NavBar