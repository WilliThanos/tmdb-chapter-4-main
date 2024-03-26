import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdStarRate } from "react-icons/md";

const API_KEY = "94d5a1d8423851d4c5e487d3ebb00485";

const NowPlaying = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  useEffect(() => {
    fetchNowPlayingMovies();
  }, []);

  const fetchNowPlayingMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}'`,
        { headers: { accept: "application/json" } }
      );
      console.log("response.data", response.data);
      setNowPlayingMovies(response.data.results);
    } catch (error) {
      console.error("Error Fetching Data: ", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-black via-red-900 to-yellow-300 text-white">
      <div className="text-3xl text-red-600 font-bold underline mb-10">
        Now Playing Movies
      </div>
      <ul className="flex flex-col gap-20">
        {nowPlayingMovies.map((movie) => (
          <li
            key={movie.id}
            className="flex justify-center items-center flex-col"
          >
            <div>{movie.title}</div>
            <div>{movie.release_date}</div>
            <div className="w-[50%]">{movie.overview}</div>
            <div className="flex ">
              <MdStarRate size="25px" color="yellow" />
              <MdStarRate size="25px" color="yellow" />
              <MdStarRate size="25px" color="yellow" />
              <MdStarRate size="25px" color="yellow" />
              <MdStarRate size="25px" color="yellow" />
              {movie.vote_averages}
            </div>

            <img
              src={`https://image.tmdb.org/t/p/w400${movie.backdrop_path}`}
              alt={movie.id}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NowPlaying;
