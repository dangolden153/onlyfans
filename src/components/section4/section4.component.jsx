import React from 'react'
import pics from '../pictures/2beds.jpg'
import {Link} from 'react-router-dom'
import './section4.styles.css'

const Section4 =()=>{

    return(

        <div className="section2-container">
            <div className="box">

        <div className="room-img-text">
        <div className="room-img">
            <img src={pics} alt="room picture"/>
        </div>
       
        <div className="room-text">2 Queen Beds </div>
        <span className='quality'>Prenium,Mini Fridge <br/>USD</span>
        <div className="room-text-2">Only 1 Room left</div>
 </div>
       

        <div className="line"></div>

        <div className="room-type">
            <div className="type-text">Standard</div>
            <h2 className="type-price">$68</h2>
            <Link to='/data' className='type-btn'>
            <buuton className="type-btn">Book</buuton>
            </Link>   
            </div>

        <div className="line"></div>

        <div className="room-type">
            <div className="type-text">Regular</div>
            <h2 className="type-price">$58</h2>
            <Link to='/data' className='type-btn'>
            <buuton className="type-btn">Book</buuton>
            </Link>       
             </div>
            </div>
        </div>
    )
}

export default Section4;