import React from 'react';
import './BodyWrapper.css';

const BodyWrapper = ({children}) => {
    return (
        <div className = "BodyWrapper">
            {children}
        </div>
    );
};

export default BodyWrapper;