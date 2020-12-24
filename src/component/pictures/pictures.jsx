import React from 'react'
import pics from '../assets/onlyfans-bg.png'
import svg from '../assets/padlock.svg'

import './pictures.css'

const Picture =()=>{

    return(
        <div className='picture'>
        <h3 className="picsText">
            63 PHOTOS
        </h3>  

        <div className="pictureImg">
            <img src={pics} alt="img phics"/>
           
            <div className="lockSvg">
            <img src={svg} alt="img phics"/>
            </div>

            
        </div>

        </div>
    )
}

export default Picture