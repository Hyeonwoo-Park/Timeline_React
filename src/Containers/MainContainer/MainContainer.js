import React,{Component} from 'react';
import {NavigationContainer, PostContainer, FriendsContainer} from '..';
import {MainWrapper} from '../../Components';
import * as service from '../../Services/Sign';

class MainContainer extends Component {
    constructor(props){
        super();
        this.state = {
            id: null,
            password: null,
            token: null
        }
    }

    handleChange = (e) => {
        this.setState({
        [e.target.className]: e.target.value
        })
    }
    
    handleClick = async () =>{
        console.log("check");
        const x = await service.signIn(this.state.id,this.state.password);
        this.setState({
            token: x.data
        });
        console.log(this.state.token);
        
    }

    render(){
        return (
            <div>
                <NavigationContainer
                    onChange = {this.handleChange}
                    onClick = {this.handleClick}
                    id = {this.state.id}
                    token = {this.state.token}/>
                <MainWrapper>
                    <PostContainer
                        token = {this.state.token}/>
                    <FriendsContainer/>
                </MainWrapper>
            </div>
        )
    }
}

export default MainContainer;