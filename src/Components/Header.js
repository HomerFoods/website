import React from 'react'
import { Button, Input } from 'reactstrap'


const Header = () => {
  return (
    <div className='items-center justify-center bg-gradient-to-r from-primary to-secondary mt-0 '>
        <div className='pt-20'>
            <h5 className='font-heading font-black tracking-wide text-center'>Homer <span className='font-normal'>Foods</span></h5>
            <p className='text-center md:text-3xl text-32xl font-heading font-extrabold pt-1'>Hungry ? Living in a foreign country and <br/> you miss your homeland meals ?</p>
            <p className='text-center md:text-base text-sm font-heading font-black mt-2'>Taste home away from home</p>
        </div>
        <div className='flex justify-center md:pb-36 pb-20 pt-6'>
            <input 
            className='p-3 md:mr-10 mr-5 mt-3 md:w-[30%] w-[50%] rounded-md h-15 focus:border-black font-heading text-tiny'
            placeholder='email@example.com'
            />
            <Button className='bg-button text-white p-2 rounded-md text-tiny md:w-[15%] w-[40%] h-12 font-heading mt-3'> Get early access </Button>
        </div>
    </div>
  )
}

export default Header