import React from 'react';
import './Loader.css'; // Assuming you save the CSS in this file

const Loader = () => {
    return (
      <div className='mainContainer'>
        <div className="dot-spinner">
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
        </div>
        </div> 
    );
};

export default Loader;
