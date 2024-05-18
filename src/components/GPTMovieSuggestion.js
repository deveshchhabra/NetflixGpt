import React from 'react'
import { useSelector } from 'react-redux'
import MovieCardGpt from './MovieCard.js';
const GPTMovieSuggestion = () => {
  const {movieResults}=useSelector((store)=>store.gpt);
  
  if(!movieResults)return null ;

  return (
    <div className='flex flex-wrap p-2 m-2 bg-black opacity-85' >
      
      
      {movieResults?.results?.map((movie)=>(
             <MovieCardGpt key={movieResults.id }poster_path={movie.poster_path} /> ))}
    </div>
  )
}

export default GPTMovieSuggestion
