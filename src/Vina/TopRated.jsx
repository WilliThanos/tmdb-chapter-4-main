import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "1258836cba49adb1a3a6859aaf9c2aed";

const TopRated = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&sort_by=popularity.desc&with_release_type=2|3`
        );
        setTopRatedMovies([...topRatedMovies, ...response.data.results]);
      } catch (error) {
        console.error("Error fetching top rated movies: ", error);
      }
    };

    fetchTopRatedMovies();
  }, [page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <h1 className="text-center my-5 font-bold text-2xl">Top Rated Movies</h1>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {topRatedMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div className="flex justify-center my-5">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleLoadMore}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="bg-cover min-h-[250px] w-full relative">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt=""
        />
      </div>
      <div className="px-4 py-4">
        <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
        <p className="text-gray-700 mb-2">Release date: {movie.release_date}</p>
        <p className="text-gray-700">{movie.overview.slice(0, 150)}...</p>
      </div>
    </div>
  );
};

export default TopRated;
