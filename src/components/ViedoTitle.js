import { useState } from "react"
import ViedoBackground from "./ViedoBackground";
import MainContainer from "./MainContainer";
import { useDispatch, useSelector } from "react-redux";
import { toggleMuteGpt } from "../utils/gptSlice";
import lang from '../utils/languageConstant'

const ViedoTitle = ({title,overview}) => {
  const langKey=useSelector((store)=>store.config.lang)

  const dispatch=useDispatch();
  // const setTR=()=>{
  //   setTrue('false');
  // }
  const handleGptSearchClick =()=>{dispatch(toggleMuteGpt())}
  return (
    <div className='flex flex-wrap '>
    <div className='w-screen aspect-video pt-[25%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-xl md:text-6xl font-bold'>{lang[langKey].name}</h1>
      <p className='hidden md:inline-block py-6 text-lg w-1/4'>{lang[langKey].know}</p>
      <div className='p-2 my-2'>

        <button className='cursor-pointer text-black bg-white  md:py-4 py-1 mx-2 px-3 md:px-12  rounded-lg hover:bg-opacity-80 '>▶play</button>
        <button className='hidden md:inline-block bg-gray-500 text-white p-4 mx-2 px-12 bg-opacity-50 rounded-lg'>More Info</button>

    </div> 
    <button className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg

        'onClick={handleGptSearchClick}> 🔇</button> 
     
        </div>
    </div>

  )
}

export default ViedoTitle
