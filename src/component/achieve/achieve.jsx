import React from 'react'
import pics from '../assets/onlyfans-bg.png'
import svg from '../assets/padlock.svg'
import './achieve.css'

const Achieve =()=>{

    return(
        <div>

<div className='picture'>
        <h3 className="picsText">
            7 ARCHIEVED POSTS
        </h3>  

        <div className="pictureImg">
            <img src={pics} alt="img phics"/>
           
            <div className="lockSvg">
            <img src={svg} alt="img phics"/>
            </div>

        
        </div>

        </div>        </div>
    )
}

export default Achieve