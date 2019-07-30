import React from 'react';

const UserInfo = (props) => {
    return (
        <div>
            <strong>Email : </strong>
            {props.email}
        </div>
    );
};

export default UserInfo;