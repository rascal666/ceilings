import React from 'react';

const Info = ({title, text}) => {
    return (
        <div className="w-full sm:w-max px-6 py-3 bg-[#2C2C2C]">
            <p className='text-[13px] lg:text-[15px] text-second'>{title}</p>
            <p className='text-gray'>{text}</p>
        </div>
    );
};

export default Info;