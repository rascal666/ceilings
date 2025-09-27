import React, {useState} from 'react';
import close from '../../assets/img/iconClose.png'
import Button from "../../ui-ux/button.jsx";

const Modal = ({children, button, styleButton='black', arrowLeft, arrowRight, }) => {

    const [isModal, setIsModal] = useState(false);
    console.log(isModal)
    return (
        <div>
            <div className={'fixed top-0 left-0 right-0 bottom-0 bg-black/60 backdrop-blur-[3px] z-999' + (isModal? ' block':  ' hidden')} onClick={() => {setIsModal(false)}}>
                <div className="" onClick={(e) => e.stopPropagation()}>
                    <div className={'bg-white w-[80%] 2xl:w-fit pl-8 md:pl-0  pr-8 md:pr-16 lg:pr-16 absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 ' + (isModal? ' block': ' hidden')}>
                        <img onClick={() => {setIsModal(false)}} className='absolute top-4 right-6 hover:cursor-pointer' src={close} alt=""/>
                        {children}
                    </div>
                </div>
            </div>
            <Button onClick={() => {setIsModal(true)}} className='w-full justify-center' type='submit' stylevariant={styleButton} arrowLeft={arrowLeft} arrowRight={arrowRight} title={button}></Button>
        </div>
    );
};

export default Modal;