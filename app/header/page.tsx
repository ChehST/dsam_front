'use client'
import React, { useState } from 'react';

function Page() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <header className="bg-green-400 md:flex justify-between items-center h-24 w-full absolute">
      <div className="flex justify-between items-center h-full">
        <a className="font-bold mx-6" href="/">DanceSport.AM</a>
        <button className="md:hidden px-3" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      <div className="flex justify-center">
        <ul className={showMenu ? "md:inline-flex" : "md:inline-flex hidden"}>
          <li><a className="inline-block py-3 px-2 hover:text-yellow-600" href="#About">О нас</a></li>
          <li><a className="inline-block py-3 px-2 hover:text-yellow-600" href="#Services">Уроки танцев</a></li>
          <button className="inline-block py-1 px-5 mx-6 border-2 rounded-full border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500 transition-all duration-300 delay-200">Запись</button>
        </ul>
      </div>
    </header>
  )
}

export default Page;