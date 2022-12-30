import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

import HeroPng from "../../assets/hero.png"

const Hero = () => {
    return (
        <div className="w-[90%] ml-auto mr-auto mt-4">
            <div className="flex jusifty-between ">
                <div className="w-[50%]">
                    <h1 className=" w-[50%] leading-[72px] text-5xl font-normal">We care about your health</h1>
                    <p className="text-xl font-normal leading-6 mt-3">Good health is the state of mental, physical and social well being
                    and it does not just mean absence of diseases.
                    </p>
                    <button className="mt-8 flex px-11 py-3 text-white rounded-md bg-blue-500 text-2xl font-normal  ">Book an appointment <FaLongArrowAltRight className="ml-5 py-auto text-center" />  </button>
                </div>
                <div className="w-[50%] flex justify-end ">
                    <img src={HeroPng} alt="hero" className="w-[70%] h-auto text-right" />
                </div>
            </div>
        </div>
    )
}

export default Hero
