import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies : null,
        movieVideoKey : null,
    },
    reducers :{
        addNowPlayingMovies : (state, action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addmovieVideoKey : (state, action)=>{
            state.movieVideoKey = action.payload;
        }
    }
})

export const {addNowPlayingMovies, addmovieVideoKey} = movieSlice.actions;
export default movieSlice.reducer;
