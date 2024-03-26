import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Transition } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { useHistory } from 'react-router-dom';
import Pagination from "./Pagination";
import Navigation from "./Navbar";

const API_KEY = "94d5a1d8423851d4c5e487d3ebb00485";
const ITEMS_PER_PAGE = 9;

const SearchWilli = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const history = useHistory();

  const searchMovies = async () => {
    try {
      if (!query.trim()) {
        setShowNotification(true);
        return;
      }

      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}&include_adult=false&page=${currentPage}`,
        { header: { accept: "application/json" } }
      );
      setMovies(response.data.results);
      setShowNotification(false);
      if (history.location.pathname !== "/search") {
        history.push('/search');
      }
    } catch (err) {
      console.log("error fetching data: ", err);
    }
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      searchMovies();
    }
  };

  const totalPages = Math.ceil(movies.length / ITEMS_PER_PAGE);

  return (
    <div>
      {/* Notification */}
      <Transition
        show={showNotification}
        as={Fragment}
        enter="transform ease-out duration-300 transition"
        enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enterTo="translate-y-0 opacity-100 sm:translate-x-0"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed z-40 inset-x-0 bottom-0 flex items-center justify-center px-4 py-2 bg-red-500 text-white">
          Please input a movie name.
        </div>
      </Transition>

      {/* Navigation */}
      <Navigation />

      {/* Search Input */}
      <div className="relative flex items-center">
        <input
          id="search"
          name="search"
          className="block w-full rounded-md border-0 bg-gray-200 py-1.5 pl-10 pr-3 text-gray-400 placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:ring-0 focus:placeholder:text-gray-500 sm:text-sm sm:leading-6"
          placeholder="Search"
          type="search"
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button
          type="button"
          onClick={searchMovies}
          className="absolute inset-y-0 left-0 flex items-center px-4 text-gray-400 hover:text-white"
        >
          <span className="sr-only">Search</span>
          <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      {/* Search Results */}
      <div className="flex flex-col items-center justify-center mx-auto">
        {/* Your search results JSX */}
      </div>
      {movies.length > ITEMS_PER_PAGE && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default SearchWilli;
