import React, {useState, useEffect, Component} from 'react'
import Axios from 'axios'
import FormInput from '../formInput/formInput'

import './form.css'

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
        <div className='cardContainer'>
            
            <div className="cardHeader">
                <div className="svgImg"></div>
                <p className="cardHeading">ADD CARD</p>
            </div>



    <form onSubmit={this.submitHandle} 
    className='form'
    >  

    <div className="formCont">


    <div className="formRight">

        <div className="textDetails">
            <p className="billingText">
                BILLING DETAILS
            </p>
            <p className="detailedText">
                We are fully compliant with Payment Card Industry Data 
                Security Standard
            </p>

        </div>


        <FormInput 
        type="text"
        name= 'email'
        label='email'
        onChange={this.handleChange}
        value={this.state.email}
        required
        />

<FormInput 
        type="text"
        name= 'email'
        label='email'
        onChange={this.handleChange}
        value={this.state.email}
        required
        />

<FormInput 
        type="text"
        name= 'email'
        label='email'
        onChange={this.handleChange}
        value={this.state.email}
        required
        />

<FormInput 
        type="text"
        name= 'email'
        label='email'
        onChange={this.handleChange}
        value={this.state.email}
        required
        />

<FormInput 
        type="text"
        name= 'email'
        label='email'
        onChange={this.handleChange}
        value={this.state.email}
        required
        />


        </div> 


        <div className="formleft">

        <div className="cardDetails">
            <p className="billingText">
                CARD DETAILS
            </p>
           

        </div>


<FormInput 
        type="text"
        name= 'email'
        label='email'
        onChange={this.handleChange}
        value={this.state.email}
        required
        />

<FormInput 
        type="text"
        name= 'email'
        label='email'
        onChange={this.handleChange}
        value={this.state.email}
        required
        />

<FormInput 
        type="text"
        name= 'email'
        label='email'
        onChange={this.handleChange}
        value={this.state.email}
        required
        />

<FormInput 
        type="text"
        name= 'email'
        label='email'
        onChange={this.handleChange}
        value={this.state.email}
        required
        />

<FormInput 
        type="text"
        name= 'email'
        label='email'
        onChange={this.handleChange}
        value={this.state.email}
        required
        />

        

        </div>







</div>
<button type="submit">send</button>

</form>  
        </div>
    )
    }
}

export default Form 