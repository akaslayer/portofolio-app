import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'


interface websiteInterface {
  id: string,
  image: StaticImageData,
  link: string


}
const WebsiteList: React.FC<websiteInterface> = ({ id, image, link }) => {
  return (
    <div className='container--website p-[56px] ml-5 flex items-center justify-center relative' style={{ background: '#c7d0d9' }}>
      <Image src={image} alt='' />
      <div className='absolute'>
        <Link href={link}>
          <button className='container--website-button bg-white border-2 border-black p-4 hidden hover:bg-black hover:text-white  hover:border-white'>
            <span>
              Visit the website <i className='ri-arrow-right-up-line'></i>
            </span>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default WebsiteList