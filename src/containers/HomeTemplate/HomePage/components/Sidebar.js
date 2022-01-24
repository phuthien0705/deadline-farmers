import React, { useState } from "react";
import cube from "../icons/cube.png";
import toggleButton from "../icons/angle-double-right.png"
import ReactDOM from 'react-dom'

const Sidebar = (props) => {
  const { onChoose } = props;
  const [active, setActive] = useState(false);

  console.log(props);

  function handleCategory(category) {
    onChoose(category);
  }

  function handleToggleSidebar(e) {
    var sideBar = document.getElementById("sidebar");
    var toggleButton = document.getElementById("toggle");
    if (active) {
      sideBar.setAttribute("class", "sidebar");
    } else {
      sideBar.setAttribute("class", "sidebar non-active");
    }
    setActive(!active);
  }

  return (
      <div id="sidebar" className="sidebar non-active">
        <div 
          id="toggle"
          onClick={(e) => handleToggleSidebar(e)} 
          className="toggleSidebar lg:hidden" 
        >
          <img src={toggleButton}/>
        </div>
        <div className="sidebar__title">
          <h3>
            <img className="sidebar-logo" src={cube} alt="Logo" />
            Category
          </h3>
        </div>
        <ul>
          <li onClick={() => handleCategory("")}>All</li>
          <li onClick={() => handleCategory("literature")}>Literature </li>
          <li onClick={() => handleCategory("economic")}>Economic</li>
          <li onClick={() => handleCategory("children")}>Children</li>
          <li onClick={() => handleCategory("life-skill")}>Life Skill</li>
          <li onClick={() => handleCategory("foreign-language")}>
            Foreign Language
          </li>
        </ul>
      </div>
  );
};

export default Sidebar;
