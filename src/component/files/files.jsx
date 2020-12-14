import React from 'react'
import svg from '../assets/padlock.svg'
import pics from '../assets/onlyfans-bg.png'

import './files.css'
const Files =()=>{

    return(
        <div>
<div className='picture'>
        <h3 className="picsText">
            1000 POST
        </h3>  

        <div className="pictureImg">
            <img src={pics} alt="img phics"/>
           
            <div className="lockSvg">
            <img src={svg} alt="img phics"/>
            </div>

            
        </div>

        </div>
        </div>
    )
}

export default Files