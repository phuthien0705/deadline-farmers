import React from "react";  
import './styles/Sidebar.css';
import './styles/Searchbar.css';
import Sidebar from './components/Sidebar.js'
import Searchbar from './components/Searchbar.js'
import Products from "./components/Products";

const HomePage = () => {
  return (
    <div className="container flex space-between m-auto">
      <Sidebar></Sidebar>
      <div className="products w-3/4">
        <Searchbar></Searchbar>
        <Products></Products>
      </div>
    </div>
  )
};

export default HomePage;
