import axios from 'axios';

export function signIn(id,password) {
    return axios.post(`/login?email=${id}&password=${password}`);
}
