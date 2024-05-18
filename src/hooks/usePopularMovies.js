import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { API_OPTION } from "../utils/constant";
import { useEffect } from "react";

const usePopularMovies=()=>{
  const PopularMovies =useSelector((store)=>store.movies.PopularMovies)

    const dispatch=useDispatch();
  const getPlayingMovies=async()=>{
    const data=await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", API_OPTION)
    const json=await data.json();
    // console.log(json.results);
    dispatch(addPopularMovies(json.results))
  }
  useEffect(()=>{
   !PopularMovies &&getPlayingMovies();
  },[])
}

export default usePopularMovies;