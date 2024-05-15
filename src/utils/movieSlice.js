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
        addTrailerViedo:(state,action)=>{
            state.trailerViedo=action.payload;
        },
    },
})
export const {addNowPlayingMovies,addTrailerViedo}=moviesSlice.actions;
export default moviesSlice.reducer;