import React, {useState, useEffect, Component} from 'react'
import Axios from 'axios'
import FormInput from '../formInput/formInput'
import arrow from '../assets/left-arrow.svg'
import {Link} from 'react-router-dom'

import './form.css'

class Form extends Component{
constructor(props){
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
    this.submitHandle = this.submitHandle.bind(this);

    this.state= {
        street : "",
        city: "",
        province: "",
        zip : '',
        country : "",        
        email: "",
        name: "",
        number: "",
        month : '',
        year : "",
        cvv: "",
        
    } 

    
}





    

         submitHandle =(e)=>{
            e.preventDefault()
            const {cvv,year,month,name,email,country,
                zip,street,city,number,province, } = this.state            
            console.log(email,number)
            Axios.post("http://localhost:5000/login", {
                
                street : street,
                city: city,
                province: province,
                zip : zip,
                country :country,        
                email: email,
                name: name,
                number: number,
                month : month,
                year : year,
                cvv: cvv,
                
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
                <Link to='/'
                className='cardLink'
                > 
                <div
                style={{
                    backgroundImage: `url(${arrow})`
                }}
                 className="svgArrow"/>
                 </Link>
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
        name= 'street'
        label='Street'
        onChange={this.handleChange}
        value={this.state.street}
        required
        />

<FormInput 
        type="text"
        name= 'city'
        label='City'
        onChange={this.handleChange}
        value={this.state.city}
        required
        />

<FormInput 
        type="text"
        name= 'province'
        label='State / Province'
        onChange={this.handleChange}
        value={this.state.province}
        required
        />

<FormInput 
        type="text"
        name= 'zip'
        label='Zip / Postal Code'
        onChange={this.handleChange}
        value={this.state.zip}
        required
        />

<FormInput 
        type="text"
        name= 'country'
        label='Country'
        onChange={this.handleChange}
        value={this.state.country}
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
        label='Email'
        onChange={this.handleChange}
        value={this.state.email}
        required

        />

<FormInput 
        type="text"
        name= 'name'
        label='Name on the Card'
        onChange={this.handleChange}
        value={this.state.name}
        required
        />

        
<FormInput 
        type="text"
        name= 'number'
        label='Card Number'
        onChange={this.handleChange}
        value={this.state.number}
        required
        />
<div className="expiration">

<p className="billingText">
                EXPIRATION
            </p>

<div className="formFlex">
<FormInput 
        type="text"
        name= 'month'
        label='MM'
        onChange={this.handleChange}
        value={this.state.month}
        required
        smallWidth

        />

<FormInput 
        type="text"
        name= 'year'
        label='YYYY'
        onChange={this.handleChange}
        value={this.state.year}
        required
        smallWidth

        />

<FormInput 
        type="text"
        name= 'cvv'
        label='CVC'
        onChange={this.handleChange}
        value={this.state.cvv}
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