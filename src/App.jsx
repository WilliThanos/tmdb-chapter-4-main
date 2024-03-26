import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import SearchWilli from "./William/SearchWilli";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/search' element={<SearchWilli />} />
      </Routes>
    </Router>
  );
}
