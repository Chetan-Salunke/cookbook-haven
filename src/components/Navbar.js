import React from 'react'

function Navbar() {
  return (
    <header className="text-gray-600 body-font bg-[#FFEEA9]">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src="/Media/navicon.svg" className="w-10 h-10 text-white rounded-full" alt="" />
          <span className="ml-3 text-xl">Pinch of Taste</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap text-[#FF7D29] items-center text-base justify-center">
          <a href='/' className="mr-6 hover:text-gray-900">HOME</a>
          <a href='/' className="mr-6 hover:text-gray-900">ABOUT</a>
          <a href='/' className="mr-6 hover:text-gray-900">RECIPES</a>
          <a href='/' className="mr-6 hover:text-gray-900">POPULAR</a>
          <a href='/' className="mr-6 hover:text-gray-900">CONTACT US</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
