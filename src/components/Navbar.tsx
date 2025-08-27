"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50) // 50px scroll হলে effect
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const commonRoutes = <>
    <li><Link href={'/home'}>Home</Link></li>
    <li><Link href={'/about'}>About</Link></li>
    <li><Link href={'/blog'}>Blog</Link></li>
    <li><Link href={'/contact'}>Contact</Link></li>
  </>

  return (
    <div className={`navbar fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${isScrolled ? 'bg-white shadow-md' : 'bg-base-100 shadow-sm'}`}>
      
      <div className="navbar-start md:ml-32">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
            {commonRoutes}
          </ul>
        </div>
        <h1 className="text-2xl font-spectral font-bold">New<span className='text-orange-500'>Wes</span></h1>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-spectral text-lg">
          {commonRoutes}
        </ul>
      </div>

      <div className="navbar-end md:mr-32">
        <AiOutlineUser />
      </div>
    </div>
  )
}

export default Navbar
