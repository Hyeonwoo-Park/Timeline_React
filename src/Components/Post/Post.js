import React from 'react';
import './Post.css';
import image1 from '../../Resources/user_img.svg';

const Post = ({writer,image,body}) => (
    <div className="Post">
        <div className="writer" >
            <img src={image1} alt ="writer's profile"/>
            <strong>{writer}</strong>
        </div>
        <img src={image1} alt = "content"/>
        <div className="board-content">{body}</div>
    </div>
);

export default Post;