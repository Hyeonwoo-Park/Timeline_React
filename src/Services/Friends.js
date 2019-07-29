import axios from 'axios';

export function Blocked(id) {
    return axios.get(`/relations/list/${id}?RelationStateEnum=BLOCKED&page=0&size=5`);
}
