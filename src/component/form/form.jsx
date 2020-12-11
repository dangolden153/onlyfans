import React, {useState, useEffect, Component} from 'react'
import Axios from 'axios'
import {Switch, Link,Redirect  } from 'react-router-dom';


class Form extends Component{
constructor(props){
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
    this.submitHandle = this.submitHandle.bind(this);

    this.state= {
        email : "",
        password: "",
        number: "",
        message : ''
    }

    
}





    

         submitHandle =(e)=>{
            e.preventDefault()
            const {email,password,number } = this.state
            
            console.log(email, password,number)
            Axios.post("http://localhost:5000/login", {
                name: email,
                email: password,
                card: number
            })
            .then((response) => {
                alert('suceesful inserted')
                if (response.status === 200)
        {   this.props.handleSucesfulAuth(response.data)
       } 
            })
            .catch(error => console.log(error));

            
        }

     
     
         handleChange= event =>{
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
            

            
    <form onSubmit={this.submitHandle}
    style={{
            marginTop:'10rem',
            display:'flex',
            flexDirection: 'column',
            width: '50%',
            margin:' 0 auto'
        }}>   
<input 
style={{
    margin:'10px',
}}
type="text"
name= 'email'
onChange={this.handleChange}
value={this.state.email}
required
/>
<a href='#'> {
                this.state.message
            }
            </a>
<input 
style={{
    margin:'10px',
}}
type="text"
name= 'password'
onChange={this.handleChange}
value={this.state.password}
required

/>

<input 
style={{
    margin:'10px',
}}
required
type='number'
name= 'number'
onChange={this.handleChange}
value={this.state.number}

/>



<button 
// style={{
//     margin:'10px',
// }}
type="submit">send</button>

</form>  
        </div>
    )
    }
}

export default Form