'use client'
import React from 'react'
import Works from './components/Works'
import TwoContent from '../TwoContent'



const leftContent = <h3 className='text-[40px] font-semibold leading-[90px]'>Recent Work</h3>
const rightContent = (
  <>
    <div className='flex flex-col gap-12'>
      <Works
        text='Brand Design - Webflow Development - Web Design'
        title='Decodable.co'
        link='https://www.decodable.co/'
      />
      <Works
        title='Gofirefly.io'
        text='Brand Design - Webflow Development - Web Design'
        link='https://www.firefly.ai/'
      />
      <Works
        title='Blinkops.com'
        text='Brand Design - Webflow Development - Web Design'
        link='https://www.blinkops.com/'
      />
      <Works
        title='Withkanvas.com'
        text='Brand Design - Webflow Development - Web Design'
        link='https://www.withkanvas.com/'
      />
    </div>
  </>
)
const RecentWork = () => {
  return (
    <div id='work'>
      <TwoContent contnetLeft={leftContent} contentRight={rightContent} />
    </div>
  )
}

export default RecentWork