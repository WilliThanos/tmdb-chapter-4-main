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
      setNowPlayingMovies(response.data.results.slice(0, 8)); // Mengambil maksimal 8 film
    } catch (error) {
      console.error("Error Fetching Data: ", error);
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto grid grid-cols-3 gap-6">
      {nowPlayingMovies.map((movie) => (
        <div
          key={movie.id}
          className="group relative bg-white rounded-lg overflow-hidden shadow-md"
        >
          <img
            className="w-full h-32 object-cover object-center"
            src={`https://image.tmdb.org/t/p/w400${movie.backdrop_path}`}
            alt={movie.title}
          />
          <div className="p-4 opacity-100 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <h3 className="text-lg font-semibold text-gray-900">
              {movie.title}
            </h3>
            <p className="text-sm text-gray-500">{movie.release_date}</p>
            <p className="mt-2 text-sm text-gray-700">{movie.overview}</p>
            <div className="flex items-center mt-4">
              <span className="text-sm font-medium text-green-700 bg-green-50 inline-block px-2 py-1 rounded-full">
                {movie.vote_average}
              </span>
              <div className="flex ml-2">
                {[...Array(5)].map((_, index) => (
                  <MdStarRate
                    key={index}
                    size="20px"
                    color={index < movie.vote_average / 2 ? "yellow" : "gray"}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NowPlaying;
