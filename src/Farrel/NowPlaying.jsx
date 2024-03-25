import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process?.env.API_KEY;

const NowPlaying = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  //   console.log(process?.env.API_KEY);
  useEffect(() => {
    nowPlaying();
  }, []);

  const nowPlaying = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=EN`,
        { headers: { accept: "application/json" } }
      );
      console.log("response.data", response.data);
      setNowPlaying(response.data.results);
    } catch (error) {
      console.error("Error Fetching Data: ", error);
    }
  };

  return (
    <div>
      <div>index</div>;
    </div>
  );
};

export default index;
