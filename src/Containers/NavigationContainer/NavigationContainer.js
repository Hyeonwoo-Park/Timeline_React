import React,{ Component } from 'react';
import { Sign, UserInfo, NavigationWrapper } from '../../Components';

class NavigationContainer extends Component{
    constructor(props){
        super();
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
                            nickname= {this.props.nickname}
                        />)
                }
            </NavigationWrapper>
        )
    }
}

export default NavigationContainer;