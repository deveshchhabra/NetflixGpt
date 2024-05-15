import React from 'react'
import MovieCard from './MovieCard'
const MoveList = ({title,movies}) => {
    console.log({movies}) 
     return (
    <div className='px-6 pl-20 '>
            <h1 className='text-3xl py-6 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll'>
        <div className='flex'>
            {movies?.map((movie)=>(
            <MovieCard key={movie.id }poster_path={movie.poster_path} />
        ))}
        </div>
    </div>
    </div>
  )
}
export default MoveList
