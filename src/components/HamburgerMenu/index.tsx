'use client'
import { useStateValue } from '@/app/context/stateContext'
import React, { useEffect, useState } from 'react'


const HamburgerMenu = () => {
  const [scroll, setScroll] = useState(false)
  const { setSidebarOpen, sidebarOpen } = useStateValue()
  const handleButtonClick = () => {
    setSidebarOpen(!sidebarOpen)
  }
  useEffect(() => {
    const handleScroll = () => {
      const headerElement = document.getElementById('header')
      if (window.scrollY > window.innerHeight) {
        setScroll(true)
        if (headerElement) {
          headerElement.classList.add('hidden')
        }
      } else {
        if (headerElement) {
          headerElement.classList.remove('hidden')
        }
        setScroll(false)
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={`ham--menu ${scroll ? 'scroll' : ''}`} id='ham--menu'>
      <button onClick={handleButtonClick}>
        <span>
          <i className='fa fa-bars' style={{ fontSize: '33px' }}></i>
        </span>
      </button>
    </div>
  )
}

export default HamburgerMenu
