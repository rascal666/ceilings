import React from 'react';
import Container from "../container/container.jsx";
import logo from "../../assets/img/footer/logo.png";
import iconInst from "../../assets/img/footer/iconInst.png";
import iconTg from "../../assets/img/footer/iconTg.png";
import iconVk from "../../assets/img/footer/iconVk.png";
import iconArrow from "../../assets/img/footer/iconArrow.png";

const Footer = () => {
    return (
        <div className='bg-[#232323] text-white py-12 lg:py-24'>
            <Container>
                <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-[1fr_1fr_1fr_1fr_auto] gap-12 justify-between sm:justify-items-center '>
                    <img className='w-full min-w-[150px] max-w-[300px] col-span-full lg:col-span-1' src={logo} alt=""/>
                    <div className='grid gap-4 content-baseline'>
                        <p className='font-medium'>Overpotolkov.ru</p>
                        <div className='text-[13px] lg:text-[15px] text-second'>
                            <span>Качественные натяжные потолки по доступным ценам. Мы делаем вашу жизнь красивее!</span>
                        </div>
                    </div>
                    <div className='grid gap-4 content-baseline'>
                        <p className='font-medium'>Контакты</p>
                        <div className='text-[13px] lg:text-[15px] text-second'>
                            <span>Телефон: +7 (XXX) XXX-XX-XX</span>
                            <span>Email: info@overpotolkov.ru</span>
                            <span>Адрес: г. Москва, ул. Примерная, д. 123</span>
                        </div>
                        <div className='flex items-center gap-2 '>
                            <a href="">
                                <img src={iconInst} alt=""/>
                            </a>
                            <a href="">
                                <img src={iconTg} alt=""/>
                            </a>
                            <a href="">
                                <img src={iconVk} alt=""/>
                            </a>

                        </div>
                    </div>
                    <div className='grid gap-4 content-baseline'>
                        <p className='font-medium'>Часы работы</p>
                        <div className='text-[13px] lg:text-[15px] text-second'>
                            <span>Пн-Пт   9:00 - 18:00</span>
                            <span>Сб   10:00 - 16:00</span>
                            <span>Вс   Выходной</span>
                        </div>
                    </div>
                    <img className='hidden lg:block' src={iconArrow} alt=""/>
                </div>
            </Container>
        </div>
    );
};

export default Footer;