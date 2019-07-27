import React from 'react';

const Sign = (props) => {
    return (
        <form className = "form-signin">
            <strong>ID </strong>
            <input
                type= "text"
                className= "id"
                onChange= {props.onChange}
            />
            <strong> Password </strong>
            <input
                type= "password"
                className= "password"
                onChange= {props.onChange}
            />&nbsp; &nbsp;
            <button className= "header-btn" 
                    type= "button"
                    onClick= {props.signIn}>sign in</button>
        </form>
    );
};

export default Sign;