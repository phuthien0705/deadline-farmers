import React from "react";
import cube from "../icons/cube.png";

const Sidebar = (props) => {
  const { onChoose } = props;

  function handleCategory(category) {
    onChoose(category);
  }

  return (
    <div className="sidebar w-1/4 h-100 p-4">
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
        <li onClick={() => handleCategory("life-skill")}>lLife Skill</li>
        <li onClick={() => handleCategory("foreign-language")}>
          Foreign Language
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
