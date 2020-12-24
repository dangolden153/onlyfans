import React from 'react'
import svg from '../assets/padlock.svg'
import pics from '../assets/onlyfans-bg.png'

import './video.css'

const Video =()=>{

    return(
        <div>
<div className='picture'>
        <h3 className="picsText">
            47 VIDEOS
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

export default Video