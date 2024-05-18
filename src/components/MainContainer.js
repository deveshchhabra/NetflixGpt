// import React from 'react'
import { useSelector } from 'react-redux';
import ViedoTitle from './ViedoTitle';
import ViedoBackground from './ViedoBackground';
import { useState } from 'react';

const MainContainer = () => {

  const [Ham, setHam] = useState(true);

    const movies=useSelector((store)=>store.movies?.nowPlayingMovies);
    if(!movies)return 
    const mainMovie=movies[0];
    // console.log(mainMovie);
    const {original_title,overview,id}=mainMovie;
    
    return (
      <div className='pt-[30%] bg-black md:pt-0'>
      
      <ViedoTitle title={original_title} overview={overview}/>
      <ViedoBackground movieId={id} mute={Ham}/>
    </div>
  )
}
export default MainContainer;



