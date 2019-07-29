import React from 'react';

const UserInfo = (props) => {
    return (
        <div>
            <h>ID : </h>
            {props.id}
        </div>
    );
};

export default UserInfo;