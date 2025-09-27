import React from 'react';


const Slide = ({img, link}) => {



    return (
        <div >
            <a  href={link}>
                <img className='w-full object-cover h-[250px] md:h-full' src={img} alt=""/>
            </a>

        </div>
    );
};

export default Slide