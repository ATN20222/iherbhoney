import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Header/NavBar';

import NotFound from './pages/NotFound';
import Deals from './pages/Deals';
import Products from './pages/Products/Products';
import React from 'react';
import Favourites from './pages/Favourites/Favourites.jsx';
import Footer from './components/Footer/Footer';
import Details from './pages/ProductDetails/Details.jsx';
function App() {
  // window.onscroll = () => {
  //   const navbar = document.querySelector(".navbar");
  //   const scrollPosition = window.scrollY;  
  //   if (scrollPosition > 80) {
  //     navbar.style.position = "fixed";
  //     navbar.style.width = "100%";
  //   } else {
  //     navbar.style.position = "static";
  //     navbar.style.width = "auto";
  //   }
  // };
  
  return (
    <Router>
      <div className="App"> 
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/Favourites" element={<Favourites/>} />
          <Route path='/products' element={<Products/>}></Route>
          <Route path='/Deals' element={<Products IsDeals={true} />}></Route>
          <Route path='/Details/:productId' element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;