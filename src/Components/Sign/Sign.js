import React from 'react';

const Sign = (props) => {
    return (
        <form className = "form-signin">
            <h>ID </h>
            <input
                type= "text"
                className= "id"
                onChange= {props.onChange}
            />
            <h> Password </h>
            <input
                type= "password"
                className= "password"
                onChange= {props.onChange}
            /> 
            <button className= "header-btn" 
                    type= "button"
                    onClick= {props.signIn}>sign in</button>
        </form>
    );
};

export default Sign;