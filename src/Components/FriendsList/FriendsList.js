import React from 'react';
import {Friend} from '../../Components';
import './FriendsList.css';

const FriendsList = (props) =>{
    
    let Friends = props.friends.map(
        (user,index)=>(
            <Friend
                friend = {user}
                button = {props.relation}
                key= {index}
            />
        )
    );

    return (
        <div className = "FriendsList">
            <strong>{props.relation}</strong>
            {Friends}
        </div>
    );
};

export default FriendsList;