import Image, { StaticImageData } from 'next/image'
import React from 'react'


interface TestimonyProps {
  testimony: string,
  img: StaticImageData,
  name: string,
  position: string
}
const Review: React.FC<TestimonyProps> = ({ testimony, img, name, position }) => {
  return (
    <>
      <div className='flex flex-col gap-4 font-neue-montreal'>
        <p className='text-[27px] font-normal'>{testimony}</p>
        <div className='flex items-center gap-5 font-neue-montreal'>
          <Image src={img} alt='' />
          <div className='font-medium text-[18px]'>
            <h2>{name}</h2>
            <p>{position}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Review