import React from "react";
import SearchWilli from "./William/SearchWilli";
import NowPlaying from "./Farrel/NowPlaying";
import MoviePopuler from "./Rizal/moviePopuler";
import TopRated from "./Vina/TopRated";

const Home = () => {
  return (
    <div>
      <SearchWilli />
      <NowPlaying />
      <MoviePopuler />
      <TopRated />
      {/* Content Lain */}
    </div>
  );
};

export default Home;


