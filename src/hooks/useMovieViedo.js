import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addTrailerViedo } from "../utils/movieSlice";
import { useEffect } from "react";
const useMovieTrailer=(movieId)=>{
    const dispatch=useDispatch();
    const trailerVideo = useSelector((store) => store.movies.trailerVideo);

    // const [TrailerId, setTrailerId] = useState(null);
    //fetch the viedo && Updating the store
    const getMovieVideos = async () => {
        console.log(movieId)
        const data = await fetch('https://api.themoviedb.org/3/movie/823464/videos?language=en-US', API_OPTION)
        const JSON=await data.json()
        console.log(JSON)
    const filterData=JSON.results.filter((viedo)=>viedo.type==="Trailer")
    const trailer=filterData.length?filterData[0]:JSON.results[0];
    console.log(trailer);
    // setTrailerId(trailer.key)
    dispatch(addTrailerViedo(trailer));
}
useEffect(()=>{
    !trailerVideo && getMovieVideos();
},[])
}
export default useMovieTrailer;