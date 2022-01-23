import React from "react";  
import './styles/Sidebar.css';
import './styles/Searchbar.css';
import PostFiltersForm from './components/PostFiltersForm/index.jsx';
import Sidebar from './components/Sidebar.js';
import Products from "./components/Products";



const HomePage = () => {
  function handleFiltersChange(newFilters) {
    console.log('new filters', newFilters);
  } 

  return (
    <div className="container flex space-between m-auto">
      <Sidebar></Sidebar>
      <div className="products w-3/4">
        <PostFiltersForm onSubmit={handleFiltersChange}/>
        <Products></Products>
      </div>
    </div>
  )
};

export default HomePage;
