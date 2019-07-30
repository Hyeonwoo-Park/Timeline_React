import axios from 'axios';

export function signIn(token) {
    return axios.get('/user',{headers:{"X-AUTH-TOKEN":token}});
}