import React, {useState, useEffect, Component} from 'react'
import Axios from 'axios'
import {Switch, Link,Redirect  } from 'react-router-dom';


class Text extends Component{
constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.HandlesubmitText = this.HandlesubmitText.bind(this);

    this.state= {
        email : "",
        password: ""
    }

    
}





    

        // const submitHandle =(e)=>{
        //     e.preventDefault()
        //     setEmail('');
        //     setPassword('')
        //     console.log(email, password)
        //     Axios.post("http://localhost:5000/login", {
        //         Email: email,
        //         Password: password
        //     })
        //     .then(() => {
        //         alert('suceesful inserted')
        //     })
        //     .catch(error => console.log(error));

            
        // }
        HandlesubmitText=e=>{
            const {email,password } = this.state
            e.preventDefault()
            // this.setState({
            //     email : "",
            //     password: ""
            // })
            console.log(this.state.email, this.state.password)
            Axios.post("http://eazytender-api.herokuapp.com/auth/login",
            {email:email, password:password}
            )
            .then(response => {
              console.log( response)
              alert('suceesful inserted',)
              if (response.status === 200)
            {   this.props.handleSucesfulAuth(response.data)
                } 
                else {this.props.handleUnSucesfulAuth()}   
            })
            .catch(error =>{
                   alert('Unsucessful')
               console.log(error)});
               if (error === 200)
               {   this.props.handleUnSucesfulAuth()
                   }
            
          }
     
        handleChange = event =>{
            const {name,value} = event.target;
        
            this.setState({[name]: value})
        }
           
        
      
render(){
    return (
        <div 
        style={{
            height:'50vh',
            background:'pink',
        }}>
    <form style={{
            marginTop:'10rem'
        }}>   
<input 
type="text"
name= 'email'
onChange={this.handleChange}
value={this.state.email}

/>

<input 
type="text"
name= 'password'
onChange={this.handleChange}
value={this.state.password}

/>

<button onClick={this.HandlesubmitText}>send</button>

</form>  
        </div>
    )
    }
}

export default Text