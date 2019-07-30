import React, {Component} from 'react';
import { PostWrapper, PostList, Write } from '../../Components';
import * as service from '../../Services/Board';

class PostContainer extends Component {
    constructor(props) {
        super();
        // initializes component state
        this.state = {
            page:0,
            isLast: false,
            postList: [],
            content: null
        };
    }

    fetchPostInfo = async (pageNum,writer) => {
        this.setState({
            fetching: true
        })
        const post = await service.getBoard(pageNum,writer);
        console.log(post);
        const postList = this.state.postList.concat(post.data._embedded.boardReadDTOList);
        console.log(postList);
        const isLast = (pageNum + 1 === post.data.page.totalPages);
        this.setState({
            fetching: false,
            postList,
            isLast,
            page: pageNum+1,
            content: null
        });
    }

    handleScroll = () =>{
        const {innerHeight} = window;
        const {scrollHeight} = document.body;

        const scrollTop = (document.documentElement && document.documentElement.scrollTop) ||
                            document.body.scrollTop;

        if (scrollHeight - innerHeight - scrollTop <100 && this.state.fetching === false && this.state.isLast === false) {
            this.fetchPostInfo(this.state.page,this.props.id);
        }
    }

    handleContentChange = (e) => {
        this.setState({
            content: e.target.value
        });
    }

    handleClickSubmit = async () =>{
        await service.write(this.props.token,this.state.content);
        this.setState({
            content: null
        });
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.id !== nextProps.id) {
            console.log(nextProps);
            this.fetchPostInfo(this.state.page,nextProps.id);
        }
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }


    
    
    render() {
        return (
            <PostWrapper>
                <Write
                content = {this.state.content}
                onChange = {this.handleContentChange}
                onClick = {this.handleClickSubmit}
                />
                <PostList
                Posts={this.state.postList}/>
            </PostWrapper>
        );
    }
}

export default PostContainer;