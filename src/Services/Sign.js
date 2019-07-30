import axios from 'axios';

export function signIn(email,password) {
    if(email === null){
        alert("Enter your ID.");
        return null;
    }
    if(password === null){
        alert("Enter your password");
        return null;
    }
    return axios.post(`/login?email=${email}&password=${password}`).catch(function(error){
        alert("Invalid ID or Password.")
        return null;
    });
}
