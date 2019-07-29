import React,{Component} from 'react';
import {HeaderContainer, PostContainer, FriendsContainer} from '../../Containers';
import {BodyWrapper} from '../../Components';
import * as service from '../../Services/Sign';
class tmp extends Component {
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
                <HeaderContainer
                    onChange = {this.handleChange}
                    onClick = {this.handleClick}
                    id = {this.state.id}
                    token = {this.state.token}/>
                <BodyWrapper>
                    <PostContainer
                        token = {this.state.token}/>
                    <FriendsContainer/>
                </BodyWrapper>
            </div>
        )
    }
}

export default tmp;