import React from 'react';
import { useAuth } from '../../context/AuthContext';

const SignUp = () => {
const {emailRef,passwordRef,firstName,lastName}=useAuth();

    async function handleSubmit(e) {
        e.preventDefault()
    }
    

    return (
        <div className="w-[90%] md:w-[50%] ml-auto mr-auto">
            <div className="md:w-[50] mb-12 md:mb-0 ml-auto mr-auto">
                <form className="" onSubmit={handleSubmit}>
                    <div className="flex flex-row items-center justify-center lg:justify-start">
                        <p className="flex justify-center text-3xl font-bold items-center mr-4 mt-5 mb-6 text-blue-600">
                            Vmed
                         </p>
                    </div>

                    {/* <!-- Name input --> */}
                    <div className="mb-6">
                        <label>First Name</label>
                        <input
                            type="text"
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white  lg:w-full md:w-full focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput2"
                            placeholder="Enter your first name"
                            ref={firstName}

                        />
                    </div>
                    {/* <!-- Email input --> */}
                    <div className="mb-6">
                        <label>Middle Name</label>
                        <input
                            type="text"
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput2"
                            placeholder="Enter a Middle Name"
                        />
                    </div>
                    {/* <!-- Email input --> */}
                    <div className="mb-6">
                        <label>Last Name</label>
                        <input
                            type="text"
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput2"
                            placeholder="Enter your Last Name"
                            ref={lastName}
                        />
                    </div>
                    {/* <!-- Email input --> */}
                    <div className="mb-6">
                        <label>DOB</label>
                        <input
                            type="date"
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput2"
                            placeholder="Chose your date of birth"
                        />
                    </div>
                    {/* <!-- Email input --> */}
                    <div className="mb-6">
                        <label>Email</label>
                        <input
                            type="text"
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput2"
                            placeholder="Email/Username"
                            ref={emailRef}
                        />
                    </div>
                    {/* <!-- Email input --> */}
                    <div className="mb-6">
                        <label>Password</label>
                        <input
                            type="text"
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput2"
                            placeholder="Enter a new password"
                            ref={passwordRef}

                        />
                    </div>
                    {/* <!-- Email input --> */}
                    <div className="mb-6">
                        <label>Confirm Password</label>
                        <input
                            type="text"
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput2"
                            placeholder="confirm your password"
                        />
                    </div>
                    <div className="w-[60%] ml-auto mr-auto"><button className="px-8 py-2 text-white rounded-md bg-blue-700">Sign Up</button></div>

                </form>
            </div>
        </div>
    )
}

export default SignUp
