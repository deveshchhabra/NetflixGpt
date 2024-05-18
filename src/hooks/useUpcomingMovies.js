import { useDispatch, useSelector } from "react-redux";
import {   addUpcomingMovies } from "../utils/movieSlice";
import { API_OPTION } from "../utils/constant";
import { useEffect } from "react";

const useUpcomingMovies=()=>{
  const trailer =useSelector((store)=>store.movies.trailerViedo)

    const dispatch=useDispatch();
  const getUpcomingMovies=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTION)
    
    
    const json=await data.json();
    // console.log(json.results);
    dispatch(addUpcomingMovies(json.results))
  }
  useEffect(()=>{
    !trailer &&getUpcomingMovies();
  },[])
}
export default useUpcomingMovies;