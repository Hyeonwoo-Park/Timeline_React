import React,{Component} from 'react';
import {NavigationContainer, PostContainer, FriendsContainer} from '..';
import {MainWrapper} from '../../Components';
import * as service from '../../Services/Sign';
import * as member from '../../Services/Member';

class MainContainer extends Component {
    constructor(props){
        super();
        this.state = {
            email: null,
            password: null,
            token: null,
            id: null
        }
    }

    handleChange = (e) => {
        this.setState({
        [e.target.className]: e.target.value
        })
    }
    
    handleClick = async () =>{
        console.log("check");
        const x = await service.signIn(this.state.email,this.state.password);
        if(x === null)
            return;
        const token = x.data;
        const y = await member.signIn(token);
        const id = y.data.id;

        this.setState({
            token,
            id
        });
        console.log(this.state.token);
        console.log(this.state.id);
        
    }

    render(){
        return (
            <div>
                <NavigationContainer
                    onChange = {this.handleChange}
                    onClick = {this.handleClick}
                    email = {this.state.email}
                    token = {this.state.token}/>
                <MainWrapper>
                    <PostContainer
                        token = {this.state.token}
                        email = {this.state.email}/>
                    <FriendsContainer
                        id = {this.state.id}/>
                </MainWrapper>
            </div>
        )
    }
}

export default MainContainer;