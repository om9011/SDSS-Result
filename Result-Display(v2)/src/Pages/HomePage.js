import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect'; 
import logo from "../Assets/logo.png";


const RollNumberInputPage = () => {
    const [rollNumber, setRollNumber] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate(`/result/${rollNumber}`);
    };

    return (
        <div className="lg:h-fixed md:h-auto flex flex-col justify-center items-center bg-violet-50">
            <img src={logo} alt="Logo" width={250} className='my-13' />
            <Typewriter
                options={{
                    strings: ['Swami Dayananda Saraswati Shakha', 'Result 2023-24'],
                    autoStart: true,
                    loop: true,
                    wrapperClassName: 'text-xl font-semibold', 
                    delay:175
                }}
            />
            
            <div className=" flex flex-col justify-center items-center mx-auto my-6">
                <input
                    type="text"
                    className="border-2 border-gray-600 rounded-md py-2 px-4 mx-4"
                    placeholder="Enter Roll No."
                    value={rollNumber}
                    onChange={(e) => setRollNumber(e.target.value)}
                />
                <button
                    className="bg-blue-500 text-white font-semibold py-2 px-4 m-4 rounded-md"
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default RollNumberInputPage;
