import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../Assets/logo.png";

const Navbar = () => {
    return (
        <nav className="py-4 border-black border-5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <Link
                        to="/" className="flex items-center justify-center">
                    <img src={logo} alt="Logo" className="h-8 sm:h-10 mr-2" /> {/* Adjust the height for small and medium devices */}
                    <h1 className="text-blue-500 text-lg sm:text-xl ml-2 sm:ml-5 font-bold">Swami Dyananda Saraswati Shakha</h1> {/* Adjust the font size and margin for small and medium devices */}
                </Link>
                <div className="mt-4 sm:mt-0"> 
                    <Link
                        to="/analysis"
                        className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-lg border border-blue-500 hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out inline-block"
                    >
                        Analysis
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
