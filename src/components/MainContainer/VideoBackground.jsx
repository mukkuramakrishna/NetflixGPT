import React from "react";
import { useSelector } from "react-redux";
import useMovieVidoes from "../../hooks/useMovieVideos";

const VideoBackground = ({ movieId }) => {
  const movieKey = useSelector((store) => store.movies?.movieVideoKey);

  useMovieVidoes(movieId);

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          movieKey +
          "?si=8HTOCfgY9156_opK" +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
