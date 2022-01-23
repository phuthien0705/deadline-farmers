import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import sort from '../../icons/apps-sort.png'
import '../../styles/Filter.css';

Filter.propTypes = {
    
};

function Filter(props) {
    const { onSortChange } = props;
    const [popUp, setPopUp] = useState('none');

    const handlePopUp = () => {
        if (popUp === 'none') {
            setPopUp('flex');
        } else {
            setPopUp('none');
        }
    }

    const handleSort = (option) => {
        if (onSortChange) {
            onSortChange(option);
        }
    }


    return (
        <div className='filter flex justify-end mt-10'>
            <div onClick={() => handlePopUp()} className="filter-logo">
                <div className='logo-container'>
                    <img src={sort} />
                </div>
                <ul style={ { display: popUp } } className='filter-options'>
                    <li onClick={() => handleSort('asc')}>Price - Low to High</li>
                    <li onClick={() => handleSort('desc')}>Price - High to Low</li>
                </ul>
            </div>
            
        </div>
    );
}

export default Filter;