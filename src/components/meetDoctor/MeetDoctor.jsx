import React from 'react';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";


import Doctor1 from "../../assets/doctor1.png";
import Doctor2 from "../../assets/doctor2.png";
import Doctor3 from "../../assets/doctor3.png";

const MeetDoctor = () => {
    return (
        <div className="w-[90%] ml-auto mr-auto mt-11">
            <div className=" text-center">
                <h1 className="text-lg md:text-2xl font-semibold text-gray-800">Meet Our Doctors</h1>
                <p className=" md:text-lg text-gray-500">Well  qualified doctors are ready to serve you</p>
            </div>
            <div className="grid grid-cols-1 justify-items-center md:grid-cols-3 gap-3 mt-6 mb-6">
                <div className="w-[90%] shadow-lg z-10 h-auto rounded-md py-4 px-3">
                    <img src={Doctor1} alt="doctor-img" className="w-[80%] h-48 ml-auto mr-auto object-fit" />
                    <h1 className="text-base md:text-xl text-center mt-3 leading-6">Dr. Lawan Henry</h1>
                    <p className="text-sm text-center text-gray-500 leading-6">Cardiologist</p>
                    <div className="flex w-[50%] ml-auto mr-auto">
                        <FaStar className="mr-1" />
                        <FaStar className="mr-1" />
                        <FaStar className="mr-1" />
                        <FaStar className="mr-1" />
                        <FaStar className="mr-1" />
                        <FaStarHalfAlt className="mr-5" />
                        <p className="text-sm">(120)</p>
                    </div>
                    <button className=" text-base mt-2 mb-6 flex px-4 py-2 text-white rounded-md bg-blue-500 md:text-lg text-center w-[75%] ml-auto mr-auto  ">Book an appointment </button>
                </div>
                <div className=" w-[90%] shadow-lg z-10 h-auto rounded-md py-4 px-3">
                    <img src={Doctor2} alt="doctor-img" className="w-[80%] h-48 ml-auto mr-auto object-fit" />
                    <h1 className="text-base md:text-xl text-center mt-3 leading-6">Dr. Lawan Henry</h1>
                    <p className="text-sm text-center text-gray-500 leading-6">Neurologist</p>
                    <div className="flex w-[50%] ml-auto mr-auto">
                        <FaStar className="mr-1" />
                        <FaStar className="mr-1" />
                        <FaStar className="mr-1" />
                        <FaStar className="mr-1" />
                        <FaStar className="mr-1" />
                        <FaStarHalfAlt className="mr-5" />
                        <p className="text-sm">(97)</p>
                    </div>
                    <button className=" text-base mt-2 mb-6 flex px-4 py-2 text-white rounded-md bg-blue-500 md:text-lg text-center w-[75%] ml-auto mr-auto ">Book an appointment </button>
                </div>
                <div className="w-[90%] shadow-lg h-auto rounded-md py-4 px-3">
                    <img src={Doctor3} alt="doctor-img" className="w-[80%] h-48 mr-auto ml-auto object-fit" />
                    <h1 className=" text-base md:text-xl text-center mt-3 leading-6">Dr. Lawan Henry</h1>
                    <p className="text-sm text-center text-gray-500 leading-6">Neurologist</p>
                    <div className="flex w-[50%] ml-auto mr-auto">
                        <FaStar className="mr-1" />
                        <FaStar className="mr-1" />
                        <FaStar className="mr-1" />
                        <FaStar className="mr-1" />
                        <FaStar className="mr-1" />
                        <FaStarHalfAlt className="mr-5" />
                        <p className="text-sm">(97)</p>
                    </div>
                    <button className=" text-base mt-2 mb-6 flex px-4 py-2 text-white rounded-md bg-blue-500 md:text-lg text-center w-[75%] ml-auto mr-auto ">Book an appointment </button>
                </div>
            </div>
        </div>
    )
}

export default MeetDoctor