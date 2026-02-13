import React from 'react'
  import {signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveUser } from '../utils/UserSlice';
import { Banner_Youtube } from '../utils/Constatnt';
import { BsList } from 'react-icons/bs';
import { ShowSidebar } from '../utils/SidebarSlice';
import { Link } from 'react-router-dom';
import { MdOutlineYoutubeSearchedFor } from 'react-icons/md';
import { IoSearch } from 'react-icons/io5';
 
const Header = () => {
const dispatch=useDispatch();

const user=useSelector(store=>store?.user.userData);
 

const name=user?.displayName?.slice(0,2).toUpperCase() || ""
 
 

  const HandleSignOut=()=>{

signOut(auth).then(() => {
  // Sign-out successful.
  
   dispatch(RemoveUser());
}).catch((error) => {
  // An error happened.
  
});
  }


  const ShowSiderCHange=()=>{
      dispatch(ShowSidebar());
        
  }

//   return (
//     <div className='grid grid-cols-12 sticky  py-1 z-50 top-0 px-4 justify-between items-center '>
//       <div className='col-span-2 flex gap-2 items-center '>
//       <BsList onClick={ShowSiderCHange} className='text-3xl cursor-pointer'/>
//     <Link to="/youtube">    <img   src={Banner_Youtube} className='w-[100px] cursor-pointer'/></Link>
//       </div>

  
// <div className='col-span-7'> 

// <div className=' py-0 px-2 rounded-full w-full flex text-center items-center relative'><input placeholder='Search' className=' px-3 rounded-full capitalize w-full py-2 border focus:outline-none focus:ring-1 focus:ring-blue-500 ' />
// <button className='py-[0.6rem] bg-gray-500 cursor-pointer shadow-2xl rounded-br-full rounded-tr-full absolute right-2 px-5'><IoSearch  className='text-2xl text-white' /></button>
// </div>

// </div>


      
//       <div className=' flex items-center  justify-end col-span-3  '>
//         <p className='p-4 bg-blue-200 text-black rounded-full mx-4'>{name}</p>
//        {user?<button onClick={HandleSignOut} className='bg-red-500  text-white p-2 rounded-lg cursor-pointer'>logout</button>:null}
//       </div>
//     </div>
//   )


return (
  <div className="grid grid-cols-12 sticky py-2 z-50 top-0 px-4 items-center bg-white shadow-sm">

    {/* Left Section */}
    <div className="col-span-6 md:col-span-2 flex gap-2 items-center">
      <BsList
        onClick={ShowSiderCHange}
        className="text-2xl md:text-3xl cursor-pointer"
      />
      <Link to="/youtube">
        <img
          src={Banner_Youtube}
          className="w-[80px] md:w-[100px] cursor-pointer"
          alt="logo"
        />
      </Link>
    </div>

    {/* Search Section */}
    <div className="col-span-12 md:col-span-7 mt-2 md:mt-0 order-3 md:order-none">
      <div className="px-2 rounded-full w-full flex items-center relative">
        <input
          placeholder="Search"
          className="px-3 rounded-full w-full py-2 border focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <button className="py-[0.6rem] bg-gray-500 cursor-pointer shadow-md rounded-r-full absolute right-2 px-4 md:px-5">
          <IoSearch className="text-xl md:text-2xl text-white" />
        </button>
      </div>
    </div>

    {/* Right Section */}
    <div className="col-span-6 md:col-span-3 flex items-center justify-end gap-2">
      {user && (
        <>
          <p className="px-3 py-2 bg-blue-200 text-black rounded-full text-sm md:text-base">
            {name}
          </p>
          <button
            onClick={HandleSignOut}
            className="bg-red-500 text-white px-3 py-2 rounded-lg text-sm md:text-base"
          >
            Logout
          </button>
        </>
      )}
    </div>
  </div>
);




}

export default Header
