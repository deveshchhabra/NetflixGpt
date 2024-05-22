import { useDispatch, useSelector } from "react-redux";
import {  addTopRatedMovies } from "../utils/movieSlice";
import { API_OPTION } from "../utils/constant";
import { useEffect } from "react";

const useTopPlayingMovies=()=>{
  const Top =useSelector((store)=>store.movies.TopRatedMovies)

    const dispatch=useDispatch();
  const getTopPlayingMovies=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTION)
    
    const json=await data.json();
    // console.log(json.results);
    dispatch(addTopRatedMovies(json.results))
  }
  useEffect(()=>{
    // eslint-disable-next-line react-hooks/exhaustive-deps
    !Top&&getTopPlayingMovies();
     // eslint-disable-next-line
  },[])
}
export default useTopPlayingMovies;