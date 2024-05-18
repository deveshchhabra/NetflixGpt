import React, { useRef } from 'react'
import lang from '../utils/languageConstant'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTION } from '../utils/constant'
import { addMovieGptResult } from '../utils/gptSlice'
// import openai from '../utils/openai.js'
const GPTSearchBar = () => {
  const langKey=useSelector((store)=>store.config.lang)
  const searchText=useRef(null);
    const dispatch=useDispatch()
    const searchMovieTMDB=async(movie)=>{
      const data=await fetch('https://api.themoviedb.org/3/search/movie?query='
    +movie+'&include_adult=false&language=en-US&page=1', API_OPTION)
    const json=await data?.json()
    console.log(json)
    return json;  
  }
    const handleGptSearchClick=async ()=>{
      console.log(searchText.current.value);
   

    
    // const gptResults=await openai.chat.completions.create({
    //   messages: [{ role: 'user', content: 'Say this is a test' }],
    //   model: 'gpt-3.5-turbo',
    // })
    // console.log(gptResults.choices)
   const data=await searchMovieTMDB(searchText?.current?.value);
   dispatch(addMovieGptResult({movieResults:data}))
  };
      return (
    <div className='pt-[30%] m-0 p-0 md:pt-[10%] flex justify-center'>
        
       <form className='w-full  md:w-1/2 p-2 bg-black grid grid-cols-12' 
       onSubmit={(e)=>e.preventDefault()}>
        <input type='text' ref={searchText} className='p-4 m-4 col-span-9' placeholder={lang[langKey].gptSearchPlaceholder}></input>
        <button className='col-span-3 m-4 py-2 px-2 bg-red-700 text-white rounded-lg' onClick={handleGptSearchClick}>{lang[langKey].gptSearchPlaceholder}</button>
       </form>
       
    </div>
  )
}

export default GPTSearchBar
