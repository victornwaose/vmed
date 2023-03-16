import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

import HeroPng from "../../assets/hero.png"

const Hero = () => {
    return (
        <div className="w-[90%] ml-auto mr-auto mt-4">
            <div className="flex flex-col-reverse md:flex-row md:jusifty-between ">
                <div className=" w-full md:w-[50%] ">
                    <h1 className="w-full text-center mt-6 text-2xl md:text-left leading-[52px] md:w-[50%] md:leading-[72px]  md:text-5xl font-semibold">We care about your health</h1>
                    <p className=" text-base text-center  md:text-left md:text-xl  font-normal leading-6 mt-3">Good health is the state of mental, physical and social well being
                    and it does not just mean absence of diseases.
                    </p>
                    <button className="mt-8 ml-auto mr-auto  text-lg flex px-11 py-3 text-white rounded-md bg-blue-500 md:text-2xl font-normal md:ml-0 md:mr-0  ">Book an appointment <FaLongArrowAltRight className="ml-5 py-auto text-center" />  </button>
                </div>
                <div className="w-full items-center  flex-wrap-reverse justify-end md:w-[50%]">
                    <img src={HeroPng} alt="hero" className="w-full md:w-[70%] ml-auto mr-auto h-auto text-right" />
                </div>
            </div>
        </div>
    )
}

export default Hero
