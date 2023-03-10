import React from 'react'

function Mdheader() {
  return (
    <header className="h-3/4 bg-gray-900 px-2 absolute z-40 w-full text-white">
        <div className="flex h-1/5 p-4 justify-center">
            <a className="font-bold mx-6" href="/">DanceSport.AM</a>
        </div>
        <div className="w-full h-2/3">
            <nav className="text-center">
                <ul className="inline-block">
                    <li><a className="inline-block py-3 px-2 hover:text-yellow-600" href="#About">О нас</a></li>
                    <li><a className="inline-block py-3 px-2 hover:text-yellow-600" href="#Services">Уроки танцев</a></li>
                </ul>
                <div className="flex mt-8 justify-center">
                    <button className="inline-block py-1 px-5 mx-6 border-2 rounded-full border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500 transition-all duration-300 delay-200">Запись</button>
                </div>
            </nav>
            <div className="flex h-1/3 mt-16 items-end justify-center">
                <button id="dropdown_bt" className="inline-block justify-center mx-6 md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>                  
                </button>
            </div>
        </div>
    </header>
  )
}

export default Mdheader