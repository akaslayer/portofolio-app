'use client'
import { useStateValue } from "@/app/context/stateContext"
import Link from "next/link"
import './style.css'

const SideMenu = () => {
  const { setSidebarOpen, sidebarOpen } = useStateValue()
  const handleButtonClick = () => {
    setSidebarOpen(!sidebarOpen)
  }
  return (
    <div className={`menu-toogle-${sidebarOpen ? 'show' : ''}`}>
      <div className='menu'>
        <div className="menu--list">
          <div className='menu--item'>
            <a href=''>Home</a>
          </div>
          <div className='menu--item'>
            <Link href='/#about'>About</Link>
          </div>
          <div className='menu--item'>
            <Link href='/#work'>Work</Link>
          </div>
          <div className='menu--item'>
            <Link href='/Contact'>Contact</Link>
          </div>
        </div>
        <nav className="pl-20 pb-6">
          <ul className="flex gap-8">
            <li>Linkedin</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Webflow</li>
          </ul>
        </nav>
        <button onClick={handleButtonClick}>
          <span>
            <i className='ri-twitter-x-line'></i>
          </span>
        </button>
      </div>
    </div>
  )
}
export default SideMenu