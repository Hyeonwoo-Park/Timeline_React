import axios from 'axios';

export function signIn(email,password) {
    if(email !== null && password !== null)
        return axios.post(`/login?email=${email}&password=${password}`);
    else   
        return null;
}
