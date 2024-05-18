import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'
const MovieCard = ({poster_path
}) => {
  if(!poster_path) return null;
  return (
    <div className='w-36 md:w-48 pr-4 m-2 '>
    
      <img alt ="tkd"src={IMG_CDN_URL+poster_path}/>      
    </div>
  )
}

export default MovieCard
