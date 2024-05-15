// import React from 'react'
import { useSelector } from 'react-redux';
import ViedoTitle from './ViedoTitle';
import ViedoBackground from './ViedoBackground';

const MainContainer = () => {
    const movies=useSelector((store)=>store.movies?.nowPlayingMovies);
    if(!movies)return 
    const mainMovie=movies[0];
    console.log(mainMovie);
    const {original_title,overview,id}=mainMovie;
    
  return (
    <div>
      <ViedoTitle title={original_title} overview={overview}/>
      <ViedoBackground movieId={id}/>
    </div>
  )
}
export default MainContainer;



