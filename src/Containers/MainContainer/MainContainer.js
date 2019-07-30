import React,{Component} from 'react';
import {NavigationContainer, PostContainer, FriendsContainer} from '..';
import {MainWrapper} from '../../Components';
import * as service from '../../Services/Sign';
import * as memberService from '../../Services/Member';

class MainContainer extends Component {
    constructor(props){
        super();
        this.state = {
            email: null,
            password: null,
            token: null,
            member: null
        }
    }

    handleChange = (e) => {
        this.setState({
        [e.target.className]: e.target.value
        })
    }
    
    handleClick = async () =>{
        let response;
        response = await service.signIn(this.state.email,this.state.password);
        if(response === null)
            return;
        const token = response.data;

        response = await memberService.signIn(token);
        const member = response.data;
        this.setState({
            token,
            member
        });
    }

    render(){
        return (
            <div>
                <NavigationContainer
                    onChange = {this.handleChange}
                    onClick = {this.handleClick}
                    token = {this.state.token}
                    nickname = {this.state.member === null ? null : this.state.member.nickname}/>
                <MainWrapper>
                    <PostContainer
                        token = {this.state.token}
                        id = {this.state.member === null ? null : this.state.member.id}/>
                    <FriendsContainer
                        id = {this.state.member === null ? null : this.state.member.id}/>
                </MainWrapper>
            </div>
        )
    }
}

export default MainContainer;