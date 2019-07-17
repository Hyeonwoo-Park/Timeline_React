import React, {Component} from 'react';
import { PostWrapper, Post } from '../../Components';

class PostContainer extends Component {
    render() {
        return (
            <PostWrapper>
                <Post/>
            </PostWrapper>
        );
    }
}

export default PostContainer;