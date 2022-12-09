import Image from 'next/image'
import React from 'react'
import Light3 from './light3'
import Light from './lights'

const Section1 = () => {
  return (
    <section className='h-screen pt-[55px] relative'>
      <div className='absolute top-0 left-0'>
        <Light/>
      </div>
      <div className='absolute right-0 bottom-20'>
        <Light3/>
      </div>
      
      <div className='flex flex-row w-full space-x-[38px]'>
        <div className='w-1/2 h-[381px] bg-[rgba(63,0,113,0.3)] rounded-[65px] px-[91px] py-[84px] font-medium'>
          <div className='text-[40px]'>The Next</div>
          <div className='text-[48px] text-primary drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]'>Generartion</div>
          <div className='text-[64px]'>Music Classifier</div>
        </div>
        <div className='w-1/2 h-[381px] bg-[rgba(63,0,113,0.2)] rounded-[65px] flex items-center justify-center'>
          <Image src='/influencer.svg' height={500} width={500} />
        </div>
      </div>

      <div className='w-3/4 h-[293px] mt-[75px] bg-boxPattern rounded-[20px] px-[79px] pt-[66px] pb-[91px] space-y-[20px]'>
        <div className='font-medium text-[48px]'>
          Let's try our model now!
        </div>
        <div className='flex flex-row justify-between'>
          <div className='font-medium text-[20px] text-[#787A91]'>Wondering the music you are listening to belongs to which genre?</div>
          <div className=' w-[226px] h-[55px] blueBtn font-medium text-[20px]'>Get Started</div>
        </div>
        
      </div>
    </section>
  )
}

export default Section1