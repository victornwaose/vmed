import React,{useState} from "react";
import GoogleButton from "react-google-button";
import {  useNavigate } from 'react-router-dom';

import { AuthState } from "../../context/AuthContext";


const Login = () => {

    const [email, setEmail] = useState("");
    const[password, setPassword]= useState("");
    const [error, setError]= useState("");

    const navigate = useNavigate();

    const{signIn, googleSignIn}= AuthState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("")
        try{
            await signIn(email,password)
            navigate("/dashbaord");  
        }catch(e){
            setError(e.message);
            console.log(e.message);
        }
    }

    const handleGoogleSignIn =async (e)=>{
        try{
            await googleSignIn()
            navigate("/dashbaord")
        }catch(e){
            setError(e.message)
            console.log(e.message)
        }
  }

    return (
        <div>
            <section className="h-screen">
                <div className="px-6 h-full text-gray-800">
                    <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
                        <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="w-full"
                                alt="Sample image"
                            />
                        </div>
                        <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                            <form onSubmit={handleSubmit}>
                                <div className="flex flex-row items-center justify-center lg:justify-start">
                                    <p className="flex justify-center text-3xl font-bold items-center mr-4  mb-6 text-blue-600">
                                        Vmed
                                    </p>
                                </div>

                                {/* <!-- Email input --> */}
                                <div className="mb-6">
                                    <input
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Email/Username"
                                        onChange={(e)=>setEmail(e.target.value)}
                                    />
                                </div>
                                {/*   
            <!-- Password input --> */}
                                <div className="mb-6">
                                    <input
                                        onChange={(e)=>setPassword(e.target.value)}
                                        type="password"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Password"
                                    />
                                </div>

                                <div className="flex justify-between items-center mb-6">
                                    <div className="form-group form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        />
                                        <label
                                            className="form-check-label inline-block text-gray-800"
                                        >
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="#!" className="text-gray-800">
                                        Forgot password?
                                    </a>
                                </div>

                                <div className="text-center">
                                    <button
                                    onClick={handleSubmit}
                                        type="submit"
                                        className="inline-block px-7 py-3 w-[70%] ml-auto mr-auto bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                    >
                                        Login
                                    </button>
                                    <h1 className="text-xl mt-2"> Or </h1>
                                    <GoogleButton onClick={handleGoogleSignIn} className="mt-3 !w-[70%] ml-auto mr-auto"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;