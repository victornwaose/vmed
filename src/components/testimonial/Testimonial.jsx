import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

import { TestData } from "../../assets/data/TestimonialData"


const Testimonial = () => {

    const [carousels, setCarousels] = useState(TestData)

    console.log(carousels)
    const handleDragStart = (e) => e.preventDefault();

    const items = carousels.map((carousel) => {
        return (
            <div className="flex bg-none md:bg-gray-100 mt-4">
                <div className="w-[90%]  h-48 flex  flex-col shadow-white shadow-xl rounded-md py-3 px-2 bg-white my-2">
                    <div className="flex  justify-start">
                        <img src={carousel?.images} alt="img" className="w-[20%] " />
                        <div className="mr-2 ">
                            <h1 className="fomt-semibold leading-6 text-lg">{carousel?.patientName}</h1>
                            <p className="text-sm text-gray-500" >{carousel?.patientClinic}</p>

                        </div>
                    </div>
                    <div className="flex w-[32%] ml-14 -mt-2 md:w-[50%] md:ml-auto md:mr-auto md:-mt-4">
                        <FaStar className="mr-1" />
                        <FaStar className="mr-1" />
                        <FaStar className="mr-1" />
                        <FaStar className="mr-1" />
                        <FaStar className="mr-1" />
                        <FaStarHalfAlt />
                    </div>
                    <div className="w-[90%] mt-2 text-sm md:mt-4 text-gray-500 mr-auto ml-auto"><p>{carousel?.testimonial}</p></div>
                </div>
            </div>
        );
    });


    const responsive =
    {
        0: {
            items: 1,
        },
        790: {
            items: 3,
        }
    }
    return (
        <div className="mt-11 w-[90%] ml-auto mr-auto">
            <div className=" text-center">
                <h1 className="text-lg md:text-2xl font-semibold text-gray-800">Patients Testimonial</h1>
                <p className="text-lg text-gray-500">Let’s see what our happy patients says</p>
            </div>
            <AliceCarousel
                mouseTracking
                responsive={responsive}
                autoPlayInterval={1000}
                animationDuration={1500}
                disableButtonsControls
                items={items}
                infinite
            />
        </div>
    )
}

export default Testimonial
