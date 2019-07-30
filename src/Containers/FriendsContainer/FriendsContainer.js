import React,{ Component } from 'react';
import {FriendsWrapper, FriendsList} from '../../Components';
import * as service from '../../Services/Friends';

class FriendsContainer extends Component{
    constructor(props){
        super();
        this.state = {
            blockList: [],
            followedList: [],
            followList: []
        };
    }

    fetchFriendsInfo = async (id) =>{
        console.log(id);
        if(id === null)
            return;
        const blockFriends = await service.getFriends(id,"BLOCK");
        const followedFriends = await service.getFriends(id,"FOLLOWED");
        const followFriends = await service.getFriends(id,"FOLLOW");
        
        let followedList;
        if(followedFriends.data.page.totalElements !== 0){
            followedList = followedFriends.data._embedded.memberDTOList;
        }
        let blockList;
        if(blockFriends.data.page.totalElements !== 0){
            blockList = blockFriends.data._embedded.memberDTOList;
        }
        let followList;
        if(followFriends.data.page.totalElements !== 0){
            followList = followFriends.data._embedded.memberDTOList;
        }

        this.setState({
            blockList,
            followedList,
            followList
        })
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.id !== nextProps.id) {
            this.fetchFriendsInfo(nextProps.id);
        }
      }
    render(){
        return(
            <FriendsWrapper>
                <FriendsList
                    friends = {this.state.followList}
                    relation = "Following"
                    />
                <FriendsList
                    friends = {this.state.followedList}
                    relation = "Followed"
                    />
                <FriendsList
                    friends = {this.state.blockList}
                    relation = "Block"
                    />
                
                
            </FriendsWrapper>
        );
    }
}

export default FriendsContainer;