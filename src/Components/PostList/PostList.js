import React from 'react';
import {Post} from '../index';
const PostList = ({Posts}) => {

    let list = Posts.map(
        (p, index)=>(
            <Post 
                writer = {p.writerNickName}
                image = {p.contentImg}
                body={p.contentText}
                key={index}
            />
        )
    );

    return(
        <div className="PostList">
            {list}
        </div>
    );
};

export default PostList;