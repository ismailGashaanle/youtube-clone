import React, { useRef, useState } from 'react'
import { checkValidate } from '../utils/Validate';
 import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
 import { auth } from './../utils/firebase';
import { useDispatch } from 'react-redux';


 
const Login = () => {

  const dispatch=useDispatch();

    const [isSignForm,setisSignForm]=useState(true);
 const [errorMessage,seterrorMessage]=useState(null);
 
    const name=useRef(null);
    const email=useRef(null);
    const password=useRef(null);
    const confrimpassword=useRef(null);


    const handleSignForm=()=>{
        setisSignForm(!isSignForm)
    }


    const handleLoggin=()=>{
       const message=checkValidate(email.current.value,password.current.value);
  
       seterrorMessage(message)
       if(message) return;


       if(!isSignForm){


 
createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;

   return updateProfile(user, {
  displayName:name.current.value
 
}).then(() => {
  // Profile updated!
   dispatch(AddUser({
    id:user.uid,
    displayName:name.current.value,
    email:user.email
   }))
  // ...
}).catch((error) => {
  // An error occurred
  // ...
});
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    seterrorMessage(errorCode + "-" + errorMessage)
    // ..
  });
  
 



       } 
       
       else{

       
signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
     seterrorMessage(errorCode + " - " + errorMessage)
  });

       }


    }

//   return (
//     <div className='flex justify-center w-screen h-screen py-3 bg-black'>
  
//      <form onSubmit={(e)=>e.preventDefault()} className='bg-white mb-12 px-2 rounded-3xl shadow-2xl flex flex-col gap-2 sm:w-full h-[590px] md:w-6/12 lg:w-4/12'>
//            <h1 className='my-2 text-center text-3xl font-bold'> {isSignForm?"Sign In":"Sign Up"}</h1>
        
//         {!isSignForm && <>  <label className=''>Name</label>
//         <input ref={name} className='w-full shadow-sm border border-gray-300 p-3 rounded-lg  
//         focus:outline-none focus:ring-2 focus:ring-red-500
//         ' placeholder='Enter your name' type="text" /></>}
      


//  <label className=''>Email</label>
//         <input ref={email} className='w-full shadow-sm border border-gray-300 p-3 rounded-lg  
//         focus:outline-none focus:ring-2 focus:ring-red-500
//         ' placeholder='Enter your Email' type="email" />



//          <label className=''>password</label>
//         <input ref={password} className='w-full shadow-sm border border-gray-300 p-3 rounded-lg  
//         focus:outline-none focus:ring-2 focus:ring-red-500
//         ' placeholder='*******' type="password" />



//       {!isSignForm && <>   <label className=''>confrim password</label>
//         <input ref={confrimpassword} className='w-full shadow-sm border border-gray-300 p-3 rounded-lg  
//         focus:outline-none focus:ring-2 focus:ring-red-500
//         ' placeholder='*******' type="password" />
//  </>}
//      <button onClick={handleLoggin} className='p-3 rounded-2xl bg-red-500 text-white w-full text-lg cursor-pointer'>{isSignForm?"Sign In":"Sign Up"}</button>
// <p className='py-2 text-red-600 font-bold text-lg'>{errorMessage}</p>
//      <p className='py-1'>
//         <span className='px-2'>{isSignForm?"Registerd now....":"Al ready user?"}</span> <span onClick={handleSignForm} className='text-red-500 text-lg cursor-pointer font-bold'>{isSignForm?"Sign Up":"Sign In"}</span>
//      </p>
//      </form>
//     </div>
//   )


return (
  <div className="min-h-screen flex items-center justify-center bg-black px-4 py-6">
    <form
      onSubmit={(e) => e.preventDefault()}
      className="
        w-full 
        max-w-sm 
        sm:max-w-md 
        md:max-w-lg 
        bg-white 
        p-6 sm:p-8 
        rounded-2xl 
        shadow-2xl 
        flex 
        flex-col 
        gap-4
      "
    >
      <h1 className="text-center text-2xl sm:text-3xl font-bold">
        {isSignForm ? "Sign In" : "Sign Up"}
      </h1>

      {/* Name */}
      {!isSignForm && (
        <div className="flex flex-col gap-1">
          <label className="text-sm sm:text-base font-medium">Name</label>
          <input
            ref={name}
            className="w-full border border-gray-300 p-3 rounded-lg
            focus:outline-none focus:ring-2 focus:ring-red-500
            text-sm sm:text-base"
            placeholder="Enter your name"
            type="text"
          />
        </div>
      )}

      {/* Email */}
      <div className="flex flex-col gap-1">
        <label className="text-sm sm:text-base font-medium">Email</label>
        <input
          ref={email}
          className="w-full border border-gray-300 p-3 rounded-lg
          focus:outline-none focus:ring-2 focus:ring-red-500
          text-sm sm:text-base"
          placeholder="Enter your Email"
          type="email"
        />
      </div>

      {/* Password */}
      <div className="flex flex-col gap-1">
        <label className="text-sm sm:text-base font-medium">Password</label>
        <input
          ref={password}
          className="w-full border border-gray-300 p-3 rounded-lg
          focus:outline-none focus:ring-2 focus:ring-red-500
          text-sm sm:text-base"
          placeholder="*******"
          type="password"
        />
      </div>

      {/* Confirm Password */}
      {!isSignForm && (
        <div className="flex flex-col gap-1">
          <label className="text-sm sm:text-base font-medium">
            Confirm Password
          </label>
          <input
            ref={confrimpassword}
            className="w-full border border-gray-300 p-3 rounded-lg
            focus:outline-none focus:ring-2 focus:ring-red-500
            text-sm sm:text-base"
            placeholder="*******"
            type="password"
          />
        </div>
      )}

      {/* Button */}
      <button
        onClick={handleLoggin}
        className="w-full p-3 rounded-xl bg-red-500 text-white
        text-sm sm:text-base md:text-lg
        hover:bg-red-600 transition duration-200"
      >
        {isSignForm ? "Sign In" : "Sign Up"}
      </button>

      {/* Error */}
      {errorMessage && (
        <p className="text-red-600 text-center text-sm sm:text-base font-semibold">
          {errorMessage}
        </p>
      )}

      {/* Toggle */}
      <p className="text-center text-sm sm:text-base">
        {isSignForm ? "Registered now?" : "Already a user?"}
        <span
          onClick={handleSignForm}
          className="ml-2 text-red-500 font-bold cursor-pointer hover:underline"
        >
          {isSignForm ? "Sign Up" : "Sign In"}
        </span>
      </p>
    </form>
  </div>
);




}

export default Login
