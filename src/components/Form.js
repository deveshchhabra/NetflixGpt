import React, { useState } from 'react'

const Form = () => {
    const [isSignInForm, setisSignInForm] = useState(true);
    const toggleSignInform = ()=>{
        setisSignInForm(!isSignInForm);
    }
    return (
    <div className='text-white'>
       <form className='w-3/12  absolute  p-12 bg-black my-36 mx-auto right-0 left-0 text-white opacity-80'>
        <h1 className='font-bold  text-3xl py-2 m-2 '>{isSignInForm ?"Sign In":"Sign Up"}</h1>
        {!isSignInForm &&<input type='text' placeholder='First Name' className='p-2 m-2 w-full bg-gray-700'/>}
        {!isSignInForm && <input type='text' placeholder='Last Name' className='p-2 m-2 w-full bg-gray-700'/>}
        <input type='text' placeholder='email' className='p-2 m-2 w-full bg-gray-700'/>
        <input type='passoword' placeholder='Password' className='p-2 m-2 w-full bg-gray-700' />
        <button className='p-2 m-2 bg-red-700 w-full rounded-lg' onClick={toggleSignInform}>{isSignInForm ?"Sign In":"Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInform}> {isSignInForm ?"New Netflix ? Sign Up":"Already registered ? Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Form
