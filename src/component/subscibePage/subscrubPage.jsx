import React, {Component} from 'react'


class  SubscribePage extends Component{
constructor(props){
    super(props);
}

render(){

    return(
        <div>
            <h1>our dasboard page</h1>
            <h1>Status: {this.props.isLoginStatus} </h1>

        </div>
    )}
}

export default SubscribePage