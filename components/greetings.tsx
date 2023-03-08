function Greetings() {
  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden">
            <video autoPlay loop muted className="absolute z-10 w-auto min-w-full min-h-full max-w-none">
                <source src='/vido.mp4' type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <section className="flex h-full z-30 relative w-full justify-center items-center bg-black/80">
                <ul className="md:w-2/3 w-3/4">
                    <li className="flex justify-center">
                        <h1 className="md:text-6xl text-4xl font-bold py-4 text-white">
                            <span className="text-red-700">D</span>ance<span className="text-indigo-800">S</span>port<span className="text-orange-600">.AM</span>
                        </h1>
                    </li>
                    <li className="text-center md:text-2xl text-xl text-white">
                        <p>Добро пожаловать в, завораживающий <br /> дух мир танцев</p>
                    </li>
                </ul>
            </section>
        </div>
  )
}

export default Greetings