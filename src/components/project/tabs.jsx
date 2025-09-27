import React, {useState} from 'react';
import '../../assets/img/project/1.png'

const Tabs = () => {

    const [isActive, setIsActive] = useState(0)

    const array = [
        {title: 'Все проекты'},
        {title: 'Точечное освещение'},
        {title: 'LED Панели'},
        {title: 'Люстры'},
    ]



    return (
        <div className='flex flex-wrap gap-5'>
            {
                array.map((item, index) => {
                    return (
                        <div onClick={() => setIsActive(index)} className={`p-4 hover:cursor-pointer  ${isActive === index ? 'bg-base text-gray': 'bg-gray'}  `} key={index}>{item.title}</div>
                    )
                })
            }
        </div>


    );
};

export default Tabs;