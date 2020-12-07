import React from 'react'
import pics from '../pictures/2beds.jpg'
import {Link} from 'react-router-dom'
import './senction3.styles.css'

const Section3 =()=>{

    return(

        <div className="section2-container">
            <div className="box">

        <div className="room-img-text">
        <div className="room-img">
            <img src={pics} alt="room picture"/>
        </div>
       
        <div className="room-text">2 Queen Beds</div>
        <div className="room-text-2">Only 2 Rooms left</div>
 </div>
       

        <div className="line"></div>

        <div className="room-type">
            <div className="type-text">Standard</div>
            <h2 className="type-price">$65</h2>
            <Link to='/data' className='type-btn'>
            <buuton className="type-btn">Book</buuton>
            </Link>       
             </div>

        <div className="line"></div>

        <div className="room-type">
            <div className="type-text">Regular</div>
            <h2 className="type-price">$60</h2>
            <Link to='/data' className='type-btn'>
            <buuton className="type-btn">Book</buuton>
            </Link>       
             </div>
            </div>
        </div>
    )
}

export default Section3;