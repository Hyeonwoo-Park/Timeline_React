import axios from 'axios';

export function getBoard(page,writer) {
    return axios.get(`/boards/?page=${page}&size=5&writer=${writer}`);
}

export function Write(token,content){
    console.log(token);
    console.log(content);
    return axios.post('/boards',{
        "contentText": content,
        "contentImg": "string"
      },{headers:{
        "X-AUTH-TOKEN":token
    }})
    .then(response => { console.log(response) })
    .catch(response => { console.log(response) });
}