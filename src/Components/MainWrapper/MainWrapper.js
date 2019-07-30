import React from 'react';
import './MainWrapper.css';

const MainWrapper = ({children}) => {
    return (
        <div className = "MainWrapper">
            {children}
        </div>
    );
};

export default MainWrapper;