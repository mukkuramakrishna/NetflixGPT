import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addmovieVideoKey } from "../utils/store/MoviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useMovieVidoes = (movieId) => {
  const disptach = useDispatch();

  const getMovieVideos = async () => {
    const moviesVideos = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await moviesVideos.json();
    const filteredVideos = json.results.filter(
      (result) => result.type === "Trailer"
    );
    const movieVideo = filteredVideos ? filteredVideos[0] : json.results[0];
    disptach(addmovieVideoKey(movieVideo.key));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieVidoes;
