import React from 'react';
import './Filter.css';

const Filter = () => {
    return (
        <div className="filter">
            <h3>Filter Options</h3>
            <button>By Category</button>
            <button>By Price</button>
            <button>By Rating</button>
        </div>
    );
};

export default Filter;