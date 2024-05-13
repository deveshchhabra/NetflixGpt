import React,{useRef, useState} from 'react'
import { checkValidData } from '../utils/validate';
import { auth } from '../utils/firebase';
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import {  updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Form = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);
  const navigate=useNavigate()
  const dispatch=useDispatch();
  const toggleSignInForm=()=>{
    setisSignInForm(!isSignInForm)
  }
  const firstname=useRef(null);

  const email=useRef(null);
  const password=useRef(null);
  
    
  
    const handleButtonClick = () => {
      // console.log(firstname.current.value)
      console.log(email.current.value)

      console.log(password.current.value)

      const message = checkValidData(email.current.value, password.current.value);
      seterrorMessage(message);
      if (message) return;
      if (!isSignInForm) {
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: firstname.current.value, photoURL: "https://tse1.mm.bing.net/th?id=OIP.4cmK9d36bF0F7-V-SaVPnAHaG_&pid=Api&P=0&h=180"
    }).then(() => {
      const {uid,email,displayName,photoURL} = auth.currentUser; //auth because user is not updated
      dispatch(addUser  ({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
navigate("/browse")

    }).catch((error) => {
      // An error occurred
      seterrorMessage(error.message)
      // ...
    });
console.log(user)

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    seterrorMessage(errorCode+''+errorMessage);
    
  });

      }
      else{
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate("/browse")

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode+''+errorMessage);
  });

      }
    }
  return (
    <div>
      <form onClick={(e)=>e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white opacity-80'> 
      <h1 className='font-bold text-3xl py-2 m-2'>{isSignInForm?"Sign In":"Sign Up"}</h1>
      {!isSignInForm &&<input  ref={firstname} type='text' placeholder='firstname' className='p-2 m-2 w-full bg-gray-700'></input>}
      <input  ref={email}type='text' placeholder='email' className='p-2 m-2 w-full bg-gray-700'></input>
      <input ref={password} type='password' placeholder='password' className='p-2 m-2 w-full bg-gray-700'></input>
     <p className='text-red-500'>{errorMessage}</p>
      <button className='p-2 m-2 bg-red-500 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm?"Sign In":"Sign Up"}</button>
      <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm?"New Netflix ? Sign Up":"Already registered ?Sign Now"}</p>


      </form>
    </div>
  )
}

export default Form
