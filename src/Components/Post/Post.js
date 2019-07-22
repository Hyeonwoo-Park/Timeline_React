import React from 'react';
import './Post.css';
import image1 from '../../Resources/user_img.svg';

const Post = ({writer,image,body}) => (
    <div className="Post">
        <div class="writer" >
            <img src={image1}/>
            <strong>{writer}</strong>
        </div>
        <img src={image1}/>
        <div class="board-content">{body}</div>
    </div>
);

export default Post;