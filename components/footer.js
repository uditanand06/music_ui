import React from 'react'
import { FcLike } from "react-icons/fc";

const Footer = () => {
  return (
    <div className='h-[15vh] w-full bg-dark rounded-full mt-[30px] flex flex-row justify-between items-center px-20'>
      <div className='font-semibold text-sm'>
        Made By:<br></br>
        Udit Kumar Anand,<br></br>
        Pranjal Soni,<br></br>
        Deepak Sachdeva,<br></br>
        Anant Yadav<br></br>
      </div>
      <div className='text-center text-lg'>
        Made with love.
        <FcLike className='ml-1 w-[30px] h-[30px] inline translate-y-[-5px]' />
      </div>
      <div className='font-semibold text-md'>
        Under the guidance of Sir,<br/>
        <span className=''>Tarun Kumar Rawat</span>
      </div>
    </div>
  )
}

export default Footer