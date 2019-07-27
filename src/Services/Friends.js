import axios from 'axios';

export function Blocked(id) {
    return axios.get(`http://localhost:8080/api/relations/list/${id}?RelationStateEnum=BLOCKED&page=0&size=5`);
}
