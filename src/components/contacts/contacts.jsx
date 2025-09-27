import React from 'react';
import bg from '../../assets/img/contactBg.png';
import Form from "../form/form.jsx";

const Contacts = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-[2fr_1fr] items-center max-w-[1920px] m-auto '>
            <img className='h-full hidden lg:block' src={bg} alt=""/>
            <div className='p-6 md:p-12 pr-[10wv]'>

                <Form title='Связаться с нами'></Form>
            </div>
        </div>
    );
};

export default Contacts;