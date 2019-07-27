import React, {Component} from 'react';
import { PostWrapper, PostList } from '../../Components';
import * as service from '../../Services/Board';

class PostContainer extends Component {
    constructor(props) {
        super();
        // initializes component state
        this.state = {
            fetching: false, // tells whether the request is waiting for response or not
            postList: [
                {
                    contentImg: null,
                    contentText: null,
                    createdDT: null,
                    id: 0,
                    updatedDT: null,
                    writerId: null,
                    writerImg: null,
                    writerNickName: null
                }
            ]
        };
    }

    fetchPostInfo = async (postId) => {
        const post = await service.getBoard(0,5,3);
        console.log(post);
        const postList = post.data._embedded.boardReadDTOList;
        this.setState({
            fetching: true,
            postList
        });
    }



    componentDidMount() {
        this.fetchPostInfo(3);
    }
    
    render() {
        return (
            <PostWrapper>
                <PostList
                Posts={this.state.postList}/>
            </PostWrapper>
        );
    }
}

export default PostContainer;