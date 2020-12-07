import React from 'react'
import emailjs from 'emailjs-com';
import './otp.styles.css'

const Input_otp =()=> {
    
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
    
        <form className="otp-form" onSubmit={sendEmail}>
    
          <div className='otp-conatiner'>
          <input type="text" name="number" className='otp'/>
          <input type="text" name="number" className='otp'/>
          <input type="text" name="number" className='otp'/>
          <input type="text" name="number" className='otp'/>
          <input type="text" name="number" className='otp'/>
          <input type="text" name="number" className='otp'/>
         
          </div>

          <div className="otp-text">
              <p className="text">you'd be sent an otp soon to put in the input box</p>
          </div>

          <input type="submit" value="Book Room " className='btn'/>

          </form>
      )
}


export default Input_otp;