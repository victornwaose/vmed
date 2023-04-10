import React from 'react';
import { MdOutlineArrowDropDown,MdOutlineQueryStats  } from "react-icons/md";
import { BiMessageRoundedEdit } from "react-icons/bi";
import { FaCalendarAlt,FaBriefcaseMedical,FaUserLock } from "react-icons/fa";


import Avatar from "../../assets/doctor1.png";

const Dashbaord = () => {
  return (
    <div className="w-[90%] ml-auto mr-auto">
        <div className='flex justify-between w-full h-12'>
                <h1 className="text-3xl font-bold text-blue-700 mt-1">Vmed</h1> 
                <div className='flex'>
                    <img src={Avatar} className="w-[86%]  h-12 rounded-full"  />  
                    <MdOutlineArrowDropDown className='mt-3  w-[70%] h-9  cursor-pointer'/>
                </div>               
        </div>
        <div className="grid grid-cols-1 justify-items-center md:grid-cols-3 gap-3 mt-6 mb-6">
            <div className="w-[80%] rounded-md shadow-lg z-10  py-10 px-4 h-52" >
                <FaCalendarAlt className='w-[60%]  ml-auto mr-auto  h-14' />
                <h1 className='text-xl text-center mt-3'>Shedule a Meeting</h1>
            </div>
            {/* card2  */}
            <div className="w-[80%] rounded-md shadow-lg z-10  py-10 px-4 h-52">
              <FaBriefcaseMedical className='w-[60%]  ml-auto mr-auto  h-14' />
              <h1 className='text-xl text-center mt-3'>Meet Our Doctor</h1>
            </div>
            {/* card3 */}
            <div className="w-[80%] rounded-md shadow-lg z-10  py-10 px-4  h-52">
                <MdOutlineQueryStats className='w-[60%]  ml-auto mr-auto  h-14'/>
                <h1 className='text-xl text-center mt-3'>Veiw History</h1>
            </div>
            {/* card4 */}
            <div  className="w-[80%] rounded-md shadow-lg z-10  py-10 px-4  h-52">
              <FaUserLock className='w-[60%]  ml-auto mr-auto  h-14' />
              <h1 className='text-xl text-center mt-3'>Edit Profile</h1>
            </div>
        </div> 
        <div className="relative flex">
            <BiMessageRoundedEdit  className="fixed bottom-0 right-1 w-[20%]  md:w0[10%] z-20 text-blue-700 h-16 cursor-pointer md:right-0 animate-bounce"/>       
        </div>
    </div>
  )
}

export default Dashbaord
