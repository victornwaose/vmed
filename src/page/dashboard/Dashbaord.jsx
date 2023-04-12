import React,{useState} from 'react';
import { MdOutlineArrowDropDown,MdOutlineQueryStats  } from "react-icons/md";
import { GoSignOut } from "react-icons/go";
import { BiMessageRoundedEdit } from "react-icons/bi";
import { FaCalendarAlt,FaBriefcaseMedical,FaUserLock,FaChevronDown,FaChevronUp } from "react-icons/fa";
import {  useNavigate } from 'react-router-dom';


import Avatar from "../../assets/doctor1.png";
import { AuthState } from '../../context/AuthContext';

const Dashbaord = () => {

  const[isOpen, setIsOpen] =useState(false);
  const {user, logOut} =AuthState();
  const navigate= useNavigate();

  const  handleLogOut = async ()=>{
    try{
      await logOut();
      navigate("/")
      console.log("u been logged out")
    }catch(e){
        console.log(e.message)
    }
  }

  return (
    <div className="w-[90%] ml-auto mr-auto">
        <div className='flex justify-between w-full h-12 pt-2'>
                <h1 className="text-3xl font-bold text-blue-700 mt-1">Vmed</h1> 
                <div className='flex relative'>
                  <div>
                      <img src={Avatar} className="w-[86%]  h-12 rounded-full"  /> 
                  </div>
                  <div className='relative' onClick={()=>setIsOpen((prev) => !prev)}>
                      {
                          !isOpen ?(
                            <FaChevronDown className='mt-3  w-[70%] h-6  cursor-pointer '/>
                          ):
                          (
                            <FaChevronUp className='mt-3  w-[70%] h-6  cursor-pointer '/>
                          )
                      }
                  </div>
                  {
                    isOpen && (
                          <div className='absolute  top-12 right-0 w-32 bg-gray-100 rounded shadow-md py-6 px-3'>
                            <div className='flex cursor-pointer'>
                            <GoSignOut className="h-8 w-6 mr-2" />
                            <h1 className="text-base text-gray-600" onClick={handleLogOut}>SignOut </h1>
                            </div>
                          </div>
                    )
                  }
                </div>               
        </div>
        {/*  */}
        <div className='text-left mt-4'>
          { user &&
          <h1 className='text-xl font-semibold text-gray-600'>Welcome back {user?.email}</h1>
          }
          
        </div>
        {/*  */}
        <div className="grid grid-cols-1 justify-items-center md:grid-cols-3 gap-3 mt-6 mb-6 ">
            <div className="w-[80%] rounded-md shadow-lg z-10  py-10 px-4 h-52 text-gray-700 cursor-pointer hover:text-blue-700" >
                <FaCalendarAlt className='w-[60%]  ml-auto mr-auto  h-14' />
                <h1 className='text-lg text-center mt-4 cursor-pointer'>Shedule a Meeting</h1>
            </div>
            {/* card2  */}
            <div className="w-[80%] rounded-md shadow-lg z-10  py-10 px-4 h-52 text-gray-700 cursor-pointer hover:text-blue-700">
              <FaBriefcaseMedical className='w-[60%]   ml-auto mr-auto  h-14 ' />
              <h1 className='text-lg text-center mt-4 cursor-pointer'>Meet Our Doctor</h1>
            </div>
            {/* card3 */}
            <div className="w-[80%] rounded-md shadow-lg z-10  py-10 px-4  h-52 text-gray-700 cursor-pointer hover:text-blue-700">
                <MdOutlineQueryStats className='w-[60%]  ml-auto mr-auto  h-14 '/>
                <h1 className='text-lg text-center mt-4 cursor-pointer'>Veiw History</h1>
            </div>
            {/* card4 */}
            <div  className="w-[80%] rounded-md shadow-lg z-10  py-10 px-4 h-52 cursor-pointer text-gray-700 hover:text-blue-700">
              <FaUserLock className='w-[60%]   ml-auto mr-auto  h-14' />
              <h1 className='text-lg text-center mt-4 cursor-pointer '>Edit Profile</h1>
            </div>
        </div> 
        <div className="relative flex">
            <BiMessageRoundedEdit  className="fixed bottom-0 right-1 w-[20%]  md:w0[10%] z-20 text-blue-700 h-16 cursor-pointer md:right-0 animate-bounce"/>       
        </div>
    </div>
  )
}

export default Dashbaord
