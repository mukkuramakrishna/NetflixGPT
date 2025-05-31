import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {  addPopularMovies, addTopRatedMovies } from "../utils/store/MoviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

 

  const getTopRatedMovies = async () => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        API_OPTIONS
      );
      const data = await res.json();
      dispatch(addTopRatedMovies(data.results));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getTopRatedMovies();
  }, []);
};
export default useTopRatedMovies;
