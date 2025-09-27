import React from 'react';

const ServiсeBlock = ({img, title, text}) => {
    return (
        <div >
            <img src={img} alt=""/>
            <p className='text-[18px] md:text-[24px] font-medium mb-2 mt-6'>{title}</p>
            <p className='text-[14px]'>{text}</p>
        </div>
    );
};

export default ServiсeBlock;