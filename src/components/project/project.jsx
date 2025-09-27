import React from 'react';
import Title from "../title/title.jsx";
import Container from "../container/container.jsx";
import Tabs from "./tabs.jsx";
import Block from "./block.jsx";
import img1 from "../../assets/img/project/1.png";
import img2 from "../../assets/img/project/2.png";
import img3 from "../../assets/img/project/3.png";
import img4 from "../../assets/img/project/4.png";
import img5 from "../../assets/img/project/5.png";

const Project = () => {

    const jsonBlock = [
        {
            title: 'Современная гостиная с точечным освещением',
            text: 'Глянцевый потолок с равномерно расположенными точечными светильниками создает элегантное, современное пространство.',
            button: 'Подробнее',
            img: img1
        },
        {
            title: 'Кухня с LED панелями',
            text: 'Матовый потолок с встроенными светодиодными панелями обеспечивает яркое, равномерное освещение рабочей зоны',
            button: 'Подробнее',
            img: img2
        },
        {
            title: 'Спальня с центральной люстрой',
            text: 'Элегантная спальня с утонченной люстрой в центре потолка, создающая атмосферу комфорта и роскоши',
            button: 'Подробнее',
            img: img3
        },
        {
            title: 'Многоуровневый потолок с подсветкой',
            text: 'Двухуровневый потолок с встроенной светодиодной подсветкой по периметру создает уникальный световой дизайн',
            button: 'Подробнее',
            img: img4
        },
        {
            title: 'Офис с комбинированным освещением',
            text: 'Рабочее пространство с комбинацией точечных светильников и LED панелей для оптимального освещения рабочих зон',
            button: 'Подробнее',
            img: img5
        },
    ]


    return (
        <div>
            <Container>
                <Title title='Проекты Освещения' note='Вдохновитесь нашими реализованными проектами с различными типами освещения для натяжных потолков'></Title>
                <Tabs></Tabs>
                <div className=''>
                    <Block json={jsonBlock}></Block>
                </div>
                <div className='w-full bg-gray mt-8 p-4 text-center text-second '>показать еще</div>
            </Container>
        </div>
    );
};

export default Project;