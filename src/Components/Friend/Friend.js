import React from 'react';
import image1 from '../../Resources/user_img.svg';
import './Friend.css';

const Friend = (props)=>{
    return(
        <div className = "friend">    
            <img src={props.friend.profileImg ==="none" 
                ? image1 : props.friend.profileImg }  alt = "friend's profile"/>
            <strong>{props.friend.nickname}</strong>
            <button>{props.button}</button>
        </div>
    );
};

export default Friend;