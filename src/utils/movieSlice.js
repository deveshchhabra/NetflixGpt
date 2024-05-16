import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerViedo:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.PopularMovies=action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.TopRatedMovies=action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.UpcomingMovies=action.payload;
        },
        addTrailerViedo:(state,action)=>{
            state.trailerViedo=action.payload;
        },
    },
})
export const {addNowPlayingMovies,addTrailerViedo,addPopularMovies,addTopRatedMovies,addUpcomingMovies}=moviesSlice.actions;
export default moviesSlice.reducer;