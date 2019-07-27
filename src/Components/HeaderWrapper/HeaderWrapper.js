import React from 'react';
import './HeaderWrapper.css';

const HeaderWrapper = ({children}) =>{
    return(
        <div className = "HeaderWrapper">
                {children}
            </div>
    )
}

export default HeaderWrapper;