import React, { useState, Fragment } from "react";
import axios from "axios";
import { Disclosure, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Pagination from "./Pagination";
import { useNavigate } from "react-router-dom";

const API_KEY = "94d5a1d8423851d4c5e487d3ebb00485";
const ITEMS_PER_PAGE = 9;

const SearchWilli = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [open, setOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

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
    } catch (err) {
      console.log("error fetching data: ", err);
    }
  };

  const handleChange = (event) => {
    if (event?.target?.value?.length > 1) {
      navigate(`/src?query=${query}`);
    }
    setQuery(event.target.value);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
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

      {/* Rest of your component */}
      <div>
        <Disclosure as="header" className="">
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-700 lg:px-8">
            <div className="relative flex h-16 justify-between">
              {/* Navigation */}
              <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
              <nav className="hidden lg:flex lg:space-x-8 lg:py-2" aria-label="Global">
  {/* Navigation Links */}
  <ul className="flex space-x-8 py-2">
    <li className="px-3 py-2 rounded-md text-sm font-medium text-black hover:bg-gray-700 hover:text-white">
      <a href="#nowPlaying">Now Playing</a>
    </li>
    <li className="px-3 py-2 rounded-md text-sm font-medium text-black hover:bg-gray-700 hover:text-white">
      <a href="#moviePopuler">Movie Populer</a>
    </li>
    <li className="px-3 py-2 rounded-md text-sm font-medium text-black hover:bg-gray-700 hover:text-white">
      <a href="#topRated">Top Rated</a>
    </li>
  </ul>
</nav>

              </div>
              {/* Mobile Navigation */}
              <div className="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
                <div className="w-full sm:max-w-xs relative">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative flex items-center">
                    <input
                      id="search"
                      name="search"
                      className="block w-full rounded-md border-0 bg-gray-200 py-1.5 pl-10 pr-3 text-gray-400 placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:ring-0 focus:placeholder:text-gray-500 sm:text-sm sm:leading-6"
                      placeholder="Search"
                      type="search"
                      value={query}
                      onChange={handleChange}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          searchMovies();
                          navigate(`/src?query=${query}`);
                        }
                      }}
                    />
                    <button
                      type="button"
                      onClick={searchMovies}
                      className="absolute inset-y-0 left-0 flex items-center px-4 text-gray-400 hover:text-white"
                    >
                      <span className="sr-only">Search</span>
                      <MagnifyingGlassIcon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
              </div>
              {/* Mobile Menu Button */}
              <div className="relative z-10 flex items-center lg:hidden">
                <Disclosure.Button
                  className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={() => setOpen(!open)}
                >
                  <span className="sr-only">Open menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              {/* Mobile Menu */}
              <Transition
                show={open}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Disclosure.Panel
                  as="nav"
                  className="lg:hidden"
                  aria-label="Global"
                >
                  <div className="space-y-1 px-2 pb-3 pt-2">
                    {/* Navigation Links */}
                    <ul className="flex flex-col gap-2 py-2">
                      <li className="rounded-md text-sm font-medium text-white bg-gray-900 py-2 px-3">
                        Dashboard
                      </li>
                      <li className="rounded-md text-sm font-medium text-black hover:bg-gray-700 hover:text-white py-2 px-3">
                        Team
                      </li>
                      <li className="rounded-md text-sm font-medium text-black hover:bg-gray-700 hover:text-white py-2 px-3">
                        Projects
                      </li>
                      <li className="rounded-md text-sm font-medium text-black hover:bg-gray-700 hover:text-white py-2 px-3">
                        Calendar
                      </li>
                    </ul>
                  </div>
                </Disclosure.Panel>
              </Transition>
            </div>
          </div>
        </Disclosure>

        {/* Search Results */}
        <div className="flex flex-col items-center justify-center mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {movies
              .slice(
                (currentPage - 1) * ITEMS_PER_PAGE,
                currentPage * ITEMS_PER_PAGE
              )
              .map((movie) => (
                <div
                  key={movie.id}
                  className="flex flex-col gap-y-3 max-w-[300px] min-w-[200px] max-sm:min-w-[200px] shadow-md rounded-lg items-center"
                >
                  <div className="bg-cover min-h-[250px] w-full rounded-t-md flex flex-col items-center pt-5 relative">
                    <img
                      className="absolute -z-20 max-h-[250px] object-cover w-full top-0 left-0 filter blur-[3px]"
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt=""
                    />
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt={movie.title}
                      className="max-w-44 rounded-sm"
                    />
                  </div>
                  <div className="bg-white p-4 rounded-b-md">
                    <h2 className="font-bold">{movie.title}</h2>
                    <h2>Release date : {movie.release_date}</h2>
                    <p className="p-4">{movie.overview.slice(0, 150)}...</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        {movies.length > ITEMS_PER_PAGE && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};

export default SearchWilli;
