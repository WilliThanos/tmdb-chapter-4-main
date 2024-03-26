import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Search.css'; 

const API_KEY = '94d5a1d8423851d4c5e487d3ebb00485';

const HomenyaWilli = ({ setImageUrl }) => {
  useEffect(() => {

    const fetchRandomImage = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
        const movies = response.data.results;
        const randomMovie = movies[Math.floor(Math.random() * movies.length)];
        if (randomMovie.backdrop_path) {
          setImageUrl(`https://image.tmdb.org/t/p/w1280${randomMovie.backdrop_path}`);
        }
      } catch (error) {
        console.error('Error fetching random image:', error);
      }
    };

    const interval = setInterval(fetchRandomImage, 3000);

    return () => clearInterval(interval);
  }, []);

  return null;
};

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  return (
    <div className="bg-white">
      <HomenyaWilli setImageUrl={setImageUrl} />
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
        <div
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
              BREAKOUT ROOM 5
            </h1>
            
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-lg leading-8 text-gray-600">
                The Best Creation That You Ever Seen
              </p>
              <p className="text-lg leading-8 text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus vitae, eligendi neque reprehenderit enim reiciendis molestiae harum accusantium! Maxime, voluptatum?</p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <img
              src={imageUrl}
              alt=""
              className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
    </div>
  );
}
