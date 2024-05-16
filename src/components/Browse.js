import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlaying'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopPlayingMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopPlayingMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
     {/* Plaining
     MainContainer
       - ViedoBackground
       - ViedoTitle
       
       SecondaryContainer
       - MovieList *n
       - Cards *n       
       */}
    </div>
  )
}

export default Browse