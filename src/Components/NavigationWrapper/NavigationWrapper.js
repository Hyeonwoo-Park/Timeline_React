import React from 'react';
import './NavigationWrapper.css';

const NavigationWrapper = ({children}) =>{
    return(
        <div className = "navigationWrapper">
                {children}
        </div>
    )
}

export default NavigationWrapper;