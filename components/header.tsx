'use client'
import React, { useState } from 'react';

function Header() {

  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <header className={`md:flex z-40 justify-between items-center h-24 w-full absolute md:bg-transparent transition duration-500 ${showMenu ? 'bg-gray-900 transition duration-500' : 'delay-500'}} text-white`}>
      <div className="flex justify-between items-center h-full">
        <a className="font-bold mx-6" href="/">DanceSport.AM</a>
        <button className="md:hidden px-3" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      <div className={`flex justify-center item-center md:h-auto overflow-hidden transition-height duration-500 md:bg-transparent ${showMenu ? "bg-gray-900 h-60 transition-height duration-500" : "h-0"} `}>
        <ul className={showMenu ? "md:inline-flex text-center" : "md:inline-flex hidden"}>
          <li><a className="md:mt-0 mt-6 inline-block py-3 px-2 hover:text-yellow-600" href="#About">О нас</a></li>
          <li><a className="inline-block py-3 px-2 hover:text-yellow-600" href="#Services">Уроки танцев</a></li>
          <button className="md:mt-0 mt-8 btn-singup">Запись</button>
        </ul>
      </div>
    </header>
  )
}

export default Header;