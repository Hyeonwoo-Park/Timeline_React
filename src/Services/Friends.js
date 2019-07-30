import axios from 'axios';

export function getFriends(id,relation) {
    return axios.get(`/relations/list/${id}?RelationStateEnum=${relation}&page=0&size=5`);
}
