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
                    id= {this.props.id}
                />)
                }
            </NavigationWrapper>
        )
    }
}

export default NavigationContainer;