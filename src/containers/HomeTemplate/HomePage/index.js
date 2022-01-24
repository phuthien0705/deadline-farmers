import React, { useState } from "react";  
import './styles/Sidebar.css';
import './styles/Searchbar.css';
import './styles/Responsive.css';
import PostFiltersForm from './components/PostFiltersForm/index.jsx';
import Sidebar from './components/Sidebar.js';
import Products from "./components/Products";




const HomePage = () => {
  const [filters, setFilters] = useState({
    name: "",
    categories: "",
  })

  function handleFiltersChange(newFilters) {
    setFilters({...filters, name: newFilters.searchTerm});
  } 

  function handleOnChoose(category) {
    setFilters({...filters, category: category});
  }

  return (
    <div className="container flex space-between m-auto">
      <Sidebar onChoose={handleOnChoose}></Sidebar>
      <div className="products w-full lg:w-3/4">
        <PostFiltersForm onSubmit={handleFiltersChange}/>
        <Products searchFilters={filters}></Products>
      </div>
    </div>
  )
};

export default HomePage;
