import Header from "./Header";
import useNowPlayMovies from "../hooks/useNowPlayMovies";

const Browse = () => {
  useNowPlayMovies();
  return (
    <>
      <Header />
      <div>Browse</div>
    </>
  );
};

export default Browse;
