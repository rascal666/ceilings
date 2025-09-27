import React from 'react';
import Container from "../container/container.jsx";
import Title from "../title/title.jsx";
import Slider from "./slider.jsx";
import Slider2 from "./slider2.jsx";

const Portfolio = () => {
    return (
        <div className='pb-12'>
            <Container>
                <Title title='Портфолио наших работ' note='Ознакомьтесь с нашими последними проектами и вдохновитесь для вашего будущего потолка'></Title>
                <Slider ></Slider>

            </Container>

        </div>
    );
};

export default Portfolio;