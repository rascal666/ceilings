import React from 'react';
import ServiсeBlock from "./serviсeBlock.jsx";
import img1 from '../../assets/img/services/1.png'
import img2 from '../../assets/img/services/2.png'
import img3 from '../../assets/img/services/3.png'
import img4 from '../../assets/img/services/4.png'
import img5 from '../../assets/img/services/5.png'
import img6 from '../../assets/img/services/6.png'
import Container from "../container/container.jsx";
import Title from "../title/title.jsx";

const Services = () => {
    const jsonServiceCard= [
        {   img: img1,
            title: 'Теневые потолки',
            text: 'Потолок, установленный с теневым зазором, без вставки. Чтобы его получить используют специальный теневой профиль.',
        },
        {   img: img2,
            title: 'Парящие и контурные',
            text: 'Это интересный визуальный эффект, получаемый при особой подсветке декоративного потолочного перекрытия',
        },
        {   img: img3,
            title: 'Карнизы для штор',
            text: 'Карниз, который монтируется непосредственно в потолок, поэтому он скрыт от глаз',
        },
        {   img: img4,
            title: 'Световой потолок',
            text: 'Конструкция, равномерно подсвеченная по всей площади, создающая эффект дневного освещения',
        },
        {   img: img5,
            title: 'Тканиевый потолок',
            text: 'В отличии от обычного натяжного, сделан из особой сетки, благодаря чему потолок "дышит"',
        },
        {   img: img6,
            title: 'Фотопечать',
            text: 'Современные натяжные потолки без видимых швов для идеально ровной поверхности',
        },
    ]

    return (



        <div>
            <Container>
                <Title title="Наши услуги" note='Мы предлагаем широкий спектр услуг по установке натяжных потолков различных типов и стилей'/>
                <div className='grid justify-items-center grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-x-6 gap-y-10'>
                    {
                        jsonServiceCard.map((item, index) => {
                            return (
                                <ServiсeBlock key={index} img={item.img} title={item.title} text={item.text}></ServiсeBlock>
                            )
                        })
                    }
                </div>
            </Container>
        </div>
    );
};

export default Services;