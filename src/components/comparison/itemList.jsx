import React from 'react';
import img from "../../assets/img/comparison/img.png";

const ItemList = ({icon, text}) => {
    return (
        <div className='text-[13px] lg:text-[15px] grid grid-cols-[auto_1fr] gap-4 items-center'>
            <img src={icon} alt=""/>
            <p>{text}</p>
        </div>
    );
};

export default ItemList;