import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'
const MovieCardGpt = ({poster_path
}) => {
  return (
    <div className='w-48 pr-4'>
    {console.log({poster_path})}
      {/* <img alt ="tkd"src={IMG_CDN_URL+poster_path}/>       */}
    </div>
  )
}

export default MovieCardGpt
