import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  console.log("store",movies);
  
  return (
    <div className="bg-black">
      <div className="-mt-40 relative z-20">
        <MovieList title="Now Playing" movieList={movies?.nowPlayingMovies} />
        <MovieList title="Popular" movieList={movies?.popularMovies} />
        <MovieList title="Top Rated" movieList={movies?.topRatedMovies} />
        <MovieList title="Up Coming" movieList={movies?.upComingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;