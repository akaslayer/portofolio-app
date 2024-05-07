import React from 'react'
import pic1 from '../../../../public/pic1.png'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
      <div className='bg-black pt-[100px] pb-[20px] px-[60px]'>
        <div className='grid grid-cols-2 text-white'>
          <div className='flex flex-col justify-between gap-[138px] '>
            <div className='flex flex-col font-neue-montreal text-[60px]'>
              <h2> Have something in mind?</h2>
              <div className='flex items-center gap-[15px]'>
                <Image src={pic1} alt='' /> <h2>let’s build it together.</h2>
              </div>
            </div>
            <p>Build with 💖 by Hendry</p>
          </div>
          <div className='flex flex-col justify-between gap-[138px] items-end  h-full '>
            <div className='footer--button'>
              <button className='py-6 px-12 bg-transparent border-2 border-white text-white overflow-hidden relative tracking-[2px] no-underline rounded-full font-semibold hover:bg-white hover:text-black  '>
                <span>Get in touch</span>
              </button>
            </div>
            <nav className='items-end flex justify-end pr-0'>
              <ul className='flex items-end gap-6'>
                <li>Linkedin</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Webflow</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer