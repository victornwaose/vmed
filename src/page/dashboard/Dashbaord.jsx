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
                <div className='flex relative'>
                  <div>
                      <img src={Avatar} className="w-[86%]  h-12 rounded-full"  /> 
                  </div>
                  <div className='relative'>
                      <MdOutlineArrowDropDown className='mt-3  w-[70%] h-9  cursor-pointer 'id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover"/>
                      <ul id="dropdownHover" className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block">
    <li>
      <a
        className=" block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
        >SignOut</a>
    </li>
  </ul>
    
                  </div> 
                </div>               
        </div>
        {/*  */}
        <div className='text-left'>
          <h1 className='text-xl font-semibold text-gray-600'>Welcome back Victor</h1>
        </div>
        {/*  */}
        <div className="grid grid-cols-1 justify-items-center md:grid-cols-3 gap-3 mt-6 mb-6 ">
            <div className="w-[80%] rounded-md shadow-lg z-10  py-10 px-4 h-52 text-gray-700 hover:text-blue-700" >
                <FaCalendarAlt className='w-[60%]  ml-auto mr-auto  h-14' />
                <h1 className='text-lg text-center mt-4 cursor-pointer'>Shedule a Meeting</h1>
            </div>
            {/* card2  */}
            <div className="w-[80%] rounded-md shadow-lg z-10  py-10 px-4 h-52 text-gray-700 hover:text-blue-700">
              <FaBriefcaseMedical className='w-[60%]   ml-auto mr-auto  h-14 ' />
              <h1 className='text-lg text-center mt-4 cursor-pointer'>Meet Our Doctor</h1>
            </div>
            {/* card3 */}
            <div className="w-[80%] rounded-md shadow-lg z-10  py-10 px-4  h-52 text-gray-700 hover:text-blue-700">
                <MdOutlineQueryStats className='w-[60%]  ml-auto mr-auto  h-14 '/>
                <h1 className='text-lg text-center mt-4 cursor-pointer'>Veiw History</h1>
            </div>
            {/* card4 */}
            <div  className="w-[80%] rounded-md shadow-lg z-10  py-10 px-4 h-52 text-gray-700 hover:text-blue-700">
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
