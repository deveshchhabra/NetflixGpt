import React from 'react'
import MoveList from './MoveList'
import { useSelector } from 'react-redux'
const SecondaryContainer = () => {
  const movies=useSelector(store =>store.movies);
  return (
    movies &&(
      <div className='bg-black'>
        <div className='mt-0 md:-mt-56 pl-4 md:pl-12 relative z-20'>
      <MoveList title={'Now Playing'} movies={movies.nowPlayingMovies}  />
      </div>
      <MoveList title={'Popular'} movies={movies.PopularMovies}  />
      <MoveList title={'Upcoming Movies'} movies={movies.UpcomingMovies}  />
      <MoveList title={'Top Rated'} movies={movies.TopRatedMovies}  />

    </div>   
     ))}

    // {/*  
    // MovieList -Popular
    //  MovieCard *n
    // MovieList - NowPlaying
    // MovieList - Trending
    // MovieList - Horror Movie List
    //  */}
    
    
export default SecondaryContainer
