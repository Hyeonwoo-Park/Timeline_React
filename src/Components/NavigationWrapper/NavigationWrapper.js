import React from 'react';
import './NavigationWrapper.css';

const NavigationWrapper = ({children}) =>{
    return(
        <div className = "NavigationWrapper">
                {children}
        </div>
    )
}

export default NavigationWrapper;