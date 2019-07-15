import React from 'react';
import './Header.css';

const Header = () => (
    <div className="header-content">
        <div className="search-wrapper">
            <input  
                type="text" 
                className="search-bar"
                placeholder="검색"  
            />
            <div id="search-result-box"></div>
        </div>
    </div>
)

export default Header;