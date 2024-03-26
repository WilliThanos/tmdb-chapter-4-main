import React, { useEffect, useState } from "react";

const API_KEY = "c031317917e2399db20c8146bfb4fa9d";

export default function MoviePopuler() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchMoviePopuler() {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error("Failed to Fetch Data");
      }
      const responseData = await response.json();
      console.log("Data received with Async/Await:", responseData);
      setData(responseData.results);
      setLoading(false); // Set loading to false after receiving data
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  useEffect(() => {
    fetchMoviePopuler();
  }, []);

  return (
    <div className="container mx-auto">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="  bg-gradient-to-t from-blue-800  to-black">
          <div className="flex justify-between bg-black p-5 shadow-md shadow-white">
            <div className="font-bold text-2xl text-white">Movie Area</div>
            <div className="flex justify-center text-white">
              <a
                href=""
                className="pr-5 text-xl font-semibold hover:text-white hover:bg-[#ffd230] px-2 py-1 rounded-full transition-colors duration-300 flex justify-center items-center"
              >
                Home
              </a>
              <a
                href="#"
                className="pr-5 text-xl font-semibold hover:text-white hover:bg-[#ffd230] px-2 py-1 rounded-full transition-colors duration-300"
              >
                Movie Popular
              </a>
              <a
                href=""
                className="pr-5 text-xl font-semibold hover:text-white hover:bg-[#ffd230] px-2 py-1 rounded-full transition-colors duration-300"
              >
                Now Playing
              </a>
            </div>
          </div>
          <p className="text-5xl font-bold flex justify-center p-5 text-white">
            Movie Popular
          </p>
          <div className="grid grid-cols-4 gap-5 py-5 px-5">
            {data.map((movie) => (
              <div
                key={movie.id}
                className="relative bg-white shadow-xl rounded-xl "
              >
                <div className="flex justify-center items-center">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                    className="rounded-xl shadow-md"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-2xl font-bold flex justify-center py-2">
                    {movie.title}
                  </h2>
                  <h2 className="text-xl flex justify-center">
                    {"Tanggal Rilis : " + " "}
                    {movie.release_date}
                  </h2>
                  <p className="text-xl text-justify py-2 ">{movie.overview}</p>
                  <div className="py-10"></div>
                  <div className="absolute right-0 bottom-0 mb-4 mr-4 ">
                    <button className=" bg-[#ffd230] text-xl py-2 px-4 border rounded-md hover:bg-blue-500 hover:text-white transition-colors duration-300">
                      Detail Film
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
