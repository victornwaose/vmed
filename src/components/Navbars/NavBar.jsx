import React from 'react'

const NavBar = () => {
    return (
        <div className="w-[90%] ml-auto mr-auto py-2">
            <div className="flex justify-between mr-4">
                {/* Logo */}
                <h1 className="font-bold text-2xl text-gray-700 ">Vmed</h1>
                {/* navLink */}
                <div className=" py-1">
                    <ul className="flex space-between justify-center">
                        <li className="ml-4 font-semibold cursor-pointer ">Home</li>
                        <li className="ml-4 font-semibold cursor-pointer">Services</li>
                        <li className="ml-4  font-semibold cursor-pointer">Doctors</li>
                        <li className="ml-4 font-semibold cursor-pointer ">Specialist</li>
                        <li className="ml-4 font-semibold cursor-pointer ">About Us </li>
                        <li className="ml-4  font-semibold cursor-pointer">Contact Us</li>
                    </ul>
                </div>
                {/* signup */}
                <div className="flex jusify-between font-semibold ">
                    <button className="mx-4 text-blue-400 ml-3 font-semibold">Sign in</button>
                    <button className="bg-blue-600 py-2 px-5 rounded-md text-white mr-3">Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default NavBar
