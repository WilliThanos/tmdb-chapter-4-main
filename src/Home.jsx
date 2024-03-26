import React from "react";
import SearchWilli from "./William/SearchWilli";
import NowPlaying from "./Farrel/NowPlaying";
import MoviePopuler from "./Rizal/moviePopuler";
import TopRated from "./Vina/TopRated";
import HomenyaWilli from "./William/Hero";
import IklanLewat from "./William/Iklan";
import IklanTerbang from "./William/Iklan2";
import Footer from "./William/Footer";

const Home = () => {
  return (
    <div>
      <SearchWilli />
      <HomenyaWilli />
      <NowPlaying id="nowPlaying" />
      <IklanLewat />
      <MoviePopuler id="moviePopuler" />
      <IklanTerbang />
      <TopRated id="topRated" />
      <Footer />
      {/* Content Lain */}
    </div>
  );
};

export default Home;