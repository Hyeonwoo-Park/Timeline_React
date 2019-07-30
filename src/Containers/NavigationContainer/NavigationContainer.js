import React,{ Component } from 'react';
import { Sign, UserInfo, NavigationWrapper } from '../../Components';

class NavigationContainer extends Component{
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
            <NavigationWrapper>
                {
                    this.props.token ==null ?
                (<Sign
                    onChange = {this.props.onChange}
                    signIn = {this.props.onClick}/>)
                :
                (<UserInfo
                    email= {this.props.email}
                />)
                }
            </NavigationWrapper>
        )
    }
}

export default NavigationContainer;