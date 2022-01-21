import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import sort from '../../icons/apps-sort.png'
import '../../styles/Filter.css';

Filter.propTypes = {
    
};

function Filter(props) {
    const [popUp, setPopUp] = useState('none');

    const handlePopUp = () => {
        if (popUp === 'none') {
            setPopUp('flex');
        } else {
            setPopUp('none');
        }
    }


    return (
        <div className='filter flex justify-end mt-10'>
            <div className="filter-logo">
                <div onClick={() => handlePopUp()} className='logo-container'>
                    <img src={sort} />
                </div>
                <ul style={ { display: popUp } } className='filter-options'>
                    <li onClick={() => handlePopUp()} id="ascending">Price - Low to High</li>
                    <li onClick={() => handlePopUp()} id="descending">Price - High to Low</li>
                    <li onClick={() => handlePopUp()} id="review">Avg.Customer Review</li>
                </ul>
            </div>
            
        </div>
    );
}

export default Filter;