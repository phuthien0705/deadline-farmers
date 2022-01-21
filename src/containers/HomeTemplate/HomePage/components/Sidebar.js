import React from 'react'
import cube from '../icons/cube.png';

const Sidebar = () => {
    return (
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
    )
}

export default Sidebar;