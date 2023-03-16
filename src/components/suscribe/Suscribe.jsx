import React from 'react'

const Suscribe = () => {
    return (
        <div className="w-[90%] ml-auto mr-auto mt-11 mb-3">
            <div className="text-center">
                <h1 className=" text-lg md:text-xl font-semibold text-center mt-3 leading-6">Subscribe To Our Newsletter</h1>
                <p className="text-sm text-center text-gray-500 leading-6">Get latest news of our hospital</p>
            </div>
            <div className="w-[95%] md:w-[60%] ml-auto mr-auto py-3 bg-gray-900 rounded-md ">
                <div className="w-[80%] ml-auto mr-auto items-center">
                    <h1 className="text-white font-semibold mb-2">For Newsletter</h1>
                    <div className="relative items-center">
                        <input className="w-[90%] text-base font-medium rounded-md  mb-3 ml-auto mr-auto bg-white px-3 py-3" placeholder="Enter your email here" />
                        <button className="bg-blue-500 right-7 py-2 px-4 text-white rounded-md absolute top-1 md:right-20">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Suscribe
