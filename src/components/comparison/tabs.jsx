import React, {useState} from 'react';
import '../../assets/img/project/1.png'

const Tabs = () => {

    const [isActive, setIsActive] = useState(0)

    const array = [
        {title: 'Точечные светильники'},
        {title: 'LED Панели'},
        {title: 'Светодиодная лента'},
        {title: 'Люстры'},
    ]



    return (
        <div className='flex flex-wrap justify-start lg:justify-between border-b-0 lg:border-b-1 border-second'>
            {
                array.map((item, index) => {
                    return (
                        <div onClick={() => setIsActive(index)} className={`text-[18px] lg:text-[24px] p-3 lg:p-6 hover:cursor-pointer  text-gray  ${isActive === index ? ' border-b-1 border-accent': 'text-second border-second'}  `} key={index}>{item.title}</div>
                    )
                })
            }
        </div>


    );
};

export default Tabs;