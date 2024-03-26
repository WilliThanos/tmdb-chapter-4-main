import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdStarRate } from "react-icons/md";
import Pagination from "../William/Pagination";

const API_KEY = "94d5a1d8423851d4c5e487d3ebb00485";
const MAX_CARDS_PER_PAGE = 3;

const TopRated = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchTopRatedMovies();
  }, [currentPage]);

  const fetchTopRatedMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=${currentPage}&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}'`,
        { headers: { accept: "application/json" } }
      );
      setTopRatedMovies(response.data.results);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      console.error("Error Fetching Data: ", error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const calculateGridCols = () => {
    if (window.innerWidth >= 768) {
      return "grid-cols-3";
    } else {
      return "grid-cols-1";
    }
  };

  window.addEventListener("resize", () => {
    // Recalculate grid cols when window size changes
    setGridCols(calculateGridCols());
  });

  const [gridCols, setGridCols] = useState(calculateGridCols());

  return (
    <div className="max-w-screen-lg mx-auto mt-8 mb-8 shadow-2xl rounded-2xl">
      <div className="px-4 py-5 sm:px-6">
        <h2 className="text-3xl font-bold text-gray-900 flex flex-col items-center">Top Rated Movies</h2>
      </div>
      <div className="px-4 py-5 sm:p-6">
        <div className={`grid ${gridCols} gap-6`}>
          {topRatedMovies.map((movie, index) => {
            if (index < MAX_CARDS_PER_PAGE * currentPage && index >= MAX_CARDS_PER_PAGE * (currentPage - 1)) {
              return (
                <div
                  key={movie.id}
                  className="group relative bg-white rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                >
                  <img
                    className="w-full h-32 sm:h-48 object-cover object-center"
                    src={`https://image.tmdb.org/t/p/w400${movie.backdrop_path}`}
                    alt={movie.title}
                  />
                  <div className="p-4 opacity-100 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <h3 className="text-lg font-semibold text-gray-900">{movie.title}</h3>
                    <p className="text-sm text-gray-500">{movie.release_date}</p>
                    <p className="mt-2 text-sm text-gray-700 overflow-hidden" style={{ display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 3 }}>
                      {movie.overview}
                    </p>
                    <div className="flex items-center mt-4">
                      <span className="text-sm font-medium text-green-700 bg-green-50 inline-block px-2 py-1 rounded-full">
                        {movie.vote_average}
                      </span>
                      <div className="flex ml-2">
                        {[...Array(5)].map((_, index) => (
                          <MdStarRate key={index} size="20px" color={index < movie.vote_average / 2 ? "yellow" : "gray"} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
      <div className="py-1 ">
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    </div>
  );
};

export default TopRated;
