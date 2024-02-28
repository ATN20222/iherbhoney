import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Header/NavBar';

import NotFound from './pages/NotFound';
import Categories from './pages/Categories';
import Products from './pages/Products';
import React from 'react';
import Favourites from './pages/Favourites';
function App() {
  return (
    <Router>
      <div className="App"> 
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/Favourites" element={<Favourites />} />
          <Route path='/products' element={<Products/>}></Route>
          <Route path='/Categories' element={<Categories/>}></Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;