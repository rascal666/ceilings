import React, {useState} from 'react';
import iconArrow from '../assets/img/arrow.png'

const Dropdown = ({title, listDropdown}) => {


    const [isDropdown, setIsDropdown] = useState(false)
    const [itemShow, setItemShow] = useState(listDropdown[0].text)

    const handleDropdown = (e) => {
        setItemShow(e)
        setIsDropdown(false)
    }




    return (
        <div className="text-white">
            <p className='text-[15px] text-second'>{title}</p>
            <div
                onClick={() => setIsDropdown(!isDropdown)}
                className='flex items-center justify-between gap-5 mt-3 border border-second px-5 py-6 text-lg w-full h-[64px] hover:cursor-pointer text-[16px] xl:text-[18px]'>
                <button>
                    {itemShow}
                </button>
                <img src={iconArrow} alt=""/>
            </div>

            {
                isDropdown ?
                    <div className="grid gap-4 mt-4 ">
                        {
                            listDropdown.map((item) => {
                                return (
                                    <p key={item.key}
                                       onClick={() => handleDropdown(item.text)}
                                       className='hover:cursor-pointer border border-second p-4 bg-[#363737]'
                                    >{item.text}</p>
                                )
                            })
                        }
                    </div>
                    : null
            }
        </div>
    )
};

export default Dropdown;