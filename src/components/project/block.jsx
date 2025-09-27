import React from 'react';
import Button from "../../ui-ux/button.jsx";


const Block = ({json}) => {
    return (
        <div className='mt-12 grid gap-16'>
            {
                json.map((item, index) => {
                    return (
                        <div className='grid grid-cols-1 md:grid-cols-[2fr_1fr] items-stretch  gap-8 lg:gap-16' key={index} >
                            <img className='object-cover' src={item.img} alt=""/>
                            <div className='grid gap-9'>
                                <p className='text-[20px] lg:text-[32px]'>{item.title}</p>
                                <p>{item.text}</p>
                                <Button title={item.button} stylevariant='white' arrowRight={true} ></Button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Block;