import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <>
      <nav className='flex justify-between bg-transparant px-40 absolute w-full py-4 z-40'>
        <h3 className='font-neue-montreal text-lg'>@Hendry Tjahaja Surijanto Putra</h3>
        <ul className='flex gap-8 font-neue-montreal text-lg'>
          <li>
            <Link href='/#about'>About</Link>
          </li>
          <li>
            <Link href='/#work'>Work</Link>
          </li>
          <li>
            <Link href='/Contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar