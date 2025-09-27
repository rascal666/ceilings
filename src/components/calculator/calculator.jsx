import React, {useState} from 'react';
import Container from "../container/container.jsx";
import Title from "../title/title.jsx";
import "../../assets/img/bgCalc.png"
import InputSize from "../../ui-ux/inputSize.jsx";
import Dropdown from "../../ui-ux/dropdown.jsx";
import Checkbox from "../../ui-ux/chekbox.jsx";
import Button from "../../ui-ux/button.jsx";

const Calculator = () => {
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');

    const handletWidthChange = (newWidth) => {
        setWidth(newWidth);
    };
    const handleHeightChange = (newHeight) => {
        setHeight(newHeight);
    };

    const listDropdown = [
        {
            key: 1,
            text: 'Матовый Premium (850 Р/м²)'
        },
        {
            key: 2,
            text: '2Матовый Premium (850 Р/м²)'
        },
        {
            key: 3,
            text: '3Матовый Premium (850 Р/м²)'
        }
    ]

    return (
        <div className='bg-[url(./assets/img/bgCalc.png)] bg-no-repeat bg-cover pb-12 lg:pb-[150px] pt-1 mt-24 text-white text-[14px] xl:text-[18px]' >
            <Container >
                <Title title='Калькулятор стоимости' note='Рассчитайте примерную стоимость установки натяжного потолка в вашем помещении' styleBlak={false}> </Title>

                <div className=''>
                    <div className='grid  lg:grid-cols-[1fr_2fr] gap-10 '>
                        <div>
                            <div className='mb-9 text-[16px] xl:text-[18px]'>Размеры помещения</div>
                            <div className='grid gap-9'>
                                <div className=' grid grid-cols-[1fr_1fr] sm:flex lg:grid lg:grid-cols-[auto_1fr] 2xl:flex gap-5 text-white'>
                                    <InputSize onChange={handletWidthChange} title='Ширина' metr='м'></InputSize>
                                    <InputSize onChange={handleHeightChange} title='Длинна' metr='м'></InputSize>
                                   <div className='grid col-span-full'>
                                       <div>
                                           <span className='text-[15px] text-second'>Площадь потолка</span>
                                           <div className={`flex items-center justify-between  p-2  relative  mt-3 bg-[#2A2A2A] h-[64px]`}>
                                               <div>
                                                   {`${width * height}.0`}
                                               </div>
                                               <span className="text-second">м²</span>
                                           </div>
                                       </div>
                                   </div>
                                </div>
                                <Dropdown listDropdown={listDropdown} title='Тип потолка' />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                            <div>
                                <div className='mb-9 text-[16px] xl:text-[18px]'>Освещение</div>
                                <div className='grid gap-3.5'>
                                    <Checkbox label='Без светильников'></Checkbox>
                                    <Checkbox note='+450 Р/шт' label='Точечные светильники'></Checkbox>
                                    <Checkbox note='+1000 Р/шт' label='Подгонка под люстру'></Checkbox>
                                </div>
                            </div>
                            <div>
                                <div className='mb-9 text-[16px] xl:text-[18px]'>Потолочный карниз</div>
                                <div className='grid gap-3.5'>
                                    <Checkbox label='Без карниза'></Checkbox>
                                    <Checkbox note='+500 Р/шт' label='Накладной карниз'></Checkbox>
                                    <Checkbox note='+2500 Р/шт' label='Встроенный карниз'></Checkbox>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundColor: 'rgba(104, 104, 104, 0.1)' }} className='grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10  p-7 lg:p-14 border-r-1 border-second  mt-16'>
                        <div >
                            <p className='text-[18px] md:text-[24px]'>Расчет стоимости</p>

                            <div className='mt-8 mb-8 grid gap-4 '>
                                <div className='grid grid-cols-[auto_1fr] gap-2 sm:gap-5 '>
                                    <p className='font-light text-gray'>Натяжной потолок:</p>
                                    <span className='justify-self-end'>10 200 Р</span>
                                </div>
                                <div className='grid grid-cols-[auto_1fr] gap-2 sm:gap-5 '>
                                    <p className='font-light text-gray'>Освещение (4 шт):</p>
                                    <span className='justify-self-end'>1 800 Р</span>
                                </div>
                                <div className='grid grid-cols-[auto_1fr] gap-2 sm:gap-5 '>
                                    <p className='font-light text-gray'>Карниз (14 м):</p>
                                    <span className='justify-self-end'>7 000 Р</span>
                                </div>
                            </div>

                            <div className='flex gap-5 justify-between  border-t-1 border-second pt-6  '>
                                <p className='text-[18px] md:text-[24px]'>ИТОГО:</p>
                                <span className='text-[18px] md:text-[24px]'>19 000 Р</span>
                            </div>
                        </div>
                        <div className='grid gap-10 justify-between content-between lg:border-l-1 lg:border-second lg:pl-12'>
                            <div>
                                <p className='mb-6'>
                                    Стоимость на сайте является примерной. Окончательная стоимость может отличаться и зависит от сложности монтажа, дополнительных материалов и других факторов
                                </p>
                                <p>Получите точный расчет стоимости от наших специалистов</p>
                            </div>
                            <Button title='Оставить заявку' stylevariant='yellow'></Button>
                        </div>
                    </div>
                </div>


            </Container>
        </div>
    );
};

export default Calculator;