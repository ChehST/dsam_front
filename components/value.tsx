function Value() {
  return (
    <div className="lg:h-screen w-full bg-gray-200">
            <div className="flex h-2/5 justify-center items-center">
                <div className="md:w-1/2 my-6 w-3/4">
                    <h2 className="text-center text-4xl font-bold mb-3 mt-6">Почему стоит привести ребёнка
                        на танцы?</h2>
                    <p className="text-center font-thin">Всестороннее развитие и занятие интересным<br/> делом. Фактически элитарный вид спорта!</p>
                </div>
            </div>
            <div className="flex h-3/5 justify-center">
                <div className="lg:w-3/4 w-5/6">
                    <ul className="lg:flex lg:space-x-14 justify-between">
                        <li className="my-6 lg:w-1/3">
                            <div className="flex justify-center">
                                <img src="/svg/kideducate_honor.svg" className="w-24 h-24" alt="trophy cup icon"/>
                            </div>
                            <h2 className="text-center text-xl p-3 font-bold">Самореализация</h2>
                            <p className="text-center">Участие в соревнованиях и достижение
                                в них наград, развивают конкурентоспособность и уверенность в себе Ваших детей</p>
                        </li>
                        <li className="my-6 lg:w-1/3">
                            <div className="flex justify-center">
                                <img src="/svg/re_man.svg" className="w-24 h-24" alt="man icon"/>
                            </div>
                            <h2 className="text-center text-xl p-3 font-bold">Индивидуальный подход</h2>
                            <p className="text-center">Каждому ребенку уделяется особых подход для комфортного обучения и развития</p>
                        </li>
                        <li className="my-6 lg:w-1/3">
                            <div className="flex justify-center">
                                <img src="/svg/Event_agency_miracle.svg" className="w-24 h-24" alt="magic wand icon"/>
                            </div>
                            <h2 className="text-center text-xl p-3 font-bold">Новыекачества</h2>
                            <p className="text-center">Развитие новых физических и психоэмоциональных качеств. А именно: выносливость гибкость осанка, самоуверенность и другие</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
  )
}

export default Value