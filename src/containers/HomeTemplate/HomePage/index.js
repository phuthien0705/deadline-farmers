import React from "react";  
import './Sidebar.css';
import cube from './icons/cube.png';
import searchViolet from './icons/search-violet.png';
import searchGray from './icons/search-gray.png';

const HomePage = () => {
  return (
    <div className="container flex space-between">
      <div className="sidebar w-1/4 h-100 p-4">
        <div className="sidebar__title">
          <h3>
            <img className="sidebar-logo" src={cube} alt="Logo" />
            Category
          </h3>
        </div>
        <ul>
          <li>All</li>
          <li>Science</li>
          <li>Business</li>
          <li>Comics</li>
          <li>Computers & Tech</li>
          <li>Cooking</li>
        </ul>
      </div>
      <div className="products w-3/4">
        <div className="search-bar">
          <input type="text" placeholder="Find your book"></input>
        </div>
      </div>
    </div>
  )
};

export default HomePage;
