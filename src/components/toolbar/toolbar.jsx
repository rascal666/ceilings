import React from 'react';
import logo from '../../assets/img/logo.png';
import iconPhone from '../../assets/img/iconPhone.png';

const Toolbar = () => {

    const arrayMenu= [
        {title: 'Услуги'},
        {title: 'Калькулятор'},
        {title: 'Портфолио'},
        {title: 'Отзывы'},
        {title: 'Контакты'},

    ]

    return (
        <div className="grid grid-flow-col items-center justify-between font-thin gap-2  sm:gap-6 max-w-[1504px] mx-auto p-6">
            <a href="#">
                <img className='' src={logo} alt=""/>
            </a>
            <nav className="xl:grid hidden grid-flow-col gap-12 ">
                {
                    arrayMenu.map((item,index) => {
                        return (
                            <div key={index} className="relative no-underline group">
                                <span className='2xl:text-lg xl:text-md pb-3 hover:border-b-2 hover:cursor-pointer hover: border-yellow-300' key={index}>{item.title}</span>
                            </div>
                        )
                    })
                }
            </nav>
            <div className="grid grid-cols-[1fr_auto] items-center gap-1">
                <div className="grid text-center    ">
                    <a className='text-xs sm:text-lg  ' href="tel:+71234567890">+7 (123) 456-78-90</a>
                    <span className='text-xs underline text-second hover:cursor-pointer'>Заказать обратный звонок</span>
                </div>
                <img className='w-6 sm:w-auto' src={iconPhone} alt=""/>
            </div>
        </div>
    );
};

export default Toolbar;