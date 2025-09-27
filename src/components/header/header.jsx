import React from 'react';
import Container from "../container/container.jsx";
import Button from "../../ui-ux/button.jsx";
import iconVk from ".././../assets/img/iconVk.png";
import iconInst from ".././../assets/img/iconInst.png";
import iconTelega from ".././../assets/img/iconTelega.png";
import iconGeo from ".././../assets/img/iconGeo.png";
import iconDix from '../../assets/img/iconDiz.png'
import Modal from "../modal/modal.jsx";
import Form from "../form/form.jsx";
import imgBgForm from "../../assets/img/bgForm1.png";

const Header = () => {
    return (
        <div className='border-t-1 border-second '>

            <Container>
                <div className=' flex gap-20 '>
                    <div className=' relative hidden md:block '>
                        <div className='bg-white grid gap-4  justify-items-center pt-6 pb-6 relative z-1 left-6 top-[150px]'>
                            <img src={iconInst} alt=""/>
                            <img src={iconVk} alt=""/>
                            <img src={iconTelega} alt=""/>
                        </div>
                        <div className='absolute border-l-1 border-second h-full  top-0 right-0' ></div>
                    </div>

                    <div className='pt-9 md:pt-33'>
                        <div className='flex gap-3 align-items-center items-center'>
                            <img src={iconGeo} alt=""/>
                            <p >г. Москва и Московская область</p>
                        </div>
                        <p className='text-[48px] md:text-[64px] font-bold md:font-medium'>Натяжные потолки</p>
                        <p className='max-w-[670px] mt-3 mb-9.5'>
                            Преобразите ваше пространство с помощью элегантных и долговечных натяжных потолков от компании "Overpotolkov". Идеальное решение для любого интерьера
                        </p>

                        <div className='grid grid-cols-1 sm:grid-cols-2  justify-start gap-4 md:gap-8'>
                            <Modal button='Рассчитать стоимость'>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                                    <img className='h-full hidden md:block' src={imgBgForm} alt=""/>
                                    <Form title='Оставить заявку' stylevariant='white' fieldMail={false} fieldPhone={false} className='py-12 2xl:py-16'></Form>
                                </div>

                            </Modal>

                            <Modal styleButton='white' button='Наши услуги'>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                                    <img className='h-full hidden md:block' src={imgBgForm} alt=""/>
                                    <Form title='Оставить заявку' stylevariant='white' fieldMail={false}  className='py-12 2xl:py-16'></Form>
                                </div>

                            </Modal>

                        </div>

                        <div className='grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] justify-start gap-10 md:gap-20 mt-8 md:mt-24 pb-8  md:pb-[150px]'>
                            <div className='flex gap-4.5 items-center'>
                                <p className='text-5xl font-medium'>148</p>
                                <p className='max-w-[240px]'>Успешно выполненных проектов потолков</p>
                            </div>
                            <div className='flex gap-4.5 items-center'>
                                <img src={iconDix} alt=""/>
                                <p className='max-w-[240px]' > Сотрудничаем с крутыми дизайнерами</p>
                            </div>
                        </div>
                    </div>
                </div>



            </Container>
        </div>

    );
};

export default Header;