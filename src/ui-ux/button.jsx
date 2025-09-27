import React from 'react';

const Button = ({title, stylevariant = 'black', arrowRight=false, arrowLeft, className, ...props}) => {


    const styles = {
        black: 'bg-amber text-white border-1 bg-base text-amber-50 px-12 py-4 text-lg',
        white: 'bg-white text-base border-1 bg-base text-white-50 px-12 py-4 text-lg',
        yellow: 'bg-accent border-1 border-accent  text-base  px-12 py-4 text-lg',
        yellowBorder: ' border-1 border-accent bg-base text-accent  px-12 py-4 text-lg',
    };

    const buttonStyle = styles[stylevariant] || styles.black;

    return (
        <button {...props} className={`w-fit font-medium hover:cursor-pointer text-[14px] md:text-[18px] flex gap-3 items-center ${className} ${buttonStyle} `}>
            {arrowLeft ? <img src={arrowLeft} alt=""/> : null }
            {title}
            {arrowRight? ' →': ''}
        </button>


    );
};

export default Button;