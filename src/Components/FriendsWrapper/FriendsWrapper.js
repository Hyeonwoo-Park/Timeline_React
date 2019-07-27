import React from 'react';
import './FriendsWrapper.css';

const FriendsWrapper = ({children}) => {
    return (
        <div className = "FriendsWrapper">
            {children}
        </div>
    )
}

export default FriendsWrapper;