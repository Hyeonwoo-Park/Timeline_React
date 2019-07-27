import React,{Component} from 'react';
import { Sign, UserInfo, HeaderWrapper } from '../../Components';
import * as service from '../../Services/Sign';

class Header extends Component{
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
        const x = await service.signIn(this.state.id,this.state.password);
        this.setState({
            token: x.data
        });
    }

    render(){
        return (
            <HeaderWrapper>
                {
                    this.state.token ==null ?
                (<Sign
                    id= {this.state.id}
                    password= {this.state.password}
                    token={this.state.token}
                    onChange = {this.handleChange}
                    signIn = {this.handleClick}/>)
                :
                (<UserInfo
                    id= {this.state.id}
                    password= {this.state.password}
                    token={this.state.token}
                />)
                }
            </HeaderWrapper>
        )
    }
}

export default Header;