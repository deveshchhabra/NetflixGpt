import React from 'react'
import MoveList from './MoveList'
import { useSelector } from 'react-redux'
const SecondaryContainer = () => {
  const movies=useSelector(store =>store.movies);
  return (
    movies &&(
      <div className='bg-black'>
        <div className='-mt-56 relative z-20'>
      <MoveList title={'Now Playing'} movies={movies.nowPlayingMovies}  />
      </div>
      <MoveList title={'Trending'} movies={movies.nowPlayingMovies}  />
      <MoveList title={'Popular'} movies={movies.nowPlayingMovies}  />
      <MoveList title={'Upcoming Movies'} movies={movies.nowPlayingMovies}  />
      <MoveList title={'Horror'} movies={movies.nowPlayingMovies}  />
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
