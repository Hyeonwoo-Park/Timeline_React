import axios from 'axios';

export function getBoard(page,writer) {
    return axios.get(`http://localhost:8080/api/boards/?page=${page}&size=5&writer=${writer}`);
}

export function Write(token,content){
    return axios.post('http://localhost:8080/api/boards',
        {"board":{
            "contentImg": "string",
            "contentText": content
        },
        "token": token
        }).then(response => { console.log(response) }).catch(response => { console.log(response) });
}