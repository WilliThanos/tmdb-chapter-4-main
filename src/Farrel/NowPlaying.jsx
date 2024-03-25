import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process?.env.API_KEY;

const NowPlaying = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  // console.log(process?.env.API_KEY);

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
    <div>
      <div>Now Playing Movies</div>
      <ul>
        {nowPlayingMovies.map((movie) => (
          <li key={movie.id}>
            <div>{movie.title}</div>
            <div>{movie.release_date}</div>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt={movie.id}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NowPlaying;
