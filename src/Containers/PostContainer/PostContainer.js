import React, {Component} from 'react';
import { PostWrapper, PostList, Write } from '../../Components';
import * as service from '../../Services/Board';

class PostContainer extends Component {
    constructor(props) {
        super();
        // initializes component state
        this.state = {
            fetching: false, // tells whether the request is waiting for response or not
            page:0,
            isLast: false,
            postList: [],
            content: null
        };
    }

    fetchPostInfo = async (postId) => {
        this.setState({
            fetching: true
        })
        const post = await service.getBoard(postId,3);
        console.log(post);
        const postList = this.state.postList.concat(post.data._embedded.boardReadDTOList);
        console.log(postList);
        const isLast = (postId + 1 === post.data.page.totalPages);
        this.setState({
            fetching: false,
            postList,
            isLast,
            page: postId+1,
            content: null
        });
    }

    handleScroll = () =>{
        const {innerHeight} = window;
        const {scrollHeight} = document.body;

        const scrollTop = (document.documentElement && document.documentElement.scrollTop) ||
                            document.body.scrollTop;

        if (scrollHeight - innerHeight - scrollTop <100 && this.state.fetching === false && this.state.isLast === false) {
            this.fetchPostInfo(this.state.page);
        }
    }

    handleContentChange = (e) => {
        this.setState({
            content: e.target.value
        });
    }

    handleClickSubmit = async () =>{
        await service.Write(this.props.token,this.state.content);
        this.setState({
            content: null
        });
    }

    componentDidMount() {
        this.fetchPostInfo(this.state.page);

        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }


    
    
    render() {
        return (
            <PostWrapper>
                <Write
                onChange = {this.handleContentChange}
                onClick = {this.handleClickSubmit}/>
                <PostList
                Posts={this.state.postList}/>
            </PostWrapper>
        );
    }
}

export default PostContainer;