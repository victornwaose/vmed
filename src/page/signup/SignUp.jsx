import React, {useState} from 'react';
import {  useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button'


import { AuthState,  } from '../../context/AuthContext';



const SignUp = () => {

    
    const [email, setEmail] = useState("");
    const[password, setPassword]= useState("");
    const [confirmPassword, setConfrimPassword]= useState("");
    const [error, setError]= useState();

    const navigate = useNavigate();


    const{setAlert,createUser,googleSignIn}=   AuthState();

   const handleSubmit= async(e) => {
        e.preventDefault();
        if (password !== confirmPassword){
            setAlert({
                open:  true,
                message: "password don't match",
                type: "error"
            });
            return;
        };

        setError("");
        try{
            await createUser(email,password);
            navigate("/dashbaord");
        setAlert({
            open:  true,
            message: "SIGN UP SUCCESS",
            type: "success"
        });
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
        <div className="w-[90%] md:w-[50%] ml-auto mr-auto">
            <div className="md:w-[50] mb-12 md:mb-0 ml-auto mr-auto">
                <form  className="mb-5"  onSubmit={handleSubmit} >
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
                            className=" block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white  lg:w-full md:w-full focus:border-blue-600 focus:outline-none"
                            placeholder="Enter your first name"
                            

                        />
                    </div>
                    {/* <!-- Email input --> */}
                    <div className="mb-6">
                        <label>Middle Name</label>
                        <input
                            type="text"
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Enter a Middle Name"
                        />
                    </div>
                    {/* <!-- Email input --> */}
                    <div className="mb-6">
                        <label>Last Name</label>
                        <input
                            type="text"
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Enter your Last Name"
                        />
                    </div>
                    {/* <!-- Email input --> */}
                    <div className="mb-6">
                        <label>DOB</label>
                        <input
                            type="date"
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Chose your date of birth"
                        />
                    </div>
                    {/* <!-- Email input --> */}
                    <div className="mb-6">
                        <label>Email</label>
                        <input
                            type="text"
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Email/Username"
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    {/* <!-- Email input --> */}
                    <div className="mb-6">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Enter a new password"
                            onChange={(e)=> setPassword(e.target.value)}

                        />
                    </div>
                    {/* <!-- Email input --> */}
                    <div className="mb-6">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="confirm your password"
                            onChange={(e)=>setConfrimPassword(e.target.value)}
                        />
                    </div>
                    <div className="w-[90%] ml-auto mr-auto">
                        <button className="cursor-pointer px-8 py-2 text-white rounded-md bg-blue-700  w-full  h-12" 
                        type='submit'
                        onClick={handleSubmit}
                        >Sign Up</button>  
                        <h1 className='text-center text-xl font-normal mt-3'>Or</h1>
                        <GoogleButton 
                        label="Sign up with Google"
                        className="!w-full ml-auto mr-auto mt-3 mb-5 "
                        onClick={handleGoogleSignIn}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp
