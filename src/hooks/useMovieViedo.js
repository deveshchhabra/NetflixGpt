import { useDispatch, useSelector} from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addTrailerViedo } from "../utils/movieSlice";
import { useEffect } from "react";
const useMovieTrailer=()=>{
    const dispatch=useDispatch();
    const trailerVideo = useSelector((store) => store.movies.trailerVideo);

    // const [TrailerId, setTrailerId] = useState(null);
    //fetch the viedo && Updating the store
   
    const getMovieVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/823464/videos?language=en-US', API_OPTION)
        const JSON=await data.json()
    const filterData=JSON.results.filter((viedo)=>viedo.type==="Trailer")
    const trailer=filterData.length?filterData[2]:JSON.results[1];
    // setTrailerId(trailer.key)
    dispatch(addTrailerViedo(trailer));
    
    }
useEffect(()=>{
    // eslint-disable-next-line react-hooks/exhaustive-deps
   !trailerVideo && getMovieVideos();
    // eslint-disable-next-line
},[])
}

export default useMovieTrailer;