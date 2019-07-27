import axios from 'axios';

export function getBoard(page,writer) {
    return axios.get(`http://localhost:8080/api/boards/?page=${page}&size=5&writer=${writer}`);
}
