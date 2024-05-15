import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constant';
const Header = () => {
  const dispatch=useDispatch();
  // const user=useSelector(store=>store.user);
  const navigate=useNavigate()
  const user=useSelector(store=>store.user)
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      // navigate('/')
    }).catch((error) => {
      // An error happened.
      navigate('/error')

    });
  }
  useEffect(() => {
    const unsubscibe=onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const {uid,email,displayName,photoURL} = user;
      dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
      navigate("/browse");
    } else {
      // User is signed out
      // ...
      dispatch(removeUser());
      navigate("/");
    }
  });
  return ()=> unsubscibe();
  }, 
  []);
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
    <img className="w-44 mx-auto md:mx-0" src={LOGO}alt="logo" />
        {user&&<div className='flex'>
        <img  className='w-12 h-12'
        alt="usericon"
        src={user?.photoURL}/>
        <button onClick={handleSignOut}className='font-bold text-white'>Sign Out</button>
      </div>}
    </div>
   
  )
}

export default Header
