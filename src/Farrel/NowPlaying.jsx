// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const API_KEY = process?.env.API_KEY;

// const NowPlaying = () => {
//   const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
//   console.log(process?.env.API_KEY);

//   useEffect(() => {
//     fetcNowPlayingMovies();
//   }, []);

//   const fetcNowPlayingMovies = async () => {
//     try {
//       const response = await axios.get(
//         `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=EN`,
//         { headers: { accept: "application/json" } }
//       );
//       console.log("response.data", response.data);
//       setNowPlayingMovies(response.data.results);
//     } catch (error) {
//       console.error("Error Fetching Data: ", error);
//     }
//   };

//   return (
//     <div>
//       <div>Now Playing Movies</div>
//     </div>
//   );
// };

// export default NowPlaying;

import React from "react";

const API_KEY = process?.env.API_KEY;

function NowPlaying() {
  console.log(process?.env.API_KEY);
  return (
    <div>
      <div>NowPlaying</div>
      <div></div>
    </div>
  );
}

export default NowPlaying;
