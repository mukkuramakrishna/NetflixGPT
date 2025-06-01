import Header from "./Header";
import useNowPlayMovies from "../hooks/useNowPlayMovies";
import MainConatiner from "./MainContainer/MainConatiner";
import SecondaryContainer from "./SecondaryContainer/SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import GptSearch from "./GptSearch/GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const search = useSelector((store)=>store.Gpt?.showGptSearch)
  useNowPlayMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  return (
    <>
      <div>
        <Header />
        {search ? 
        <GptSearch /> 
        :
         <>
          <MainConatiner />
          <SecondaryContainer />
        </> }
        
        
      </div>
    </>
  );
};

export default Browse;
