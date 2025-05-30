import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/store/MoviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        API_OPTIONS
      );
      const data = await res.json();
      dispatch(addNowPlayingMovies(data.results));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
export default useNowPlayMovies;
