import React from 'react';

const Title = ({title, styleBlak=true, note}) => {
    const titleStyleWhite = 'text-white';
    const titleStyleBlack = 'text-base';

    return (
        <div className='grid gap-5 lg:flex lg:justify-between lg:items-center  md:mb-14 mb-7 md:mt-24 mt-12'>
            <div className={`text-[24px] md:text-[40px] font-medium  ${styleBlak? titleStyleBlack : titleStyleWhite}`}>
                {title}
            </div>
            <span className='max-w-[480px] text-[14px] text-second'>
                {note}
            </span>
        </div>
    );
};

export default Title;