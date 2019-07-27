import axios from 'axios';

export function signIn(id,password) {
    return axios.post(`http://localhost:8080/api/login?email=${id}&password=${password}`);
}
