import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import SearchWilli from "./William/SearchWilli";
import Search from "./William/Search";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/navbar' element={<SearchWilli />} />
        <Route exact path='/src' element={<Search />}/>
      </Routes>
    </Router>
  );
}
