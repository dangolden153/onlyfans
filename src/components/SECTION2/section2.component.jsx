import React from 'react'
import pics from '../pictures/hotel-room1.jpg'
import {Link} from 'react-router-dom'

import './section2.srtyles.css'

const Section2 =()=>{

    return(

        <div className="section2-container">
            <div className="box">

        <div className="room-img-text">
        <div className="room-img">
            <img src={pics} alt="room picture"/>
        </div>
        <div className="room-text">1 Queen Bed</div>

 </div>
       

        <div className="line"></div>

        <div className="room-type">
            <div className="type-text">Standard</div>
            <div className="type-price">$58</div>
            <Link to='/data' className='type-btn'>
            <buuton className="type-btn">Book</buuton>
            </Link>
        </div>

        <div className="line"></div>

        <div className="room-type">
            <div className="type-text">Regular</div>
            <div className="type-price">$50</div>
            <Link to='/data' className='type-btn'>
            <buuton className="type-btn">Book</buuton>
            </Link>
            </div>
            </div>
        </div>
    )
}

export default Section2;