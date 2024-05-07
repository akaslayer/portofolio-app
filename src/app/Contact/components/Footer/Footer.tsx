import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='bg-black py-24 px-40 items-center '>

        <div className='grid grid-cols-2 text-white justify-between'>
          <div className='footer2--item flex '>
            <p>Build with 💖 by Hendry</p>
          </div>
          <div className='w-full '>
            <nav className=''>
              <ul className='gap-8 justify-end flex'>
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