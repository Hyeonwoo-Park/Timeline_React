import React,{Component} from 'react';
import { Sign, UserInfo, HeaderWrapper } from '../../Components';

class HeaderContainer extends Component{
    constructor(props){
        super();
        this.state = {
            id: null,
            password: null,
            token: null
        }
    }

    render(){
        return (
            <HeaderWrapper>
                {
                    this.props.token ==null ?
                (<Sign
                    onChange = {this.props.onChange}
                    signIn = {this.props.onClick}/>)
                :
                (<UserInfo
                    id= {this.props.id}
                />)
                }
            </HeaderWrapper>
        )
    }
}

export default HeaderContainer;