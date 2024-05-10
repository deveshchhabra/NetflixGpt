import React from 'react'
import Header from './Header'
import Form from './Form'

const login = () => {
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/31ef2c5c-3d08-47d5-b7a9-f29e4f4f893d/1ac1cee7-5580-4cfa-b701-99d1a8f2d148/IN-en-20240506-POP_SIGNUP_TWO_WEEKS-perspective_WEB_ebbef551-d229-4865-8cdc-fb00f8960227_small.jpg'
        alt='bg'/>
      </div>
      <Form/>
      {/* <form className='w-3/12  absolute  p-12 bg-black my-36 mx-auto right-0 left-0 text-white opacity-80'>
        <h1 className='font-bold  text-3xl py-2 m-2 '>Sign in</h1>
        <input type='text' placeholder='email' className='p-2 m-2 w-full bg-gray-700'/>
        <input type='passoword' placeholder='Password' className='p-2 m-2 w-full bg-gray-700' />
        <button className='p-2 m-2 bg-red-700 w-full rounded-lg'>Sign In</button>
        <p className='py-4'>New Netflix? Sign Up Now</p>
      </form> */}
    </div> )}
export default login
