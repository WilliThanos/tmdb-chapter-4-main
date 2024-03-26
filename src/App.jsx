import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Home";
import Navigation from "./William/Navbar";
import SearchWilli from "./William/SearchWilli";

export default function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={SearchWilli} />
      </Switch>
    </Router>
  );
}