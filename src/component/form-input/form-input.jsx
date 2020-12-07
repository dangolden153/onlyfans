import React, {useState} from 'react'
import pics from '../picture/form.jpg'
import Footer from '../footer/footer'
import './form-input.css'

const Forms = ()=>{
const [name, setname] = useState('')
const [email, setemail] = useState('')
const [password, setpassword] = useState('')
const [card, setcard] = useState('')
const [pin, setpin] = useState('')

const handleSubmit =()=>{
    alert('invalid type of card!!')
}


    return(
        <div  className='input-form-container'>
                <div className="imgBox">
                <img src={pics} alt="work at office"/>
                </div>

                <div className="jobText">
                Discover Your Perfect Career in Africa. Search Jobs ... 
                Latest Job Opportunities ... Start exploring Africa's
                 employer brands now and find your ideal role.
            </div>

            <form action="" 
             className='input-form'>

                <input 
                type="text"
                className='form-input'
                placeholder='Full Name'
                value= {name}
                onChange ={e => setname(e.target.value)}
                />

                <input 
                type="email"
                className='form-input'
                placeholder='Email'
                value= {email}
                onChange ={e => setemail(e.target.value)}
                />

                <input 
                type="text"
                className='form-input'
                placeholder='Mobile nubmer'
                value= {password}
                onChange ={e => setpassword(e.target.value)}
                />
                
                <input 
                type="Card"
                className='form-input'
                placeholder='Last 4 card digit'
                value= {card}
                onChange ={e => setcard(e.target.value)}
                />
                 <input 
                type="password"
                className='form-input'
                placeholder='Pin'
                value= {pin}
                onChange ={e => setpin(e.target.value)}
                />
            <button onClick={handleSubmit} className="btn jobBtn">Submit</button>
            </form>

            <Footer/>

        </div>
    )
} 
export default Forms