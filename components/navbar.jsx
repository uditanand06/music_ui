import React from 'react'

const Navbar = () => {
  return (
    <div className='sticky top-[15px] z-50 flex flex-row justify-between py-3 font-medium text-[24px] bg-[rgba(63,0,113,0.3)] rounded-3xl border-dark border-[1px] px-4'>
        <div className='space-x-[15px]'>
            <span>Music</span>
            <span className='text-primary'>App</span>
        </div>
        <div className='flex flex-row space-x-[76px] '>
            <div>Home</div>
            <div>About Us</div>
            <div className='text-primary cursor-pointer'>Explore</div>
        </div>
    </div>
  )
}

export default Navbar