import React from 'react';
import Container from "../container/container.jsx";
import Title from "../title/title.jsx";
import Tabs from "./tabs.jsx";
import Info from "./info.jsx";
import img from "../../assets/img/comparison/img.png"
import plusIcon from "../../assets/img/comparison/plusIcon.png"
import minusIcon from "../../assets/img/comparison/minusIcon.png"
import ItemList from "./itemList.jsx";


const Comparison = () => {
    return (
        <div className='bg-[url(./assets/img/comparison/bg.png)] bg-no-repeat bg-cover pb-12 lg:pb-[150px] pt-1 mt-24 text-gray'>
            <Container>
                <Title styleBlak={false} title="Сравнение типов освещения" note='Выберите оптимальный вариант освещения для вашего натяжного потолка'/>
                <Tabs></Tabs>

                <div className='mt-10 lg:mt-20 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-7 xl:gap-14 items-start'>
                    <img className=' ' src={img} alt=""/>

                    <div className='grid gap-4 sm:gap-8 lg:gap-16'>
                        <p>
                            Компактные светильники, встраиваемые непосредственно в потолок.
                            Обеспечивают направленное освещение
                        </p>
                        <p>
                            Идеально для кухонь, коридоров и помещений, где требуется равномерное освещение всей площади. Также хорошо подходит для акцентного освещения предметов интерьера
                        </p>

                        <div className='flex flex-wrap gap-6'>
                            <Info title='Стоимость' text='От 350₽ за точку'></Info>
                            <Info title='Сложность монтажа' text='Средняя'></Info>
                            <Info title='Эффективность' text='Средняя'></Info>
                            <Info title='Срок службы' text='5-10 лет'></Info>
                        </div>

                        <div className='grid gap-8 xl:flex'>
                            <div style={{ background: 'linear-gradient(169.32deg, rgba(109, 175, 68, 0.1) 13.6%, rgba(109, 175, 68, 0.1) 87.78%)' }}
                                 className='text-[#6DAF44] p-6 lg:p-12' >
                                <p className='text-[18px] lg:text-[24px]'>Преимущества</p>
                                <div className='grid gap-4 mt-6 lg:mt-12 '>
                                    <ItemList text='Равномерное распределение света' icon={plusIcon}></ItemList>
                                    <ItemList text='Компактный размер' icon={plusIcon}></ItemList>
                                    <ItemList text='Широкий выбор дизайнов' icon={plusIcon}></ItemList>
                                    <ItemList text='Возможность создания зон освещения' icon={plusIcon}></ItemList>
                                    <ItemList text='Хорошо сочетаются с любым интерьером' icon={plusIcon}></ItemList>
                                </div>
                            </div>
                            <div style={{ background: 'linear-gradient(168.95deg, rgba(185, 62, 62, 0.2) 12.97%, rgba(185, 62, 62, 0) 84.35%)' }}
                                 className='text-[#B93E3E] p-6 lg:p-12' >
                                <p className='text-[18px] lg:text-[24px]'>Преимущества</p>
                                <div className='grid gap-4 mt-6 lg:mt-12 '>
                                    <ItemList text='Равномерное распределение света' icon={minusIcon}></ItemList>
                                    <ItemList text='Компактный размер' icon={minusIcon}></ItemList>
                                    <ItemList text='Широкий выбор дизайнов' icon={minusIcon}></ItemList>
                                    <ItemList text='Возможность создания зон освещения' icon={minusIcon}></ItemList>
                                    <ItemList text='Хорошо сочетаются с любым интерьером' icon={minusIcon}></ItemList>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Comparison;