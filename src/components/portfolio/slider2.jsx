import React from 'react';
import Slider from "react-slick";

import Slide from "./slide.jsx";


import img1 from '../../assets/img/portfolio/1.png'
import img2 from '../../assets/img/portfolio/2.png'
import img3 from '../../assets/img/portfolio/3.png'
import img4 from '../../assets/img/portfolio/4.png'
import img5 from '../../assets/img/portfolio/5.png'
import img6 from '../../assets/img/portfolio/6.png'

const Slider2 = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (

        <Slider {...settings}>
            <div>
                <h3>1</h3>
            </div>
            <div>
                <h3>2</h3>
            </div>
            <div>
                <h3>3</h3>
            </div>
            <div>
                <h3>4</h3>
            </div>
            <div>
                <h3>5</h3>
            </div>
            <div>
                <h3>6</h3>
            </div>
        </Slider>

    );
};

export default Slider2;