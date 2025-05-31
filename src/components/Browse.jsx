import Header from "./Header";
import useNowPlayMovies from "../hooks/useNowPlayMovies";
import MainConatiner from "./MainContainer/MainConatiner";
import SecondaryContainer from "./SecondaryContainer/SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";

const Browse = () => {
  useNowPlayMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  return (
    <>
      <div>
        <Header />
        <MainConatiner />
        <SecondaryContainer />
      </div>
    </>
  );
};

export default Browse;
