import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
    import {onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { AddUser, RemoveUser } from '../utils/UserSlice';
import Header from './Header';
import MainContent from './MainContent';

import Sidebar from './Sidebar'
import Login from './Login';

const Body = () => {
const dispatch=useDispatch();
const navigate=useNavigate();

 
  useEffect(()=>{

  const Unsubscribe =   onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
    dispatch(AddUser({
      id:user.uid,
      email:user.email,
      displayName:user.displayName
    }))

    navigate("/youtube")
    
  } else {
    // User is signed out
    // ...
    dispatch(RemoveUser());
    navigate("/")
  }
});

return ()=>Unsubscribe();


  },[dispatch,navigate])


  // if(!user) return <Login/>

  return (
    <div>
 

      <Outlet/>
    </div>
  )
}

export default Body
