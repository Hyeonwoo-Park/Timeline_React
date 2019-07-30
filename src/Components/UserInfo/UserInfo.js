import React from 'react';

const UserInfo = ({nickname}) => {
    return (
        <div>
            <strong>NickName : </strong>
            {nickname}
        </div>
    );
};

export default UserInfo;