import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../utils/store/MoviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useUpComingMovies = () => {
  const dispatch = useDispatch();

  const getUpComingMovies = async () => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        API_OPTIONS
      );
      const data = await res.json();
      dispatch(addUpComingMovies(data.results));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUpComingMovies();
  }, []);

  
};
export default useUpComingMovies;
