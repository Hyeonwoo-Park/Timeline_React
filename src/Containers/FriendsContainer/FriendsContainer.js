import React,{ Component } from 'react';
import {FriendsWrapper, FriendsList} from '../../Components';
import * as service from '../../Services/Friends';

class FriendsContainer extends Component{
    constructor(props){
        super();
        this.state = {
            blockedList: [
                {
                    id: null,
                    nickname: null,
                    email: null,
                    profileImg: null
                }
            ]
        };
    }

    fetchFriendsInfo = async (id) =>{
        const friends = await service.Blocked(id);
        console.log(friends);
        const blockedList = friends.data._embedded.memberDTOList;
        console.log(blockedList[0].id);
        this.setState({
            blockedList
        })

        console.log(this.state.blockedList);
    }

    componentDidMount(){
        this.fetchFriendsInfo(66);
    }

    render(){
        return(
            <FriendsWrapper>
                <FriendsList
                    friends = {this.state.blockedList}
                    relation = "blocked"
                    />
            </FriendsWrapper>
        );
    }
}

export default FriendsContainer;