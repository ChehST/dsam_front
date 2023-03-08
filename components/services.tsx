function Services() {
  return (
    <div id="Services" className="w-full bg-white">
            <div className="flex justify-center items-center">
                <div className="md:w-1/2 mt-4 md:mt-48 w-3/4">
                    <h2 className="text-center text-5xl font-bold mb-3 mt-6">Что вы получите?</h2>
                    <p className="text-center md:text-2xl mt-6 mb-16">Мы предлагаем доступные и интересные занятия<br/> для Вас и Ваших детей:</p>
                </div>
            </div>
            <div className="md:flex justify-center md:py-12">
                <div className="md:w-5/6 p-3 flex justify-center">
                    <div className="md:flex lg:w-auto w-5/6 items-center">
                        <div className="md:w-1/2 flex justify-center items-center">
                            <img className="w-5/6" src="/images/image.jpg" alt="random image"/>
                        </div>
                        
                        <div className="text-start py-4 md:w-1/2 md:p-6">
                            <h3 className="text-2xl pb-2 font-bold">Групповые занятия</h3>
                            <p>Мы предлагаем групповые занятия по бальным танцам для всех уровней подготовки - от начинающих до продвинутых танцоров. Наша студия специализируется на бальных танцах, и мы предлагаем широкий спектр классов, включая вальс, танго, квикстеп и другие.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:flex justify-center md:py-12">
                <div className="md:w-5/6 p-3 flex justify-center">
                    <div className="md:flex lg:w-auto w-5/6 items-center">
                        <div className="md:w-1/2 flex order-2 justify-center items-center">
                            <img className="w-5/6" src="/images/image_per.jpg" alt="random image"/>
                        </div>
                        <div className="text-start py-4 md:w-1/2 md:p-6 order-1">
                            <h3 className="text-2xl pb-2 font-bold">Индивидуальные занятия</h3>
                            <p>Мы предлагаем персональную тренировку по бальным танцам, которая поможет вам улучшить технику, научиться новым движениям и достичь своих целей быстрее.<br/>
                            Тренер будут работать с Вами один на один, чтобы помочь вам развить свои сильные стороны, устранить слабости и создать индивидуальный план обучения, который наиболее подходит именно Вам!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:flex justify-center md:py-12">
                <div className="md:w-5/6 p-3 flex justify-center">
                    <div className="md:flex lg:w-auto w-5/6 items-center justify-center">
                        <div className="md:w-1/2 flex justify-center items-center">
                            <img className="w-5/6" src="/images/comp.jpg" alt="random image"/>
                        </div>
                        <div className="text-start md:w-1/2 py-4 md:p-6">
                            <h3 className="text-2xl pb-2 font-bold">Участия в соревнованиях</h3>
                            <p>Участие в сорвенованиях помогут развить конкурентоспособность и отследить прогресс развития. Принимать участия можно в разных<br/>
                            возрастных группах, от детей до взрослых. Также возможна сцена Pro-Am, где любители в паре с профессиональными танцорами соревнуются между собой </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Services