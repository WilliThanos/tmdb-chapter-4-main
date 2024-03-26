import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "../William/Pagination";

const API_KEY = "c031317917e2399db20c8146bfb4fa9d";
const MAX_CARDS_PER_PAGE = 6;

export default function MoviePopuler() {
  const [data, setData] = useState([]);
  const [setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchMoviePopuler();
  }, [currentPage]); // Fetch movies whenever currentPage changes

  const fetchMoviePopuler = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      );
      console.log("response.data", response.data);
      setData(response.data.results);
      setTotalPages(response.data.total_pages);
      setLoading(false);
    } catch (error) {
      console.error("Error Fetching Data: ", error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="max-w-screen-lg mx-auto mt-8 mb-8 shadow-2xl rounded-2xl">
      <div className="px-4 py-5 sm:px-6">
        <h2 className="text-3xl font-bold text-gray-900 flex flex-col items-center">Popular Movies</h2>
      </div>
      <div className="px-4 py-5 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {data
            .slice((currentPage - 1) * MAX_CARDS_PER_PAGE, currentPage * MAX_CARDS_PER_PAGE)
            .map((movie) => (
              <div
                key={movie.id}
                className="group relative bg-white rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:scale-105"
              >
                <img
                  className="w-full h-32 sm:h-48 object-cover object-center"
                  src={`https://image.tmdb.org/t/p/w400${movie.backdrop_path}`}
                  alt={movie.title}
                />
                <div className="p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out absolute inset-0 flex justify-center items-center bg-black bg-opacity-75 rounded-lg">
                  <p className="text-white text-center">{movie.overview}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="py-1 ">
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    </div>
  );
}
