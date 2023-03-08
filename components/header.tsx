function Header() {

  return (
    <header className="h-24 px-2 flex items-center justify-between absolute z-40 w-full text-white">
        <a className="font-bold mx-6" href="/">DanceSport.AM</a>
        <div className="inline-flex w-full justify-end items-center">
            <nav className="hidden md:flex items-center">
                <ul className="inline-flex">
                    <li><a className="inline-block py-3 px-2 hover:text-yellow-600" href="#About">О нас</a></li>
                    <li><a className="inline-block py-3 px-2 hover:text-yellow-600" href="#Services">Уроки танцев</a></li>
                </ul>
                <button className="inline-block py-1 px-5 mx-6 border-2 rounded-full border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500 transition-all duration-300 delay-200">Запись</button>
            </nav>
            <button id="dropdown_bt" className="inline-block mx-6 md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>                  
            </button>
        </div>
    </header>
  )
}

export default Header