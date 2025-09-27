import React, {useEffect, useState} from 'react';

const InputSize = ({onChange, metr,title,disabled=false }) => {

    const [value, setValue] = useState('');

    const handleChange = (e) => {
        const newValue = e.target.value.replace(/[^0-9]/g, '');
        setValue(newValue);
    };

    useEffect(() => {
        if (typeof onChange === 'function') {
            onChange(value);
        }
    }, [value, onChange]);

    return (
        <div>
            <span className='text-[15px] text-second'>{title}</span>
            <div className={`h-[64px] flex items-center border border-second  px-5 py-6  relative  mt-3   ${disabled ? 'bg-gray-300' : ''}`}>
                <input
                    type="text"
                    value={value}
                    onChange={handleChange}
                    className="flex-grow outline-none p-1 w-[60px] "
                    disabled={disabled}
                />
                <span className="text-gray-600">{metr}</span>
            </div>
        </div>
    );
};

export default InputSize;