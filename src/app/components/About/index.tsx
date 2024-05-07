'use client'

import React from 'react'
import TwoContent from '../TwoContent'

const contentLeft = <h3 className='text-[40px] font-semibold leading-10'>About</h3>
const contentRight = (
  <p className='text-[27px]'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur.
  </p>)

const About = () => {
  return (
    <div id='about'>
      <TwoContent contnetLeft={contentLeft} contentRight={contentRight} />
    </div>
  )
}

export default About