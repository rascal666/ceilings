import React, { useState } from 'react';

const Checkbox = ({ label, onChange, note }) => {
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        const newChecked = !checked;
        setChecked(newChecked);
        if (onChange) {
            onChange(newChecked);
        }
    };

    return (
        <label className={`flex items-center cursor-pointer border border-second  px-5 py-6 ${checked? 'border-yellow-500': ''}`}>
            <input
                type="checkbox"
                checked={checked}
                onChange={handleChange}
                className="hidden"
            />
            <div
                className={`h-6 w-6 border-2 backdrop-opacity-10 backroundColor: border-second bg-opacity-50 flex items-center justify-center transition duration-150 ease-in-out`}
            >
                {checked && <span className="block h-2 w-2 bg-yellow-500 p-2" />}
            </div>
            <div className='flex items-center justify-between w-full'>
                <span className="ml-2 text-white">{label}</span>
                <span className='text-second'> {note}</span>
            </div>
        </label>
    );
};

export default Checkbox;