import React, { useState } from 'react';
import { useIMask } from 'react-imask';
import Button from "../../ui-ux/button.jsx";

function Form({className, stylevariant, arrowLeft, arrowRight, title, fieldName=true, fieldMail=true, fieldPhone=true, fieldAria=true}) {

    const stileInput = 'w-full px-4 md:px-0 py-2 border-b-1 border-gray-300  focus:outline-none  transition duration-200 valid:bg-transparent valid:shadow-none'
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '', // Будет обновляться через useIMask
        message: '',
    });

    const phoneMaskOptions = {
        mask: '+{7} (000) 000-00-00', // Пример маски для России
        lazy: false, // true: маска появляется только при фокусе, false: всегда видна
        placeholderChar: '_',
    };

    const { ref: phoneInputRef, maskRef } = useIMask(phoneMaskOptions, {
        onAccept: (value) => {
            setFormData((prevData) => ({ ...prevData, phone: value }));
        },
        // onComplete: (value) => { /* Можно что-то сделать при полном вводе */ }
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Данные формы:', formData);
    };

    return (

            <form
                onSubmit={handleSubmit}
                className={`max-w-md grid gap-1 2xl:gap-6 ${className}` }
            >
                <p className='text-[24px] 2xl:text-[36px] mb-6 md:mb-12 '>{title}</p>
                {
                    fieldName ?
                        <div className="mb-4">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={stileInput}
                                placeholder="Ваше имя"
                                required
                            />
                        </div> : null
                }


                {
                    fieldMail ?
                        <div className="mb-4">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={stileInput}
                                placeholder="your@example.com"
                                required
                            />
                        </div> : null
                }

                {
                    fieldPhone ?
                        <div className="mb-4">
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                ref={phoneInputRef}
                                className={stileInput}
                                placeholder="+7 (___) ___-__-__"
                                required
                            />
                        </div>: null
                }



                {
                    fieldAria ?
                        <div className="mb-6">

                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className={stileInput}
                        placeholder="Ваше сообщение..."
                        required
                    ></textarea>
                        </div>: null
                }


                <Button className='w-full justify-center' type='submit' stylevariant={stylevariant} arrowLeft={arrowLeft} arrowRight={arrowRight} title='отправить'></Button>

                <p className='text-[14px] font-light'>
                    Отправляя форму вы соглашаетесь на <br/>
                    <a href="#" className='font-medium '> обработку персональных данных</a>
                </p>
            </form>

    );
}

export default Form;
