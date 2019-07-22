import axios from 'axios';

export function getBoard(page,size,writer) {
    return axios.get(`http://localhost:8080/api/boards/?page=${page}&size=${size}&writer=${writer}`);
}
