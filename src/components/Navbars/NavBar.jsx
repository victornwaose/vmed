import React, { useState } from 'react'
import { FaStream } from "react-icons/fa";
import { BsXLg } from "react-icons/bs"
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [active, setActive] = useState(false);

    const MobileVeiw = () => {
        setActive(!active)
    }


    return (
        <div className="w-[90%] ml-auto mr-auto py-2">
            <div className="flex justify-between">
                <h1 className="text-3xl font-bold text-blue-700 mt-1">Vmed</h1>
                {/* mobile controlleer */}
                <div className="h-4 w-4 md:hidden lg:hidden"
                    onClick={() => MobileVeiw()}>
                    {active ? (<BsXLg className="cursor-pointer h-6 w-6" />) : (<FaStream className="h-6 w-6 cursor-pointer" />)}
                </div>

                <div className={`${!active && "hidden"}  
                absolute  items-center top-11 left-42 h-full w-full z-20 bg-blue-600 text-white  md:static md:w-[80%] lg:w-[85%] md:flex md:justify-between md:bg-white md:text-gray-900 `}>
                    <ul className="flex items-center  flex-col md:justify-between md:flex-row">
                        <Link to="" className="md:ml-2 font-semibold cursor-pointer mt-8 md:mt-0 text-base md:text-base hover:text-blue-600 ">Home</Link>
                        <Link to="" className="md:ml-2 font-semibold cursor-pointer text-base md:text-base hover:text-blue-600">Services</Link>
                        <Link to="" className="md:ml-2  font-semibold cursor-pointer text-base md:text-base hover:text-blue-600">Doctors</Link>
                        <Link to="" className="md:ml-2 font-semibold cursor-pointer text-base md:text-base hover:text-blue-600">Specialist</Link>
                        <Link to="" className="md:ml-2  font-semibold cursor-pointer text-base md:text-base hover:text-blue-600">About Us </Link>
                        <Link to="" className="md:ml-2 font-semibold cursor-pointer text-base md:text-base hover:text-blue-600 mr-4 ">Contact Us</Link>
                    </ul>
                    <div className="flex mt-1 justify-center items-center flex-col md:justify-between md:flex-row">
                        <button className=" bg-white  mb-4 text-blue-600 px-8 py-2 rounded- md:text-gray-800 md:shadow-lg md:mb-0 rounded-md md:ml-3 md:bg-none md:text-base ">
                            <Link to="/login">Sign In</Link>
                        </button>
                        <button className="bg-white mx-4 text-blue-600 px-8 py-2 rounded- md:text-gray-800 md:shadow-lg md:bg-none rounded-md md:bg-blue-600 md:text-base  ">
                            <Link to="/signup">Sign Up</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;

