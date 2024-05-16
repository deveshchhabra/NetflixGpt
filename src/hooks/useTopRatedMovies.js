import { useDispatch } from "react-redux";
import {  addTopRatedMovies } from "../utils/movieSlice";
import { API_OPTION } from "../utils/constant";
import { useEffect } from "react";

const useTopPlayingMovies=()=>{
    const dispatch=useDispatch();
  const getTopPlayingMovies=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTION)
    
    const json=await data.json();
    console.log(json.results);
    dispatch(addTopRatedMovies(json.results))
  }
  useEffect(()=>{
    getTopPlayingMovies();
  },[])
}
export default useTopPlayingMovies;