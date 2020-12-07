import React, {Component} from 'react'
import Text from '../component/text'

class HomePage extends Component {
    constructor(props){
        super(props);

        this.handleSucesfulAuth = this.handleSucesfulAuth.bind(this)
        this.handleUnSucesfulAuth = this.handleUnSucesfulAuth.bind(this)
    }

    handleSucesfulAuth(data){
        //redirect the user
        this.props.handleLogin(data)
        this.props.history.push('/dasboard')
    }

    handleUnSucesfulAuth(){
        this.props.history.push('/home')

    }
    render (){

        return(
            <div>
                <h1>THIS IS OUR HOME PAGE</h1>
                <h1>Status :{this.props.isLoginStatus}  </h1> 
                <Text handleSucesfulAuth={this.handleSucesfulAuth} />
            </div>
        )
    }
}

export default HomePage