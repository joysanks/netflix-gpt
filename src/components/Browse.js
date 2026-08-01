import React, { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import {addNowPlayingMovies} from "../utils/moviesSlice";

const Browse = () => {
  const dispatch = useDispatch();

  const url = "https://api.themoviedb.org/3/movie/now_playing?page=1";

  const getNowPlayingMovies = async () => {
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    console.log(json);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(()=>{
    getNowPlayingMovies();
  },[])

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
