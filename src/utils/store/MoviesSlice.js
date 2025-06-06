import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upComingMovies: null,
    movieVideoKey: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpComingMovies: (state, action) => {
      state.upComingMovies = action.payload;
    },
    addmovieVideoKey: (state, action) => {
      state.movieVideoKey = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addmovieVideoKey,
  addPopularMovies,
  addTopRatedMovies,
  addUpComingMovies,
} = movieSlice.actions;
export default movieSlice.reducer;
