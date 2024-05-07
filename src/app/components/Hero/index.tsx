'use client'
import React from 'react'
import img1 from '../../../../public/Hero.png'
import hand from '../../../../public/hand.png'
import Image from 'next/image'
import { useStateValue } from '@/app/context/stateContext'


const Hero = () => {
  const { setSidebarOpen, sidebarOpen } = useStateValue()
  const handleButtonClick = () => {
    setSidebarOpen(!sidebarOpen)
  }
  return (
    <>
      <div className='h-[100vh] overflow-hidden'>
        <div className=' flex justify-center items-end h-full relative'>
          <Image src={img1} alt='' className='h-full object-cover overflow-visible' />
        </div>
        <div className='absolute bottom-36 font-bold font-neue-montreal right-[50%] text-center translate-x-1/2 text-white text-8xl w-full  text-nowrap flex gap-5  animate-[move_10s_ease-in-out_infinite]'>
          <h1>WebFlow Developer - UI / UX </h1>
          <h1>|| Game Developer - Developer </h1>
        </div>
        <div className='absolute flex-start flex right-0 bottom-1/2 translate-y-3/4 translate-x-[75%] items-center hover:translate-x-[20%] hover:ease-in hover:duration-500'>
          <button onClick={handleButtonClick} className=' bg-black text-white rounded-full py-8 px-24 flex-start flex  text-3xl'>Hi I'm Hendry</button>
          <div className='flex absolute left-4'>
            <Image src={hand} alt='' />
          </div>
        </div >
      </div >
    </>
  )
}

export default Hero