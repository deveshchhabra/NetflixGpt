import {createSlice} from "@reduxjs/toolkit"

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        MuteGpt:false,

        movieResults:null,
    },
    reducers:{
        toggleGptSearchView:(state)=>{
            state.showGptSearch=!state.showGptSearch;
        },
        toggleMuteGpt:(state)=>{
            state.MuteGpt=!state.MuteGpt;
        },
        addMovieGptResult:(state,action)=>{
            const{movieResults}=action.payload;
            state.movieResults=movieResults;
        }
    },
})
export const {toggleGptSearchView,toggleMuteGpt,addMovieGptResult} =gptSlice.actions;
export default gptSlice.reducer; 