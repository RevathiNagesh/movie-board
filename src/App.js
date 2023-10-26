import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Home from "./pages/Home";
import MovieShow from "./pages/MovieShow";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie-show" element={<MovieShow />} />
          </Routes>
        <Footer />
      </div>

    </BrowserRouter>

  );
}

export default App;
