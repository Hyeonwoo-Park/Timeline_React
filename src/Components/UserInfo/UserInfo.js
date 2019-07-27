import React from 'react';

const UserInfo = (props) => {
    return (
        <div>
            <h>ID : </h>
            {props.id}
            <h>Password : </h>
            {props.password}
            <h>Token : </h>
            {props.token}
        </div>
    );
};

export default UserInfo;