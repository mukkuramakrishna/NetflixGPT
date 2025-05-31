import Header from "./Header";
import useNowPlayMovies from "../hooks/useNowPlayMovies";
import MainConatiner from "./MainContainer/MainConatiner";
import SecondaryContainer from "./SecondaryContainer/SecondaryContainer";

const Browse = () => {
  useNowPlayMovies();
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
