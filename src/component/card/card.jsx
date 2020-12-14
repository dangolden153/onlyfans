import React, {Component} from 'react'
import Form from '../form/form'

class Card extends Component {
    constructor(props){
        super(props);

        this.handleSucesfulAuth = this.handleSucesfulAuth.bind(this)
    }

    handleSucesfulAuth(data){
        //redirect the user
        this.props.handleLogin(data)
        this.props.history.push('/sub') 
    }
 
   
    render (){

        return(
            <div>
                <Form handleSucesfulAuth={this.handleSucesfulAuth} />
            </div>
        )
    }
}

export default Card