import Link from 'next/link'
import React from 'react'


interface workProps {
  title: string,
  text: string,
  link: string
}
const Works: React.FC<workProps> = ({ title, text, link }) => {
  return (
    <>
      <div>
        <div className='flex'>
          <div className='flex flex-col w-full'>
            <h1 className='font-inter text-[60px]'>{title}</h1>
            <p className='font-neue-montreal text-[18px]'>{text}</p>
          </div>
          <div className='flex justify-end items-center'>
            <Link href={link} target='_blank'>
              <button className='p-7 px-8 bg-transparant rounded-full border-2 border-black hover:border-white hover:bg-black hover:text-white'>

                <i className='ri-arrow-right-up-line z-10 text-[28px]'></i>

              </button>
            </Link>
          </div>
        </div>
        <hr />
      </div>
    </>
  )
}

export default Works