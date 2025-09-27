import React, {useEffect, useState} from 'react';
import {Controller,  Pagination, Scrollbar,} from "swiper/modules";
import Slide from "./slide.jsx";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/scrollbar';
import "swiper/css/grid";

import './kk.css'

import img1 from '../../assets/img/portfolio/1.png'
import img2 from '../../assets/img/portfolio/2.png'
import img3 from '../../assets/img/portfolio/3.png'
import img4 from '../../assets/img/portfolio/4.png'
import img5 from '../../assets/img/portfolio/5.png'
import img6 from '../../assets/img/portfolio/6.png'

const Slider = () => {
    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);


    useEffect(() => {
        if (firstSwiper && secondSwiper) {
            firstSwiper.controller.control = secondSwiper;
            secondSwiper.controller.control = firstSwiper;
        }
    }, [firstSwiper, secondSwiper]);

    return (

        <div className='relative ' >
            <Swiper
                onSwiper={setFirstSwiper}
                modules={[Controller, Pagination]}
                spaceBetween={30}
                slidesPerView= 'auto'
                loop={false}


            >


                <SwiperSlide className='grid mb-[30px]'>
                    <Slide img={img1}  link='#'></Slide>
                </SwiperSlide>

                <SwiperSlide className='grid mb-[30px]'>
                    <Slide img={img2}  link='#'></Slide>
                </SwiperSlide>

                <SwiperSlide className='grid mb-[30px]'>
                    <Slide img={img3}  link='#'></Slide>
                </SwiperSlide>

            </Swiper>

            <Swiper
                onSwiper={setSecondSwiper}
                modules={[Controller, Scrollbar]}
                scrollbar={{ draggable: true }}
                spaceBetween={30}
                slidesPerView= 'auto'
                loop={false}
            >

                <SwiperSlide className='grid mb-[30px]'>
                    <Slide img={img4}  link='#'></Slide>
                </SwiperSlide>

                <SwiperSlide className='grid mb-[30px]'>
                    <Slide img={img5}  link='#'></Slide>
                </SwiperSlide>

                <SwiperSlide className='grid mb-[30px]'>
                    <Slide img={img6}  link='#'></Slide>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Slider;