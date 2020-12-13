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
<div className="expiration">

<p className="billingText">
                EXPIRATION
            </p>

<div className="formFlex">
<FormInput 
        type="text"
        name= 'email'
        label='email'
        onChange={this.handleChange}
        value={this.state.email}
        required
        smallWidth

        />

<FormInput 
        type="text"
        name= 'email'
        label='email'
        onChange={this.handleChange}
        value={this.state.email}
        required
        smallWidth

        />

<FormInput 
        type="text"
        name= 'email'
        label='email'
        onChange={this.handleChange}
        value={this.state.email}
        required
        smallWidth

        />

</div>
<div className="checkboxCont">
    <input type="checkbox" className="checkbox"/>
    <p className="detailedText checkboxText">
        Tick here to comfirm at you are at least 18 years old 
        and the age of majority in your place of residence
    </p>
</div>
</div>



        </div>







</div>

 

<button className='formBtn' type="submit">submit</button>
</form> 

<div className="onlyfansText">
OnlyFans will make a one-time charge of $0.10 when adding your payment card. The charges 
on your credit card statement will appear as "OnlyFans".
</div>

        </div>
    )
    }
}

export default Form 