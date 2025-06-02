import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainConatiner = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const mainMovie = movies[0];
  const { title, overview } = mainMovie;

  return (
    <div>
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId={mainMovie.id} />
    </div>
  );
};

export default MainConatiner;
