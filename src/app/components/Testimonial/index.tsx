'use client'
import React from 'react'
import Review from './Review'
import pic1 from '../../../../public/pic1.png'
import pic2 from '../../../../public/pic2.png'
import TwoContent from '../TwoContent'

const leftContent = <h3 className='font-neue-montreal text-[40px] font-medium leading-8'>Testimonials</h3>

const rightContent = (
  <div className='gap-20 flex flex-col font-neue-montreal'>
    <Review
      testimony='“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”'
      img={pic1}
      name='Ayush Raj'
      position='VP of Marketing @ Webflow'
    />
    <Review
      testimony='“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”'
      img={pic2}
      name='Alex Cattoni'
      position='Founder @ CopyPossy'
    />
  </div>
)



const Testimonials = () => {
  return (
    <TwoContent contnetLeft={leftContent} contentRight={rightContent} />
  )
}

export default Testimonials