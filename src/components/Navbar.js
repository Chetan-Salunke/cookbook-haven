import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="text-gray-600 body-font bg-[#734060]">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src="/Media/navicon.svg" className="w-10 h-10 text-white rounded-full" alt="" />
          <span className="ml-3 text-xl font-bold text-[#FFFFFF] ">Pinch of Taste</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap text-[#e6e6e6] tracking-wider items-center text-base justify-center">
          <Link to='/' className="mr-6 hover:text-gray-900">HOME</Link>
          <Link to='/' className="mr-6 hover:text-gray-900">ABOUT</Link>
          <Link to='/' className="mr-6 hover:text-gray-900">RECIPES</Link>
          <Link to='/' className="mr-6 hover:text-gray-900">POPULAR</Link>
          <Link to='/footer' className="mr-6 hover:text-gray-900">CONTACT US</Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
