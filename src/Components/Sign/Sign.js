import React from 'react';

const Sign = (props) => {
    return (
        <form className = "form-signin">
            <strong>Email </strong>
            <input
                type= "text"
                className= "email"
                onChange= {props.onChange}
            />
            <strong> Password </strong>
            <input
                type= "password"
                className= "password"
                onChange= {props.onChange}
            />&nbsp; &nbsp;
            <button className= "navigationButton" 
                    type= "button"
                    onClick= {props.signIn}>sign in</button>
        </form>
    );
};

export default Sign;