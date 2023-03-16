import React from 'react'

import {
    FaFacebookF,
    FaLinkedinIn,
    FaTwitter,
    FaInstagramSquare,
} from "react-icons/fa";


const Footer = () => {
    return (
        <div className="mt-12 w-full bg-[#ADD4F8]">
            <div className="w-[90%] ml-auto mr-auto pt-11 py-5">
                <div className="grid grid-cols-1 gap-2 justify-items-start md:items-center md:grid-cols-4 md:gap-11">
                    <div className=" text-center md:text-left">
                        <h1 className="font-bold text-3xl text-gray-700 ">Vmed</h1>
                        <div className="mt-4">
                            <h1 className="text-lg font-semibold">VISION</h1>
                            <p className="text-base leading-6">To be the best app for health delivery and care maintenance ,fast and private while delivering with great efficacy</p>
                        </div>
                        <div className="mt-4">
                            <h1 className="text-lg font-semibold">MISSION</h1>
                            <p className="text-base leading-6">To be the best app for health delivery and care maintenance ,fast and private while delivering with great efficacy</p>
                        </div>
                    </div>
                    {/* say helo */}
                    <div className= "w-[70] ml-auto mr-auto md:w-[100%] text-center">
                        <div className="mt-2 md:mt-9">
                            <button className="mt-8 flex py-1 px-4 md:py-3 text-white rounded-md bg-blue-500 text-xl font-normal  ">Book an appointment  </button>
                        </div>
                        <h1 className=" mt-4 text-2xl font-bold md:text-3xl md:mt-20">Say Hello</h1>
                        <h1 className="text-base ">+234-8122 5877 23</h1>
                        <h1 className="text-base font-medum" >+234-8055 0586 37</h1>
                    </div>
                    <div className=" w-[60%] ml-auto mr-auto mt-4 text-center md:mt-9  md:text-left ">
                        <h1 className="font-bold text-2xl md:text-3xl mt-0 md:mt-32 text-center md:text-left">Quick Links</h1>
                        <h1>Consultation</h1>
                        <h1>Customer Service</h1>
                        <h1>Meet our experts</h1>
                    </div>
                    <div className="w-[70] ml-auto mr-auto md:w-[40%] text-center">
                        <h1 className="font-bold text-2xl">FOLLOW US</h1>
                        <div className='flex w-[90%] flex-row md:flex-col'> 
                            <FaFacebookF className="mt-3 w-[80%] md:w-[30%] h-auto ml-2 " />
                            <FaTwitter className="mt-3 w-[80%] md:w-[30%] h-auto ml-2 " />
                            <FaInstagramSquare className="mt-3 w-[80%] md:w-[30%] h-auto ml-2" />
                            <FaLinkedinIn className="mt-3 w-[80%] md:w-[30%] h-auto ml-2" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
