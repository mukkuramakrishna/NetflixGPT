import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {  addPopularMovies } from "../utils/store/MoviesSlice";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  
  const getPopularMovies = async () => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        API_OPTIONS
      );
      const data = await res.json();
      dispatch(addPopularMovies(data.results));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getPopularMovies();
  }, []);

};
export default usePopularMovies;
