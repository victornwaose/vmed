import React from 'react';

import Lab from "../../assets/Lab.svg";
import Ambulance from "../../assets/ambulance.svg";
import Call from "../../assets/call.png";
import Calender from "../../assets/calendar.svg";

const Services = () => {
    return (
        <div className="mt-11 w-[90%] ml-auto mr-auto">
            <div className=" text-center">
                <h1 className="text-lg  md:text-2xl font-semibold text-gray-800">Our Medical Services</h1>
                <p className="text-lg text-gray-500">We are dedicated to serve you best medical services</p>
            </div>
            <div className="mt-6 grid grid-cols-1  justify-items-center md:grid-cols-4 gap-2">
                <div className="w-[80%] rounded-md shadow-lg z-10  py-10">
                    <img src={Lab} className="w-[27%] ml-auto mr-auto" alt="lab" />
                    <p className="text-center mt-2 text-base">Well equipped lab</p>
                </div>
                <div className="w-[80%] rounded-md shadow-lg z-10 py-10 ">
                    <img src={Ambulance} className="w-[27%] ml-auto mr-auto" alt="lab" />
                    <p className="text-center mt-2 text-base">Emergency Ambulance</p>
                </div>
                <div className="w-[80%] rounded-md shadow-lg z-10 py-10 ">
                    <img src={Calender} className="w-[27%] ml-auto mr-auto" alt="lab" />
                    <p className="text-center mt-2 text-base">Online Appointment</p>
                </div>
                <div className="w-[80%] rounded-md shadow-lg z-10 py-10 ">
                    <img src={Call} className="w-[27%] ml-auto mr-auto" alt="lab" />
                    <p className="text-center mt-2 text-base">Call Center</p>
                </div>
            </div>
        </div>
    )
}

export default Services
