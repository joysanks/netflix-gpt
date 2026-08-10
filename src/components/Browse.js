
import Header from "./Header";
// import { API_OPTIONS } from "../utils/constants";
// import { useDispatch } from "react-redux";
// import {addNowPlayingMovies} from "../utils/moviesSlice";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";

const Browse = () => {
 useNowPlayingMovies();
 usePopularMovies();

  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
