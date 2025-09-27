import React from 'react';
import Container from "../container/container.jsx";
import Title from "../title/title.jsx";
import iconReviews from "../../assets/img/stars.png"
import Button from "../../ui-ux/button.jsx";
import iconMessage from "../../assets/img/iconMessage.png";

const Reviews = () => {
    const jsonReviews =[
        {
            text: 'Потрясающее качество работы и внимание к деталям! Заказывала глянцевые потолки для проекта клиента, результат превзошел все ожидания. Особенно понравилась чистота монтажа и пунктуальность бригады. Всем рекомендую!',
            icon: iconReviews,
            note: 'Ольга и Дмитрий, потолок в спальне'
        },
        {
            text: 'Долго выбирали компанию для установки натяжных потолков в нашу новую квартиру. Остановились на "Overpotolkov" и не пожалели. Отличное соотношение цены и качества, быстрый монтаж, никакой грязи. Потолки смотрятся великолепно!',
            icon: iconReviews,
            note: 'Сергей Иванов, потолок в гостиной'
        },
        {
            text: 'Заказывала потолки с фотопечатью для своего салона красоты. Клиенты в восторге от необычного дизайна! Было несколько моментов при монтаже, но все быстро решили. В целом очень довольна, буду рекомендовать друзьям.',
            icon: iconReviews,
            note: 'Жанна Андреевна, потолки во всей квартире'
        },
        {
            text: 'Заказывала потолки с фотопечатью для своего салона красоты. Клиенты в восторге от необычного дизайна! Было несколько моментов при монтаже, но все быстро решили. В целом очень довольна, буду рекомендовать друзьям.',
            icon: iconReviews,
            note: 'Анна Смирнова, дизайн интерьера'
        },
        {
            text: 'Потрясающее качество работы и внимание к деталям! Заказывала глянцевые потолки для проекта клиента, результат превзошел все ожидания. Особенно понравилась чистота монтажа и пунктуальность бригады. Всем рекомендую!',
            icon: iconReviews,
            note: 'Михаил Козлов, потолки в офисе'
        },
    ]

    return (
        <div className='bg-gray'>
            <Container className='pt-1 pb-13 md:pb-26'>
                <Title title='Отзывы довольных клиентов' note='Узнайте, что говорят о нас клиенты, которые уже оценили качество наших натяжных потолков'></Title>

                <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 md:gap-8 flex-wrap'>
                    {
                        jsonReviews.map((item, index) => {
                            return (
                                <div key={index} className='bg-white px-6 md:px-10 py-6 grid gap-4 md:gap-6 content-between'>
                                    <img src={item.icon} alt=""/>
                                    <p>{item.text}</p>
                                    <span className='text-[13px] md:text-[15px] text-second'>{item.note}</span>
                                </div>
                            )
                        })
                    }
                    <div className='bg-[url(./assets/img/bgReview.png)]  px-6 md:px-10 py-12 grid gap-4 md:gap-6 text-gray'>
                        <p className='text-[18px] md:text-[24px]'>Довольны нашей работой?</p>
                        <p className='text-[15px] md:text-[16px] text-second'>Мы всегда рады отзывам наших клиентов. Оставьте свой отзыв, чтобы помочь другим сделать правильный выбор</p>
                        <Button title='Оставить отзыв' stylevariant='yellowBorder' arrowLeft={iconMessage}></Button>
                    </div>
                </div>


            </Container>
        </div>
    );
};

export default Reviews;